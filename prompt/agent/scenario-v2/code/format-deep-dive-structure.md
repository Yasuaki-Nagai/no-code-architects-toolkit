# 1本深掘りフォーマット構造

## 概要
1つのテーマを深く掘り下げるフォーマットの構造テンプレート

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
      "description": "テーマの導入見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "テーマの基本情報・背景 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "テーマの基本情報・背景 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "テーマの基本情報・背景 - 3"
    },
    {
      "scene_type": "subtitle",
      "caption_text": [],
      "description": "第1の展開見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第1の詳細情報・事実 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第1の詳細情報・事実 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第1の詳細情報・事実 - 3"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第1の詳細情報・事実 - 4"
    },
    {
      "scene_type": "subtitle",
      "caption_text": [],
      "description": "第2の展開見出し"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第2の詳細情報・事実 - 1"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第2の詳細情報・事実 - 2"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第2の詳細情報・事実 - 3"
    },
    {
      "scene_type": "content",
      "caption_text": [],
      "description": "第2の詳細情報・事実 - 4"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "最も重要な事実への導入 - 1"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "最も重要な事実への導入 - 2"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "最も重要な事実への導入 - 3"
    },
    {
      "scene_type": "outro_content",
      "caption_text": [],
      "description": "最も重要な事実への導入 - 4"
    },
    {
      "scene_type": "end_hook",
      "caption_text": [],
      "description": "最終結論への期待を高めるフック"
    },
    {
      "scene_type": "end_content",
      "caption_text": [],
      "description": "最終的な結論・インパクト - 1"
    },
    {
      "scene_type": "end_content",
      "caption_text": [],
      "description": "最終的な結論・インパクト - 2"
    }
  ]
}
```

## 特徴
- 1つのテーマを複数セクションで深掘り
- 最後のセクション（クライマックス）のみサブタイトルなし
- 各セクションの content_slots が多く、詳細な説明が可能
- ストーリー性を重視した構成
- 最終的なインパクトを重視
