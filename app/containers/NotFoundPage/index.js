/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import PageLayout from '../../components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <div style={{ minHeight: '75vh', padding: 64 }}>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    </PageLayout>
  );
}
