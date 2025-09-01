# 3選フォーマット構造

## 概要
ナンバリング形式の3選フォーマットの構造テンプレート

## JSON構造

```json
{
  "scenarios": [
    {
      "scene_type": "title",
      "caption_text": [],
      "description": "動画のメインタイトル"
    },
    {
      "scene_type": "post_title",
      "caption_text": [],
      "description": "最終コンテンツへの期待感を高めるフック"
    },
    {
      "scene_type": "subtitle",
      "caption_text": [],
      "description": "1つ目の見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "1つ目の詳細説明 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "1つ目の詳細説明 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "1つ目の詳細説明 - 3"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "1つ目の詳細説明 - 4"
    },
    {
      "scene_type": "subtitle",
      "caption_text": [],
      "description": "2つ目の見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "2つ目の詳細説明 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "2つ目の詳細説明 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "2つ目の詳細説明 - 3"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "2つ目の詳細説明 - 4"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "3つ目の導入部分 - 1"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "3つ目の導入部分 - 2"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "3つ目の導入部分 - 3"
    },
    {
      "scene_type": "end_hook",
      "caption_text": [],
      "description": "最終結論への期待を高めるフック"
    },
    {
      "scene_type": "end_content",
      "caption_text": [],
      "description": "3つ目の最終結論"
    }
  ]
}
```

## 特徴
- 1から3の昇順ナンバリング
- 最後（3つ目）のみサブタイトルなし
- 5選より少ない分、各トピックの content_slots を多めに設定
- より深掘りした内容構成
