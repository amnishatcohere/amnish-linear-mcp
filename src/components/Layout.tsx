import { Child } from "hono/jsx";

export function Layout({ children }: { children: Child }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
