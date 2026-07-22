import { useEffect, useState } from "react";

function Reports() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];

    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  const totalProducts = products.length;

  const totalCategories = categories.length;

  const totalStock = products.reduce(
    (sum, product) => sum + Number(product.quantity),
    0
  );

  const totalValue = products.reduce(
    (sum, product) =>
      sum +
      Number(product.price) *
        Number(product.quantity),
    0
  );

  const lowStockProducts = products.filter(
    (product) => Number(product.quantity) < 10
  );

  return (
    <div>
      <h2 className="mb-4">Reports</h2>

      <div className="row">

        <div className="col-md-3 mb-3">
          <div className="card shadow text-center p-3">
            <h5>Total Products</h5>
            <h2>{totalProducts}</h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow text-center p-3">
            <h5>Total Categories</h5>
            <h2>{totalCategories}</h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow text-center p-3">
            <h5>Total Stock</h5>
            <h2>{totalStock}</h2>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow text-center p-3">
            <h5>Inventory Value</h5>
            <h2>Rs {totalValue}</h2>
          </div>
        </div>

      </div>

      <div className="card shadow p-4 mt-4">
        <h4>Low Stock Alert</h4>

        {lowStockProducts.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>
              {lowStockProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No low stock products.</p>
        )}
      </div>
    </div>
  );
}

export default Reports;