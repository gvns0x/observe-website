# Observe

Website for meditation WatchOS app, observe.

Inspired by Vipassana.

## Develop

```bash
npm install
npm run dev
```

## Deploy & PR previews (Netlify)

This site deploys on [Netlify](https://www.netlify.com/). Build settings live in [`netlify.toml`](netlify.toml) (`npm run build` → `dist/`).

### One-time setup

1. Log into [Netlify](https://app.netlify.com) and choose **Add new site → Import an existing project**.
2. Authorize GitHub and select this repository.
3. Confirm build settings match `netlify.toml` (build command `npm run build`, publish directory `dist`).
4. Deploy. Production tracks the default branch (`main`).
5. Confirm **Deploy Previews** are enabled: Site configuration → Build & deploy → Deploy contexts (on by default for PRs).
6. Ensure the Netlify GitHub App can comment on PRs (granted during connect).

### After setup

Every open or updated PR gets a Deploy Preview URL (e.g. `https://deploy-preview-42--<site>.netlify.app`) posted as a Netlify bot comment on the PR. Merging to `main` updates production.
