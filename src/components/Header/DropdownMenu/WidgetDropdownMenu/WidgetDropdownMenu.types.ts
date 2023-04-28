export interface WidgetDropdownMenuProps {
  animatedImages: Array<ImagesTypes>;
}

interface ImagesTypes {
  id: number;
  images: Array<{ id: number; src: string }>;
}
