import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../reduser/productsSlice';
import { nanoid } from 'nanoid';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    available: true,
  });

  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProduct({ ...product, id: nanoid() }));
    setProduct({ name: '', description: '', price: 0, available: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Название" value={product.name} onChange={handleChange} />
      <input name="description" placeholder="Описание" value={product.description} onChange={handleChange} />
      <input name="price" type="number" placeholder="Цена" value={product.price} onChange={handleChange} />
      <label>
        <input name="available" type="checkbox" checked={product.available} onChange={() => setProduct({ ...product, available: !product.available })} />
        Доступно
      </label>
      <button type="submit">Добавить продукт</button>
    </form>
  );
};

export default ProductForm;
