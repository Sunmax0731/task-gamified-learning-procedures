export const productProfile = {
  "repo": "task-gamified-learning-procedures",
  "title": "実用手順・学習・タスクゲーミフィケーション",
  "domain": "Game",
  "version": "0.1.0-alpha.1",
  "rank": 44,
  "tier": "P2",
  "score": 57,
  "publicTarget": "GitHub Pages / BOOTH",
  "overview": "料理手順、タイピング、色彩、暗記、バイク整備、GitHub IssueやToDoをゲーム内のステージやクエストとして進める。",
  "problem": "実用的な手順やタスク管理は、学習継続や達成感が弱くなりやすい。",
  "differentiation": "現実のタスク完了や手順理解を、ゲーム内の進行条件として扱う。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/game",
    "src/content"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "GitHub Pages向け静的Webとして外部API、課金、ランキング送信、ユーザー投稿公開をclosed alphaでは扱わない。",
    "レベルや課題データはsamples配下に閉じ、素材は自作の軽量SVGだけを同梱する。",
    "BOOTH配布前に著作権、年齢表現、保存データの説明を確認する。"
  ]
};
