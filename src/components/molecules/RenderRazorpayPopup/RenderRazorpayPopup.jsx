import { useEffect } from "react";

const loadRazorpayScript = (src) => {
    return new Promise((res, rej) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            console.log("Razorpay Script Loaded");
            res(true)
        }
        script.onerror = () => {
            console.log("Razorpay Script Failed to load");
            res(false)
        }
        document.body.appendChild(script);
    })

}

export const RenderRazorpayPopup = ({
    orderId,
    keyId,
    amount,
    currency,
}) => {

    const display = async (options) => {
        const scriptResponse = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!scriptResponse) {
            console.log("Razorpay Script Failed to load");
            return;
        }

        const rzp = new window.Razorpay(options); //create an instance of razorpay in window object

        rzp.open() //open the razorpay popup

    }


    const handlePayment = async () => {

    }

    useEffect(() => {
        display({
            key: keyId,
            amount: amount,
            currency: currency,
            name: "Vaibhav Chittora",
            description: "Testing payment through razorpay",
            order_id: orderId,
            handler: () => {
                console.log("Payment Success");

            }

        })
    }, [])


    return null;
}