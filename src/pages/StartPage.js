import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import IntroScreen from "../components/start/IntroScreen";
import NameInputScreen from "../components/start/NameInputScreen";

const StartPage = () => {
  const [step, setStep] = useState("intro");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStartTransition = () => {
    setStep("transition");
    setTimeout(() => {
      setStep("nameInput");
    }, 5000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        {step === "intro" && <IntroScreen onStart={handleStartTransition} />}
        {step === "nameInput" && (
          <NameInputScreen
            onSuccess={(nickname) => navigate("/test", { state: { nickname } })}
          />
        )}

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
              <h2 style={{ color: "#fff", fontSize: "28px" }}>{t("transition_text")}</h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 背景動畫 */}
        <div style={styles.bubbleContainer}>
          {Array.from({ length: 20 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const scale = Math.random() * 0.8 + 0.5;
            const type = ["heart", "star"][i % 2];
            return (
              <span
                key={i}
                className={`bubble ${type}`}
                style={{
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                  "--scale": scale,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fffefc",
    minHeight: "calc(100vh - 165px - 100px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  inner: {
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
    margin: "0 auto",
    zIndex: 2,
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
  bubbleContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
    overflow: "hidden",
    pointerEvents: "none",
  },
};

export default StartPage;
