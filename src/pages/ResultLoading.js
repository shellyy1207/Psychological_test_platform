import React, { useEffect } from "react"; 
import { useNavigate, useLocation } from "react-router-dom"; 
import { Spin, Typography } from "antd"; 
import { useTranslation } from "react-i18next"; 

const { Paragraph } = Typography; 

const ResultLoading = () => {
  // 結果載入頁面 component
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const { t } = useTranslation(); 
  const { nickname, scores } = location.state || {}; 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result", {
        state: { nickname, scores } 
      });
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate, nickname, scores]); 

  return (
    <div style={styles.container}>
      <Spin size="large" /> 
      <Paragraph style={styles.text}>
        {t("calculating_result") || "正在分析你的結果..."}
      </Paragraph>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: "1.5rem",
    fontSize: "18px",
    textAlign: "center"
  }
};

export default ResultLoading; 