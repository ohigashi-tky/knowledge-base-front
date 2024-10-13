// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app", // Remixのアプリケーションディレクトリ
    assetsBuildDirectory: "public/build", // ビルドしたアセットの出力先
    serverBuildPath: "build/index.js", // サーバーのビルド出力先
    publicPath: "/build/", // 公開ディレクトリのURLパス
    devServerPort: 8002, // 開発サーバーのポート（必要に応じて変更）
    tailwind: true,
    postcss: true,
  };