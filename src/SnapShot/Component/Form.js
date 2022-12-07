import { useState } from "react";
import { NavLink } from "react-router-dom";

function Form() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <form className="form-search" action={`/search/${searchInput}`}>
      <input
        className="w-96 py-3 px-4 border-4 border-gray-300 rounded-l-lg focus:outline-none"
        type="text"
        value={searchInput}
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <NavLink
        to={`/search/${searchInput}`}
        className="w-18 py-3 px-4 border-4 border-sky-900 bg-sky-900 rounded-r-lg text-center cursor-pointer disabled:hidden"
        disabled={!searchInput.trim()}
      >
        <i className="fa-solid fa-magnifying-glass text-white"></i>
      </NavLink>
    </form>
  );
}

export default Form;
