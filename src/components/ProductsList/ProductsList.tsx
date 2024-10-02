'use client';

import { fetchProducts } from '@/app/redux/productsSlice';
import { AppDispatch, RootState } from '@/app/redux/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function ProductsList() {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()); 
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error fetching products</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
