# stephen.taipei

莊宗憲 (Stephen) 的個人形象網站 - 資深全端工程師作品集

## 項目概述

這是一個使用 Angular 21 和 TailwindCSS 打造的科幻風格個人形象網站，展示資深全端工程師的專業實力與獨特背景。

### 技術棧

| 項目 | 技術 |
|------|------|
| 框架 | Angular 21 (Signal, Zoneless) |
| 樣式 | TailwindCSS 4 + SCSS |
| 動畫 | GSAP, Three.js |
| 架構 | Nx Monorepo |
| 建構 | @angular-devkit/build-angular |

### 設計特色

- 深空藍 + 霓虹青/粉的科幻色彩方案
- Three.js 粒子動畫背景
- Glassmorphism 玻璃態效果
- GSAP ScrollTrigger 滾動動畫
- 響應式設計 (Mobile First)

## 快速開始

### 環境需求

- Node.js >= 22.12.0
- npm 或 pnpm

### 安裝依賴

```bash
npm install --legacy-peer-deps
```

### 開發伺服器

```bash
npm start
```

啟動後訪問 `http://localhost:4200/`

### 建構生產版本

```bash
npm run build
```

建構產物位於 `dist/stephen-taipei` 目錄

## 項目結構

```
src/
├── app/
│   ├── components/
│   │   ├── hero/          # 首頁區塊 (Three.js 粒子動畫)
│   │   ├── about/         # 關於我區塊
│   │   ├── skills/        # 技能展示區塊
│   │   ├── experience/    # 工作經歷時間軸
│   │   ├── portfolio/     # 作品集卡片
│   │   ├── achievements/  # 成就亮點
│   │   ├── contact/       # 聯絡表單
│   │   ├── navbar/        # 導航列
│   │   └── footer/        # 頁尾
│   ├── app.component.ts
│   └── app.component.html
├── styles.scss            # 全局樣式 (TailwindCSS + 主題變數)
└── index.html             # HTML 入口 (SEO meta tags)
```

## 主要功能

### Hero 區塊
- Three.js 粒子動畫（支援滑鼠互動）
- 打字機效果顯示職稱
- GSAP 入場動畫

### 技能展示
- 分類 Tab 切換（前端、後端、DevOps、AI 工具）
- 進度條動態填充動畫
- 技術棧圖標展示

### 工作經歷
- 時間軸佈局（桌面端交錯展示）
- 可展開/收起的詳細內容
- 技術標籤展示

### 作品集
- 卡片網格佈局
- Modal 詳情展示
- 技術棧與成就說明

## 響應式斷點

| 斷點 | 寬度 |
|------|------|
| sm | >= 640px |
| md | >= 768px |
| lg | >= 1024px |
| xl | >= 1280px |

## 部署

推薦部署平台：
- Vercel
- Netlify
- GitHub Pages

## 授權

Copyright 2024 Stephen Chuang. All rights reserved.
