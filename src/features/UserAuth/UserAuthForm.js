import React from 'react';
import { Row, Form, Input, Button } from 'antd';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import getValidateMessages from 'lib/helpers/getValidationMessages';
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
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      validateMessages={getValidateMessages(messages, 'name')}
    >
      <Form.Item
        className="mb-1"
        name="email"
        rules={[{ required: true }, { type: 'email' }]}
        hasFeedback
      >
        <Input placeholder={messages.Email} />
      </Form.Item>

      <Form.Item
        className="mb-3"
        name="password"
        rules={[{ required: true }]}
        hasFeedback
      >
        <Input.Password placeholder={messages.Password} />
      </Form.Item>

      <Row type="flex" justify="center">
        <Form.Item>
          <Button
            size="large"
            className="px-4"
            type="primary"
            htmlType="submit"
          >
            {messages.Submit}
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}

export default UserAuthForm;
