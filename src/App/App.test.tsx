import { render } from '@testing-library/react';

import App from './App';

describe('app', () => {
  test('render app', async () => {
    render(<App />);
  });
});
