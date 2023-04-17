import { FC, memo } from 'react';

import styles from './App.module.scss';

const App: FC = () => {
  return (
    <main className={styles.page}>
      <h1>Hello World!</h1>;
    </main>
  );
};

export default memo(App);
