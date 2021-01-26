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
        img:
          'https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=737&q=80',
      },
      {
        id: 2,
        price: 499,
        title: 'Mobile Phone',
        qty: 10,
        img:
          'https://images.unsplash.com/photo-1565263965454-a44e2ede252a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      },
      {
        id: 3,
        price: 999,
        title: 'Laptop',
        qty: 1,
        img:
          'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
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

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartPrice = () => {
    const { products } = this.state;

    let price = 0;
    products.forEach((product) => {
      price += product.qty * product.price;
    });

    return price;
  };

  render() {
    const { products } = this.state;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <span
              style={{ fontSize: '1.2rem' }}
              className='badge badge-primary my-2'
            >
              Items: {this.getCartCount()}
            </span>

            <span
              style={{ fontSize: '1.2rem' }}
              className='badge badge-success'
            >
              Price: {this.getCartPrice()}
            </span>
          </div>

          <div className='col-sm-9'>
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
        </div>
      </div>
    );
  }
}

export default Cart;
