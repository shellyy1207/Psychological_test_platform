import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography, Button, Image, Card, Space } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { FacebookShareButton, LineShareButton, FacebookIcon, LineIcon } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiLink } from "react-icons/fi";

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

  const [copied, setCopied] = useState(false);
  const shareUrl = "http://localhost:3000/about";

  // 根據分數計算結果角色
  const resultCharacter = scores
    ? Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0]
    : null;

  // 根據結果角色取得圖片連結
  const imageUrl = characterImages[resultCharacter];
  // 根據結果角色取得描述
  const description = t(`characterDescriptions.${resultCharacter}`);


  useEffect(() => {
    if (nickname && resultCharacter) {
      const resultData = {
        nickname,
        character: resultCharacter,
        time: new Date().toISOString()
      };

      // 儲存結果到 localStorage
      localStorage.setItem("sanrio-last-result", JSON.stringify(resultData));

      // 檢查並儲存歷史紀錄
      const historyKey = "sanrio-history";
      const existing = localStorage.getItem(historyKey);
      const parsed = existing ? JSON.parse(existing) : [];

      const last = parsed[0]; 
      const isSame =
        last &&
        last.nickname === resultData.nickname &&
        last.character === resultData.character;

      if (!isSame) {
        const updatedHistory = [resultData, ...parsed];
        localStorage.setItem(historyKey, JSON.stringify(updatedHistory));
      }
    }
  }, [nickname, resultCharacter]);

  // 如果沒有分數或暱稱，顯示錯誤訊息
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

  return (
    // 外層
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      {/* 動畫 */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* 卡片 */}
        <Card
          variant="borderless"
          style={{
            maxWidth: 500,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            borderRadius: "16px",
          }}
        >
          {/* 卡片內容 */}
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
            <div style={{ marginTop: "1rem" }}>
              <Paragraph style={{ marginBottom: "0.5rem" }}>
                {t("share_prompt")}
              </Paragraph>
              <Space>
                {/* Facebook 分享按鈕 */}
                <FacebookShareButton url={shareUrl} quote={t("share_message", { character: resultCharacter })}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                {/* Line 分享按鈕 */}
                <LineShareButton url={shareUrl} title={t("share_message", { character: resultCharacter })}>
                  <LineIcon size={32} round />
                </LineShareButton>

                {/* 複製連結按鈕 */}
                <CopyToClipboard
                  text={shareUrl}
                  onCopy={() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                >
                  <Button
                    shape="circle"
                    style={{
                      backgroundColor: "#aaa",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    <FiLink size={18} />
                  </Button>
                </CopyToClipboard>
              </Space>
            </div>

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

      {/* 複製成功動畫 */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fbb1d8",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              zIndex: 9999,
              fontSize: "16px"
            }}
          >
            📋 {t("copy_success")}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResultPage;