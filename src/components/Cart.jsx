import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        price: 99,
        title: 'Watch',
        qty: 1,
        img: '',
      },
      {
        id: 2,
        price: 999,
        title: 'Watch',
        qty: 10,
        img: '',
      },
      {
        id: 3,
        price: 999,
        title: 'Laptop',
        qty: 1,
        img: '',
      },
    ],
  };

  increaseQty = () => {
    //   setState form 1
    // const qty = this.state.qty + 1;
    // this.setState({ qty });

    // form 2

    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className='container'>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default Cart;
