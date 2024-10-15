import React from "react";
import { useParams } from "react-router-dom";

function Genre() {
  const { genreId } = useParams();
  return <div>{genreId}</div>;
}

export default Genre;
