import React from "react";
import ReactDOM from "react-dom";

import styles from './Modal.module.css'

const Backdrop = (props) =>{
    return <div onClick={props.onClick} className={styles.backdrop}></div>;
}

const ModalWindow = (props) =>{
    return (<div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>)
}

const portalElement = document.getElementById('overlace')
const Modal = (props) => {
    return (
      <React.Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClick={props.onClick} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalWindow>{props.children}</ModalWindow>,
          portalElement
        )}
      </React.Fragment>
    );
};

export default Modal;