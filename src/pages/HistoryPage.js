import React, { useEffect, useState } from "react";
import { Typography, Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const HistoryPage = () => {
  const [lastResult, setLastResult] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const saved = localStorage.getItem("sanrio-last-result");
    if (saved) {
      try {
        setLastResult(JSON.parse(saved));
      } catch (e) {
        console.error("讀取歷史紀錄失敗", e);
      }
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem("sanrio-last-result");
    setLastResult(null);
  };

  return (
    <div style={styles.container}>
      <Title level={2}>{t("last_result_title")}</Title>

      {lastResult ? (
        <>
          <Paragraph>
            {t("last_result_tip", {
              name: lastResult.nickname,
              character: lastResult.character,
            })}
          </Paragraph>
          <Paragraph>
            {t("last_result_time", {
              time: new Date(lastResult.time).toLocaleString(),
            })}
          </Paragraph>
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
  backHomeButton: {
    marginTop: "2rem",
    backgroundColor: "#fbb1d8",
    borderColor: "#fbb1d8",
    color: "#fff",
    fontWeight: "bold"
  }
};

export default HistoryPage;
