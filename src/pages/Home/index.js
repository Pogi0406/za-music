import { Hero, Genres, Artists } from "components/HomePage";
import React, { useEffect, useState } from "react";
import { GreyTitle, TrendsAndArtistsSection, StyledAside } from "./styled";
import TracksTable from "components/TracksTable";
import { SectionTitle } from "components/ui/Typography";
import { toast } from "react-toastify";
import { loadCharts, loadTopTracks } from "services/api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const [chart, setChart] = useState();
  const [radio, setRadio] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [chart, radio] = await Promise.all([loadCharts(), loadTopTracks()]);
        setChart(chart);
        setRadio(radio);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <main>
      <Hero tracks={radio}></Hero>
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <TracksTable isLoading={isLoading} tracks={chart?.tracks?.data} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </main>
  );
}

export default Home;
