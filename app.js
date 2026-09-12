/* ---------- Constants ---------- */
const MONTHS = [
  {name:"August",year:2026,days:31},{name:"September",year:2026,days:30},
  {name:"October",year:2026,days:31},{name:"November",year:2026,days:30},
  {name:"December",year:2026,days:31},{name:"January",year:2027,days:31},
  {name:"February",year:2027,days:28},{name:"March",year:2027,days:31},
  {name:"April",year:2027,days:30},{name:"May",year:2027,days:31},
  {name:"June",year:2027,days:30},{name:"July",year:2027,days:31},
];
const YEAR_START = new Date(2026,7,1); // Aug 1 2026

const QUOTES = [
"Discipline is remembering what you want.","Small steps, repeated daily, outrun sudden bursts of effort.",
"You don't rise to your goals, you fall to your habits.","Consistency turns ordinary days into extraordinary years.",
"The best day to start again is today.","Motivation gets you going, habit keeps you going.",
"Progress hides inside boring, repeated days.","Every checkbox you mark today is a vote for who you're becoming.",
"Don't wait for the mood — the mood arrives after the action.","A streak is just one good decision, repeated.",
"Comfort and growth rarely share the same room.","You are one habit away from a different life.",
"Save first, spend what's left — not the other way around.","Skipping one day is a slip. Skipping two is the start of a new habit.",
"The compound interest of discipline pays out slowly, then all at once.","Show up even when the result won't show today.",
"Your future self is built from today's small choices.","Rest without quitting.",
"Track it, and you'll change it.","The habit you dread most is usually the one you need most.",
"Cheap distractions steal expensive futures.","Do the boring work. The exciting results follow.",
"Discipline is a form of self-respect.","Every rupee saved today is a choice made for tomorrow's freedom.",
"You don't need more time, you need more consistency.","The tracker doesn't judge you. It just tells the truth.",
"One percent better, every day, is unbeatable over a year.","Learning compounds quietly until it doesn't.",
"Energy follows action, not the other way around.","A goal without a deadline is just a wish.",
"Protect your mornings — they set the tone for everything else.","The days you don't feel like it are the days that matter most.",
"Habits are the compound interest of self-improvement.","Discomfort today is freedom tomorrow.",
"Don't count the days, make the days count.","You can't manage what you don't measure.",
"Small disciplines repeated daily lead to great achievements.","The pain of discipline weighs ounces; the pain of regret weighs tons.",
"Fall seven times, log the eighth.","Consistency beats intensity, almost every time.",
"Your habits are voting on the person you're becoming.","It's not about having time, it's about making time.",
"Every skill you learn today buys you options tomorrow.","Money saved is a future problem already solved.",
"Discipline weighs less than regret.","Success is a few daily habits, repeated for years.",
"A single day of discipline is a brick. A year of it is a wall.","Habits are easier to keep than to start.",
"The gap between goals and results is called consistency.","Do it badly today rather than perfectly never.",
"You are always one habit closer or one habit further.","The tracker is a mirror, not a judge.",
"Growth is invisible day to day and undeniable year to year.","Discipline turns intentions into results.",
"Wanting it isn't enough — schedule it.","Your bank balance follows your habits, not your hopes.",
"The best investment is the one you make in yourself daily.","Consistency is the quiet cousin of talent.",
"You don't have to be extreme, just consistent.","Every 'x' you mark is a promise kept to yourself.",
"Discipline is choosing between what you want now and what you want most.","What gets tracked gets improved.",
"A habit skipped is easier to skip again — break the pattern early.","Learning a little every day beats learning a lot occasionally.",
"Build the habit before you need the result.","The days feel small, the years won't.",
"You're not behind, you're just getting started — again.","Save like your future depends on it, because it does.",
"The goal is progress, not perfection.","Every skipped habit is a lesson, not a verdict.",
"Discipline is choosing your hard.","Show up for yourself the way you'd show up for someone you love.",
"A year from now, you'll wish you started today."
];

/* ---------- State ---------- */
const DEFAULT_STATE = () => ({
  habits: {
    daily: [
      {name:"Wake up 6 AM", type:"checkbox", target:null, unit:"", min:null, time:"morning"},
      {name:"Workout / calisthenics", type:"checkbox", target:null, unit:"", min:null, time:"anytime"},
      {name:"No junk food", type:"checkbox", target:null, unit:"", min:null, time:"anytime"},
      {name:"Read 20 min", type:"numeric", target:20, unit:"min", min:10, time:"evening"},
      {name:"Journal", type:"checkbox", target:null, unit:"", min:null, time:"night"},
      {name:"No phone after 11 PM", type:"checkbox", target:null, unit:"", min:null, time:"night"},
      {name:"Cold shower", type:"checkbox", target:null, unit:"", min:null, time:"morning"},
    ],
    weekly: ["Meal prep","Long run","Deep clean room","Review budget","Call family","Plan next week"]
      .map(n=>({name:n, type:"checkbox", target:null, unit:"", min:null, time:"anytime"})),
    monthly: ["Full body progress photo","Review goals","Declutter","Skill practice review"]
      .map(n=>({name:n, type:"checkbox", target:null, unit:"", min:null, time:"anytime"})),
  },
  dailyLogs: {},
  weeklyLogs: {},
  monthlyLogs: {},
  weightLogs: {},     // weekIndex -> {date, weight}
  stepLogs: {},        // "YYYY-MM-DD" -> steps
  bodyLogs: [],         // [{id, date, weight, waist, bodyFatPct}]
  profile: { heightCm: null },
  exerciseNames: [],     // ["Push-ups","Squats",...] — user's own exercise list
  exerciseLogs: {},       // "YYYY-MM-DD" -> [{id, exerciseName, sets, reps}]
  tasks: [],           // {id, title, dueDate, notes, done, lastNotifiedDate, recurrence?, seriesId?}
  money: { initialBalance: 0 },
  transactions: [],      // [{id,type:"income"|"expense",amount,category,date,note}]
  incomeCategories: ["Salary","Freelance","Pocket Money","Business","Other"],
  expenseCategories: ["Food","Transport","Shopping","Bills","Entertainment","Education","Fitness","Other"],
  goals: [],
  learn: [],
  journalEntries: {},  // "YYYY-MM-DD" -> {text, updatedAt}
  reviews: { weekly:{}, monthly:{}, yearly:{} },
  appLock: { enabled:false, pinHash:null, salt:null },
  unlockedAchievements: {}, // id -> unlockedAt timestamp
  settings: {
    notifOn:false, reminderTime:"20:00", taskNotifOn:true,
    stepsOn:false, weightOn:false, weightDay:1, lastWeightPromptWeek:null,
    reduceMotion:false, theme:"classic", sectionBackgrounds:{},
    habitGroupingOn:true, migratedToV2:false,
    quietHoursOn:false, quietStart:"22:30", quietEnd:"07:00",
    onboardingDone:false,
    homeCards: ["ring","discipline","xp","habits","trend"],
    hiddenHomeCards: [],
    lastBackupAt: null,
  },
});

let state = loadState();
function loadState(){
  try{
    const raw = localStorage.getItem("forgeData");
    if(!raw) return DEFAULT_STATE();
    const parsed = JSON.parse(raw);
    const merged = mergeWithDefaults(parsed);
    const needsMigration = !merged.settings.migratedToV2;
    const migrated = migrateState(merged);
    if(needsMigration){
      localStorage.setItem("forgeData", JSON.stringify(migrated)); // persist immediately so migration never re-runs / duplicates
    }
    return migrated;
  }catch(e){ return DEFAULT_STATE(); }
}
function mergeWithDefaults(parsed){
  const d = DEFAULT_STATE();
  return {...d, ...parsed, habits:{...d.habits,...(parsed.habits||{})}, settings:{...d.settings,...(parsed.settings||{})}, money:{...d.money,...(parsed.money||{})}, profile:{...d.profile,...(parsed.profile||{})}};
}
/* Upgrade old string-array habits to objects, and old monthly money entries to dated transactions. Runs once. */
function migrateState(s){
  if(s.settings.migratedToV2) return s;

  ["daily","weekly","monthly"].forEach(cat=>{
    s.habits[cat] = (s.habits[cat]||[]).map(h=>{
      if(typeof h === "string") return {name:h, type:"checkbox", target:null, unit:"", min:null, time:"anytime"};
      return {type:"checkbox", target:null, unit:"", min:null, time:"anytime", ...h};
    });
  });

  // migrate old per-month money entries (income/fixed/expenses or legacy flat variable) into dated transactions
  if(s.money){
    for(let i=0;i<12;i++){
      const entry = s.money[i];
      if(!entry) continue;
      const m = MONTHS[i];
      const dateKey = fmtDate(new Date(m.year, monthNumFromName(m.name), 1));
      if(entry.income){
        s.transactions.push({id:`mig-inc-${i}`, type:"income", amount:entry.income, category:"Migrated Income", date:dateKey, note:"Migrated from monthly entry"});
      }
      if(entry.fixed){
        s.transactions.push({id:`mig-fixed-${i}`, type:"expense", amount:entry.fixed, category:"Bills", date:dateKey, note:"Migrated fixed expenses"});
      }
      if(Array.isArray(entry.expenses) && entry.expenses.length>0){
        entry.expenses.forEach((exp,j)=>{
          if(!exp.amount) return;
          s.transactions.push({id:`mig-exp-${i}-${j}`, type:"expense", amount:exp.amount, category:exp.category||"Other", date:dateKey, note:exp.note||"Migrated expense"});
        });
      } else if(entry.variable){
        s.transactions.push({id:`mig-var-${i}`, type:"expense", amount:entry.variable, category:"Other", date:dateKey, note:"Migrated variable expenses"});
      }
    }
  }

  s.settings.migratedToV2 = true;
  return s;
}
function saveState(){ localStorage.setItem("forgeData", JSON.stringify(state)); }

if(state.settings.reduceMotion) document.body.classList.add("reduce-motion");
if(state.settings.theme && state.settings.theme!=="classic") document.body.classList.add("theme-"+state.settings.theme);

/* ---------- Date helpers ---------- */
function fmtDate(d){ return d.toISOString().slice(0,10); }
function todayKey(){ return fmtDate(new Date()); }
function dayIndexInYear(d){ return Math.floor((d - YEAR_START) / 86400000); }
function monthIndexOf(d){
  for(let i=0;i<12;i++){
    const start = new Date(MONTHS[i].year, monthNumFromName(MONTHS[i].name), 1);
    const nextStart = i===11 ? null : new Date(MONTHS[i+1].year, monthNumFromName(MONTHS[i+1].name), 1);
    if(d >= start && (!nextStart || d < nextStart)) return i;
  }
  return 0;
}
function monthNumFromName(name){
  return ["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(name);
}
function weekIndexOf(d){ return Math.min(Math.max(Math.floor(dayIndexInYear(d)/7),0), 51); }

function quoteForToday(){
  const idx = ((dayIndexInYear(new Date()) % QUOTES.length) + QUOTES.length) % QUOTES.length;
  return QUOTES[idx];
}
function ratingLabel(pct){
  if(pct>=0.9) return {label:"Excellent", cls:"pill-excellent"};
  if(pct>=0.7) return {label:"Good", cls:"pill-good"};
  if(pct>=0.5) return {label:"Fair", cls:"pill-fair"};
  if(pct>=0.25) return {label:"Poor", cls:"pill-poor"};
  return {label:"Very Poor", cls:"pill-verypoor"};
}

/* ---------- Habit entry helpers (checkbox vs numeric) ---------- */
function habitName(h){ return (h && typeof h==="object") ? h.name : h; }
function habitType(h){ return (h && typeof h==="object" && h.type) ? h.type : "checkbox"; }
function habitTarget(h){ return (h && typeof h==="object") ? h.target : null; }
function habitUnit(h){ return (h && typeof h==="object" && h.unit) ? h.unit : ""; }
function habitMin(h){ return (h && typeof h==="object") ? h.min : null; }
function habitTime(h){ return (h && typeof h==="object" && h.time) ? h.time : "anytime"; }
const TIME_ORDER = ["morning","afternoon","evening","night","anytime"];
const TIME_LABELS = {morning:"🌅 Morning", afternoon:"☀️ Afternoon", evening:"🌆 Evening", night:"🌙 Night", anytime:"Anytime"};

function entryProgress(entry, h){
  if(habitType(h)==="numeric"){
    const val = (typeof entry === "number") ? entry : 0;
    const target = habitTarget(h) || 1;
    const min = habitMin(h);
    const pct = target>0 ? Math.min(val/target,1) : 0;
    let st = "missed";
    if(val >= target) st = "done";
    else if(min!=null && val >= min) st = "partial";
    else if(val>0) st = "partial";
    return {pct, val, target, unit:habitUnit(h), state:st};
  }
  const on = entry===true;
  return {pct: on?1:0, val:on, target:1, unit:"", state: on?"done":"missed"};
}
function entryCountsAsDone(entry, h){ return entryProgress(entry,h).state === "done"; }
function entryHasProgress(entry, h){ const s=entryProgress(entry,h).state; return s==="done"||s==="partial"; }
function quickIncrements(unit){
  const u = (unit||"").toLowerCase();
  if(u==="ml") return [100,250,500];
  if(u==="l"||u==="liter"||u==="liters") return [0.25,0.5,1];
  if(u==="min"||u==="mins"||u==="minutes") return [5,10,15];
  if(u==="hr"||u==="hrs"||u==="hours"||u==="hour") return [0.5,1];
  if(u==="reps"||u==="rep") return [5,10,25];
  if(u==="steps") return [500,1000,2000];
  if(u==="km") return [0.5,1,2];
  return [1,5,10];
}

/* ---------- Transaction-based money helpers ---------- */
function txOnDate(dateKey){ return state.transactions.filter(t=>t.date===dateKey); }
function txInRange(startKey, endKey){ return state.transactions.filter(t => t.date>=startKey && t.date<=endKey); }
function sumTx(list, type){ return list.filter(t=>t.type===type).reduce((s,t)=>s+(t.amount||0),0); }
function weekRangeFor(refDate){
  const day = refDate.getDay();
  const diff = (day===0)?6:day-1;
  const start = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate()-diff);
  const end = new Date(start.getFullYear(), start.getMonth(), start.getDate()+6);
  return {start:fmtDate(start), end:fmtDate(end)};
}
function monthRangeForIndex(i){
  const m = MONTHS[i];
  const start = new Date(m.year, monthNumFromName(m.name), 1);
  const end = new Date(m.year, monthNumFromName(m.name), m.days);
  return {start:fmtDate(start), end:fmtDate(end)};
}
function monthIncome(i){ const {start,end}=monthRangeForIndex(i); return sumTx(txInRange(start,end),"income"); }
function monthExpenseTotal(i){ const {start,end}=monthRangeForIndex(i); return sumTx(txInRange(start,end),"expense"); }
function monthSavings(i){ return monthIncome(i) - monthExpenseTotal(i); }

/* ---------- Toast ---------- */
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove("show"), 2200);
}

/* ---------- Sheets (More / Weight modal) ---------- */
function showSheet(id){
  const el = document.getElementById(id);
  el.classList.remove("hidden");
  requestAnimationFrame(()=>requestAnimationFrame(()=> el.classList.add("open")));
}
function hideSheet(id){
  const el = document.getElementById(id);
  el.classList.remove("open");
  setTimeout(()=> el.classList.add("hidden"), 260);
}
document.getElementById("moreBackdrop").addEventListener("click", (e)=>{
  if(e.target.id==="moreBackdrop") hideSheet("moreBackdrop");
});
document.querySelectorAll(".sheet-item").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    hideSheet("moreBackdrop");
    setTimeout(()=> showView(btn.dataset.view), 200);
  });
});

/* ---------- Navigation with slide transition ---------- */
const VIEWS = ["home","habits","fitness","analytics","money","goals","learn","calendar","journal","achievements","reviews","settings"];
function showView(name){
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view===name));
  const target = document.getElementById("view-"+name);
  if(!target) return;
  const current = VIEWS.map(v=>document.getElementById("view-"+v)).find(el => el && !el.classList.contains("hidden"));
  if(current === target){ runViewRenderer(name); return; }
  const swap = ()=>{
    VIEWS.forEach(v=>{
      const el = document.getElementById("view-"+v);
      if(el && v!==name) el.classList.add("hidden");
    });
    target.classList.remove("hidden");
    target.classList.add("slide-in");
    requestAnimationFrame(()=>requestAnimationFrame(()=> target.classList.remove("slide-in")));
    runViewRenderer(name);
  };
  if(current && !state.settings.reduceMotion){
    current.classList.add("slide-out");
    setTimeout(()=>{ current.classList.remove("slide-out"); swap(); }, 160);
  } else {
    swap();
  }
}
function runViewRenderer(name){
  if(name==="home") renderHome();
  if(name==="habits") renderHabits();
  if(name==="fitness") renderFitness();
  if(name==="analytics") renderAnalytics();
  if(name==="money") renderMoney();
  if(name==="goals") renderGoals();
  if(name==="learn") renderLearn();
  if(name==="calendar") renderCalendar();
  if(name==="journal") renderJournal();
  if(name==="achievements") renderAchievements();
  if(name==="reviews") renderReviews();
  if(name==="settings") renderSettings();
}
document.querySelectorAll(".nav-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    if(b.dataset.view==="more"){ showSheet("moreBackdrop"); return; }
    showView(b.dataset.view);
  });
});
document.getElementById("settingsBtn").addEventListener("click", ()=> showView("settings"));

/* ---------- HOME ---------- */
let trendChartInstance = null;
function renderHome(){
  document.getElementById("quoteTicker").textContent = "\u201C" + quoteForToday() + "\u201D";

  const key = todayKey();
  const total = state.habits.daily.length;
  const log = state.dailyLogs[key] || Array(total).fill(false);
  let doneCount=0, pctSum=0;
  state.habits.daily.forEach((h,i)=>{
    const p = entryProgress(log[i], h);
    if(p.state==="done") doneCount++;
    pctSum += p.pct;
  });
  const pct = total ? pctSum/total : 0;

  const banner = document.getElementById("reminderBanner");
  if(doneCount===0){
    banner.textContent = "⚠ You haven't logged today yet — mark your habits below.";
    banner.className = "reminder-banner due";
  } else {
    banner.textContent = `✅ Today logged — ${doneCount}/${total} habits done.`;
    banner.className = "reminder-banner done";
  }

  const ring = document.getElementById("ringProgress");
  const circumference = 2 * Math.PI * 60;
  requestAnimationFrame(()=>{ ring.style.strokeDashoffset = circumference * (1-pct); });
  document.getElementById("ringPct").textContent = Math.round(pct*100) + "%";
  document.getElementById("doneNum").textContent = `${doneCount}/${total}`;
  const r = ratingLabel(pct);
  document.getElementById("ratingNum").textContent = r.label;
  document.getElementById("streakNum").textContent = computeStreak();

  renderDailyHabitList(document.getElementById("todayHabits"), key);

  const stepsWrap = document.getElementById("stepsStatWrap");
  stepsWrap.classList.toggle("hidden", !state.settings.stepsOn);
  document.getElementById("stepsStatNum").textContent = state.stepLogs[key] || 0;

  renderDisciplineCard(key);
  renderXPCard();
  renderTrendChart();
  maybePromptWeight();
}

function renderDisciplineCard(key){
  const card = document.getElementById("disciplineCard");
  const {score, components} = computeDisciplineScore(key);
  if(score==null){
    card.innerHTML = `<div class="discipline-empty">Discipline Score appears once you're using at least one module (Habits, Fitness, Learning, Money, or Tasks).</div>`;
    return;
  }
  const rows = components.map(c=> `<div class="discipline-row"><span>${escapeHtml(c.label)}</span><b>${c.score}%</b></div>`).join("");
  card.innerHTML = `
    <div class="discipline-top">
      <span class="discipline-score">${score}/100</span>
      <span class="discipline-rating">${disciplineRatingLabel(score)}</span>
    </div>
    <div class="discipline-breakdown">${rows}</div>`;
}
function renderXPCard(){
  const card = document.getElementById("xpCard");
  const xp = computeTotalXP();
  const level = computeLevel(xp);
  const rank = rankForLevel(level);
  const curFloor = xpForLevel(level);
  const nextFloor = xpForLevel(level+1);
  const pct = Math.round(((xp-curFloor)/(nextFloor-curFloor))*100);
  card.innerHTML = `
    <div class="xp-rank-icon">${rankFlagSvg(rank.color)}</div>
    <div class="xp-info">
      <div class="xp-level-line">Level ${level} — ${escapeHtml(rank.name)}</div>
      <div class="xp-track"><div class="xp-fill" style="width:${pct}%"></div></div>
      <div class="xp-total">${xp} XP total · ${nextFloor-xp} XP to next level</div>
    </div>`;
}

/* Reusable habit card: checkbox toggle OR numeric progress + quick-add + manual entry */
function buildHabitCardEl(h, entry, onChange){
  const type = habitType(h);
  const card = document.createElement("div");
  if(type==="numeric"){
    const p = entryProgress(entry, h);
    const stateCls = p.state==="done" ? "checked" : (p.state==="partial" ? "partial" : "");
    card.className = "habit-card numeric " + stateCls;
    const dv = Number.isInteger(p.val) ? p.val : Math.round(p.val*100)/100;
    card.innerHTML = `
      <div class="habit-numeric-top">
        <div class="habit-name">${escapeHtml(habitName(h))}</div>
        <div class="habit-numeric-value mono">${dv}${p.unit?" "+p.unit:""} / ${p.target}${p.unit?" "+p.unit:""}</div>
      </div>
      <div class="habit-progress-track"><div class="habit-progress-fill" style="width:${Math.round(p.pct*100)}%"></div></div>
      <div class="habit-quick-row">
        ${quickIncrements(p.unit).map(d=>`<button class="habit-qbtn" type="button" data-delta="${d}">+${d}${p.unit}</button>`).join("")}
        <input type="number" class="habit-manual-input" placeholder="Set value" step="any" />
      </div>`;
    card.querySelectorAll(".habit-qbtn").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const delta = +btn.dataset.delta;
        onChange(Math.round(((p.val||0)+delta)*100)/100);
      });
    });
    const manual = card.querySelector(".habit-manual-input");
    manual.addEventListener("keydown",(e)=>{ if(e.key==="Enter") manual.blur(); });
    manual.addEventListener("change", ()=>{
      if(manual.value===""){ return; }
      const v = +manual.value;
      if(!isNaN(v)) onChange(v);
    });
  } else {
    const on = entry===true;
    card.className = "habit-card" + (on?" checked":"");
    card.innerHTML = `
      <div><div class="habit-name">${escapeHtml(habitName(h))}</div></div>
      <div class="check-toggle ${on?"on":""}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#11111B" stroke-width="3"><path d="M4 12l5 5L20 6"/></svg></div>`;
    card.querySelector(".check-toggle").addEventListener("click", ()=>{ onChange(!on); });
  }
  return card;
}

function renderDailyHabitList(containerEl, dateKey){
  containerEl.innerHTML = "";
  const total = state.habits.daily.length;
  const log = state.dailyLogs[dateKey] || Array(total).fill(false);
  const indices = state.habits.daily.map((_,i)=>i);

  const makeCard = (i)=>{
    const h = state.habits.daily[i];
    const entry = log[i];
    const card = buildHabitCardEl(h, entry, (newVal)=>{
      const arr = state.dailyLogs[dateKey] || Array(total).fill(habitType(h)==="numeric"?0:false);
      const wasCounted = entryCountsAsDone(arr[i], h);
      arr[i] = newVal;
      state.dailyLogs[dateKey] = arr;
      saveState();
      const nowCounted = entryCountsAsDone(newVal, h);
      renderHome();
      if(nowCounted && !wasCounted && !state.settings.reduceMotion){
        requestAnimationFrame(()=>{
          const fresh = document.querySelector(`#todayHabits [data-hidx="${i}"]`);
          if(fresh){ fresh.classList.add("pop"); setTimeout(()=>fresh.classList.remove("pop"),650); }
        });
      }
    });
    card.dataset.hidx = i;
    return card;
  };

  if(state.settings.habitGroupingOn){
    TIME_ORDER.forEach(t=>{
      const idxs = indices.filter(i=> habitTime(state.habits.daily[i])===t);
      if(idxs.length===0) return;
      const heading = document.createElement("div");
      heading.className = "habit-group-title";
      heading.textContent = TIME_LABELS[t];
      containerEl.appendChild(heading);
      idxs.forEach(i=> containerEl.appendChild(makeCard(i)));
    });
  } else {
    indices.forEach(i=> containerEl.appendChild(makeCard(i)));
  }
}

function computeStreak(){
  let streak=0;
  let d = new Date();
  while(true){
    const key = fmtDate(d);
    const log = state.dailyLogs[key];
    const hasProgress = log && state.habits.daily.some((h,i)=> entryHasProgress(log[i], h));
    if(hasProgress){ streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

/* ---- Discipline Score: a daily 0-100 score built only from modules the user actually uses ---- */
function computeDisciplineScore(dateKey){
  const components = [];

  if(state.habits.daily.length>0){
    const log = state.dailyLogs[dateKey] || [];
    let pctSum = 0;
    state.habits.daily.forEach((h,i)=> pctSum += entryProgress(log[i], h).pct);
    const pct = pctSum / state.habits.daily.length;
    components.push({label:"Habits", weight:40, score: Math.round(pct*100)});
  }
  const fitnessEverUsed = state.exerciseNames.length>0;
  if(fitnessEverUsed){
    const loggedToday = (state.exerciseLogs[dateKey]||[]).length>0;
    let score = loggedToday ? 100 : 0;
    if(state.settings.stepsOn){
      const stepsOk = (state.stepLogs[dateKey]||0) > 0;
      score = Math.round((score + (stepsOk?100:0)) / 2);
    }
    components.push({label:"Fitness", weight:20, score});
  }
  if(state.learn.length>0){
    const healthy = state.learn.filter(l=> l.status==="Done" || l.status==="In Progress").length;
    components.push({label:"Learning", weight:15, score: Math.round((healthy/state.learn.length)*100)});
  }
  if(state.transactions.length>0){
    components.push({label:"Money", weight:15, score: txOnDate(dateKey).length>0 ? 100 : 0});
  }
  if(state.tasks.length>0){
    const dueToday = state.tasks.filter(t=>t.dueDate===dateKey);
    const score = dueToday.length===0 ? 100 : Math.round((dueToday.filter(t=>t.done).length/dueToday.length)*100);
    components.push({label:"Tasks", weight:10, score});
  }

  if(components.length===0) return {score:null, components:[]};
  const totalWeight = components.reduce((s,c)=>s+c.weight,0);
  const weighted = components.reduce((s,c)=> s + c.score*(c.weight/totalWeight), 0);
  return {score: Math.round(weighted), components};
}
function disciplineRatingLabel(score){
  if(score>=90) return "Excellent Day";
  if(score>=75) return "Good Day";
  if(score>=55) return "Fair Day";
  if(score>=30) return "Poor Day";
  return "Very Poor Day";
}
function computeDisciplineStreakAbove(threshold){
  let streak=0; let d=new Date();
  while(true){
    const {score} = computeDisciplineScore(fmtDate(d));
    if(score!=null && score>=threshold){ streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

/* ---- XP / Levels / One Piece rank (computed dynamically from real activity, no farmable ledger) ---- */
function computeDailyXP(dateKey){
  let xp = 0;
  const log = state.dailyLogs[dateKey] || [];
  state.habits.daily.forEach((h,i)=>{ if(entryCountsAsDone(log[i], h)) xp += 2; });
  if((state.exerciseLogs[dateKey]||[]).length>0) xp += 10;
  if(txOnDate(dateKey).length>0) xp += 5;
  if(state.journalEntries[dateKey]) xp += 5;
  return Math.min(xp, 100); // daily cap on recurring sources, so no single day can be farmed indefinitely
}
function computeTotalXP(){
  const dates = new Set([
    ...Object.keys(state.dailyLogs),
    ...Object.keys(state.exerciseLogs),
    ...Object.keys(state.journalEntries),
  ]);
  state.transactions.forEach(t=> dates.add(t.date));
  let xp = 0;
  dates.forEach(d=> xp += computeDailyXP(d));
  xp += state.tasks.filter(t=>t.done).length * 5;       // one-time bonus per completed task
  xp += state.learn.filter(l=>l.status==="Done").length * 15; // one-time bonus per finished topic
  return xp;
}
function xpForLevel(level){ return (level-1) * 150; }
function computeLevel(xp){
  let level = 1;
  while(xp >= xpForLevel(level+1)) level++;
  return level;
}
const RANKS = [
  {name:"Rookie",     minLevel:1,  color:"#8991B3"},
  {name:"Pirate",     minLevel:6,  color:"#8FE3D0"},
  {name:"Grand Line", minLevel:16, color:"#F9C74F"},
  {name:"Supernova",  minLevel:31, color:"#C9A6F7"},
  {name:"New World",  minLevel:51, color:"#F4879C"},
  {name:"Yonko",      minLevel:81, color:"#FFD700"},
];
function rankForLevel(level){
  let r = RANKS[0];
  RANKS.forEach(rk=>{ if(level>=rk.minLevel) r = rk; });
  return r;
}
function rankFlagSvg(color){
  return `<svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <line x1="6" y1="2" x2="6" y2="22" stroke="${color}" stroke-width="1.6"/>
    <path d="M6 3 L19 6.5 L6 10 Z" fill="${color}"/>
  </svg>`;
}
function monthHabitPct(i){
  const dailyTotal = state.habits.daily.length;
  if(dailyTotal===0) return 0;
  const m = MONTHS[i];
  const start = monthStartDate(i);
  let done = 0;
  for(let d=1; d<=m.days; d++){
    const key = fmtDate(new Date(start.getFullYear(), start.getMonth(), d));
    const log = state.dailyLogs[key] || [];
    done += state.habits.daily.filter((h,hi)=> entryCountsAsDone(log[hi], h)).length;
  }
  return done / (dailyTotal*m.days);
}

function renderTrendChart(){
  const labels=[], data=[];
  for(let i=13;i>=0;i--){
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = fmtDate(d);
    const log = state.dailyLogs[key] || [];
    const total = state.habits.daily.length;
    const pct = total ? Math.round((log.filter(Boolean).length/total)*100) : 0;
    labels.push(d.toLocaleDateString(undefined,{day:"numeric",month:"short"}));
    data.push(pct);
  }
  const ctx = document.getElementById("trendChart");
  if(trendChartInstance) trendChartInstance.destroy();
  trendChartInstance = new Chart(ctx, {
    type:"line",
    data:{ labels, datasets:[{
      data, borderColor:"#F9C74F", backgroundColor:"rgba(249,199,79,0.12)",
      tension:.4, fill:true, pointRadius:3, pointBackgroundColor:"#F9C74F", borderWidth:2,
    }]},
    options:{
      responsive:true, animation:{duration:700, easing:"easeOutQuart"},
      plugins:{legend:{display:false}},
      scales:{
        y:{min:0,max:100, ticks:{color:"#8991B3", callback:v=>v+"%"}, grid:{color:"#2D2D44"}},
        x:{ticks:{color:"#8991B3", maxRotation:0}, grid:{display:false}}
      }
    }
  });
}
document.getElementById("stepsInput").addEventListener("input", (e)=>{
  state.stepLogs[todayKey()] = +e.target.value || 0;
  saveState();
});

/* ---------- HABITS ---------- */
let currentMonthIdx = monthIndexOf(new Date());
let currentWeekIdx = weekIndexOf(new Date());
let habitSeg = "daily";

document.querySelectorAll("#habitSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#habitSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    habitSeg = b.dataset.seg;
    ["daily","weekly","monthly"].forEach(s=>document.getElementById("seg-"+s).classList.toggle("hidden", s!==habitSeg));
    renderHabits();
  });
});
document.getElementById("prevMonth").addEventListener("click", ()=>{ currentMonthIdx=(currentMonthIdx+11)%12; renderHabits(); });
document.getElementById("nextMonth").addEventListener("click", ()=>{ currentMonthIdx=(currentMonthIdx+1)%12; renderHabits(); });
document.getElementById("prevWeek").addEventListener("click", ()=>{ currentWeekIdx=Math.max(0,currentWeekIdx-1); renderHabits(); });
document.getElementById("nextWeek").addEventListener("click", ()=>{ currentWeekIdx=Math.min(51,currentWeekIdx+1); renderHabits(); });

function monthStartDate(idx){
  const m = MONTHS[idx];
  return new Date(m.year, monthNumFromName(m.name), 1);
}

function renderHabits(){
  if(habitSeg==="daily") renderDailyGrid();
  if(habitSeg==="weekly") renderWeekly();
  if(habitSeg==="monthly") renderMonthly();
}

function renderDailyGrid(){
  const m = MONTHS[currentMonthIdx];
  document.getElementById("monthLabel").textContent = `${m.name} ${m.year}`;
  const table = document.getElementById("dailyGrid");
  const start = monthStartDate(currentMonthIdx);
  const todayStr = todayKey();

  let thead = "<tr><th>Habit</th>";
  for(let d=1; d<=m.days; d++) thead += `<th>${d}</th>`;
  thead += "<th>%</th></tr>";

  let rows = "";
  let dayTotals = Array(m.days).fill(0);
  state.habits.daily.forEach((h, hi)=>{
    let row = `<tr><td class="habit-label">${escapeHtml(habitName(h))}</td>`;
    let count=0;
    for(let d=1; d<=m.days; d++){
      const dateObj = new Date(start.getFullYear(), start.getMonth(), d);
      const key = fmtDate(dateObj);
      const log = state.dailyLogs[key] || [];
      const p = entryProgress(log[hi], h);
      const isToday = key===todayStr;
      let cellCls = "day-cell";
      let cellContent = "";
      if(p.state==="done"){ cellCls+=" on"; cellContent="✓"; count++; dayTotals[d-1]++; }
      else if(p.state==="partial"){ cellCls+=" partial-cell"; cellContent="•"; }
      if(isToday) cellCls += " today";
      row += `<td class="${cellCls}" data-date="${key}" data-hi="${hi}">${cellContent}</td>`;
    }
    const pct = Math.round((count/m.days)*100);
    row += `<td class="mono">${pct}%</td></tr>`;
    rows += row;
  });

  table.innerHTML = thead + rows;
  table.querySelectorAll(".day-cell").forEach(cell=>{
    cell.addEventListener("click", ()=>{
      const key = cell.dataset.date, hi = +cell.dataset.hi;
      const h = state.habits.daily[hi];
      const arr = state.dailyLogs[key] || Array(state.habits.daily.length).fill(habitType(h)==="numeric"?0:false);
      if(habitType(h)==="numeric"){
        const cur = typeof arr[hi]==="number" ? arr[hi] : 0;
        const val = prompt(`${habitName(h)}${habitUnit(h)?" ("+habitUnit(h)+")":""} — target ${habitTarget(h)}`, cur);
        if(val===null) return;
        const num = +val;
        if(isNaN(num)) return;
        arr[hi] = num;
      } else {
        arr[hi] = !arr[hi];
      }
      state.dailyLogs[key] = arr;
      saveState();
      renderDailyGrid();
      if(key===todayStr) renderHome();
    });
  });

  const totalPossible = state.habits.daily.length * m.days;
  const totalDone = dayTotals.reduce((a,b)=>a+b,0);
  const overallPct = totalPossible ? totalDone/totalPossible : 0;
  const r = ratingLabel(overallPct);
  document.getElementById("monthRating").innerHTML =
    `<span>Month completion: <b class="mono">${Math.round(overallPct*100)}%</b></span><span class="rating-pill ${r.cls}">${r.label}</span>`;
}

function renderWeekly(){
  document.getElementById("weekLabel").textContent = `Week ${currentWeekIdx+1} of 52`;
  const list = document.getElementById("weeklyHabits");
  const total = state.habits.weekly.length;
  const log = state.weeklyLogs[currentWeekIdx] || Array(total).fill(false);
  list.innerHTML = "";
  state.habits.weekly.forEach((h,i)=>{
    const card = buildHabitCardEl(h, log[i], (newVal)=>{
      const arr = state.weeklyLogs[currentWeekIdx] || Array(total).fill(habitType(h)==="numeric"?0:false);
      arr[i] = newVal;
      state.weeklyLogs[currentWeekIdx] = arr;
      saveState();
      renderWeekly();
    });
    list.appendChild(card);
  });
}

function renderMonthly(){
  const list = document.getElementById("monthlyHabits");
  const total = state.habits.monthly.length;
  const log = state.monthlyLogs[currentMonthIdx] || Array(total).fill(false);
  list.innerHTML = "";
  const m = MONTHS[currentMonthIdx];
  state.habits.monthly.forEach((h,i)=>{
    const card = buildHabitCardEl(h, log[i], (newVal)=>{
      const arr = state.monthlyLogs[currentMonthIdx] || Array(total).fill(habitType(h)==="numeric"?0:false);
      arr[i] = newVal;
      state.monthlyLogs[currentMonthIdx] = arr;
      saveState();
      renderMonthly();
    });
    const catDiv = document.createElement("div");
    catDiv.className = "habit-cat";
    catDiv.textContent = `${m.name} ${m.year}`;
    const nameEl = card.querySelector(".habit-name");
    if(nameEl && nameEl.parentElement) nameEl.parentElement.appendChild(catDiv);
    list.appendChild(card);
  });
}

/* ---------- FITNESS (simple exercise log) ---------- */
let fitnessSeg = "log";
let exerciseSelectedDate = todayKey();

document.querySelectorAll("#fitnessSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#fitnessSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    fitnessSeg = b.dataset.fseg;
    ["log","exercises","records","body"].forEach(s=>{
      document.getElementById("fseg-"+s).classList.toggle("hidden", s!==fitnessSeg);
    });
    renderFitness();
  });
});

function renderFitness(){
  if(fitnessSeg==="log") renderFitnessLog();
  else if(fitnessSeg==="exercises") renderExercisesManage();
  else if(fitnessSeg==="records") renderRecords();
  else renderBody();
}

/* ---- Log ---- */
function populateExerciseSelect(){
  const sel = document.getElementById("logExerciseSelect");
  if(state.exerciseNames.length===0){
    sel.innerHTML = `<option value="">Add an exercise first</option>`;
    return;
  }
  sel.innerHTML = state.exerciseNames.map(n=>`<option value="${escapeAttr(n)}">${escapeHtml(n)}</option>`).join("");
}
function renderFitnessLog(){
  const isToday = exerciseSelectedDate === todayKey();
  document.getElementById("exerciseDateLabel").textContent = isToday
    ? "Today"
    : new Date(exerciseSelectedDate).toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"short"});
  document.getElementById("nextExerciseDay").disabled = isToday;

  const stepsWrap = document.getElementById("stepsCardWrap");
  stepsWrap.classList.toggle("hidden", !state.settings.stepsOn);
  if(state.settings.stepsOn){
    document.getElementById("stepsInput").value = isToday ? (state.stepLogs[todayKey()] || "") : "";
    document.getElementById("stepsInput").disabled = !isToday;
  }

  populateExerciseSelect();

  const wrap = document.getElementById("exerciseLogList");
  wrap.innerHTML = "";
  const entries = state.exerciseLogs[exerciseSelectedDate] || [];
  if(entries.length===0){
    wrap.innerHTML = `<p class="hint">Nothing logged ${isToday?"today":"this day"} yet.</p>`;
  }
  entries.forEach(e=>{
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <div>
        <div class="task-title">${escapeHtml(e.exerciseName)}</div>
        <div class="task-meta">${e.sets} sets × ${e.reps} reps</div>
      </div>
      <div class="task-actions"><button class="task-icon-btn" data-act="del">✕</button></div>`;
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      state.exerciseLogs[exerciseSelectedDate] = state.exerciseLogs[exerciseSelectedDate].filter(x=>x.id!==e.id);
      saveState();
      renderFitnessLog();
    });
    wrap.appendChild(card);
  });
}
document.getElementById("prevExerciseDay").addEventListener("click", ()=>{
  const d = new Date(exerciseSelectedDate); d.setDate(d.getDate()-1);
  exerciseSelectedDate = fmtDate(d);
  renderFitnessLog();
});
document.getElementById("nextExerciseDay").addEventListener("click", ()=>{
  if(exerciseSelectedDate===todayKey()) return;
  const d = new Date(exerciseSelectedDate); d.setDate(d.getDate()+1);
  exerciseSelectedDate = fmtDate(d);
  renderFitnessLog();
});
document.getElementById("addExerciseLogBtn").addEventListener("click", ()=>{
  const name = document.getElementById("logExerciseSelect").value;
  const sets = +document.getElementById("logSetsInput").value;
  const reps = +document.getElementById("logRepsInput").value;
  if(!name){ toast("Add an exercise first"); return; }
  if(!sets || !reps){ toast("Enter sets and reps"); return; }
  if(!state.exerciseLogs[exerciseSelectedDate]) state.exerciseLogs[exerciseSelectedDate] = [];
  state.exerciseLogs[exerciseSelectedDate].push({id:Date.now()+"", exerciseName:name, sets, reps});
  saveState();
  document.getElementById("logSetsInput").value = "";
  document.getElementById("logRepsInput").value = "";
  toast("Logged");
  renderFitnessLog();
});

/* ---- Manage exercise list ---- */
function renderExercisesManage(){
  const wrap = document.getElementById("exerciseNameList");
  wrap.innerHTML = "";
  if(state.exerciseNames.length===0){
    wrap.innerHTML = `<p class="hint">No exercises yet — add your first one above.</p>`;
    return;
  }
  state.exerciseNames.forEach((name,idx)=>{
    const row = document.createElement("div");
    row.className = "manage-row";
    row.innerHTML = `<input type="text" value="${escapeAttr(name)}" /><button aria-label="Remove">✕</button>`;
    row.querySelector("input").addEventListener("change", (e)=>{
      const newName = e.target.value.trim();
      if(!newName){ e.target.value = name; return; }
      const oldName = name;
      state.exerciseNames[idx] = newName;
      Object.keys(state.exerciseLogs).forEach(k=>{
        state.exerciseLogs[k].forEach(entry=>{ if(entry.exerciseName===oldName) entry.exerciseName = newName; });
      });
      saveState();
      renderExercisesManage();
    });
    row.querySelector("button").addEventListener("click", ()=>{
      if(!confirm(`Remove "${name}"? Historical logs keep the name but it won't be selectable to log anymore.`)) return;
      state.exerciseNames.splice(idx,1);
      saveState();
      renderExercisesManage();
    });
    wrap.appendChild(row);
  });
}
document.getElementById("addExerciseNameBtn").addEventListener("click", ()=>{
  const input = document.getElementById("newExerciseNameInput");
  const val = input.value.trim();
  if(!val){ toast("Enter an exercise name"); return; }
  if(state.exerciseNames.includes(val)){ toast("Already in your list"); return; }
  state.exerciseNames.push(val);
  saveState();
  input.value = "";
  renderExercisesManage();
  toast("Exercise added");
});

/* ---- Records (all-time best sets / best reps per exercise) ---- */
function bestForExercise(name){
  let bestSets=0, bestSetsDate=null, bestReps=0, bestRepsDate=null;
  Object.keys(state.exerciseLogs).forEach(date=>{
    state.exerciseLogs[date].forEach(e=>{
      if(e.exerciseName!==name) return;
      if(e.sets>bestSets){ bestSets=e.sets; bestSetsDate=date; }
      if(e.reps>bestReps){ bestReps=e.reps; bestRepsDate=date; }
    });
  });
  return {bestSets, bestSetsDate, bestReps, bestRepsDate};
}
function renderRecords(){
  const wrap = document.getElementById("recordsList");
  wrap.innerHTML = "";
  if(state.exerciseNames.length===0){
    wrap.innerHTML = `<p class="hint">Add exercises and start logging to see your personal records here.</p>`;
    return;
  }
  state.exerciseNames.forEach(name=>{
    const {bestSets, bestSetsDate, bestReps, bestRepsDate} = bestForExercise(name);
    const card = document.createElement("div");
    card.className = "goal-card";
    card.innerHTML = `
      <div class="goal-title">${escapeHtml(name)}</div>
      <div class="goal-meta"><span>Best sets: ${bestSets||"—"}${bestSetsDate?" ("+new Date(bestSetsDate).toLocaleDateString(undefined,{day:"numeric",month:"short"})+")":""}</span></div>
      <div class="goal-meta"><span>Best reps: ${bestReps||"—"}${bestRepsDate?" ("+new Date(bestRepsDate).toLocaleDateString(undefined,{day:"numeric",month:"short"})+")":""}</span></div>`;
    wrap.appendChild(card);
  });
}
function computeExerciseLogStreak(){
  let streak=0;
  let d = new Date();
  while(true){
    const key = fmtDate(d);
    const log = state.exerciseLogs[key];
    if(log && log.length>0){ streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

/* ---- Body: profile height, weight/waist/bodyfat log, body-fat calculator, 3D model ---- */
document.getElementById("profileHeightInput").addEventListener("input", (e)=>{
  state.profile.heightCm = e.target.value ? +e.target.value : null;
  saveState();
  updateBodyModelFromLatest();
});
document.getElementById("addBodyLogBtn").addEventListener("click", ()=>{
  const weight = +document.getElementById("bodyWeightInput").value;
  const waist = document.getElementById("bodyWaistInput").value ? +document.getElementById("bodyWaistInput").value : null;
  const bodyFatPct = document.getElementById("bodyFatInput").value ? +document.getElementById("bodyFatInput").value : null;
  if(!weight || weight<=0){ toast("Enter a valid weight"); return; }
  state.bodyLogs.push({ id: Date.now()+"", date: todayKey(), weight, waist, bodyFatPct });
  saveState();
  document.getElementById("bodyWeightInput").value = "";
  document.getElementById("bodyWaistInput").value = "";
  document.getElementById("bodyFatInput").value = "";
  toast("Logged");
  renderBodyLog();
  updateBodyModelFromLatest();
});
function renderBodyLog(){
  const wrap = document.getElementById("bodyLogList");
  wrap.innerHTML = "";
  const entries = [...state.bodyLogs].sort((a,b)=> b.date.localeCompare(a.date)).slice(0,15);
  if(entries.length===0){ wrap.innerHTML = `<p class="hint">No entries yet.</p>`; return; }
  entries.forEach(e=>{
    const parts = [`${e.weight} kg`];
    if(e.waist) parts.push(`${e.waist} cm waist`);
    if(e.bodyFatPct!=null) parts.push(`${e.bodyFatPct}% body fat`);
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <div>
        <div class="task-title">${escapeHtml(parts.join(" · "))}</div>
        <div class="task-meta">${new Date(e.date).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"})}</div>
      </div>
      <div class="task-actions"><button class="task-icon-btn" data-act="del">✕</button></div>`;
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      state.bodyLogs = state.bodyLogs.filter(x=>x.id!==e.id);
      saveState();
      renderBodyLog();
      updateBodyModelFromLatest();
    });
    wrap.appendChild(card);
  });
}

/* Body fat % — U.S. Navy tape-measure method (estimate only) */
let bfSex = "male";
let lastBfResult = null;
document.querySelectorAll("#bfSexSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#bfSexSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    bfSex = b.dataset.sex;
    document.getElementById("bfHipWrap").classList.toggle("hidden", bfSex!=="female");
  });
});
document.getElementById("bfCalculateBtn").addEventListener("click", ()=>{
  const height = +document.getElementById("bfHeightInput").value;
  const neck = +document.getElementById("bfNeckInput").value;
  const waist = +document.getElementById("bfWaistInput").value;
  const hip = +document.getElementById("bfHipInput").value;
  if(!height || !neck || !waist || (bfSex==="female" && !hip)){
    toast("Fill in all the measurements");
    return;
  }
  let bf;
  if(bfSex==="male"){
    bf = 495 / (1.0324 - 0.19077*Math.log10(waist-neck) + 0.15456*Math.log10(height)) - 450;
  } else {
    bf = 495 / (1.29579 - 0.35004*Math.log10(waist+hip-neck) + 0.22100*Math.log10(height)) - 450;
  }
  if(!isFinite(bf) || isNaN(bf)){
    toast("Check your measurements — couldn't calculate");
    return;
  }
  bf = Math.max(2, Math.min(bf, 60));
  lastBfResult = Math.round(bf*10)/10;
  document.getElementById("bfResultOut").textContent = lastBfResult + "%";
  document.getElementById("bfResultRow").classList.remove("hidden");
  document.getElementById("bfUseValueBtn").classList.remove("hidden");
});
document.getElementById("bfUseValueBtn").addEventListener("click", ()=>{
  document.getElementById("bodyFatInput").value = lastBfResult;
  toast("Filled into the log form above — tap + Log entry to save it");
});

/* 3D body model (Three.js, loaded as a separate ES module — see body-model.js) */
let bodyModelInitialized = false;
let autoRotateOn = true;
window.addEventListener("bodymodel-ready", ()=>{ if(fitnessSeg==="body") initBodyModelIfNeeded(); });
function initBodyModelIfNeeded(){
  if(bodyModelInitialized) return;
  const canvas = document.getElementById("bodyModelCanvas");
  const fallback = document.getElementById("bodyModelFallback");
  if(!canvas || !window.BodyModel) return;
  try{
    window.BodyModel.init(canvas);
    bodyModelInitialized = true;
    updateBodyModelFromLatest();
  }catch(e){
    fallback.classList.remove("hidden");
    canvas.classList.add("hidden");
  }
}
function updateBodyModelFromLatest(){
  if(!bodyModelInitialized || !window.BodyModel) return;
  const latest = [...state.bodyLogs].sort((a,b)=> b.date.localeCompare(a.date))[0];
  window.BodyModel.applyBodyStats({
    heightCm: state.profile.heightCm,
    weightKg: latest ? latest.weight : null,
    bodyFatPct: latest ? latest.bodyFatPct : null,
  });
}
document.getElementById("bodyModelAutoRotateBtn").addEventListener("click", ()=>{
  autoRotateOn = !autoRotateOn;
  if(window.BodyModel) window.BodyModel.setAutoRotate(autoRotateOn);
});
function renderBody(){
  document.getElementById("profileHeightInput").value = state.profile.heightCm || "";
  renderBodyLog();
  initBodyModelIfNeeded();
  if(bodyModelInitialized && window.BodyModel) window.BodyModel.resize();
  else {
    setTimeout(()=>{
      if(!bodyModelInitialized && fitnessSeg==="body"){
        document.getElementById("bodyModelFallback").classList.remove("hidden");
        document.getElementById("bodyModelCanvas").classList.add("hidden");
      }
    }, 2500);
  }
}

/* ---------- ANALYTICS ---------- */
let monthlyChartInstance=null, weeklyTrendChartInstance=null, weightChartInstance=null, stepsChartInstance=null;
function renderAnalytics(){
  const dailyTotal = state.habits.daily.length;
  let ytdDone=0, ytdPossible=0, monthPcts=[];
  MONTHS.forEach((m,i)=>{
    const start = monthStartDate(i);
    let done=0;
    for(let d=1; d<=m.days; d++){
      const key = fmtDate(new Date(start.getFullYear(), start.getMonth(), d));
      const log = state.dailyLogs[key] || [];
      done += state.habits.daily.filter((h,hi)=> entryCountsAsDone(log[hi], h)).length;
    }
    const possible = dailyTotal*m.days;
    ytdDone += done; ytdPossible += possible;
    monthPcts.push(possible ? done/possible : 0);
  });
  const overallPct = ytdPossible ? ytdDone/ytdPossible : 0;
  document.getElementById("anaOverallPct").textContent = Math.round(overallPct*100)+"%";
  let bestIdx = monthPcts.reduce((best,v,i,arr)=> v>arr[best]?i:best, 0);
  document.getElementById("anaBestMonth").textContent = monthPcts[bestIdx]>0 ? MONTHS[bestIdx].name.slice(0,3) : "—";
  document.getElementById("anaStreak").textContent = computeStreak();
  let totalSavings=0;
  for(let i=0;i<12;i++){ totalSavings += monthSavings(i); }
  document.getElementById("anaSavings").textContent = "₹"+totalSavings.toLocaleString("en-IN");

  const mLabels = MONTHS.map(m=>m.name.slice(0,3));
  const mData = monthPcts.map(p=>Math.round(p*100));
  const ctx1 = document.getElementById("monthlyChart");
  if(monthlyChartInstance) monthlyChartInstance.destroy();
  monthlyChartInstance = new Chart(ctx1, {
    type:"bar",
    data:{labels:mLabels, datasets:[{data:mData, backgroundColor:"#F9C74F", borderRadius:6}]},
    options:{responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
      scales:{y:{min:0,max:100,ticks:{color:"#8991B3",callback:v=>v+"%"},grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3"},grid:{display:false}}}}
  });

  const wLabels=[], wData=[];
  const nowWeek = weekIndexOf(new Date());
  for(let i=Math.max(0,nowWeek-11); i<=nowWeek; i++){
    const log = state.weeklyLogs[i] || [];
    const total = state.habits.weekly.length;
    wLabels.push("W"+(i+1));
    wData.push(total ? Math.round((log.filter(Boolean).length/total)*100) : 0);
  }
  const ctx2 = document.getElementById("weeklyTrendChart");
  if(weeklyTrendChartInstance) weeklyTrendChartInstance.destroy();
  weeklyTrendChartInstance = new Chart(ctx2, {
    type:"line",
    data:{labels:wLabels, datasets:[{data:wData, borderColor:"#C9A6F7", backgroundColor:"rgba(201,166,247,.12)", tension:.4, fill:true, pointRadius:3, pointBackgroundColor:"#C9A6F7", borderWidth:2}]},
    options:{responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
      scales:{y:{min:0,max:100,ticks:{color:"#8991B3",callback:v=>v+"%"},grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3"},grid:{display:false}}}}
  });

  const weightEntries = [...Object.values(state.weightLogs).filter(Boolean), ...state.bodyLogs.map(b=>({date:b.date, weight:b.weight}))]
    .sort((a,b)=> new Date(a.date)-new Date(b.date));
  const ctx3 = document.getElementById("weightChart");
  if(weightChartInstance) weightChartInstance.destroy();
  weightChartInstance = new Chart(ctx3, {
    type:"line",
    data:{labels:weightEntries.map(e=>new Date(e.date).toLocaleDateString(undefined,{day:"numeric",month:"short"})),
      datasets:[{data:weightEntries.map(e=>e.weight), borderColor:"#8FE3D0", backgroundColor:"rgba(143,227,208,.12)", tension:.35, fill:true, pointRadius:3, pointBackgroundColor:"#8FE3D0", borderWidth:2}]},
    options:{responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
      scales:{y:{ticks:{color:"#8991B3"},grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3"},grid:{display:false}}}}
  });

  const sLabels=[], sData=[];
  for(let i=13;i>=0;i--){
    const d=new Date(); d.setDate(d.getDate()-i);
    sLabels.push(d.toLocaleDateString(undefined,{day:"numeric",month:"short"}));
    sData.push(state.stepLogs[fmtDate(d)] || 0);
  }
  const ctx4 = document.getElementById("stepsChart");
  if(stepsChartInstance) stepsChartInstance.destroy();
  stepsChartInstance = new Chart(ctx4, {
    type:"bar",
    data:{labels:sLabels, datasets:[{data:sData, backgroundColor:"#F4879C", borderRadius:6}]},
    options:{responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
      scales:{y:{ticks:{color:"#8991B3"},grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3"},grid:{display:false}}}}
  });

  /* Habit insights: numeric target completion + best numeric habit + completion by time of day */
  const numericHabits = state.habits.daily.map((h,i)=>({h,i})).filter(x=>habitType(x.h)==="numeric");
  if(numericHabits.length>0){
    const perHabitPct = numericHabits.map(({h,i})=>{
      let sum=0, count=0;
      Object.keys(state.dailyLogs).forEach(dateKey=>{
        const log = state.dailyLogs[dateKey];
        if(log && log[i]!==undefined){ sum += entryProgress(log[i],h).pct; count++; }
      });
      return {name:habitName(h), avg: count? sum/count : 0};
    });
    const overallNumericAvg = perHabitPct.reduce((s,p)=>s+p.avg,0)/perHabitPct.length;
    document.getElementById("anaNumericAvg").textContent = Math.round(overallNumericAvg*100)+"%";
    const best = perHabitPct.reduce((b,p)=> p.avg>b.avg?p:b, perHabitPct[0]);
    document.getElementById("anaBestNumeric").textContent = best.avg>0 ? best.name : "—";
  } else {
    document.getElementById("anaNumericAvg").textContent = "—";
    document.getElementById("anaBestNumeric").textContent = "—";
  }
  const timeWrap = document.getElementById("anaTimeOfDayList");
  timeWrap.innerHTML = TIME_ORDER.map(t=>{
    const idxs = state.habits.daily.map((h,i)=>({h,i})).filter(x=>habitTime(x.h)===t);
    if(idxs.length===0) return "";
    let sum=0,count=0;
    Object.keys(state.dailyLogs).forEach(dateKey=>{
      const log = state.dailyLogs[dateKey];
      idxs.forEach(({h,i})=>{ if(log && log[i]!==undefined){ sum += entryCountsAsDone(log[i],h)?1:0; count++; } });
    });
    const pct = count ? Math.round((sum/count)*100) : 0;
    return `<div class="time-of-day-row"><span>${TIME_LABELS[t]}</span><b class="mono">${pct}%</b></div>`;
  }).join("");

  /* Fitness extras */
  const daysTrained = Object.keys(state.exerciseLogs).filter(k=>state.exerciseLogs[k].length>0).length;
  document.getElementById("anaCustomWorkouts").textContent = daysTrained;
  let totalSetsLogged = 0;
  Object.values(state.exerciseLogs).forEach(entries=> entries.forEach(e=> totalSetsLogged += (e.sets||0)));
  document.getElementById("anaCustomExUsage").textContent = totalSetsLogged;

  /* Money summary */
  const {start:wS, end:wE} = weekRangeFor(new Date());
  const wTx = txInRange(wS,wE);
  const wIncome = sumTx(wTx,"income"), wExpense = sumTx(wTx,"expense");
  document.getElementById("anaWeekIncome").textContent = "₹"+wIncome.toLocaleString("en-IN");
  document.getElementById("anaWeekExpense").textContent = "₹"+wExpense.toLocaleString("en-IN");
  document.getElementById("anaWeekSaved").textContent = "₹"+(wIncome-wExpense).toLocaleString("en-IN");

  const curMonthIdx = monthIndexOf(new Date());
  const mIncome = monthIncome(curMonthIdx), mExpense = monthExpenseTotal(curMonthIdx);
  const mRate = mIncome ? Math.round(((mIncome-mExpense)/mIncome)*100) : 0;
  document.getElementById("anaMonthIncome").textContent = "₹"+mIncome.toLocaleString("en-IN");
  document.getElementById("anaMonthExpense").textContent = "₹"+mExpense.toLocaleString("en-IN");
  document.getElementById("anaMonthRate").textContent = mRate+"%";
  document.getElementById("anaAvgDailySpend").textContent = "₹"+Math.round(mExpense/MONTHS[curMonthIdx].days).toLocaleString("en-IN");
  renderInsights();
}

/* ---------- MONEY (daily transaction system) ---------- */
let txEditType = "expense";
let editingTxId = null;
let moneyMonthIdx = monthIndexOf(new Date());
let moneySeg = "today";
let moneyChartInstance=null, categoryChartInstance=null, dailyTrendChartInstance=null, weekCompareChartInstance=null;

document.querySelectorAll("#txTypeSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#txTypeSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    txEditType = b.dataset.txtype;
    populateTxCategoryOptions();
  });
});
function populateTxCategoryOptions(){
  const sel = document.getElementById("txCategoryInput");
  const cats = txEditType==="income" ? state.incomeCategories : state.expenseCategories;
  sel.innerHTML = cats.map(c=>`<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join("");
}
document.getElementById("addTxBtn").addEventListener("click", ()=>{
  const amount = +document.getElementById("txAmountInput").value;
  const category = document.getElementById("txCategoryInput").value;
  const date = document.getElementById("txDateInput").value || todayKey();
  const note = document.getElementById("txNoteInput").value.trim();
  if(!amount || amount<=0){ toast("Enter a valid amount"); return; }
  if(editingTxId){
    const tx = state.transactions.find(t=>t.id===editingTxId);
    if(tx){ tx.type=txEditType; tx.amount=amount; tx.category=category; tx.date=date; tx.note=note; }
    editingTxId = null;
    document.getElementById("addTxBtn").textContent = "+ Add transaction";
    document.getElementById("cancelTxEditBtn").classList.add("hidden");
    toast("Transaction updated");
  } else {
    state.transactions.push({id:Date.now()+"", type:txEditType, amount, category, date, note});
    toast("Transaction added");
  }
  saveState();
  document.getElementById("txAmountInput").value = "";
  document.getElementById("txNoteInput").value = "";
  renderMoney();
});
document.getElementById("cancelTxEditBtn").addEventListener("click", ()=>{
  editingTxId = null;
  document.getElementById("addTxBtn").textContent = "+ Add transaction";
  document.getElementById("cancelTxEditBtn").classList.add("hidden");
  document.getElementById("txAmountInput").value = "";
  document.getElementById("txNoteInput").value = "";
});
function beginEditTx(tx){
  editingTxId = tx.id;
  txEditType = tx.type;
  document.querySelectorAll("#txTypeSeg .seg-btn").forEach(x=> x.classList.toggle("active", x.dataset.txtype===tx.type));
  populateTxCategoryOptions();
  document.getElementById("txAmountInput").value = tx.amount;
  document.getElementById("txCategoryInput").value = tx.category;
  document.getElementById("txDateInput").value = tx.date;
  document.getElementById("txNoteInput").value = tx.note||"";
  document.getElementById("addTxBtn").textContent = "Update transaction";
  document.getElementById("cancelTxEditBtn").classList.remove("hidden");
  window.scrollTo(0,0);
}
function deleteTx(id){
  if(!confirm("Delete this transaction?")) return;
  state.transactions = state.transactions.filter(t=>t.id!==id);
  saveState();
  renderMoney();
  toast("Transaction deleted");
}

document.querySelectorAll("#moneySeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#moneySeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    moneySeg = b.dataset.mseg2;
    ["today","week","month","history"].forEach(s=> document.getElementById("mseg-"+s).classList.toggle("hidden", s!==moneySeg));
    renderMoney();
  });
});
document.getElementById("prevMoneyMonth").addEventListener("click", ()=>{ moneyMonthIdx=(moneyMonthIdx+11)%12; renderMoney(); });
document.getElementById("nextMoneyMonth").addEventListener("click", ()=>{ moneyMonthIdx=(moneyMonthIdx+1)%12; renderMoney(); });

document.getElementById("initialBalanceInput").addEventListener("input", (e)=>{
  state.money.initialBalance = +e.target.value || 0;
  saveState();
  renderMoney();
});

function renderMoney(){
  document.getElementById("initialBalanceInput").value = state.money.initialBalance || "";
  document.getElementById("txDateInput").value = document.getElementById("txDateInput").value || todayKey();
  populateTxCategoryOptions();

  if(moneySeg==="today") renderMoneyToday();
  else if(moneySeg==="week") renderMoneyWeek();
  else if(moneySeg==="month") renderMoneyMonth();
  else renderMoneyHistory();

  renderCategoryManagement();
}

function renderMoneyToday(){
  const key = todayKey();
  const txs = txOnDate(key);
  const income = sumTx(txs,"income"), spent = sumTx(txs,"expense"), saved = income-spent;
  document.getElementById("todayIncomeOut").textContent = "₹"+income.toLocaleString("en-IN");
  document.getElementById("todaySpentOut").textContent = "₹"+spent.toLocaleString("en-IN");
  document.getElementById("todaySavedOut").textContent = (saved<0?"-":"")+"₹"+Math.abs(saved).toLocaleString("en-IN");

  const catTotals = {};
  txs.filter(t=>t.type==="expense").forEach(t=> catTotals[t.category]=(catTotals[t.category]||0)+t.amount);
  const wrap = document.getElementById("todaySpendingList");
  const cats = Object.keys(catTotals);
  wrap.innerHTML = cats.length ? cats.map(c=>`<div class="spend-row"><span>${escapeHtml(c)}</span><b class="mono">₹${catTotals[c].toLocaleString("en-IN")}</b></div>`).join("")
    : `<p class="hint">No spending logged today.</p>`;

  let cumulative = state.money.initialBalance || 0;
  const allSorted = [...state.transactions].sort((a,b)=> a.date.localeCompare(b.date));
  allSorted.forEach(t=>{ if(t.date<=key) cumulative += (t.type==="income"?t.amount:-t.amount); });
  document.getElementById("runningBalanceOut").textContent = "₹"+cumulative.toLocaleString("en-IN");
}

function renderMoneyWeek(){
  const {start,end} = weekRangeFor(new Date());
  const txs = txInRange(start,end);
  const income = sumTx(txs,"income"), spent = sumTx(txs,"expense"), saved = income-spent;
  const rate = income ? Math.round((saved/income)*100) : 0;
  document.getElementById("weekIncomeOut").textContent = "₹"+income.toLocaleString("en-IN");
  document.getElementById("weekSpentOut").textContent = "₹"+spent.toLocaleString("en-IN");
  document.getElementById("weekSavedOut").textContent = (saved<0?"-":"")+"₹"+Math.abs(saved).toLocaleString("en-IN");
  document.getElementById("weekRateOut").textContent = rate+"%";

  const catTotals = {};
  txs.filter(t=>t.type==="expense").forEach(t=> catTotals[t.category]=(catTotals[t.category]||0)+t.amount);
  const wrap = document.getElementById("weekCategoryList");
  const cats = Object.keys(catTotals);
  wrap.innerHTML = cats.length ? cats.map(c=>`<div class="spend-row"><span>${escapeHtml(c)}</span><b class="mono">₹${catTotals[c].toLocaleString("en-IN")}</b></div>`).join("")
    : `<p class="hint">No spending logged this week.</p>`;

  const ctx = document.getElementById("weekCompareChart");
  if(weekCompareChartInstance) weekCompareChartInstance.destroy();
  weekCompareChartInstance = new Chart(ctx, {
    type:"bar",
    data:{labels:["Income","Spent","Saved"], datasets:[{data:[income,spent,saved], backgroundColor:["#8FE3D0","#F4879C","#F9C74F"], borderRadius:6}]},
    options:{responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
      scales:{y:{ticks:{color:"#8991B3"},grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3"},grid:{display:false}}}}
  });
}

function renderMoneyMonth(){
  const m = MONTHS[moneyMonthIdx];
  document.getElementById("moneyMonthLabel").textContent = `${m.name} ${m.year}`;
  const income = monthIncome(moneyMonthIdx), spent = monthExpenseTotal(moneyMonthIdx), saved = income-spent;
  const rate = income ? Math.round((saved/income)*100) : 0;
  document.getElementById("monthIncomeOut").textContent = "₹"+income.toLocaleString("en-IN");
  document.getElementById("monthSpentOut").textContent = "₹"+spent.toLocaleString("en-IN");
  document.getElementById("monthSavedOut").textContent = (saved<0?"-":"")+"₹"+Math.abs(saved).toLocaleString("en-IN");
  document.getElementById("monthRateOut").textContent = rate+"%";
  document.getElementById("monthAvgSpendOut").textContent = "₹"+Math.round(spent/m.days).toLocaleString("en-IN");
  document.getElementById("monthAvgSaveOut").textContent = "₹"+Math.round(saved/m.days).toLocaleString("en-IN");

  const {start,end} = monthRangeForIndex(moneyMonthIdx);
  const txs = txInRange(start,end);
  const catTotals = {};
  txs.filter(t=>t.type==="expense").forEach(t=> catTotals[t.category]=(catTotals[t.category]||0)+t.amount);
  const catLabels = Object.keys(catTotals);
  const ctxCat = document.getElementById("categoryChart");
  if(categoryChartInstance) categoryChartInstance.destroy();
  if(catLabels.length>0){
    categoryChartInstance = new Chart(ctxCat, {
      type:"bar",
      data:{labels:catLabels, datasets:[{data:catLabels.map(l=>catTotals[l]), backgroundColor:"#C9A6F7", borderRadius:6}]},
      options:{indexAxis:"y", responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
        scales:{x:{ticks:{color:"#8991B3"},grid:{color:"#2D2D44"}}, y:{ticks:{color:"#8991B3"},grid:{display:false}}}}
    });
  }

  const dayLabels=[], dayData=[];
  const start_ = monthStartDate(moneyMonthIdx);
  for(let d=1; d<=m.days; d++){
    const key = fmtDate(new Date(start_.getFullYear(), start_.getMonth(), d));
    dayLabels.push(String(d));
    dayData.push(sumTx(txOnDate(key),"expense"));
  }
  const ctxDaily = document.getElementById("dailyTrendChart");
  if(dailyTrendChartInstance) dailyTrendChartInstance.destroy();
  dailyTrendChartInstance = new Chart(ctxDaily, {
    type:"bar",
    data:{labels:dayLabels, datasets:[{data:dayData, backgroundColor:"#F4879C", borderRadius:4}]},
    options:{responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
      scales:{y:{ticks:{color:"#8991B3"},grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3",maxRotation:0,autoSkip:true,maxTicksLimit:10},grid:{display:false}}}}
  });

  renderMoneyChart();
}
function renderMoneyChart(){
  const labels = MONTHS.map(m=>m.name.slice(0,3));
  const data = MONTHS.map((m,i)=> monthSavings(i));
  const ctx = document.getElementById("moneyChart");
  if(moneyChartInstance) moneyChartInstance.destroy();
  moneyChartInstance = new Chart(ctx, {
    type:"bar",
    data:{ labels, datasets:[{ data, backgroundColor: data.map(v=>v>=0?"#8FE3D0":"#F4879C"), borderRadius:6 }]},
    options:{
      responsive:true, animation:{duration:700, easing:"easeOutQuart"},
      plugins:{legend:{display:false}},
      scales:{ y:{ticks:{color:"#8991B3"}, grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3"}, grid:{display:false}} }
    }
  });
}

function populateHistoryCategoryFilter(){
  const sel = document.getElementById("histFilterCategory");
  const all = [...new Set([...state.incomeCategories, ...state.expenseCategories])];
  sel.innerHTML = `<option value="all">All categories</option>` + all.map(c=>`<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join("");
}
["histFilterType","histFilterCategory","histFilterFrom","histFilterTo"].forEach(id=>{
  document.getElementById(id).addEventListener("input", renderMoneyHistory);
  document.getElementById(id).addEventListener("change", renderMoneyHistory);
});
function renderMoneyHistory(){
  populateHistoryCategoryFilter();
  const typeF = document.getElementById("histFilterType").value;
  const catF = document.getElementById("histFilterCategory").value;
  const fromF = document.getElementById("histFilterFrom").value;
  const toF = document.getElementById("histFilterTo").value;

  let list = [...state.transactions];
  if(typeF!=="all") list = list.filter(t=>t.type===typeF);
  if(catF!=="all") list = list.filter(t=>t.category===catF);
  if(fromF) list = list.filter(t=>t.date>=fromF);
  if(toF) list = list.filter(t=>t.date<=toF);
  list.sort((a,b)=> b.date.localeCompare(a.date));

  const wrap = document.getElementById("historyTxList");
  wrap.innerHTML = "";
  if(list.length===0){ wrap.innerHTML = `<p class="hint">No transactions match these filters.</p>`; return; }

  const todayStr = todayKey();
  const yestStr = fmtDate(new Date(Date.now()-86400000));
  let lastHeader = null;
  list.forEach(t=>{
    const headerLabel = t.date===todayStr ? "Today" : t.date===yestStr ? "Yesterday" : new Date(t.date).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});
    if(headerLabel!==lastHeader){
      const h = document.createElement("div");
      h.className = "tx-day-header";
      h.textContent = headerLabel;
      wrap.appendChild(h);
      lastHeader = headerLabel;
    }
    const row = document.createElement("div");
    row.className = "tx-row";
    row.innerHTML = `
      <div>
        <div class="tx-amount ${t.type}">${t.type==="income"?"+":"−"}₹${t.amount.toLocaleString("en-IN")}</div>
        <div class="tx-meta">${escapeHtml(t.category)}${t.note?" · "+escapeHtml(t.note):""}</div>
      </div>
      <div class="tx-actions">
        <button class="task-icon-btn" data-act="edit">✎</button>
        <button class="task-icon-btn" data-act="del">✕</button>
      </div>`;
    row.querySelector('[data-act="edit"]').addEventListener("click", ()=> beginEditTx(t));
    row.querySelector('[data-act="del"]').addEventListener("click", ()=> deleteTx(t.id));
    wrap.appendChild(row);
  });
}

function renderCategoryManagement(){
  const incWrap = document.getElementById("incomeCategoryChips");
  incWrap.innerHTML = "";
  state.incomeCategories.forEach(cat=>{
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `<span>${escapeHtml(cat)}</span><button aria-label="Remove">✕</button>`;
    chip.querySelector("button").addEventListener("click", ()=>{
      if(state.incomeCategories.length<=1){ toast("Keep at least one category"); return; }
      state.incomeCategories = state.incomeCategories.filter(c=>c!==cat);
      saveState(); renderCategoryManagement(); populateTxCategoryOptions();
    });
    incWrap.appendChild(chip);
  });
  const expWrap = document.getElementById("expenseCategoryChips");
  expWrap.innerHTML = "";
  state.expenseCategories.forEach(cat=>{
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `<span>${escapeHtml(cat)}</span><button aria-label="Remove">✕</button>`;
    chip.querySelector("button").addEventListener("click", ()=>{
      if(state.expenseCategories.length<=1){ toast("Keep at least one category"); return; }
      state.expenseCategories = state.expenseCategories.filter(c=>c!==cat);
      saveState(); renderCategoryManagement(); populateTxCategoryOptions();
    });
    expWrap.appendChild(chip);
  });
}
document.getElementById("addIncomeCategoryBtn").addEventListener("click", ()=>{
  const input = document.getElementById("newIncomeCategoryInput");
  const val = input.value.trim();
  if(!val) return;
  if(state.incomeCategories.includes(val)){ toast("Category already exists"); return; }
  state.incomeCategories.push(val);
  saveState(); input.value=""; renderCategoryManagement(); populateTxCategoryOptions();
});
document.getElementById("addExpenseCategoryBtn").addEventListener("click", ()=>{
  const input = document.getElementById("newExpenseCategoryInput");
  const val = input.value.trim();
  if(!val) return;
  if(state.expenseCategories.includes(val)){ toast("Category already exists"); return; }
  state.expenseCategories.push(val);
  saveState(); input.value=""; renderCategoryManagement(); populateTxCategoryOptions();
});

/* ---------- GOALS ---------- */
document.getElementById("addGoalBtn").addEventListener("click", ()=>{
  const item = prompt("What do you want to buy?");
  if(!item) return;
  const cost = +prompt("Cost (₹)?", "1000") || 0;
  const dateStr = prompt("Target date (YYYY-MM-DD)?", fmtDate(new Date(Date.now()+30*86400000)));
  state.goals.push({item, cost, targetDate: dateStr, saved:0});
  saveState();
  renderGoals();
  toast("Goal added");
});
function goalRequirements(g){
  const remaining = Math.max(g.cost - (g.saved||0), 0);
  const target = g.targetDate ? new Date(g.targetDate) : null;
  const daysLeft = target ? Math.max(Math.ceil((target - new Date())/86400000),0) : null;
  const weeksLeft = daysLeft!==null ? Math.max(Math.ceil(daysLeft/7),0) : null;
  const perDay = daysLeft ? Math.ceil(remaining/Math.max(daysLeft,1)) : remaining;
  const perWeek = weeksLeft ? Math.ceil(remaining/Math.max(weeksLeft,1)) : remaining;
  return {remaining, daysLeft, weeksLeft, perDay, perWeek};
}
function renderBudgetOverview(){
  const card = document.getElementById("budgetOverviewCard");
  const active = state.goals.filter(g => (g.cost - (g.saved||0)) > 0);
  if(active.length===0){
    card.innerHTML = `<p class="hint">No active goals yet — add one below to see combined budget needs here.</p>`;
    return;
  }
  let combinedPerDay=0, combinedPerWeek=0;
  active.forEach(g=>{
    const r = goalRequirements(g);
    combinedPerDay += r.perDay;
    combinedPerWeek += r.perWeek;
  });
  const combinedPerMonth = Math.round(combinedPerWeek * 4.345);
  const curMonthIdx = monthIndexOf(new Date());
  const availableMonthly = Math.max(monthSavings(curMonthIdx), 0);
  const withinBudget = combinedPerMonth <= availableMonthly;
  const coverage = availableMonthly>0 ? availableMonthly/combinedPerMonth : (combinedPerMonth===0?1:0);
  let pillCls = "pill-excellent", pillLabel = "Within budget";
  if(coverage < 1 && coverage >= 0.7){ pillCls="pill-fair"; pillLabel="Tight"; }
  else if(coverage < 0.7){ pillCls="pill-poor"; pillLabel="Over budget"; }

  card.innerHTML = `
    <h3 class="section-title" style="margin-top:0">Combined budget across ${active.length} active goal${active.length>1?"s":""}</h3>
    <div class="budget-row"><span>Combined / day</span><b>₹${combinedPerDay.toLocaleString("en-IN")}</b></div>
    <div class="budget-row"><span>Combined / week</span><b>₹${combinedPerWeek.toLocaleString("en-IN")}</b></div>
    <div class="budget-row"><span>Combined / month (approx)</span><b>₹${combinedPerMonth.toLocaleString("en-IN")}</b></div>
    <div class="budget-row"><span>This month's available savings</span><b>₹${availableMonthly.toLocaleString("en-IN")}</b></div>
    <div class="rating-row" style="margin-top:10px;">
      <span>${withinBudget ? "Your goals fit within this month's savings." : `Short by ₹${(combinedPerMonth-availableMonthly).toLocaleString("en-IN")}/month — goals may not all land on schedule.`}</span>
      <span class="rating-pill ${pillCls}">${pillLabel}</span>
    </div>`;
}
function renderGoals(){
  renderBudgetOverview();
  const list = document.getElementById("goalsList");
  list.innerHTML = "";
  if(state.goals.length===0){ list.innerHTML = `<p class="hint">No goals yet. Tap "+ Add a goal" to start.</p>`; return; }
  state.goals.forEach((g, idx)=>{
    const {remaining, daysLeft, perDay, perWeek} = goalRequirements(g);
    const target = g.targetDate ? new Date(g.targetDate) : null;
    const pct = g.cost ? Math.min((g.saved||0)/g.cost,1)*100 : 0;
    const status = remaining<=0 ? "Saved!" : (target && target<new Date() ? "Overdue" : "In progress");

    const card = document.createElement("div");
    card.className = "goal-card";
    card.innerHTML = `
      <div class="goal-title">${escapeHtml(g.item)} — ₹${g.cost.toLocaleString("en-IN")}</div>
      <div class="goal-bar-track"><div class="goal-bar-fill" style="width:${pct}%"></div></div>
      <div class="goal-meta"><span>Saved ₹${(g.saved||0).toLocaleString("en-IN")}</span><span>${status}</span></div>
      <div class="goal-meta"><span>${daysLeft!==null?daysLeft+" days left":"no date"}</span><span>₹${perDay}/day · ₹${perWeek}/wk</span></div>
      <div class="goal-actions">
        <button class="mini-btn" data-act="add">+ Add saved</button>
        <button class="mini-btn delete" data-act="del">Delete</button>
      </div>`;
    card.querySelector('[data-act="add"]').addEventListener("click", ()=>{
      const amt = +prompt("How much did you save just now (₹)?","0") || 0;
      g.saved = (g.saved||0) + amt;
      saveState(); renderGoals();
    });
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      if(confirm("Delete this goal?")){ state.goals.splice(idx,1); saveState(); renderGoals(); }
    });
    list.appendChild(card);
  });
}

/* ---------- LEARN ---------- */
document.getElementById("addLearnBtn").addEventListener("click", ()=>{
  const topic = prompt("What do you want to learn?");
  if(!topic) return;
  const deadline = prompt("Deadline (YYYY-MM-DD)?", fmtDate(new Date(Date.now()+60*86400000)));
  state.learn.push({topic, deadline, priority:"Medium", status:"Not Started"});
  saveState(); renderLearn();
  toast("Added to learning list");
});
function renderLearn(){
  const list = document.getElementById("learnList");
  list.innerHTML = "";
  if(state.learn.length===0){ list.innerHTML = `<p class="hint">Nothing here yet. Tap "+ Add something to learn".</p>`; return; }
  const statusMap = {"Not Started":"status-notstarted","In Progress":"status-inprogress","Done":"status-done"};
  state.learn.forEach((l, idx)=>{
    const deadline = l.deadline ? new Date(l.deadline) : null;
    const daysLeft = deadline ? Math.ceil((deadline-new Date())/86400000) : null;
    const card = document.createElement("div");
    card.className = "learn-card";
    card.innerHTML = `
      <div class="learn-row">
        <div>
          <div class="goal-title">${escapeHtml(l.topic)}</div>
          <div class="hint">${deadline? (daysLeft>=0? daysLeft+" days left" : "overdue") : "no deadline"}</div>
        </div>
        <span class="learn-status ${statusMap[l.status]||""}">${l.status}</span>
      </div>
      <div class="goal-actions">
        <button class="mini-btn" data-act="cycle">Change status</button>
        <button class="mini-btn delete" data-act="del">Delete</button>
      </div>`;
    card.querySelector('[data-act="cycle"]').addEventListener("click", ()=>{
      const order = ["Not Started","In Progress","Done"];
      l.status = order[(order.indexOf(l.status)+1)%order.length];
      saveState(); renderLearn();
    });
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      if(confirm("Delete this item?")){ state.learn.splice(idx,1); saveState(); renderLearn(); }
    });
    list.appendChild(card);
  });
}

/* ---------- CALENDAR ---------- */
let calMonthIdx = monthIndexOf(new Date());
let calSelectedDate = todayKey();

document.getElementById("prevCalMonth").addEventListener("click", ()=>{ calMonthIdx=(calMonthIdx+11)%12; renderCalendar(); });
document.getElementById("nextCalMonth").addEventListener("click", ()=>{ calMonthIdx=(calMonthIdx+1)%12; renderCalendar(); });

document.getElementById("addTaskBtn").addEventListener("click", ()=>{
  const title = document.getElementById("taskTitleInput").value.trim();
  const due = document.getElementById("taskDateInput").value;
  const notes = document.getElementById("taskNotesInput").value.trim();
  const repeat = document.getElementById("taskRepeatInput").value;
  if(!title){ toast("Enter a task title"); return; }
  if(!due){ toast("Pick a due date"); return; }
  const recurrence = makeRecurrence(repeat, due);
  if(recurrence){
    generateSeriesInstances(Date.now()+"-series", title, notes, recurrence, due);
  } else {
    state.tasks.push({ id: Date.now()+"", title, dueDate: due, notes, done:false, lastNotifiedDate:null });
  }
  saveState();
  document.getElementById("taskTitleInput").value = "";
  document.getElementById("taskDateInput").value = "";
  document.getElementById("taskNotesInput").value = "";
  document.getElementById("taskRepeatInput").value = "none";
  toast(recurrence ? "Recurring task added" : "Task added");
  calSelectedDate = due;
  calMonthIdx = monthIndexOf(new Date(due));
  renderCalendar();
});

/* recurring task generation */
const RECUR_HORIZON_DAYS = 60;
const RECUR_MAX_INSTANCES = 90;
function makeRecurrence(type, dueDateStr){
  if(type==="none" || !type) return null;
  const d = new Date(dueDateStr);
  if(type==="daily") return {type:"daily"};
  if(type==="weekly") return {type:"weekly", weekday: d.getDay()};
  if(type==="monthly") return {type:"monthly", day: d.getDate()};
  return null;
}
function nextOccurrence(dateStr, recurrence){
  const d = new Date(dateStr);
  if(recurrence.type==="daily"){ d.setDate(d.getDate()+1); return fmtDate(d); }
  if(recurrence.type==="weekly"){ d.setDate(d.getDate()+7); return fmtDate(d); }
  if(recurrence.type==="monthly"){ d.setMonth(d.getMonth()+1); return fmtDate(d); }
  return null;
}
function generateSeriesInstances(seriesId, title, notes, recurrence, startDate){
  let cur = startDate;
  const horizonDate = new Date(); horizonDate.setDate(horizonDate.getDate()+RECUR_HORIZON_DAYS);
  const horizonKey = fmtDate(horizonDate);
  let count=0;
  while(cur <= horizonKey && count < RECUR_MAX_INSTANCES){
    state.tasks.push({id: Date.now()+"-"+count, seriesId, title, dueDate:cur, notes, done:false, lastNotifiedDate:null, recurrence});
    count++;
    const next = nextOccurrence(cur, recurrence);
    if(!next) break;
    cur = next;
  }
}
function topUpRecurringTasks(){
  const seriesIds = [...new Set(state.tasks.filter(t=>t.seriesId).map(t=>t.seriesId))];
  let changed=false;
  const horizonDate = new Date(); horizonDate.setDate(horizonDate.getDate()+RECUR_HORIZON_DAYS);
  const horizonKey = fmtDate(horizonDate);
  seriesIds.forEach(sid=>{
    const instances = state.tasks.filter(t=>t.seriesId===sid);
    if(instances.length===0) return;
    const latest = instances.reduce((a,b)=> a.dueDate>b.dueDate?a:b);
    if(latest.dueDate < horizonKey){
      const next = nextOccurrence(latest.dueDate, latest.recurrence);
      if(next){ generateSeriesInstances(sid, latest.title, latest.notes, latest.recurrence, next); changed=true; }
    }
  });
  if(changed) saveState();
}

function tasksOnDate(dateKey){ return state.tasks.filter(t => t.dueDate === dateKey); }

function renderCalendar(){
  topUpRecurringTasks();
  const m = MONTHS[calMonthIdx];
  document.getElementById("calMonthLabel").textContent = `${m.name} ${m.year}`;
  const start = monthStartDate(calMonthIdx);
  const leading = (start.getDay()+6)%7; // Monday-first offset
  const grid = document.getElementById("calGrid");
  grid.innerHTML = "";
  ["Mo","Tu","We","Th","Fr","Sa","Su"].forEach(d=>{
    const el = document.createElement("div");
    el.className = "cal-dow"; el.textContent = d;
    grid.appendChild(el);
  });
  for(let i=0;i<leading;i++){
    const el = document.createElement("div");
    el.className = "cal-day empty";
    grid.appendChild(el);
  }
  const todayStr = todayKey();
  for(let d=1; d<=m.days; d++){
    const dateObj = new Date(start.getFullYear(), start.getMonth(), d);
    const key = fmtDate(dateObj);
    const hasTasks = tasksOnDate(key).length > 0;
    const el = document.createElement("div");
    el.className = "cal-day" + (key===todayStr?" today":"") + (key===calSelectedDate?" selected":"");
    el.innerHTML = `${d}${hasTasks?'<span class="dot"></span>':""}`;
    el.addEventListener("click", ()=>{ calSelectedDate = key; renderCalendar(); });
    grid.appendChild(el);
  }

  const isToday = calSelectedDate === todayStr;
  document.getElementById("calSelectedLabel").textContent = isToday ? "Today" :
    new Date(calSelectedDate).toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"short"});
  renderTaskCards("calDayTasks", tasksOnDate(calSelectedDate), true);

  const upcoming = state.tasks
    .filter(t=>!t.done && t.dueDate >= todayStr)
    .sort((a,b)=> a.dueDate.localeCompare(b.dueDate))
    .slice(0,5);
  renderTaskCards("calUpcoming", upcoming, false);
}

function renderTaskCards(containerId, tasks, showEmpty){
  const wrap = document.getElementById(containerId);
  wrap.innerHTML = "";
  if(tasks.length===0){
    if(showEmpty) wrap.innerHTML = `<p class="hint">Nothing due this day.</p>`;
    else wrap.innerHTML = `<p class="hint">Nothing upcoming — you're clear.</p>`;
    return;
  }
  const todayStr = todayKey();
  tasks.forEach(t=>{
    const overdue = !t.done && t.dueDate < todayStr;
    const recurBadge = t.recurrence ? `<span class="task-recur-badge">🔁 ${t.recurrence.type}</span>` : "";
    const card = document.createElement("div");
    card.className = "task-card" + (t.done?" done":"") + (overdue?" overdue":"");
    card.innerHTML = `
      <div>
        <div class="task-title">${escapeHtml(t.title)} ${recurBadge}</div>
        <div class="task-meta">${new Date(t.dueDate).toLocaleDateString(undefined,{day:"numeric",month:"short"})}${overdue?" · Overdue":""}</div>
        ${t.notes?`<div class="task-notes">${escapeHtml(t.notes)}</div>`:""}
      </div>
      <div class="task-actions">
        <button class="task-icon-btn" data-act="toggle">${t.done?"↺":"✓"}</button>
        <button class="task-icon-btn" data-act="del">✕</button>
      </div>`;
    card.querySelector('[data-act="toggle"]').addEventListener("click", ()=>{
      t.done = !t.done; saveState(); renderCalendar();
    });
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      if(confirm("Delete this task?")){
        state.tasks = state.tasks.filter(x=>x.id!==t.id);
        saveState(); renderCalendar();
      }
    });
    wrap.appendChild(card);
  });
}

function checkTaskReminders(){
  if(!state.settings.taskNotifOn) return;
  if(inQuietHours()) return;
  if(!("Notification" in window) || Notification.permission!=="granted") return;
  const todayStr = todayKey();
  let changed=false;
  state.tasks.forEach(t=>{
    if(t.done) return;
    if(t.lastNotifiedDate===todayStr) return;
    if(t.dueDate < todayStr){
      new Notification("One Piece — Task overdue", {body:`"${t.title}" was due ${t.dueDate}.`, icon:"icons/icon-192.png"});
      t.lastNotifiedDate = todayStr; changed=true;
    } else if(t.dueDate === todayStr){
      new Notification("One Piece — Task due today", {body:`"${t.title}" is due today.`, icon:"icons/icon-192.png"});
      t.lastNotifiedDate = todayStr; changed=true;
    } else {
      const daysUntil = Math.round((new Date(t.dueDate) - new Date(todayStr))/86400000);
      if(daysUntil===1){
        new Notification("One Piece — Task due tomorrow", {body:`"${t.title}" is due tomorrow.`, icon:"icons/icon-192.png"});
        t.lastNotifiedDate = todayStr; changed=true;
      }
    }
  });
  if(changed) saveState();
}

/* ---------- JOURNAL ---------- */
let journalSelectedDate = todayKey();

function renderJournal(){
  const isToday = journalSelectedDate === todayKey();
  document.getElementById("journalDateLabel").textContent = isToday
    ? "Today"
    : new Date(journalSelectedDate).toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"short",year:"numeric"});
  document.getElementById("nextJournalDay").disabled = isToday;

  const entry = state.journalEntries[journalSelectedDate];
  const ta = document.getElementById("journalTextarea");
  ta.value = entry ? entry.text : "";
  updateJournalWordCount();
  document.getElementById("journalSavedLabel").textContent = entry
    ? `Saved ${new Date(entry.updatedAt).toLocaleString(undefined,{hour:"2-digit",minute:"2-digit",day:"numeric",month:"short"})}`
    : "";

  renderJournalEntriesList();
}
function updateJournalWordCount(){
  const text = document.getElementById("journalTextarea").value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  document.getElementById("journalWordCount").textContent = `${words} word${words!==1?"s":""}`;
}
document.getElementById("journalTextarea").addEventListener("input", updateJournalWordCount);
document.getElementById("prevJournalDay").addEventListener("click", ()=>{
  const d = new Date(journalSelectedDate); d.setDate(d.getDate()-1);
  journalSelectedDate = fmtDate(d);
  renderJournal();
});
document.getElementById("nextJournalDay").addEventListener("click", ()=>{
  if(journalSelectedDate===todayKey()) return;
  const d = new Date(journalSelectedDate); d.setDate(d.getDate()+1);
  journalSelectedDate = fmtDate(d);
  renderJournal();
});
document.getElementById("journalSaveBtn").addEventListener("click", ()=>{
  const text = document.getElementById("journalTextarea").value;
  if(!text.trim()){
    if(state.journalEntries[journalSelectedDate]){
      delete state.journalEntries[journalSelectedDate];
      saveState();
      toast("Entry cleared");
      renderJournal();
    } else {
      toast("Nothing to save");
    }
    return;
  }
  state.journalEntries[journalSelectedDate] = {text, updatedAt: Date.now()};
  saveState();
  toast("Entry saved");
  renderJournal();
});
function renderJournalEntriesList(){
  const wrap = document.getElementById("journalEntriesList");
  wrap.innerHTML = "";
  const dates = Object.keys(state.journalEntries).sort((a,b)=> b.localeCompare(a));
  if(dates.length===0){ wrap.innerHTML = `<p class="hint">No entries yet — write about today above to start.</p>`; return; }
  dates.forEach(date=>{
    const entry = state.journalEntries[date];
    const snippet = entry.text.length>90 ? entry.text.slice(0,90)+"…" : entry.text;
    const row = document.createElement("div");
    row.className = "history-row";
    row.innerHTML = `
      <div>
        <div class="history-date">${date===todayKey()?"Today":new Date(date).toLocaleDateString(undefined,{weekday:"short",day:"numeric",month:"short"})}</div>
        <div class="history-focus">${escapeHtml(snippet)}</div>
      </div>
      <button class="task-icon-btn" data-act="del">✕</button>`;
    row.addEventListener("click", (e)=>{
      if(e.target.closest('[data-act="del"]')) return;
      journalSelectedDate = date;
      renderJournal();
      window.scrollTo(0,0);
    });
    row.querySelector('[data-act="del"]').addEventListener("click", (e)=>{
      e.stopPropagation();
      if(!confirm("Delete this entry?")) return;
      delete state.journalEntries[date];
      saveState();
      renderJournal();
      toast("Entry deleted");
    });
    wrap.appendChild(row);
  });
}


/* ---------- ACHIEVEMENTS ---------- */
const ACHIEVEMENTS = [
  {id:"streak_7", title:"Week Warrior", desc:"Reach a 7-day habit streak", icon:"🔥", check: ()=> computeStreak()>=7},
  {id:"streak_30", title:"Month Master", desc:"Reach a 30-day habit streak", icon:"🏆", check: ()=> computeStreak()>=30},
  {id:"streak_100", title:"Centurion", desc:"Reach a 100-day habit streak", icon:"💯", check: ()=> computeStreak()>=100},
  {id:"first_exercise_added", title:"Exercise List Started", desc:"Add your first exercise to track", icon:"📝", check: ()=> state.exerciseNames.length>=1},
  {id:"first_workout", title:"First Rep", desc:"Log your first exercise entry", icon:"💪", check: ()=> Object.values(state.exerciseLogs).some(entries=>entries.length>0)},
  {id:"fitness_streak_7", title:"On a Roll", desc:"Log an exercise 7 days in a row", icon:"⚡", check: ()=> computeExerciseLogStreak()>=7},
  {id:"ten_sessions", title:"Ten Sessions", desc:"Log exercises on 10 different days", icon:"🔟", check: ()=> Object.keys(state.exerciseLogs).filter(k=>state.exerciseLogs[k].length>0).length>=10},
  {id:"body_fat_calculated", title:"Know Your Numbers", desc:"Calculate your body fat % for the first time", icon:"📊", check: ()=> state.bodyLogs.some(b=>b.bodyFatPct!=null)},
  {id:"first_tx", title:"Money Tracker", desc:"Log your first transaction", icon:"💰", check: ()=> state.transactions.length>=1},
  {id:"positive_month", title:"In the Green", desc:"End a month with positive savings", icon:"📈", check: ()=> MONTHS.some((m,i)=> monthSavings(i)>0)},
  {id:"first_goal_done", title:"Goal Getter", desc:"Fully fund a savings goal", icon:"🎯", check: ()=> state.goals.some(g=> g.cost>0 && (g.saved||0)>=g.cost)},
  {id:"first_journal", title:"Dear Diary", desc:"Write your first journal entry", icon:"📔", check: ()=> Object.keys(state.journalEntries).length>=1},
  {id:"journal_7", title:"Consistent Chronicler", desc:"Write 7 journal entries", icon:"📚", check: ()=> Object.keys(state.journalEntries).length>=7},
  {id:"first_task_done", title:"Task Slayer", desc:"Complete your first calendar task", icon:"✔️", check: ()=> state.tasks.some(t=>t.done)},
  {id:"first_learn_done", title:"Lifelong Learner", desc:"Finish something on your Learn list", icon:"🎓", check: ()=> state.learn.some(l=>l.status==="Done")},
  {id:"first_weight", title:"Checked In", desc:"Log your weight for the first time", icon:"⚖️", check: ()=> Object.keys(state.weightLogs).length>0 || state.bodyLogs.length>0},
  {id:"streak_365", title:"Year Unbroken", desc:"Reach a 365-day habit streak", icon:"👑", check: ()=> computeStreak()>=365},
  {id:"month_90pct", title:"Near-Perfect Month", desc:"Complete 90% of a month's daily habits", icon:"🌟", check: ()=> MONTHS.some((m,i)=> monthHabitPct(i)>=0.9)},
  {id:"fifty_sessions", title:"Fifty Sessions", desc:"Log exercises on 50 different days", icon:"5️⃣0️⃣", check: ()=> Object.keys(state.exerciseLogs).filter(k=>state.exerciseLogs[k].length>0).length>=50},
  {id:"hundred_sessions", title:"Hundred Sessions", desc:"Log exercises on 100 different days", icon:"💯", check: ()=> Object.keys(state.exerciseLogs).filter(k=>state.exerciseLogs[k].length>0).length>=100},
  {id:"first_pr", title:"Chasing a PR", desc:"Log the same exercise more than once to start tracking progress", icon:"📈", check: ()=> state.exerciseNames.some(name=>{
    let count=0; Object.values(state.exerciseLogs).forEach(entries=>entries.forEach(e=>{ if(e.exerciseName===name) count++; })); return count>=2;
  })},
  {id:"first_savings_day", title:"First Savings", desc:"End a single day with more income than spending", icon:"🪙", check: ()=> {
    const dates = new Set(state.transactions.map(t=>t.date));
    return [...dates].some(d=> sumTx(txOnDate(d),"income") > sumTx(txOnDate(d),"expense"));
  }},
  {id:"savings_milestone", title:"Savings Milestone", desc:"Reach ₹10,000 in total net savings", icon:"🏦", check: ()=> (sumTx(state.transactions,"income") - sumTx(state.transactions,"expense")) >= 10000},
  {id:"first_learn_topic", title:"First Topic", desc:"Add your first thing to learn", icon:"📖", check: ()=> state.learn.length>=1},
  {id:"learn_10", title:"Curious Mind", desc:"Track 10 things to learn", icon:"🧠", check: ()=> state.learn.length>=10},
  {id:"learn_30", title:"Knowledge Seeker", desc:"Track 30 things to learn", icon:"🔭", check: ()=> state.learn.length>=30},
  {id:"learn_deadline", title:"Beat the Deadline", desc:"Finish something on your Learn list before its deadline passes", icon:"⏱️", check: ()=> state.learn.some(l=> l.status==="Done" && l.deadline && l.deadline>=todayKey())},
  {id:"journal_30", title:"Dedicated Writer", desc:"Write 30 journal entries", icon:"✍️", check: ()=> Object.keys(state.journalEntries).length>=30},
  {id:"journal_100", title:"Storyteller", desc:"Write 100 journal entries", icon:"📖", check: ()=> Object.keys(state.journalEntries).length>=100},
  {id:"perfect_week", title:"Perfect Week", desc:"Score 90+ on your Discipline Score for 7 days in a row", icon:"🌈", check: ()=> computeDisciplineStreakAbove(90)>=7},
  {id:"balanced_week", title:"Balanced Week", desc:"Touch every module you actively use at least once in the last 7 days", icon:"⚖️", check: ()=> computeBalancedWeek()},
];
function computeBalancedWeek(){
  const activeModules = [];
  if(state.habits.daily.length>0) activeModules.push("habits");
  if(state.exerciseNames.length>0) activeModules.push("fitness");
  if(state.transactions.length>0) activeModules.push("money");
  if(state.tasks.length>0) activeModules.push("tasks");
  if(activeModules.length<2) return false;
  const days = [];
  for(let i=0;i<7;i++){ const d=new Date(); d.setDate(d.getDate()-i); days.push(fmtDate(d)); }
  return activeModules.every(mod=>{
    if(mod==="habits") return days.some(dt=> (state.dailyLogs[dt]||[]).some((e,i)=> entryCountsAsDone(e, state.habits.daily[i])));
    if(mod==="fitness") return days.some(dt=> (state.exerciseLogs[dt]||[]).length>0);
    if(mod==="money") return days.some(dt=> txOnDate(dt).length>0);
    if(mod==="tasks") return days.some(dt=> state.tasks.some(t=>t.dueDate===dt));
    return true;
  });
}
function checkAchievements(){
  let unlockedNew = [];
  ACHIEVEMENTS.forEach(a=>{
    if(state.unlockedAchievements[a.id]) return;
    try{
      if(a.check()){
        state.unlockedAchievements[a.id] = Date.now();
        unlockedNew.push(a);
      }
    }catch(e){ /* ignore a faulty check rather than break the app */ }
  });
  if(unlockedNew.length>0){
    saveState();
    unlockedNew.forEach(a=> toast(`🏆 Achievement unlocked: ${a.title}`));
  }
}
function renderAchievements(){
  checkAchievements();
  const wrap = document.getElementById("achievementsList");
  wrap.innerHTML = "";
  const unlockedCount = ACHIEVEMENTS.filter(a=>state.unlockedAchievements[a.id]).length;
  document.getElementById("achUnlockedCount").textContent = `${unlockedCount}/${ACHIEVEMENTS.length}`;
  ACHIEVEMENTS.forEach(a=>{
    const unlockedAt = state.unlockedAchievements[a.id];
    const card = document.createElement("div");
    card.className = "ach-card " + (unlockedAt ? "unlocked" : "locked");
    card.innerHTML = `
      <div class="ach-icon">${unlockedAt ? a.icon : "🔒"}</div>
      <div class="ach-info">
        <div class="ach-title">${escapeHtml(a.title)}</div>
        <div class="ach-desc">${escapeHtml(a.desc)}</div>
        ${unlockedAt ? `<div class="ach-date">Unlocked ${new Date(unlockedAt).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"})}</div>` : ""}
      </div>`;
    wrap.appendChild(card);
  });
}

/* ---------- CUSTOM SECTION BACKGROUNDS ---------- */
const BG_SECTIONS = [
  {id:"home", label:"Home"},
  {id:"habits", label:"Habits"},
  {id:"fitness", label:"Fitness"},
  {id:"analytics", label:"Analytics"},
  {id:"money", label:"Money"},
  {id:"goals", label:"Goals"},
  {id:"learn", label:"Learn"},
  {id:"calendar", label:"Calendar"},
  {id:"journal", label:"Journal"},
  {id:"achievements", label:"Achievements"},
];
const BG_MAX_DIM = 1000;
const BG_JPEG_QUALITY = 0.72;

function applySectionBackgrounds(){
  BG_SECTIONS.forEach(s=>{
    const el = document.getElementById("view-"+s.id);
    if(!el) return;
    const data = state.settings.sectionBackgrounds && state.settings.sectionBackgrounds[s.id];
    if(data){
      el.style.setProperty("--custom-bg-url", `url("${data}")`);
      el.classList.add("has-custom-bg");
    } else {
      el.style.removeProperty("--custom-bg-url");
      el.classList.remove("has-custom-bg");
    }
  });
}

function resizeImageFile(file){
  return new Promise((resolve, reject)=>{
    const objUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = ()=>{
      let {width, height} = img;
      if(width > BG_MAX_DIM || height > BG_MAX_DIM){
        const ratio = Math.min(BG_MAX_DIM/width, BG_MAX_DIM/height);
        width = Math.round(width*ratio);
        height = Math.round(height*ratio);
      }
      const canvas = document.createElement("canvas");
      canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(objUrl);
      resolve(canvas.toDataURL("image/jpeg", BG_JPEG_QUALITY));
    };
    img.onerror = (e)=>{ URL.revokeObjectURL(objUrl); reject(e); };
    img.src = objUrl;
  });
}

function updateBgStorageUsed(){
  const bytes = JSON.stringify(state.settings.sectionBackgrounds || {}).length;
  const kb = bytes/1024;
  const label = kb > 1024 ? (kb/1024).toFixed(2)+" MB" : Math.round(kb)+" KB";
  const el = document.getElementById("bgStorageUsed");
  if(el) el.textContent = label;
}

function renderBgSectionList(){
  const wrap = document.getElementById("bgSectionList");
  if(!wrap) return;
  wrap.innerHTML = "";
  if(!state.settings.sectionBackgrounds) state.settings.sectionBackgrounds = {};
  BG_SECTIONS.forEach(s=>{
    const data = state.settings.sectionBackgrounds[s.id];
    const row = document.createElement("div");
    row.className = "bg-row";
    row.innerHTML = `
      <div class="bg-thumb" ${data?`style="background-image:url('${data}')"`:""}>${data?"":"No image"}</div>
      <div class="bg-row-label">${escapeHtml(s.label)}</div>
      <div class="bg-row-actions">
        <label class="bg-pick-btn">Choose<input type="file" accept="image/*" class="hidden" data-section="${s.id}"></label>
        <button class="bg-remove-btn" data-section="${s.id}" ${data?"":"disabled style=\"opacity:.35;pointer-events:none;\""}>✕</button>
      </div>`;
    row.querySelector('input[type="file"]').addEventListener("change", async (e)=>{
      const file = e.target.files[0];
      if(!file) return;
      if(!file.type.startsWith("image/")){ toast("Please choose an image file"); return; }
      toast("Processing image…");
      try{
        const dataUrl = await resizeImageFile(file);
        state.settings.sectionBackgrounds[s.id] = dataUrl;
        saveState();
        applySectionBackgrounds();
        renderBgSectionList();
        updateBgStorageUsed();
        toast(`${s.label} background set`);
      }catch(err){
        toast("Couldn't process that image");
      }
    });
    const removeBtn = row.querySelector(".bg-remove-btn");
    if(data){
      removeBtn.addEventListener("click", ()=>{
        delete state.settings.sectionBackgrounds[s.id];
        saveState();
        applySectionBackgrounds();
        renderBgSectionList();
        updateBgStorageUsed();
        toast(`${s.label} background removed`);
      });
    }
    wrap.appendChild(row);
  });
  updateBgStorageUsed();
}
document.getElementById("clearAllBgBtn").addEventListener("click", ()=>{
  if(!confirm("Remove all custom backgrounds?")) return;
  state.settings.sectionBackgrounds = {};
  saveState();
  applySectionBackgrounds();
  renderBgSectionList();
  updateBgStorageUsed();
  toast("All custom backgrounds cleared");
});

let manageSeg = "daily";
document.querySelectorAll("#manageSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#manageSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    manageSeg = b.dataset.mseg;
    renderManageList();
  });
});
function renderManageList(){
  const wrap = document.getElementById("manageList");
  wrap.innerHTML = "";
  state.habits[manageSeg].forEach((h, idx)=>{
    const type = habitType(h);
    const row = document.createElement("div");
    row.className = "manage-row-wrap";
    row.innerHTML = `
      <div class="manage-row">
        <input type="text" class="mh-name" value="${escapeAttr(habitName(h))}" />
        <button class="mh-adv-toggle" type="button" aria-label="Advanced options">⚙</button>
        <button aria-label="Remove">✕</button>
      </div>
      <div class="mh-advanced hidden">
        <div class="mh-field-row">
          <label class="mh-mini-label">Type
            <select class="mh-type">
              <option value="checkbox" ${type==="checkbox"?"selected":""}>Checkbox</option>
              <option value="numeric" ${type==="numeric"?"selected":""}>Numeric</option>
            </select>
          </label>
          <label class="mh-mini-label">Time of day
            <select class="mh-time">
              ${TIME_ORDER.map(t=>`<option value="${t}" ${habitTime(h)===t?"selected":""}>${TIME_LABELS[t]}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="mh-field-row mh-numeric-fields ${type==="numeric"?"":"hidden"}">
          <input type="number" class="mh-target" placeholder="Target" value="${habitTarget(h)??""}" step="any" />
          <input type="text" class="mh-unit" placeholder="Unit (L, min, reps…)" value="${escapeAttr(habitUnit(h))}" />
          <input type="number" class="mh-min" placeholder="Min (optional)" value="${habitMin(h)??""}" step="any" />
        </div>
      </div>`;

    row.querySelector(".mh-name").addEventListener("input", (e)=>{
      state.habits[manageSeg][idx].name = e.target.value;
      saveState();
    });
    row.querySelector(".mh-adv-toggle").addEventListener("click", ()=>{
      row.querySelector(".mh-advanced").classList.toggle("hidden");
    });
    row.querySelector(".mh-type").addEventListener("change", (e)=>{
      state.habits[manageSeg][idx].type = e.target.value;
      row.querySelector(".mh-numeric-fields").classList.toggle("hidden", e.target.value!=="numeric");
      saveState();
    });
    row.querySelector(".mh-time").addEventListener("change", (e)=>{
      state.habits[manageSeg][idx].time = e.target.value;
      saveState();
    });
    row.querySelector(".mh-target").addEventListener("input", (e)=>{
      state.habits[manageSeg][idx].target = e.target.value==="" ? null : +e.target.value;
      saveState();
    });
    row.querySelector(".mh-unit").addEventListener("input", (e)=>{
      state.habits[manageSeg][idx].unit = e.target.value;
      saveState();
    });
    row.querySelector(".mh-min").addEventListener("input", (e)=>{
      state.habits[manageSeg][idx].min = e.target.value==="" ? null : +e.target.value;
      saveState();
    });
    row.querySelector('button[aria-label="Remove"]').addEventListener("click", ()=> removeHabit(manageSeg, idx));
    wrap.appendChild(row);
  });
}
function addHabit(cat){
  state.habits[cat].push({name:"New habit", type:"checkbox", target:null, unit:"", min:null, time:"anytime"});
  if(cat==="daily") Object.keys(state.dailyLogs).forEach(k=> state.dailyLogs[k].push(false));
  if(cat==="weekly") Object.keys(state.weeklyLogs).forEach(k=> state.weeklyLogs[k].push(false));
  if(cat==="monthly") Object.keys(state.monthlyLogs).forEach(k=> state.monthlyLogs[k].push(false));
  saveState(); renderManageList();
  toast("Habit added");
}
function removeHabit(cat, idx){
  if(state.habits[cat].length<=1){ toast("Keep at least one habit"); return; }
  if(!confirm("Remove this habit? Its logged history will be removed too.")) return;
  state.habits[cat].splice(idx,1);
  if(cat==="daily") Object.keys(state.dailyLogs).forEach(k=> state.dailyLogs[k].splice(idx,1));
  if(cat==="weekly") Object.keys(state.weeklyLogs).forEach(k=> state.weeklyLogs[k].splice(idx,1));
  if(cat==="monthly") Object.keys(state.monthlyLogs).forEach(k=> state.monthlyLogs[k].splice(idx,1));
  saveState(); renderManageList();
  toast("Habit removed");
}
document.getElementById("addHabitBtn").addEventListener("click", ()=> addHabit(manageSeg));
document.getElementById("habitGroupingToggle").addEventListener("change", (e)=>{
  state.settings.habitGroupingOn = e.target.checked;
  saveState();
  renderHome();
});

/* ---------- SETTINGS ---------- */
function renderSettings(){
  document.getElementById("notifToggle").checked = state.settings.notifOn;
  document.getElementById("reminderTime").value = state.settings.reminderTime;
  document.getElementById("taskNotifToggle").checked = state.settings.taskNotifOn;
  document.getElementById("quietHoursToggle").checked = state.settings.quietHoursOn;
  document.getElementById("quietStartInput").value = state.settings.quietStart;
  document.getElementById("quietEndInput").value = state.settings.quietEnd;
  document.getElementById("stepsToggle").checked = state.settings.stepsOn;
  document.getElementById("weightToggle").checked = state.settings.weightOn;
  document.getElementById("weightDaySelect").value = String(state.settings.weightDay);
  document.getElementById("motionToggle").checked = state.settings.reduceMotion;
  document.getElementById("habitGroupingToggle").checked = state.settings.habitGroupingOn;
  document.getElementById("appLockToggle").checked = state.appLock.enabled;
  document.getElementById("setPinWrap").classList.toggle("hidden", !state.appLock.enabled);
  document.getElementById("lastBackupHint").textContent = state.settings.lastBackupAt
    ? `Last backup: ${Math.round((Date.now()-state.settings.lastBackupAt)/86400000)} day(s) ago`
    : "No backup taken yet — consider exporting one.";
  document.querySelectorAll(".theme-swatch").forEach(el=>{
    el.classList.toggle("active", el.dataset.theme === (state.settings.theme||"classic"));
  });
  renderManageList();
  renderBgSectionList();
  renderHomeCardsList();
}
document.querySelectorAll(".theme-swatch").forEach(el=>{
  el.addEventListener("click", ()=>{
    const t = el.dataset.theme;
    state.settings.theme = t;
    saveState();
    document.body.classList.remove("theme-crimson","theme-ocean","theme-onepiece");
    if(t!=="classic") document.body.classList.add("theme-"+t);
    document.querySelectorAll(".theme-swatch").forEach(x=>x.classList.toggle("active", x===el));
    toast("Theme updated");
  });
});
document.getElementById("taskNotifToggle").addEventListener("change", (e)=>{
  state.settings.taskNotifOn = e.target.checked; saveState();
});

document.getElementById("notifToggle").addEventListener("change", async (e)=>{
  if(e.target.checked){
    if(!("Notification" in window)){ toast("Notifications not supported here"); e.target.checked=false; return; }
    const perm = await Notification.requestPermission();
    if(perm !== "granted"){ toast("Permission denied"); e.target.checked=false; return; }
    toast("Reminders on");
  } else { toast("Reminders off"); }
  state.settings.notifOn = e.target.checked;
  saveState();
});
document.getElementById("reminderTime").addEventListener("change", (e)=>{
  state.settings.reminderTime = e.target.value; saveState();
});
document.getElementById("stepsToggle").addEventListener("change", (e)=>{
  state.settings.stepsOn = e.target.checked; saveState();
  toast(e.target.checked ? "Step tracking on" : "Step tracking off");
});
document.getElementById("weightToggle").addEventListener("change", (e)=>{
  state.settings.weightOn = e.target.checked; saveState();
  toast(e.target.checked ? "Weekly weight check-in on" : "Weekly weight check-in off");
});
document.getElementById("weightDaySelect").addEventListener("change", (e)=>{
  state.settings.weightDay = +e.target.value; saveState();
});
document.getElementById("motionToggle").addEventListener("change", (e)=>{
  state.settings.reduceMotion = e.target.checked; saveState();
  document.body.classList.toggle("reduce-motion", e.target.checked);
});
document.getElementById("logWeightNowBtn").addEventListener("click", ()=>{
  document.getElementById("weightModalInput").value = "";
  showSheet("weightBackdrop");
});

function inQuietHours(){
  if(!state.settings.quietHoursOn) return false;
  const now = new Date();
  const cur = now.getHours()*60 + now.getMinutes();
  const [sh,sm] = (state.settings.quietStart||"22:30").split(":").map(Number);
  const [eh,em] = (state.settings.quietEnd||"07:00").split(":").map(Number);
  const start = sh*60+sm, end = eh*60+em;
  if(start<end) return cur>=start && cur<end;
  return cur>=start || cur<end; // window wraps past midnight
}
function checkReminderLoop(){
  if(!state.settings.notifOn) return;
  if(inQuietHours()) return;
  const now = new Date();
  const [h,m] = (state.settings.reminderTime||"20:00").split(":").map(Number);
  if(now.getHours()===h && now.getMinutes()===m){
    const log = state.dailyLogs[todayKey()];
    const done = log && log.some(Boolean);
    if(!done && Notification.permission==="granted"){
      new Notification("One Piece — Daily reminder", { body:"You haven't logged today's habits yet. Open One Piece to check in.", icon:"icons/icon-192.png" });
    }
  }
}
setInterval(()=>{ checkReminderLoop(); checkTaskReminders(); checkAchievements(); }, 60000);

document.getElementById("exportBtn").addEventListener("click", ()=>{
  const blob = new Blob([JSON.stringify(state,null,2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `forge-backup-${todayKey()}.json`;
  a.click();
  state.settings.lastBackupAt = Date.now();
  saveState();
  toast("Backup downloaded");
});
document.getElementById("importBtn").addEventListener("click", ()=> document.getElementById("importFile").click());
document.getElementById("importFile").addEventListener("change", (e)=>{
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const parsed = JSON.parse(reader.result);
      state = loadStateFrom(parsed);
      saveState();
      toast("Backup restored");
      showView("home");
    }catch(err){ toast("Invalid backup file"); }
  };
  reader.readAsText(file);
});
function loadStateFrom(parsed){
  return migrateState(mergeWithDefaults(parsed));
}
document.getElementById("resetBtn").addEventListener("click", ()=>{
  if(confirm("This clears all data on this device. Continue?")){
    state = DEFAULT_STATE();
    saveState();
    toast("Data reset");
    showView("home");
  }
});

/* ---------- QUIET HOURS settings wiring ---------- */
document.getElementById("quietHoursToggle").addEventListener("change", (e)=>{
  state.settings.quietHoursOn = e.target.checked; saveState();
});
document.getElementById("quietStartInput").addEventListener("change", (e)=>{
  state.settings.quietStart = e.target.value; saveState();
});
document.getElementById("quietEndInput").addEventListener("change", (e)=>{
  state.settings.quietEnd = e.target.value; saveState();
});

/* ---------- APP LOCK (PIN) ---------- */
async function hashPin(pin, salt){
  const enc = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", enc.encode(pin + ":" + salt));
  return Array.from(new Uint8Array(hashBuffer)).map(b=>b.toString(16).padStart(2,"0")).join("");
}
function randomHex(bytes){
  const arr = new Uint8Array(bytes);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b=>b.toString(16).padStart(2,"0")).join("");
}
let appLocked = false;
document.getElementById("appLockToggle").addEventListener("change", (e)=>{
  document.getElementById("setPinWrap").classList.toggle("hidden", !e.target.checked);
  if(!e.target.checked){
    state.appLock = { enabled:false, pinHash:null, salt:null };
    saveState();
    toast("App lock disabled");
  }
});
document.getElementById("savePinBtn").addEventListener("click", async ()=>{
  const pin = document.getElementById("newPinInput").value;
  const confirmPin = document.getElementById("confirmPinInput").value;
  if(!/^\d{4,6}$/.test(pin)){ toast("PIN must be 4-6 digits"); return; }
  if(pin !== confirmPin){ toast("PINs don't match"); return; }
  const salt = randomHex(16);
  const hash = await hashPin(pin, salt);
  state.appLock = { enabled:true, pinHash:hash, salt };
  saveState();
  document.getElementById("newPinInput").value = "";
  document.getElementById("confirmPinInput").value = "";
  toast("PIN set — app will lock next time it's reopened");
});
function showLockScreen(){
  appLocked = true;
  document.getElementById("lockScreen").classList.remove("hidden");
  document.getElementById("lockPinInput").value = "";
  document.getElementById("lockError").classList.add("hidden");
  setTimeout(()=> document.getElementById("lockPinInput").focus(), 100);
}
function hideLockScreen(){
  appLocked = false;
  document.getElementById("lockScreen").classList.add("hidden");
}
async function attemptUnlock(){
  const pin = document.getElementById("lockPinInput").value;
  const hash = await hashPin(pin, state.appLock.salt);
  if(hash === state.appLock.pinHash){ hideLockScreen(); }
  else { document.getElementById("lockError").classList.remove("hidden"); }
}
document.getElementById("lockUnlockBtn").addEventListener("click", attemptUnlock);
document.getElementById("lockPinInput").addEventListener("keydown", (e)=>{ if(e.key==="Enter") attemptUnlock(); });
document.addEventListener("visibilitychange", ()=>{
  if(!state.appLock.enabled) return;
  if(document.hidden){ appLocked = true; }
  else if(appLocked){ showLockScreen(); }
});

/* ---------- ENCRYPTED BACKUP (Web Crypto: PBKDF2 + AES-GCM) ---------- */
async function deriveAesKey(password, saltHex){
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), {name:"PBKDF2"}, false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    {name:"PBKDF2", salt: enc.encode(saltHex), iterations:100000, hash:"SHA-256"},
    keyMaterial, {name:"AES-GCM", length:256}, false, ["encrypt","decrypt"]
  );
}
document.getElementById("exportEncryptedBtn").addEventListener("click", async ()=>{
  const password = prompt("Set a password for this encrypted backup (you'll need it to restore):");
  if(!password){ return; }
  try{
    const salt = randomHex(16);
    const key = await deriveAesKey(password, salt);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const plaintext = new TextEncoder().encode(JSON.stringify(state));
    const ciphertext = await crypto.subtle.encrypt({name:"AES-GCM", iv}, key, plaintext);
    const envelope = {
      encrypted:true, version:1, salt,
      iv: Array.from(iv).map(b=>b.toString(16).padStart(2,"0")).join(""),
      data: btoa(String.fromCharCode(...new Uint8Array(ciphertext))),
    };
    const blob = new Blob([JSON.stringify(envelope)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `one-piece-encrypted-backup-${todayKey()}.json`;
    a.click();
    state.settings.lastBackupAt = Date.now();
    saveState();
    toast("Encrypted backup downloaded");
  }catch(err){ toast("Couldn't create encrypted backup"); }
});
document.getElementById("importEncryptedBtn").addEventListener("click", ()=> document.getElementById("importEncryptedFile").click());
document.getElementById("importEncryptedFile").addEventListener("change", (e)=>{
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = async ()=>{
    try{
      const envelope = JSON.parse(reader.result);
      if(!envelope.encrypted){ toast("This isn't an encrypted backup file"); return; }
      const password = prompt("Enter this backup's password:");
      if(!password) return;
      const key = await deriveAesKey(password, envelope.salt);
      const iv = new Uint8Array(envelope.iv.match(/.{2}/g).map(h=>parseInt(h,16)));
      const ciphertext = Uint8Array.from(atob(envelope.data), c=>c.charCodeAt(0));
      const plainBuffer = await crypto.subtle.decrypt({name:"AES-GCM", iv}, key, ciphertext);
      const parsed = JSON.parse(new TextDecoder().decode(plainBuffer));
      state = loadStateFrom(parsed);
      saveState();
      toast("Encrypted backup restored");
      showView("home");
    }catch(err){ toast("Wrong password, or the file is corrupted"); }
  };
  reader.readAsText(file);
});

/* ---------- CSV EXPORTS ---------- */
function downloadCsv(filename, rows){
  const csv = rows.map(row=> row.map(cell=>{
    const s = String(cell ?? "");
    return /[",\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s;
  }).join(",")).join("\n");
  const blob = new Blob([csv], {type:"text/csv"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}
document.getElementById("exportTxCsvBtn").addEventListener("click", ()=>{
  const rows = [["Date","Type","Category","Amount","Note"]];
  state.transactions.forEach(t=> rows.push([t.date, t.type, t.category, t.amount, t.note||""]));
  downloadCsv(`transactions-${todayKey()}.csv`, rows);
  toast("Transactions CSV downloaded");
});
document.getElementById("exportHabitCsvBtn").addEventListener("click", ()=>{
  const rows = [["Date", ...state.habits.daily.map(h=>habitName(h))]];
  Object.keys(state.dailyLogs).sort().forEach(d=>{
    const log = state.dailyLogs[d];
    rows.push([d, ...state.habits.daily.map((h,i)=>{
      const p = entryProgress(log[i], h);
      return habitType(h)==="numeric" ? (log[i] ?? 0) : (p.state==="done" ? "1" : "0");
    })]);
  });
  downloadCsv(`habit-history-${todayKey()}.csv`, rows);
  toast("Habit history CSV downloaded");
});
document.getElementById("exportFitnessCsvBtn").addEventListener("click", ()=>{
  const rows = [["Date","Exercise","Sets","Reps"]];
  Object.keys(state.exerciseLogs).sort().forEach(d=>{
    state.exerciseLogs[d].forEach(e=> rows.push([d, e.exerciseName, e.sets, e.reps]));
  });
  downloadCsv(`fitness-${todayKey()}.csv`, rows);
  toast("Fitness CSV downloaded");
});
document.getElementById("exportWeightCsvBtn").addEventListener("click", ()=>{
  const rows = [["Date","Weight (kg)","Waist (cm)","Body Fat %"]];
  [...state.bodyLogs].sort((a,b)=>a.date.localeCompare(b.date)).forEach(e=> rows.push([e.date, e.weight, e.waist ?? "", e.bodyFatPct ?? ""]));
  downloadCsv(`weight-history-${todayKey()}.csv`, rows);
  toast("Weight history CSV downloaded");
});

/* ---------- DASHBOARD CUSTOMIZATION ---------- */
const HOME_CARD_META = {
  ring: "Progress ring & stats",
  discipline: "Discipline Score",
  xp: "XP / Level / Rank",
  habits: "Today's habit list",
  trend: "14-day trend chart",
};
function renderHomeCardsList(){
  const wrap = document.getElementById("homeCardsList");
  if(!wrap) return;
  wrap.innerHTML = "";
  state.settings.homeCards.forEach((cardId, idx)=>{
    const hidden = state.settings.hiddenHomeCards.includes(cardId);
    const row = document.createElement("div");
    row.className = "manage-row";
    row.innerHTML = `
      <label style="display:flex; align-items:center; gap:8px; flex:1; font-size:13px;">
        <input type="checkbox" ${hidden?"":"checked"} />
        ${escapeHtml(HOME_CARD_META[cardId]||cardId)}
      </label>
      <button data-act="up" ${idx===0?"disabled":""}>↑</button>
      <button data-act="down" ${idx===state.settings.homeCards.length-1?"disabled":""}>↓</button>`;
    row.querySelector('input[type=checkbox]').addEventListener("change", (e)=>{
      if(e.target.checked) state.settings.hiddenHomeCards = state.settings.hiddenHomeCards.filter(c=>c!==cardId);
      else state.settings.hiddenHomeCards.push(cardId);
      saveState();
      applyHomeCardVisibility();
    });
    row.querySelector('[data-act="up"]').addEventListener("click", ()=>{
      [state.settings.homeCards[idx-1], state.settings.homeCards[idx]] = [state.settings.homeCards[idx], state.settings.homeCards[idx-1]];
      saveState(); renderHomeCardsList(); applyHomeCardOrder();
    });
    row.querySelector('[data-act="down"]').addEventListener("click", ()=>{
      [state.settings.homeCards[idx+1], state.settings.homeCards[idx]] = [state.settings.homeCards[idx], state.settings.homeCards[idx+1]];
      saveState(); renderHomeCardsList(); applyHomeCardOrder();
    });
    wrap.appendChild(row);
  });
}
function applyHomeCardVisibility(){
  state.settings.homeCards.forEach(cardId=>{
    const el = document.getElementById("homeCard-"+cardId);
    if(el) el.classList.toggle("hidden", state.settings.hiddenHomeCards.includes(cardId));
  });
}
function applyHomeCardOrder(){
  const container = document.querySelector('[data-view-name="home"]');
  const banner = document.getElementById("reminderBanner");
  state.settings.homeCards.forEach(cardId=>{
    const el = document.getElementById("homeCard-"+cardId);
    if(el) container.appendChild(el);
  });
}

/* ---------- GLOBAL SEARCH ---------- */
document.getElementById("searchBtn").addEventListener("click", ()=>{
  showSheet("searchBackdrop");
  document.getElementById("globalSearchInput").value = "";
  document.getElementById("searchResults").innerHTML = "";
  setTimeout(()=> document.getElementById("globalSearchInput").focus(), 150);
});
document.getElementById("searchBackdrop").addEventListener("click", (e)=>{
  if(e.target.id==="searchBackdrop") hideSheet("searchBackdrop");
});
document.getElementById("globalSearchInput").addEventListener("input", (e)=> runGlobalSearch(e.target.value.trim().toLowerCase()));
function runGlobalSearch(q){
  const wrap = document.getElementById("searchResults");
  if(!q){ wrap.innerHTML = ""; return; }
  const groups = [];

  const habitMatches = state.habits.daily.filter(h=>habitName(h).toLowerCase().includes(q));
  if(habitMatches.length) groups.push({title:"Habits", items: habitMatches.map(h=>({label:habitName(h), sub:"Daily habit", view:"habits"}))});

  const exMatches = state.exerciseNames.filter(n=>n.toLowerCase().includes(q));
  if(exMatches.length) groups.push({title:"Exercises", items: exMatches.map(n=>({label:n, sub:"Fitness exercise", view:"fitness"}))});

  const txMatches = state.transactions.filter(t=> (t.category||"").toLowerCase().includes(q) || (t.note||"").toLowerCase().includes(q));
  if(txMatches.length) groups.push({title:"Transactions", items: txMatches.slice(0,10).map(t=>({label:`₹${t.amount} — ${t.category}`, sub:t.date+(t.note?" · "+t.note:""), view:"money"}))});

  const goalMatches = state.goals.filter(g=> g.item.toLowerCase().includes(q));
  if(goalMatches.length) groups.push({title:"Goals", items: goalMatches.map(g=>({label:g.item, sub:`₹${g.cost}`, view:"goals"}))});

  const learnMatches = state.learn.filter(l=> l.topic.toLowerCase().includes(q));
  if(learnMatches.length) groups.push({title:"Learn", items: learnMatches.map(l=>({label:l.topic, sub:l.status, view:"learn"}))});

  const taskMatches = state.tasks.filter(t=> t.title.toLowerCase().includes(q) || (t.notes||"").toLowerCase().includes(q));
  if(taskMatches.length) groups.push({title:"Calendar", items: taskMatches.slice(0,10).map(t=>({label:t.title, sub:t.dueDate, view:"calendar"}))});

  const journalMatches = Object.entries(state.journalEntries).filter(([d,e])=> e.text.toLowerCase().includes(q));
  if(journalMatches.length) groups.push({title:"Journal", items: journalMatches.slice(0,10).map(([d,e])=>({label:e.text.slice(0,60)+(e.text.length>60?"…":""), sub:d, view:"journal"}))});

  if(groups.length===0){ wrap.innerHTML = `<p class="hint">No matches.</p>`; return; }
  wrap.innerHTML = groups.map(g=>
    `<div class="search-group-title">${escapeHtml(g.title)}</div>` +
    g.items.map(it=> `<div class="search-result-row" data-view="${it.view}"><div>${escapeHtml(it.label)}</div><div class="search-result-sub">${escapeHtml(it.sub)}</div></div>`).join("")
  ).join("");
  wrap.querySelectorAll(".search-result-row").forEach(row=>{
    row.addEventListener("click", ()=>{
      hideSheet("searchBackdrop");
      setTimeout(()=> showView(row.dataset.view), 200);
    });
  });
}

/* ---------- QUICK ADD FAB ---------- */
document.getElementById("quickAddFab").addEventListener("click", ()=> showSheet("quickAddBackdrop"));
document.getElementById("quickAddBackdrop").addEventListener("click", (e)=>{
  if(e.target.id==="quickAddBackdrop") hideSheet("quickAddBackdrop");
});
document.querySelectorAll('#quickAddBackdrop .sheet-item').forEach(btn=>{
  btn.addEventListener("click", ()=>{
    hideSheet("quickAddBackdrop");
    const dest = btn.dataset.quick;
    const map = {habit:"home", exercise:"fitness", transaction:"money", goal:"goals", learn:"learn", task:"calendar", journal:"journal", weight:"fitness"};
    setTimeout(()=>{
      showView(map[dest]);
      setTimeout(()=>{
        if(dest==="transaction") document.getElementById("txAmountInput")?.focus();
        if(dest==="exercise") document.getElementById("logSetsInput")?.focus();
        if(dest==="weight") document.getElementById("bodyWeightInput")?.focus();
        if(dest==="journal") document.getElementById("journalTextarea")?.focus();
        if(dest==="task") document.getElementById("taskTitleInput")?.focus();
        if(dest==="goal") document.getElementById("addGoalBtn")?.focus();
        if(dest==="learn") document.getElementById("addLearnBtn")?.focus();
      }, 250);
    }, 200);
  });
});

/* ---------- ONBOARDING ---------- */
let obTheme = "classic";
function showOnboardingStep(n){
  for(let i=1;i<=6;i++) document.getElementById("obStep"+i).classList.toggle("hidden", i!==n);
}
document.querySelectorAll("[data-ob-next]").forEach(btn=>{
  btn.addEventListener("click", ()=> showOnboardingStep(+btn.dataset.obNext));
});
document.getElementById("obSkipAll").addEventListener("click", finishOnboarding);
document.querySelectorAll("#obThemeSwatches .theme-swatch").forEach(el=>{
  el.addEventListener("click", ()=>{
    document.querySelectorAll("#obThemeSwatches .theme-swatch").forEach(x=>x.classList.remove("active"));
    el.classList.add("active");
    obTheme = el.dataset.obTheme;
  });
});
document.getElementById("obFinish").addEventListener("click", ()=>{
  const habitName_ = document.getElementById("obHabitName").value.trim();
  if(habitName_ && state.habits.daily.length===0){
    state.habits.daily.push({name:habitName_, type:"checkbox", target:null, unit:"", min:null, time:"anytime"});
  }
  state.settings.theme = obTheme;
  document.body.classList.remove("theme-crimson","theme-ocean","theme-onepiece");
  if(obTheme!=="classic") document.body.classList.add("theme-"+obTheme);
  const remTime = document.getElementById("obReminderTime").value;
  if(remTime) state.settings.reminderTime = remTime;
  finishOnboarding();
});
function finishOnboarding(){
  state.settings.onboardingDone = true;
  saveState();
  document.getElementById("onboardingOverlay").classList.add("hidden");
  renderHome();
}

/* ---------- Weekly weight modal logic ---------- */
function maybePromptWeight(){
  if(!state.settings.weightOn) return;
  const now = new Date();
  const wIdx = weekIndexOf(now);
  if(now.getDay() !== state.settings.weightDay) return;
  if(state.weightLogs[wIdx]) return;
  if(state.settings.lastWeightPromptWeek === wIdx) return;
  document.getElementById("weightModalInput").value = "";
  showSheet("weightBackdrop");
}
document.getElementById("weightModalSave").addEventListener("click", ()=>{
  const val = +document.getElementById("weightModalInput").value;
  if(!val || val<=0){ toast("Enter a valid weight"); return; }
  const wIdx = weekIndexOf(new Date());
  state.weightLogs[wIdx] = {date: todayKey(), weight: val};
  state.settings.lastWeightPromptWeek = wIdx;
  saveState();
  hideSheet("weightBackdrop");
  toast("Weight logged");
});
document.getElementById("weightModalSkip").addEventListener("click", ()=>{
  const wIdx = weekIndexOf(new Date());
  state.settings.lastWeightPromptWeek = wIdx;
  saveState();
  hideSheet("weightBackdrop");
});

/* ---------- Install prompt ---------- */
let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e)=>{
  e.preventDefault();
  deferredInstallPrompt = e;
});
document.getElementById("installBtn").addEventListener("click", async ()=>{
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
  } else {
    toast("Use browser menu → Add to Home screen");
  }
});

/* ---------- Utils ---------- */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function escapeAttr(s){ return escapeHtml(s); }

/* ---------- Service worker ---------- */
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}

/* ---------- REVIEWS (Weekly / Monthly / Year) ---------- */
let reviewSeg = "week";
let reviewWeekIdx = weekIndexOf(new Date());
let reviewMonthIdx = monthIndexOf(new Date());

document.querySelectorAll("#reviewSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#reviewSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    reviewSeg = b.dataset.rseg;
    ["week","month","year"].forEach(s=> document.getElementById("rseg-"+s).classList.toggle("hidden", s!==reviewSeg));
    renderReviews();
  });
});
document.getElementById("prevReviewWeek").addEventListener("click", ()=>{ reviewWeekIdx=Math.max(0,reviewWeekIdx-1); renderReviews(); });
document.getElementById("nextReviewWeek").addEventListener("click", ()=>{ reviewWeekIdx=Math.min(51,reviewWeekIdx+1); renderReviews(); });
document.getElementById("prevReviewMonth").addEventListener("click", ()=>{ reviewMonthIdx=(reviewMonthIdx+11)%12; renderReviews(); });
document.getElementById("nextReviewMonth").addEventListener("click", ()=>{ reviewMonthIdx=(reviewMonthIdx+1)%12; renderReviews(); });

function weekIndexDateRange(weekIndex){
  const start = new Date(YEAR_START); start.setDate(start.getDate() + weekIndex*7);
  const end = new Date(start); end.setDate(start.getDate()+6);
  return {start: fmtDate(start), end: fmtDate(end)};
}
function datesInRange(start, end){
  const dates=[]; let cur=new Date(start);
  const endD = new Date(end);
  while(cur<=endD){ dates.push(fmtDate(cur)); cur.setDate(cur.getDate()+1); }
  return dates;
}
function computeRangeStats(start, end){
  const dates = datesInRange(start, end);
  const dailyTotal = state.habits.daily.length;
  let habitPctSum=0, scoreSum=0, scoreCount=0, workoutDays=0, stepsSum=0, journalCount=0;
  dates.forEach(d=>{
    if(dailyTotal>0){
      const log = state.dailyLogs[d]||[];
      let pctSum=0; state.habits.daily.forEach((h,i)=>pctSum+=entryProgress(log[i],h).pct);
      habitPctSum += pctSum/dailyTotal;
    }
    const {score} = computeDisciplineScore(d);
    if(score!=null){ scoreSum+=score; scoreCount++; }
    if((state.exerciseLogs[d]||[]).length>0) workoutDays++;
    stepsSum += state.stepLogs[d]||0;
    if(state.journalEntries[d]) journalCount++;
  });
  const tasksInRange = state.tasks.filter(t=>t.dueDate>=start && t.dueDate<=end);
  const txs = txInRange(start,end);
  return {
    habitPct: dailyTotal>0 ? Math.round((habitPctSum/dates.length)*100) : null,
    avgScore: scoreCount>0 ? Math.round(scoreSum/scoreCount) : null,
    workoutDays, stepsSum, journalCount,
    tasksDue: tasksInRange.length, tasksCompleted: tasksInRange.filter(t=>t.done).length,
    moneySaved: sumTx(txs,"income")-sumTx(txs,"expense"),
    learnDoneTotal: state.learn.filter(l=>l.status==="Done").length,
    dayCount: dates.length,
  };
}
function statGridHtml(stats){
  const rows = [];
  if(stats.habitPct!=null) rows.push([`${stats.habitPct}%`, "Habit completion"]);
  if(stats.avgScore!=null) rows.push([`${stats.avgScore}`, "Avg Discipline Score"]);
  rows.push([`${computeStreak()}`, "Current streak"]);
  rows.push([`${stats.workoutDays}`, "Workout days"]);
  if(state.settings.stepsOn) rows.push([`${stats.stepsSum.toLocaleString("en-IN")}`, "Total steps"]);
  rows.push([`₹${stats.moneySaved.toLocaleString("en-IN")}`, "Money saved"]);
  rows.push([`${stats.tasksCompleted}/${stats.tasksDue}`, "Tasks completed"]);
  rows.push([`${stats.journalCount}`, "Journal entries"]);
  return rows.map(([num,label])=> `<div class="mini-stat"><div class="mini-stat-num mono">${num}</div><div class="mini-stat-label">${escapeHtml(label)}</div></div>`).join("");
}
function renderReviews(){
  if(reviewSeg==="week"){
    document.getElementById("reviewWeekLabel").textContent = `Week ${reviewWeekIdx+1} of 52`;
    const {start,end} = weekIndexDateRange(reviewWeekIdx);
    document.getElementById("weekReviewStats").innerHTML = statGridHtml(computeRangeStats(start,end));
    const rev = state.reviews.weekly[reviewWeekIdx] || {};
    document.getElementById("weekWentWell").value = rev.wentWell || "";
    document.getElementById("weekImprove").value = rev.improve || "";
    document.getElementById("weekFocus").value = rev.focus || "";
  } else if(reviewSeg==="month"){
    const m = MONTHS[reviewMonthIdx];
    document.getElementById("reviewMonthLabel").textContent = `${m.name} ${m.year}`;
    const {start,end} = monthRangeForIndex(reviewMonthIdx);
    document.getElementById("monthReviewStats").innerHTML = statGridHtml(computeRangeStats(start,end));
    const rev = state.reviews.monthly[reviewMonthIdx] || {};
    document.getElementById("monthWin").value = rev.biggestWin || "";
    document.getElementById("monthImprove").value = rev.needsImprovement || "";
    document.getElementById("monthFocus").value = rev.focusNext || "";
  } else {
    const start = fmtDate(YEAR_START);
    const yearEnd = new Date(YEAR_START); yearEnd.setFullYear(yearEnd.getFullYear()+1); yearEnd.setDate(yearEnd.getDate()-1);
    const end = fmtDate(yearEnd);
    document.getElementById("yearReviewStats").innerHTML = statGridHtml(computeRangeStats(start, end<todayKey()?end:todayKey()));
    document.getElementById("yearChanged").value = state.reviews.yearly.whatChanged || "";
  }
}
document.getElementById("saveWeekReviewBtn").addEventListener("click", ()=>{
  state.reviews.weekly[reviewWeekIdx] = {
    wentWell: document.getElementById("weekWentWell").value,
    improve: document.getElementById("weekImprove").value,
    focus: document.getElementById("weekFocus").value,
    savedAt: Date.now(),
  };
  saveState(); toast("Weekly review saved");
});
document.getElementById("saveMonthReviewBtn").addEventListener("click", ()=>{
  state.reviews.monthly[reviewMonthIdx] = {
    biggestWin: document.getElementById("monthWin").value,
    needsImprovement: document.getElementById("monthImprove").value,
    focusNext: document.getElementById("monthFocus").value,
    savedAt: Date.now(),
  };
  saveState(); toast("Monthly review saved");
});
document.getElementById("saveYearReviewBtn").addEventListener("click", ()=>{
  state.reviews.yearly = { whatChanged: document.getElementById("yearChanged").value, savedAt: Date.now() };
  saveState(); toast("Year reflection saved");
});
document.getElementById("exportYearReportBtn").addEventListener("click", ()=>{
  const start = fmtDate(YEAR_START);
  const end = todayKey();
  const s = computeRangeStats(start, end);
  const xp = computeTotalXP(); const level = computeLevel(xp); const rank = rankForLevel(level);
  const lines = [
    "ONE PIECE — DISCIPLINE TRACKER", "YOUR 2026-27 JOURNEY (through " + end + ")", "",
    `Habit completion: ${s.habitPct}%`, `Average Discipline Score: ${s.avgScore}`,
    `Current streak: ${computeStreak()} days`, `Workout days: ${s.workoutDays}`,
    `Money saved: ₹${s.moneySaved.toLocaleString("en-IN")}`,
    `Tasks completed: ${s.tasksCompleted}/${s.tasksDue}`, `Journal entries: ${s.journalCount}`,
    `Learn topics completed: ${s.learnDoneTotal}`,
    `Level ${level} — ${rank.name} (${xp} XP)`,
    `Achievements unlocked: ${ACHIEVEMENTS.filter(a=>state.unlockedAchievements[a.id]).length}/${ACHIEVEMENTS.length}`,
    "", "What changed this year:", state.reviews.yearly.whatChanged || "(not written yet)",
  ];
  const blob = new Blob([lines.join("\n")], {type:"text/plain"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `one-piece-year-report-${end}.txt`;
  a.click();
  toast("Year report downloaded");
});

/* ---------- SMART INSIGHTS (Analytics) ---------- */
function renderInsights(){
  const wrap = document.getElementById("insightsList");
  if(!wrap) return;
  const insights = [];
  const loggedDates = Object.keys(state.dailyLogs);
  if(state.habits.daily.length>0 && loggedDates.length>=14){
    const byWeekday = [0,0,0,0,0,0,0], countByWeekday=[0,0,0,0,0,0,0];
    loggedDates.forEach(d=>{
      const wd = new Date(d).getDay();
      const log = state.dailyLogs[d];
      let pctSum=0; state.habits.daily.forEach((h,i)=>pctSum+=entryProgress(log[i],h).pct);
      byWeekday[wd] += pctSum/state.habits.daily.length;
      countByWeekday[wd]++;
    });
    const avgs = byWeekday.map((v,i)=> countByWeekday[i]>0 ? v/countByWeekday[i] : -1);
    const names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let bestI=-1, worstI=-1;
    avgs.forEach((v,i)=>{ if(v>=0 && (bestI===-1||v>avgs[bestI])) bestI=i; if(v>=0 && (worstI===-1||v<avgs[worstI])) worstI=i; });
    if(bestI>-1) insights.push(`${names[bestI]} is your strongest day for habits, averaging ${Math.round(avgs[bestI]*100)}% completion.`);
    if(worstI>-1 && worstI!==bestI) insights.push(`${names[worstI]} tends to be your weakest day, averaging ${Math.round(avgs[worstI]*100)}% completion.`);
  }
  if(state.transactions.length>=14){
    const spendByType = {weekday:[], weekend:[]};
    const txDates = [...new Set(state.transactions.map(t=>t.date))];
    txDates.forEach(d=>{
      const wd = new Date(d).getDay();
      const spend = sumTx(txOnDate(d),"expense");
      (wd===0||wd===6 ? spendByType.weekend : spendByType.weekday).push(spend);
    });
    if(spendByType.weekday.length>=3 && spendByType.weekend.length>=2){
      const avgWeekday = spendByType.weekday.reduce((a,b)=>a+b,0)/spendByType.weekday.length;
      const avgWeekend = spendByType.weekend.reduce((a,b)=>a+b,0)/spendByType.weekend.length;
      if(avgWeekend > avgWeekday*1.15){
        insights.push(`You spend more on weekends — about ₹${Math.round(avgWeekend)} vs ₹${Math.round(avgWeekday)} on weekdays.`);
      } else if(avgWeekday > avgWeekend*1.15){
        insights.push(`You spend more on weekdays — about ₹${Math.round(avgWeekday)} vs ₹${Math.round(avgWeekend)} on weekends.`);
      }
    }
  }
  if(state.exerciseNames.length>0 && Object.keys(state.exerciseLogs).length>=7 && state.habits.daily.length>0){
    let onWorkoutDays=0, onWorkoutCount=0, onRestDays=0, onRestCount=0;
    Object.keys(state.dailyLogs).forEach(d=>{
      const log = state.dailyLogs[d];
      let pctSum=0; state.habits.daily.forEach((h,i)=>pctSum+=entryProgress(log[i],h).pct);
      const pct = pctSum/state.habits.daily.length;
      if((state.exerciseLogs[d]||[]).length>0){ onWorkoutDays+=pct; onWorkoutCount++; }
      else { onRestDays+=pct; onRestCount++; }
    });
    if(onWorkoutCount>=3 && onRestCount>=3){
      const wPct = Math.round((onWorkoutDays/onWorkoutCount)*100);
      const rPct = Math.round((onRestDays/onRestCount)*100);
      if(wPct > rPct+5) insights.push(`You complete ${wPct-rPct} percentage points more of your habits on days you also work out.`);
    }
  }
  if(Object.keys(state.journalEntries).length>=7 && state.habits.daily.length>0){
    let journaledPct=0, journaledCount=0;
    Object.keys(state.journalEntries).forEach(d=>{
      const log = state.dailyLogs[d];
      if(!log) return;
      let pctSum=0; state.habits.daily.forEach((h,i)=>pctSum+=entryProgress(log[i],h).pct);
      journaledPct += pctSum/state.habits.daily.length; journaledCount++;
    });
    if(journaledCount>=5){
      insights.push(`Your journaled days had an average habit completion of ${Math.round((journaledPct/journaledCount)*100)}%.`);
    }
  }
  if(insights.length===0){
    wrap.innerHTML = `<p class="hint">Keep logging — insights appear automatically once there's enough data to say something meaningful (usually 2+ weeks).</p>`;
  } else {
    wrap.innerHTML = insights.map(t=> `<div class="time-of-day-row" style="justify-content:flex-start;"><span>💡 ${escapeHtml(t)}</span></div>`).join("");
  }
}

/* ---------- Init ---------- */
applyHomeCardVisibility();
applyHomeCardOrder();
renderHome();
checkTaskReminders();
topUpRecurringTasks();
applySectionBackgrounds();
checkAchievements();
if(!state.settings.onboardingDone){
  document.getElementById("onboardingOverlay").classList.remove("hidden");
}
if(state.appLock.enabled){
  showLockScreen();
}
