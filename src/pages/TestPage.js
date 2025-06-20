import React, { useState } from "react"; 
import { useLocation, useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import questions from "../questions"; 

import { Typography, Button, Progress, Space } from "antd";
const { Title, Paragraph } = Typography; 

const TestPage = () => {
  // 測驗頁面 component
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const { t } = useTranslation(); 
  const nickname = location.state?.nickname ;

  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [scores, setScores] = useState({}); // 儲存每個角色的分數
  const totalQuestions = questions.length; 
  const q = questions[currentQuestion]; 
  const progress = Math.round(((currentQuestion + 1) / totalQuestions) * 100); // 計算測驗進度


  const handleAnswer = (character) => {
    // 回答問題的 function
    setScores((prev) => ({
      ...prev,
      [character]: (prev[character] || 0) + 1, // 將該角色的分數+1
    }));

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result-loading", {
        state: { nickname, scores } 
      });
    }
  };


  return (
    <div style={styles.container}>
      <Title level={4}>
        {t("question_title", { current: currentQuestion + 1, total: totalQuestions })}
      </Title>
      <Progress
        percent={progress}
        showInfo={false}
        strokeColor="#fbb1d8"
        trailColor="#f0f0f0"
        style={{ marginBottom: "2rem" }}
      />

      <Paragraph style={styles.questionText}>
        {t(`questions.${q.id}.question`, { nickname })}
      </Paragraph>

      <Space direction="vertical" size="middle" style={styles.options}>
        {q.characterKeys.map((character, index) => (
          <Button
            key={index}
            type="default"
            size="large"
            block
            onClick={() => handleAnswer(character)}
            style={{
              borderRadius: "12px",
              backgroundColor: "#fff0f7",
              borderColor: "#ffb6c1",
              fontSize: "16px",
            }}
          >
            {t(`questions.${q.id}.options.${index}`)}
          </Button>
        ))}
      </Space>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "sans-serif",
    maxWidth: "720px",
    margin: "0 auto",
    textAlign: "center",
  },
  questionText: {
    fontSize: "18px",
    marginBottom: "1.5rem",
    lineHeight: "1.6",
  },
  options: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
};

export default TestPage;