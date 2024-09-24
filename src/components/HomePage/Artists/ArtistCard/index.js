import React from "react";
import PropTypes from "prop-types";

import { ArtistName, Image, Wrapper } from "./styled";

function ArtistCard({ image, name }) {
  return (
    <Wrapper>
      <Image src={image} alt={`${name}'s photo`} />
      <ArtistName>{name}</ArtistName>
    </Wrapper>
  );
}

ArtistCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default ArtistCard;
