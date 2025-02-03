import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function shippoOrder(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { addressFrom, addressTo, parcels, orderId, totalAmount } = req.body;

    console.log("Received request:", { addressFrom, addressTo, parcels, orderId, totalAmount });

    try {
        interface ShippoResponse {
            object_id: string;
            eta?: string;
        }

        const response = await axios.post<ShippoResponse>(
            "https://api.goshippo.com/shipments/",
            {
                address_from: addressFrom,
                address_to: addressTo,
                parcels,
                async: false,
            },
            {
                headers: {
                    Authorization: `ShippoToken ${process.env.SHIPPO_API_KEY}`, // Fix this if missing "ShippoToken"
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Shippo Response:", response.data);

        res.status(200).json({
            orderId,
            totalAmount,
            trackingNumber: response.data.object_id,
            eta: response.data.eta || "3-5 business days",
            status: "Shipment created successfully!",
        });
    } catch (error: any) {   // eslint-disable-line
        console.error("Error creating shipment:", error.response?.data || error.message);
        res.status(500).json({ message: "Failed to create shipment", error: error.response?.data });
    }
}
