# フォーマット構造一覧

## 概要
プランナーが決定する各フォーマットのJSON構造テンプレート一覧

## 対応フォーマット

### 1. ランキング形式
- **TOP5**: [format-top5-structure.md](./format-top5-structure.md)
- **TOP3**: [format-top3-structure.md](./format-top3-structure.md)

### 2. ナンバリング形式
- **5選**: [format-5choice-structure.md](./format-5choice-structure.md)
- **3選**: [format-3choice-structure.md](./format-3choice-structure.md)

### 3. 深掘り形式
- **1本深掘り**: [format-deep-dive-structure.md](./format-deep-dive-structure.md)

## 共通構造

### 基本フォーマット
全フォーマットで共通する`scenarios`配列構造：
```json
{
  "scenarios": [
    {
      "scene_type": "title|post_title|subtitle|content|outro_content|end_hook|end_content",
      "caption_text": [],
      "description": "説明文"
    }
  ]
}
```

### 必須要素
全フォーマットで共通する要素：
- `scene_type`: シーンタイプ
- `caption_text`: 空配列（ライターエージェントが埋める）
- `description`: 各要素の説明

### 基本構成
全フォーマットで共通する流れ：
- `title`: 動画タイトル
- `post_title`: タイトル後のフック
- 中間部分: `subtitle`と`content`の組み合わせ
- 最終部分: `outro_content` → `end_hook` → `end_content`

### scene_type一覧
- `title`: タイトル表示
- `post_title`: タイトル後フック
- `subtitle`: セクション見出し
- `content`: 通常コンテンツ
- `outro_content`: 最終導入コンテンツ
- `end_hook`: 結論前フック
- `end_content`: 最終結論

## content_slots の意味
- 数値（例: `1`）: 固定数
- 範囲（例: `"3-5"`）: 最小-最大の推奨範囲
- ライターエージェントがこの範囲内で最適な分割数を決定

## 使用方法
1. プランナーがフォーマットを決定
2. 対応する構造ファイルを参照
3. 構造化スクリプトがJSON構造を生成
4. ライターエージェントが構造に沿ってコンテンツを作成
