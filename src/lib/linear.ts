import { LinearClient } from "@linear/sdk";

export function getLinearClient() {
  const linearApiKey = process.env.LINEAR_API_KEY;

  if (!linearApiKey) {
    throw new Error("'LINEAR_API_KEY' not found!");
  }

  return new LinearClient({
    apiKey: process.env.LINEAR_API_KEY,
  });
}

/**
 *
 * @param oldest ISO formatted date of the oldest issue's `createdAt`
 * @returns A list of linear issues assigned to the current user no older than `oldest`.
 */
export async function getMyIssues(oldest: string) {
  const linearClient = getLinearClient();
  const me = await linearClient.viewer;
  const myIssues = await me.assignedIssues({
    filter: {
      createdAt: {
        gte: oldest,
      },
    },
  });

  return {
    issues: myIssues.nodes,
    assignee: me.name,
  };
}
