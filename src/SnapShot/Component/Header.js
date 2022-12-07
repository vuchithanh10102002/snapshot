import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="text-center">
      <h1 className="my-11">Snap Shot</h1>
      <Form />
      <Navigation />
    </div>
  );
}

export default Header;
