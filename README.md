# 🎀 Sanrio 心理測驗平台
一個基於 React 的互動式心理測驗平台，讓使用者透過回答問題來找出最適合自己的三麗鷗角色。

## 🌟 系統整體介紹

這是一個結合心理測驗與三麗鷗角色的互動式網站平台。使用者可以透過回答一系列的心理測驗問題，系統會根據答案分析出最符合使用者個性的三麗鷗角色。平台支援多語言（繁體中文、英文、日文），並提供背景音樂、動畫效果以及社群分享功能，創造出豐富的使用者體驗。

## 🎯 系統功能介紹

### 1. 多語言支援
- 支援繁體中文、英文、日文三種語言
- 使用 react-i18next 實現即時語言切換
- 所有界面文字和內容都支援多語言

### 2. 互動式心理測驗
- 提供多道心理測驗問題
- 每個問題對應不同的三麗鷗角色選項
- 根據使用者選擇計算最佳匹配角色

### 3. 動態視覺效果
- 使用 framer-motion 提供流暢的頁面轉場動畫
- Swiper 輪播展示角色介紹
- 載入動畫和互動回饋效果

### 4. 背景音樂系統
- 自動播放背景音樂
- 音樂靜音/取消靜音控制
- 根據頁面自動播放/暫停

### 5. 測驗結果系統
- 顯示最匹配的三麗鷗角色
- 提供角色詳細描述
- 結果載入動畫效果

### 6. 歷史紀錄功能
- 自動儲存測驗歷史到本地儲存
- 顯示過往測驗結果
- 支援清除歷史紀錄

### 7. 社群分享功能
- Facebook 分享按鈕
- Line 分享按鈕
- 一鍵複製連結功能

### 8. 角色介紹頁面
- 使用 Swiper 3D 效果展示所有角色
- 點擊角色可放大檢視
- Modal 彈窗顯示角色詳細資訊

## 🏗️ 系統設計與架構

### 技術架構

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

### 資料夾結構
```txt
src/ 
├── components/ # 共用組件 
│ ├── start/ # 開始頁面相關組件 
│ │ ├── IntroScreen.js 
│ │ └── NameInputScreen.js 
│ └── Footer.js # 頁尾組件 
├── pages/ # 頁面組件 
│ ├── StartPage.js # 首頁 
│ ├── TestPage.js # 測驗頁面 
│ ├── ResultLoading.js # 結果載入頁面 
│ ├── ResultPage.js # 結果顯示頁面 
│ ├── AboutPage.js # 關於我們頁面 
│ └── HistoryPage.js # 歷史紀錄頁面 
├── locales/ # 多語言檔案 
│ ├── zh.json # 繁體中文 
│ ├── en.json # 英文 
│ └── ja.json # 日文 
├── questions.js # 測驗題目資料 
├── i18n.js # 多語言設定 
└── App.js # 主要應用程式

```

### 核心功能流程
1. **使用者進入** → IntroScreen（介紹畫面）
2. **開始測驗** → NameInputScreen（輸入暱稱）
3. **進行測驗** → TestPage（答題頁面）
4. **結果計算** → ResultLoading（載入動畫）
5. **顯示結果** → ResultPage（結果展示）

### 資料流管理
- 使用 React Router 的 state 在頁面間傳遞資料
- LocalStorage 儲存歷史紀錄和最後結果
- useEffect 監聽路由變化控制背景音樂

## 🛠️ 系統環境設置

### 系統需求
- Node.js 16.0 或以上版本
- npm 或 yarn 套件管理工具
- 現代瀏覽器（Chrome、Firefox、Safari、Edge）

### 安裝步驟

1. **複製專案**
```bash
git clone <repository-url>
cd sanrio-personality-test
```

2. **安裝相依套件**
```bash
npm install
```

3. **啟動開發伺服器**
```bash
npm start
```

4. **開啟瀏覽器**
```bash
http://localhost:3000
```

**主要套件依賴**
{
  "react": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "react-i18next": "^12.0.0",
  "antd": "^5.0.0",
  "framer-motion": "^10.0.0",
  "swiper": "^9.0.0",
  "react-share": "^4.0.0",
  "react-copy-to-clipboard": "^5.0.0",
  "react-icons": "^4.0.0"
}

### 建置與部署

1. **建置生產版本**
```bash
npm run build
```

2. **本地預覽建置結果**
```bash
npm install -g serve
serve -s build
```

### 檔案配置

1. **音樂檔案**
將背景音樂檔案放置於 bg.mp3 (來自線上免費音樂庫 Pixabay Music)


2. **圖片資源**
Logo 檔案放置於 logo.png (自製)
角色圖：引用自 Sanrio 官方或 Wikipedia(僅供學術與非商業用途展示)

2. **環境變數（可選）**
創建 .env 檔案自定義設定：
```bash
REACT_APP_SHARE_URL=your-domain.com
```

## 📱 瀏覽器支援
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🔧 開發注意事項
- 所有文字內容請在 locales/ 資料夾中的 JSON 檔案進行修改
- 新增問題請修改 questions.js 檔案
- 角色圖片連結在 ResultPage.js 中的 characterImages 物件
- 樣式採用 inline styles 方式撰寫，集中在各組件底部的 styles 物件

## 📄 授權
此專案僅供學習和展示用途。
