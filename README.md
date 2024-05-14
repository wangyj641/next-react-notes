# next-react-notes

- A note application based on Next.js and React.

- Developed with JavaScript, Next.js, React, Prisma, PostgreSQL, OAuth, Docker.

### Key Skills

- Next.js + Prisma + PostgreSQL fullstack project 
- Github OAuth integration
- Utilized i18next internationlization
- Support markdown file data

### Getting Started

##### Configuration
- Register a github OAuth app
```
github -> settings -> Developer settings -> OAuth apps
```
- Edit .env file:
```
AUTH_GITHUB_ID=***
AUTH_GITHUB_SECRET=***
AUTH_SECRET=***
```

- Set PostgreSQL DB info:
```
DATABASE_URL="mysql://root:001028qW@@localhost:3306/notes"

POSTGRES_URL="postgres://default:JSjrNi4XWx6Z@ep-young-smoke-a4lzneqn-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
POSTGRES_PRISMA_URL="postgres://default:JSjrNi4XWx6Z@ep-young-smoke-a4lzneqn-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NO_SSL="postgres://default:JSjrNi4XWx6Z@ep-young-smoke-a4lzneqn-pooler.us-east-1.aws.neon.tech:5432/verceldb"
POSTGRES_URL_NON_POOLING="postgres://default:JSjrNi4XWx6Z@ep-young-smoke-a4lzneqn.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
POSTGRES_USER="default"
POSTGRES_HOST="ep-young-smoke-a4lzneqn-pooler.us-east-1.aws.neon.tech"
POSTGRES_PASSWORD="***"
POSTGRES_DATABASE="verceldb"
```
##### Start the app

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
