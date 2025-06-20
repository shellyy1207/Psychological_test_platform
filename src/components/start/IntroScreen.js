import React from "react";
import { Typography, Button, Space } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

// 介紹畫面
const IntroScreen = ({ onStart }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }} // 淡入效果
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={styles.container}
    >
      <Title level={1}>{t("start_title")}</Title>
      <Paragraph style={styles.description}>{t("start_description")}</Paragraph>

      <Space style={{ marginTop: "2rem" }}>
        <motion.button whileHover={{ scale: 1.25 }} style={styles.button} onClick={onStart}>
          {t("start_button")}
        </motion.button>
      </Space>
    </motion.div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    padding: "4rem 2rem",
    backgroundColor: "#fffefc",
    fontFamily: "sans-serif",
  },
  description: {
    marginBottom: "2rem",
    fontSize: "16px",
    color: "#444",
  },
  button: {
    backgroundColor: "#fbb1d8",
    borderColor: "#fbb1d8",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "10px 28px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(251, 177, 216, 0.4)",
    animation: "glow 2.5s ease-in-out infinite",
  },
  
};

export default IntroScreen;
