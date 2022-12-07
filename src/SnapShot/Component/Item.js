import Container from "./Container";

function Item({ searchTerm }) {
  return (
    <div>
      <h2 className="text-center text-4xl capitalize my-11">
        {searchTerm} Picture
      </h2>
      <Container searchTerm={searchTerm}></Container>
    </div>
  );
}

export default Item;
