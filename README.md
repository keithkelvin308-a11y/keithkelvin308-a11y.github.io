# Keith Kelvin Kithinji: Portfolio Website

A static personal portfolio: plain HTML, CSS and a little JavaScript. There is **no build step**, so it runs on GitHub Pages exactly as it is.

```
index.html                     page content (all sections)
style.css                      styles: mobile-first, dark/light theme
script.js                      theme toggle, mobile menu, footer year
.nojekyll                      tells GitHub Pages to serve files as they are
assets/Keith_Kithinji_CV.pdf   CV linked from the "Download CV" buttons
assets/favicon.svg             site icon
assets/img/                    project screenshots (.webp + .jpg fallback)
```

## Before you publish

All links are filled in. To publish, the GitHub repository must be named exactly `keithkelvin308-a11y.github.io`; the site will then be live at https://keithkelvin308-a11y.github.io.

To preview locally, open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

---

## Option A: Deploy with the GitHub web UI (no software needed)

A *user site* is served at `https://USERNAME.github.io`. The repository **must** be named exactly `USERNAME.github.io`.

1. Sign in at https://github.com and note your username (e.g. `keithkithinji`).
2. Click **+ → New repository**.
   - Repository name: `USERNAME.github.io` (for example `keithkithinji.github.io`)
   - Visibility: **Public** (GitHub Pages on a free account needs a public repository)
   - Leave "Add a README" unticked. Click **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
4. Unzip `keith-portfolio-site.zip` on your computer. Open the unzipped folder, select **everything inside it** (`index.html`, `style.css`, `script.js`, `README.md`, `.nojekyll` and the `assets` folder) and drag it into the browser window.
   - `index.html` must be at the **top level** of the repository, not inside a sub-folder.
   - `.nojekyll` is a hidden file. If you can't see it, show hidden files (Windows: *View → Show → Hidden items*; macOS: `Cmd + Shift + .`). The site still works without it.
5. Add a commit message such as `Publish portfolio`, then click **Commit changes**.
6. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main`**, **Folder: `/ (root)`**, then click **Save**. User-site repositories usually have this turned on already.
7. Wait 1–2 minutes and open `https://USERNAME.github.io`. Progress shows under the **Actions** tab.
8. To update the site later, open a file on GitHub, click the pencil icon, edit it and commit. To replace a file (such as the CV PDF), go to **Add file → Upload files** and upload the new version with the same name.

## Option B: Deploy from PyCharm

PyCharm (Community or Professional) has Git and GitHub support built in.

1. **Install Git** if you don't have it: https://git-scm.com/downloads. In PyCharm, check **Settings → Version Control → Git → Test**.
2. **Connect GitHub:** open **Settings → Version Control → GitHub → + → Log In via GitHub…** and authorise in your browser.
3. **Open the site:** unzip `keith-portfolio-site.zip`, then go to **File → Open** and choose the unzipped folder (the one that contains `index.html`).
4. **Preview it:** right-click `index.html` → **Open In → Browser** (or use the browser icons in the top-right of the editor).
5. **Share on GitHub:** choose **Git → GitHub → Share Project on GitHub** (on older versions: **VCS → Share Project on GitHub**).
   - Repository name: `USERNAME.github.io`
   - Untick **Private**
   - Click **Share**, keep all files ticked (including `assets/` and `.nojekyll`) in the dialog, and enter a commit message such as `Publish portfolio`.
   PyCharm creates the repository, commits and pushes in one step.
6. **Turn on Pages:** on GitHub, open the repository → **Settings → Pages** → Source **Deploy from a branch**, Branch **`main`** (or `master`, whichever PyCharm pushed), Folder **`/ (root)`** → **Save**.
7. Open `https://USERNAME.github.io` after 1–2 minutes.
8. **Updates:** edit the files in PyCharm, then use **Git → Commit…** (`Ctrl+K`), tick the changed files, write a message and click **Commit and Push** (`Ctrl+Alt+K` / `Cmd+Option+K` to push separately).

**If you already have a repository called `USERNAME.github.io`:** clone it instead with **File → New → Project from Version Control**, copy these files into it, then commit and push.

### Troubleshooting

- **404 page:** check that the repository name matches your username exactly, that `index.html` is at the top level, and that Pages is set to the right branch and `/ (root)`.
- **Old version showing:** hard-refresh the page (`Ctrl+F5`) or wait a minute. Check the **Actions** tab for a finished deployment.
- **Images or CV missing:** file names on GitHub Pages are case-sensitive. Keep the names exactly as they are in `assets/`.

## Notes

- Project screenshots use sample or test data only. In the AFH Manager images, the browser bar, taskbar and facility name were removed or blurred. Don't replace them with unredacted screenshots.
- The theme follows the visitor's system setting; the toggle button overrides it and remembers the choice.
