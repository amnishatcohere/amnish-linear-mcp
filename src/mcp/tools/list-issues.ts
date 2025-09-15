import z from "zod";
import { McpTool } from "../../lib/types";
import { getMyIssues } from "../../lib/linear";
import { getISODateDaysAgo } from "../../lib/utils";

const ListIssuesInputSchema = {
  days: z
    .number()
    .default(1)
    .describe("The number of days since the oldest linear ticket was created."),
};

export const listIssuesTool: McpTool<typeof ListIssuesInputSchema> = {
  name: "listLinearTickets",
  description: "Lists all the linear tickets assigned to the user.",
  paramsSchemaOrAnnotations: ListIssuesInputSchema,
  async callback({ days }) {
    const issuesInfo = await getMyIssues(getISODateDaysAgo(days));
    return {
      content: [
        {
          type: "resource",
          resource: {
            uri: `uri://list-linear-tickets-after-${getISODateDaysAgo(days)}`,
            text: JSON.stringify(issuesInfo, null, 2),
          },
        },
      ],
    };
  },
};
