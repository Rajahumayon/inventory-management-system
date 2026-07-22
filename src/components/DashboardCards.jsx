function DashboardCards({
  totalProducts,
  categories,
  lowStock,
  inventoryValue,
}) {
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <div className="card shadow border-0">
          <div className="card-body">
            <h5>Total Products</h5>
            <h2>{totalProducts}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card shadow border-0">
          <div className="card-body">
            <h5>Categories</h5>
            <h2>{categories}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card shadow border-0">
          <div className="card-body">
            <h5>Low Stock</h5>
            <h2>{lowStock}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card shadow border-0">
          <div className="card-body">
            <h5>Inventory Value</h5>
            <h2>${inventoryValue}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;