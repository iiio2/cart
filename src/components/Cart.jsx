import React, { Component } from 'react';
import CartItem from './CartItem';
import { db } from '../firebase/init';

class Cart extends Component {
  state = {
    products: [],
    isLoading: true,
  };

  // componentDidMount() {
  //   db.collection('products')
  //     .get()
  //     .then((snapshot) => {
  //       const products = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         data.id = doc.id;
  //         return data;
  //       });
  //       this.setState({ products, isLoading: !this.state.isLoading });
  //     });
  // }

  // Real Time data
  componentDidMount() {
    db.collection('products').onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      this.setState({ products, isLoading: false });
    });
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({ products });

    const docRef = db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDecreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    const docRef = db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log('decreased');
      })
      .catch((error) => {
        console.log(error);
      });

    // products[index].qty -= 1;

    // this.setState({ products });
  };

  addProduct = () => {
    db.collection('products')
      .add({
        title: 'Bag',
        qty: 2,
        price: 399,
        img:
          'https://images.unsplash.com/photo-1551481655-ec4aab5cb67a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      })
      .then(() => {
        console.log('product added');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDelete = (product) => {
    // const { products } = this.state;

    // // const items = products.filter((item) => item.id !== product.id);

    // // this.setState({
    // //   products: items,
    // // });

    const docRef = db.collection('products').doc(product.id);

    docRef
      .delete()
      .then(() => {
        console.log('deleted');
      })
      .catch((error) => {
        console.log(error);
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
    const { products, isLoading } = this.state;
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
              className='badge badge-success mb-3'
            >
              Price: {this.getCartPrice()}
            </span>
            <button className='btn btn-info' onClick={this.addProduct}>
              Add Product
            </button>
          </div>

          <div className='col-sm-9'>
            {isLoading && <h4>Loading...</h4>}
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
