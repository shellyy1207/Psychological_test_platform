import React from "react";
import { Typography, Form, Input, Button, Space } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const NameInputScreen = ({ form, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <div style={styles.container}>
      <Title level={4} style={{ whiteSpace: "pre-line" }}>
        {t("story_part2")}
      </Title>
      <Paragraph style={{ marginTop: "1rem", fontSize: "18px" }}>
        「{t("placeholder")}」
      </Paragraph>

      <Space direction="vertical" size="large" align="center">
        <Form form={form} layout="vertical" requiredMark={false} style={{ width: 280 }} onFinish={onSubmit}>
          <Form.Item name="nickname" rules={[{ required: true, message: t("placeholder") }]}>
            <Input placeholder={t("placeholder")} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              style={{
                backgroundColor: "#fbb1d8",
                borderColor: "#fbb1d8",
                color: "#fff",
              }}
            >
              {t("start")}
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "3rem 2rem",
    fontFamily: "sans-serif",
    backgroundColor: "#fffefc",
  },
};

export default NameInputScreen;
