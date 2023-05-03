export type SliderItemProps = {
  id: number;
  src: string;
};

export type SliderItemsProps = Array<SliderItemProps>;

export type Props = {
  items: SliderItemsProps;
  slidesCount: number;
  autoplayDelay?: boolean;
};
