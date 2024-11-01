// src/components/ProductEdit.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../reduser/productsSlice';

const ProductEdit = ({ product }) => {
  const dispatch = useDispatch();
  const [updatedProduct, setUpdatedProduct] = useState(product || { name: '', description: '', price: 0, available: false });

  useEffect(() => {
    if (product) {
      setUpdatedProduct(product);
    }
  }, [product]);

  if (!product) {
    return <p>Выберите продукт для редактирования</p>;
  }

  const handleChange = e => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={updatedProduct.name} onChange={handleChange} />
      <input name="description" value={updatedProduct.description} onChange={handleChange} />
      <input name="price" type="number" value={updatedProduct.price} onChange={handleChange} />
      <label>
        <input name="available" type="checkbox" checked={updatedProduct.available} onChange={() => setUpdatedProduct({ ...updatedProduct, available: !updatedProduct.available })} />
        Доступно
      </label>
      <button type="submit">Обновление продукта</button>
    </form>
  );
};

export default ProductEdit;
