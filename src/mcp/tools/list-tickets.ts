import z from "zod";
import { McpTool } from "../../lib/types";

const ListTicketsInputSchema = {
  days: z
    .number()
    .default(1)
    .describe("The number of days since the oldest linear ticket was created."),
};

export const listTicketsTool: McpTool<typeof ListTicketsInputSchema> = {
  name: "listLinearTickets",
  description: "Lists all the linear tickets assigned to the user.",
  paramsSchemaOrAnnotations: ListTicketsInputSchema,
  callback({ days }) {
    return {
      content: [
        {
          type: "text",
          text: `List of linear tickets "${days}" days old`,
        },
      ],
    };
  },
};
