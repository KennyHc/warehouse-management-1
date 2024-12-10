import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { AddProductPage } from './pages/AddProductPage';
import { StockManagementPage } from './pages/StockManagementPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/products/add" replace />} />
            <Route path="/products/add" element={<AddProductPage />} />
            <Route path="/stock" element={<StockManagementPage />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </BrowserRouter>
  );
}

export default App;