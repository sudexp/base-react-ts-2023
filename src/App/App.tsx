import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/system';
import { StyledEngineProvider } from '@mui/material/styles';

import { store } from 'redux/store';
import { router } from 'config/router';
import theme from 'config/theme';
import Toast from 'components/Toast';

import 'react-toastify/dist/ReactToastify.css';

const helmetContext = {};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <HelmetProvider context={helmetContext}>
            <RouterProvider router={router} />
            <Toast />
          </HelmetProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
