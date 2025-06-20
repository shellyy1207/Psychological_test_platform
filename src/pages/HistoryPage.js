import React, { useEffect, useState } from "react";
import { Typography, Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const saved = localStorage.getItem("sanrio-history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("讀取歷史紀錄失敗", e);
      }
    }
  }, []);

  // 清除歷史紀錄
  const handleClear = () => {
    localStorage.removeItem("sanrio-history");
    setHistory([]);
  };

  return (
    <div style={styles.container}>
      <Title level={2}>{t("last_result_title")}</Title>

      {history.length > 0 ? (
        <>
          {history.map((item, index) => (
            <div key={index} style={styles.recordCard}>
              <Paragraph>
                👤 <strong>{item.nickname}</strong> 的結果是：<strong>{item.character}</strong>
              </Paragraph>
              <Paragraph style={{ color: "#999" }}>
                🕒 {new Date(item.time).toLocaleString()}
              </Paragraph>
            </div>
          ))}

          <Button danger onClick={handleClear} style={{ marginTop: "1rem" }}>
            {t("clear_history")}
          </Button>
        </>
      ) : (
        <Empty description={t("no_result")} />
      )}

      <Button
        style={styles.backHomeButton}
        onClick={() => navigate("/")}
        >
            {t("back_home")}
      </Button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "4rem 2rem",
    backgroundColor: "#fffefc",
    fontFamily: "sans-serif",
  },
    recordCard: {
    backgroundColor: "#fff0f5",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "12px",
    border: "1px solid #ffd1dc",
  },
  backHomeButton: {
    marginTop: "2rem",
    backgroundColor: "#fbb1d8",
    borderColor: "#fbb1d8",
    color: "#fff",
    fontWeight: "bold"
  }
};

export default HistoryPage;
