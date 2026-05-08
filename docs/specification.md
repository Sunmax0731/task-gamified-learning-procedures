# 仕様

- Repo: `task-gamified-learning-procedures`
- Domain: Game
- Rank: 44 / P2 / Score 57
- Idea No: 3
- アイデア名: 実用手順・学習・タスクゲーミフィケーション
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## フロー
1. サンプルデータを読み込む。
2. 代表カード、状態、主要操作を確認する。
3. 警告、失敗、手動確認待ちを同じ画面で読む。
4. 手動テスト手順へ進む。

## データ
- `samples/representative-suite.json`: happy-path / missing-required / warning / mixed-batch。
- `samples/sample-telemetry.json`: playable stageとcontent editorの代表データ。

## 安全境界
- GitHub Pages向け静的Webとして外部API、課金、ランキング送信、ユーザー投稿公開をclosed alphaでは扱わない。
- レベルや課題データはsamples配下に閉じ、素材は自作の軽量SVGだけを同梱する。
- BOOTH配布前に著作権、年齢表現、保存データの説明を確認する。
