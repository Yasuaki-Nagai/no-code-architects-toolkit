// Fetch the list of species from the prompt generator
// const videos = $('image_prompt_generator').all().map(x => x.json.output.timeline);
const videos = $('image_prompt_generator').first()?.json?.output.timeline || [];

// Fetch the title, providing a default if it's not found.
const title = $('image_prompt_generator').first()?.json?.output.title || "Evolutionary Countdown";
// const font = "Oradano\-mincho\-GSRR"
const font =　"YDW aosagi"

// Sort from oldest to newest based on the 'existed' property
videos.sort((a, b) => Number(b.yearsAgo) - Number(a.yearsAgo));

let assContent = `[Script Info]
Title: ${title}
ScriptType: v4.00+
WrapStyle: 0
PlayResX: 576
PlayResY: 1024
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
// --- STYLES ---
// Title Style: Centered on the screen for the intro.
Style: TitleStyle,${font},70,&H009A8667,&H000000FF,&H00F6FDFF,&H33000000,-1,0,0,0,100,100,0,0,1,8,5,2,10,10,275,1
// Species Name (Top): Positioned towards the bottom-center.
Style: SpeciesStyle,${font},50,&H00FFFFFF,&H000000FF,&H00000000,&H33000000,-1,0,0,0,100,100,0,0,1,0,3,2,10,10,320,1
// Summary Text (Middle1): The subject summary.
Style: SummaryStyle,${font},35,&H00FFFFFF,&H000000FF,&H00000000,&H33000000,-1,0,0,0,100,100,1,0,1,0,2.5,2,10,10,265,1
// Time Text (Middl2): The main countdown clock.
Style: TimeStyle,${font},45,&H00FFFFFF,&H000000FF,&H00000000,&H33000000,-1,0,0,0,100,100,2,0,1,0,3,2,10,10,205,1
// Period Text (Bottom): The geological period for the species.
Style: PeriodStyle,${font},40,&H00FFFFFF,&H000000FF,&H00000000,&H33000000,-1,0,0,0,100,100,1,0,1,0,3,2,10,10,150,1




[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
`;

function formatAssTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const cs = Math.round((seconds - Math.floor(seconds)) * 100);
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
}

function getUnitAndScale(years) {
  if (years >= 100_000_000) {
    // 1億年以上は「億年」単位で表示
    return { scale: 100_000_000, unit: "億", precision: 1 }; // 小数点1桁まで
  }
  if (years >= 10_000) {
    // 1万年以上1億年未満は「万年」単位で表示
    return { scale: 10_000, unit: "万", precision: 0 }; // 整数
  }
  // 1万年未満はそのまま表示
  return { scale: 1, unit: "", precision: 0 }; // 整数
}

const segmentDuration = 5;
const speciesTransitionTime = 2; // Species transitions at 4 seconds instead of 5
const transitionDuration = 200;  // Duration of the fade effect in milliseconds
const fps = 30;
const timeStep = 1 / fps;

// ---------------- Title card ----------------
const titleStart = formatAssTime(0);
const titleEnd = formatAssTime(2);
const titleFadeEffect = `{\\fad(150, 150)\blur2}`; // Fade in for 0.6s, fade out for 1s
// assContent += `Dialogue: 2,${titleStart},${titleEnd},TitleStyle,,0,0,0,,${titleFadeEffect}${title}\n`;

// const combinedTitle = `{\\fs35}THE HISTORY OF\\N{\\fs70}${title}`;
// Style: SummaryStyle,${font},35,&H00FFFFFF,&H000000FF,&H00000000,&H33000000,-1,0,0,0,100,100,1,0,1,0,2.5,2,10,10,265,1
const combinedTitle = `{\\fs35\\c&H00FFFFFF&\\3c&H00000000&\\4c&H33000000&\\bord0\\shad2.5}THE HISTORY OF\\N{\\r}${title}`;
assContent += `Dialogue: 2,${titleStart},${titleEnd},TitleStyle,,0,0,0,,${titleFadeEffect}${combinedTitle}\n`;

// ---------------- Period grouping logic ----------------
if (videos.length > 0) {
  for (let i = 0; i < videos.length; i++) {
    const currentPeriod = videos[i].period;
    let endIndex = i;
    while (endIndex + 1 < videos.length && videos[endIndex + 1].period === currentPeriod) {
      endIndex++;
    }
    const startTime = formatAssTime(i * segmentDuration);
    const endTime = formatAssTime((endIndex * segmentDuration) + speciesTransitionTime);
    assContent += `Dialogue: 1,${startTime},${endTime},PeriodStyle,,0,0,0,,${currentPeriod}\n`;
    
    if (endIndex + 1 < videos.length) {
      const nextPeriod = videos[endIndex + 1].period;
      const nextPeriodStart = formatAssTime((endIndex * segmentDuration) + speciesTransitionTime);
      const nextPeriodEnd = formatAssTime((endIndex + 1) * segmentDuration);
      const nextPeriodEffect = `{\\fad(${transitionDuration}, 0)}`;
      assContent += `Dialogue: 1,${nextPeriodStart},${nextPeriodEnd},PeriodStyle,,0,0,0,,${nextPeriodEffect}${nextPeriod}\n`;
    }
    i = endIndex;
  }
}


// ---------------- Main loop ----------------
let currentTime = 0;

for (let i = 0; i < videos.length; i++) {
  const from = Math.max(0, currentTime - (speciesTransitionTime * 1.4));
  const to = from + segmentDuration;

  // Only show species and summary from the second element onwards.
  if (i > 0) {
    const prevFrom = currentTime - segmentDuration;
    const species = videos[i].name.ja;
    const summary = videos[i].summary;

    // The new species/summary starts fading in during the previous segment's transition.
    const speciesStart = formatAssTime(prevFrom + speciesTransitionTime);
    const speciesEnd = formatAssTime(currentTime + speciesTransitionTime);
    const speciesEffect = `{\\fad(${transitionDuration}, 200)}`;

    assContent += `Dialogue: 1,${speciesStart},${speciesEnd},SpeciesStyle,,0,0,0,,${speciesEffect}${species}\n`;
    assContent += `Dialogue: 1,${speciesStart},${speciesEnd},SummaryStyle,,0,0,0,,${speciesEffect}${summary}\n`;
  }

  const startAbsoluteYears = videos[i].yearsAgo;
  const endAbsoluteYears = (i < videos.length - 1) ? videos[i + 1].yearsAgo : startAbsoluteYears;

  // セグメント内の滞在時間と移行時間を定義
  const stayDuration = 4.0; // 4秒間はその時代の年代に留まる
  const transitionEffectDuration = segmentDuration - stayDuration; // 残り1秒で次の年代へ移行

  // 滞在フェーズで進む年代の割合（例：全体の10%だけ進める）
  const stayProgressRatio = 0.1;
  const stayYears = (startAbsoluteYears - endAbsoluteYears) * stayProgressRatio;
  const transitionYears = (startAbsoluteYears - endAbsoluteYears) * (1 - stayProgressRatio);

  const staySpeed = stayDuration > 0 ? stayYears / stayDuration : 0;
  const transitionSpeed = transitionEffectDuration > 0 ? transitionYears / transitionEffectDuration : 0;

  const totalSteps = segmentDuration * fps;

  const nextFrom = (i < videos.length - 1) 
    ? Math.max(0, (currentTime + segmentDuration) - (speciesTransitionTime * 1.4))
    : to;

  for (let j = 0; j < totalSteps; j++) {
    const stepTime = j * timeStep;
    const segmentFrom = from + stepTime;
    let segmentTo = segmentFrom + timeStep;

    if (segmentTo > nextFrom) {
      segmentTo = nextFrom;
    }

    // 0秒より前の字幕は描画しない
    if (segmentTo < 0) continue;

    if (j === totalSteps - 1) {
      segmentTo = nextFrom;
    }

    const eventStart = formatAssTime(Math.max(0, segmentFrom));
    const eventEnd = formatAssTime(segmentTo);

    let currentAbsoluteYears;
    if (stepTime < stayDuration) {
      // 滞在フェーズ：ゆっくり進む
      currentAbsoluteYears = startAbsoluteYears - stepTime * staySpeed;
    } else {
      // 移行フェーズ：速く進む
      const transitionTime = stepTime - stayDuration;
      currentAbsoluteYears = (startAbsoluteYears - stayYears) - transitionTime * transitionSpeed;
    }
    
    // --- 年数表示ロジック (getUnitAndScale) はそのまま ---
    const { scale, unit, precision } = getUnitAndScale(currentAbsoluteYears);
    
    let value;
    if (precision > 0) {
      // toFixedで小数点以下の桁数を指定
      value = (currentAbsoluteYears / scale).toFixed(precision);
    } else {
      // 整数に丸める
      value = Math.round(currentAbsoluteYears / scale);
    }

    // 0年になったらジャスト0を表示
    if (currentAbsoluteYears <= 0) {
      value = 0;
    }

    const yearString = "年前";
    const unitString = unit ? `${unit}` : "";
    const timeText = `${value}${unitString} ${yearString}`;
    assContent += `Dialogue: 0,${eventStart},${eventEnd},TimeStyle,,0,0,0,,${timeText}\n`;
  }

  // 次のセグメントの開始時間を更新
  currentTime += segmentDuration;
}

// return [{ content: assContent }];
return [{ content: assContent }];
