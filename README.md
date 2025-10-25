## 開発環境のセットアップ

1. Node.js v20.18.1 以上／npm v10 以上を用意してください（`undici@7.14.0` のエンジン要件）。
2. 依存関係をインストールします。

```bash
npm install
```

3. ローカル開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとリアルタイムで変更内容を確認できます。エントリーポイントは `src/app/page.tsx` です。

## ビルド & デプロイ

- ビルド: `npm run build`  
  Next.js の本番ビルドを作成します。
- プレビュー: `npm run cf:preview`  
  Cloudflare Pages のローカルプレビューサーバーを起動します。
- デプロイ: `npm run deploy`  
  `next-on-pages` で出力された `.vercel/output/static` を Cloudflare Pages へデプロイします。

## その他

- 型チェック／Lint: `npm run lint`
- 本番サーバー起動（ビルド済みアセットを使用）: `npm run start`

Cloudflare Pages での Next.js デプロイフローの詳細は [OpenNext (Cloudflare)](https://opennext.js.org/cloudflare) を参照してください。
