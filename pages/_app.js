import Layout from "../components/layout";
import "antd/dist/antd.css";
import "../styles/globals.css";
import { Provider } from 'react-redux'
import reducer from '../redux/reducers'
import { createStore } from 'redux'

const codeStore = createStore(reducer)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={codeStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
