# Lariba Cloud Docs

Public developer documentation for **Lariba Cloud**.

This site provides guides, API references, and SDK usage examples to help developers integrate with the Lariba Cloud event ingestion and analytics platform.

---

## Overview

Lariba Cloud is a developer platform for collecting, processing, and analyzing application events.

The documentation covers:

- Quickstart guides
- Event ingestion
- API authentication
- SDK usage
- Usage and billing
- Project and API key management

---

## Documentation Structure

```
pages/
  index.mdx        # Introduction
  quickstart.mdx   # Getting started guide
```

The documentation site is built using **Next.js** and **Nextra**.

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the site locally:

```
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Technology Stack

- Next.js
- Nextra
- Nextra Docs Theme
- React
- TypeScript

---

## Related Repositories

Lariba Cloud is composed of multiple repositories.

### Core API

https://github.com/laribacloud/lariba-cloud

FastAPI backend powering event ingestion, authentication, usage tracking, and billing.

### API Specification

https://github.com/laribacloud/lariba-spec

OpenAPI specification describing the Lariba Cloud API.

### JavaScript SDK

https://github.com/laribacloud/lariba-sdk-js

Official JavaScript SDK for sending events to Lariba Cloud.

---

## Example Event

```javascript
import { Lariba } from "@laribacloud/lariba-sdk-js"

const lariba = new Lariba({
  apiKey: process.env.LARIBA_API_KEY
})

await lariba.track("user.signup", {
  plan: "starter"
})
```

---

## License

MIT License © Lariba Cloud