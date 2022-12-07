import Container from "./Container";
import { useParams } from "react-router-dom";

function ItemSearch({ searchTerm }) {
  let { key } = useParams();
  searchTerm = key;
  return (
    <div>
      <h2 className="text-center text-4xl capitalize my-11">
        {searchTerm} Picture
      </h2>
      <Container searchTerm={searchTerm}></Container>
    </div>
  );
}

export default ItemSearch;
