import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function NotFoundPage() {
  const { goBack } = useHistory();

  return (
    <div>
      <h4>
        <FormattedMessage id="404" />
      </h4>
      <p>
        <FormattedMessage id="Sorry, the page you visited does not exist." />
      </p>
      <button onClick={goBack} type="button">
        <FormattedMessage id="Go Back" />
      </button>
    </div>
  );
}

export default NotFoundPage;
