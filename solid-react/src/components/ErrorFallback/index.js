import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getWithExpiry, setWithExpiry } from 'lib/helpers';

function ErrorFallback({ error }) {
  useEffect(() => {
    const chunkFailedMessage = /Loading chunk [\d]+ failed/;
    if (
      error?.error?.message &&
      chunkFailedMessage.test(error?.error.message)
    ) {
      console.log('chunk failed error!');
      if (!getWithExpiry('chunk_failed')) {
        setWithExpiry('chunk_failed', 'true', 10000);
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div>
      <div>Sorry, something went wrong!</div>
      <div>{error?.error.toString()}</div>
      <div>{error?.componentStack}</div>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
};

export default ErrorFallback;
