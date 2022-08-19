import React, { Fragment } from 'react';
import style from './Header.module.css'
import SushiImg from "../../assets/1.jpg";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
      <Fragment>
        <header className={style.header}>
          <h1>Япона кухня</h1>
          <HeaderCartButton onClick={props.onShowCard} />
        </header>
        <div className={style["main-image"]}>
          <img src={SushiImg} />
        </div>
      </Fragment>
    );
};

export default Header;


