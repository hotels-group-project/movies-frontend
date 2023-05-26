import Image from 'next/image';
import { FC, memo } from 'react';

import LinkComponent from '../Shared/LinkComponent/LinkComponent';

import styles from './ActorPage.module.scss';

const ActorPage: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.actor}>
        <Image
          src="https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85"
          alt="Фото актера"
          width={120}
          height={144}
          className={styles.actorImg}
        />
        <h1 className={styles.actorMainTitle}>Оскар Айзек</h1>
        <h4 className={styles.actorForeignTitle}>Oscar Isaak</h4>
        <p>
          Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине
          братьев Коэн «Внутри Льюина Дэвиса».
        </p>
        <LinkComponent variant="text_reverse" link="#filmography" elemClassName={styles.actorFilmCount_white}>
          47 фильмов
        </LinkComponent>
        <div className={styles.actorContainer}>
          <h2 id="filmography" className={styles.actorFilmographyTitle}>
            Полная фильмография
          </h2>
          <span className={styles.actorFilmCount}> 47 фильмов</span>
        </div>
        <ul className={styles.actorFilmList}>
          <li className={styles.actorFilmItem}>
            <Image
              src="https://thumbs.dfs.ivi.ru/storage8/contents/9/d/d856dd5d021ade5457bd178006e3aa.jpg/172x264/?q=85"
              alt="Постер фильма"
              width={172}
              height={264}
              className={styles.actorFilmsPoster}
            />
            <div className={styles.actorFilmContainer}>
              <div className={styles.actorFilmInfo}>
                <p className={styles.actorFilmTitle}>2015</p>
                <p className={styles.actorFilmTitle}>Всевидящее око</p>
                <p className={styles.actorFilmRating}>Рейтинг иви: 7.6</p>
                <p className={styles.actorFilmRating}>Актер</p>
              </div>
              <LinkComponent variant="dark_big" link="https://www.ivi.ru/watch/137735">
                <h3>Подробнее</h3>
              </LinkComponent>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default memo(ActorPage);
