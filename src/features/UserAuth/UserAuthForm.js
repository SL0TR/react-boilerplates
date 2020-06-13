import React from 'react';
import { Row, Form, Input, Button } from 'antd';
import { useIntl } from 'react-intl';
import getValidateMessages from 'lib/helpers/getValidationMessages';

function UserAuthForm() {
  const { messages } = useIntl();
  // const onFinish = values => {};

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      // onFinish={onFinish}
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
