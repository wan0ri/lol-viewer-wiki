# LoL Viewer Wiki サイトマップ

## 1. 文書の目的

本書は、`LoL Viewer Wiki` のページ構成と URL 設計を整理するためのサイトマップである。  
MVP として初回公開する範囲と、将来的に拡張する範囲を分けて記載する。

## 2. 情報設計の前提

本サイトは、`League of Legends をあまり知らない観戦者` を主対象とする。  
そのため、情報設計では次の 3 点を重視する。

- どこから読めばいいか分かること
- 用語やチャンピオンを後から調べやすいこと
- トップページから主要カテゴリへ迷わず移動できること

## 3. URL 設計方針

### 3.1 基本方針

- URL は英小文字 + ハイフンで統一する
- URL はカテゴリ単位で整理する
- 日本語タイトルと URL は分離する
- 初心者向けの学習ページと辞書的ページを URL 上でも分ける

### 3.2 想定カテゴリ

- `/`
- `/start/`
- `/terms/`
- `/roles/`
- `/objectives/`
- `/champions/`
- `/patch-notes/`
- `/about/`
- `/policy/`

## 4. MVP サイトマップ

以下は、初回公開時点で用意するページ群である。

### 4.1 トップページ

- `/`
  - サイトトップ
  - 主な役割:
    - サイトの目的を伝える
    - 初心者向け導線を提示する
    - 用語集、チャンピオン一覧、最新パッチへ誘導する

### 4.2 はじめて見る人向け

- `/start/`
  - はじめて見る人向けトップ
- `/start/what-is-lol/`
  - LoLとは何か
- `/start/win-condition/`
  - 勝利条件
- `/start/map-overview/`
  - サモナーズリフトの見方
- `/start/game-flow/`
  - 試合の流れ
- `/start/how-to-watch/`
  - 観戦するときにまず見るポイント

### 4.3 用語集

- `/terms/`
  - 用語集トップ
- `/terms/kda/`
  - キル、デス、アシスト
- `/terms/cs/`
  - CS
- `/terms/gold/`
  - ゴールド
- `/terms/level/`
  - レベル
- `/terms/teamfight/`
  - 集団戦
- `/terms/laning/`
  - レーン戦
- `/terms/gank/`
  - ガンク
- `/terms/roam/`
  - ローム
- `/terms/poke/`
  - ポーク
- `/terms/engage/`
  - エンゲージ
- `/terms/vision/`
  - 視界
- `/terms/cc/`
  - CC

### 4.4 ロール解説

- `/roles/`
  - ロール一覧
- `/roles/top/`
  - トップ
- `/roles/jungle/`
  - ジャングル
- `/roles/mid/`
  - ミッド
- `/roles/adc/`
  - ADC
- `/roles/support/`
  - サポート
- `/roles/compare/`
  - 各ロールの役割と見どころ

### 4.5 オブジェクト解説

- `/objectives/`
  - オブジェクト一覧
- `/objectives/tower/`
  - タワー
- `/objectives/dragon/`
  - ドラゴン
- `/objectives/baron/`
  - バロン
- `/objectives/herald/`
  - ヘラルド
- `/objectives/inhibitor/`
  - インヒビター
- `/objectives/why-objectives-matter/`
  - オブジェクトを取る意味

### 4.6 チャンピオン一覧 / 個別ページ

- `/champions/`
  - チャンピオン一覧
  - 一覧カードの固定表示項目:
    - 名前
    - 画像
    - 主なロール
    - ひとことで言うと
- `/champions/[slug]/`
  - チャンピオン個別ページ

#### MVP 時点の個別ページ対象

MVP では、以下の 10 体を個別ページ対象とする。

- Top:
  - レネクトン
  - オーン
- Jungle:
  - リー・シン
  - ジャーヴァンⅣ
- Mid:
  - オリアナ
  - アーリ
- ADC:
  - ジン
  - カイ＝サ
- Support:
  - スレッシュ
  - ノーチラス

### 4.7 パッチノート要約

- `/patch-notes/`
  - 公開時点の最新パッチ要約への導線ページ
- `/patch-notes/latest/`
  - 公開時点の最新パッチのやさしい要約

#### パッチ要約の運用方針

- 初回公開時は、サイト公開時点の最新パッチ要約を掲載する
- 過去パッチを大量にアーカイブする運用は MVP では行わない
- 運営開始後は、新しいパッチが来たタイミングで `latest` の内容を更新する
- パッチごとの履歴ページを積み上げる構成は、必要性が出た時点で再検討する

### 4.8 補助ページ

- `/about/`
  - このサイトについて
- `/policy/riot-disclaimer/`
  - Riot 非公式表記と注意事項

## 5. 将来拡張のサイトマップ

以下は MVP 後に追加を検討するページ群である。

### 5.1 用語集の拡張

- `/terms/objective/`
- `/terms/push/`
- `/terms/wave/`
- `/terms/burst/`
- `/terms/carry/`
- `/terms/scale/`

### 5.2 チャンピオン導線の拡張

- `/champions/role/top/`
- `/champions/role/jungle/`
- `/champions/role/mid/`
- `/champions/role/adc/`
- `/champions/role/support/`

必要であれば、将来的に以下も検討する。

- `/champions/difficulty/beginner/`
- `/champions/difficulty/intermediate/`

### 5.3 アイテム入門

- `/items/`
  - アイテム入門トップ
- `/items/damage/`
- `/items/defense/`
- `/items/sustain/`
- `/items/anti-heal/`
- `/items/penetration/`
- `/items/mobility/`
- `/items/when-to-buy/`

### 5.4 パッチアーカイブ拡張

- 将来的に必要になった場合のみ、過去パッチのアーカイブ導線を追加する
- 例:
  - `/patch-notes/archive/`
    - パッチ一覧の整理ページ

## 6. グローバルナビゲーションに含める項目

MVP 時点では、グローバルナビゲーションに以下を含める。

- はじめて見る人向け
- 用語集
- ロール
- オブジェクト
- チャンピオン
- パッチノート

補助ページはグローバルナビゲーションではなく、フッターや下層導線で扱う。

- このサイトについて
- Riot 非公式表記

## 7. トップページからの主要導線

トップページでは、以下の 4 導線を最優先で表示する。

- はじめて見る人はこちら
- 配信で聞く言葉を調べる
- チャンピオンを探す
- 最新パッチをやさしく読む

対応する遷移先は以下とする。

- はじめて見る人はこちら → `/start/`
- 配信で聞く言葉を調べる → `/terms/`
- チャンピオンを探す → `/champions/`
- 最新パッチをやさしく読む → `/patch-notes/latest/`

## 8. ページ間導線の基本ルール

### 8.1 はじめて見る人向けページ

- 学習順に従って `次に読む` を 1 件表示する
- `あわせて読む` を 2〜3 件表示する
- 重要用語を用語集へリンクする

### 8.2 用語ページ

- 関連するロール解説へリンクする
- 関連するオブジェクトページへリンクする
- 初心者向けの導入ページへ戻れるようにする

### 8.3 ロールページ

- 関連用語へリンクする
- 該当ロールの代表チャンピオンへつなぐ
- ロール比較ページへつなぐ

### 8.4 チャンピオンページ

- 所属ロールページへリンクする
- 関連用語へリンクする
- 関連パッチや一覧ページへ戻れるようにする

### 8.5 パッチノート要約ページ

- 関係するチャンピオンページへリンクする
- 関係する用語ページへリンクする
- 一覧ページと最新ページを行き来しやすくする

## 9. ファイル配置イメージ

Astro 実装時の大まかな配置イメージは以下とする。

```text
src/pages/
  index.astro
  start/
    index.astro
    what-is-lol.astro
    win-condition.astro
    map-overview.astro
    game-flow.astro
    how-to-watch.astro
  terms/
    index.astro
    [slug].astro
  roles/
    index.astro
    top.astro
    jungle.astro
    mid.astro
    adc.astro
    support.astro
    compare.astro
  objectives/
    index.astro
    tower.astro
    dragon.astro
    baron.astro
    herald.astro
    inhibitor.astro
    why-objectives-matter.astro
  champions/
    index.astro
    [slug].astro
  patch-notes/
    index.astro
    latest.astro
    [version].astro
  about.astro
  policy/
    riot-disclaimer.astro
```

## 10. フェーズ3での確定事項

本書をもって、情報設計フェーズでは少なくとも以下を確定対象とする。

- サイトマップ
- URL 設計方針
- MVP 時点の主要ページ群
- グローバルナビゲーション項目
- トップページからの主要導線
- チャンピオン一覧カードの固定表示項目
- ページ間導線の基本ルール

## 11. 次アクション

本書の次に進めるべき作業は以下である。

1. `docs/project/tasks.md` のフェーズ3を完了扱いにするか確認する
2. チャンピオン個別ページの対象候補を決める
3. 各ページ種別のテンプレート設計に進む
4. Astro プロジェクト初期化に進む
