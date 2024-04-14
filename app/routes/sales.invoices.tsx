import { Link, Outlet } from "@remix-run/react";

export default function Invoices() {
  return (
    <div className="flex">
      {/* サイドバー */}
      <div className="w-1/5 bg-yellow-500 p-5 text-white">
        <div className="mb-4">
          <p className="font-semibold">Invoice Numbers:</p>
          <Link to="123" className="block mt-2 hover:bg-blue-700 p-2 rounded">
            123
          </Link>
          <Link to="124" className="block mt-2 hover:bg-blue-700 p-2 rounded">
            124
          </Link>
          <Link to="125" className="block mt-2 hover:bg-blue-700 p-2 rounded">
            125
          </Link>
        </div>
      </div>
      {/* メインコンテンツエリア */}
      <div className="flex-1 bg-yellow-500">
        <p>Invoices</p>
        <Outlet /> {/* ここで選択された子ルートがレンダリングされる */}
      </div>
    </div>
  );
}
