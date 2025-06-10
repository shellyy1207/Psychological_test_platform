import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography, Input, Button, Space } from "antd";

const { Title, Paragraph } = Typography;


const StartPage = () => {
  const [nickname, setNickname] = useState("");
  const [isStarting, setIsStarting] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

const handleStart = () => {
    if (nickname.trim() === "") {
      alert(t("placeholder"));
      return;
    }
    setIsStarting(true);
    setTimeout(() => {
      navigate("/test", { state: { nickname } });
    }, 2000); // 延遲 2 秒進入
  };


  return (
    <div style={styles.container}>

      <Title level={1}>{t("title")}</Title>

      <Paragraph style={styles.story}>
        {t("story")}
      </Paragraph>

      <Space direction="vertical" size="large" align="center">
        <Input
          placeholder={t("placeholder")}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={{ width: 280 }}
        />
        <Button
          type="primary"
          size="large"
          style={{
            backgroundColor: "#fbb1d8", // 粉紅色背景
            borderColor: "#fbb1d8",     // 邊框同步
            color: "#fff"               // 白色文字
          }}
          onClick={handleStart}
        >
          {t("start")}
        </Button>

      </Space>

      <AnimatePresence>
        {isStarting && (
          <motion.div
            key="transition"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={styles.transitionScreen}
          >
            <h2 style={{ color: "#fff", fontSize: "28px" }}>一段神奇旅程即將展開…</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "3rem",
    fontFamily: "sans-serif",
    backgroundColor: "#fffefc",
  },
  story: {
    whiteSpace: "pre-line",
    maxWidth: "480px",
    margin: "0 auto 2rem",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  transitionScreen: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(135deg, #fde2f3, #c8f4ff)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  backdropFilter: "blur(8px)",
}

};

export default StartPage;
