import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Root from './Root';
import { store } from 'redux/store';
import { delay } from 'utils/delay';

describe('root', () => {
  test('loading text appears', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Root />
        </MemoryRouter>
      </Provider>
    );
    const loading = await screen.findByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });

  test('loading goes away, root text appears request successed', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Root />
        </MemoryRouter>
      </Provider>
    );

    await delay(3000);

    const root = await screen.findByText(/root/i);
    expect(root).toBeInTheDocument();
  });
});
