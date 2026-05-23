// ──────────────────────── DATA ────────────────────────

const moodMap = [
  { min: 0,  max: 10, emoji: '😭', label: '心如刀割' },
  { min: 11, max: 20, emoji: '😢', label: '愁云惨淡' },
  { min: 21, max: 30, emoji: '😔', label: '郁郁寡欢' },
  { min: 31, max: 40, emoji: '😕', label: '惘然若失' },
  { min: 41, max: 50, emoji: '😐', label: '平淡如水' },
  { min: 51, max: 60, emoji: '🙂', label: '安然自得' },
  { min: 61, max: 70, emoji: '😊', label: '欣然自喜' },
  { min: 71, max: 80, emoji: '😄', label: '心旷神怡' },
  { min: 81, max: 90, emoji: '🤩', label: '春风得意' },
  { min: 91, max:100, emoji: '🥳', label: '欣喜若狂' },
];

function getMoodInfo(score) {
  return moodMap.find(m => score >= m.min && score <= m.max) || moodMap[4];
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ──────────────────────── QUOTES ────────────────────────

const quotesLow = [
  { text: '回首向来萧瑟处，归去，也无风雨也无晴。', author: '苏轼《定风波》' },
  { text: '山重水复疑无路，柳暗花明又一村。', author: '陆游《游山西村》' },
  { text: '冬天来了，春天还会远吗？', author: '雪莱《西风颂》' },
  { text: '往者不可谏，来者犹可追。', author: '《论语·微子》' },
  { text: '人生如逆旅，我亦是行人。', author: '苏轼《临江仙》' },
  { text: '世界以痛吻我，要我报之以歌。', author: '泰戈尔《飞鸟集》' },
  { text: '凡是过往，皆为序章。', author: '莎士比亚《暴风雨》' },
  { text: '行到水穷处，坐看云起时。', author: '王维《终南别业》' },
  { text: '人生如茶，不会苦一辈子，但总会苦一阵子。', author: '林清玄' },
  { text: '每一个不曾起舞的日子，都是对生命的辜负。', author: '尼采' },
];

const quotesMid = [
  { text: '从前的日色变得慢，车，马，邮件都慢。', author: '木心《从前慢》' },
  { text: '人生到处知何似，应似飞鸿踏雪泥。', author: '苏轼《和子由渑池怀旧》' },
  { text: '此心安处是吾乡。', author: '苏轼《定风波》' },
  { text: '采菊东篱下，悠然见南山。', author: '陶渊明《饮酒》' },
  { text: '人生天地间，忽如远行客。', author: '《古诗十九首》' },
  { text: '我们读诗写诗，并非因为它们好玩，而是因为我们是人类的一分子。', author: '《死亡诗社》' },
  { text: '万物皆有裂痕，那是光照进来的地方。', author: '莱昂纳德·科恩' },
  { text: '活着，就是最大的奇迹。', author: '余华' },
];

const quotesHigh = [
  { text: '长风破浪会有时，直挂云帆济沧海。', author: '李白《行路难》' },
  { text: '会当凌绝顶，一览众山小。', author: '杜甫《望岳》' },
  { text: '你是爱，是暖，是希望，你是人间的四月天。', author: '林徽因' },
  { text: '面朝大海，春暖花开。', author: '海子' },
  { text: '且将新火试新茶，诗酒趁年华。', author: '苏轼《望江南》' },
  { text: '春风得意马蹄疾，一日看尽长安花。', author: '孟郊《登科后》' },
  { text: '人生得意须尽欢，莫使金樽空对月。', author: '李白《将进酒》' },
  { text: '生活在别处。', author: '米兰·昆德拉' },
  { text: '有三样东西有助于缓解生命的辛劳：希望、睡眠和微笑。', author: '康德' },
  { text: '真正的快乐是内在的，它只有在人类的心灵里才能发现。', author: '布雷默' },
];

function getQuote(score) {
  let pool;
  if (score <= 35) pool = quotesLow;
  else if (score <= 65) pool = quotesMid;
  else pool = quotesHigh;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ──────────────────────── FAMOUS WORLD SCENERY ────────────────────────

const famousScenes = {
  low: [
    { kw: 'Mount-Fuji-mist',        scene: '富士山·初雪',      credit: '富士山' },
    { kw: 'Scottish-Highlands',      scene: '苏格兰·高地',      credit: '苏格兰高地' },
    { kw: 'Iceland-glacier-lagoon',  scene: '冰岛·冰河湖',      credit: '冰岛' },
    { kw: 'Norway-fjord',            scene: '挪威·峡湾',        credit: '挪威峡湾' },
    { kw: 'Moraine-Lake-Canada',     scene: '梦莲湖·晨雾',      credit: '落基山脉' },
    { kw: 'Lake-Bled-Slovenia',      scene: '布莱德湖·晨曦',    credit: '布莱德湖' },
    { kw: 'Dolomites-Italy',         scene: '多洛米蒂·云海',    credit: '多洛米蒂' },
    { kw: 'Faroe-Islands-landscape', scene: '法罗群岛·天涯',    credit: '法罗群岛' },
    { kw: 'Lofoten-Norway',          scene: '罗弗敦·极夜',      credit: '罗弗敦群岛' },
    { kw: 'Glencoe-Scotland',        scene: '格伦科·山谷',      credit: '苏格兰格伦科' },
    { kw: 'Plitvice-Lakes-Croatia',  scene: '十六湖·秋色',      credit: '普利特维采' },
    { kw: 'Milford-Sound-NZ',        scene: '米尔福德·雨雾',    credit: '新西兰峡湾' },
    { kw: 'Isle-of-Skye-Scotland',   scene: '天空岛·海风',      credit: '天空岛' },
    { kw: 'Kamikochi-Japan',         scene: '上高地·静寂',      credit: '日本阿尔卑斯' },
  ],
  mid: [
    { kw: 'Swiss-Alps-mountain',     scene: '阿尔卑斯·雪峰',    credit: '阿尔卑斯' },
    { kw: 'Tuscany-Italy-landscape', scene: '托斯卡纳·原野',    credit: '托斯卡纳' },
    { kw: 'Kyoto-bamboo-forest',     scene: '京都·竹林',        credit: '京都' },
    { kw: 'Cinque-Terre-Italy',      scene: '五渔村·海岸',      credit: '五渔村' },
    { kw: 'Banff-National-Park',     scene: '班夫·山湖',        credit: '班夫国家公园' },
    { kw: 'New-Zealand-landscape',   scene: '新西兰·中土',      credit: '新西兰' },
    { kw: 'Lake-Como-Italy',         scene: '科莫湖·山色',      credit: '科莫湖' },
    { kw: 'Yosemite-Valley',         scene: '优胜美地·山谷',    credit: '优胜美地' },
    { kw: 'Hallstatt-Austria',       scene: '哈尔施塔特·湖畔',  credit: '哈尔施塔特' },
    { kw: 'Cotswolds-England',       scene: '科茨沃尔德·田园',  credit: '英格兰乡村' },
    { kw: 'Mount-Cook-New-Zealand',  scene: '库克山·冰川',      credit: '库克山' },
    { kw: 'Bali-rice-terraces',      scene: '巴厘岛·梯田',      credit: '巴厘岛' },
    { kw: 'Lake-Tahoe-USA',          scene: '太浩湖·碧波',      credit: '太浩湖' },
    { kw: 'Great-Ocean-Road-Australia', scene: '大洋路·海岸',   credit: '大洋路' },
  ],
  high: [
    { kw: 'Cherry-blossom-Kyoto',    scene: '京都·樱花',        credit: '京都' },
    { kw: 'Aurora-Borealis-sky',     scene: '北极·极光',        credit: '北极圈' },
    { kw: 'Amalfi-Coast-Italy',      scene: '阿马尔菲·海岸',    credit: '阿马尔菲' },
    { kw: 'Provence-lavender',       scene: '普罗旺斯·花海',    credit: '普罗旺斯' },
    { kw: 'Santorini-sunset-Greece', scene: '圣托里尼·日落',    credit: '圣托里尼' },
    { kw: 'Maldives-beach-ocean',    scene: '马尔代夫·碧海',    credit: '马尔代夫' },
    { kw: 'Grand-Canyon-sunset',     scene: '大峡谷·霞光',      credit: '大峡谷' },
    { kw: 'Keukenhof-tulips-Netherlands', scene: '荷兰·郁金香', credit: '荷兰' },
    { kw: 'Cappadocia-balloons',     scene: '卡帕多奇亚·热气球', credit: '卡帕多奇亚' },
    { kw: 'Antelope-Canyon-USA',     scene: '羚羊谷·光影',      credit: '羚羊谷' },
    { kw: 'Bora-Bora-island',        scene: '波拉波拉·泻湖',    credit: '波拉波拉岛' },
    { kw: 'Salar-de-Uyuni-Bolivia',  scene: '天空之镜·盐湖',    credit: '乌尤尼盐沼' },
    { kw: 'Zhangjiajie-China',       scene: '张家界·峰林',      credit: '张家界' },
    { kw: 'Iguazu-Falls',            scene: '伊瓜苏·瀑布',      credit: '伊瓜苏瀑布' },
    { kw: 'Pamukkale-Turkey',        scene: '棉花堡·云池',      credit: '棉花堡' },
    { kw: 'Phi-Phi-Islands-Thailand',scene: '皮皮岛·碧湾',      credit: '皮皮岛' },
  ],
};

// Literary prefixes for the image credit
const creditPrefixes = ['掠影', '浮光', '映画', '此景'];

function getLandscapeUrl(score) {
  let cat;
  if (score <= 35) cat = 'low';
  else if (score <= 65) cat = 'mid';
  else cat = 'high';
  const scenes = famousScenes[cat];
  const entry = scenes[Math.floor(Math.random() * scenes.length)];
  const seed = Date.now() + Math.random();
  return {
    url: `https://loremflickr.com/1920/1080/${entry.kw}?random=${seed}`,
    scene: entry.scene,
    credit: entry.credit,
    category: cat,
  };
}

function getCreditText(locationName) {
  const prefix = creditPrefixes[Math.floor(Math.random() * creditPrefixes.length)];
  return `${prefix} · ${locationName}`;
}

// ──────────────────────── STATE ────────────────────────

function loadData() {
  const raw = localStorage.getItem('moodTrackerData');
  return raw ? JSON.parse(raw) : { moods: [], settings: { minInterval: 90, maxInterval: 240, maxDaily: 5 } };
}
function saveData(data) { localStorage.setItem('moodTrackerData', JSON.stringify(data)); }

let appData = loadData();
let moodModalOpen = false;
let nextPopupTime = null;
let hasBgImage = false;

// ──────────────────────── DOM REFS ────────────────────────

const bgLayer    = document.getElementById('bgLayer');
const bgVignette = document.getElementById('bgVignette');
const filmGrain  = document.getElementById('filmGrain');
const bgCredit   = document.getElementById('bgCredit');
const creditText = document.getElementById('creditText');
const orbs       = [document.getElementById('orbA'), document.getElementById('orbB'), document.getElementById('orbC')];

// ──────────────────────── BACKGROUND ────────────────────────

function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload  = () => resolve(url);
    img.onerror = () => reject(new Error('load fail'));
    img.src = url;
  });
}

async function setBackground(landscape, creditLabel) {
  if (!landscape || !landscape.url) return;

  orbs.forEach(o => o.classList.add('fading'));

  try {
    await preloadImage(landscape.url);
    bgLayer.style.backgroundImage = `url(${landscape.url})`;
    bgLayer.classList.add('loaded');
    bgVignette.classList.add('active');
    filmGrain.classList.add('active');

    // Show literary credit watermark
    if (creditLabel) {
      creditText.textContent = creditLabel;
      bgCredit.classList.add('visible');
    }

    hasBgImage = true;
  } catch (e) {
    orbs.forEach(o => o.classList.remove('fading'));
    bgVignette.classList.remove('active');
    filmGrain.classList.remove('active');
    bgCredit.classList.remove('visible');
    hasBgImage = false;
  }
}

// ──────────────────────── PARALLAX + DRIFT ────────────────────────

let targetPX = 0, targetPY = 0;
let currentPX = 0, currentPY = 0;
let driftPhase = 0;

document.addEventListener('mousemove', (e) => {
  targetPX = (e.clientX / window.innerWidth - 0.5) * 30;
  targetPY = (e.clientY / window.innerHeight - 0.5) * 30;
});

document.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  targetPX = (t.clientX / window.innerWidth - 0.5) * 30;
  targetPY = (t.clientY / window.innerHeight - 0.5) * 30;
}, { passive: true });

function animateBg() {
  currentPX += (targetPX - currentPX) * 0.035;
  currentPY += (targetPY - currentPY) * 0.035;

  driftPhase += 0.00035;
  const driftX = Math.sin(driftPhase * 1.2) * 12;
  const driftY = Math.cos(driftPhase * 0.8) * 10;

  if (hasBgImage) {
    bgLayer.style.transform = `translate(${currentPX + driftX}px, ${currentPY + driftY}px) scale(1.07)`;
  }
  requestAnimationFrame(animateBg);
}
animateBg();

// ──────────────────────── CLICK RIPPLE ────────────────────────

document.addEventListener('click', (e) => {
  if (e.target.closest('button, input, select')) return;
  const r = document.createElement('div');
  r.className = 'ripple';
  r.style.left = e.clientX + 'px';
  r.style.top  = e.clientY + 'px';
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 1300);
});

// ──────────────────────── MODAL ────────────────────────

const notePrompts = [
  '今天有什么想说的？开心的、烦心的，哪怕只是"外卖凉了"这种小事...',
  '此刻脑子里飘过什么？写一个字也行，写一万字也行 ✎',
  '给未来的自己留句话？或者吐槽一下今天的天气 ☁',
  '不需要金句，你的碎碎念就足够珍贵',
  '今天的小确幸是什么？还是小确丧？说来听听 ☕',
  '随便写，反正这个日记本只有你能翻开',
  '如果此刻有个人能听到你，你最想说什么？',
  '记录一件今天的小事，十年后再回来看会笑的那种',
  '写一句只有你自己才懂的话',
  '如果可以给今天的心情起个名字，会叫什么？',
];

function showMoodModal() {
  document.getElementById('moodModal').classList.remove('hidden');
  moodModalOpen = true;

  // Reset and set random placeholder
  const noteEl = document.getElementById('moodNote');
  noteEl.value = '';
  noteEl.placeholder = notePrompts[Math.floor(Math.random() * notePrompts.length)];

  const hintEl = document.getElementById('noteHint');
  hintEl.textContent = '';
  hintEl.classList.remove('warning');

  updateMoodDisplay();
}

function updateNoteHint() {
  const len = document.getElementById('moodNote').value.length;
  const hintEl = document.getElementById('noteHint');
  if (len > 0) {
    hintEl.textContent = `${len}/500`;
    hintEl.classList.toggle('warning', len > 450);
  } else {
    hintEl.textContent = '';
    hintEl.classList.remove('warning');
  }
}

function closeMoodModal() {
  document.getElementById('moodModal').classList.add('hidden');
  moodModalOpen = false;
  scheduleNextPopup();
}

function updateMoodDisplay() {
  const score = parseInt(document.getElementById('moodSlider').value);
  const info = getMoodInfo(score);
  document.getElementById('moodEmoji').textContent = info.emoji;
  document.getElementById('moodLabel').textContent = info.label;
  document.getElementById('moodScore').textContent = score;
}

async function submitMood() {
  const score = parseInt(document.getElementById('moodSlider').value);
  const info  = getMoodInfo(score);
  const quote = getQuote(score);
  const land  = getLandscapeUrl(score);
  const credit = getCreditText(land.credit);
  const note  = document.getElementById('moodNote').value.trim();

  appData.moods.unshift({
    timestamp: new Date().toISOString(),
    score,
    emoji: info.emoji,
    label: info.label,
    quote: quote.text,
    quoteAuthor: quote.author,
    note: note || null,
    landscapeUrl: land.url,
    landscapeScene: land.scene,
    landscapeCredit: credit,
  });
  saveData(appData);

  // ── Close modal immediately — instant feedback ──
  document.getElementById('moodModal').classList.add('hidden');
  moodModalOpen = false;

  if (score >= 80) spawnConfetti();
  if (score <= 20) spawnComfort();

  // ── Show quote card right away with loading animation ──
  showLatestQuote(land.scene, credit, quote, true, note);

  // ── Load background image in background, no blocking ──
  loadBackgroundAsync(land, credit);

  scheduleNextPopup();
  renderAll();
  showToast(`已记录：${score}分 · ${info.label}`);

  // After 3 moods, suggest installing the app
  if (appData.moods.length === 3 && deferredPrompt) {
    setTimeout(() => showInstallBanner(), 1000);
  }
}

function showLatestQuote(scene, credit, quote, loading, note) {
  const card = document.getElementById('latestQuote');
  card.classList.remove('hidden');

  if (loading) {
    card.classList.add('loading');
    document.getElementById('sceneTag').innerHTML =
      `<span>画境 · ${scene.replace('·', '')}</span>` +
      `<span class="load-dot">·</span><span class="load-dot">·</span><span class="load-dot">·</span>`;
  } else {
    card.classList.remove('loading');
    document.getElementById('sceneTag').textContent = `画境 · ${scene.replace('·', '')}`;
  }

  document.getElementById('quoteText').textContent = `「${quote.text}」`;
  document.getElementById('quoteAuthor').textContent = `—— ${quote.author}`;

  const noteEl = document.getElementById('quoteNote');
  if (note) {
    noteEl.textContent = note;
    noteEl.classList.remove('hidden');
  } else {
    noteEl.classList.add('hidden');
  }

  document.getElementById('quoteSource').textContent = credit;
}

async function loadBackgroundAsync(land, credit) {
  try {
    await preloadImage(land.url);
  } catch (e) { /* image failed, keep default background */ }

  bgLayer.style.backgroundImage = `url(${land.url})`;
  bgLayer.classList.add('loaded');
  bgVignette.classList.add('active');
  filmGrain.classList.add('active');

  creditText.textContent = credit;
  bgCredit.classList.add('visible');

  orbs.forEach(o => o.classList.add('fading'));
  hasBgImage = true;

  // Remove loading animation from quote card
  const card = document.getElementById('latestQuote');
  card.classList.remove('loading');
  document.getElementById('sceneTag').textContent =
    `画境 · ${land.scene.replace('·', '')}`;
}

// ──────────────────────── EFFECTS ────────────────────────

function spawnConfetti() {
  const emojis = ['🎉','✨','🌟','💫','🎊','💖','🌸','🦋'];
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 100 + '%';
      el.style.top = -(Math.random() * 40) + 'px';
      el.style.animationDuration = (1 + Math.random() * 2) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3000);
    }, i * 80);
  }
}

function spawnComfort() {
  const el = document.createElement('div');
  el.className = 'confetti';
  el.textContent = '🫂';
  el.style.left = '50%';
  el.style.top = '20%';
  el.style.fontSize = '48px';
  el.style.animationDuration = '3s';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

function showToast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

// ──────────────────────── POPUP ────────────────────────

function scheduleNextPopup() {
  const s = appData.settings;
  const minMs = (s.minInterval || 90) * 60 * 1000;
  const maxMs = (s.maxInterval || 240) * 60 * 1000;
  const delay  = minMs + Math.random() * (maxMs - minMs);

  const today = new Date().toDateString();
  const todayCount = appData.moods.filter(m => new Date(m.timestamp).toDateString() === today).length;
  if (todayCount >= s.maxDaily) { nextPopupTime = null; return; }

  nextPopupTime = Date.now() + delay;
}

function checkPopup() {
  if (moodModalOpen || !nextPopupTime) return;
  if (Date.now() >= nextPopupTime) {
    if (Notification.permission === 'default') Notification.requestPermission();
    showMoodModal();
    if (Notification.permission === 'granted') {
      new Notification('浮生日记', {
        body: '此刻心情如何？花几秒钟记录一下吧 ✨',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌸</text></svg>'
      });
    }
  }
}
setInterval(checkPopup, 30000);

// ──────────────────────── MOOD INSIGHTS ────────────────────────

function generateInsight() {
  if (appData.moods.length < 2) return null;

  const now = new Date();
  const moods = appData.moods;
  const todayStr = now.toDateString();
  const yesterdayStr = new Date(now - 86400000).toDateString();

  const todayMoods = moods.filter(m => new Date(m.timestamp).toDateString() === todayStr);
  const yesterdayMoods = moods.filter(m => new Date(m.timestamp).toDateString() === yesterdayStr);

  const weekMoods = moods.filter(m => {
    const diff = (now - new Date(m.timestamp)) / 86400000;
    return diff <= 7;
  });

  // Streak
  let streak = 0;
  const check = new Date(now);
  for (let i = 0; i < 365; i++) {
    const ds = check.toDateString();
    if (moods.some(m => new Date(m.timestamp).toDateString() === ds)) {
      streak++;
      check.setDate(check.getDate() - 1);
    } else { break; }
  }

  // Weekly analysis
  if (weekMoods.length >= 5) {
    const byDay = {};
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() - (6 - i));
      const ds = d.toDateString();
      const dayMoods = weekMoods.filter(m => new Date(m.timestamp).toDateString() === ds);
      if (dayMoods.length > 0) {
        byDay[ds] = Math.round(dayMoods.reduce((s, m) => s + m.score, 0) / dayMoods.length);
      }
    }
    const dayKeys = Object.keys(byDay).sort();
    if (dayKeys.length >= 4) {
      const vals = dayKeys.map(k => byDay[k]);
      const firstHalf = vals.slice(0, Math.floor(vals.length / 2));
      const secondHalf = vals.slice(Math.floor(vals.length / 2));
      const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
      const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
      const diff = Math.round(secondAvg - firstAvg);

      const dowMap = {};
      weekMoods.forEach(m => {
        const dow = new Date(m.timestamp).getDay();
        if (!dowMap[dow]) dowMap[dow] = [];
        dowMap[dow].push(m.score);
      });
      let bestDow = -1, worstDow = -1, bestAvg = 0, worstAvg = 100;
      Object.entries(dowMap).forEach(([dow, scores]) => {
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        if (avg > bestAvg) { bestAvg = avg; bestDow = parseInt(dow); }
        if (avg < worstAvg) { worstAvg = avg; worstDow = parseInt(dow); }
      });
      const dowNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

      const lastWeekMoods = moods.filter(m => {
        const diffDays = (now - new Date(m.timestamp)) / 86400000;
        return diffDays > 7 && diffDays <= 14;
      });
      const weekAvg = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
      const lastWeekAvg = lastWeekMoods.length > 0
        ? Math.round(lastWeekMoods.reduce((s, m) => s + m.score, 0) / lastWeekMoods.length)
        : null;

      const compareText = lastWeekAvg !== null
        ? (weekAvg > lastWeekAvg
          ? `相比上周，整体情绪提升了 ${weekAvg - lastWeekAvg} 分。你在慢慢好起来。`
          : weekAvg < lastWeekAvg
          ? `相比上周有些回落，但情绪的起伏本就是生活的一部分，不必苛责自己。`
          : '和上周的状态相差不大，你在保持自己的节奏。')
        : '';

      if (diff > 8) {
        return {
          text: `这周你的情绪呈现出一个向上的弧线，后半周比前半周高了 ${diff} 分。${dowNames[bestDow]} 是你这一周最舒展的时刻，而 ${dowNames[worstDow]} 则显得沉重一些。${compareText}无论高低，每一种感受都值得被认真对待。`,
        };
      } else if (diff < -8) {
        return {
          text: `这一周对你来说也许有些辛苦。情绪在后半周回落了 ${Math.abs(diff)} 分，${dowNames[worstDow]} 似乎是最难熬的一天。${compareText}想提醒你的是，低谷并不代表后退，它只是情绪曲线中自然的一部分。你可以允许自己慢下来。`,
        };
      } else {
        return {
          text: `这一周你的情绪像一条安静的河流，没有太大波动。${dowNames[bestDow]} 是最让你感到轻盈的一天，${dowNames[worstDow]} 则稍显沉闷。${compareText}稳定本身，就是一种很好的状态。`,
        };
      }
    }
  }

  // Today vs yesterday
  if (todayMoods.length > 0 && yesterdayMoods.length > 0) {
    const todayAvg = Math.round(todayMoods.reduce((s, m) => s + m.score, 0) / todayMoods.length);
    const yesterdayAvg = Math.round(yesterdayMoods.reduce((s, m) => s + m.score, 0) / yesterdayMoods.length);
    const diff = todayAvg - yesterdayAvg;
    if (diff >= 15) return { text: `今天的心情比昨天明亮了不少，提升了 ${diff} 分。如果你愿意，可以想一想是什么让你感到了这种变化——记住它，它或许是你内心真正在意的东西。` };
    if (diff >= 5)  return { text: `今天比昨天稍微好一些，虽然只是小小的变化，但值得被注意到。生活往往就是由这样一点一滴的改善组成的。` };
    if (diff <= -15) return { text: `今天比昨天低落了 ${Math.abs(diff)} 分。情绪的潮汐有涨有落，此刻的低潮并不意味着什么。允许自己不开心，也是一种对自己的善待。` };
    if (diff <= -5)  return { text: `今天的心情比昨天沉了一些。也许只是天气，也许是一件小事——但没关系，你不需要每一天都保持高昂。` };
    return { text: '今天和昨天的心情几乎一样。某种程度上，平稳也是一种难得的幸运。你在保持自己的节奏，这本身就值得肯定。' };
  }

  if (streak >= 5) {
    return { text: `你在连续 ${streak} 天里，每天都停下来感受自己的情绪。这份对自己的关注和耐心，不是每个人都能做到的。你已经在照顾自己了。` };
  }
  if (streak >= 3) {
    return { text: `已经连续 ${streak} 天记录心情了。每一条记录都是在对自己说：「我在乎你的感受。」这个习惯的建立，本身就是一种成长。` };
  }

  return { text: '数据还不多，但没关系。每一天的记录，都是在慢慢拼出你内心真实的样子。继续就好。' };
}

function renderInsight() {
  const card = document.getElementById('insightCard');
  const insight = generateInsight();
  if (insight) {
    card.classList.remove('hidden');
    document.getElementById('insightEmoji').textContent = '';
    document.getElementById('insightText').textContent = insight.text;
  } else {
    card.classList.add('hidden');
  }
}

// ──────────────────────── RENDER ────────────────────────

function renderAll() {
  renderToday();
  renderInsight();
  renderWeekChart();
  renderHistory();
  renderLatestQuoteFromHistory();
}

function renderToday() {
  const today = new Date().toDateString();
  const todayMoods = appData.moods.filter(m => new Date(m.timestamp).toDateString() === today);
  const noEntry = document.getElementById('noEntry');
  const summary = document.getElementById('todaySummary');

  if (todayMoods.length === 0) {
    noEntry.classList.remove('hidden');
    summary.classList.add('hidden');
  } else {
    noEntry.classList.add('hidden');
    summary.classList.remove('hidden');
    const avg = Math.round(todayMoods.reduce((s, m) => s + m.score, 0) / todayMoods.length);
    const info = getMoodInfo(avg);
    document.getElementById('todayEmoji').textContent = info.emoji;
    document.getElementById('todayAvg').textContent = `均分 ${avg}`;
    document.getElementById('todayEntries').textContent = `今日已记录 ${todayMoods.length} 次`;
  }
}

function getScoreColor(score) {
  if (score <= 20) return '#9db8e0';
  if (score <= 40) return '#b8c0e0';
  if (score <= 60) return '#cbb8d0';
  if (score <= 80) return '#e0a898';
  return '#f0c050';
}

function renderWeekChart() {
  const container = document.getElementById('weekChart');
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const ds = d.toDateString();
    const dayMoods = appData.moods.filter(m => new Date(m.timestamp).toDateString() === ds);
    const avg = dayMoods.length > 0 ? Math.round(dayMoods.reduce((s, m) => s + m.score, 0) / dayMoods.length) : null;
    days.push({ label: ['日','一','二','三','四','五','六'][d.getDay()], avg, count: dayMoods.length });
  }
  container.innerHTML = days.map(d => {
    const h = d.avg !== null ? Math.max(8, d.avg * 0.85) : 4;
    const color = d.avg !== null ? getScoreColor(d.avg) : '#e8e2d8';
    const tooltip = d.avg !== null ? `${d.avg}分 · ${d.count}次` : '无记录';
    return `<div class="chart-bar" style="height:${h}%;background:${color}"><div class="tooltip">${tooltip}</div></div>`;
  }).join('') + `<div style="display:flex;gap:2px;padding:0;margin-top:4px;position:absolute;bottom:-18px;left:6px;right:6px">${
    days.map(d => `<span style="flex:1;text-align:center;font-size:10px;color:var(--text-dim)">${d.label}</span>`).join('')
  }</div>`;
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (appData.moods.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:30px;color:var(--text-dim);font-size:14px">还没有记录，点击上方按钮开始吧 🌸</div>';
    return;
  }
  list.innerHTML = appData.moods.slice(0, 50).map((m, i) => {
    const d = new Date(m.timestamp);
    const timeStr = d.toLocaleDateString('zh-CN') + ' ' + d.toLocaleTimeString('zh-CN', { hour:'2-digit', minute:'2-digit' });
    return `<div class="history-item">
      <div class="hi-emoji">${m.emoji}</div>
      <div class="hi-info">
        <div class="hi-score">${m.score}分 · ${m.label}</div>
        <div class="hi-time">${timeStr}</div>
        ${m.quote ? `<div class="hi-quote">「${m.quote}」</div>` : ''}
        ${m.note ? `<div class="hi-note">${escapeHTML(m.note)}</div>` : ''}
      </div>
      <button class="delete-btn" onclick="deleteMood(${i})" title="删除">✕</button>
    </div>`;
  }).join('');
}

function renderLatestQuoteFromHistory() {
  const today = new Date().toDateString();
  const latestToday = appData.moods.find(m => new Date(m.timestamp).toDateString() === today);
  if (latestToday && latestToday.quote) {
    showLatestQuote(
      latestToday.landscapeScene || '',
      latestToday.landscapeCredit || '',
      { text: latestToday.quote, author: latestToday.quoteAuthor },
      false,
      latestToday.note || null
    );
    if (latestToday.landscapeUrl) {
      setBackground({ url: latestToday.landscapeUrl }, latestToday.landscapeCredit);
    }
  }
}

function deleteMood(index) {
  if (confirm('确定要删除这条记录吗？')) {
    appData.moods.splice(index, 1);
    saveData(appData);
    renderAll();
    showToast('已删除');
  }
}

// ──────────────────────── SETTINGS ────────────────────────

function toggleSettings() { document.getElementById('settingsPanel').classList.toggle('hidden'); }

function saveSettings() {
  appData.settings.minInterval = parseInt(document.getElementById('minInterval').value) || 90;
  appData.settings.maxInterval = parseInt(document.getElementById('maxInterval').value) || 240;
  appData.settings.maxDaily    = parseInt(document.getElementById('maxDaily').value) || 5;
  saveData(appData);
  scheduleNextPopup();
  document.getElementById('settingsPanel').classList.add('hidden');
  showToast('设置已保存');
}

function exportData() {
  const json = JSON.stringify(appData, null, 2);
  const blob = new Blob([json], { type:'application/json' });
  const url  = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mood-data-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('数据已导出');
}

// ──────────────────────── INIT ────────────────────────

function loadSettingsUI() {
  document.getElementById('minInterval').value = appData.settings.minInterval || 90;
  document.getElementById('maxInterval').value = appData.settings.maxInterval || 240;
  document.getElementById('maxDaily').value    = appData.settings.maxDaily || 5;
}

scheduleNextPopup();

if ('Notification' in window && Notification.permission === 'default') {
  setTimeout(() => { if (appData.moods.length > 0) Notification.requestPermission(); }, 5000);
}

document.addEventListener('keydown', e => {
  if (e.key === 'r' && !moodModalOpen && document.activeElement === document.body) showMoodModal();
});

loadSettingsUI();
renderAll();

(function restoreBg() {
  if (appData.moods.length > 0 && appData.moods[0].landscapeUrl) {
    setBackground(
      { url: appData.moods[0].landscapeUrl },
      appData.moods[0].landscapeCredit
    );
  }
})();

if (appData.moods.length === 0) {
  setTimeout(() => showToast('按 R 键或点击按钮开始记录心情'), 1000);
}

// ──────────────────────── PWA ────────────────────────

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// Install prompt
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Show install banner after user has 3+ records
  if (appData.moods.length >= 3) showInstallBanner();
});

function showInstallBanner() {
  if (document.getElementById('installBanner')) return;
  if (window.matchMedia('(display-mode: standalone)').matches) return;

  const banner = document.createElement('div');
  banner.id = 'installBanner';
  banner.className = 'install-banner';
  banner.innerHTML = `
    <span class="ib-text">添加到主屏幕，随时记录</span>
    <button class="ib-btn">安装</button>
    <button class="ib-close">✕</button>
  `;
  document.body.appendChild(banner);

  banner.querySelector('.ib-btn').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    banner.remove();
    if (outcome === 'accepted') showToast('已添加到主屏幕 🌸');
  });

  banner.querySelector('.ib-close').addEventListener('click', () => {
    banner.remove();
  });

  // Auto-dismiss after 15 seconds
  setTimeout(() => { if (banner.parentNode) banner.remove(); }, 15000);
}

// Also show banner from settings
function promptInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(({ outcome }) => {
      deferredPrompt = null;
      if (outcome === 'accepted') showToast('已添加到主屏幕 🌸');
    });
  } else {
    showToast('请用浏览器菜单中的"添加到主屏幕"');
  }
}

// ──────────────────────── TAB SWITCHING ────────────────────────

function switchTab(tab) {
  const recordView = document.getElementById('recordView');
  const statsView = document.getElementById('statsView');
  const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));

  if (tab === 'record') {
    recordView.classList.remove('hidden');
    statsView.classList.add('hidden');
  } else {
    recordView.classList.add('hidden');
    statsView.classList.remove('hidden');
    renderStatsView();
  }
}

// ──────────────────────── STATS COMPUTATIONS ────────────────────────

function getISOWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function getLastCompleteWeek() {
  const now = new Date();
  const dayOfWeek = now.getDay() || 7; // Mon=1..Sun=7
  const daysSinceSunday = dayOfWeek; // Days since last Sunday (end of last complete week)
  const lastSunday = new Date(now);
  lastSunday.setDate(now.getDate() - daysSinceSunday);
  lastSunday.setHours(23, 59, 59, 999);
  const lastMonday = new Date(lastSunday);
  lastMonday.setDate(lastSunday.getDate() - 6);
  lastMonday.setHours(0, 0, 0, 0);
  return { start: lastMonday, end: lastSunday, weekNum: getISOWeekNumber(lastMonday) };
}

function generateWeeklyReport() {
  const { start, end, weekNum } = getLastCompleteWeek();
  const weekMoods = appData.moods.filter(m => {
    const t = new Date(m.timestamp);
    return t >= start && t <= end;
  });

  if (weekMoods.length < 3) return null;

  const avgScore = Math.round(weekMoods.reduce((s, m) => s + m.score, 0) / weekMoods.length);

  const byDay = {};
  weekMoods.forEach(m => {
    const dow = new Date(m.timestamp).getDay();
    if (!byDay[dow]) byDay[dow] = [];
    byDay[dow].push(m.score);
  });
  let bestDow = -1, worstDow = -1, bestAvg = 0, worstAvg = 100;
  Object.entries(byDay).forEach(([dow, scores]) => {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    if (avg > bestAvg) { bestAvg = avg; bestDow = parseInt(dow); }
    if (avg < worstAvg) { worstAvg = avg; worstDow = parseInt(dow); }
  });
  const dowNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  const sortedDays = Object.keys(byDay).map(Number).sort();
  const halfIdx = Math.floor(sortedDays.length / 2);
  const firstHalf = sortedDays.slice(0, halfIdx);
  const secondHalf = sortedDays.slice(halfIdx);
  const firstAvg = firstHalf.reduce((s, d) => s + byDay[d].reduce((a, b) => a + b, 0) / byDay[d].length, 0) / firstHalf.length;
  const secondAvg = secondHalf.reduce((s, d) => s + byDay[d].reduce((a, b) => a + b, 0) / byDay[d].length, 0) / secondHalf.length;
  const diff = Math.round(secondAvg - firstAvg);
  const trendArrow = diff > 5 ? '↑' : diff < -5 ? '↓' : '→';
  const trendText = diff > 5 ? '后半周上扬' : diff < -5 ? '后半周回落' : '整体平稳';

  return {
    weekNum,
    avgScore,
    trendArrow,
    trendText,
    bestDay: dowNames[bestDow],
    bestDayScore: Math.round(bestAvg),
    worstDay: dowNames[worstDow],
    worstDayScore: Math.round(worstAvg),
    totalRecords: weekMoods.length,
  };
}

function getMonthlyStats(year, month) {
  const moods = appData.moods.filter(m => {
    const d = new Date(m.timestamp);
    return d.getFullYear() === year && d.getMonth() === month;
  });

  if (moods.length === 0) return null;

  const avg = Math.round(moods.reduce((s, m) => s + m.score, 0) / moods.length);

  const byDay = {};
  moods.forEach(m => {
    const day = new Date(m.timestamp).getDate();
    if (!byDay[day]) byDay[day] = [];
    byDay[day].push(m.score);
  });
  let bestDay = -1, worstDay = -1, bestAvg = 0, worstAvg = 100;
  Object.entries(byDay).forEach(([day, scores]) => {
    const a = scores.reduce((s, v) => s + v, 0) / scores.length;
    if (a > bestAvg) { bestAvg = a; bestDay = parseInt(day); }
    if (a < worstAvg) { worstAvg = a; worstDay = parseInt(day); }
  });

  return { avg, count: moods.length, bestDay, bestDayScore: Math.round(bestAvg), worstDay, worstDayScore: Math.round(worstAvg) };
}

function getCalendarData() {
  const now = new Date();
  const months = [];
  for (let m = 3; m >= 0; m--) {
    const d = new Date(now.getFullYear(), now.getMonth() - m, 1);
    months.push({ year: d.getFullYear(), month: d.getMonth() });
  }

  return months.map(({ year, month }) => {
    const totalDays = new Date(year, month + 1, 0).getDate();
    const firstDow = new Date(year, month, 1).getDay();
    const label = `${month + 1}月`;
    const days = [];
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = new Date(year, month, day).toDateString();
      const dayMoods = appData.moods.filter(m => new Date(m.timestamp).toDateString() === dateStr);
      if (dayMoods.length > 0) {
        const avg = Math.round(dayMoods.reduce((s, m) => s + m.score, 0) / dayMoods.length);
        const info = getMoodInfo(avg);
        days.push({ date: dateStr, score: avg, emoji: info.emoji, color: getScoreColor(avg), count: dayMoods.length });
      } else {
        days.push({ date: dateStr, score: null, emoji: null, color: null, count: 0 });
      }
    }
    return { label, year, month, firstDow, totalDays, days };
  });
}

function getMoodDistribution() {
  return moodMap.map(tier => {
    const midScore = Math.round((tier.min + tier.max) / 2);
    const count = appData.moods.filter(m => m.score >= tier.min && m.score <= tier.max).length;
    const percentage = appData.moods.length > 0 ? (count / appData.moods.length * 100) : 0;
    return {
      label: tier.label,
      emoji: tier.emoji,
      color: getScoreColor(midScore),
      count,
      percentage: Math.round(percentage * 10) / 10,
    };
  });
}

function getTimeOfDayStats() {
  const periods = [
    { period: '早晨', hours: [5, 6, 7, 8] },
    { period: '上午', hours: [9, 10, 11] },
    { period: '下午', hours: [12, 13, 14, 15, 16] },
    { period: '傍晚', hours: [17, 18, 19, 20] },
    { period: '夜晚', hours: [21, 22, 23, 0, 1, 2, 3, 4] },
  ];

  return periods.map(({ period, hours }) => {
    const group = appData.moods.filter(m => hours.includes(new Date(m.timestamp).getHours()));
    if (group.length === 0) return { period, avg: null, count: 0, color: null };
    const avg = Math.round(group.reduce((s, m) => s + m.score, 0) / group.length);
    return { period, avg, count: group.length, color: getScoreColor(avg) };
  }).filter(p => p.count > 0);
}

function getMonthlyTrend(year, month) {
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const results = [];
  for (let day = 1; day <= totalDays; day++) {
    const d = new Date(year, month, day);
    if (d > today) {
      results.push({ day, avg: null, count: 0, future: true });
      continue;
    }
    const ds = d.toDateString();
    const dayMoods = appData.moods.filter(m => new Date(m.timestamp).toDateString() === ds);
    if (dayMoods.length > 0) {
      const avg = Math.round(dayMoods.reduce((s, m) => s + m.score, 0) / dayMoods.length);
      results.push({ day, avg, count: dayMoods.length, future: false });
    } else {
      results.push({ day, avg: null, count: 0, future: false });
    }
  }
  return results;
}

// ──────────────────────── STATS RENDERING ────────────────────────

function renderStatsView() {
  renderWeeklyReport();
  renderMonthlyOverview();
  renderCalendarHeatmap();
  renderMoodDistribution();
  renderTimeOfDayAnalysis();
  renderMonthlyTrend();
}

function renderWeeklyReport() {
  const report = generateWeeklyReport();
  const content = document.getElementById('weeklyReportContent');
  if (!report) {
    content.innerHTML = '<div class="stats-empty">暂无上周数据，继续记录吧<br><span style="font-size:11px">至少记录3次才会生成周报</span></div>';
    return;
  }
  content.innerHTML = `
    <div class="report-header">第 ${report.weekNum} 周报告</div>
    <div class="report-avg">${report.avgScore}</div>
    <div class="report-trend">${report.trendArrow} ${report.trendText}</div>
    <div class="report-detail">
      最佳日：${report.bestDay}（${report.bestDayScore}分）&nbsp;&nbsp;·&nbsp;&nbsp;最低日：${report.worstDay}（${report.worstDayScore}分）<br>
      共 ${report.totalRecords} 条记录
    </div>
  `;
}

function renderMonthlyOverview() {
  const now = new Date();
  const thisMonth = getMonthlyStats(now.getFullYear(), now.getMonth());
  const lastMonth = getMonthlyStats(now.getFullYear(), now.getMonth() - 1);

  document.getElementById('moAvg').textContent = thisMonth ? thisMonth.avg : '--';
  document.getElementById('moCount').textContent = thisMonth ? thisMonth.count : '--';
  document.getElementById('moBest').textContent = thisMonth ? `${thisMonth.bestDay}日` : '--';
  document.getElementById('moWorst').textContent = thisMonth ? `${thisMonth.worstDay}日` : '--';

  const compareEl = document.getElementById('moCompare');
  if (thisMonth && lastMonth) {
    const diff = thisMonth.avg - lastMonth.avg;
    if (diff > 0) {
      compareEl.textContent = `相比上月，均分上升了 ${diff} 分，你在慢慢变好`;
    } else if (diff < 0) {
      compareEl.textContent = `相比上月，均分回落了 ${Math.abs(diff)} 分，起伏是生活的一部分`;
    } else {
      compareEl.textContent = '和上月的状态几乎一样，你在保持自己的节奏';
    }
  } else if (thisMonth) {
    compareEl.textContent = '上月数据不足，无法比较';
  } else {
    compareEl.textContent = '';
  }
}

function renderCalendarHeatmap() {
  const months = getCalendarData();
  const dowLabels = ['日', '一', '二', '三', '四', '五', '六'];

  const dowRow = `<div class="heatmap-dow-row">${dowLabels.map(l => `<span class="heatmap-dow-label">${l}</span>`).join('')}</div>`;

  const html = months.map(month => {
    const cells = [];
    // Empty cells before first day
    for (let i = 0; i < month.firstDow; i++) {
      cells.push('<div class="heatmap-cell"><div class="heatmap-dot empty"></div></div>');
    }
    // Day cells
    month.days.forEach(day => {
      if (day.score !== null) {
        const d = new Date(day.date);
        const tip = `${d.getMonth() + 1}月${d.getDate()}日: ${day.score}分 ${day.emoji}（${day.count}次）`;
        cells.push(`<div class="heatmap-cell"><div class="heatmap-dot has-data" style="background:${day.color}" title="${escapeHTML(tip)}"></div></div>`);
      } else {
        cells.push('<div class="heatmap-cell"><div class="heatmap-dot" style="background:#e8e2d8"></div></div>');
      }
    });

    return `<div class="heatmap-month">
      <div class="heatmap-month-label">${month.label}</div>
      ${dowRow}
      <div class="heatmap-grid">${cells.join('')}</div>
    </div>`;
  }).join('');

  document.getElementById('heatmapContainer').innerHTML = html;
}

function renderMoodDistribution() {
  const dist = getMoodDistribution();
  const maxCount = Math.max(...dist.map(d => d.count), 1);

  const html = dist.map(d => {
    const barWidth = maxCount > 0 ? (d.count / maxCount * 100) : 0;
    return `<div class="dist-row">
      <span class="dist-emoji">${d.emoji}</span>
      <span class="dist-label">${d.label}</span>
      <div class="dist-bar-track"><div class="dist-bar-fill" style="width:${barWidth}%;background:${d.color}"></div></div>
      <span class="dist-count">${d.count}次 (${d.percentage}%)</span>
    </div>`;
  }).join('');

  document.getElementById('distList').innerHTML = html || '<div class="stats-empty">还没有足够的数据</div>';
}

function renderTimeOfDayAnalysis() {
  const periods = getTimeOfDayStats();
  if (periods.length === 0) {
    document.getElementById('timeList').innerHTML = '<div class="stats-empty">还没有足够的数据</div>';
    return;
  }
  const html = periods.map(p => {
    const barWidth = (p.avg / 100) * 100;
    return `<div class="time-row">
      <span class="time-label">${p.period}</span>
      <div class="time-bar-track"><div class="time-bar-fill" style="width:${barWidth}%;background:${p.color}"></div></div>
      <span class="time-avg">均分 ${p.avg}</span>
      <span class="time-count">${p.count}次</span>
    </div>`;
  }).join('');

  document.getElementById('timeList').innerHTML = html;
}

function renderMonthlyTrend() {
  const now = new Date();
  const trend = getMonthlyTrend(now.getFullYear(), now.getMonth());

  if (trend.every(d => d.avg === null && !d.future)) {
    document.getElementById('trendChart').innerHTML = '<div class="stats-empty">本月还没有记录</div>';
    return;
  }

  const barsHtml = trend.map(d => {
    if (d.future) return '<div class="trend-bar empty" style="height:4px"></div>';
    if (d.avg === null) return '<div class="trend-bar empty" style="height:4px"></div>';
    const h = Math.max(8, d.avg * 0.85);
    const color = getScoreColor(d.avg);
    return `<div class="trend-bar" style="height:${h}%;background:${color}" title="${d.day}日: ${d.avg}分（${d.count}次）"></div>`;
  }).join('');

  document.getElementById('trendChart').innerHTML = barsHtml;
}
