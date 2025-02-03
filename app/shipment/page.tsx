"use client";

import React, { useState, useEffect } from "react";

const ShippoData = () => {
  interface ShipmentDetails {
    orderId: string;
    trackingNumber: string;
  }

  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails | null>(null);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  interface TrackingDetails {
    status: string;
  }

  const [trackingData, setTrackingData] = useState<TrackingDetails | null>(null);

  // Debugging Shipment Details
  useEffect(() => {
    console.log("📦 Updated Shipment Details:", shipmentDetails);
  }, [shipmentDetails]);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      console.log("🚀 Initiating Checkout...");

      const response = await fetch("/api/shippoOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          addressFrom: {
            name: "Sender Name",
            street1: "123 Sender St",
            city: "Los Angeles",
            state: "CA",
            zip: "90001",
            country: "US",
          },
          addressTo: {
            name: "Receiver Name",
            street1: "456 Receiver Ave",
            city: "New York",
            state: "NY",
            zip: "10001",
            country: "US",
          },
          parcels: [
            {
              length: "10",
              width: "5",
              height: "5",
              distance_unit: "in",
              weight: "2",
              mass_unit: "lb",
            },
          ],
          orderId: "ORDER12345",
          totalAmount: 199.99,
        }),
      });

      console.log("📡 Response status:", response.status);
      const data = await response.json();
      console.log("📦 Response data:", data);

      if (response.ok) {
        console.log("✅ Checkout successful!");
        setShipmentDetails(data);
      } else {
        console.error("❌ Checkout failed:", data);
      }
    } catch (error) {
      console.error("⚠ Error in checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTrackShipment = async () => {
    // Since you're using a test key, we'll mock the tracking data instead of calling the API
    const mockTrackingData = {
      status: "In transit (Mocked Data - Test Key)"
    };
  
    setTrackingData(mockTrackingData); // Set the mocked tracking data
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shipment Checkout</h2>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Processing..." : "Checkout"}
      </button>

      {/* Shipment Details */}
      {shipmentDetails && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100">
          <p>🆔 Order ID: <strong>{shipmentDetails.orderId}</strong></p>
          <p>📦 Tracking Number: <strong>{shipmentDetails.trackingNumber}</strong></p>
        </div>
      )}

      {/* Tracking Section */}
      <h2 className="text-xl font-semibold mt-6">Track Shipment</h2>
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Enter Tracking Number"
        className="w-full p-2 border rounded mt-2"
      />

      <button
        onClick={handleTrackShipment}
        disabled={!trackingNumber}
        className={`w-full py-2 px-4 mt-2 text-white font-semibold rounded-lg transition ${
          !trackingNumber ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        Track Shipment
      </button>

      {/* Tracking Status */}
      {trackingData && (
        <p className="mt-4 text-center text-gray-700">📍 Tracking Status: {trackingData.status}</p>
      )}
    </div>
  );
};

export default ShippoData;
