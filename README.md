# Hono getting started

This is a basic Hono template already set up for local development and deployment to AWS Lambda.

## Installation

```bash
pnpm install
```

## Update API logic

Entrypoint: `src/app.ts`

## Local Development

To run as a local API server, run

```bash
pnpm dev
```

## Deployment

(Assumes the account associated with your AWS CLI's default profile is the one you want to deploy to.)

To deploy to AWS lambda:

1. Create new lambda function with `Node.js 20.x` as the Runtime and your desired function name.
2. Update `FUNCTION_NAME` in `package.json`'s `scripts.update`
3. Run
   ```bash
   pnpm aws
   ```
