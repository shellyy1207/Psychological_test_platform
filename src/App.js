import React, { useEffect, useRef, useState } from "react";
import { SoundOutlined, SoundFilled } from "@ant-design/icons";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Space, Tooltip } from "antd";
import "./i18n";

import StartPage from "./StartPage";
import TestPage from "./TestPage";
import ResultLoading from "./ResultLoading";
import ResultPage from "./ResultPage";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);


  useEffect(() => {
    if (["/test", "/result-loading", "/result"].includes(location.pathname)) {
      audioRef.current?.play().catch(() => {});
    } else {
      audioRef.current?.pause();
      audioRef.current.currentTime = 0;
    }
  }, [location]);

  return (
    <>
      {/* 語言切換器 */}
      <div style={styles.langSwitcher}>
        <Space>
          <Button size="small" onClick={() => i18n.changeLanguage("zh")}>中文</Button>
          <Button size="small" onClick={() => i18n.changeLanguage("en")}>英文</Button>
          <Button size="small" onClick={() => i18n.changeLanguage("ja")}>日文</Button>
          <Tooltip title={muted ? "開啟音樂" : "靜音"}>
            <Button
              size="small"
              shape="circle"
              onClick={() => setMuted((prev) => !prev)}
              icon={
                muted ? (
                  <SoundFilled style={{ opacity: 0.3 }} />
                ) : (
                  <SoundOutlined />
                )
              }
            />
          </Tooltip>
        </Space>
      </div>

      {/* 背景音樂 */}
      <audio ref={audioRef} loop muted={muted}>
        <source src="/music/bg.mp3" type="audio/mpeg" />
      </audio>

      {/* 路由定義 */}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result-loading" element={<ResultLoading />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

const styles = {
  langSwitcher: {
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: 1000,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "6px 12px",
    borderRadius: "12px",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)"
  }
};

export default App;
