import { useState, useEffect } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  const [categoryName, setCategoryName] =
    useState("");

  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem("categories")
    ) || [];

    console.log(
      "Loaded Categories:",
      savedCategories
    );

    setCategories(savedCategories);
  }, []);

  const addCategory = (e) => {
    e.preventDefault();

    if (!categoryName.trim()) return;

    const updatedCategories = [
      ...categories,
      {
        id: Date.now(),
        name: categoryName,
      },
    ];

    setCategories(updatedCategories);

    localStorage.setItem(
      "categories",
      JSON.stringify(updatedCategories)
    );

    setCategoryName("");
  };

  const deleteCategory = (id) => {
    const updatedCategories =
      categories.filter(
        (cat) => cat.id !== id
      );

    setCategories(updatedCategories);

    localStorage.setItem(
      "categories",
      JSON.stringify(updatedCategories)
    );
  };

  return (
    <div>
      <h2 className="mb-4">Categories</h2>

      <div className="card p-4 shadow mb-4">
        <form onSubmit={addCategory}>
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                value={categoryName}
                onChange={(e) =>
                  setCategoryName(
                    e.target.value
                  )
                }
              />
            </div>

            <div className="col-md-2">
              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="card p-4 shadow">
        <h4>Category List</h4>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.name}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        deleteCategory(
                          cat.id
                        )
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">
                  No Categories Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;