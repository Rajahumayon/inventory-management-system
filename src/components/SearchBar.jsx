function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;