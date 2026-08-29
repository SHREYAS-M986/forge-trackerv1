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
  workoutLogs: {},     // "YYYY-MM-DD" -> { "<exerciseIndex>": [bool,...] }
  workoutStatus: {},   // "YYYY-MM-DD" -> {type:"skipped"} | {type:"makeup", loggedOn:"YYYY-MM-DD"}
  bodyLogs: [],         // [{id, date, weight, waist}]
  customExercises: [],  // [{id,name,category,muscleGroup,difficulty,equipment,description,cues,sets,reps,duration,rest,videoUrl,icon}]
  routines: [],          // [{id,name,exercises:[{name,sets,reps,duration,rest,sourceType,sourceId}]}]
  routineWorkoutLogs: [], // [{id,date,routineId,routineName,exercises:[{name,targetSets,targetReps,targetDuration,loggedSets:[bool]}],completedAt}]
  tasks: [],           // {id, title, dueDate, notes, done, lastNotifiedDate, recurrence?, seriesId?}
  money: { initialBalance: 0 },
  transactions: [],      // [{id,type:"income"|"expense",amount,category,date,note}]
  incomeCategories: ["Salary","Freelance","Pocket Money","Business","Other"],
  expenseCategories: ["Food","Transport","Shopping","Bills","Entertainment","Education","Fitness","Other"],
  goals: [],
  learn: [],
  journalEntries: {},  // "YYYY-MM-DD" -> {text, updatedAt}
  settings: {
    notifOn:false, reminderTime:"20:00", taskNotifOn:true,
    stepsOn:false, weightOn:false, weightDay:1, lastWeightPromptWeek:null,
    reduceMotion:false, theme:"classic", sectionBackgrounds:{},
    habitGroupingOn:true, migratedToV2:false,
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
  return {...d, ...parsed, habits:{...d.habits,...(parsed.habits||{})}, settings:{...d.settings,...(parsed.settings||{})}, money:{...d.money,...(parsed.money||{})}};
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
const VIEWS = ["home","habits","fitness","analytics","money","goals","learn","calendar","journal","settings"];
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

  renderPerfectDayCard();
  renderTrendChart();
  maybePromptWeight();
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
    const hasProgress = log && state.habits.daily.some((h,i)=> entryHasProgress(log[i], h));
    if(hasProgress){ streak++; d.setDate(d.getDate()-1); }
    else break;
  }
  return streak;
}

/* ---- Perfect Day: all daily habits + workout done + steps logged (if enabled) ---- */
function isPerfectDay(dateKey){
  const dailyLog = state.dailyLogs[dateKey] || [];
  const totalHabits = state.habits.daily.length;
  const allHabitsDone = totalHabits>0 && state.habits.daily.every((h,i)=> entryCountsAsDone(dailyLog[i], h));
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

/* ---------- FITNESS ---------- */
let fitnessSeg = "today";
let librarySeg = "calisthenics";
let fitnessViewDate = todayKey();

document.querySelectorAll("#fitnessSeg .seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll("#fitnessSeg .seg-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    fitnessSeg = b.dataset.fseg;
    ["today","history","body","routines","library"].forEach(s=>{
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
    document.getElementById("lseg-builtin").classList.toggle("hidden", librarySeg==="myexercises");
    document.getElementById("lseg-myexercises").classList.toggle("hidden", librarySeg!=="myexercises");
    renderLibrary();
  });
});

function renderFitness(){
  if(fitnessSeg==="today") renderTodayWorkout();
  else if(fitnessSeg==="history") renderWorkoutHistory();
  else if(fitnessSeg==="body") renderBodyLog();
  else if(fitnessSeg==="routines") renderRoutines();
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
  if(librarySeg==="myexercises"){ renderMyExercises(); return; }
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

/* ---------- CUSTOM EXERCISE BUILDER ---------- */
function guessMotionType(category){
  const map = {Strength:"push", Calisthenics:"push", Mobility:"stretch", Cardio:"core", Core:"core", Stretching:"stretch"};
  return map[category] || "core";
}
function renderMyExercises(){
  const list = document.getElementById("myExercisesList");
  list.innerHTML = "";
  if(state.customExercises.length===0){
    list.innerHTML = `<p class="hint">No custom exercises yet. Tap "+ Create exercise" to add one.</p>`;
    return;
  }
  state.customExercises.forEach(ex=>{
    const metaParts = [ex.muscleGroup, ex.sets?`${ex.sets} sets`:null, ex.reps||null].filter(Boolean).join(" · ");
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-motion">${motionIcon(guessMotionType(ex.category))}</div>
      <div class="exercise-info">
        <div class="exercise-name">${escapeHtml(ex.name)}</div>
        <div class="exercise-meta">${escapeHtml(metaParts||ex.category||"")}</div>
        ${ex.description?`<div class="exercise-cue">${escapeHtml(ex.description)}</div>`:""}
        <div class="custom-ex-actions">
          <button class="mini-btn" data-act="edit">Edit</button>
          <button class="mini-btn" data-act="dup">Duplicate</button>
          <button class="mini-btn delete" data-act="del">Delete</button>
        </div>
      </div>`;
    card.querySelector('[data-act="edit"]').addEventListener("click", ()=> openExerciseSheet(ex));
    card.querySelector('[data-act="dup"]').addEventListener("click", ()=>{
      state.customExercises.push({...ex, id:Date.now()+"", name:ex.name+" (copy)"});
      saveState(); renderMyExercises();
      toast("Exercise duplicated");
    });
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      if(!confirm("Delete this exercise? Past workout history using it keeps its name and logged data.")) return;
      state.customExercises = state.customExercises.filter(x=>x.id!==ex.id);
      saveState(); renderMyExercises();
      toast("Exercise deleted");
    });
    list.appendChild(card);
  });
}
let editingExerciseId = null;
function openExerciseSheet(ex){
  editingExerciseId = ex ? ex.id : null;
  document.getElementById("exerciseFormTitle").textContent = ex ? "Edit exercise" : "Create exercise";
  document.getElementById("exNameInput").value = ex ? ex.name : "";
  document.getElementById("exCategoryInput").value = ex ? (ex.category||"Strength") : "Strength";
  document.getElementById("exMuscleInput").value = ex ? (ex.muscleGroup||"Full Body") : "Full Body";
  document.getElementById("exDifficultyInput").value = ex ? (ex.difficulty||"Beginner") : "Beginner";
  document.getElementById("exEquipmentInput").value = ex ? (ex.equipment||"") : "";
  document.getElementById("exSetsInput").value = ex && ex.sets!=null ? ex.sets : "";
  document.getElementById("exRepsInput").value = ex ? (ex.reps||"") : "";
  document.getElementById("exDurationInput").value = ex ? (ex.duration||"") : "";
  document.getElementById("exRestInput").value = ex ? (ex.rest||"") : "";
  document.getElementById("exDescriptionInput").value = ex ? (ex.description||"") : "";
  document.getElementById("exCuesInput").value = ex ? (ex.cues||"") : "";
  document.getElementById("exVideoInput").value = ex ? (ex.videoUrl||"") : "";
  showSheet("exerciseBackdrop");
}
document.getElementById("createExerciseBtn").addEventListener("click", ()=> openExerciseSheet(null));
document.getElementById("exerciseCancelBtn").addEventListener("click", ()=> hideSheet("exerciseBackdrop"));
document.getElementById("exerciseSaveBtn").addEventListener("click", ()=>{
  const name = document.getElementById("exNameInput").value.trim();
  if(!name){ toast("Exercise name is required"); return; }
  const data = {
    name,
    category: document.getElementById("exCategoryInput").value,
    muscleGroup: document.getElementById("exMuscleInput").value,
    difficulty: document.getElementById("exDifficultyInput").value,
    equipment: document.getElementById("exEquipmentInput").value.trim(),
    sets: document.getElementById("exSetsInput").value ? +document.getElementById("exSetsInput").value : null,
    reps: document.getElementById("exRepsInput").value.trim(),
    duration: document.getElementById("exDurationInput").value.trim(),
    rest: document.getElementById("exRestInput").value.trim(),
    description: document.getElementById("exDescriptionInput").value.trim(),
    cues: document.getElementById("exCuesInput").value.trim(),
    videoUrl: document.getElementById("exVideoInput").value.trim(),
  };
  if(editingExerciseId){
    const idx = state.customExercises.findIndex(x=>x.id===editingExerciseId);
    if(idx>-1) state.customExercises[idx] = {...state.customExercises[idx], ...data};
  } else {
    state.customExercises.push({id:Date.now()+"", ...data});
  }
  saveState();
  hideSheet("exerciseBackdrop");
  renderMyExercises();
  toast("Exercise saved");
});

/* ---------- ROUTINE TEMPLATES ---------- */
let editingRoutineId = null;
let routineDraftExercises = [];
let activeSessionId = null;

function allExerciseOptions(){
  const opts = [];
  CALISTHENICS.forEach(e=> opts.push({name:e.name, sourceType:"builtin"}));
  LOOKSMAXING.forEach(e=> opts.push({name:e.name, sourceType:"builtin"}));
  state.customExercises.forEach(e=> opts.push({name:e.name, sourceType:"custom", sourceId:e.id}));
  return opts;
}
function populateRoutinePicker(){
  document.getElementById("routineExercisePicker").innerHTML =
    allExerciseOptions().map((o,i)=>`<option value="${i}">${escapeHtml(o.name)}</option>`).join("");
}
function renderRoutineDraftList(){
  const wrap = document.getElementById("routineExerciseList");
  wrap.innerHTML = "";
  if(routineDraftExercises.length===0){
    wrap.innerHTML = `<p class="hint">No exercises added yet.</p>`;
    return;
  }
  routineDraftExercises.forEach((ex,i)=>{
    const row = document.createElement("div");
    row.className = "routine-draft-row";
    row.innerHTML = `
      <div class="routine-draft-info">
        <b>${i+1}. ${escapeHtml(ex.name)}</b>
        <span>${ex.sets?ex.sets+" sets · ":""}${escapeHtml(ex.reps||"")}${ex.rest?" · rest "+escapeHtml(ex.rest):""}</span>
      </div>
      <div class="routine-draft-actions">
        <button data-act="up" ${i===0?"disabled":""}>↑</button>
        <button data-act="down" ${i===routineDraftExercises.length-1?"disabled":""}>↓</button>
        <button data-act="del">✕</button>
      </div>`;
    row.querySelector('[data-act="up"]').addEventListener("click", ()=>{
      [routineDraftExercises[i-1], routineDraftExercises[i]] = [routineDraftExercises[i], routineDraftExercises[i-1]];
      renderRoutineDraftList();
    });
    row.querySelector('[data-act="down"]').addEventListener("click", ()=>{
      [routineDraftExercises[i+1], routineDraftExercises[i]] = [routineDraftExercises[i], routineDraftExercises[i+1]];
      renderRoutineDraftList();
    });
    row.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      routineDraftExercises.splice(i,1); renderRoutineDraftList();
    });
    wrap.appendChild(row);
  });
}
function openRoutineSheet(routine){
  editingRoutineId = routine ? routine.id : null;
  document.getElementById("routineFormTitle").textContent = routine ? "Edit routine" : "Create routine";
  document.getElementById("routineNameInput").value = routine ? routine.name : "";
  routineDraftExercises = routine ? JSON.parse(JSON.stringify(routine.exercises)) : [];
  populateRoutinePicker();
  renderRoutineDraftList();
  showSheet("routineBackdrop");
}
document.getElementById("createRoutineBtn").addEventListener("click", ()=> openRoutineSheet(null));
document.getElementById("routineCancelBtn").addEventListener("click", ()=> hideSheet("routineBackdrop"));
document.getElementById("routineAddExerciseBtn").addEventListener("click", ()=>{
  const sel = document.getElementById("routineExercisePicker");
  const opts = allExerciseOptions();
  const chosen = opts[+sel.value];
  if(!chosen){ toast("Pick an exercise"); return; }
  const sets = document.getElementById("routineSetsInput").value ? +document.getElementById("routineSetsInput").value : null;
  const reps = document.getElementById("routineRepsInput").value.trim();
  const rest = document.getElementById("routineRestInput").value.trim();
  routineDraftExercises.push({name:chosen.name, sets, reps, rest, sourceType:chosen.sourceType, sourceId:chosen.sourceId||null});
  document.getElementById("routineSetsInput").value = "";
  document.getElementById("routineRepsInput").value = "";
  document.getElementById("routineRestInput").value = "";
  renderRoutineDraftList();
});
document.getElementById("routineSaveBtn").addEventListener("click", ()=>{
  const name = document.getElementById("routineNameInput").value.trim();
  if(!name){ toast("Routine name is required"); return; }
  if(routineDraftExercises.length===0){ toast("Add at least one exercise"); return; }
  if(editingRoutineId){
    const idx = state.routines.findIndex(r=>r.id===editingRoutineId);
    if(idx>-1) state.routines[idx] = {...state.routines[idx], name, exercises:routineDraftExercises};
  } else {
    state.routines.push({id:Date.now()+"", name, exercises:routineDraftExercises});
  }
  saveState();
  hideSheet("routineBackdrop");
  renderRoutines();
  toast("Routine saved");
});

function renderRoutines(){
  document.getElementById("routineSessionActive").classList.toggle("hidden", !activeSessionId);
  document.getElementById("routinesListWrap").classList.toggle("hidden", !!activeSessionId);
  if(activeSessionId){ renderActiveSession(); return; }

  const list = document.getElementById("routinesList");
  list.innerHTML = "";
  if(state.routines.length===0){
    list.innerHTML = `<p class="hint">No routines yet. Create one to reuse it anytime.</p>`;
  }
  state.routines.forEach(r=>{
    const card = document.createElement("div");
    card.className = "goal-card";
    card.innerHTML = `
      <div class="goal-title">${escapeHtml(r.name)}</div>
      <div class="hint">${r.exercises.length} exercise${r.exercises.length!==1?"s":""}</div>
      <div class="goal-actions">
        <button class="mini-btn" data-act="start">Start Routine</button>
        <button class="mini-btn" data-act="edit">Edit</button>
        <button class="mini-btn" data-act="dup">Duplicate</button>
        <button class="mini-btn delete" data-act="del">Delete</button>
      </div>`;
    card.querySelector('[data-act="start"]').addEventListener("click", ()=> startRoutineSession(r));
    card.querySelector('[data-act="edit"]').addEventListener("click", ()=> openRoutineSheet(r));
    card.querySelector('[data-act="dup"]').addEventListener("click", ()=>{
      state.routines.push({...JSON.parse(JSON.stringify(r)), id:Date.now()+"", name:r.name+" (copy)"});
      saveState(); renderRoutines(); toast("Routine duplicated");
    });
    card.querySelector('[data-act="del"]').addEventListener("click", ()=>{
      if(!confirm("Delete this routine? Its past sessions stay in your history.")) return;
      state.routines = state.routines.filter(x=>x.id!==r.id);
      saveState(); renderRoutines(); toast("Routine deleted");
    });
    list.appendChild(card);
  });

  const recentWrap = document.getElementById("recentSessionsList");
  recentWrap.innerHTML = "";
  const recent = [...state.routineWorkoutLogs].sort((a,b)=> b.date.localeCompare(a.date)).slice(0,10);
  if(recent.length===0){
    recentWrap.innerHTML = `<p class="hint">No sessions logged yet.</p>`;
  }
  recent.forEach(s=>{
    const total = s.exercises.reduce((sum,e)=> sum+(e.targetSets||1),0);
    const done = s.exercises.reduce((sum,e)=> sum+e.loggedSets.filter(Boolean).length,0);
    const cls = done>=total && total>0 ? "pill-excellent" : (done>0 ? "pill-fair" : "pill-poor");
    const label = done>=total && total>0 ? "Done" : (done>0 ? "Partial" : "Not started");
    const row = document.createElement("div");
    row.className = "history-row";
    row.innerHTML = `
      <div>
        <div class="history-date">${escapeHtml(s.routineName)}</div>
        <div class="history-focus">${new Date(s.date).toLocaleDateString(undefined,{day:"numeric",month:"short"})} · ${done}/${total} sets</div>
      </div>
      <span class="rating-pill ${cls}">${label}</span>`;
    row.addEventListener("click", ()=>{ activeSessionId = s.id; renderRoutines(); });
    recentWrap.appendChild(row);
  });
}
function startRoutineSession(routine){
  const session = {
    id: Date.now()+"",
    date: todayKey(),
    routineId: routine.id,
    routineName: routine.name,
    exercises: routine.exercises.map(e=>({
      name: e.name, targetSets: e.sets||1, targetReps: e.reps||e.duration||"", loggedSets: Array(e.sets||1).fill(false)
    })),
    completedAt: null,
  };
  state.routineWorkoutLogs.push(session);
  saveState();
  activeSessionId = session.id;
  renderRoutines();
}
document.getElementById("closeSessionBtn").addEventListener("click", ()=>{
  activeSessionId = null;
  renderRoutines();
});
function renderActiveSession(){
  const session = state.routineWorkoutLogs.find(s=>s.id===activeSessionId);
  if(!session){ activeSessionId=null; renderRoutines(); return; }
  document.getElementById("activeSessionLabel").textContent =
    `${session.routineName} — ${new Date(session.date).toLocaleDateString(undefined,{day:"numeric",month:"short"})}`;
  const list = document.getElementById("sessionExerciseList");
  list.innerHTML = "";
  let total=0, done=0;
  session.exercises.forEach((ex,exIdx)=>{
    total += ex.targetSets;
    done += ex.loggedSets.filter(Boolean).length;
    const card = document.createElement("div");
    card.className = "workout-exercise-card" + (ex.loggedSets.every(Boolean)?" complete":"");
    const pips = ex.loggedSets.map((on,si)=>`<div class="set-pip ${on?"done":""}" data-ex="${exIdx}" data-set="${si}">${si+1}</div>`).join("");
    card.innerHTML = `
      <div class="workout-ex-top">
        <div>
          <div class="workout-ex-name">${escapeHtml(ex.name)}</div>
          <div class="workout-ex-target">${ex.targetSets} sets ${ex.targetReps?"× "+escapeHtml(ex.targetReps):""}</div>
        </div>
      </div>
      <div class="set-pips">${pips}</div>`;
    card.querySelectorAll(".set-pip").forEach(pip=>{
      pip.addEventListener("click", ()=>{
        const si = +pip.dataset.set;
        ex.loggedSets[si] = !ex.loggedSets[si];
        session.completedAt = session.exercises.every(e=>e.loggedSets.every(Boolean)) ? todayKey() : null;
        saveState();
        renderActiveSession();
      });
    });
    list.appendChild(card);
  });
  const pct = total ? done/total : 0;
  const r = ratingLabel(pct);
  document.getElementById("sessionRating").innerHTML =
    `<span>Progress: <b class="mono">${done}/${total} sets</b> (${Math.round(pct*100)}%)</span><span class="rating-pill ${r.cls}">${r.label}</span>`;
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
  document.getElementById("anaCustomWorkouts").textContent = state.routineWorkoutLogs.filter(s=>s.completedAt).length;
  let customUsage = 0;
  const customNames = new Set(state.customExercises.map(e=>e.name));
  state.routineWorkoutLogs.forEach(s=> s.exercises.forEach(e=>{ if(customNames.has(e.name)) customUsage++; }));
  document.getElementById("anaCustomExUsage").textContent = customUsage;

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
  document.getElementById("stepsToggle").checked = state.settings.stepsOn;
  document.getElementById("weightToggle").checked = state.settings.weightOn;
  document.getElementById("weightDaySelect").value = String(state.settings.weightDay);
  document.getElementById("motionToggle").checked = state.settings.reduceMotion;
  document.getElementById("habitGroupingToggle").checked = state.settings.habitGroupingOn;
  document.querySelectorAll(".theme-swatch").forEach(el=>{
    el.classList.toggle("active", el.dataset.theme === (state.settings.theme||"classic"));
  });
  renderManageList();
  renderBgSectionList();
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
applySectionBackgrounds();
