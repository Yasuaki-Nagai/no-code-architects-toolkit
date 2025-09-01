# TOP5フォーマット構造

## 概要
ランキング形式のTOP5フォーマットの構造テンプレート

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
      "description": "5位の見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "5位の詳細説明 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "5位の詳細説明 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "5位の詳細説明 - 3"
    },
    {
      "scene_type": "subtitle",
      "caption_text": [],
      "description": "4位の見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "4位の詳細説明 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "4位の詳細説明 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "4位の詳細説明 - 3"
    },
    {
      "scene_type": "subtitle",
      "caption_text": [],
      "description": "3位の見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "3位の詳細説明 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "3位の詳細説明 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "3位の詳細説明 - 3"
    },
    {
      "scene_type": "subtitle",
      "caption_text": [],
      "description": "2位の見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "2位の詳細説明 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "2位の詳細説明 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "2位の詳細説明 - 3"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "1位の導入部分 - 1"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "1位の導入部分 - 2"
    },
    {
      "scene_type": "end_hook",
      "caption_text": [],
      "description": "最終結論への期待を高めるフック"
    },
    {
      "scene_type": "end_content",
      "caption_text": [],
      "description": "1位の最終結論"
    }
  ]
}
```

## 特徴
- 5位から1位の降順ランキング
- 1位のみサブタイトルなし
- outro_content → end_hook → end_content の流れで最後を演出
