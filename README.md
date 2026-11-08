# ぴゅあらび PURE RABBIT ホームページ

池袋メイドカフェ「ぴゅあらび」の公式サイトです。HTML / CSS / JavaScript だけの静的サイトで、ビルドは不要です。

## ファイル構成

```
index.html        ページ本体（文章・料金表・店舗情報など）
css/style.css     デザイン
js/main.js        キャストカードの表示・スマホメニュー
data/cast.js      キャスト一覧（名前・好きなドリンク・ひとこと）
img/              写真・ロゴ（キャスト写真は img/cast-<id>.jpg）
video/            動画（トップ・衣装）
netlify.toml      Netlify の公開設定
```

## よくある編集

| やりたいこと | 編集するファイル |
| --- | --- |
| キャストを追加・削除・並べ替え | `data/cast.js` と `img/cast-<id>.jpg` |
| 料金・営業時間・住所・SNS を入れる | `index.html` の「要確認」と書かれた箇所（`class="tbd"`） |
| 写真を差し替える | `img/` の同じファイル名で上書き |
| 色や文字の大きさ | `css/style.css` 冒頭の `:root` |

キャスト写真は横長（4:3）推奨、幅900px程度に縮小してから入れると表示が速くなります。

## 公開の仕組み

GitHub の `main` ブランチに変更を push すると、Netlify が自動で公開を更新します（ビルドコマンドなし、公開ディレクトリはリポジトリ直下）。

## 手元で確認する

```
python3 -m http.server 8000
```
を実行して http://localhost:8000 を開きます。
