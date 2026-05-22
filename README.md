# deployment-test

Minimal React 18 + Vite + TypeScript app for testing [dFlow](https://dflow.sh) deployments. Built from the official `frontend/react-vite` starter (`dflow.template.json`).

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview -- --host 0.0.0.0 --port 4173
```

## Deploy on dFlow

1. Connect this GitHub repo in dFlow ([GitHub integration](https://docs.dflow.sh/articles/7377791-github-integration)).
2. Use manifest commands from `dflow.template.json`: `npm install`, `npm run build`, static output `dist/`.
3. Runtime: `npm start` (vite preview on `PORT`).
