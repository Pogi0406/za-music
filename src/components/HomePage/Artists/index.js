import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper/modules";

import { Wrapper, ArtistsWrapper, ArtistsSkeletonWrapper, ArtistLoaderWrapper } from "./styled";
import ArtistCard from "./ArtistCard";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import { Link } from "react-router-dom";

function Artists({ isLoading, artists }) {
  const { width } = useWindowSize();
  const isMobileLayout = width < breakpoints.md;
  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <ArtistLoaderWrapper key={SVGAnimatedNumber}>
              <Skeleton
                key={num}
                height={isMobileLayout ? 75 : 95}
                width={isMobileLayout ? 75 : 95}
                circle
                wrapper={ArtistsSkeletonWrapper}
                style={{ margin: "0 auto" }}
              />
              <Skeleton height={isMobileLayout ? 19 : 27} />
            </ArtistLoaderWrapper>
          ))}
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Pagination]}
          style={{ marginLeft: 0 }}
        >
          {!isLoading &&
            artists?.map((artist) => (
              <SwiperSlide key={artist.id} style={{ width: "auto" }}>
                <Link to={`/artists/${artist.id}`}>
                  <ArtistCard name={artist.name} image={artist.picture_medium} />
                </Link>
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
