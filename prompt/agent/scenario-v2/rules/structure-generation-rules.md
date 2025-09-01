# YouTube動画構造生成ルール

## 基本原則
- あなたは以下に示すscene_typeについて理解し、与えられた`台本構造のベース`と台本プランナーの企画に基づいて台本を作る必要がある
- 与えられた`台本構造のベース`はあくまでベースであるため、後述するルールに従い特定のscene_typeのオブジェクトを増やすアレンジをしなければならない。

### 台本構造のベース
```json
{
  "scenarios": [
    {
      "scene_type": "title",
      "caption_text": []
    },
    {
      "scene_type": "post_title",
      "caption_text": []
    },
    {
      "scene_type": "subtitle",
      "caption_text": []
    },
    {
      "scene_type": "content",
      "caption_text": []
    },
    {
      "scene_type": "content",
      "caption_text": []
    },
    {
      "scene_type": "outro_content",
      "caption_text": []
    },
    {
      "scene_type": "end_hook",
      "caption_text": []
    },
    {
      "scene_type": "end_content",
      "caption_text": []
    }
  ]
}
```

### scene_typeフィールドのルール

#### 基本構造・scene_typeごとの説明
各scene_typeは以下の流れで構成され、タイミングと回数の制約を遵守する必要がある：
1. `title`:
    - 役割: 動画のメインタイトル表示
    - タイミング: 最初
    - 回数: 1回のみ
2. `post_title`:
    - 役割: 「最後は衝撃の○○」など、最終コンテンツへの期待感を高めるフック
    - タイミング: titleの次
    - 回数: 1回のみ
3. `subtitle`/`content`: 
    - 役割: メインコンテンツ群(subtitleは各セクションの見出し、contentは説明コンテンツ)
    - タイミング: post_titleの次から
    - 回数: 通常セクションごとに `subtitle → n個のcontent` のまとまりで複数回
    - その他制約: 通常セクションごとに冒頭にsubtitleを1回付けることが必須
4. `outro_content`:
    - 役割: 終盤のコンテンツ群（中身のある説明はしつつも結論を伏せて先延ばしにして期待感を維持）
    - タイミング: 最終セクションのみ
    - 回数: 任意の回数
    - その他制約: 最終セクションはsubtitleを付けることは禁止
5. `end_hook`: 結論前フック（1回のみ、最終結論の直前）
    - 役割: 「最後 衝撃の○○ 1位は」など、最終結論への期待を高めるフック
    - タイミング: outro_content と end_content の間
    - 回数: 1回のみ
6. `end_content`:
    - 役割: 最終結論、視聴者満足度を最大化する締め、最も驚きや面白さを感じるエンタメ性の高い内容を伝える
    - タイミング: end_hookの後(台本の最後)
    - 回数: 1〜2回まで

## 全フォーマット共通ルール
### タイトルとポストタイトル
- タイトルはパワーワードや常識破壊を用いた心理的に強烈なフックとなる文章となり、冒頭に1度だけ使用する
- タイトルのscene_typeは `title` を使用する
- ポストタイトルは最終コンテンツへの期待感を煽る文章となり、タイトルの直後に1度だけ使用する
- ポストタイトルのscene_typeは `post_title` を使用する

### 通常セクションと最終セクションについて
- 例えばTOP5であれば5つ、3選であれば3つ、1本深掘りであれば1つのセクションで構成される
- 最後のセクションのことを `最終セクション`、それ以外のセクションのことを `通常セクション` と呼称する
  - 例1: TOP5フォーマットであれば1位のセクションが最終セクション
  - 例2: 3選フォーマットであれば3つ目のセクションが最終セクション
  - 例3: 1本深掘りフォーマットは1セクション構成であるものの、`終盤の締めに持っていく一連の部分` を最終セクションとみなす
- 通常セクションのscene_typeは `content` を使用する
- 最終セクションのscene_typeは `outro_content` を使用する

### 最終フックと最終コンテンツについて
- 最終セクションの結論にあたり、動画の最後に紹介する最も盛り上がるコンテンツのことを `最終コンテンツ` と呼称する
- 最終コンテンツの直前に設けるフックのことを `最終フック` と呼称する
- 最終コンテンツのscene_typeは `end_content` を使用する
- 最終フックのscene_typeは `end_hook` を使用する

### content数調整ルール
```
- TOP5フォーマット: content数 = セクションごとに3〜6個
- TOP3フォーマット: content数 = セクションごとに5〜8個
- 5選フォーマット: content数 = セクションごとに3〜6個
- 3選フォーマット: content数 = セクションごとに5〜8個
- 1本深掘りフォーマット: content数 = 全体の文字数の範囲内で任意の個数
```

### outro_content数調整ルール
```
- 全フォーマット共通: outro_content数 = 最終セクションごとに3〜5個
```

### 文字数制限対応
- 文字数が不足する場合:
  - 意味が変わらないように細心の注意を払いながら冗長箇所の文字数を減らす
  - content数を減らす
- 文字数に余裕がある場合:
  - 虚偽の情報を混ぜないように文字数を増やす
  - content数を増やす

## フォーマット別詳細ルール

### A. 柔軟数調整可能フォーマット（TOP5、TOP3、5選、3選）

#### 通常セクション
- 通常セクションの冒頭は必ず `subtitle` をつける
- 1セクション内の `content` オブジェクトは文字数に応じて積極的に数を変更する(ただし全体構成のバランスや全体の文字数制限を考慮する)
- 制限に余裕があるからといって無理に1オブジェクトに情報を詰めすぎる必要はない

#### 最終セクション
- 最終セクションである `outro_content` の前に `subtitle` は不要(結論を先延ばしにしつつコンテンツの紹介をし最後まで見たくなるような演出をするため)
- `outro_content` オブジェクトは文字数に応じて積極的に数を変更する(ただし全体構成のバランスや全体の文字数制限を考慮する)
- 制限に余裕があるからといって無理に1オブジェクトに情報を詰めすぎる必要はない

#### 出力例（TOP5フォーマット、標準構成）
```json
{
  "scenarios": [
    {
      "scene_type": "title",
      "caption_text": [
        "かわいすぎる",
        "ラッコの",
        "習性",
        "TOP5"
      ]
    },
    {
      "scene_type": "post_title",
      "caption_text": [
        "最後は",
        "衝撃的な",
        "かわいさ"
      ]
    },
    {
      "scene_type": "subtitle",
      "caption_text": [
        "5位",
        "道具使いの",
        "天才"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコは",
        "野生動物の",
        "中でも",
        "珍しくて",
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "道具を",
        "器用に",
        "扱えるんだ",
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "固い",
        "貝を",
        "割る",
        "ときは"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "お腹に",
        "石を",
        "乗せて",
        "ハンマー",
        "代わりに",
        "使っちゃう"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "そして",
        "お気に入りの",
        "石は",
        "脇の下に",
        "しまうんだ"
      ]
    },
    {
      "scene_type": "subtitle",
      "caption_text": [
        "4位",
        "眠りの",
        "天才"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコは",
        "眠る",
        "とき",
        "波に",
        "流されないように"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "海藻で",
        "体を",
        "巻いて",
        "アンカーの",
        "役割に",
        "してる"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "仰向けで",
        "プカプカ",
        "浮かび",
        "ながら",
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "眠る",
        "姿は",
        "マジで",
        "癒される"
      ]
    },
    {
      "scene_type": "subtitle",
      "caption_text": [
        "3位",
        "美容",
        "オタク"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコは",
        "毛が",
        "命だから",
        "超",
        "真剣"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "なんと",
        "1日の",
        "半分を",
        "毛づくろいに",
        "ついやす"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコの",
        "毛は",
        "動物界で",
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "最も",
        "密度が",
        "高いって",
        "知ってた？"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "1平方",
        "cmに",
        "15万本も",
        "生えてて",
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "この毛の",
        "間に",
        "空気の",
        "層を",
        "作る"
      ]
    },
    {
      "scene_type": "subtitle",
      "caption_text": [
        "2位",
        "海の",
        "エコロジスト"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコは",
        "ウニを",
        "食べる",
        "ことで",
        "海藻林を",
        "守っている"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "その",
        "影響力の",
        "大きさから",
        "キーストーン",
        "スピーシーズと",
        "呼ばれて",
        "いるんだ"
      ]
    },
    {
      "scene_type": "outro_content",
      "caption_text": [
        "そして",
        "ラッコには",
        "仲間と",
        "離れない",
        "ための"
      ]
    },
    {
      "scene_type": "outro_content",
      "caption_text": [
        "奇跡的に",
        "かわいい",
        "習性が",
        "ある"
      ]
    },
    {
      "scene_type": "end_hook",
      "caption_text": [
        "ラッコの",
        "かわいすぎる",
        "習性",
        "1位は"
      ]
    },
    {
      "scene_type": "end_content",
      "caption_text": [
        "家族や",
        "仲間と",
        "手を",
        "つないで",
        "寝ること"
      ]
    }
  ]
}
```

### B. 固定構造フォーマット（1本深掘り）

#### 特徴
- `content` および `outro_content`数は全体の文字数制限内であれば自由（テーマの深堀りのため）
- 各contentの内容密度と質を重視
- `subtitle` 不要

#### 出力例（1本深掘りフォーマット）
```json
{
  "scenarios": [
    {
      "scene_type": "title",
      "caption_text": [
        "ラッコの",
        "知られざる",
        "生態",
        "完全解説"
      ]
    },
    {
      "scene_type": "post_title",
      "caption_text": [
        "実は",
        "ラッコが",
        "海の",
        "生態系を",
        "救ってるって",
        "知ってた？"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコって",
        "ただ",
        "かわいいだけじゃ",
        "ないんだ"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "彼らは",
        "海の",
        "生態系を",
        "守る",
        "超重要な",
        "役割を",
        "担ってる"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "その影響力は",
        "キーストーン種と",
        "呼ばれるほど"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコが",
        "大好きな",
        "ウニ"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "もし",
        "ラッコが",
        "いなくなると",
        "ウニが",
        "爆発的に",
        "増えて"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "海の森",
        "コンブを",
        "食べ尽くしちゃう"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "コンブが",
        "なくなると",
        "多くの",
        "魚や",
        "生き物の",
        "住処が",
        "消える"
      ]
    },
    {
      "scene_type": "content",
      "caption_text": [
        "ラッコは",
        "まさに",
        "海の",
        "守護神なんだ"
      ]
    },
    {
      "scene_type": "outro_content",
      "caption_text": [
        "でも",
        "ラッコの",
        "秘密は",
        "それだけじゃ",
        "ない"
      ]
    },
    {
      "scene_type": "outro_content",
      "caption_text": [
        "彼らの",
        "体には",
        "驚くべき",
        "秘密兵器が",
        "隠されてる"
      ]
    },
    {
      "scene_type": "outro_content",
      "caption_text": [
        "他の",
        "海の",
        "哺乳類と",
        "全く違う",
        "体の",
        "仕組みとは…"
      ]
    },
    {
      "scene_type": "end_hook",
      "caption_text": [
        "ラッコが",
        "極寒の",
        "海で",
        "生きるための",
        "究極の",
        "秘密兵器は…"
      ]
    },
    {
      "scene_type": "end_content",
      "caption_text": [
        "皮下脂肪が",
        "ほぼ無く",
        "世界一",
        "密度の高い",
        "毛皮だけで",
        "体温を",
        "保っていること"
      ]
    },
    {
      "scene_type": "end_content",
      "caption_text": [
        "だから",
        "1日の",
        "大半を",
        "毛づくろいに",
        "費やして",
        "命を",
        "守ってるんだ"
      ]
    }
  ]
}
```

## 段階的適用指針

### Stage 1: 基本構造確認
1. 指定されたフォーマットタイプを確認
2. 必須scene_typeが含まれているかチェック
3. scene_type順序が正しいかチェック

### Stage 2: 数量調整判断
1. 柔軟調整可能フォーマットか固定構造フォーマットかを判定
2. 文字数制限と内容密度のバランスを考慮
3. 適切なcontent数とsubtitle数を決定

### Stage 3: 内容品質確保
1. 各scene_typeの目的に沿った内容か確認
2. 視聴者の関心維持と情報価値のバランス確認
3. 動画全体の流れと一貫性を確認

## 注意事項

### 絶対禁止事項
- scene_type順序の変更
- 必須scene_typeの欠如
- フォーマット特性を無視した構造生成

### 推奨事項
- 文字数制限内での最適な情報密度
- 視聴者のエンゲージメント向上を意識した構成
