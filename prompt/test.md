# json type format

## scenario_generator
### input
```json
{
  "theme": "犬の 進化",
  "scale": "Cosmic / Geological",
  "type": "Species"
}
```

### output
```json
{
  "title": "人類の 進化",
  "timeline": [
    {
      "name": {
        "ja": "原始生命体",
        "en": "Primordial Life"
      },
      "summary": "約38億年前、地球の海に最初の単細胞生物が誕生しました。酸素のない海で、化学エネルギーを利用して生存していた生命の始まりです。",
      "period": "太古代",
      "yearsAgo": 3800000000,
      "calendarYear": -3799997975,
      "age": 0,
      "visual": "This is Primordial Life. Microscopic, single-celled organisms resembling simple bacteria or archaea, floating in a primordial ocean.",
      "evidence": [
        "https://ja.wikipedia.org/wiki/生命の起源"
      ]
    }
  ]
}
```

## image_prompt_generator
### input
scenario_generatorのoutput

### output
```json
{
  "timeline": [
    {
      "subjectId": 1,
      "imagePrompt": ""
    }
  ]
}
```

## image_generator
### input
image_prompt_generatorのoutput

### output
```json
{
  "timeline": [
    {
      "subjectId": 1,
      "imagePrompt": "",
      "imageUrl": ""
    }
  ]
}
```

## timeline_grouping
### input
image_generatorのoutput

### output
```json
{
  "timeline": [
    {
      "transitionId": 1,
      "from": {
        "subjectId": 1,
        "imagePrompt": "",
        "imageUrl": ""
      },
      "to": {
        "subjectId": 2,
        "imagePrompt": "",
        "imageUrl": ""
      }
    }
  ]
}
```

## transition_prompt_generator
### input
timeline_groupingのoutput

### output
```json
{
  "timeline": [
    {
      "transitionId": 1,
      "transitionPrompt": ""
    }
  ]
}
```

## transition_generator
### input
transition_prompt_generatorのoutput

### output
```json
{
  "timeline": [
    {
      "transitionId": 1,
      "transitionPrompt": "",
      "transitionUrl": ""
    }
  ]
}
```

## transition_concatenator
### input
transition_generatorのoutput

### output
```json
{
  "concatenatedVideoUrl": ""
}
```

## caption_applyer
### input
transition_concatenaterのoutput

### output
```json
{
  "finalVideoUrl": ""
}
```
