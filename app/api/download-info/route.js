import { redis } from "@/lib/redis";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return Response.json({ error: "Missing token" }, { status: 400 });
  }

  const data = await redis.get(`download:${token}`);

  if (!data) {
    return Response.json({ error: "Invalid token" }, { status: 403 });
  }

  return Response.json({
    email: data.email,
  });
}