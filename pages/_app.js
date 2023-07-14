import { Provider } from 'react-redux';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { persistor, store } from "../app/store"
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
