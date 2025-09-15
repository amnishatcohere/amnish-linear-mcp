import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { listIssuesTool } from "./tools/list-issues";
import packageJson from "../../package.json";

const MCP_SERVER_NAME = packageJson.name;
export const MCP_SERVER_VERSION = packageJson.version;

// Create server instance
export const server = new McpServer({
  name: MCP_SERVER_NAME,
  version: MCP_SERVER_VERSION,
  capabilities: {
    resources: {},
    tools: {},
  },
});

// List tickets tool
server.tool(
  listIssuesTool.name,
  listIssuesTool.description,
  listIssuesTool.paramsSchemaOrAnnotations,
  listIssuesTool.callback
);
