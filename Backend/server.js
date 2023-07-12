const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("sk_test_51NESrqHpTTELhGYNLVL3YxaVpNNtOc37fblMootHny2zi36mfFosGgc5TLbZDkOBts1BfcyzuMmIe1Q6kXs75Kqw001fdvkz6s")
const {v4: uuidv4} = require("uuid");

const PORT= process.env.PORt || 5000

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Add your stripe Secret Key to the .require('stripe')");
})

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;

  try{
      const {total, token} = req.body;

      const customer = await stripe.customers.create({
          email: token.email,
          source: token.id
      });

      const idempotency_key = uuidv4();

      const charge = await stripe.charges.create({
          amount: total * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the Product`,
      },
      {
          idempotency_key
      });
      console.log("Charge:", {charge})
      status = "success";
  }catch(error){
      console.error("Error:", error);
      status = "failure"
  }

  res.json({error, status})

})

app.listen(process.env.PORT, ()=> {
  console.log(`Server is running on port ${PORT}`)
})
