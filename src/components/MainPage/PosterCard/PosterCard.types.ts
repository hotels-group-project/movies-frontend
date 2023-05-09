export interface PosterCardProps {
  id: number;
  img: string;
  titleImg: string;
  description: string;
  buttonTitle: string;
  title: string;
  link: string;
  height: number;
  heightTablet: number;
  imgTablet: string;
}

export interface Props {
  cardElem: PosterCardProps;
}
