"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DownloadPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    const downloadFile = async () => {
      try {
        const res = await fetch(`/api/download?token=${token}`);
        if (res.status !== 200) throw new Error("Invalid or expired link");

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "cover-letter-template.docx";
        document.body.appendChild(a);
        a.click();
        a.remove();

        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    downloadFile();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen">
      {status === "verifying" && <p>Verifying your link...</p>}
      {status === "success" && 
        <div className="flex flex-col items-center justify-center h-screen text-center gap-4">
            <h1 className="text-2xl font-bold">Your download has started</h1>
            <p className="text-gray-600">If it didn’t start automatically, click below:</p>
            <a href={`/api/download?token=${token}`} className="bg-[#e69c1d]  text-white px-4 py-2 rounded-lg">Download again</a>
            <p className="text-sm text-gray-500">A copy has also been sent to your email.</p>
            <p className="text-xs text-gray-400">This link will expire shortly for security reasons.</p>
        </div>}
      {status === "error" && (
        <p>Invalid or expired link. Please check your email or try again.</p>
      )}
    </div>
  );
}

export default function Page(){
    return (
        <Suspense fallback={<p>Loading...</p>}> 
            <DownloadPage />
        </Suspense>
    )
}