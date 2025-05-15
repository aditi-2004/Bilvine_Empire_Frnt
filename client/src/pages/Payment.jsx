import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const { cartItems, total: initialTotal, discount: initialDiscount } = location.state || {};
  const history = useHistory();

  const [paymentTotal, setPaymentTotal] = useState(0);
  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: 'India',
    address: '',
    town: '',
    state: '',
    zipCode: ''
  });
  const [shippingAddress, setShippingAddress] = useState({
    sameAsBilling: true,
    firstName: '',
    lastName: '',
    address: '',
    town: '',
    state: '',
    zipCode: '',
    country: 'India',
    phone: ''
  });
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(initialDiscount || 0);
  const [error, setError] = useState('');

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  useEffect(() => {
    if (cartItems && initialTotal !== undefined) {
      console.log('Cart items in Payment:', cartItems);
      
      const subtotal = cartItems.reduce((acc, item) => {
        let price = 0;
        if (typeof item.price === 'string') {
          price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
        } else if (typeof item.price === 'number') {
          price = item.price;
        } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
          price = parseFloat(item.price['$numberDouble']) || 0;
        } else {
          console.warn(`Invalid price format for item ${item.name}:`, item.price);
          price = 0;
        }
        return acc + (price * (item.quantity || 1));
      }, 0);

      const shippingCost = shippingMethod === 'standard' ? 100.00 : 150.00;
      const tax = subtotal * 0.09;
      const finalTotal = (subtotal + shippingCost + tax - discount).toFixed(2);
      setPaymentTotal(finalTotal);
    } else {
      setPaymentTotal(0);
    }
  }, [cartItems, initialTotal, discount, shippingMethod]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleAddressChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'billing') {
      setBillingAddress({ ...billingAddress, [name]: value });
    } else {
      setShippingAddress({ ...shippingAddress, [name]: value });
    }
  };

  const handleShippingChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleApplyPromo = () => {
    if (promoCode === 'DISCOUNT10') {
      setDiscount(10);
    } else {
      setDiscount(0);
      setError('Invalid promo code.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!billingAddress.firstName || !billingAddress.lastName || !billingAddress.email || !billingAddress.phoneNumber || !billingAddress.address || !billingAddress.town || !billingAddress.state || !billingAddress.zipCode) {
      setError('Please fill in all billing address fields.');
      return;
    }
    if (!shippingAddress.sameAsBilling && (!shippingAddress.firstName || !shippingAddress.lastName || !shippingAddress.address || !shippingAddress.town || !shippingAddress.state || !shippingAddress.zipCode || !shippingAddress.phone)) {
      setError('Please fill in all shipping address fields.');
      return;
    }

    const orderData = {
      cartItems,
      total: paymentTotal,
      discount,
      billingAddress,
      shippingAddress,
      shippingMethod,
      paymentMethod,
      orderNumber: Math.floor(10000 + Math.random() * 90000)
    };

    if (paymentMethod === 'razorpay') {
      try {
        const response = await fetch('https://gym-backend-l7s5.onrender.com/api/razorpay/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: parseFloat(paymentTotal),
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to create Razorpay order: ${errorText}`);
        }

        const { orderId, amount, currency } = await response.json();

        const checkRazorpay = () => {
          return new Promise((resolve) => {
            const interval = setInterval(() => {
              if (window.Razorpay) {
                clearInterval(interval);
                resolve();
              }
            }, 100);
            setTimeout(() => {
              clearInterval(interval);
              resolve();
            }, 5000);
          });
        };

        await checkRazorpay();

        if (!window.Razorpay) {
          throw new Error('Razorpay SDK failed to load. Check your internet connection or script inclusion.');
        }

        const options = {
          key: 'rzp_test_fFSDRoxJ7fG5R6', // Match this with .env RAZORPAY_KEY_ID
          amount: amount,
          currency: currency,
          name: 'Your Store Name',
          description: 'Order Payment',
          order_id: orderId,
          handler: async function (response) {
            const verifyResponse = await fetch('https://gym-backend-l7s5.onrender.com/api/razorpay/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (!verifyResponse.ok) {
              setError('Payment verification failed.');
              return;
            }

            const emailResponse = await fetch('https://gym-backend-l7s5.onrender.com/api/invoice/send-invoice', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                to: billingAddress.email,
                orderData,
              }),
            });

            if (!emailResponse.ok) {
              const errorText = await emailResponse.text();
              throw new Error(`Failed to send email: ${errorText}`);
            }

            console.log('Pushing state to PaymentConfirmation:', orderData);
            history.push('/payment-confirmation', orderData);
          },
          prefill: {
            name: `${billingAddress.firstName} ${billingAddress.lastName}`,
            email: billingAddress.email,
            contact: billingAddress.phoneNumber,
          },
          theme: {
            color: '#3399cc',
          },
          modal: {
            ondismiss: function () {
              console.log('Checkout form closed by the user');
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          console.error('Payment failed:', response.error);
          setError(`Payment failed: ${response.error.description}`);
        });
        rzp.open();
      } catch (err) {
        console.error('Error processing Razorpay payment:', err);
        setError(`Failed to process payment. Please try again. Details: ${err.message}`);
      }
    } else {
      try {
        const emailResponse = await fetch('https://gym-backend-l7s5.onrender.com/api/invoice/send-invoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: billingAddress.email,
            orderData,
          }),
        });

        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          throw new Error(`Failed to send email: ${errorText}`);
        }

        console.log('Pushing state to PaymentConfirmation:', orderData);
        history.push('/payment-confirmation', orderData);
      } catch (err) {
        console.error('Error sending email:', err);
        setError('Failed to send invoice email. Please try again.');
      }
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">CHECKOUT</h2>
      <p className="payment-subheading">Login or continue to shop as guest</p>

      {cartItems && cartItems.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <div className="checkout-grid">
            <div className="billing-address">
              <h3 className="section-heading">BILLING ADDRESS</h3>
              <p className="required-field">*Required Field</p>
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={billingAddress.firstName}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={billingAddress.lastName}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={billingAddress.email}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={billingAddress.phoneNumber}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <select
                name="country"
                value={billingAddress.country}
                onChange={(e) => handleAddressChange(e, 'billing')}
              >
                <option value="India">India</option>
              </select>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={billingAddress.address}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <input
                type="text"
                name="town"
                placeholder="Town/Suburb*"
                value={billingAddress.town}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              />
              <select
                name="state"
                value={billingAddress.state}
                onChange={(e) => handleAddressChange(e, 'billing')}
                required
              >
                <option value="">Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <div className="address-row">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip/Postal Code*"
                  value={billingAddress.zipCode}
                  onChange={(e) => handleAddressChange(e, 'billing')}
                  required
                />
              </div>
              <label>
                <input
                  type="checkbox"
                  checked={shippingAddress.sameAsBilling}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, sameAsBilling: e.target.checked })}
                />
                Ship to the same address
              </label>
              <label>
                <input type="checkbox" /> Create an account
              </label>
            </div>

            <div className="shipping-payment">
              <div className="shipping-method">
                <h3 className="section-heading">SELECT SHIPPING METHOD</h3>
                <label>
                  <input
                    type="radio"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={handleShippingChange}
                  />
                  Standard Shipping ₹100.00
                </label>
                <label>
                  <input
                    type="radio"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={handleShippingChange}
                  />
                  Express Shipping ₹150.00
                </label>

                <div className="promo-code">
                  <label>PROMO CODE:</label>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                  />
                  <button className="apply-btn" onChange={handleApplyPromo}>Apply</button>
                </div>
              </div>

              <div className="payment-method">
                <h3 className="section-heading">PAYMENT</h3>
                <label>
                  <input
                    type="radio"
                    value="razorpay"
                    checked={paymentMethod === 'razorpay'}
                    onChange={handlePaymentChange}
                  />
                  Razorpay (UPI, Cards, Netbanking)
                </label>
                <label>
                  <input
                    type="radio"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={handlePaymentChange}
                  />
                  Credit Card
                </label>
                <label>
                  <input
                    type="radio"
                    value="afterpay"
                    checked={paymentMethod === 'afterpay'}
                    onChange={handlePaymentChange}
                  />
                  Afterpay - Interest-free payments
                </label>
                <label>
                  <input
                    type="radio"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={handlePaymentChange}
                  />
                  PayPal Express Checkout
                </label>
                {paymentMethod === 'paypal' && (
                  <p className="paypal-note" style={{ color: '#3f9b92' }}>
                    You will be redirected to the PayPal website.
                  </p>
                )}
                {paymentMethod === 'razorpay' && (
                  <p className="razorpay-note" style={{ color: '#3399cc' }}>
                    Pay securely with Razorpay (UPI, Cards, Netbanking).
                  </p>
                )}
              </div>
            </div>

            <div className="order-review">
              <h3 className="section-heading">REVIEW ORDER</h3>
              <ul className="order-items">
                {cartItems.map((item, index) => (
                  <li key={index} className="order-item">
                    <span>{item.name}</span>
                    <span>Qty: {item.quantity || 1}</span>
                    <span>
                      ₹{(
                        typeof item.price === 'string'
                          ? parseFloat(item.price.replace('₹', '').replace(/,/g, ''))
                          : (typeof item.price === 'number'
                            ? item.price
                            : (item.price && item.price['$numberDouble']
                              ? parseFloat(item.price['$numberDouble'])
                              : 0)
                          )
                      ).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="total-summary">
                <div>
                  <span>Total Amount:</span> <span>₹{cartItems.reduce((acc, item) => {
                    let price = 0;
                    if (typeof item.price === 'string') {
                      price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
                    } else if (typeof item.price === 'number') {
                      price = item.price;
                    } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
                      price = parseFloat(item.price['$numberDouble']) || 0;
                    } else {
                      console.warn(`Invalid price format for item ${item.name}:`, item.price);
                      price = 0;
                    }
                    return acc + (price * (item.quantity || 1));
                  }, 0).toFixed(2)}</span>
                </div>
                <div>
                  <span>Shipping:</span> <span>₹{shippingMethod === 'standard' ? '100.00' : '150.00'}</span>
                </div>
                <div>
                  <span>Sales Tax:</span> <span>₹{((cartItems.reduce((acc, item) => {
                    let price = 0;
                    if (typeof item.price === 'string') {
                      price = parseFloat(item.price.replace('₹', '').replace(/,/g, '')) || 0;
                    } else if (typeof item.price === 'number') {
                      price = item.price;
                    } else if (typeof item.price === 'object' && item.price['$numberDouble']) {
                      price = parseFloat(item.price['$numberDouble']) || 0;
                    } else {
                      console.warn(`Invalid price format for item ${item.name}:`, item.price);
                      price = 0;
                    }
                    return acc + (price * (item.quantity || 1));
                  }, 0)) * 0.09).toFixed(2)}</span>
                </div>
                <div className="final-total">
                  <span>Grand Total:</span> <span>₹{paymentTotal}</span>
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="process-order-btn">PROCESS ORDER</button>
              <div className="payment-logos">
                <img src={`${process.env.PUBLIC_URL}/assets/images/visa.png`} alt="Visa" className="payment-logo" />
                <img src={`${process.env.PUBLIC_URL}/assets/images/mastercard.png`} alt="MasterCard" className="payment-logo" />
                <img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt="PayPal" className="payment-logo" />
                <img src="https://razorpay.com/assets/razorpay-logo.png" alt="Razorpay" className="payment-logo" />
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div>No items in the cart.</div>
      )}
    </div>
  );
};

export default Payment;