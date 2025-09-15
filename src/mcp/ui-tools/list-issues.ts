import z from "zod";
import { McpTool } from "../../lib/types";
import { issuesRoute } from "../../routes/issues";
// @ts-ignore // MCP UI library packaging seems to be broken upstream
import { createUIResource } from "@mcp-ui/server";

const ListIssuesHtmlInputSchema = {
  days: z
    .number()
    .default(1)
    .describe("The number of days since the oldest linear ticket was created."),
};

export const listIssuesHtmlTool: McpTool<typeof ListIssuesHtmlInputSchema> = {
  name: "listLinearTicketsUI",
  description:
    "Lists all the linear tickets assigned to the user as an interactive UI dashboard.",
  paramsSchemaOrAnnotations: ListIssuesHtmlInputSchema,
  async callback({ days }) {
    const res = await issuesRoute.fetch(
      new Request(`http://internal/?daysago=${days}`)
    );

    const html = await res.text();
    const uiResource = createUIResource({
      uri: `ui://my-linear-issues/dashboard`,
      content: { type: "rawHtml", htmlString: html },
      encoding: "text",
    });
    return { content: [uiResource] };
  },
};
