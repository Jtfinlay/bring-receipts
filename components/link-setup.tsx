'use client';

import { Button } from './ui/button';
import React from 'react';
import { usePlaidLink } from 'react-plaid-link';

interface IOwnProps {
  linkToken: string;
}

export default function LinkSetup(props: IOwnProps) {
  const [error, setError] = React.useState('');

  const onSuccess = React.useCallback((public_token: string) => {
    // If the access_token is needed, send public_token to server
    const exchangePublicTokenForAccessToken = async () => {
      console.log(public_token);
      const response = await fetch(
        'http://localhost:3000/api/plaid/store_access_token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: JSON.stringify({ public_token }),
        },
      );

      if (!response.ok) {
        setError('Unable to retrieve access token');
        return;
      }

      await response.json();

      window.history.pushState({}, '', '/');
    };

    exchangePublicTokenForAccessToken();
  }, []);

  const config: Parameters<typeof usePlaidLink>[0] = {
    token: props.linkToken,
    onSuccess,
  };
  const { open, ready } = usePlaidLink(config);

  return (
    <Button type="button" onClick={() => open()} disabled={!ready}>
      Connect with Plaid
    </Button>
  );
}
