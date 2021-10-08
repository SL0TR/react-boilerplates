import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PRIVATE_ROUTE } from 'router';
import { loginRequest } from './reducer';

function UserAuthForm() {
  const { messages } = useIntl();
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = formData => {
    dispatch(
      loginRequest({
        formData,
        successText: `${messages['Successfully logged in!']}`,
      }),
    );
    history.push(`${PRIVATE_ROUTE.HOME}${PRIVATE_ROUTE.DASHBOARD}`);
  };

  return (
    <form name="basic" onSubmit={onFinish}>
      <input className="mb-2 mt-4" placeholder={messages.Email} />
      <input className="my-2" type="password" placeholder={messages.Password} />
      <button size="large" className="my-2 p-2" type="submit" htmlType="submit">
        {messages.Submit}
      </button>
    </form>
  );
}

export default UserAuthForm;
