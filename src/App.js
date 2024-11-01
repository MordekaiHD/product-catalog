// src/App.js
import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = product => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductForm />
      <ProductList onSelectProduct={handleSelectProduct} />
      {selectedProduct && <ProductEdit product={selectedProduct} />}
    </div>
  );
};

export default App;
