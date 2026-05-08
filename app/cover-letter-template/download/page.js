"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DownloadSection from "@/components/downloadPage";

function DownloadPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("verifying");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }
    const fetchEmail = async () => {
        if (!token) return;
        const res = await fetch(`/api/download-info?token=${token}`);
        const data = await res.json();
        setEmail(data.email);
        console.log("data");
    }

    fetchEmail();

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
    <>
      {status === "verifying" && (
        <div className="flex items-center justify-center h-screen">
          <p>Verifying your link...</p>
        </div>
      )}
      {status === "success" && <DownloadSection token={token} email={email}/>}
      {status === "error" && (
        <div className="flex items-center justify-center h-screen">
          <p>Invalid or expired link. Please check your email or try again.</p>
        </div>
      )}
    </>
  );
}

export default function Page(){
    return (
        <Suspense fallback={<p>Loading...</p>}> 
            <DownloadPage />
        </Suspense>
    )
}