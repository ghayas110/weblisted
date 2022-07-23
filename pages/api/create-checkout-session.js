const stripe = require("stripe")("sk_test_51KosFhFwyx0lKIchKIkRQtQU7HgMbZNknXsKPJCh9Lb48kXP3wg4Ym7FhcPaKWnbOBsMejYD3l44dVruGvDb0GzW00eECo5APo")
export default async (req, res) => {
    const { items, email,name,phone,address,country,state } = req.body;
    const remail = items.map(item => item.remail)
    const orderData = items.map(item => JSON.stringify([item.image, item.title,item.quantity]))
    console.log(JSON.stringify(items,2,null), 'order')

    // console.log(items);
    const resname = items.map(item => item.resname)
    const transformedItems = items.map(item => ({
        quantity: item.quantity,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image],

            },
        }
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/`,
        cancel_url: `${process.env.HOST}/check_out`,
       metadata: {
            email,
         
            // order:items.map(item=>item),
            order: JSON.stringify(orderData.map(item => item)),
            
        },


    },
  
    )
    res.status(200).json({ id: session.id });

}
