import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';

import { setupStore } from '../store/store';

import '../styles/globals.scss';

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
