# PRODUCTION DEPLOYMENT GUIDE
## Hassan Dental Website

This guide provides step-by-step deployment instructions for hosting the **Hassan Dental** production build on any modern cloud hosting provider.

---

## 1. Build Verification
Before deploying, always execute a clean production build:
```bash
npm run build
```
This outputs all compiled bundles and prerendered HTML routes to the `dist/` directory.

---

## 2. Deployment Options

### Option A: Netlify (Recommended)
1. Link your Git repository to **Netlify**.
2. Configure build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. A `public/_redirects` file is included in this repository. Netlify automatically copies it to `dist/`, ensuring that direct visits to any route (e.g., `/appointment`) or page reloads resolve cleanly.

### Option B: Vercel
1. Import your Git repository in **Vercel**.
2. Set Framework Preset: **Vite**.
3. Build Settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. A `vercel.json` rewrite configuration is provided in the root directory to handle SPA fallback and clean URLs.

### Option C: GitHub Pages
1. Build the production folder:
   ```bash
   npm run build
   ```
2. You can use the `gh-pages` package:
   ```bash
   npx gh-pages -d dist
   ```
3. Or configure a GitHub Actions workflow (`.github/workflows/deploy.yml`) to run on push to `main`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Option D: Traditional Web Servers (Nginx / Apache)

#### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name hassandental.com www.hassandental.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name hassandental.com www.hassandental.com;
    root /var/www/hassan-dental/dist;
    index index.html;

    # SSL Certificates
    ssl_certificate /etc/letsencrypt/live/hassandental.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hassandental.com/privkey.pem;

    # Gzip & Brotli compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;

    # Static Assets Long-Term Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform, immutable";
    }

    # Route Handling & SPA Fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache `.htaccess` Configuration:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 3. Post-Deployment Verification Checklist

- [ ] Confirm homepage loads over HTTPS with SSL padlock.
- [ ] Test language switch button (Arabic <-> English). Verify layout flips RTL/LTR smoothly.
- [ ] Test the WhatsApp booking form on `/appointment`: ensure WhatsApp opens with prefilled text and patient details.
- [ ] Direct test of prerendered routes: `https://your-domain.com/services` and `https://your-domain.com/about` should load instantly without 404s.
- [ ] Verify `https://your-domain.com/sitemap.xml` and `https://your-domain.com/robots.txt` return HTTP 200.
- [ ] Submit sitemap in Google Search Console.
