# LoL Viewer Wiki

League of Legends を「プレイはしないが配信や大会は見る」人向けに、試合中の用語やチャンピオン、オブジェクト、パッチ変更をやさしく説明するためのサイトです。

このリポジトリは、初心者が試合の流れを追いやすくなることを重視して作成します。対戦データ分析や個人プレイヤー情報ではなく、「何が起きているのか」を理解するための解説を主目的とします。

公開先: `https://lol-viewer-wiki.pages.dev`

## 想定している内容

- 初心者向け基礎ページ
- 用語集
- ロール解説
- オブジェクト解説
- チャンピオン一覧 / 個別ページ
- アイテム入門
- パッチノートのやさしい要約

## 技術方針

- `Astro` を使ったコンテンツ中心の静的サイト
- `Cloudflare Pages` で無料運用を想定
- Riot 公式の静的データを利用しつつ、初心者向け解説は手動で編集

## 開発メモ

- Node.js は `.nvmrc` のバージョンを利用
- 開発コマンド:
  - `npm run dev`
  - `npm run check`
  - `npm run build`

## ディレクトリ構成

```text
.
├── README.md
├── astro.config.mjs
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   └── pages/
└── docs/
    ├── architecture/
    │   ├── navigation.md
    │   └── sitemap.md
    ├── content/
    │   ├── champion-page-template.md
    │   └── sample-champion-ahri.md
    └── project/
        ├── mvp-champions.md
        ├── mvp.md
        ├── operations-flow.md
        ├── requirements.md
        └── tasks.md
```

## 公開メモ

- 本番公開は `Cloudflare Pages`
- 既定の公開URLは `pages.dev`
- 独自ドメインは必須にしていない
- `public/robots.txt` と `src/pages/sitemap.xml.ts` で公開向け最低限設定を管理
