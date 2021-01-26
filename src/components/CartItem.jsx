const CartItem = ({
  product,
  handleIncreaseQty,
  handleDecreaseQty,
  handleDelete,
}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='image'>
          <img src='' alt='' />
        </div>

        <div className='info'>
          <h4>{product.title}</h4>
          <p className='lead'> RS {product.price}</p>
          <p className='lead'>Qty {product.qty}</p>
          {/* button */}
          <img
            onClick={() => handleIncreaseQty(product)}
            style={{ height: 30, width: 30 }}
            src='https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1611670470~hmac=08aec98bbf8d9418124e528f115d0628'
            alt=''
          />
          <img
            onClick={() => handleDecreaseQty(product)}
            style={{ height: 30, width: 30 }}
            src='https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1611670505~hmac=4e10fc3842f387bb43546ff4efbfd0ca'
            alt=''
          />
          <img
            onClick={() => handleDelete(product)}
            style={{ height: 30, width: 30 }}
            src='https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1611670530~hmac=dcb43d75a41e6cf358d1876135e2e4d7'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
