import { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ToolAnnotations } from "@modelcontextprotocol/sdk/types.js";
import { ZodRawShape } from "zod";

export type McpToolArgs = ZodRawShape | undefined;

/**
 * Inspired from MCP SDK's `tool` method.
 * https://github.com/modelcontextprotocol/typescript-sdk/blob/b28c297184cb0cb64611a3357d6438dd1b0824c6/src/server/mcp.ts#L848
 */
export type McpTool<Args extends McpToolArgs = undefined> = {
  name: string;
  description: string;
  paramsSchemaOrAnnotations: Args | ToolAnnotations;
  callback: ToolCallback<Args>;
};
