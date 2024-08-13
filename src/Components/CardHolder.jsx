import Card from "../Components/Card";
import React, { useState } from 'react';

const CardHolder = () => {
    const [allProducts, setAllProducts] = useState([
        {id: 1, productName: "Toilet Cleaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/Toilet%20Cleaner1.png" },
        {id: 2, productName: "Room Freshener", price: "", image: "https://kleanbowld.com/admin_area/product_images/Bathroom%20Cleaner1.png" },
        {id: 3, productName: "Glass Cleaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/01.JPG" },
        {id: 4, productName: "cleaner sup.", price: "", image: "https://kleanbowld.com/admin_area/product_images/Floor%20Cleaner1.png" },
        {id: 5, productName: "Bathroom Cleaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/Bathroom%20Cleaner1.png" },
        {id: 6, productName: "Klean Bowld CLeaner", price: "", image: "https://kleanbowld.com/admin_area/product_images/cleaner.jpg" },
        {id: 7, productName: "Klean Bowld House Cleaning", price: "", image: "https://kleanbowld.com/admin_area/product_images/Bathroom%20Cleaner5.png" }
    ]);

    return (
        <div className='cardholder grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:p-10'>
            {allProducts.map((product) => (
        <Card 
          key={product.id}
          id={product.id}
          productName={product.productName}
          price={product.price}
          image={product.image}
        />
      ))}
        </div>
    );
};

export default CardHolder;
