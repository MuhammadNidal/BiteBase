import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    // You can also dispatch an action to clear the cart here if necessary
  };

  const handleAddNewItem = (id) => {
    navigate('/'); // Navigate to the HotelDetail component with the correct ID
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <div className="delivery-address">
          <h3>Your Delivery Addresses</h3>
          <p>You don't have a saved address.</p>
          <a href="#add-new-address">+ Add new Address</a>
        </div>
        <div className="special-instructions">
          <h3>Special Instructions (Optional)</h3>
          <textarea
            placeholder="Add any comment, e.g., about allergies, or delivery instructions here."
          ></textarea>
        </div>
        <div className="payment-method">
          <h3>Select Payment Method</h3>
          <div className="payment-option">
            <input type="radio" id="cod" name="payment" value="cod" />
            <label htmlFor="cod">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugu--LkxJz7vatGEphcyncDsm1rFyGc30pA&s" alt="Cash On Delivery" />
              <span>Cash On Delivery</span>
            </label>
          </div>
          <div className="payment-option">
            <input type="radio" id="credit-card" name="payment" value="credit-card" />
            <label htmlFor="credit-card">
              <img src="https://img.cdndtl.co.uk/q6b740ajikod/2d31697b-a2fc-4331-a8ab-a6fd48469ad7/d221c86d6ae21d32b912ab1c6407e03a/Cards-Generic-Hero-Desktop.png?auto=format&s=2a1e1e31fa2913636baa9734b52e5b77" alt="Credit Card" />
              <span>Credit Card</span>
            </label>
          </div>
          <div className="payment-option">
            <input type="radio" id="paypal" name="payment" value="paypal" />
            <label htmlFor="paypal">
              <img src="https://newsroom.paypal-corp.com/image/BDMC_Europe_THUMBNAIL.jpg" alt="PayPal" />
              <span>PayPal</span>
            </label>
          </div>
          <div className="payment-option">
            <input type="radio" id="bank-transfer" name="payment" value="bank-transfer" />
            <label htmlFor="bank-transfer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyuFmOJw7bw-YwmYmD3CzIBGkZQin3obexQ&s" alt="Bank Transfer" />
              <span>Bank Transfer</span>
            </label>
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <h3>Your Cart</h3>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Variation: ({item.variation})</p>
                <p>Add-ons: ({item.addons.join(', ')})</p>
                <div className="item-quantity">
                  <span>Quantity: {item.quantity}</span>
                  <span>Rs. {item.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <input type="text" placeholder="Promo Code" />
          <div className="price-details">
            <h3>Subtotal</h3>
            <h4>Rs. {totalPrice.toFixed(2)}</h4>
          </div>
          <div className="price-details">
            <h3>Delivery Charges</h3>
            <h4>Rs. 0.00</h4>
          </div>
          <div className="price-details grand-total">
            <h3>Grand Total</h3>
            <p>Rs. {totalPrice.toFixed(2)}</p>
          </div>
          <button onClick={handlePlaceOrder} className="place-order-btn">Place Order</button>
          <button onClick={handleAddNewItem} className="add-new-item-btn">Add New Item</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
