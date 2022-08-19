import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const buttonClasses = `${style.button}  ${
    isButtonAnimated ? style.bump : ""
  }`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    
  }, [cartContext.items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={style.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
