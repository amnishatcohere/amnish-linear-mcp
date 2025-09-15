import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { listTicketsTool } from "./tools/list-tickets";
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
  listTicketsTool.name,
  listTicketsTool.description,
  listTicketsTool.paramsSchemaOrAnnotations,
  listTicketsTool.callback
);
