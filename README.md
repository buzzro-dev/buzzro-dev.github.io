# BUZZRO — Official Website

日本発のストリートファッション × アニメカルチャー。
**STAY UNBOTHERED. / 何が起きても、余裕っしょ😎**

## 構成

- `index.html`: 日本語トップページ（ABOUT / CHARACTER / COMING SOON / INSTAGRAM）
- `style.css`: レスポンシブデザイン、アニメーション、動きを減らす設定への対応
- `script.js`: スクロール演出、正式画像の差し替え設定
- `assets/`: 正式ロゴ・キャラクター画像の配置場所

外部ライブラリ、外部フォント、アクセス解析、課金サービスは使用しません。

## 正式画像の設定

画像を `assets/` に置き、`script.js` の `officialAssets` の `null` を画像の相対パスへ変更します。未設定・読込失敗時は仮表示が残ります。正式画像以外のロゴやキャラクターは採用していません。文字のBUZZROはサイトのテキスト表記です。

## GitHub Pages

所有者の承認後、リポジトリの Settings → Pages → Deploy from a branch → `main` / `(root)` を選択して保存します。
公開予定URL: https://buzzro-dev.github.io/

更新のコミット・公開前に、所有者がデザインと公開内容を確認してください。コミットには個人名や個人メールを使用せず、GitHubの非公開メール設定を使用してください。

## 確認項目

スマホ・PC表示、ページ内リンク、Instagramへのリンク、正式画像、キーボード操作、動きを減らす設定を確認します。
