import { useCaptureOrder } from "@/hooks/apis/payments/useCaptureOrder";
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

    const { captureOrderMutation } = useCaptureOrder()

    const display = async (options) => {
        const scriptResponse = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!scriptResponse) {
            console.log("Razorpay Script Failed to load");
            return;
        }

        const rzp = new window.Razorpay(options); //create an instance of razorpay in window object

        rzp.on('payment.failed', async (response) => {
            console.log("Payment Failed", response.error);
            await captureOrderMutation({
                orderId: options.order_id,
                status: "failed",
                paymentId: ''
            })
        })

        rzp.open() //open the razorpay popup

    }


    useEffect(() => {
        display({
            key: keyId,
            amount: amount,
            currency: currency,
            name: "Vaibhav Chittora", // name of the business
            description: "Testing payment through razorpay",
            order_id: orderId,
            handler: async (response) => {
                console.log("Payment Success", response);
                await captureOrderMutation({
                    orderId: orderId,
                    status: "success",
                    paymentId: response.razorpay_payment_id,
                    signature: response.razorpay_signature
                })

                // render the custom success page here and redirect the user to  that page
            }

        })
    }, [orderId])


    return null;
}