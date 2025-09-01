### scene_typeフィールドのルール

#### 基本構造
動画は以下の順序で構成される：
1. `title`: 動画タイトル（1回のみ、最初）
2. `post_title`: タイトル後フック（1回のみ、titleの次）
3. `subtitle`/`content`: メインコンテンツ群（複数回、中間部分）
4. `outro_content`: 最終コンテンツ群（複数回、結論を先延ばしにする内容）
5. `end_hook`: 結論前フック（1回のみ、最終結論の直前）
6. `end_content`: 最終結論（1〜2回まで、動画の締め）

#### 各タイプの詳細
- **title**: 動画のメインタイトル表示
- **post_title**: 「最後は衝撃の○○」など、最終コンテンツへの期待感を高めるフック
- **subtitle**: 各セクションの見出し（従来通り）
- **content**: 通常の説明コンテンツ（従来通り）
- **outro_content**: 最終部分の内容、結論を先延ばしにして期待感を維持
- **end_hook**: 「○○の△つ目は」など、最終結論への期待を高めるフック
- **end_content**: 動画の最終結論、視聴者満足度を最大化する締め

#### 使用制限
- `title`, `post_title`, `end_hook`, `end_content`: 各1回のみ使用
- `end_content`: 1〜2回まで使用
- `subtitle`, `content`, `outro_content`: 複数回使用可能
