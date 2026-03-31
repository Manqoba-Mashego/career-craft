"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const params = useSearchParams();
  const reference = params.get("reference") || params.get("trxref");

  useEffect(() => {
    if (!reference) return;

    window.location.href = `/api/download?reference=${reference}`;
  }, [reference]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
        <p>Verifying payment...</p>
    </div>
  );
}