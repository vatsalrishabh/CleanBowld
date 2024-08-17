import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data for demonstration
const products = [
    
        {id: 1, productName: "Toilet Cleaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/Toilet%20Cleaner1.png" },
        {id: 2, productName: "Room Freshener", price: "", image: "https://kleanbowld.com/admin_area/product_images/Bathroom%20Cleaner1.png" },
        {id: 3, productName: "Glass Cleaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/01.JPG" },
        {id: 4, productName: "cleaner sup.", price: "", image: "https://kleanbowld.com/admin_area/product_images/Floor%20Cleaner1.png" },
        {id: 5, productName: "Bathroom Cleaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/Bathroom%20Cleaner1.png" },
        {id: 6, productName: "Klean Bowld CLeaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/cleaner.jpg" },
        {id: 7, productName: "Klean Bowld House Cleaning", price: "", image: "https://kleanbowld.com/admin_area/product_images/Bathroom%20Cleaner5.png" }
    
];

const Products = () => {
  const params = useParams();
  const product = params.productId;

 console.log(343)

  return (
    <div className='product-detail'>
            <p>Product ID: {product}</p>

      {/* <h1>{product.name}</h1>
      <p>{product.description}</p> */}
    </div>
  );
};

export default Products;
