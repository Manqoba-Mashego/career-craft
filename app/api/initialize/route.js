export async function POST(req){
    try {
        const {email, amount, callback_url} = await req.json();
        if (!email || !amount){
            return Response.json(
                {error: "Email and amount are required"},
                {status: 400}
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)){
            return Response.json(
                {error: "Invalid email format"},
                {status: 400}
            );
        }

        const fixedAmount = 5000

        if (amount !== fixedAmount) {
            return Response.json(
                { error: "Invalid amount" },
                { status: 400 }
            );
        }
        
        const response = await fetch("https://api.paystack.co/transaction/initialize", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                email,
                amount:fixedAmount, 
                callback_url,
            }),
        });

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.error("ERROR: ", error)
        return Response.json({error: "Something went wrong"}, {status: 500});
    }
}