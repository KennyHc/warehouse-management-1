# Warehouse Management Tool

## Overview
This is a full-stack warehouse management application designed to manage products, stock levels, and warehouses. It provides users with the ability to add products, manage stock, and view a dashboard displaying product and stock details.

## Features

### 1. **Product Management**
- **Add Product**: Users can add new products to the system by filling out a form with product details:
  - Product Name
  - Category
  - Description
  - Low Stock Level (Alert threshold)
- **Edit Product**: Users can modify the product details after creation.
- **Delete Product**: Users can delete products from the database.

#### **Add Product Page**
- A form to input the following details:
  - **Product Name** (Text input)
  - **Category** (Text input)
  - **Description** (Text area)
  - **Low Stock Level** (Numeric input)

### 2. **Stock Management**
- **Restock Product**: Users can restock products by providing a Product ID and quantity to add.
- **View Stock**: View current stock levels for products across different warehouses.
- **Update Stock**: Users can update the stock for a specific product, including reducing stock levels when products are sold or moved.
