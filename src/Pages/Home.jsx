import React, { useState } from 'react';
import Header from '../Component/Header';
import ProductCard from '../Component/ProductCard';

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    description: "A high-performance smartphone with OLED display.",
    imageUrl: "https://img.freepik.com/free-psd/realistic-mobile-device-isolated_23-2150427379.jpg?semt=ais_hybrid&w=740"
  },
  {
    id: 2,
    name: "Laptop",
    price: 1299,
    description: "A sleek laptop suitable for work and gaming.",
    imageUrl: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha"
  },
  {
    id: 3,
    name: "Smartwatch",
    price: 249,
    description: "Track your fitness and notifications on the go.",
    imageUrl: "https://www.gonoise.com/cdn/shop/files/1_c95e5561-4f66-413d-b143-42d31821e554.webp?v=1721392308"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 149,
    description: "Compact and powerful earbuds with noise cancellation.",
    imageUrl: "https://png.pngtree.com/png-clipart/20240925/original/pngtree-3d-wireless-earbuds-in-black-color-on-transparent-background-png-image_16090429.png"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 99,
    description: "Portable speaker with rich bass and long battery life.",
    imageUrl: "https://m.media-amazon.com/images/I/713TUYjagQL.jpg"
  },
  {
    id: 6,
    name: "Tablet",
    price: 499,
    description: "Lightweight tablet perfect for reading and streaming.",
    imageUrl: "https://p2-ofp.static.pub/fes/cms/2021/10/28/juqs65pgl1gh3dysi7yv1tnvtsiqva364946.png"
  },
  {
    id: 7,
    name: "Gaming Console",
    price: 399,
    description: "Next-gen console for immersive gaming experiences.",
    imageUrl: "https://m.media-amazon.com/images/I/71d4Z5wr+AL._UF894,1000_QL80_.jpg"
  },
  {
    id: 8,
    name: "https://m.media-amazon.com/images/I/71d4Z5wr+AL._UF894,1000_QL80_.jpg",
    price: 899,
    description: "Capture high-quality photos and videos with ease.",
    imageUrl: "https://i.pinimg.com/736x/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg"
  }
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("Light");

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "Light" ? "dark" : "Light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      } min-h-screen`}
    >
      <Header
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        total={total}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="p-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              theme={theme}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
