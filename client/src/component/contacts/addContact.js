import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Input, Button } from "antd";
import { addContact } from "../../actions";
const AddContact = (props) => {
  const [form] = Form.useForm();
  const { addContact, resolve } = props;
  const [addingLoader, setAddingLoader] = useState(false);

  const onFinish = async (values) => {
    setAddingLoader(true);
    const result = await addContact(values);
    if (result) {
      form.resetFields();
      resolve();
    }
    setAddingLoader(false);
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Row gutter={12}>
          <Col span={24}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Contact must have name",
                },
              ]}
            >
              <Input placeholder="enter name"></Input>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Contact must have mobile number",
                },
              ]}
            >
              <Input placeholder="enter mobile"></Input>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item>
              <Button
                loading={addingLoader}
                disabled={addingLoader}
                block
                htmlType="submit"
                type="primary"
              >
                {" "}
                Add{" "}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default connect(null, { addContact })(AddContact);
