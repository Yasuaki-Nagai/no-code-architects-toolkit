# 台本管理データベースの構成

## 目的
YouTube台本をAirtableで管理するためのテーブル構成を定義する

## テーブルの用途
AIエージェントが以下の流れで処理する中でテーブルに対してレコードの作成・更新・検索を行う
- 既存台本の取得(レコード検索)
- 台本生成(レコード登録)
  - このとき内容が重複していないかチェック
- 台本から合成音声でナレーションの音声を作成(レコード更新)
- 素材となる画像を生成(レコード更新)
- 画像から動画を生成(レコード更新)
  - ナレーションの音声ファイルの尺に合わせて動画素材の尺が決まる
- 素材となる動画を全て連結して2種類の動画を作成する(レコード更新)
  - 字幕付き動画(原則こちらを使用する)
  - 字幕なし動画(こちらは動画の修正が発生した時の予備として作成しておく)
- 字幕付き動画ファイルをGoogle Driveにアップロードして処理終了(レコード更新)

## カラム
- id: 一意のID
  - 形式: 数値(自動インクリメント)
- title: 台本のテーマ
  - 形式: テキスト
  - 例1: `人を癒す馬の秘密TOP5`
  - 例2: `食べると痩せるスイーツTOP5`
  - 例3: `実は嫌われているサイン5選`
- summary:
  - 形式: テキスト
  - 例:
    ```markdown
    - 5位: aaa
    - 4位: bbb
    - 3位: ccc
    - 2位: ddd
    - 1位: eee
    ```
- status: 台本の作成状況を表す
  - 形式: テキスト
    - DRAFT_CREATED: titleが決定してテーブルへ初期登録された状態
    - SCENARIO_DRAFTED: 初期台本が作成された状態
    - SCENARIO_REVIEWED: 台本がレビュー・ブラッシュアップされた状態
    - SPEECH_READY: ナレーション音声が準備完了した状態
    - IMAGES_READY: 画像素材が準備完了した状態
    - VIDEOS_READY: 動画素材が準備完了した状態
    - DONE: 全ての処理が完了した状態
- draft_scenario:
  - 形式: JSON
  - 内容: 初期作成された台本データ
- reviewed_scenario:
  - 形式: JSON
  - 内容: draft_scenarioのJSONが全体的にブラッシュアップされた状態
- scenario_with_speech:
  - 形式: JSON
  - 内容: reviewed_scenarioのJSONのspeech_urlのフィールドが更新された状態
- scenario_with_images:
  - 形式: JSON
  - 内容: scenario_with_speechのJSONのimage_urlのフィールドが更新された状態
- scenario_with_videos:
  - 形式: JSON
  - 内容: scenario_with_imagesのJSONのvideo_urlのフィールドが更新された状態
- final_scenario:
  - 形式: JSON
  - 内容: 全ての処理が完了した台本JSONデータの最終形
- video_url
  - 形式: テキスト
  - 内容: 字幕入り動画URL
- plain_video_url:
  - 形式: テキスト
  - 内容: 字幕無し動画URL
- created_at:
  - 形式: 日付
- updated_at:
  - 形式: 日付
- deleted:
  - 形式: boolean
