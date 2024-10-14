import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

import Sidebar from "./components/Sidebar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  const location = useLocation();
  
  // ログインやサインアップのルートではサイドメニューを非表示にする
  const isAuthRoute = location.pathname.startsWith("/login") || location.pathname.startsWith("/signup");

  return (
    <html lang="jp">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen">
        {!isAuthRoute && (
          <div className="flex">
            <Sidebar />
            <div className="flex-1 p-5">
              <Outlet />
            </div>
          </div>
        )}
        {isAuthRoute && (
          <div className="flex-1 p-5">
            <Outlet />
          </div>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}