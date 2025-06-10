import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography, Button, Image, Card, Space } from "antd";
import { motion } from "framer-motion";


const { Title, Paragraph } = Typography;

// 圖片連結對應角色
const characterImages = {
  "大耳狗": "https://d2ur3228349jyd.cloudfront.net/assets/img/characters/mv/cinnamon.png",
  "帕恰狗": "https://upload.wikimedia.org/wikipedia/zh/e/ea/Pochacco_character.png",
  "雙星仙子Lala": "https://d2ur3228349jyd.cloudfront.net/assets/img/characters/mv/kikilala.png",
  "雙星仙子Kiki": "https://d2ur3228349jyd.cloudfront.net/assets/img/characters/mv/kikilala.png",
  "庫洛米": "https://upload.wikimedia.org/wikipedia/zh/a/a9/Kuromi_characters.png",
  "大眼蛙": "https://upload.wikimedia.org/wikipedia/zh/4/4d/Kero_Kero_Keroppi_character.png"
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { nickname, scores } = location.state || {};

  if (!scores || !nickname) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Title level={3}>{t("no_result")}</Title>
        <Button type="primary" onClick={() => navigate("/")}>
          {t("again")}
        </Button>
      </div>
    );
  }

  const resultCharacter = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  const description = t(`characterDescriptions.${resultCharacter}`);
  const imageUrl = characterImages[resultCharacter];

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          bordered={false}
          style={{
            maxWidth: 500,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            borderRadius: "16px",
          }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Title level={3}>{t("your_result", { nickname })}</Title>
            <Title level={2} style={{ color: "#ff69b4" }}>{resultCharacter} 🎉</Title>
            <Image
              width={180}
              src={imageUrl}
              alt={resultCharacter}
              preview={false}
              style={{ borderRadius: "12px" }}
            />
            <Paragraph style={{ fontSize: "16px", lineHeight: 1.8 }}>
              {description}
            </Paragraph>
            <Button
              type="primary"
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "#fbb1d8",
                borderColor: "#fbb1d8",
                color: "#fff"
              }}
            >
              {t("again")}
            </Button>
          </Space>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResultPage;
