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
      <h1 className="text-2xl font-bold mb-6">{viewTitle}</h1>

      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
              Title
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
              Created at
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
              State
            </th>
          </tr>
        </thead>
        <tbody>
          {issues.map(async (issue) => {
            const state = await issue.state;
            return (
              <tr key={issue.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 border-b">
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 hover:underline"
                  >
                    {issue.title}
                  </a>
                </td>
                <td className="px-4 py-2 border-b text-gray-600">
                  {issue.createdAt.toLocaleString()}
                </td>
                <td className="px-4 py-2 border-b">
                  {state?.name || "Unknown"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
