import { Link, Outlet } from "@remix-run/react";

export default function Sales() {
  return (
    <div className="flex flex-col flex-1">
      {/* セールスセクションのヘッダー */}
      <header className="bg-green-500 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">Sales</h1>
          {/* サブナビゲーションリンク */}
          <nav className="flex space-x-4 mt-2">
            <Link to="." className="hover:underline">Overview</Link>
            <Link to="subscriptions" className="hover:underline">Subscriptions</Link>
            <Link to="invoices" className="hover:underline">Invoices</Link>
            <Link to="customers" className="hover:underline">Customers</Link>
            <Link to="deposits" className="hover:underline">Deposits</Link>
          </nav>
        </div>
      </header>

      {/* ここで Outlet を使って、現在のサブルート（例: invoices/$id）を表示 */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
