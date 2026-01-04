# How to Deploy Your Website

## Option 1: GitHub + Netlify (Recommended)

This is the best method. Whenever you save a change to your code and push it to GitHub, your live website will update automatically.

### Phase 1: Push Code to GitHub

1.  **Create a Repo**: Go to [GitHub.com](https://github.com/new) and create a new repository name `raj-immigration`. Do **not** check "Add README" or "Add .gitignore" (we already have them).
2.  **Push your code**:
    I have already initialized git and committed your files locally. You just need to run these commands in your terminal (replace `YOUR-USERNAME` with your actual GitHub username):
    ```bash
    git branch -m main
    git remote add origin https://github.com/YOUR-USERNAME/raj-immigration.git
    git push -u origin main
    ```

### Phase 2: Connect to Netlify

1.  Log in to [Netlify](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import from an existing project"**.
3.  Click **"GitHub"** and authorize it.
4.  Search for your `raj-immigration` repo and select it.
5.  **Configure Build Settings** (Netlify usually detects these automatically):
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
6.  Click **"Deploy Site"**.

🎉 **Success!** Your site is now live.

### How to Update

1.  Make changes to your code.
2.  Run these commands in your terminal:
    ```bash
    git add .
    git commit -m "Description of your changes"
    git push
    ```
3.  Netlify will detect the push and automatically re-deploy your site.

---

## Option 2: Netlify Drop (Simple / Manual)

Good for a quick test without using GitHub.

1.  Run `npm run build` in your terminal.
2.  Go to [Netlify Drop](https://app.netlify.com/drop).
3.  Drag and drop the `dist` folder onto the page.
