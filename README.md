# Hono getting started

This is a basic Hono template already set up for local development and deployment to AWS Lambda.

## Installation

```bash
pnpm install
```

## Update API logic

Entrypoint: `src/api/app.ts`

## Local Development

To run as a local API server, run

```bash
pnpm dev
```

## Deployment

To deploy to AWS lambda:

1. Update the CORs param `allowedOrigin` in `src/harness/nodejs.ts`.
2. Create new lambda function with `Node.js 20.x` as the Runtime and your desired function name.
3. Update `FUNCTION_NAME` in `package.json`'s `scripts.update`.
4. Update `PROFILE` in `package.json`'s `scripts.update` to use a non-default profile.
5. Run
   ```bash
   pnpm aws
   ```
