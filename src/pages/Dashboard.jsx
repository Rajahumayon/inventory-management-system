import { useState, useEffect } from "react";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(savedProducts);
  }, []);

  const totalProducts = products.length;

  const categories = [
    ...new Set(products.map((p) => p.category)),
  ].length;

  const lowStock = products.filter(
    (p) => Number(p.quantity) < 5
  ).length;

  const inventoryValue = products.reduce(
    (total, product) =>
      total +
      Number(product.price) * Number(product.quantity),
    0
  );

  return (
    <div>
      <h1 className="mb-4">Dashboard</h1>

      <DashboardCards
        totalProducts={totalProducts}
        categories={categories}
        lowStock={lowStock}
        inventoryValue={inventoryValue}
      />
    </div>
  );
}

export default Dashboard;