import { useState, useEffect } from "react";

function ProductForm({
  addProduct,
  selectedProduct,
  updateProduct,
  categories,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setCategory(selectedProduct.category);
      setPrice(selectedProduct.price);
      setQuantity(selectedProduct.quantity);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      category,
      price,
      quantity,
    };

    if (selectedProduct) {
      updateProduct({
        ...selectedProduct,
        ...productData,
      });
    } else {
      addProduct(productData);
    }

    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h4>
          {selectedProduct
            ? "Edit Product"
            : "Add Product"}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-md-3 mb-3">
              <select
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">
                  Select Category
                </option>

                {categories.map((cat) => (
                  <option
                    key={cat.id}
                    value={cat.name}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-2 mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="col-md-2 mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="col-md-2 mb-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                {selectedProduct
                  ? "Update"
                  : "Add"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;