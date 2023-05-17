import { FC, memo } from 'react';

import { useAppSelector } from '../../../../hooks/redux';

import styles from './FilterPopup.module.scss';
import { FilterPopupProps } from './FilterPopup.types';
import GenresFilter from './GenresFilter/GenresFilter';

const FilterPopup: FC<FilterPopupProps> = ({ className, title }) => {
  const genres = useAppSelector(state => state.filters.genres);
  const countries = useAppSelector(state => state.filters.countries);

  return (
    <div className={`${styles.popup} ${styles[`popup_${title}`]} ${className ? className : ''}`}>
      {title === 'genres' && <GenresFilter filters={genres} type={title} />}
      {title === 'countries' && <GenresFilter filters={countries} type={title} />}
      {title === 'years' && <p>{title}</p>}
      {title === 'rating' && <p>{title}</p>}
      {title === 'producer' && <p>{title}</p>}
      {title === 'actor' && <p>{title}</p>}
    </div>
  );
};

export default memo(FilterPopup);
