import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex h-screen bg-blue-500">
          {/* Sidebar */}
          <div className="w-1/5 bg-black text-white p-4 space-y-6">
            <h2 className="text-white text-lg font-semibold">Fakebooks</h2>
            <nav className="flex flex-col">
              <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
              <Link to="/accounts" className="hover:bg-gray-700 p-2 rounded">Accounts</Link>
              <Link to="/sales" className="hover:bg-gray-700 p-2 rounded">Sales</Link>
              <Link to="/expenses" className="hover:bg-gray-700 p-2 rounded">Expenses</Link>
              <Link to="/reports" className="hover:bg-gray-700 p-2 rounded">Reports</Link>
            </nav>
          </div>

          {/* Main content area */}
          <div className="w-4/5">
            {children}
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>


    </html>
  );
}

export default function App() {
  return <Outlet />;
}
