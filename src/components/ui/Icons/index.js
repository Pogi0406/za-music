import styled from "styled-components";
import { ReactComponent as PlayIcon } from "assets/icons/play.svg";
import { ReactComponent as PreviousIcon } from "assets/icons/previous.svg";
import { ReactComponent as PauseIcon } from "assets/icons/pause.svg";
import { ReactComponent as VolumeIcon } from "assets/icons/volume.svg";
import { ReactComponent as MusicIcon } from "assets/icons/music.svg";
import { ReactComponent as LeftArrowIcon } from "assets/icons/leftArrow.svg";
import { ReactComponent as LikeIcon } from "assets/icons/like.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

const Play = styled(PlayIcon)`
  stroke: ${(props) => props.color || "white"};
  fill: ${(props) => props.color || "white"};
`;

const Previous = styled(PreviousIcon)`
  stroke: ${(props) => props.color || "white"};
  fill: ${(props) => props.color || "white"};
`;

const Pause = styled(PauseIcon)`
  stroke: ${(props) => props.color || "#C6C6C6"};
  fill: ${(props) => props.color || "#C6C6C6"};
`;

const Next = styled(PreviousIcon)`
  stroke: ${(props) => props.color || "white"};
  fill: ${(props) => props.color || "white"};
  rotate: 180deg;
`;

const Volume = styled(VolumeIcon)`
  stroke: ${(props) => props.color || "white"};
  fill: ${(props) => props.color || "none"};
`;

const Music = styled(MusicIcon)`
  stroke: ${(props) => props.color || "#878787"};
  fill: ${(props) => props.color || "none"};
`;

const LeftArrow = styled(LeftArrowIcon)`
  stroke: ${(props) => props.color || "#878B92"};
  fill: ${(props) => props.color || "none"};
`;

const RightArrow = styled(LeftArrowIcon)`
  stroke: ${(props) => props.color || "#878B92"};
  fill: ${(props) => props.color || "none"};
  rotate: 180deg;
`;

const Like = styled(LikeIcon)`
  stroke: ${(props) => props.color || "white"};
  fill: ${(props) => props.color};
`;

const Search = styled(SearchIcon)`
  fill: ${(props) => props.color || "white"};
`;

export { Play, Previous, Pause, Next, Volume, Music, LeftArrow, RightArrow, Like, Search, Logo };
