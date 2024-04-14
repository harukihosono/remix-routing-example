import { useParams } from "@remix-run/react";

export default function InvoiceDetail() {
  const { id } = useParams(); // 請求書IDをURLから取得
  
  return (
    <div className="bg-red-500">
      <p>{id}</p>
    </div>
  );
}
