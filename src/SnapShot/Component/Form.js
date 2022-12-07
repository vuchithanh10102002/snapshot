import { useState } from "react";

function Form() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form className="form-search">
      <input
        className="w-96 py-3 px-4 border-4 border-gray-300 rounded-l-lg focus:outline-none"
        type="text"
        value={searchInput}
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className="w-18 py-3 px-4 border-4 border-sky-900 bg-sky-900 rounded-r-lg text-center cursor-pointer disabled:hidden"
        disabled={!searchInput.trim()}
      >
        <i className="fa-solid fa-magnifying-glass text-white"></i>
      </button>
    </form>
  );
}

export default Form;
