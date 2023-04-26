export interface Breakpoint {
  isDesktop: boolean;
  isTablet: boolean;
}

export interface Variants {
  variant:
    | 'default'
    | 'arrow'
    | 'arrow_s'
    | 'arrow_m'
    | 'border'
    | 'border_min'
    | 'border_column'
    | 'info'
    | 'sort_circle'
    | 'sort_square';
}
