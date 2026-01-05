import { useEffect, useState } from "react";
import ProductTable from "./components/ProductTable";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

const ITEMS_PER_PAGE = 6;

export default function App() {
  const [products, setProducts] = useState([
  {
    id: 1,
    name: "iPhone 15",
    price: 80000,
    category: "Electronics",
    stock: 10,
    description: "Apple smartphone",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 72000,
    category: "Electronics",
    stock: 15,
    description: "Android flagship phone",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 115000,
    category: "Laptops",
    stock: 5,
    description: "Lightweight Apple laptop",
  },
  {
    id: 4,
    name: "Dell Inspiron 15",
    price: 65000,
    category: "Laptops",
    stock: 8,
    description: "Everyday use laptop",
  },
  {
    id: 5,
    name: "Nike Air Max",
    price: 9000,
    category: "Footwear",
    stock: 30,
    description: "Comfortable running shoes",
  },
  {
    id: 6,
    name: "Adidas Ultraboost",
    price: 11000,
    category: "Footwear",
    stock: 20,
    description: "High-performance sports shoes",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 30000,
    category: "Accessories",
    stock: 12,
    description: "Noise cancelling headphones",
  },
  {
    id: 8,
    name: "Boat Rockerz 550",
    price: 2000,
    category: "Accessories",
    stock: 40,
    description: "Wireless headphones",
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    price: 42000,
    category: "Wearables",
    stock: 7,
    description: "Smartwatch with health tracking",
  },
  {
    id: 10,
    name: "Fitbit Charge 6",
    price: 15000,
    category: "Wearables",
    stock: 18,
    description: "Fitness tracking band",
  },
  {
    id: 11,
    name: "Logitech MX Master 3",
    price: 9000,
    category: "Accessories",
    stock: 22,
    description: "Wireless productivity mouse",
  },
  {
    id: 12,
    name: "HP Wireless Keyboard",
    price: 2500,
    category: "Accessories",
    stock: 35,
    description: "Slim wireless keyboard",
  }
]);

  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);

  /* 🔹 Debounced Search (500ms) */
  useEffect(() => {
    const timer = setTimeout(() => {
      const result = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search, products]);

  /* 🔹 Pagination logic */
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(start, start + ITEMS_PER_PAGE);

  /* 🔹 Add / Edit Product */
  const handleSave = (product) => {
    if (product.id) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  };

  return (
  <div className="min-h-screen bg-gray-100 p-6">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Product Management
      </h1>

      {/* View Toggle */}
      <div className="flex mt-3 md:mt-0 bg-white rounded-lg shadow-sm overflow-hidden">
        <button
          onClick={() => setView("table")}
          className={`px-4 py-2 text-sm font-medium transition
            ${view === "table"
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          Table View
        </button>
        <button
          onClick={() => setView("card")}
          className={`px-4 py-2 text-sm font-medium transition
            ${view === "card"
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
            }`}
        >
          Card View
        </button>
      </div>
    </div>

    {/* Search */}
    <div className="mb-5">
      <SearchBar search={search} setSearch={setSearch} />
    </div>

    {/* Form */}
    <ProductForm
      onSave={handleSave}
      editingProduct={editingProduct}
    />

    {/* Product List */}
    <div className="bg-white rounded-xl shadow-md p-4">
      {paginatedProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-6">
          No products found
        </p>
      ) : view === "table" ? (
        <ProductTable
          products={paginatedProducts}
          onEdit={setEditingProduct}
        />
      ) : (
        <ProductCard
          products={paginatedProducts}
          onEdit={setEditingProduct}
        />
      )}
    </div>

    {/* Pagination */}
    <div className="mt-6">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      />
    </div>
  </div>
);
}