import React, { useEffect, useRef, useState } from "react";
import { SoundOutlined, SoundFilled } from "@ant-design/icons";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Space, Tooltip } from "antd";
import "./i18n";

import StartPage from "./pages/StartPage";
import AboutPage from "./pages/AboutPage";
import HistoryPage from "./pages/HistoryPage";
import TestPage from "./pages/TestPage";
import ResultLoading from "./pages/ResultLoading";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";

function App() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      ["/test", "/result-loading", "/result"].includes(location.pathname)
    ) {
      audioRef.current?.play().catch(() => {});
    } else {
      audioRef.current?.pause();
      audioRef.current.currentTime = 0;
    }
  }, [location]);

  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.left}>
          <Link to="/" style={styles.logo}>
            <img src="/logo.png" alt="logo" style={styles.logoImage} />
            <span style={styles.logoText}>Sanrio 心理測驗</span>
          </Link>
          <Space size="middle" style={{ marginLeft: "2rem" }}>
            <Button type="text" style={styles.navBtn}>
              <Link to="/about" style={{ textDecoration: "none", color: "#555" }}>
                {t("nav.about")}
              </Link>
            </Button>
            <Button type="text" style={styles.navBtn}>
              <Link to="/history" style={{ textDecoration: "none", color: "#555" }}>
                {t("nav.history")}
              </Link>
            </Button>
            <Button
              type="text"
              style={styles.navBtn}
              href="https://github.com/shellyy1207/Psychological_test_platform"
              target="_blank"
            >
              {t("nav.github")}
            </Button>
          </Space>
        </div>
        <div style={styles.right}>
          <Space>
            <Button size="small" onClick={() => i18n.changeLanguage("zh")}>中文</Button>
            <Button size="small" onClick={() => i18n.changeLanguage("en")}>EN</Button>
            <Button size="small" onClick={() => i18n.changeLanguage("ja")}>日文</Button>
            <Tooltip title={muted ? t("sound.on") : t("sound.off")}>
              <Button
                size="small"
                shape="circle"
                onClick={() => setMuted((prev) => !prev)}
                icon={muted ? <SoundFilled style={{ opacity: 0.3 }} /> : <SoundOutlined />}
              />
            </Tooltip>
          </Space>
        </div>
      </div>

      {/* 音樂播放 */}
      <audio ref={audioRef} loop muted={muted}>
        <source src="/music/bg.mp3" type="audio/mpeg" />
      </audio>

      {/* Main Content */}
      <div style={styles.main}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result-loading" element={<ResultLoading />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  pageWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "80px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2rem",
    zIndex: 1000,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  main: {
    flex: 1,
    paddingTop: "80px",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logoImage: {
    height: "36px",
    marginRight: "0.5rem",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: "22px",
    color: "#f78fb3",
    fontFamily: "'Comic Sans MS', sans-serif",
  },
  navBtn: {
    color: "#555",
    fontWeight: "500",
    fontSize: "14px",
  },
};

export default App;
