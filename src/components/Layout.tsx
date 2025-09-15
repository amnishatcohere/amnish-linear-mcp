import { Child } from "hono/jsx";

export function Layout({ children }: { children: Child }) {
  return (
    <html>
      <head>
        {/* Tailwind CSS */}
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body class={"p-5"}>{children}</body>
    </html>
  );
}
