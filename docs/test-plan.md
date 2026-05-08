# テスト計画

- Repo: `task-gamified-learning-procedures`
- Domain: Game
- Rank: 44 / P2 / Score 57
- Idea No: 3
- アイデア名: 実用手順・学習・タスクゲーミフィケーション
- 公開先: GitHub Pages / BOOTH
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\Game\task-gamified-learning-procedures`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/task-gamified-learning-procedures-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
