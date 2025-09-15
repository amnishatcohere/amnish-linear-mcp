import { Issue } from "@linear/sdk";

export type IssuesTableProps = {
  userName: string;
  daysAgo: number;
  issues: Issue[];
};

export const IssuesTable = ({
  userName,
  daysAgo,
  issues,
}: IssuesTableProps) => {
  const viewTitle = `${userName}'s Linear tickets since ${daysAgo} day${
    daysAgo > 1 ? "s" : ""
  }!`;

  return (
    <>
      <h1>{viewTitle}</h1>

      <table border={1}>
        <thead>
          <th>Title</th>
          <th>Created at</th>
          <th>State</th>
        </thead>
        <tbody>
          {issues.map(async (issue) => {
            const state = await issue.state;
            return (
              <tr key={issue.id}>
                <td>{issue.title}</td>
                <td>{issue.createdAt.toLocaleString()}</td>
                <td>{state?.name || "Unknown"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
