import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { RingLoader } from 'react-spinners';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getProducts = async () => {
    setLoading(true);
    const res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data.products);
    setLoading(false);
  };

  const getCategories = async () => {
    setLoading(true);
    const res = await axios.get('https://dummyjson.com/products/categories');
    setCategories(res.data);
    setLoading(false);
  };

  const getProductsByCategory = async (category) => {
    setLoading(true);
    const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
    setProducts(res.data.products);
    setLoading(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      getProducts();
    } else {
      getProductsByCategory(category);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      await getCategories();
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <RingLoader color="#667eea" size={80} />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold" style={{color: '#667eea'}}>Our Products</h1>
      
      <div className="d-flex flex-wrap justify-content-center mb-5">
        <button 
          className={`btn me-3 mb-2 shadow-sm ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`} 
          onClick={() => handleCategoryClick('all')}
        >
          <i className="fas fa-th me-2"></i>All Products
        </button>
        
        {categories.map(cat => (
          <button 
            key={cat.slug} 
            className={`btn me-3 mb-2 shadow-sm text-capitalize ${selectedCategory === cat.slug ? 'btn-primary' : 'btn-outline-primary'}`} 
            onClick={() => handleCategoryClick(cat.slug)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      
      <div className="row g-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

