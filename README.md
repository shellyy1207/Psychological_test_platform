# 🎀 Sanrio 心理測驗平台

你是哪個三麗鷗角色？  
透過 7 道互動式心理題目，分析你的個性，看看你最像的是大耳狗、帕恰狗、庫洛米，還是雙星仙子？

---

## 🔗 Demo 頁面

👉 [點我開始測驗](http://localhost:3000)  
（可替換為實際部署網址）

---

## 📝 專案介紹

本專案為一個以 **Sanrio（三麗鷗）角色為主題**的互動心理測驗平台，使用 React 架構開發，支援：
- 多語系切換（中文 / 英文 / 日文）
- 使用者暱稱輸入與個性化問句
- 測驗過場動畫與得分邏輯計算
- 結果角色分析與圖文呈現
- Facebook / Line / 複製連結 一鍵分享
- localStorage 記錄上次測驗結果

---

## ⚙️ 使用技術與套件

| 分類 | 套件名稱 | 功能描述 |
|------|-----------|----------|
| 核心框架 | `react`, `react-dom` | 建立 SPA 架構 |
| 路由系統 | `react-router-dom` | 控制頁面導覽 |
| UI 元件庫 | `antd` | 表單、按鈕、進度條等介面 |
| 動畫 | `framer-motion` | 過場動畫、複製提示 |
| 多語系 | `i18next`, `react-i18next` | 語言切換與翻譯管理 |
| 分享功能 | `react-share` | Facebook、Line 分享按鈕 |
| 連結複製 | `react-copy-to-clipboard` | 一鍵複製分享連結 |
| 圖示 | `react-icons` | 使用 Line 與連結 icon |

---

## 📁 專案結構（部分）

📁 src/
├── App.js
├── i18n.js
├── questions.js
├── pages/
│ ├── StartPage.js
│ ├── TestPage.js
│ ├── ResultPage.js
│ ├── ResultLoading.js
│ ├── HistoryPage.js
│ └── AboutPage.js
└── components/
└── start/
├── IntroScreen.js
└── NameInputScreen.js

---

## 🚀 使用方式

```bash
# 安裝套件
npm install

# 啟動本地伺服器
npm start
```

---
💻 環境需求
Node.js 18+

npm 9+

建議使用 Chrome / Edge 等現代瀏覽器

---

## 📜 專案資訊
班級：智商二乙

學號：C112156230

姓名：張庭溱

## 🎵 素材來源
bg.mp3：來自線上免費音樂庫（如 Free Music Archive、Pixabay Music）

角色圖片：引用自 Wikipedia，僅供非商業展示使用

