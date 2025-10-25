import Link from "next/link";

const heroTags = [
  "Flutter / iOS / Android",
  "AI × Automation",
  "0→1 Launch",
];

const services = [
  {
    phase: "01 Discovery",
    title: "要件定義 & プロトタイピング",
    description:
      "ビジネス課題をヒアリングし、技術的な実現可能性を検証。ロードマップとKPIを設計します。",
    bullets: ["ユーザーインタビュー", "技術選定と実現可能性検証", "PoCとプロトタイプ開発"],
  },
  {
    phase: "02 Development",
    title: "Flutterアプリ開発",
    description:
      "iOS/Android/デスクトップアプリをFlutterで開発。Firebase/Supabaseなどのバックエンドと統合します。",
    bullets: ["UI/UX実装", "App Store/Play Store配信", "CI/CD構築（GitHub Actions / fastlane）"],
  },
  {
    phase: "03 AI Integration",
    title: "AI自動化システム開発",
    description:
      "LLMやベクター検索を活用し、業務に適したAI自動化システムを構築します。",
    bullets: ["業務プロセスの自動化", "権限管理と監査ログ", "AI評価指標の収集"],
  },
  {
    phase: "04 Operation",
    title: "運用とメンテナンス",
    description:
      "リリース後の運用サポート、機能改善、パフォーマンス最適化を継続的に提供します。",
    bullets: ["ドキュメント整備", "モニタリングと障害対応", "機能追加と改善"],
  },
];

const deliveryHighlights = [
  {
    period: "2025",
    category: "Mobile",
    title: "オーディオデバイス制御アプリ",
    summary:
      "マルチデバイス対応のオーディオ機器向けFlutterアプリを開発。BLEと独自無線プロトコルで複数デバイスを同時制御し、EQ/音量/LEDなどを一括設定できるUXを実装。",
    bullets: ["Provider + Redux風アーキテクチャで状態管理", "多言語対応とCI/CD構築"],
  },
  {
    period: "2025",
    category: "AI Search",
    title: "RAGシステム構築",
    summary:
      "Qdrantによるベクター検索とDifyを活用した自然言語検索システムを構築。データ基盤からフロントエンドまで設計・実装し、LLM評価指標の自動収集とログ分析を実装。",
    bullets: ["ベクター検索と権限管理の実装", "GitHub Actionsでナレッジを定期同期"],
  },
  {
    period: "2024",
    category: "Workflow",
    title: "社内QAボット",
    summary:
      "Slack Bolt（WebSocket）とDifyを統合し、社内の問い合わせを自動回答するボットを構築。LLMのベストプラクティスをドキュメント化し、全社展開。",
    bullets: ["Slack運用の自動化", "問い合わせの自動チケット化"],
  },
  {
    period: "2024",
    category: "Desktop",
    title: "Mac給与計算アプリ",
    summary:
      "Flutter Desktopで給与計算アプリを6ヶ月で開発・リリース。業務フローをデジタル化し、処理時間を大幅に削減。CI/CDと自動リリースノートも構築。",
    bullets: ["給与計算ロジックの実装", "fastlane + GitHub Actionsで配信自動化"],
  },
  {
    period: "2024 – 2022",
    category: "Mobile",
    title: "現場業務アプリ",
    summary:
      "現場業務を統合するFlutterアプリを0から立ち上げ。オフライン対応、App Store/Play Store配信、SaaS運用を実装。3-8名のチームをリード。",
    bullets: ["オフライン同期機能の実装", "App Store/Play Store運用"],
  },
];

const contactChannels = [
  {
    label: "Email",
    title: "contact@limit8less.com",
    href: "mailto:contact@limit8less.com",
    action: "メール",
    external: true,
  },
];

const englishAddress =
  "Room 1-1-1, 29F, Osaka Ekimae Dai-3 Building, 1-1-3 Umeda, Kita-ku, Osaka-shi, Osaka-fu, Japan";

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <div className="max-w-3xl space-y-4">
    <p className="text-[0.7rem] uppercase tracking-[0.65em] text-indigo-300 font-bold">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
    {description ? (
      <p className="text-lg leading-relaxed text-slate-300">{description}</p>
    ) : null}
  </div>
);

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#030712] via-[#0a0f1f] to-[#030712] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-10 h-[40rem] w-[40rem] rounded-full bg-indigo-600/30 blur-[160px] animate-pulse" />
        <div className="absolute right-0 top-60 h-[36rem] w-[36rem] rounded-full bg-teal-400/20 blur-[220px]" />
        <div className="absolute -bottom-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-purple-500/15 blur-[200px]" />
        <div className="absolute top-1/2 right-1/4 h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-24 px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <header id="top" className="space-y-16">
          <nav className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-indigo-300 font-semibold">
                LIMIT8LESS合同会社
              </p>
              <p className="text-lg font-bold text-white">
                Beyond Limits Product Studio
              </p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-300">
              <Link href="#company" className="hover:text-white transition-colors duration-200">
                会社概要
              </Link>
              <Link href="#services" className="hover:text-white transition-colors duration-200">
                サービス
              </Link>
              <Link href="#partner" className="hover:text-white transition-colors duration-200">
                パートナー
              </Link>
              <Link href="#projects" className="hover:text-white transition-colors duration-200">
                プロジェクト
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors duration-200">
                アクセス
              </Link>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:from-indigo-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              プロジェクト相談
            </Link>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.6em] text-indigo-200">
                Remote · Product Studio
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                モバイルアプリとAI自動化で、<br />ビジネス課題を解決する。
              </h1>
              <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
                Flutterによるモバイルアプリケーション開発と、AI自動化を専門としています。
                スタートアップの0→1立ち上げから、エンタープライズの業務効率化まで、
                技術選定・設計・実装・運用まで一貫して対応します。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-base font-bold text-white shadow-2xl shadow-indigo-500/40 transition-all duration-300 hover:shadow-indigo-500/60 hover:scale-105"
                >
                  相談する
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center rounded-full border-2 border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
                >
                  サービスを見る
                </Link>
              </div>
              <ul className="flex flex-wrap gap-3 text-sm">
                {heroTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-5 py-2 font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:from-indigo-500/20 hover:to-purple-500/20"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
              <div className="space-y-5 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.5em] text-indigo-300 font-semibold">
                  Headquarter
                </p>
                <h2 className="text-2xl font-bold text-white">
                  LIMIT8LESS合同会社
                </h2>
                <div className="space-y-1">
                  <p className="text-slate-300">〒530-0001</p>
                  <p className="text-slate-300">大阪府大阪市北区梅田1丁目1-3</p>
                  <p className="text-slate-300">大阪駅前第3ビル29階1-1-1号室</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{englishAddress}</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <iframe
                  title="LIMIT8LESS所在地マップ"
                  src="https://www.google.com/maps?q=1-1-3%20Umeda%2C%20Kita-ku%2C%20Osaka&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </header>

        <section id="company" className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <article className="space-y-6">
            <SectionHeading
              eyebrow="Company"
              title="技術選定から運用まで、一貫したサポート"
              description="モバイルアプリ開発とAI自動化を軸に、要件定義・技術選定・実装・運用までフルスタックに対応します。0→1の立ち上げから、既存システムの改善まで幅広く支援します。"
            />
            <ul className="grid gap-4 text-slate-200 sm:grid-cols-2">
              <li className="group rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/20">
                <p className="text-xs uppercase tracking-[0.4em] text-indigo-300 font-semibold">
                  Focus
                </p>
                <p className="mt-2 text-xl font-bold text-white">
                  モバイルアプリ × AI自動化
                </p>
              </li>
              <li className="group rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-teal-500/20">
                <p className="text-xs uppercase tracking-[0.4em] text-teal-300 font-semibold">
                  Experience
                </p>
                <p className="mt-2 text-xl font-bold text-white">
                  スタートアップ / エンタープライズ
                </p>
              </li>
            </ul>
          </article>
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl shadow-xl shadow-purple-500/10">
            <h3 className="text-xl font-bold text-white">コーポレート情報</h3>
            <dl className="mt-6 space-y-5 text-sm text-slate-200">
              <div>
                <dt className="text-white/60">商号</dt>
                <dd>LIMIT8LESS合同会社</dd>
              </div>
              <div>
                <dt className="text-white/60">所在地</dt>
                <dd>〒530-0001 大阪府大阪市北区梅田1丁目1-3 大阪駅前第3ビル29階1-1-1号室</dd>
              </div>
              <div>
                <dt className="text-white/60">法人番号</dt>
                <dd className="text-lg font-semibold text-white">5120003028187</dd>
              </div>
              <div>
                <dt className="text-white/60">英語表記</dt>
                <dd>{englishAddress}</dd>
              </div>
            </dl>
          </article>
        </section>

        <section
          id="services"
          className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent px-6 py-16 backdrop-blur-sm sm:px-8"
        >
          <SectionHeading
            eyebrow="Services"
            title="要件定義から運用まで一貫して対応"
            description="Flutterによるモバイルアプリ開発と、AI自動化を提供します。要件定義から実装、運用まで一貫してサポートします。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.phase}
                className="group h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <p className="text-sm font-bold text-indigo-300">
                  {service.phase}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-300">{service.description}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="partner" className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-8 backdrop-blur-sm sm:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <p className="text-[0.7rem] uppercase tracking-[0.65em] text-indigo-300 font-bold">
                About
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                s-tyd
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                モバイルアプリケーションエンジニア
              </p>
            </div>

            <p className="text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
              Flutter開発、AI自動化を専門としています。<br />
              詳しい経歴やプロジェクト実績については、個人ホームページをご覧ください。
            </p>

            <div className="flex justify-center pt-4">
              <Link
                href="https://s-tyd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-indigo-500/40 transition-all duration-300 hover:shadow-indigo-500/60 hover:scale-105"
              >
                詳しいプロフィールを見る
                <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-8 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-indigo-300 font-semibold mb-2">Expertise</p>
                <p className="text-sm text-slate-300">Flutter / iOS / Android<br />AI自動化</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-teal-300 font-semibold mb-2">Experience</p>
                <p className="text-sm text-slate-300">0→1アプリ立ち上げ<br />チームリード（3-8名）</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-2">Tech Stack</p>
                <p className="text-sm text-slate-300">Flutter / Python<br />LLM / Vector Search</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <SectionHeading
            eyebrow="Projects"
            title="プロジェクト実績"
            description="RAGシステム、モバイルアプリ、Slack自動化など、実際に携わったプロジェクトをご紹介します。"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {deliveryHighlights.map((project) => (
              <article
                key={`${project.title}-card`}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="font-semibold">{project.period}</span>
                  <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-300 font-semibold">{project.category}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-300">{project.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-10">
          <SectionHeading
            eyebrow="Contact"
            title="お問い合わせ"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {contactChannels.map((channel) => (
              <article
                key={channel.label}
                className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/20 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-indigo-300/70 font-semibold">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {channel.title}
                  </p>
                </div>
                <Link
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:from-indigo-500/20 hover:to-purple-500/20 hover:shadow-lg hover:shadow-indigo-500/20 sm:mt-0"
                >
                  {channel.action}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-white/5 px-5 py-12 text-center text-sm text-slate-400 backdrop-blur-sm">
        <p className="font-semibold text-white">© 2025 LIMIT8LESS合同会社 · Beyond Limits Product Studio</p>
        <p className="mt-2 text-xs text-slate-500">{englishAddress}</p>
      </footer>
    </div>
  );
}
