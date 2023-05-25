import { useRouter } from 'next/router';
import { FC, memo, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setFilterActivated } from '../../../../store/reducers/filterActivatedSlice';
import { setFilteredMovies } from '../../../../store/reducers/filteredMoviesSlice';
import { FilterTitle } from '../../../../types/types';
import { findMovies } from '../../../../utils/Api';
import { changePlusToUnicode, routerQueryToString } from '../../../../utils/helpers';

import { FILTER_RATING, FILTER_YEARS } from './FilterPopup.constants';
import styles from './FilterPopup.module.scss';
import { FilterPopupProps } from './FilterPopup.types';
import GenresFilter from './GenresFilter/GenresFilter';
import PersonFilter from './PersonFilter/PersonFilter';
import YearsFilter from './YearsFilter/YearsFilter';

const FilterPopup: FC<FilterPopupProps> = ({ className, title }) => {
  const router = useRouter();
  const { query } = router;
  const dispatch = useAppDispatch();
  const genres = useAppSelector(state => state.filters.genres);
  const countries = useAppSelector(state => state.filters.countries);
  const { filteredMovies } = useAppSelector(state => state.filteredMovies);
  console.log(filteredMovies);

  const removeQueryParam = useCallback(
    (type: FilterTitle) => {
      delete query[type];
      router.replace({ query }, undefined, { shallow: true });
    },
    [query, router],
  );

  useEffect(() => {
    if (
      !query.genres &&
      !query.years &&
      !query.countries &&
      !query.rating &&
      !query.producer &&
      !query.actor &&
      !query.votes
    ) {
      dispatch(setFilterActivated(false));
      return;
    }

    const genresUrl = changePlusToUnicode(routerQueryToString(query.genres));
    const countriesUrl = changePlusToUnicode(routerQueryToString(query.countries));
    const yearsUrl = routerQueryToString(query.years);
    const ratingUrl = routerQueryToString(query.rating);
    const votesUrl = routerQueryToString(query.votes);
    const producerUrl = routerQueryToString(query.producer);
    const actorUrl = routerQueryToString(query.actor);
    const pageUrl = routerQueryToString(query.page);

    findMovies(genresUrl, yearsUrl, countriesUrl, ratingUrl, votesUrl, producerUrl, actorUrl, pageUrl)
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
      {title === 'years' && <YearsFilter removeQueryParam={removeQueryParam} filters={FILTER_YEARS} type={title} />}
      {title === 'rating' && <YearsFilter removeQueryParam={removeQueryParam} filters={FILTER_RATING} type={title} />}
      {(title === 'producer' || title === 'actor') && <PersonFilter removeQueryParam={removeQueryParam} type={title} />}
    </div>
  );
};

export default memo(FilterPopup);
