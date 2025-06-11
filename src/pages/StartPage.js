import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { message, Form } from "antd";
import { useTranslation } from "react-i18next";

import IntroScreen from "../components/start/IntroScreen";
import NameInputScreen from "../components/start/NameInputScreen";

const StartPage = () => {
  const [step, setStep] = useState("intro");
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
    }, 3000);
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

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
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
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fffefc",
    minHeight: "calc(100vh - 165px - 100px)", // 扣掉 header + footer 的高度
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
  },
  inner: {
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
    margin: "0 auto", // 自動置中
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
};


export default StartPage;
