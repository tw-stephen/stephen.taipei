export const translations = {
  zh: {
    // Navbar
    nav: {
      about: '關於我',
      skills: '技能',
      experience: '經歷',
      portfolio: '作品集',
      tools: '工具平台',
      contact: '聯繫',
    },

    // Hero Section
    hero: {
      name: '莊宗憲 Stephen',
      title: '資深全端工程師',
      subtitle: '系統架構師',
      description: '擁有 AI 平台、電商系統、金融交易與教育應用的跨領域開發背景。導入 Nx Monorepo 架構，落實多專案模組共享與長期維護，推動百種主題動態配置，並將複雜元件程式從千行精簡至 200 行。',
      viewWork: '專案作品',
      contactMe: '聯繫我',
    },

    // About Section
    about: {
      title: '將創意轉化為',
      titleHighlight: '數位現實',
      location: '台北, 台灣',
      badgeTitle: '街舞冠軍',
      badgeValue: '全國冠軍 / 全球前 8 強',
      description1: '我熱衷於學習與跨領域整合，從設計背景轉向資訊管理，最終專注於前後端開發與系統架構。熟悉 Angular 與 Laravel，具備從前端框架到後端架構的完整開發經驗。',
      description2: '曾帶領 6 人團隊，透過 Git、Trello、Slack 等工具進行看板式專案管理，成功完成多項 WebApp 開發與上架，累積需求分析、系統規劃、協作與程式碼品質控管的實戰經驗。',
      description3: '在職場之外，曾創立街舞教室，並於街舞比賽中獲得全國冠軍及全球前 8 強成績。這些經歷培養了毅力、專注力與突破挑戰的決心，也延伸到我的工作態度中。',
      performanceTitle: '效能優化',
      performanceDesc: '追求速度與規模的極致',
      leadershipTitle: '團隊領導',
      leadershipDesc: '人才培育與團隊建設',
    },

    // Skills Section
    skills: {
      title: '專業技能',
      subtitle: '打造現代數位解決方案的完整技術工具箱',
      frontend: '前端',
      backend: '後端',
      devops: 'DevOps',
      ai: 'AI 工具',
    },

    // Experience Section
    experience: {
      title: '職涯歷程',
      present: '現在',
      jobs: [
        {
          company: '勝和科技有限公司',
          role: '資深工程師',
          period: '2024/1 - 現在',
          description: [
            '主導 Nx Monorepo 架構，整合多專案與模組共享，以 API 驅動完成百種以上主題、支援多版型動態切換。',
            '持續升級至 Angular 19，全面導入 Signal / Computed / Effect，減少 RxJS 依賴，搭配 OnPush 優化效能。',
            '將既有的複雜邏輯與樣式模組化為 Shared Component，使原本千行程式縮減至 200 行內。',
            '直接管理 2-4 位前端工程師，間接協調 6 位支援人員，定期舉辦內部技術分享會。',
          ],
        },
        {
          company: '向尚設計有限公司',
          role: '全端工程師',
          period: '2014/1 - 2023/11',
          description: [
            '以 Laravel + Angular PWA 架構開發直銷電商平台，涵蓋購物車、會員管理與後台管理系統。',
            '導入 Redis 快取架構，將商品排名、關鍵字標籤等高頻查詢資料快取化，資料庫查詢量降低 70%。',
            '管理 6 人跨領域團隊，協助客戶於 12 個月內會員數自零突破至 2 萬名，月活躍用戶率超過 85%。',
            '建置電子合約平台，將紙本流程全面數位化，整合簽約、審核、開店、發信與簡訊等完整作業。',
          ],
        },
        {
          company: '馨琳揚企管顧問有限公司',
          role: '工程師',
          period: '2013/1 - 2014/1',
          description: [
            '以 PHP（Smarty）+ jQuery 開發與維護公司內部行政管理系統，優化日常流程與資料維護效率。',
            '建置法拍屋資訊系統，提供類似 591 租屋網的多條件進階搜尋功能。',
            '設計客製化媒合策略與自動化篩選排程，依訂閱條件每日比對資料並自動寄送報告至用戶信箱。',
          ],
        },
      ],
    },

    // Portfolio Section
    portfolio: {
      title: '專案作品',
      subtitle: '展現技術深度與創新應用',
      clickToView: '點擊查看詳情',
      projectDesc: '專案描述',
      features: '主要功能',
      techStack: '技術架構',
      achievement: '關鍵成就',
      projects: [
        {
          title: 'Copila AI',
          desc: 'AI 客製化功能平台',
          fullDesc: '提供 AI 對話與繪圖，以及由 AI 生成多項客製化圖表等功能。以 Laravel Swoole Octane 實踐 WebSocket Server，搭配 Angular 呈現即時通訊功能，提供 AI 繪圖並實踐線上手繪功能。串接 OpenAI API 實現 AI 版心智圖、流程圖、曼陀羅九宮格思考術。',
          tech: ['Angular PWA', 'Laravel Swoole Octane', 'WebSocket', 'OpenAI API', 'MySQL', 'Redis'],
          achievement: 'Lighthouse 檢測各項目接近滿分',
          features: ['AI 心智圖生成', 'AI 流程圖生成', '曼陀羅九宮格思考術', '即時通訊', 'AI 繪圖', '線上手繪功能'],
        },
        {
          title: '米寶鏢局',
          desc: 'OMO 電商購物車系統',
          fullDesc: '多店家商城購物車及類拍賣式購物，整合線上購物和線下門市支付。基於用戶足跡（訂單紀錄、瀏覽行為等）設計個人化推薦演算法，動態客製化商品資訊頁面。',
          tech: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'Ubuntu', 'Nginx'],
          achievement: '一年內累積近 2 萬名會員',
          features: ['多店家商城', '類拍賣購物系統', '多層級獎金制度', '電子錢包系統', '線上線下整合支付'],
        },
        {
          title: 'StocX',
          desc: '股市盤感訓練系統',
          fullDesc: '提供股市歷史價位資料，訓練盤感及選股策略。透過快取和流程設計，優化低成本共享主機效能，實現高達 500 人同時在線記錄。',
          tech: ['Vue.js', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
          achievement: '500 人同時在線、獲 KOL 與暢銷書作者分享',
          features: ['K線圖分析', '潛力股篩選', '選股策略訓練', '歷史數據回測'],
        },
        {
          title: '皮紋檢測系統',
          desc: '手指皮紋檢測平台',
          fullDesc: '為幼兒及家長們提供手指皮紋檢測及報表產出。包含學員管理、皮紋分析、報告生成等完整功能。',
          tech: ['jQuery', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
          achievement: '自動化報表產出',
          features: ['學員資料管理', '皮紋數據分析', '大腦功能圖表', 'PDF 報告輸出'],
        },
      ],
    },

    // Contact Section
    contact: {
      title: '聯繫我',
      subtitle: '無論您有任何問題、專案合作想法，或是想要討論最新的技術趨勢，歡迎隨時與我聯繫。',
      email: 'Email',
      location: '地點',
      locationValue: '台北, 台灣',
      formName: '姓名',
      formNamePlaceholder: '您的姓名',
      formEmail: 'Email',
      formEmailPlaceholder: 'your@email.com',
      formMessage: '訊息內容',
      formMessagePlaceholder: '您好，Stephen...',
      sendMessage: '發送訊息',
    },

    // Tools Platform
    tools: {
      badge: '免費工具平台',
      title: '開源工具集合',
      subtitle: '8000+ 免費工具，涵蓋 AI、遊戲、開發工具等多個領域，完全開源免費',
      cta: '探索更多開源專案',
      viewAll: '查看 GitHub',
      items: {
        'ai-local-tools': {
          title: 'AI 本地工具',
          description: '1000+ AI 工具，完全在瀏覽器本地執行，零後端、100% 隱私保護',
          count: '1000+ 工具',
        },
        'chrome-extensions': {
          title: 'Chrome 擴充套件',
          description: '精選 Chrome 瀏覽器擴充套件，提升工作效率與瀏覽體驗',
          count: '1000+ 套件',
        },
        'free-games': {
          title: '免費遊戲',
          description: '純前端實作的網頁遊戲，無需下載安裝，開啟即玩',
          count: '1000+ 遊戲',
        },
        'mini-tools': {
          title: '迷你工具',
          description: '各種實用小工具，包含轉換器、計算器、產生器等',
          count: '1000+ 工具',
        },
        'tailwind-ui': {
          title: 'Tailwind UI 模板',
          description: '精美的 Tailwind CSS UI 元件與頁面模板',
          count: '1000+ 模板',
        },
        'wasm-tools': {
          title: 'WebAssembly 工具',
          description: '利用 WebAssembly 技術打造的高效能工具',
          count: '1000+ 工具',
        },
        'web-toys': {
          title: '網頁互動玩具',
          description: '有趣的網頁互動體驗，包含動畫、視覺效果等',
          count: '1000+ 玩具',
        },
        'web-workers': {
          title: 'Web Workers 範例',
          description: '多執行緒處理範例，提升網頁應用效能',
          count: '1000+ 範例',
        },
      },
    },

    // Footer
    footer: {
      copyright: '版權所有',
    },
  },

  en: {
    // Navbar
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      portfolio: 'Portfolio',
      tools: 'Tools',
      contact: 'Contact',
    },

    // Hero Section
    hero: {
      name: 'Stephen Chuang',
      title: 'Senior Full Stack',
      subtitle: 'Engineer',
      description: 'Experienced in AI platforms, e-commerce systems, fintech, and educational applications. Implemented Nx Monorepo architecture for multi-project module sharing and long-term maintenance, enabling 100+ theme configurations and reducing complex component code from 1000 lines to 200.',
      viewWork: 'View Work',
      contactMe: 'Contact Me',
    },

    // About Section
    about: {
      title: 'Transforming Ideas into',
      titleHighlight: 'Digital Reality',
      location: 'Taipei, Taiwan',
      badgeTitle: 'Dance Champion',
      badgeValue: 'National Winner / World Top 8',
      description1: 'I am passionate about learning and cross-domain integration. Starting from a design background, I transitioned to information management, and ultimately focused on full-stack development and system architecture. Proficient in Angular and Laravel with complete development experience from frontend frameworks to backend architecture.',
      description2: 'Led a 6-person team using Git, Trello, and Slack for Kanban-style project management. Successfully completed multiple WebApp developments, accumulating practical experience in requirements analysis, system planning, collaboration, and code quality control.',
      description3: 'Outside of work, I founded a street dance studio and achieved national champion and world top 8 in dance competitions. These experiences cultivated perseverance, focus, and determination to overcome challenges, which extends to my work attitude.',
      performanceTitle: 'Performance',
      performanceDesc: 'Optimizing for speed and scale',
      leadershipTitle: 'Leadership',
      leadershipDesc: 'Mentoring & Team Building',
    },

    // Skills Section
    skills: {
      title: 'Technical Expertise',
      subtitle: 'A comprehensive toolset for building modern digital solutions',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      ai: 'AI Tools',
    },

    // Experience Section
    experience: {
      title: 'Professional Journey',
      present: 'Present',
      jobs: [
        {
          company: 'Sheng He Technology Co., Ltd.',
          role: 'Senior Engineer',
          period: '2024/1 - Present',
          description: [
            'Led Nx Monorepo architecture, integrating multiple projects with module sharing, API-driven 100+ themes with dynamic layout switching.',
            'Upgraded to Angular 19, fully adopting Signal/Computed/Effect, reducing RxJS dependency with OnPush optimization.',
            'Modularized complex logic into Shared Components, reducing 1000-line code to under 200 lines.',
            'Directly managed 2-4 frontend engineers, indirectly coordinated 6 support staff, organized regular technical sharing sessions.',
          ],
        },
        {
          company: 'Shang Shang Design Co., Ltd.',
          role: 'Full Stack Engineer',
          period: '2014/1 - 2023/11',
          description: [
            'Developed direct sales e-commerce platform with Laravel + Angular PWA, including shopping cart, member management, and admin system.',
            'Implemented Redis caching for product rankings and keyword tags, reducing database queries by 70%.',
            'Managed 6-person cross-functional team, helping client grow from 0 to 20,000 members in 12 months with 85%+ monthly active rate.',
            'Built electronic contract platform, digitizing paper processes including signing, review, and store opening workflows.',
          ],
        },
        {
          company: 'Xin Lin Yang Consultancy Co., Ltd.',
          role: 'Engineer',
          period: '2013/1 - 2014/1',
          description: [
            'Developed and maintained internal administrative systems using PHP (Smarty) + jQuery.',
            'Built foreclosure information system with advanced multi-criteria search similar to 591 rental platform.',
            'Designed customized matching strategies with automated filtering, daily data comparison, and automatic report delivery.',
          ],
        },
      ],
    },

    // Portfolio Section
    portfolio: {
      title: 'Featured Projects',
      subtitle: 'Showcasing technical depth and innovation',
      clickToView: 'Click to view details',
      projectDesc: 'Project Description',
      features: 'Key Features',
      techStack: 'Tech Stack',
      achievement: 'Key Achievement',
      projects: [
        {
          title: 'Copila AI',
          desc: 'AI Customization Platform',
          fullDesc: 'Provides AI conversation and drawing, along with AI-generated customized charts. Implemented WebSocket Server with Laravel Swoole Octane, paired with Angular for real-time communication, AI drawing, and online sketching. Integrated OpenAI API for AI-powered mind maps, flowcharts, and Mandala thinking grids.',
          tech: ['Angular PWA', 'Laravel Swoole Octane', 'WebSocket', 'OpenAI API', 'MySQL', 'Redis'],
          achievement: 'Near-perfect Lighthouse scores',
          features: ['AI Mind Map Generation', 'AI Flowchart Generation', 'Mandala Thinking Grid', 'Real-time Communication', 'AI Drawing', 'Online Sketching'],
        },
        {
          title: 'Meeple Logistics',
          desc: 'OMO E-commerce System',
          fullDesc: 'Multi-vendor marketplace with auction-style shopping, integrating online shopping and offline store payments. Designed personalized recommendation algorithms based on user footprints (order history, browsing behavior) for dynamic product page customization.',
          tech: ['Angular PWA', 'Laravel', 'MySQL', 'Redis', 'Ubuntu', 'Nginx'],
          achievement: 'Nearly 20,000 members in one year',
          features: ['Multi-vendor Marketplace', 'Auction-style Shopping', 'Multi-tier Bonus System', 'E-wallet System', 'Online-Offline Payment Integration'],
        },
        {
          title: 'StocX',
          desc: 'Stock Market Training System',
          fullDesc: 'Provides historical stock price data for training market sense and stock selection strategies. Optimized low-cost shared hosting through caching and process design, achieving 500+ concurrent users.',
          tech: ['Vue.js', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
          achievement: '500 concurrent users, shared by KOL & bestselling authors',
          features: ['K-line Chart Analysis', 'Potential Stock Screening', 'Strategy Training', 'Historical Data Backtesting'],
        },
        {
          title: 'Dermatoglyphics System',
          desc: 'Fingerprint Detection Platform',
          fullDesc: 'Provides fingerprint detection and report generation for children and parents. Includes student management, dermatoglyphic analysis, and comprehensive report generation.',
          tech: ['jQuery', 'Laravel', 'MySQL', 'Ubuntu', 'Apache'],
          achievement: 'Automated report generation',
          features: ['Student Management', 'Dermatoglyphic Analysis', 'Brain Function Charts', 'PDF Report Export'],
        },
      ],
    },

    // Contact Section
    contact: {
      title: "Let's Connect",
      subtitle: 'Whether you have a question, a project idea, or just want to discuss the latest in tech, feel free to reach out.',
      email: 'Email',
      location: 'Location',
      locationValue: 'Taipei, Taiwan',
      formName: 'Name',
      formNamePlaceholder: 'Your name',
      formEmail: 'Email',
      formEmailPlaceholder: 'your@email.com',
      formMessage: 'Message',
      formMessagePlaceholder: 'Hello Stephen...',
      sendMessage: 'Send Message',
    },

    // Tools Platform
    tools: {
      badge: 'Free Tools Platform',
      title: 'Open Source Tools Collection',
      subtitle: '8000+ free tools covering AI, games, development tools, and more - completely open source',
      cta: 'Explore more open source projects',
      viewAll: 'View GitHub',
      items: {
        'ai-local-tools': {
          title: 'AI Local Tools',
          description: '1000+ AI tools running entirely in browser, zero backend, 100% privacy protected',
          count: '1000+ Tools',
        },
        'chrome-extensions': {
          title: 'Chrome Extensions',
          description: 'Curated Chrome browser extensions to boost productivity and browsing experience',
          count: '1000+ Extensions',
        },
        'free-games': {
          title: 'Free Games',
          description: 'Frontend web games, no download required, play instantly',
          count: '1000+ Games',
        },
        'mini-tools': {
          title: 'Mini Tools',
          description: 'Various utility tools including converters, calculators, and generators',
          count: '1000+ Tools',
        },
        'tailwind-ui': {
          title: 'Tailwind UI Templates',
          description: 'Beautiful Tailwind CSS UI components and page templates',
          count: '1000+ Templates',
        },
        'wasm-tools': {
          title: 'WebAssembly Tools',
          description: 'High-performance tools built with WebAssembly technology',
          count: '1000+ Tools',
        },
        'web-toys': {
          title: 'Web Toys',
          description: 'Fun interactive web experiences including animations and visual effects',
          count: '1000+ Toys',
        },
        'web-workers': {
          title: 'Web Workers Examples',
          description: 'Multi-threading examples to boost web application performance',
          count: '1000+ Examples',
        },
      },
    },

    // Footer
    footer: {
      copyright: 'All rights reserved',
    },
  },
};

export default translations;
