# How to Deploy Your Website

Your website is built with **Vite**, which ensures it is highly optimized for production. Here are the simplest ways to put it online for the public to view.

## Option 1: Netlify (Simplest & Free)

Netlify is the easiest way to host static sites like this one.

1. **Locate the Build Folder**:

   - In your project folder (`Raj Immigration`), you will see a folder named `dist` (created after running the build command).
   - _Note: If you don't see it, run `npm run build` in your terminal._

2. **Upload**:

   - Go to [Netlify Drop](https://app.netlify.com/drop).
   - Drag and drop the `dist` folder onto the page area that says "Drag and drop your site folder here".

3. **Done!**:
   - Netlify will instantly generate a public URL for you (e.g., `silly-name-12345.netlify.app`).
   - You can change this name or connect your own domain (like `rajimmigration.com`) in the site settings.

## Option 2: Vercel (Professional & Free)

Vercel is another excellent option, widely used by professional developers.

1. **Install Vercel CLI** (Optional but recommended):

   - Run: `npm i -g vercel`

2. **Deploy via Command Line**:
   - Run: `vercel` inside your project folder.
   - Follow the prompts (Keep hitting `Enter` to accept defaults).
   - It will automatically detect Vite settings and deploy.

## Option 3: Traditional Hosting (cPanel/GoDaddy)

If you already have a hosting plan:

1. **Upload Files**:
   - Take all the files **inside** the `dist` folder.
   - Upload them to the `public_html` folder of your hosting provider using an FTP client (like FileZilla) or their File Manager.

---

### Making Changes

Whenever you edit code (`index.html`, `style.css`, etc.):

1. Run `npm run build` again to update the `dist` folder.
2. Re-upload the `dist` folder content to your host.
