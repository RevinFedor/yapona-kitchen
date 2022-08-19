import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length >0

  const addCartItemHundler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHundler = (id) => {
    cartContext.removeItem(id);
    
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHundler.bind(null, item)}
          onRemove={removeCartItemHundler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
