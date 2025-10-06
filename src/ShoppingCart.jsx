
import React, { useState } from 'react';

const ShoppingCart = () => {
  const price = 20;
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2> Xarid Savatchasi</h2>
      <p>Mahsulot: <strong>Futbolka  ${price}</strong></p>

      <div>
        <button onClick={decrease}>-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>

      <p>Umumiy narx: <strong>${quantity * price}</strong></p>
    </div>
  );
};

export default ShoppingCart;
