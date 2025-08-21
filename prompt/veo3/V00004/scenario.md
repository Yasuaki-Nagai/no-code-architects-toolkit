# YouTube台本作成指示

## 役割
あなたはプロのYouTube作家であり、動画の台本を作成するAIエージェントです。

## 目的
私の指示に従って、後述する台本のテーマや流れに沿った台本を作成すること

## タイトル
F1カーvsティラノサウルス！バナナで大爆発してみた

## テーマ
元気なおばあちゃんYouTuberがF1レース中に突然現れた巨大ティラノサウルスとバナナで戦う超カオス企画

## キャラクター
- Grandma Asako (おばあちゃん)
  - 80歳のスーパー元気なおばあちゃんYouTuber
  - 超人的な運動能力を持つ
  - 負けず嫌いで挑戦精神旺盛
  - 関西弁で話す
  - チャンネル登録をよく呼びかける
  - なぜか巨大なバナナの皮を持っている
  - カオスな状況を楽しむ性格
  - ラーメンを食べると巨大化する特殊能力
- 巨大ティラノサウルス
  - 突然壁を破って現れる恐竜
  - F1カーを追いかける
  - 最終的にF1カーと激突して爆発に巻き込まれる
- ラーメン店の出前おじさん
  - 300km/hで並走できる超人的配達員
  - 熱々のラーメン丼を直接手で持って配達
  - おばあちゃんに直接ラーメン丼を手渡しする

## 大まかな流れ
- scene-0001
  - Grandma: F1カーと一緒に300km/hで走る、モーションブラーと風圧が激しい状況でチャンネル登録を呼びかける
- scene-0002
  - Grandma: レース中に横から壁を破壊しながら巨大なティラノサウルスが現れて追いかけてくる
  - Grandma: 「やばい！」と言った後、「くらえ！」と言って巨大なバナナの皮をF1カーに投げる
  - F1カー: バナナでスピンしてティラノサウルスと激突し大爆発
- scene-0003（最終シーン）
  - Grandma: 爆発によりF1カーが分裂、左右の分裂したF1カーが徐々に減速する中、300km/hで走り続ける
  - 横からラーメン店の出前おじさんが現れて、300km/hで並走しながらラーメンセットを手渡し
  - おばあちゃんがラーメンを食べて巨大化、ゴールゲートを突破
  - ゴール後、大勢の観客から大歓声、勝利宣言とチャンネル登録のお願い

## ルール
- timeline.timestamp
  - 合計の秒数はscenarioごとに8秒まで
- timeline.voice.script
  - 8秒間で最大でも200文字程度
  - 文節ごとにスペースで区切られたアルファベットのローマ字にする
  - `よ`, `よう`, `よお`を表現するときは`yoh`と記述(`yo`, `you`は禁止)
    - このルールは子音にも適用される(例: `きょう`なら`kyoh`)
  - `どう`, `どお`を表現するときは`doh`と記述(`dou`, は禁止)

## 出力形式
- ファイル形式: `.yaml`
- ファイル名: `scene-<4桁ゼロ埋めの連番>.yaml`

## 出力の例
```yaml
metadata:
  prompt_name: "Grandma running alongside F1 car at high speed"
  base_style: "Action camera, high-speed footage, photorealistic, 4K, motion blur"
  aspect_ratio: "16:9"
  location_description: "Professional racing circuit with F1 car"
  camera_setup: "High-speed tracking camera following the action"
  key_elements:
    - "Grandma Asako (80-year-old energetic grandmother)"
    - "F1 racing car"
  sub_elements:
    - "Intense motion blur"
    - "High-speed wind effects"
    - "Racing circuit background"
  negative_prompts: ["static scene", "slow motion", "no motion blur"]
timeline:
  - sequence: 1
    timestamp: "00:00-00:04"
    action: "Grandma running alongside F1 car at 300 km/h with intense motion blur."
    audio: "perfect lip sync. F1 engine roaring, wind rushing sounds."
    camera_work: "High-speed tracking shot"
    voice:
      - actor: "Grandma Asako"
        language: "Japanese"
        script: "Efu wan kaa toh kyohsou shitemasu! Minasan!"
        note: "Grandma is running at incredible speed with motion blur."
  - sequence: 2
    timestamp: "00:04-00:08"
    action: "Grandma continues running with extreme motion, arms and legs moving 16 times per second."
    audio: "perfect lip sync. Intense wind and engine sounds."
    camera_work: "High-speed tracking shot"
    voice:
      - actor: "Grandma Asako"
        language: "Japanese"
        script: "Watashi ga kattara iine toh channeru touroku onegaishimasu!"
        note: "Grandma maintains incredible speed while speaking."
```
