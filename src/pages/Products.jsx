import { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";

function Products() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(savedCategories);
  }, []);

  const addProduct = (product) => {
    setProducts([
      ...products,
      {
        id: Date.now(),
        ...product,
      },
    ]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    setSelectedProduct(null);
  };

  // CSV Export Function
  const exportCSV = () => {
    const headers = ["Name", "Category", "Price", "Quantity"];

    const rows = products.map((p) => [
      p.name,
      p.category,
      p.price,
      p.quantity,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-4">Products</h2>

      <button
        className="btn btn-success mb-3"
        onClick={exportCSV}
      >
        Export CSV
      </button>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProductForm
        addProduct={addProduct}
        selectedProduct={selectedProduct}
        updateProduct={updateProduct}
        categories={categories}
      />

      <ProductTable
        products={filteredProducts}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default Products;