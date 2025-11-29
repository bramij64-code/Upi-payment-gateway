const axios = require("axios");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  try {
    const response = await axios.post(
      "https://merchant.upigateway.com/api/create_order",
      {
        key: "6116deb5-bf12-4176-b569-6299e702e974",
        client_txn_id: "txn_" + Date.now(),
        amount: body.amount,
        p_info: "Coins Purchase",
        customer_name: body.name,
        customer_email: body.email,
        customer_mobile: body.mobile,
        redirect_url: "https://upi345.netlify.app/success"
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
