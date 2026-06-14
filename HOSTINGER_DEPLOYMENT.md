# Hostinger Deployment

This repo uses two branches:

- `main`: Bragg Creek Rum source files.
- `hostinger-build`: built website files that Hostinger should deploy.

## Connect Hostinger

1. Open Hostinger hPanel.
2. Go to Websites, choose `darkrum.ca`, then open its Dashboard.
3. Go to Advanced, then Git.
4. Choose Continue with GitHub and authorize Hostinger for the repository.
5. Select repository: `DARKEKVN/bragg-creek-rum`.
6. Select branch: `hostinger-build`.
7. Deploy to root directory: `public_html`.
8. Leave the source/root folder as the branch root if Hostinger asks for it. The `hostinger-build` branch already contains the built files at its root.
9. Deploy, then keep auto-deployment enabled.

## How Future Changes Deploy

1. Make changes on `main`.
2. Commit and push `main`.
3. Run:

   ```sh
   npm run deploy:hostinger
   ```

4. The deploy command runs `npm run build`.
5. The deploy command force-updates `hostinger-build` with the contents of `dist`.
6. Hostinger auto-deploys `hostinger-build` once Git deployment is connected.

## If Hostinger Does Not Update

1. Run `npm run deploy:hostinger` again and confirm it pushes `hostinger-build`.
2. Confirm the `hostinger-build` branch has a fresh commit.
3. In Hostinger hPanel, go to Advanced, Git, then run Redeploy.

## Ownership Note

The repo transfer to `DARKKEVN` was requested from GitHub, but it still needs acceptance by the receiving account before the repo URL changes. Until that transfer is accepted, Hostinger should connect to `DARKEKVN/bragg-creek-rum`.
