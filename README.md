# linear-mcp-ui

A Hono-based MCP server with tools returning Linear related information as interactive HTML UIs.
## Features

- Lists all Linear tickets assigned to the authenticated user.
- Interactive UI dashboard for browsing tickets.
- Exposes MCP tools for programmatic and UI-based ticket listing.
- Built with [Hono](https://hono.dev/), [Linear SDK](https://github.com/linear/linear), and [Model Context Protocol](https://modelcontextprotocol.org/).

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (for running and development)
- A [Linear API Key](https://linear.app/developers/graphql#personal-api-keys)

### Installation

```sh
bun install
```

### Configuration

Copy `.env.example` to `.env` and add your Linear API key:

```sh
cp .env.example .env
```

Edit `.env`:

```
LINEAR_API_KEY=your-linear-api-key-here
```

### Running the App

```sh
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  index.tsx                # Entry point, sets up Hono app and MCP server
  components/
    IssuesTable.tsx        # UI component for displaying issues
    Layout.tsx             # HTML layout component
  lib/
    linear.ts              # Linear API integration
    types.ts               # Shared types
    utils.ts               # Utility functions
  mcp/
    server.ts              # MCP server setup
    tools/
      list-issues.ts       # MCP tool for listing issues (JSON)
    ui-tools/
      list-issues.ts       # MCP tool for listing issues (UI/HTML)
  routes/
    issues.tsx             # Hono route for issues dashboard
```

## MCP Tools

- `listLinearTickets`: Returns all assigned Linear tickets as a resource.
- `listLinearTicketsUI`: Returns an interactive HTML dashboard of your tickets.

## Development

- Formatting: Prettier is configured (see `prettier.config.js`).
- TypeScript: Strict mode enabled.
