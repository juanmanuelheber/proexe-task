import { Provider } from 'react-redux';
import { Layout } from './components/layout/Layout'
import { store } from './redux/store';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppRoutes />
      </Layout>
    </Provider>
  );
}