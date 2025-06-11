import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import { Form } from "antd";

import IntroScreen from "../components/start/IntroScreen";
import NameInputScreen from "../components/start/NameInputScreen";

const StartPage = () => {
  const [step, setStep] = useState("intro"); // intro → transition → nameInput
  const [form] = Form.useForm();
  const [lastResult, setLastResult] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const saved = localStorage.getItem("sanrio-last-result");
    if (saved) {
      try {
        setLastResult(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse last result", e);
      }
    }
  }, []);

  const handleStartTransition = () => {
    setStep("transition");
    setTimeout(() => {
      setStep("nameInput");
    }, 3000); // 3秒後進入輸入名字
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then(values => {
        navigate("/test", { state: { nickname: values.nickname } });
      })
      .catch(() => {
        message.warning(t("placeholder"));
      });
  };

  const handleClearLastResult = () => {
    localStorage.removeItem("sanrio-last-result");
    setLastResult(null);
  };

  return (
    <div style={styles.container}>

      {step === "intro" && <IntroScreen onStart={handleStartTransition} />}
      {step === "nameInput" && <NameInputScreen form={form} onSubmit={handleSubmit} />}

      <AnimatePresence>
        {step === "transition" && (
          <motion.div
            key="transition"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={styles.transitionScreen}
          >
            <h2 style={{ color: "#fff", fontSize: "28px" }}>
              {t("transition_text")}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
    backgroundColor: "#fffefc",
    padding: "3rem 1rem",
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
  },
  lastResult: {
    backgroundColor: "#fff0f5",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "2rem",
    border: "1px solid #ffb6c1",
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  clearBtn: {
    marginTop: "0.5rem",
    background: "none",
    border: "none",
    color: "#d33",
    cursor: "pointer",
    fontSize: "14px",
  }
};

export default StartPage;
