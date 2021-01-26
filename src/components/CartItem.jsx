import React, { Component } from 'react';
import phone from './img/phone.jpg';

class CartItem extends Component {
  state = {
    price: 999,
    title: 'Mobile Phone',
    qty: 1,
    img: '',
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
    const { price, title, qty } = this.state;
    return (
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <div className='image'>
              <img
                className='img-fluid'
                src={phone}
                style={{ height: 200 }}
                alt='image'
              />
            </div>

            <div className='info'>
              <h5>{title}</h5>
              <p className='lead'>RS {price}</p>
              <p className='lead'>Qty {qty}</p>

              {/* buttons */}
              <img
                style={{ height: 30, width: 30 }}
                src='https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1611667600~hmac=21a5ceb2dd8dc705fb35afe5aa55b25b'
                alt=''
              />
              <img
                onClick={this.increaseQty}
                style={{ height: 30, width: 30 }}
                src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1611667680~hmac=10b501d3a51428b2b459206a28fdbe60'
                alt=''
              />

              <img
                style={{ height: 30, width: 30 }}
                src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1611667716~hmac=0d48a6616b718d1826951a6af2f0fc04'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
