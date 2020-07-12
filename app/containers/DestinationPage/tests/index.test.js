import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import DestinationPage from '../index';

describe('<DestinationPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <DestinationPage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
