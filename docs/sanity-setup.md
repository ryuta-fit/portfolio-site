# Sanityセットアップガイド

## 1. Sanityプロジェクトの作成

1. [Sanity.io](https://www.sanity.io/) にアクセスしてアカウントを作成
2. 新しいプロジェクトを作成
3. プロジェクトIDとデータセット名をメモ

## 2. 環境変数の設定

`.env.local.example` を `.env.local` にコピーして、以下の値を設定：

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=あなたのプロジェクトID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=あなたのAPIトークン
```

## 3. Sanity Studioのセットアップ

```bash
# Sanity CLIをグローバルインストール
npm install -g @sanity/cli

# Sanityにログイン
sanity login

# プロジェクトを初期化
sanity init --bare
```

## 4. 必要なパッケージのインストール

```bash
npm install next-sanity @sanity/client @sanity/image-url @sanity/vision
```

## 5. Sanity Studioの起動

```bash
# 開発環境でSanity Studioを起動
npm run sanity:dev
```

## 6. コンテンツの作成

1. http://localhost:3333 にアクセス
2. 各スキーマに従ってコンテンツを作成：
   - **Author**: 自己紹介情報
   - **Career**: 経歴情報
   - **Category**: ブログカテゴリー
   - **Post**: ブログ記事
   - **Media**: メディア掲載情報
   - **Service**: サービス/作品情報

## 7. CORSの設定

Sanityダッシュボードで以下を設定：

1. Settings → API → CORS Origins
2. 以下のURLを追加：
   - http://localhost:3000
   - https://あなたのドメイン.com

## スキーマの構成

- `author.ts`: 著者情報（プロフィール）
- `career.ts`: 経歴情報
- `category.ts`: ブログカテゴリー
- `post.ts`: ブログ記事
- `media.ts`: メディア掲載
- `service.ts`: サービス/作品

## 注意事項

- 画像は自動的に最適化されます
- 多言語対応（日本語/英語）を考慮したフィールド設計
- リアルタイムプレビュー機能が利用可能