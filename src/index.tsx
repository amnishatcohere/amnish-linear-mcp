import { Hono } from "hono";
import { StreamableHTTPTransport } from "@hono/mcp";
import { MCP_SERVER_VERSION, server } from "./mcp/server";
import { configDotenv } from "dotenv";
import { issuesRoute } from "./routes/issues";

configDotenv();

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Health check",
    version: MCP_SERVER_VERSION,
  });
});

app.route("/issues", issuesRoute);

// MCP SETUP
app.all("/mcp", async (c) => {
  // `@hono/mcp` takes care of all the complicated dance of setting up stateful/stateless Streamable Http MCP servers.
  // https://www.npmjs.com/package/@hono/mcp
  const transport = new StreamableHTTPTransport();
  await server.connect(transport);
  return transport.handleRequest(c);
});

export default app;
