import Container from "./Container";

function Search({ searchTerm }) {
  return (
    <div>
      <h2 className="text-center text-4xl capitalize my-11">
        {searchTerm} Images
      </h2>
      <Container searchTerm={searchTerm}></Container>
    </div>
  );
}

export default Search;
