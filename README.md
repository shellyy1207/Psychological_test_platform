# 🎀 Sanrio 心理測驗平台

測測你是哪個三麗鷗角色吧？  
透過 7 道互動式心理題目，分析你的個性，看看你最像的是大耳狗、帕恰狗、庫洛米，還是雙星仙子？

---

## 🔗 Demo 頁面

👉 [點我開始測驗](http://localhost:3000)

---

## 📝 專案介紹

本專案為一個以 **Sanrio（三麗鷗）角色為主題**的互動心理測驗平台，使用 React 架構開發，支援：

- 🎯 個性化心理測驗流程（含暱稱輸入、動畫轉場）
- 🌐 多語系切換（中文 / 英文 / 日文）全站翻譯
- 📊 測驗結果計算與角色判斷
- 📋 localStorage 紀錄所有測驗歷史
- 📱 結果頁一鍵分享（Facebook / Line / 複製連結）
- 🖼️ 角色介紹區使用 Swiper 套件展示 3D 卡片效果

---

## ⚙️ 使用技術與套件

| 分類       | 套件名稱                                        | 功能描述                      |
|------------|--------------------------------------------------|-------------------------------|
| 前端框架   | `react`, `react-dom`                            | 建立 SPA 前端應用             |
| 路由控制   | `react-router-dom`                              | 多頁導覽切換                  |
| UI 元件    | `antd`                                           | 表單、按鈕、排版等元件  |
| 動畫特效   | `framer-motion`                                 | 頁面轉場、動畫提示            |
| 國際化     | `i18next`, `react-i18next`                      | 多語系切換與翻譯              |
| 分享功能   | `react-share`                                   | FB、Line 分享按鈕             |
| 複製連結   | `react-copy-to-clipboard`                       | 一鍵複製結果連結              |
| 圖示資源   | `react-icons`                                   | 使用 icons（如連結、Line）    |
| 輪播套件   | `swiper`                                        | 在角色介紹中顯示 3D 卡片特效  |

---

## 📁 專案結構（節錄）

```txt
src/
├── App.js                     # 主架構與路由定義
├── i18n.js                    # 多語系初始化
├── questions.js               # 測驗題目設定
├── locales/                  # 各語系翻譯 JSON
│   ├── zh.json
│   ├── en.json
│   └── ja.json
├── pages/
│   ├── StartPage.js
│   ├── TestPage.js
│   ├── ResultPage.js
│   ├── ResultLoading.js
│   ├── HistoryPage.js
│   └── AboutPage.js
├── components/
│   ├── Footer.js              # 網站頁尾
│   └── start/
│       ├── IntroScreen.js
│       └── NameInputScreen.js
```

---
## 🚀 使用方式

```bash
# 安裝套件
npm install

# 啟動本地伺服器
npm start
```

---

## 💻 環境需求
Node.js 18+

npm 9+

現代瀏覽器（建議使用 Chrome 或 Edge）

---

## 📜 專案資訊
班級：智商二乙

學號：C112156230

姓名：張庭溱

---

## 🎵 素材來源
bg.mp3：來自線上免費音樂庫（如 Free Music Archive、Pixabay Music）

角色圖片：引用自 Sanrio 官方或 Wikipedia，僅供學術與非商業用途展示