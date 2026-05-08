export async function POST(req) {
  try {
    const { email, amount, callback_url, service_id } = await req.json();

    if (!email || !amount) {
      return new Response(JSON.stringify({ error: "Email and amount required" }), { status: 400 });
    }

    const fixedAmount = service_id === 0 ? 5000 : service_id === 1 ? 7000 : service_id === 2 ? 8000: service_id === 3 ? 10000 : 15000;
    if (amount !== fixedAmount) {
      return new Response(JSON.stringify({ error: "Invalid amount" }), { status: 400 });
    }

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, amount: fixedAmount, callback_url }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error("Initialize error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}