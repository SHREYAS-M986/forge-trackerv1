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

/* ---------- Exercise library (original motion cues, no copyrighted media) ---------- */
const CALISTHENICS = [
  {name:"Push-Up", type:"push", area:"Chest / Triceps / Shoulders", sets:"3 x 12–15", cue:"Keep body in a straight line, elbows around 45° from torso."},
  {name:"Pull-Up", type:"pull", area:"Back / Biceps", sets:"3 x 6–10", cue:"Full hang to chin over bar, control the descent."},
  {name:"Dip", type:"push", area:"Triceps / Chest", sets:"3 x 8–12", cue:"Lean slightly forward, elbows tucked close to body."},
  {name:"Bodyweight Squat", type:"squat", area:"Quads / Glutes", sets:"3 x 15–20", cue:"Knees track over toes, chest stays up."},
  {name:"Pistol Squat (progression)", type:"squat", area:"Quads / Glutes / Balance", sets:"3 x 5 each leg", cue:"Use a support at first, control the descent."},
  {name:"Walking Lunge", type:"squat", area:"Quads / Glutes", sets:"3 x 12 each leg", cue:"Front knee stays stacked over the ankle."},
  {name:"Plank", type:"core", area:"Core / Shoulders", sets:"3 x 45–60s hold", cue:"Squeeze glutes, don't let hips sag or pike."},
  {name:"Hollow Body Hold", type:"core", area:"Core", sets:"3 x 20–30s hold", cue:"Lower back pressed to floor, arms and legs extended."},
  {name:"L-Sit", type:"core", area:"Core / Hip flexors", sets:"3 x 10–20s hold", cue:"Push shoulders down away from ears, legs straight."},
  {name:"Mountain Climbers", type:"core", area:"Core / Cardio", sets:"3 x 30s", cue:"Drive knees fast, keep hips low and level."},
  {name:"Superman", type:"hinge", area:"Lower back / Glutes", sets:"3 x 15", cue:"Lift chest and legs together, squeeze at the top."},
  {name:"Glute Bridge", type:"hinge", area:"Glutes / Hamstrings", sets:"3 x 15", cue:"Squeeze glutes hard at the top, avoid arching the lower back."},
  {name:"Inverted Row", type:"pull", area:"Back / Biceps", sets:"3 x 10–12", cue:"Pull chest to the bar, squeeze shoulder blades together."},
  {name:"Pike Push-Up", type:"push", area:"Shoulders", sets:"3 x 8–10", cue:"Hips high, aim the crown of your head toward the floor."},
  {name:"Burpee", type:"push", area:"Full body / Cardio", sets:"3 x 10", cue:"Chest to floor, explosive jump at the top."},
];
const LOOKSMAXING = [
  {name:"Chin Tucks", type:"core", area:"Jawline / Neck posture", sets:"3 x 15", cue:"Pull chin straight back like making a double chin, don't tilt down."},
  {name:"Neck Curl", type:"hinge", area:"Neck / Jawline", sets:"3 x 12", cue:"Slow controlled curl, add light hand resistance if easy."},
  {name:"Isometric Jaw Hold", type:"core", area:"Jaw / Masseter", sets:"3 x 10s holds", cue:"Light to moderate pressure only — don't overdo it."},
  {name:"Posture Tongue Position", type:"stretch", area:"Tongue posture / Jawline", sets:"Hold through the day", cue:"Tongue flat on the roof of the mouth, lips sealed, teeth lightly touching. Evidence for changing bone structure is limited — this mainly builds posture awareness."},
  {name:"Wall Posture Stand", type:"stretch", area:"Posture / Spine", sets:"2 x 60s", cue:"Head, shoulder blades and glutes all touching the wall."},
  {name:"Cheek Lift (face yoga)", type:"core", area:"Cheeks", sets:"3 x 10", cue:"Smile wide, hold two seconds, release slowly."},
  {name:"Shoulder External Rotation", type:"pull", area:"Shoulders / Posture", sets:"3 x 15", cue:"Elbows pinned at sides, rotate forearms outward."},
  {name:"Wide-Grip Pull-Up", type:"pull", area:"Back width / V-taper", sets:"3 x 6–10", cue:"Wide grip, drive elbows down to bring chest to the bar."},
  {name:"Lateral Raise", type:"pull", area:"Shoulders / V-taper", sets:"3 x 15", cue:"Raise to shoulder height only, control the negative."},
  {name:"Face Pull (band)", type:"pull", area:"Rear delts / Posture", sets:"3 x 15", cue:"Pull toward your face, elbows finish high and wide."},
  {name:"Standing Cat-Cow", type:"stretch", area:"Spine mobility / Posture", sets:"2 x 10", cue:"Slow controlled wave through the whole spine."},
  {name:"Even-Sided Chewing", type:"core", area:"Jaw / Masseter", sets:"3 x 30 chews", cue:"Sugar-free gum, alternate sides evenly to keep jaw symmetric."},
];

function motionIcon(type){
  const bar = `<svg width="30" height="30" viewBox="0 0 30 30"><rect class="mo-bar" x="6" y="13" width="18" height="4" rx="2" fill="var(--gold)"/></svg>`;
  const dot = `<svg width="30" height="30" viewBox="0 0 30 30"><circle class="mo-dot" cx="15" cy="15" r="6"/></svg>`;
  if(type==="squat"||type==="hinge") return `<div class="motion-${type}">${bar}</div>`;
  return `<div class="motion-${type}">${dot}</div>`;
}

/* ---------- State ---------- */
const DEFAULT_STATE = () => ({
  habits: {
    daily: ["Wake up 6 AM","Workout / calisthenics","No junk food","Read 20 min","Journal","No phone after 11 PM","Cold shower"],
    weekly: ["Meal prep","Long run","Deep clean room","Review budget","Call family","Plan next week"],
    monthly: ["Full body progress photo","Review goals","Declutter","Skill practice review"],
  },
  dailyLogs: {},
  weeklyLogs: {},
  monthlyLogs: {},
  weightLogs: {},     // weekIndex -> {date, weight}
  stepLogs: {},        // "YYYY-MM-DD" -> steps
  workoutLogs: {},     // "YYYY-MM-DD" -> { "<exerciseIndex>": [bool,...] }
  workoutStatus: {},   // "YYYY-MM-DD" -> {type:"skipped"} | {type:"makeup", loggedOn:"YYYY-MM-DD"}
  bodyLogs: [],         // [{id, date, weight, waist}] — dedicated Fitness body-log entries (separate from weekly weightLogs)
  tasks: [],           // {id, title, dueDate, notes, done, lastNotifiedDate, recurrence?, seriesId?}
  money: { initialBalance: 0 },   // per-month entries: money[i] = {income, fixed, expenses:[{id,category,amount,note}]}
  expenseCategories: ["Food","Transport","Subscriptions","Misc"],
  goals: [],
  learn: [],
  settings: {
    notifOn:false, reminderTime:"20:00", taskNotifOn:true,
    stepsOn:false, weightOn:false, weightDay:1, lastWeightPromptWeek:null,
    reduceMotion:false, theme:"classic",
  },
});

let state = loadState();
function loadState(){
  try{
    const raw = localStorage.getItem("forgeData");
    if(!raw) return DEFAULT_STATE();
    const parsed = JSON.parse(raw);
    const d = DEFAULT_STATE();
    return {...d, ...parsed, habits:{...d.habits,...(parsed.habits||{})}, settings:{...d.settings,...(parsed.settings||{})}, money:{...d.money,...(parsed.money||{})}};
  }catch(e){ return DEFAULT_STATE(); }
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

/* ---- Workout program week/day helpers ---- */
function mondayOnOrBefore(d){
  const day = d.getDay(); // 0=Sun..6=Sat
  const diff = (day===0) ? 6 : day-1;
  const m = new Date(d.getFullYear(), d.getMonth(), d.getDate()-diff);
  return m;
}
const PROGRAM_START_MONDAY = mondayOnOrBefore(YEAR_START);
function programWeekIndex(d){
  const diffDays = Math.floor((d - PROGRAM_START_MONDAY) / 86400000);
  const w = Math.floor(diffDays/7) + 1;
  return Math.min(Math.max(w,1), 52);
}
function programDayName(d){
  return WORKOUT_DAYS_ORDER[(d.getDay()+6)%7]; // convert JS Sun=0..Sat=6 to Mon-first index
}
function todaysWorkout(){ return getWorkoutForDate(new Date()); }
function getWorkoutForDate(d){
  const w = programWeekIndex(d);
  const dayIdx = (d.getDay()+6)%7;
  return WORKOUT_PLAN[w-1][dayIdx];
}

/* ---- Workout day status: done / partial / missed / skipped / makeup / future / today-pending ---- */
function workoutSetsProgress(dateKey){
  const day = getWorkoutForDate(new Date(dateKey));
  const log = state.workoutLogs[dateKey] || {};
  let total=0, done=0;
  day.exercises.forEach((ex, exIdx)=>{
    const setsTarget = (typeof ex.sets === "number") ? ex.sets : 1;
    const exLog = log[exIdx] || [];
    total += setsTarget;
    done += exLog.filter(Boolean).length;
  });
  return {total, done, day};
}
function workoutDayStatus(dateKey){
  const rec = state.workoutStatus[dateKey];
  const today = todayKey();
  const {total, done} = workoutSetsProgress(dateKey);
  if(rec && rec.type==="skipped") return "skipped";
  if(rec && rec.type==="makeup"){
    if(total>0 && done>=total) return "makeup";
    if(done>0) return "makeup-partial";
    return dateKey<today ? "missed" : "future";
  }
  if(total>0 && done>=total) return "done";
  if(done>0) return dateKey===today ? "today-pending" : (dateKey<today ? "partial" : "future");
  if(dateKey===today) return "today-pending";
  if(dateKey<today) return "missed";
  return "future";
}
function workoutStatusMeta(status){
  const map = {
    done:        {label:"Done",       cls:"pill-excellent"},
    makeup:      {label:"Made up",    cls:"pill-good"},
    "makeup-partial": {label:"Make-up in progress", cls:"pill-fair"},
    partial:     {label:"Partial",    cls:"pill-fair"},
    skipped:     {label:"Skipped",    cls:"pill-neutral"},
    missed:      {label:"Missed",     cls:"pill-poor"},
    "today-pending": {label:"Today",  cls:"pill-neutral"},
    future:      {label:"Upcoming",   cls:"pill-neutral"},
  };
  return map[status] || {label:status, cls:"pill-neutral"};
}
function computeFitnessStreak(){
  let streak=0;
  let d = new Date();
  while(true){
    const key = fmtDate(d);
    const status = workoutDayStatus(key);
    if(status==="done" || status==="makeup"){ streak++; d.setDate(d.getDate()-1); }
    else if(status==="skipped" || status==="today-pending"){ d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

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

/* Effective monthly variable-expense total: itemized `expenses` array if present, else legacy flat `variable` number */
function monthExpensesTotal(entry){
  if(!entry) return 0;
  if(Array.isArray(entry.expenses) && entry.expenses.length>0){
    return entry.expenses.reduce((s,x)=> s+(x.amount||0), 0);
  }
  return entry.variable || 0;
}
function monthSavings(i){
  const e = state.money[i];
  if(!e) return 0;
  return (e.income||0) - (e.fixed||0) - monthExpensesTotal(e);
}

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
const VIEWS = ["home","habits","fitness","analytics","money","goals","learn","calendar","settings"];
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
  const log = state.dailyLogs[key] || Array(state.habits.daily.length).fill(false);
  const doneCount = log.filter(Boolean).length;
  const total = state.habits.daily.length;
  const pct = total ? doneCount/total : 0;

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

  const list = document.getElementById("todayHabits");
  list.innerHTML = "";
  state.habits.daily.forEach((name,i)=>{
    const on = !!log[i];
    const card = document.createElement("div");
    card.className = "habit-card" + (on?" checked":"");
    card.innerHTML = `
      <div><div class="habit-name">${escapeHtml(name)}</div></div>
      <div class="check-toggle ${on?"on":""}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#11111B" stroke-width="3"><path d="M4 12l5 5L20 6"/></svg></div>`;
    card.querySelector(".check-toggle").addEventListener("click", ()=>{
      const arr = state.dailyLogs[key] || Array(total).fill(false);
      const turningOn = !arr[i];
      arr[i] = turningOn;
      state.dailyLogs[key] = arr;
      saveState();
      renderHome();
      if(turningOn && !state.settings.reduceMotion){
        requestAnimationFrame(()=>{
          const newCard = list.children[i];
          if(newCard){
            newCard.classList.add("pop");
            newCard.querySelector(".check-toggle").classList.add("pop");
            setTimeout(()=>newCard.classList.remove("pop"), 650);
          }
        });
      }
    });
    list.appendChild(card);
  });

  const stepsWrap = document.getElementById("stepsStatWrap");
  stepsWrap.classList.toggle("hidden", !state.settings.stepsOn);
  document.getElementById("stepsStatNum").textContent = state.stepLogs[key] || 0;

  renderPerfectDayCard();
  renderTrendChart();
  maybePromptWeight();
}

function renderPerfectDayCard(){
  const key = todayKey();
  const perfect = isPerfectDay(key);
  const streak = computePerfectStreak();
  const card = document.getElementById("perfectDayCard");
  card.innerHTML = `
    <div class="perfect-day-left">
      <div class="perfect-day-star">${perfect ? "🌟" : "⭐"}</div>
      <div>
        <div class="perfect-day-title">${perfect ? "Perfect Day!" : "Perfect Day — not yet"}</div>
        <div class="perfect-day-sub">All habits + workout${state.settings.stepsOn?" + steps":""}</div>
      </div>
    </div>
    <div class="perfect-day-streak">${streak}</div>`;
}

function computeStreak(){
  let streak=0;
  let d = new Date();
  while(true){
    const key = fmtDate(d);
    const log = state.dailyLogs[key];
    if(log && log.some(Boolean)){ streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

/* ---- Perfect Day: all daily habits + workout done + steps logged (if enabled) ---- */
function isPerfectDay(dateKey){
  const dailyLog = state.dailyLogs[dateKey] || [];
  const totalHabits = state.habits.daily.length;
  const allHabitsDone = totalHabits>0 && dailyLog.filter(Boolean).length === totalHabits;
  const wStatus = workoutDayStatus(dateKey);
  const workoutDone = wStatus==="done" || wStatus==="makeup";
  let stepsOk = true;
  if(state.settings.stepsOn){
    stepsOk = !!(state.stepLogs[dateKey] && state.stepLogs[dateKey] > 0);
  }
  return allHabitsDone && workoutDone && stepsOk;
}
function computePerfectStreak(){
  let streak=0;
  let d = new Date();
  while(true){
    const key = fmtDate(d);
    if(isPerfectDay(key)){ streak++; d.setDate(d.getDate()-1); }
    else if(key===todayKey()){ d.setDate(d.getDate()-1); } // today not yet perfect — don't break, just don't count
    else break;
  }
  return streak;
}
function countPerfectDaysYTD(){
  let count=0;
  const todayStr = todayKey();
  let d = new Date(YEAR_START);
  while(fmtDate(d) <= todayStr){
    if(isPerfectDay(fmtDate(d))) count++;
    d.setDate(d.getDate()+1);
  }
  return count;
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
  state.habits.daily.forEach((name, hi)=>{
    let row = `<tr><td class="habit-label">${escapeHtml(name)}</td>`;
    let count=0;
    for(let d=1; d<=m.days; d++){
      const dateObj = new Date(start.getFullYear(), start.getMonth(), d);
      const key = fmtDate(dateObj);
      const log = state.dailyLogs[key] || [];
      const on = !!log[hi];
      if(on){count++; dayTotals[d-1]++;}
      const isToday = key===todayStr;
      row += `<td class="day-cell ${on?"on":""} ${isToday?"today":""}" data-date="${key}" data-hi="${hi}">${on?"✓":""}</td>`;
    }
    const pct = Math.round((count/m.days)*100);
    row += `<td class="mono">${pct}%</td></tr>`;
    rows += row;
  });

  table.innerHTML = thead + rows;
  table.querySelectorAll(".day-cell").forEach(cell=>{
    cell.addEventListener("click", ()=>{
      const key = cell.dataset.date, hi = +cell.dataset.hi;
      const arr = state.dailyLogs[key] || Array(state.habits.daily.length).fill(false);
      arr[hi] = !arr[hi];
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
  const log = state.weeklyLogs[currentWeekIdx] || Array(state.habits.weekly.length).fill(false);
  list.innerHTML = "";
  state.habits.weekly.forEach((name,i)=>{
    const on = !!log[i];
    const card = document.createElement("div");
    card.className = "habit-card" + (on?" checked":"");
    card.innerHTML = `<div class="habit-name">${escapeHtml(name)}</div>
      <div class="check-toggle ${on?"on":""}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#11111B" stroke-width="3"><path d="M4 12l5 5L20 6"/></svg></div>`;
    card.querySelector(".check-toggle").addEventListener("click", ()=>{
      const arr = state.weeklyLogs[currentWeekIdx] || Array(state.habits.weekly.length).fill(false);
      arr[i] = !arr[i];
      state.weeklyLogs[currentWeekIdx] = arr;
      saveState();
      renderWeekly();
    });
    list.appendChild(card);
  });
}

function renderMonthly(){
  const list = document.getElementById("monthlyHabits");
  const log = state.monthlyLogs[currentMonthIdx] || Array(state.habits.monthly.length).fill(false);
  list.innerHTML = "";
  const m = MONTHS[currentMonthIdx];
  state.habits.monthly.forEach((name,i)=>{
    const on = !!log[i];
    const card = document.createElement("div");
    card.className = "habit-card" + (on?" checked":"");
    card.innerHTML = `<div><div class="habit-name">${escapeHtml(name)}</div><div class="habit-cat">${m.name} ${m.year}</div></div>
      <div class="check-toggle ${on?"on":""}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#11111B" stroke-width="3"><path d="M4 12l5 5L20 6"/></svg></div>`;
    card.querySelector(".check-toggle").addEventListener("click", ()=>{
      const arr = state.monthlyLogs[currentMonthIdx] || Array(state.habits.monthly.length).fill(false);
      arr[i] = !arr[i];
      state.monthlyLogs[currentMonthIdx] = arr;
      saveState();
      renderMonthly();
    });
    list.appendChild(card);
  });
}

/* ---------- FITNESS ---------- */
let fitnessSeg = "today";
let librarySeg = "calisthenics";
let fitnessViewDate = todayKey();

document.querySelectorAll("#fitnessSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#fitnessSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    fitnessSeg = b.dataset.fseg;
    ["today","history","body","library"].forEach(s=>{
      document.getElementById("fseg-"+s).classList.toggle("hidden", s!==fitnessSeg);
    });
    renderFitness();
  });
});
document.querySelectorAll("#librarySeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#librarySeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    librarySeg = b.dataset.lseg;
    renderLibrary();
  });
});

function renderFitness(){
  if(fitnessSeg==="today") renderTodayWorkout();
  else if(fitnessSeg==="history") renderWorkoutHistory();
  else if(fitnessSeg==="body") renderBodyLog();
  else renderLibrary();
}

function renderTodayWorkout(){
  const key = fitnessViewDate;
  const dateObj = new Date(key);
  const w = programWeekIndex(dateObj);
  const day = getWorkoutForDate(dateObj);
  document.getElementById("workoutFocus").textContent = day.focus;
  document.getElementById("workoutMeta").textContent = `Week ${w} of 52 · ${day.phase} · 🔥 ${computeFitnessStreak()} day streak`;

  const isToday = key === todayKey();
  const banner = document.getElementById("viewingDateBanner");
  banner.classList.toggle("hidden", isToday);
  if(!isToday){
    document.getElementById("viewingDateLabel").textContent =
      "Viewing " + new Date(key).toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"short"});
  }

  const stepsWrap = document.getElementById("stepsCardWrap");
  stepsWrap.classList.toggle("hidden", !state.settings.stepsOn || !isToday);
  if(state.settings.stepsOn && isToday){
    document.getElementById("stepsInput").value = state.stepLogs[todayKey()] || "";
  }

  const status = workoutDayStatus(key);
  const isPastIncomplete = key < todayKey() && (status==="missed" || status==="partial");
  document.getElementById("makeupHint").textContent = isPastIncomplete
    ? "This day is incomplete. Ticking sets below logs it as a make-up session."
    : "";

  const log = state.workoutLogs[key] || {};
  const list = document.getElementById("todayExerciseList");
  list.innerHTML = "";

  let totalSets=0, doneSets=0;

  day.exercises.forEach((ex, exIdx)=>{
    const setsTarget = (typeof ex.sets === "number") ? ex.sets : 1;
    const exLog = log[exIdx] || Array(setsTarget).fill(false);
    const doneCount = exLog.filter(Boolean).length;
    totalSets += setsTarget; doneSets += doneCount;
    const allDone = doneCount >= setsTarget;

    const card = document.createElement("div");
    card.className = "workout-exercise-card" + (allDone ? " complete" : "");
    const pipsHtml = Array.from({length:setsTarget}).map((_,si)=>{
      const on = !!exLog[si];
      const label = (typeof ex.sets === "number") ? (si+1) : "✓";
      return `<div class="set-pip ${on?"done":""}" data-ex="${exIdx}" data-set="${si}">${label}</div>`;
    }).join("");
    card.innerHTML = `
      <div class="workout-ex-top">
        <div>
          <div class="workout-ex-name">${escapeHtml(ex.name)}</div>
          <div class="workout-ex-target">${typeof ex.sets==="number" ? ex.sets+" sets" : ""} ${ex.sets!=="-"?"×":""} ${escapeHtml(String(ex.reps))}</div>
        </div>
      </div>
      <div class="set-pips">${pipsHtml}</div>`;
    card.querySelectorAll(".set-pip").forEach(pip=>{
      pip.addEventListener("click", ()=>{
        const exI = +pip.dataset.ex, setI = +pip.dataset.set;
        if(!state.workoutLogs[key]) state.workoutLogs[key] = {};
        if(!state.workoutLogs[key][exI]) state.workoutLogs[key][exI] = Array(setsTarget).fill(false);
        const turningOn = !state.workoutLogs[key][exI][setI];
        state.workoutLogs[key][exI][setI] = turningOn;
        // auto-flag as make-up: ticking a set on a past date that wasn't already skipped
        if(turningOn && key < todayKey()){
          const rec = state.workoutStatus[key];
          if(!rec || rec.type!=="skipped"){
            state.workoutStatus[key] = {type:"makeup", loggedOn: todayKey()};
          }
        }
        saveState();
        renderTodayWorkout();
        if(turningOn && !state.settings.reduceMotion){
          requestAnimationFrame(()=>{
            const freshPip = list.querySelector(`.set-pip[data-ex="${exI}"][data-set="${setI}"]`);
            if(freshPip){ freshPip.classList.add("pop"); setTimeout(()=>freshPip.classList.remove("pop"), 420); }
          });
        }
      });
    });
    list.appendChild(card);
  });

  const pct = totalSets ? doneSets/totalSets : 0;
  const freshStatus = workoutDayStatus(key);
  if(freshStatus==="skipped"){
    document.getElementById("workoutRating").innerHTML =
      `<span>This session was skipped</span><span class="rating-pill pill-neutral">Skipped</span>`;
  } else {
    const r = ratingLabel(pct);
    document.getElementById("workoutRating").innerHTML =
      `<span>Progress: <b class="mono">${doneSets}/${totalSets} sets</b> (${Math.round(pct*100)}%)</span><span class="rating-pill ${r.cls}">${r.label}</span>`;
  }
  const sm = workoutStatusMeta(freshStatus);
  document.getElementById("workoutStatusRow").innerHTML = `<span class="rating-pill ${sm.cls}">${sm.label}</span>`;

  const skipBtn = document.getElementById("skipSessionBtn");
  skipBtn.textContent = freshStatus==="skipped" ? "Unskip this session" : "Skip this session (rest / injury)";
}

document.getElementById("backToTodayBtn").addEventListener("click", ()=>{
  fitnessViewDate = todayKey();
  renderTodayWorkout();
});
document.getElementById("skipSessionBtn").addEventListener("click", ()=>{
  const key = fitnessViewDate;
  const current = state.workoutStatus[key];
  if(current && current.type==="skipped"){
    delete state.workoutStatus[key];
    toast("Session unskipped");
  } else {
    state.workoutStatus[key] = {type:"skipped"};
    toast("Marked as skipped — won't count against your streak or rating");
  }
  saveState();
  renderTodayWorkout();
});

function renderWorkoutHistory(){
  const wrap = document.getElementById("workoutHistoryList");
  wrap.innerHTML = "";
  const todayStr = todayKey();
  for(let i=0; i<21; i++){
    const d = new Date(); d.setDate(d.getDate()-i);
    const key = fmtDate(d);
    const day = getWorkoutForDate(d);
    const status = workoutDayStatus(key);
    const meta = workoutStatusMeta(status);
    const row = document.createElement("div");
    row.className = "history-row";
    row.innerHTML = `
      <div>
        <div class="history-date">${key===todayStr?"Today":d.toLocaleDateString(undefined,{weekday:"short",day:"numeric",month:"short"})}</div>
        <div class="history-focus">${escapeHtml(day.focus)}</div>
      </div>
      <span class="rating-pill ${meta.cls}">${meta.label}</span>`;
    row.addEventListener("click", ()=>{
      fitnessViewDate = key;
      document.querySelectorAll("#fitnessSeg .seg-btn").forEach(x=>x.classList.toggle("active", x.dataset.fseg==="today"));
      fitnessSeg = "today";
      ["today","history","body","library"].forEach(s=>document.getElementById("fseg-"+s).classList.toggle("hidden", s!=="today"));
      renderTodayWorkout();
    });
    wrap.appendChild(row);
  }
}

/* ---- Body log (dedicated Fitness weight/measurement entry) ---- */
document.getElementById("addBodyLogBtn").addEventListener("click", ()=>{
  const weight = +document.getElementById("bodyWeightInput").value;
  const waist = document.getElementById("bodyWaistInput").value ? +document.getElementById("bodyWaistInput").value : null;
  if(!weight || weight<=0){ toast("Enter a valid weight"); return; }
  state.bodyLogs.push({ id: Date.now()+"", date: todayKey(), weight, waist });
  saveState();
  document.getElementById("bodyWeightInput").value = "";
  document.getElementById("bodyWaistInput").value = "";
  toast("Logged");
  renderBodyLog();
});
function renderBodyLog(){
  const wrap = document.getElementById("bodyLogList");
  wrap.innerHTML = "";
  const entries = [...state.bodyLogs].sort((a,b)=> b.date.localeCompare(a.date)).slice(0,15);
  if(entries.length===0){ wrap.innerHTML = `<p class="hint">No entries yet.</p>`; return; }
  entries.forEach(e=>{
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <div>
        <div class="task-title">${e.weight} kg${e.waist ? ` · ${e.waist} cm waist` : ""}</div>
        <div class="task-meta">${new Date(e.date).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"})}</div>
      </div>
      <div class="task-actions"><button class="task-icon-btn" data-act="del">✕</button></div>`;
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      state.bodyLogs = state.bodyLogs.filter(x=>x.id!==e.id);
      saveState(); renderBodyLog();
    });
    wrap.appendChild(card);
  });
}

function renderLibrary(){
  const list = document.getElementById("exerciseList");
  const hint = document.getElementById("fitnessHint");
  const data = librarySeg==="calisthenics" ? CALISTHENICS : LOOKSMAXING;
  hint.textContent = librarySeg==="calisthenics"
    ? "Bodyweight strength moves. Motion icons show the movement pattern — push, pull, squat, hinge, hold or stretch."
    : "Posture, jaw and physique-aesthetic focused moves. Facial-exercise research is limited — treat these as posture/muscle-tone habits, not guaranteed structural change.";
  list.innerHTML = "";
  data.forEach(ex=>{
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-motion">${motionIcon(ex.type)}</div>
      <div class="exercise-info">
        <div class="exercise-name">${escapeHtml(ex.name)}</div>
        <div class="exercise-meta">${escapeHtml(ex.area)} · ${escapeHtml(ex.sets)}</div>
        <div class="exercise-cue">${escapeHtml(ex.cue)}</div>
        <span class="exercise-link" data-name="${escapeHtml(ex.name)}">Watch form video ↗</span>
      </div>`;
    card.querySelector(".exercise-link").addEventListener("click", (e)=>{
      const q = encodeURIComponent(e.target.dataset.name + " proper form");
      window.open(`https://www.youtube.com/results?search_query=${q}`, "_blank");
    });
    list.appendChild(card);
  });
}
document.getElementById("stepsInput").addEventListener("input", (e)=>{
  state.stepLogs[todayKey()] = +e.target.value || 0;
  saveState();
  updateHomeStepsStat();
});
function updateHomeStepsStat(){
  const wrap = document.getElementById("stepsStatWrap");
  wrap.classList.toggle("hidden", !state.settings.stepsOn);
  document.getElementById("stepsStatNum").textContent = state.stepLogs[todayKey()] || 0;
}

/* ---------- ANALYTICS ---------- */
let monthlyChartInstance=null, weeklyTrendChartInstance=null, weightChartInstance=null, stepsChartInstance=null, perfectDayChartInstance=null;
function renderAnalytics(){
  const dailyTotal = state.habits.daily.length;
  let ytdDone=0, ytdPossible=0, monthPcts=[];
  MONTHS.forEach((m,i)=>{
    const start = monthStartDate(i);
    let done=0;
    for(let d=1; d<=m.days; d++){
      const key = fmtDate(new Date(start.getFullYear(), start.getMonth(), d));
      const log = state.dailyLogs[key] || [];
      done += log.filter(Boolean).length;
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
  document.getElementById("anaPerfectStreak").textContent = computePerfectStreak();
  document.getElementById("anaPerfectYTD").textContent = countPerfectDaysYTD();
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

  const pdLabels=[], pdData=[];
  for(let i=13;i>=0;i--){
    const d=new Date(); d.setDate(d.getDate()-i);
    pdLabels.push(d.toLocaleDateString(undefined,{day:"numeric",month:"short"}));
    pdData.push(isPerfectDay(fmtDate(d)) ? 1 : 0);
  }
  const ctxPD = document.getElementById("perfectDayChart");
  if(perfectDayChartInstance) perfectDayChartInstance.destroy();
  perfectDayChartInstance = new Chart(ctxPD, {
    type:"bar",
    data:{labels:pdLabels, datasets:[{data:pdData, backgroundColor:"#F9C74F", borderRadius:6}]},
    options:{responsive:true, animation:{duration:700,easing:"easeOutQuart"}, plugins:{legend:{display:false}},
      scales:{y:{min:0,max:1,ticks:{color:"#8991B3",stepSize:1,callback:v=>v?"Perfect":"—"}, grid:{color:"#2D2D44"}}, x:{ticks:{color:"#8991B3"},grid:{display:false}}}}
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
}

/* ---------- MONEY ---------- */
let currentMoneyIdx = monthIndexOf(new Date());
document.getElementById("prevMoneyMonth").addEventListener("click", ()=>{ currentMoneyIdx=(currentMoneyIdx+11)%12; renderMoney(); });
document.getElementById("nextMoneyMonth").addEventListener("click", ()=>{ currentMoneyIdx=(currentMoneyIdx+1)%12; renderMoney(); });
let moneyChartInstance = null, categoryChartInstance = null;

function ensureMoneyEntry(i){
  if(!state.money[i]) state.money[i] = {income:0, fixed:0, expenses:[]};
  if(!Array.isArray(state.money[i].expenses)) state.money[i].expenses = [];
  return state.money[i];
}
function currentMoneyEntry(){ return state.money[currentMoneyIdx] || {income:0, fixed:0, expenses:[]}; }

function renderMoney(){
  const m = MONTHS[currentMoneyIdx];
  document.getElementById("moneyMonthLabel").textContent = `${m.name} ${m.year}`;
  const entry = currentMoneyEntry();
  document.getElementById("incomeInput").value = entry.income || "";
  document.getElementById("fixedInput").value = entry.fixed || "";
  document.getElementById("initialBalanceInput").value = state.money.initialBalance || "";
  renderExpenseList();
  renderCategoryChips();
  updateMoneyDerived();
  renderMoneyChart();
  renderCategoryChart();
}
function updateMoneyDerived(){
  const income = +document.getElementById("incomeInput").value || 0;
  const fixed = +document.getElementById("fixedInput").value || 0;
  const variable = monthExpensesTotal(currentMoneyEntry());
  const savings = income - fixed - variable;
  const rate = income ? (savings/income)*100 : 0;
  document.getElementById("savingsOut").textContent = "₹" + savings.toLocaleString("en-IN");
  document.getElementById("savingsRateOut").textContent = Math.round(rate) + "%";

  let cumulative = state.money.initialBalance || 0;
  for(let i=0;i<=currentMoneyIdx;i++){
    if(i===currentMoneyIdx){ cumulative += savings; }
    else { cumulative += monthSavings(i); }
  }
  document.getElementById("runningBalanceOut").textContent = "₹" + cumulative.toLocaleString("en-IN");
}
["incomeInput","fixedInput"].forEach(id=>{
  document.getElementById(id).addEventListener("input", ()=>{
    const entry = ensureMoneyEntry(currentMoneyIdx);
    entry.income = +document.getElementById("incomeInput").value || 0;
    entry.fixed = +document.getElementById("fixedInput").value || 0;
    saveState();
    updateMoneyDerived();
    renderMoneyChart();
  });
});
document.getElementById("initialBalanceInput").addEventListener("input", (e)=>{
  state.money.initialBalance = +e.target.value || 0;
  saveState();
  updateMoneyDerived();
});

/* itemized expenses */
function renderExpenseList(){
  const wrap = document.getElementById("expenseList");
  wrap.innerHTML = "";
  const entry = ensureMoneyEntry(currentMoneyIdx);
  if(entry.expenses.length===0){
    wrap.innerHTML = `<p class="hint">No expenses logged for this month yet.</p>`;
    return;
  }
  entry.expenses.forEach((exp)=>{
    const row = document.createElement("div");
    row.className = "expense-row";
    const options = state.expenseCategories.map(c=>
      `<option value="${escapeAttr(c)}" ${c===exp.category?"selected":""}>${escapeHtml(c)}</option>`).join("");
    row.innerHTML = `
      <select>${options}</select>
      <input type="number" inputmode="numeric" value="${exp.amount||0}" placeholder="₹" />
      <button aria-label="Remove">✕</button>`;
    row.querySelector("select").addEventListener("change",(e)=>{
      exp.category = e.target.value; saveState(); renderCategoryChart();
    });
    row.querySelector("input").addEventListener("input",(e)=>{
      exp.amount = +e.target.value || 0;
      saveState();
      updateMoneyDerived(); renderMoneyChart(); renderCategoryChart();
    });
    row.querySelector("button").addEventListener("click", ()=>{
      entry.expenses = entry.expenses.filter(x=>x.id!==exp.id);
      saveState();
      renderExpenseList(); updateMoneyDerived(); renderMoneyChart(); renderCategoryChart();
    });
    wrap.appendChild(row);
  });
}
document.getElementById("addExpenseBtn").addEventListener("click", ()=>{
  const entry = ensureMoneyEntry(currentMoneyIdx);
  entry.expenses.push({id:Date.now()+"", category: state.expenseCategories[0]||"Misc", amount:0, note:""});
  saveState();
  renderExpenseList(); updateMoneyDerived(); renderMoneyChart(); renderCategoryChart();
});

/* category management */
function renderCategoryChips(){
  const wrap = document.getElementById("categoryChips");
  wrap.innerHTML = "";
  state.expenseCategories.forEach(cat=>{
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `<span>${escapeHtml(cat)}</span><button aria-label="Remove category">✕</button>`;
    chip.querySelector("button").addEventListener("click", ()=>{
      if(state.expenseCategories.length<=1){ toast("Keep at least one category"); return; }
      state.expenseCategories = state.expenseCategories.filter(c=>c!==cat);
      saveState();
      renderCategoryChips(); renderExpenseList(); renderCategoryChart();
    });
    wrap.appendChild(chip);
  });
}
document.getElementById("addCategoryBtn").addEventListener("click", ()=>{
  const input = document.getElementById("newCategoryInput");
  const val = input.value.trim();
  if(!val){ return; }
  if(state.expenseCategories.includes(val)){ toast("Category already exists"); return; }
  state.expenseCategories.push(val);
  saveState();
  input.value = "";
  renderCategoryChips();
});

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
      scales:{
        y:{ticks:{color:"#8991B3"}, grid:{color:"#2D2D44"}},
        x:{ticks:{color:"#8991B3"}, grid:{display:false}}
      }
    }
  });
}
function renderCategoryChart(){
  const entry = currentMoneyEntry();
  const totals = {};
  (entry.expenses||[]).forEach(exp=>{
    totals[exp.category] = (totals[exp.category]||0) + (exp.amount||0);
  });
  const labels = Object.keys(totals);
  const data = labels.map(l=>totals[l]);
  const ctx = document.getElementById("categoryChart");
  if(categoryChartInstance) categoryChartInstance.destroy();
  if(labels.length===0){ return; }
  categoryChartInstance = new Chart(ctx, {
    type:"bar",
    data:{ labels, datasets:[{ data, backgroundColor:"#C9A6F7", borderRadius:6 }]},
    options:{
      indexAxis:"y",
      responsive:true, animation:{duration:700, easing:"easeOutQuart"},
      plugins:{legend:{display:false}},
      scales:{
        x:{ticks:{color:"#8991B3"}, grid:{color:"#2D2D44"}},
        y:{ticks:{color:"#8991B3"}, grid:{display:false}}
      }
    }
  });
}

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
  state.habits[manageSeg].forEach((name, idx)=>{
    const row = document.createElement("div");
    row.className = "manage-row";
    row.innerHTML = `<input type="text" value="${escapeAttr(name)}" /><button aria-label="Remove">✕</button>`;
    row.querySelector("input").addEventListener("input", (e)=>{
      state.habits[manageSeg][idx] = e.target.value;
      saveState();
    });
    row.querySelector("button").addEventListener("click", ()=> removeHabit(manageSeg, idx));
    wrap.appendChild(row);
  });
}
function addHabit(cat){
  state.habits[cat].push("New habit");
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

/* ---------- SETTINGS ---------- */
function renderSettings(){
  document.getElementById("notifToggle").checked = state.settings.notifOn;
  document.getElementById("reminderTime").value = state.settings.reminderTime;
  document.getElementById("taskNotifToggle").checked = state.settings.taskNotifOn;
  document.getElementById("stepsToggle").checked = state.settings.stepsOn;
  document.getElementById("weightToggle").checked = state.settings.weightOn;
  document.getElementById("weightDaySelect").value = String(state.settings.weightDay);
  document.getElementById("motionToggle").checked = state.settings.reduceMotion;
  document.querySelectorAll(".theme-swatch").forEach(el=>{
    el.classList.toggle("active", el.dataset.theme === (state.settings.theme||"classic"));
  });
  renderManageList();
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

function checkReminderLoop(){
  if(!state.settings.notifOn) return;
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
setInterval(()=>{ checkReminderLoop(); checkTaskReminders(); }, 60000);

document.getElementById("exportBtn").addEventListener("click", ()=>{
  const blob = new Blob([JSON.stringify(state,null,2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `forge-backup-${todayKey()}.json`;
  a.click();
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
  const d = DEFAULT_STATE();
  return {...d, ...parsed, habits:{...d.habits,...(parsed.habits||{})}, settings:{...d.settings,...(parsed.settings||{})}, money:{...d.money,...(parsed.money||{})}};
}
document.getElementById("resetBtn").addEventListener("click", ()=>{
  if(confirm("This clears all data on this device. Continue?")){
    state = DEFAULT_STATE();
    saveState();
    toast("Data reset");
    showView("home");
  }
});

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

/* ---------- Init ---------- */
renderHome();
checkTaskReminders();
topUpRecurringTasks();
