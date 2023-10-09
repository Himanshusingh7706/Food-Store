import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateCartQuantity,
} from "../../actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  //function to remove items from cart
  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };
  // function to increase the quantity of an item
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty > stock) return;
    dispatch(addItemToCart(id, newQty));
  };

  //Function for decreasing the quantity of an item

  const decreaseQty = (id, quantity) => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      dispatch(updateCartQuantity(id, newQty));
    }
  };
  //Function to navigate to the delivery page
  const checkoutHandler = () => {
    navigate("/delivery");
  };

  return (
    <>
      {/* Condition Randring based on cart item  */}
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is empty</h2>
      ) : (
        <>
          {/* Dispaly The Number of Item In the card */}
          <h2 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h2>

          {/* Cart Items */}

          <div className="row d-flex justify-content-between cartt">
            <div className="col-12 col-lg-8">
              {cartItems.map((item) => (
                <div key={item.fooditem}>
                  <hr />
                  <div className="cart-item">
                    <div className="row">
                      {/* Display Item image */}
                      <div className="col-3 col-lg-3">
                        <img
                          src={item.image}
                          alt="items"
                          height="90"
                          width="115"
                        ></img>
                      </div>
                      {/* Display Item Name */}
                      <div className="col-3 col-lg-3"> {item.name}</div>
                      {/* Dispaly item Price */}
                      <div className="col-2 col-ld-2 mt-4 mt-lg-0">
                        <p id="card_item_price">
                          <FontAwesomeIcon icon={faIndianRupee} size="xs" />
                          {item.price}
                        </p>
                      </div>

                      {/* Quantity control */}
                      <div className="col-2 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                          {/* decrease Qty button */}
                          <span
                            className="btn-danger minus"
                            onClick={() =>
                              decreaseQty(item.fooditem, item.quantity)
                            }
                          >
                            -
                          </span>
                          {/* Display current quantity  */}
                          <input
                            type="number"
                            className="form-control count d-inline"
                            value={item.quantity}
                            readOnly
                          />
                          {/* increase Quantity button */}
                          <span
                            className="btn btn-primary plus"
                            onClick={() =>
                              increaseQty(
                                item.fooditem,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>

                      {/* Remove Item button */}
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => removeCartItemHandler(item.fooditem)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Order summery */}
            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4> Order Summary</h4>
                <hr />
                {/* Display Subtototal */}
                <p>
                  Subtotal:
                  <span className="order-summary-values">
                    {cartItems.reduce(
                      (acc, item) => acc + Number(item.quantity),
                      0
                    )}
                    (Units)
                  </span>
                </p>
                <p>
                  Total:
                  <span className="order-summary-values">
                    <FontAwesomeIcon icon={faIndianRupee} size="xs" />
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <hr />
                {/* Button Function */}
                <button
                  id="checkout_btn"
                  className="btn btn-primery btn-block"
                  onClick={checkoutHandler}
                >
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
