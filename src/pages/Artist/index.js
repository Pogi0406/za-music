import { Music } from "components/ui/Icons";
import { MainTitle, SectionTitle, SmallText } from "components/ui/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadArtist } from "services/api";
import {
  ArtistImage,
  ArtistImageLoaderWrapper,
  ArtistInfoWrapper,
  SongsCountWrapper,
  TextWrapper,
  Wrapper,
} from "./styled";
import TracksTable from "components/TracksTable";
import Skeleton from "react-loading-skeleton";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

function Artist() {
  const { width } = useWindowSize();
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const artist = await loadArtist(artistId);
        setArtist(artist);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <Wrapper>
      <ArtistInfoWrapper>
        {artist ? (
          <ArtistImage src={artist?.artist?.picture_big} alt={`${artist?.artist?.name}'s photo`} />
        ) : (
          <Skeleton
            width={width < breakpoints.lg ? "100%" : 350}
            height={width < breakpoints.lg ? 176 : 350}
            borderRadius={25}
            wrapper={ArtistImageLoaderWrapper}
          />
        )}
        <TextWrapper>
          <MainTitle>{artist?.artist?.name || <Skeleton width={200} />}</MainTitle>
          <SongsCountWrapper>
            <Music />
            <SmallText>
              {isLoading ? <Skeleton width={40} /> : `${artist?.artist?.nb_fan} Fans`}
            </SmallText>
          </SongsCountWrapper>
        </TextWrapper>
      </ArtistInfoWrapper>
      <div>
        <SectionTitle>Top Tracks</SectionTitle>
        <TracksTable isLoading={isLoading} tracks={artist?.tracks} />
      </div>
    </Wrapper>
  );
}

export default Artist;
