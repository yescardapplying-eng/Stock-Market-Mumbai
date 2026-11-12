export interface TopicPageContent {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  badge: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  subtitle: string;
  sections: { id: string; title: string; points: string[]; summary: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { title: string; href: string }[];
}

export const EDUCATIONAL_TOPICS: Record<string, TopicPageContent> = {
  'stock-market-basics': {
    slug: 'stock-market-basics',
    title: 'Stock Market Basics for Mumbai Learners',
    seoTitle: 'Stock Market Basics Course in Mumbai | Stock Market Mumbai',
    seoDescription:
      'Learn Indian stock market basics in Mumbai. Understand NSE, BSE, IPOs, order types, and capital safety in our 100% educational guide.',
    keywords: ['Stock market basics Mumbai', 'Share market beginners course Mumbai', 'NSE BSE education'],
    badge: 'Foundation Module',
    difficulty: 'Beginner',
    readTime: '6 min read',
    subtitle: 'Clear foundation of NSE, BSE, order matching, and capital protection for beginners in Mumbai.',
    sections: [
      {
        id: 'exchanges',
        title: 'How NSE & BSE Work',
        summary: 'India’s primary exchanges connect buyers and sellers electronically under SEBI oversight.',
        points: [
          'NSE (NIFTY 50) and BSE (SENSEX) match buy and sell orders transparently.',
          'Primary markets handle new IPO listings; secondary markets trade listed shares.',
          'T+1 settlement ensures shares and funds settle within one business day.',
        ],
      },
      {
        id: 'orders',
        title: 'Core Order Types',
        summary: 'Using correct order types prevents accidental slippage during volatile hours.',
        points: [
          'Market Order executes immediately at the best available price.',
          'Limit Order executes only at your specified price or better.',
          'Stop-Loss (SL) Order caps downside risk automatically when price hits your exit level.',
        ],
      },
      {
        id: 'safety',
        title: 'Capital Control First',
        summary: 'Before analyzing charts, learners must master position sizing and risk limits.',
        points: [
          'Never allocate emergency savings or borrowed capital to securities.',
          'Limit per-setup risk to 1% of dedicated learning capital.',
          'Avoid unverified social media tips and guaranteed-return claims.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is prior finance background needed for stock market basics?',
        answer: 'No. Our Basic Plan in Mumbai starts from scratch using simple everyday examples in English, Hindi, and Marathi.',
      },
      {
        question: 'Can I attend stock market basics classes online from Mumbai suburbs?',
        answer: 'Yes, learners across Andheri, Bandra, Dadar, Thane, Borivali, and Navi Mumbai join our live interactive cohorts.',
      },
      {
        question: 'Do you recommend which shares to buy after this module?',
        answer: 'No. Stock Market Mumbai is strictly educational and never provides stock recommendations or tips.',
      },
    ],
    relatedLinks: [
      { title: 'Demat Account Basics', href: '/demat-account-basics' },
      { title: 'Technical Analysis', href: '/technical-analysis' },
      { title: 'Risk Management', href: '/risk-management' },
    ],
  },
  'technical-analysis': {
    slug: 'technical-analysis',
    title: 'Technical Analysis & Chart Structure',
    seoTitle: 'Technical Analysis Course Mumbai | Chart Reading Training',
    seoDescription:
      'Master technical analysis in Mumbai: support, resistance, trendlines, RSI, and multi-timeframe price action for disciplined trading.',
    keywords: ['Technical analysis course Mumbai', 'Chart reading classes Mumbai', 'Price action training'],
    badge: 'Core Technicals',
    difficulty: 'Intermediate',
    readTime: '7 min read',
    subtitle: 'Learn objective chart reading, trend structure, volume confirmation, and clean price action.',
    sections: [
      {
        id: 'structure',
        title: 'Market Trend & Structure',
        summary: 'Markets move in uptrends, downtrends, or sideways consolidation ranges.',
        points: [
          'Higher Highs and Higher Lows define structured bullish momentum.',
          'Lower Highs and Lower Lows indicate distribution and bearish pressure.',
          'Range-bound phases require patience until clean volume breakouts occur.',
        ],
      },
      {
        id: 'zones',
        title: 'Support & Resistance Zones',
        summary: 'Institutional supply and demand cluster around zones rather than single lines.',
        points: [
          'Historical swing highs and lows act as psychological reference zones.',
          'Previous resistance often turns into support after a high-volume breakout.',
          'Multi-timeframe alignment reduces false intraday breakouts.',
        ],
      },
      {
        id: 'indicators',
        title: 'Volume & Momentum Confirmation',
        summary: 'Volume validates price intent; RSI measures momentum strength.',
        points: [
          'Rising price with rising volume signals stronger participation.',
          'RSI (14) divergence highlights weakening momentum near key zones.',
          'Use indicators only as secondary confirmation to clean price structure.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which package includes full technical analysis training in Mumbai?',
        answer: 'Core chart basics begin in Basic Plan, while complete multi-timeframe mastery is covered in Our Pro Plan and Ultra Pro Plan.',
      },
      {
        question: 'Do technical indicators guarantee winning trades?',
        answer: 'No indicator guarantees profits. Indicators help structure probabilities alongside strict stop-loss discipline.',
      },
      {
        question: 'Are TradingView chart markups practiced in sessions?',
        answer: 'Yes, learners practice marking live and historical NSE index charts during weekly workshops.',
      },
    ],
    relatedLinks: [
      { title: 'Candlestick Patterns', href: '/candlestick-patterns' },
      { title: 'Swing Trading Explained', href: '/swing-trading-explained' },
      { title: 'Risk Management', href: '/risk-management' },
    ],
  },
  'fundamental-analysis': {
    slug: 'fundamental-analysis',
    title: 'Fundamental Analysis & Valuation Basics',
    seoTitle: 'Fundamental Analysis Training Mumbai | Balance Sheet Study',
    seoDescription:
      'Learn fundamental analysis in Mumbai: P/E ratio, ROE, ROCE, debt-to-equity, and cash flow statements for long-term equity literacy.',
    keywords: ['Fundamental analysis course Mumbai', 'Financial statement training Mumbai', 'Equity valuation study'],
    badge: 'Company Valuation',
    difficulty: 'Intermediate',
    readTime: '7 min read',
    subtitle: 'Evaluate business quality, profitability ratios, debt safety, and cash flows objectively.',
    sections: [
      {
        id: 'statements',
        title: 'Three Core Financial Statements',
        summary: 'Every listed Indian company publishes audited quarterly and annual reports.',
        points: [
          'Income Statement tracks revenue growth, operating margins, and net profit.',
          'Balance Sheet reveals assets, shareholder equity, and total debt burden.',
          'Cash Flow Statement confirms whether reported profits turn into real cash.',
        ],
      },
      {
        id: 'ratios',
        title: 'Essential Valuation & Quality Ratios',
        summary: 'Compare companies within the same sector using standardized metrics.',
        points: [
          'ROE and ROCE measure capital efficiency and management execution.',
          'Debt-to-Equity ratio highlights financial resilience during interest rate cycles.',
          'P/E and PEG ratios contextualize share price against earnings growth.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need an accounting degree to learn fundamental analysis?',
        answer: 'No. Our Mumbai educators break down balance sheets and ratios into practical, easy-to-follow checklists.',
      },
      {
        question: 'Do you suggest undervalued stocks to buy?',
        answer: 'No. We teach you the analytical framework so you can study annual reports independently without relying on tips.',
      },
      {
        question: 'Can fundamental and technical analysis be combined?',
        answer: 'Yes. Many learners use fundamentals to filter quality businesses and technicals to study price structure.',
      },
    ],
    relatedLinks: [
      { title: 'IPO Basics', href: '/ipo-basics' },
      { title: 'Stock Market Basics', href: '/stock-market-basics' },
      { title: 'SIP Calculator', href: '/tools/sip-calculator' },
    ],
  },
  'trading-education': {
    slug: 'trading-education',
    title: 'Structured Trading Education in Mumbai',
    seoTitle: 'Trading Education & Courses in Mumbai | Stock Market Mumbai',
    seoDescription:
      'Complete trading education in Mumbai focused on capital protection, rule-based planning, and trading journals. 100% non-advisory.',
    keywords: ['Trading education Mumbai', 'Share trading classes Mumbai', 'Stock market coaching Mumbai'],
    badge: 'Curriculum Overview',
    difficulty: 'Beginner',
    readTime: '5 min read',
    subtitle: 'Transition from emotional guesswork to rule-based market analysis and disciplined execution.',
    sections: [
      {
        id: 'process',
        title: 'Process Over Random Outcomes',
        summary: 'Consistent learners focus on execution quality rather than single-day P&L.',
        points: [
          'Follow a written pre-market checklist before analyzing any chart.',
          'Log entry reason, stop-loss, target, and emotion in a structured journal.',
          'Review weekly mistakes objectively to eliminate impulsive habits.',
        ],
      },
      {
        id: 'curriculum',
        title: 'Three-Stage Learning Architecture',
        summary: 'Our Basic, Our Pro, and Ultra Pro pathways match every experience level.',
        points: [
          'Foundation Stage: Market mechanics, candlesticks, and capital safety.',
          'Intermediate Stage: Multi-timeframe price action and option chain reading.',
          'Mastery Stage: Hedging models, psychology labs, and 1-on-1 reviews.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why does Stock Market Mumbai emphasize trading education over tips?',
        answer: 'Tips create dependency and cause heavy capital losses when markets reverse. Education builds lifelong analytical independence.',
      },
      {
        question: 'What languages are supported in your Mumbai trading classes?',
        answer: 'Sessions and study notes are supported in English, Hindi, and Marathi.',
      },
      {
        question: 'Do you offer weekend batches for working professionals in Mumbai?',
        answer: 'Yes, we schedule evening and weekend cohorts along with recorded HD archives.',
      },
    ],
    relatedLinks: [
      { title: 'Our Packages', href: '/our-packages' },
      { title: 'Trading Psychology', href: '/trading-psychology' },
      { title: 'Risk Management', href: '/risk-management' },
    ],
  },
  'risk-management': {
    slug: 'risk-management',
    title: 'Capital Risk Management & Sizing',
    seoTitle: 'Trading Risk Management Course Mumbai | Capital Control',
    seoDescription:
      'Protect your trading capital with mathematical position sizing, stop-loss discipline, and drawdown limits at Stock Market Mumbai.',
    keywords: ['Risk management trading Mumbai', 'Position sizing course India', 'Capital loss control'],
    badge: 'Capital Protection',
    difficulty: 'Beginner',
    readTime: '6 min read',
    subtitle: 'Control capital losses mathematically with strict position sizing and risk-reward rules.',
    sections: [
      {
        id: 'sizing',
        title: 'Mathematical Position Sizing Formula',
        summary: 'Quantity should always be derived from your stop-loss distance and risk limit.',
        points: [
          'Position Quantity = (Account Capital × Risk %) ÷ Stop-Loss Points.',
          'Wider stop-loss automatically requires smaller quantity to keep rupee risk constant.',
          'Never decide lot size based on greed or gut feeling.',
        ],
      },
      {
        id: 'drawdown',
        title: 'Daily & Weekly Drawdown Limits',
        summary: 'Hard circuit breakers protect capital during unfavorable market regimes.',
        points: [
          'Set a strict daily loss limit (e.g., 2% of capital) to halt emotional overtrading.',
          'Reduce position size by half after three consecutive losing sessions.',
          'Use our Position Sizing Calculator to verify every setup mathematically.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can risk management eliminate stock market losses completely?',
        answer: 'No. Losses are part of market probability, but risk management keeps individual losses small and survivable.',
      },
      {
        question: 'Do you provide a calculator to practice position sizing?',
        answer: 'Yes, visit our free Position Sizing Calculator and Risk-Reward Calculator under Tools.',
      },
      {
        question: 'Is risk management taught in the 1-Month Basic Plan?',
        answer: 'Yes, capital preservation and stop-loss calculation are mandatory core modules from Day 1.',
      },
    ],
    relatedLinks: [
      { title: 'Position Sizing Calculator', href: '/tools/position-sizing-calculator' },
      { title: 'Risk-Reward Calculator', href: '/tools/risk-reward-calculator' },
      { title: 'Trading Psychology', href: '/trading-psychology' },
    ],
  },
  'trading-psychology': {
    slug: 'trading-psychology',
    title: 'Trading Psychology & Emotional Discipline',
    seoTitle: 'Trading Psychology Training Mumbai | Stop Overtrading',
    seoDescription:
      'Overcome fear, greed, FOMO, and revenge trading with structured journaling and mindset training in Mumbai.',
    keywords: ['Trading psychology Mumbai', 'Emotional discipline trading', 'Overtrading control course'],
    badge: 'Mindset Mastery',
    difficulty: 'Intermediate',
    readTime: '5 min read',
    subtitle: 'Master FOMO, fear, and overtrading through objective journaling and rule-based habits.',
    sections: [
      {
        id: 'biases',
        title: 'Common Cognitive Traps',
        summary: 'Most capital losses stem from emotional reactions rather than chart ignorance.',
        points: [
          'FOMO pushes learners into chasing extended candles without stop-losses.',
          'Loss aversion causes holding losing positions while cutting winners early.',
          'Revenge trading escalates lot sizes right after an unexpected loss.',
        ],
      },
      {
        id: 'journaling',
        title: 'Rule-Based Journaling Habit',
        summary: 'Measuring behavior turns emotional impulses into visible data.',
        points: [
          'Record emotional state before, during, and after every paper session.',
          'Grade yourself on rule adherence rather than rupee outcome.',
          'Take mandatory cool-off breaks after hitting daily risk limits.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Why do learners struggle with execution even after learning charts?',
        answer: 'Fear of missing out and fear of losing trigger impulsive overrides of written plans. Psychology drills address these habits directly.',
      },
      {
        question: 'Are psychology reviews included in 1-on-1 doubt sessions?',
        answer: 'Yes, Our Pro and Ultra Pro mentors review student trade journals to spot behavioral leaks.',
      },
      {
        question: 'Is paper trading recommended for building mindset?',
        answer: 'Yes, structured simulation and small-unit journaling build discipline before scaling.',
      },
    ],
    relatedLinks: [
      { title: 'Risk Management', href: '/risk-management' },
      { title: 'Technical Analysis', href: '/technical-analysis' },
      { title: 'Our Packages', href: '/our-packages' },
    ],
  },
  'fo-basics': {
    slug: 'fo-basics',
    title: 'Futures & Options (F&O) Basics',
    seoTitle: 'F&O Basics Course Mumbai | Derivatives Education',
    seoDescription:
      'Understand Futures and Options contracts, Call vs Put payoffs, lot sizes, and margin risks in our educational Mumbai module.',
    keywords: ['F&O course Mumbai', 'Futures and options training Mumbai', 'Derivatives basics India'],
    badge: 'Derivatives',
    difficulty: 'Intermediate',
    readTime: '7 min read',
    subtitle: 'Clear explanation of Futures, Call & Put Options, expiry cycles, and leverage risks.',
    sections: [
      {
        id: 'contracts',
        title: 'Futures vs Options Mechanics',
        summary: 'Derivatives derive value from underlying equities or indices like NIFTY 50.',
        points: [
          'Futures obligate both buyer and seller to settle at expiry with daily MTM margins.',
          'Call Option grants the buyer a right (not obligation) to buy at strike price.',
          'Put Option grants the buyer a right (not obligation) to sell at strike price.',
        ],
      },
      {
        id: 'risks',
        title: 'Understanding Leverage & Time Decay',
        summary: 'SEBI studies show most unguided F&O participants lose money due to leverage.',
        points: [
          'Option premiums decay daily as expiry approaches (Theta risk).',
          'Naked option selling carries theoretically unlimited loss without hedges.',
          'Education focuses on defined-risk hedging concepts and strict capital caps.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should beginners start directly with F&O?',
        answer: 'No. We strongly advise mastering equity basics, chart structure, and risk sizing before studying F&O derivatives.',
      },
      {
        question: 'Does Stock Market Mumbai provide intraday F&O tips?',
        answer: 'Never. We strictly educate learners on derivatives mechanics and risk awareness with zero buy/sell calls.',
      },
      {
        question: 'Are Option Greeks covered in F&O modules?',
        answer: 'Yes, Delta, Theta, Vega, and Gamma concepts are taught clearly in Our Pro and Ultra Pro plans.',
      },
    ],
    relatedLinks: [
      { title: 'Option Chain Explained', href: '/option-chain-explained' },
      { title: 'Risk Management', href: '/risk-management' },
      { title: 'Brokerage Calculator', href: '/tools/brokerage-calculator' },
    ],
  },
  'option-chain-explained': {
    slug: 'option-chain-explained',
    title: 'Option Chain & Open Interest Explained',
    seoTitle: 'Option Chain Analysis Course Mumbai | Open Interest Training',
    seoDescription:
      'Decode NSE Option Chain data, Open Interest, PCR, Max Pain, and Implied Volatility in our Mumbai educational curriculum.',
    keywords: ['Option chain course Mumbai', 'Open interest training Mumbai', 'Option Greeks India'],
    badge: 'Derivatives Data',
    difficulty: 'Advanced',
    readTime: '7 min read',
    subtitle: 'Learn how to read Strike OI, Change in OI, Implied Volatility, and Put-Call Ratio.',
    sections: [
      {
        id: 'oi',
        title: 'Open Interest & Strike Concentration',
        summary: 'Option chain tables reveal where institutional hedging positions are concentrated.',
        points: [
          'High Call OI strikes often indicate strong overhead resistance zones.',
          'High Put OI strikes often act as supportive floors during expiry weeks.',
          'Change in OI tracks fresh buildup versus short covering intraday.',
        ],
      },
      {
        id: 'greeks',
        title: 'Option Greeks & Volatility',
        summary: 'Delta, Theta, and Vega explain how option premiums react to price, time, and IV.',
        points: [
          'Delta measures option price sensitivity to a 1-point move in the index.',
          'Theta measures daily premium erosion accelerating in expiry week.',
          'Vega tracks sensitivity to Implied Volatility (India VIX) shifts.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Option Chain alone predict exact market direction?',
        answer: 'No. Option Chain reflects current positioning and probabilities, which shift dynamically and should be studied alongside price action.',
      },
      {
        question: 'Which package teaches Option Chain & Greeks live?',
        answer: 'Our Pro Plan (6 Months) and Ultra Pro Plan (1 Year) include dedicated Option Chain and Greeks workshops.',
      },
      {
        question: 'Do you sell Option Chain software or signals?',
        answer: 'No. We teach you how to read official NSE Option Chain data purely for educational mastery.',
      },
    ],
    relatedLinks: [
      { title: 'F&O Basics', href: '/fo-basics' },
      { title: 'Technical Analysis', href: '/technical-analysis' },
      { title: 'Our Packages', href: '/our-packages' },
    ],
  },
  'ipo-basics': {
    slug: 'ipo-basics',
    title: 'IPO Basics & Primary Market Guide',
    seoTitle: 'IPO Basics & DRHP Guide Mumbai | Stock Market Mumbai',
    seoDescription:
      'Learn how IPOs work in India: DRHP analysis, price bands, QIB/Retail quotas, and ASBA basics in our educational guide.',
    keywords: ['IPO basics Mumbai', 'Learn IPO analysis India', 'DRHP stock market course'],
    badge: 'Primary Market',
    difficulty: 'Beginner',
    readTime: '5 min read',
    subtitle: 'Understand book building, DRHP disclosures, allotment quotas, and listing risks.',
    sections: [
      {
        id: 'process',
        title: 'How an IPO Launches in India',
        summary: 'Private companies raise public capital by filing a DRHP with SEBI.',
        points: [
          'Fresh Issue raises new capital for business growth; Offer for Sale exits early investors.',
          'Book-building sets a price band where QIB, NII, and Retail investors bid.',
          'ASBA blocks funds in your bank account until allotment is finalized.',
        ],
      },
      {
        id: 'checklist',
        title: 'Educational DRHP Checklist',
        summary: 'Read risk factors and valuation multiples before evaluating any listing.',
        points: [
          'Examine revenue consistency, profit margins, and debt reduction plans.',
          'Compare issue valuation against listed peer companies in the same industry.',
          'Understand that listing-day gains are never guaranteed.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Stock Market Mumbai recommend which IPOs to apply for?',
        answer: 'No. We do not give IPO buy/apply recommendations. We teach you how to read DRHP documents independently.',
      },
      {
        question: 'What is ASBA in IPO applications?',
        answer: 'Application Supported by Blocked Amount keeps funds in your bank account earning interest until shares are allotted.',
      },
      {
        question: 'Are IPO concepts included in the Basic Plan?',
        answer: 'Yes, primary market and IPO mechanics are covered in our foundation modules.',
      },
    ],
    relatedLinks: [
      { title: 'Demat Account Basics', href: '/demat-account-basics' },
      { title: 'Fundamental Analysis', href: '/fundamental-analysis' },
      { title: 'Stock Market Basics', href: '/stock-market-basics' },
    ],
  },
  'demat-account-basics': {
    slug: 'demat-account-basics',
    title: 'Demat & Trading Account Basics',
    seoTitle: 'Demat Account Basics Guide | Stock Market Mumbai',
    seoDescription:
      'Understand NSDL, CDSL, Demat vs Trading accounts, KYC rules, and account security awareness for Mumbai learners.',
    keywords: ['Demat account basics Mumbai', 'CDSL NSDL explained', 'Trading account security'],
    badge: 'Account Basics',
    difficulty: 'Beginner',
    readTime: '4 min read',
    subtitle: 'How Demat depositories work, statutory charges, and strict account safety practices.',
    sections: [
      {
        id: 'structure',
        title: 'Demat vs Trading vs Bank Account',
        summary: 'Three linked accounts power seamless equity settlement in India.',
        points: [
          'Demat Account (NSDL/CDSL) holds your electronic shares safely.',
          'Trading Account places buy/sell orders on NSE and BSE.',
          'Bank Account funds purchases and receives settlement payouts.',
        ],
      },
      {
        id: 'security',
        title: 'Mandatory Security Habits',
        summary: 'Protect your credentials from unauthorized access at all times.',
        points: [
          'Never share broker passwords, PINs, TOTP, or bank OTPs with anyone.',
          'Enable two-factor authentication and review CDSL/NSDL CAS statements monthly.',
          'Stock Market Mumbai will NEVER ask for your trading account credentials.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Stock Market Mumbai affiliated with any stockbroker?',
        answer: 'No. We are a 100% independent educational institute and do not earn brokerage commissions.',
      },
      {
        question: 'Are shares safe if a broker shuts down?',
        answer: 'Shares held in your Demat account sit with SEBI-regulated depositories (CDSL or NSDL), not on the broker’s balance sheet.',
      },
      {
        question: 'How do I check total brokerage and taxes before trading?',
        answer: 'Use our educational Brokerage Calculator under Tools to understand STT, exchange fees, and GST.',
      },
    ],
    relatedLinks: [
      { title: 'Stock Market Basics', href: '/stock-market-basics' },
      { title: 'Brokerage Calculator', href: '/tools/brokerage-calculator' },
      { title: 'IPO Basics', href: '/ipo-basics' },
    ],
  },
  'candlestick-patterns': {
    slug: 'candlestick-patterns',
    title: 'Candlestick Patterns & Price Psychology',
    seoTitle: 'Candlestick Patterns Training Mumbai | Price Action Education',
    seoDescription:
      'Learn Hammer, Engulfing, Doji, and Morning Star candlestick patterns with context and volume confirmation in Mumbai.',
    keywords: ['Candlestick patterns Mumbai', 'Price action patterns course', 'Learn candlesticks'],
    badge: 'Chart Geometry',
    difficulty: 'Beginner',
    readTime: '6 min read',
    subtitle: 'Read buyer-seller psychology inside OHLC candles and avoid false pattern traps.',
    sections: [
      {
        id: 'anatomy',
        title: 'OHLC Anatomy & Rejection Wicks',
        summary: 'Every candle captures Open, High, Low, and Close battles over a timeframe.',
        points: [
          'Long lower wicks near support show buyers rejecting lower prices.',
          'Long upper wicks near resistance reflect supply absorption.',
          'Small bodies (Doji/Spinning Top) signal temporary indecision.',
        ],
      },
      {
        id: 'context',
        title: 'Context Matters More Than Pattern Names',
        summary: 'A pattern without location and volume fails frequently.',
        points: [
          'Bullish Engulfing or Hammer carries weight only at key demand zones.',
          'Bearish Engulfing or Shooting Star matters near major supply resistance.',
          'Always define invalidation below or above the pattern wick.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I memorize 50 candlestick patterns?',
        answer: 'No. Understanding 5 to 6 core rejection and momentum candles in proper chart context is far more effective.',
      },
      {
        question: 'Do you provide a Candlestick Handbook PDF?',
        answer: 'Yes, all enrolled students receive structured candlestick and chart study PDFs.',
      },
      {
        question: 'Which timeframe is best for learning candlestick patterns?',
        answer: 'Daily and 1-Hour timeframes show cleaner institutional structure than noisy 1-minute charts.',
      },
    ],
    relatedLinks: [
      { title: 'Technical Analysis', href: '/technical-analysis' },
      { title: 'Swing Trading Explained', href: '/swing-trading-explained' },
      { title: 'Intraday Trading Basics', href: '/intraday-trading-basics' },
    ],
  },
  'intraday-trading-basics': {
    slug: 'intraday-trading-basics',
    title: 'Intraday Trading Basics & Discipline',
    seoTitle: 'Intraday Trading Basics Course Mumbai | Risk Control',
    seoDescription:
      'Learn intraday trading mechanics, liquidity windows, slippage, and strict daily loss limits in our Mumbai educational curriculum.',
    keywords: ['Intraday trading course Mumbai', 'Day trading basics Mumbai', 'Intraday risk management'],
    badge: 'Intraday Study',
    difficulty: 'Intermediate',
    readTime: '6 min read',
    subtitle: 'Understand intraday market hours, liquidity behavior, transaction costs, and daily risk caps.',
    sections: [
      {
        id: 'sessions',
        title: 'Mumbai Market Session Dynamics',
        summary: 'Volatility and liquidity shift significantly across NSE trading hours.',
        points: [
          'Opening 9:15–9:45 AM sees wide spreads and overnight gap adjustments.',
          'Mid-session often consolidates with lower volume participation.',
          'Closing 2:30–3:30 PM brings institutional rebalancing and square-off pressure.',
        ],
      },
      {
        id: 'costs',
        title: 'Overtrading & Cost Drag',
        summary: 'Frequent intraday entries silently compound brokerage, STT, and slippage.',
        points: [
          'Cap maximum setups per day (e.g., 2–3 high-conviction educational plans).',
          'Calculate net break-even points using our Brokerage & P&L Calculators.',
          'SEBI data confirms undisciplined high-frequency trading destroys capital.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is intraday trading suitable for absolute beginners?',
        answer: 'Beginners should first practice on higher timeframes (Daily/Swing) and paper journals before studying fast intraday charts.',
      },
      {
        question: 'Do you give live intraday calls during market hours?',
        answer: 'No. We never give live buy/sell calls. We teach independent analysis and strict capital control.',
      },
      {
        question: 'What is the most important intraday habit taught in your course?',
        answer: 'Honoring a hard daily maximum loss limit and shutting down screens immediately when hit.',
      },
    ],
    relatedLinks: [
      { title: 'Risk Management', href: '/risk-management' },
      { title: 'Brokerage Calculator', href: '/tools/brokerage-calculator' },
      { title: 'Trading Psychology', href: '/trading-psychology' },
    ],
  },
  'swing-trading-explained': {
    slug: 'swing-trading-explained',
    title: 'Swing Trading Explained for Working Learners',
    seoTitle: 'Swing Trading Course Mumbai | Multi-Day Chart Analysis',
    seoDescription:
      'Learn structured swing trading concepts in Mumbai: multi-day trend capture, daily chart setups, and overnight gap risk management.',
    keywords: ['Swing trading course Mumbai', 'Working professionals trading course', 'Daily chart analysis'],
    badge: 'Multi-Day Study',
    difficulty: 'Intermediate',
    readTime: '6 min read',
    subtitle: 'Ideal framework for Mumbai working professionals studying Daily and Weekly chart trends.',
    sections: [
      {
        id: 'mechanics',
        title: 'Why Swing Study Fits Busy Schedules',
        summary: 'Daily and 4-Hour charts reduce screen fatigue and filter out intraday noise.',
        points: [
          'Chart analysis is performed calmly after 3:30 PM market close.',
          'Focuses on clean multi-day breakouts and pullback continuations.',
          'Requires lower screen time compared to minute-by-minute tracking.',
        ],
      },
      {
        id: 'gap-risk',
        title: 'Managing Overnight & Event Risk',
        summary: 'Holding positions across sessions exposes capital to opening gaps.',
        points: [
          'Avoid holding oversized positions ahead of quarterly earnings or RBI events.',
          'Size positions conservatively to absorb 2–3% overnight gap fluctuations.',
          'Combine technical structure with basic corporate quality checks.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can Mumbai office-goers learn swing trading alongside a full-time job?',
        answer: 'Yes. Swing chart analysis can be studied after market hours without watching screens all day.',
      },
      {
        question: 'How is swing risk different from intraday risk?',
        answer: 'Swing positions carry overnight gap risk, so position sizes are kept smaller with wider structural stop-losses.',
      },
      {
        question: 'Is swing trading covered in Our Pro Plan?',
        answer: 'Yes, multi-timeframe swing case studies are an integral part of Our Pro and Ultra Pro plans.',
      },
    ],
    relatedLinks: [
      { title: 'Technical Analysis', href: '/technical-analysis' },
      { title: 'Position Sizing Calculator', href: '/tools/position-sizing-calculator' },
      { title: 'Our Packages', href: '/our-packages' },
    ],
  },
};

