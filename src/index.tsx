import { Hono } from "hono";
import { View } from "./components/View";
import { StreamableHTTPTransport } from "@hono/mcp";
import { MCP_SERVER_VERSION, server } from "./mcp/server";
import { configDotenv } from "dotenv";

configDotenv();

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Health check",
    version: MCP_SERVER_VERSION,
  });
});

app.get("/test-jsx", (c) => {
  return c.html(<View />);
});

//#region MCP SETUP

app.all("/mcp", async (c) => {
  const transport = new StreamableHTTPTransport();
  await server.connect(transport);
  return transport.handleRequest(c);
});

//#endregion

export default app;
