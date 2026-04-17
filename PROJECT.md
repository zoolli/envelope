# Envelope Math Paint | 互動式包絡線藝術

數學之美的動態呈現。這是一個互動式網頁應用程式，透過兩種模式：**Axes（座標軸）** 和 **Circle（圓形）**，視覺化**包絡線**（String Art / Envelope），讓使用者探索由直線交匯形成的曲線。

![Preview](https://via.placeholder.com/1200x600.png?text=Envelope+Math+Paint+-+Premium+Light+Mode)

---

## 目錄

1. [功能特點](#功能特點)
2. [專案結構](#專案結構)
3. [快速開始](#快速開始)
4. [數學原理](#數學原理)
5. [操作說明](#操作說明)
6. [技術細節](#技術細節)
7. [Google Apps Script 部署](#google-apps-script-部署)
8. [授權](#授權)

---

## 功能特點

- **Premium Light Mode**：乾淨、極簡的米白色美學（`#fcfcfd`），支援高解析度 Canvas
- **Axes 模式**：使用線性插值在兩個座標軸之間創建拋物線包絡線
- **Circle 模式**：模運算圖案（模組化包絡線），在圓形框架上生成心形線、腎形線等高階內擺線
- **循序繪製**：線條逐一即時繪製，帶來冥想式的視覺體驗
- **細部控制**：
  - 調整**線條寬度**和**透明度**
  - 控制**動畫速度**和**縮放**
  - 調整**基色（色相）**和**細分數**
- **Google Apps Script 就緒**：優化結構，可輕鬆部署為 Google Apps Script 網頁應用

---

## 專案結構

```
Envelope/
├── index.html          # 主 HTML 檔案
├── script.js           # 核心 JavaScript（EnvelopeEngine 類別）
├── styles.css          # 樣式表
├── README.md           # 專案說明文件
└── gas/                # Google Apps Script 部署檔案
    ├── Code.gs         # Apps Script 後端代碼
    ├── index.html      # HTML 範本
    ├── styles.html     # CSS 範本
    └── script.html     # JS 範本
```

---

## 快速開始

### 本地端執行

1. 複製儲存庫：
   ```bash
   git clone https://github.com/zoolli/envelope.git
   ```
2. 在任何現代網頁瀏覽器中開啟 `index.html`

---

## 數學原理

本應用程式視覺化了**曲線族的包絡線**。

### Axes 模式

在最基本的 Axes 模式中，直線 $(x/a + y/b = 1)$（其中 $a+b$ 為常數）形成了**拋物線**作為其包絡線。

### Circle 模式

連接點 $P(i)$ 到 $P(i \times \text{step} \pmod N)$，可根據跳躍步長產生：
- **心形線（Cardioid）**：步長 = 2
- **腎形線（Nephroid）**：步長 = 3
- 其他高階內擺線

---

## 操作說明

### 模式切換

- **Axes**：在兩個座標軸之間繪製包絡線
- **Circle**：在圓形上使用模運算繪製圖案

### 控制項

| 控制項 | 說明 | 範圍 |
|--------|------|------|
| Subdivisions | Axes 模式的細分數量 | 5 - 100 |
| Points (Even) | Circle 模式的點數（需為偶數） | 4 - 400 |
| Jump Step | Circle 模式的跳躍步長 | 1 - 30 |
| Base Color | 基底色相 | 0° - 360° |
| Animation Speed | 動畫播放速度 | 0 - 50 |
| Scale | 圖形縮放比例 | 0.1 - 1.5 |
| Line Width | 線條寬度 | 0.1 - 5.0 |
| Line Opacity | 線條透明度 | 0.1 - 1.0 |

### 功能按鈕

- **Pause/Play**：暫停或繼續動畫
- **Replay**：重新播放動畫
- **Reset**：重置所有參數為預設值

---

## 技術細節

### 核心類別：EnvelopeEngine

位於 `script.js` 中的主要類別，負責所有繪圖和動畫邏輯：

```javascript
class EnvelopeEngine {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.mode = 'axes'; // 'axes' or 'circle'
        // ...其他屬性
    }
}
```

### 主要方法

- `init()`：初始化 Canvas 和狀態
- `resize()`：處理高解析度螢幕顯示
- `setupEventListeners()`：設置所有 UI 控制項事件
- `drawAxesEnvelope()`：繪製座標軸包絡線
- `drawCircleEnvelope()`：繪製圓形包絡線
- `animate()`：動畫迴圈

### 高解析度支援

使用 `window.devicePixelRatio` 確保在高 DPI 螢幕上清晰呈現：

```javascript
const dpr = window.devicePixelRatio || 1;
this.canvas.width = this.width * dpr;
this.canvas.height = this.height * dpr;
this.ctx.scale(dpr, dpr);
```

### 視覺效果

- 半透明玻璃態 UI 面板（`backdrop-filter: blur(20px)`）
- 動態色彩變化（根據時間和位置調整色相）
- 漸變透明度
- 柔和的光暈效果

---

## Google Apps Script 部署

專案包含專用的 `gas/` 目錄用於 Google Apps Script 部署：

1. 在 [script.google.com](https://script.google.com/) 建立新的 Apps Script 專案
2. 將 `gas/Code.gs` 的內容複製到腳本編輯器
3. 建立三個名為 `index`、`styles`、`script` 的 HTML 檔案，分別複製 `gas/` 資料夾中相應的內容
4. 部署為**網頁應用**

### gas/Code.gs 結構

```javascript
function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Envelope Math Paint')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// 可添加自定義函數處理
```

---

## 授權

MIT License. 由 [zoolli](https://github.com/zoolli) 創作。

---

## 相關連結

- [GitHub 儲存庫](https://github.com/zoolli/envelope)
- [Google Apps Script](https://script.google.com/)