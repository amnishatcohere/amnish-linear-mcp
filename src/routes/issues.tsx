import { Hono } from "hono";
import { getMyIssues } from "../lib/linear";
import { getISODateDaysAgo } from "../lib/utils";
import { IssuesTable } from "../components/IssuesTable";
import { jsxRenderer } from "hono/jsx-renderer";
import { Layout } from "../components/Layout";

export const issuesRoute = new Hono();

issuesRoute.use(
  jsxRenderer(({ children }) => {
    return <Layout>{children}</Layout>;
  })
);

issuesRoute.get("/", async (c) => {
  const daysAgoParam = c.req.query("daysago"); // string | null
  const daysAgo = daysAgoParam ? Number(daysAgoParam) : 1;
  const { issues, assignee } = await getMyIssues(getISODateDaysAgo(daysAgo));

  return c.render(
    <IssuesTable daysAgo={daysAgo} issues={issues} userName={assignee} />
  );
});
