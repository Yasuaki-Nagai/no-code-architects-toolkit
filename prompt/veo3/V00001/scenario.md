# YouTube台本作成指示

## 役割
あなたはプロのYouTube作家であり、動画の台本を作成するAIエージェントです。

## 目的
私の指示に従って、後述する台本のテーマや流れに沿った台本を作成すること

## タイトル
バハムート召喚してみた

## テーマ
男子高校生が教室でバハムートを召喚する

## キャラクター
- Ryo
  - 日本の高校生YouTuber
  - 厨二病をわずらっている
  - 同じクラスのKeikoちゃんに恋している
- Keiko
  - 日本の女子高校生
  - Ryoと同じくクラス

## 大まかな流れ
- scene-0001
  - Ryo: 通学中に挨拶
- scene-0002
  - Ryo: 公園で召喚の練習
- scene-0003
  - Ryo: 教室に到着し意気込みを語った後Keikoと軽く挨拶を交わす
  - Keiko: Ryoと軽く挨拶をして席に着く
- scene-0004
  - Ryo: 教室でバハムート召喚
- scene-0005
  - Keiko: Ryoをハリセンで叩き説教する
  - Ryo: Keikoに謝る

## ルール
- voiceのscriptは8秒間で最大でも200文字程度

## 出力形式
- ファイル形式: `.yaml`
- ファイル名: `scene-<4桁ゼロ埋めの連番>.yaml`

## 出力の例
```yaml
metadata:
  prompt_name: "High school students practicing summoning in the park"
  base_style: "Smart Phone selfie, YouTuber Style, photorealistic, 4K"
  aspect_ratio: "16:9"
  location_description: "A small park in the Japanese countryside"
  camera_setup: "A single, Shoot from a distance of about 2 meters with a camera fixed on a stand."
  key_elements:
    - "Ryo(High school student)"
  sub_elements:
  negative_prompts: ["no people", "no text overlays", "no distracting music"]
timeline:
  - sequence: 1
    timestamp: "00:00-00:03"
    action: "Ryo explaining to the camera."
    audio: "perfect lip sync. Quiet ambient sounds in the park."
    camera_work: "Fixed single camera"
    voice:
      - actor: "Ryo"
        language: "Japanese"
        script: "Gakkou ni iku mae ni, chotto shoukan no renshuu wo shimasu!"
        note: "Ryo seems to be enjoying himself."
  - sequence: 2
    timestamp: "00:03-00:06"
    action: "Ryo summons a small blue wolf. When he summons it, a magic circle appears around Ryo."
    audio: "perfect lip sync. The mysterious sound of magic."
    camera_work: "Fixed single camera"
    voice:
      - actor: "Ryo"
        language: "Japanese"
        script: "Ideyo!"
        note: "Ryo seems to be enjoying himself."
  - sequence: 3
    timestamp: "00:06-00:08"
    action: "A small blue wolf runs around. Ryo watches it with a smile and talk."
    audio: "perfect lip sync. Quiet ambient sounds in the park."
    camera_work: "Fixed single camera"
    voice:
      - actor: "Ryo"
        language: "Japanese"
        script: "Syoukan ni seikou shimashita."
        note: "Ryo seems to be enjoying himself."
```
