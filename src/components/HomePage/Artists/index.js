import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper/modules";

import { Wrapper, ArtistsWrapper, ArtistsSkeletonWrapper, ArtistLoaderWrapper } from "./styled";
import ArtistCard from "./ArtistCard";

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <ArtistLoaderWrapper key={SVGAnimatedNumber}>
              <Skeleton key={num} height={95} width={95} circle wrapper={ArtistsSkeletonWrapper} />
              <Skeleton height={27} />
            </ArtistLoaderWrapper>
          ))}
        <Swiper slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            artists?.map((artist) => (
              <SwiperSlide key={artist.id} style={{ width: "auto" }}>
                <ArtistCard name={artist.name} image={artist.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistsWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    }),
  ),
};

export default Artists;
