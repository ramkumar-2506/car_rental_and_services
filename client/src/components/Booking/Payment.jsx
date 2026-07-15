import { useState } from "react";
import {
  FaCreditCard,
  FaUniversity,
  FaWallet,
  FaLock,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import "./Payment.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [cardDetails, setCardDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const bookingSummary = {
    vehicle: "BMW 5 Series",
    rentalDays: 5,
    vehiclePrice: 42500,
    addons: 1650,
    insurance: 2495,
    tax: 8396,
    total: 55041,
  };

  const handleChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Payment Successful!");
  };

  return (
    <section className="payment-section">

      <div className="payment-container">

        <div className="payment-header">

          <h2>Complete Your Payment</h2>

          <p>
            Select your preferred payment method and
            complete your booking securely.
          </p>

        </div>

        <div className="payment-grid">

          {/* =========================
                PAYMENT FORM
          ========================== */}

          <form
            className="payment-form"
            onSubmit={handleSubmit}
          >

            <div className="payment-methods">

              <h3>Select Payment Method</h3>

              <div className="method-grid">

                <div
                  className={`method-card ${
                    paymentMethod === "card"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("card")
                  }
                >
                  <FaCreditCard />
                  <span>Credit / Debit Card</span>
                </div>

                <div
                  className={`method-card ${
                    paymentMethod === "upi"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("upi")
                  }
                >
                  <FaWallet />
                  <span>UPI Payment</span>
                </div>

                <div
                  className={`method-card ${
                    paymentMethod === "netbanking"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setPaymentMethod("netbanking")
                  }
                >
                  <FaUniversity />
                  <span>Net Banking</span>
                </div>

              </div>

            </div>

            {/* =========================
                   CARD PAYMENT
            ========================== */}

            {paymentMethod === "card" && (

              <div className="payment-card">

                <h3>Card Details</h3>

                <div className="input-group">

                  <label>Card Holder Name</label>

                  <input
                    type="text"
                    name="cardName"
                    placeholder="John Doe"
                    value={cardDetails.cardName}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="input-group">

                  <label>Card Number</label>

                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardDetails.cardNumber}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="card-row">

                  <div className="input-group">

                    <label>Expiry Date</label>

                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="input-group">

                    <label>CVV</label>

                    <input
                      type="password"
                      name="cvv"
                      placeholder="***"
                      value={cardDetails.cvv}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

              </div>

            )}

            {/* =========================
                   UPI PAYMENT
            ========================== */}

            {paymentMethod === "upi" && (

              <div className="payment-card">

                <h3>UPI Payment</h3>

                <div className="input-group">

                  <label>UPI ID</label>

                  <input
                    type="text"
                    placeholder="example@upi"
                  />

                </div>

              </div>

            )}

            {/* =========================
                 NET BANKING
            ========================== */}

            {paymentMethod === "netbanking" && (

              <div className="payment-card">

                <h3>Select Bank</h3>

                <div className="input-group">

                  <select>

                    <option>SBI</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra</option>

                  </select>

                </div>

              </div>

            )}
                        {/* =========================
                 BOOKING SUMMARY
            ========================== */}

          </form>

          <div className="booking-summary">

            <h3>Booking Summary</h3>

            <div className="summary-item">
              <span>Vehicle</span>
              <strong>{bookingSummary.vehicle}</strong>
            </div>

            <div className="summary-item">
              <span>Rental Duration</span>
              <strong>{bookingSummary.rentalDays} Days</strong>
            </div>

            <div className="summary-item">
              <span>Vehicle Rental</span>
              <strong>
                ₹{bookingSummary.vehiclePrice.toLocaleString()}
              </strong>
            </div>

            <div className="summary-item">
              <span>Add-ons</span>
              <strong>
                ₹{bookingSummary.addons.toLocaleString()}
              </strong>
            </div>

            <div className="summary-item">
              <span>Insurance</span>
              <strong>
                ₹{bookingSummary.insurance.toLocaleString()}
              </strong>
            </div>

            <div className="summary-item">
              <span>GST & Taxes</span>
              <strong>
                ₹{bookingSummary.tax.toLocaleString()}
              </strong>
            </div>

            <div className="summary-total">
              <span>Total Amount</span>

              <h2>
                ₹{bookingSummary.total.toLocaleString()}
              </h2>
            </div>

            <div className="secure-payment">

              <FaLock />

              <div>
                <h4>100% Secure Payment</h4>

                <p>
                  Your payment is protected with
                  industry-standard SSL encryption.
                </p>
              </div>

            </div>

            <button
              type="submit"
              form=""
              className="pay-btn"
            >
              <FaMoneyCheckAlt />
              Pay ₹{bookingSummary.total.toLocaleString()}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Payment;