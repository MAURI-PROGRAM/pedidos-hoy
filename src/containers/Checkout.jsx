import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const total =
    cart.length > 0
      ? cart.reduce((acumulador, numero) => acumulador + numero.price, 0)
      : 0;
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        {cart.map((item, index) => (
          <div key={index} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={() => removeFromCart(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: ${total}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
