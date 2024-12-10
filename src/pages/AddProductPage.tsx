import React from 'react';
import { AddProductForm } from '../components/AddProductForm';

export function AddProductPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Add New Product</h1>
      <div className="form-card">
        <AddProductForm />
      </div>
    </div>
  );
}