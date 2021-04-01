import { Result } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

function ErrorFallback({ error }) {
  return (
    <Result
      status="500"
      title="500"
      subTitle={
        <>
          <div>Sorry, something went wrong!</div>
          <div>{error?.error.toString()}</div>
          <div>{error?.componentStack}</div>
        </>
      }
    />
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
};

export default ErrorFallback;
