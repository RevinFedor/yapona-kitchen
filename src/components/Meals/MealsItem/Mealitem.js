import React,{useContext} from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import style from "./MealsItem.module.css";

const Mealitem = (props) => {
  const cartContext = useContext(CartContext)
  const formattedPrice = `${props.price.toFixed(2)}`;
  
  const addToCartHundler = (amount)=>{
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  
    return (
      <li className={style.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={style.description}>{props.description}</div>
          <div className={style.price}>{formattedPrice}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHundler} />
        </div>
      </li>
    );
};

export default Mealitem;