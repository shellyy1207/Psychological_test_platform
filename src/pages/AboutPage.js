import React, { useEffect, useState } from "react";
import { Typography} from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  const { t } = useTranslation();
  const [lastResult, setLastResult] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("sanrio-last-result");
    if (saved) {
      try {
        setLastResult(JSON.parse(saved));
      } catch (e) {
        console.error("解析上次測驗結果失敗", e);
      }
    }
  }, []);

  return (
    <div style={styles.container}>
      <Title level={2}>{t("about_title")}</Title>
      <Paragraph style={styles.paragraph}>{t("about_paragraph1")}</Paragraph>
      <Paragraph style={styles.paragraph}>{t("about_paragraph2")}</Paragraph>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "4rem 2rem",
    backgroundColor: "#fffefc",
    fontFamily: "sans-serif",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#333",
  },
  card: {
    marginTop: "2rem",
    backgroundColor: "#fff0f5",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
};

export default AboutPage;
