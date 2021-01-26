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

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({ products });
  };

  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({ products });
  };

  handleDelete = (product) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== product.id);

    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className='container'>
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleIncreaseQty={this.handleIncreaseQty}
            handleDecreaseQty={this.handleDecreaseQty}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
