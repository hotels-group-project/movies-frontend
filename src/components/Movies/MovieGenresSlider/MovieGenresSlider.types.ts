export type Genres = {
  id?: number;
  img?: string;
  name: string;
};

export type GenresSliderItemsProps = Array<Genres>;

export type GenresSliderProps = {
  items: GenresSliderItemsProps;
};
