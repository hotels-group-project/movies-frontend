import { useRouter } from 'next/router';
import { FC, memo, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setFilterActivated } from '../../../../store/reducers/filterActivatedSlice';
import { setFilteredMovies } from '../../../../store/reducers/filteredMoviesSlice';
import { FilterTitle } from '../../../../types/types';
import { findMovies } from '../../../../utils/Api';
import { changePlusToUnicode, routerQueryToString } from '../../../../utils/helpers';

import styles from './FilterPopup.module.scss';
import { FilterPopupProps } from './FilterPopup.types';
import GenresFilter from './GenresFilter/GenresFilter';

const FilterPopup: FC<FilterPopupProps> = ({ className, title }) => {
  const router = useRouter();
  const { query } = router;
  const dispatch = useAppDispatch();
  const genres = useAppSelector(state => state.filters.genres);
  const countries = useAppSelector(state => state.filters.countries);

  const removeQueryParam = useCallback(
    (type: FilterTitle) => {
      delete query[type];
      router.replace({ query }, undefined, { shallow: true });
    },
    [query, router],
  );

  useEffect(() => {
    if (!query.genres && !query.years && !query.countries) {
      dispatch(setFilterActivated(false));
      return;
    }

    const genresUrl = changePlusToUnicode(routerQueryToString(query.genres));
    const yearsUrl = changePlusToUnicode(routerQueryToString(query.years));
    const countriesUrl = changePlusToUnicode(routerQueryToString(query.countries));
    const pageUrl = routerQueryToString(query.page);

    findMovies(genresUrl, yearsUrl, countriesUrl, pageUrl)
      .then(res => {
        if (res.statusCode) throw Error(`${res.statusCode} ${res.message}`);
        dispatch(setFilteredMovies(res));
      })
      .catch(err => console.log(err));
    dispatch(setFilterActivated(true));
  }, [dispatch, query]);

  return (
    <div className={`${styles.popup} ${styles[`popup_${title}`]} ${className ? className : ''}`}>
      {title === 'genres' && <GenresFilter removeQueryParam={removeQueryParam} filters={genres} type={title} />}
      {title === 'countries' && <GenresFilter removeQueryParam={removeQueryParam} filters={countries} type={title} />}
      {title === 'years' && <p>{title}</p>}
      {title === 'rating' && <p>{title}</p>}
      {title === 'producer' && <p>{title}</p>}
      {title === 'actor' && <p>{title}</p>}
    </div>
  );
};

export default memo(FilterPopup);
