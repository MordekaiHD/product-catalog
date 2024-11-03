import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../reduser/productsSlice';

const ProductList = ({ onSelectProduct }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id} onClick={() => onSelectProduct(product)} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Цена: ${product.price}</p>
          <p>Доступно: {product.available ? 'Да' : 'Нет'}</p>
          <button onClick={(e) => { e.stopPropagation(); dispatch(deleteProduct(product.id)); }}>Удалить</button>
          <button onClick={(e) => { e.stopPropagation(); dispatch(toggleAvailability(product.id)); }}>
          Переключить доступность
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
