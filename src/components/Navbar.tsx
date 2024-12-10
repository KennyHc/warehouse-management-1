import React from 'react';
import { NavLink } from 'react-router-dom';
import { Package } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="nav-brand">
              <Package className="h-8 w-8 text-indigo-600" />
              <span className="nav-brand-text">WMS</span>
            </div>
            <div className="nav-links">
              <NavLink
                to="/products/add"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                Add Products
              </NavLink>
              <NavLink
                to="/stock"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                Stock Management
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}