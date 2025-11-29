export const handler = async (event) => {
  const body = event.body;

  console.log("Webhook Received:", body);

  const data = new URLSearchParams(body);

  const status = data.get("status");
  const amount = data.get("amount");
  const utr = data.get("upi_txn_id");
  const orderId = data.get("id");

  if (status === "success") {
    console.log("Payment Success ✔️", utr);
    // এখানে Database update করতে পারো
  } else {
    console.log("Payment Failed ❌");
  }

  return {
    statusCode: 200,
    body: "OK",
  };
};
