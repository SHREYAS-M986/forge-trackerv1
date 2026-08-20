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
    daily: ["Wake up 6 AM","Workout / calisthenics","No junk food","Read 20 min","Journal","No phone after 11 PM","Cold shower"],
    weekly: ["Meal prep","Long run","Deep clean room","Review budget","Call family","Plan next week"],
    monthly: ["Full body progress photo","Review goals","Declutter","Skill practice review"],
  },
  dailyLogs: {},      // "YYYY-MM-DD" -> [bool x7]
  weeklyLogs: {},      // weekIndex(0-51) -> [bool x6]
  monthlyLogs: {},      // monthIndex(0-11) -> [bool x4]
  money: {},           // monthIndex -> {income,fixed,variable}
  goals: [],
  learn: [],
  settings: { notifOn:false, reminderTime:"20:00" },
});

let state = loadState();
function loadState(){
  try{
    const raw = localStorage.getItem("forgeData");
    if(!raw) return DEFAULT_STATE();
    const parsed = JSON.parse(raw);
    return {...DEFAULT_STATE(), ...parsed};
  }catch(e){ return DEFAULT_STATE(); }
}
function saveState(){ localStorage.setItem("forgeData", JSON.stringify(state)); }

/* ---------- Date helpers ---------- */
function fmtDate(d){ return d.toISOString().slice(0,10); }
function todayKey(){ return fmtDate(new Date()); }
function dayIndexInYear(d){ return Math.floor((d - YEAR_START) / 86400000); } // 0-364
function monthIndexOf(d){
  let idx=0, cum=0;
  for(let i=0;i<12;i++){ if(d >= new Date(MONTHS[i].year, monthNumFromName(MONTHS[i].name), 1) &&
      (i===11 || d < new Date(MONTHS[i+1].year, monthNumFromName(MONTHS[i+1].name),1))) return i; }
  return 0;
}
function monthNumFromName(name){
  return ["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(name);
}
function weekIndexOf(d){ return Math.min(Math.floor(dayIndexInYear(d)/7), 51); }
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

/* ---------- Toast ---------- */
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove("show"), 2200);
}

/* ---------- Navigation ---------- */
const views = ["home","habits","money","goals","learn","settings"];
function showView(name){
  views.forEach(v => document.getElementById("view-"+v)?.classList.toggle("hidden", v!==name));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view===name));
  if(name==="home") renderHome();
  if(name==="habits") renderHabits();
  if(name==="money") renderMoney();
  if(name==="goals") renderGoals();
  if(name==="learn") renderLearn();
}
document.querySelectorAll(".nav-btn").forEach(b=>{
  b.addEventListener("click", ()=> showView(b.dataset.view));
});
document.getElementById("settingsBtn").addEventListener("click", ()=>{
  views.forEach(v => document.getElementById("view-"+v)?.classList.add("hidden"));
  document.getElementById("view-settings").classList.remove("hidden");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
});

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
      arr[i] = !arr[i];
      state.dailyLogs[key] = arr;
      saveState();
      renderHome();
    });
    list.appendChild(card);
  });

  renderTrendChart();
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

/* ---------- HABITS ---------- */
let currentMonthIdx = monthIndexOf(new Date());
let currentWeekIdx = weekIndexOf(new Date());
let habitSeg = "daily";

document.querySelectorAll(".seg-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll(".seg-btn").forEach(x=>x.classList.remove("active"));
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

/* ---------- MONEY ---------- */
let currentMoneyIdx = monthIndexOf(new Date());
document.getElementById("prevMoneyMonth").addEventListener("click", ()=>{ currentMoneyIdx=(currentMoneyIdx+11)%12; renderMoney(); });
document.getElementById("nextMoneyMonth").addEventListener("click", ()=>{ currentMoneyIdx=(currentMoneyIdx+1)%12; renderMoney(); });
let moneyChartInstance = null;

function currentMoneyEntry(){
  return state.money[currentMoneyIdx] || {income:0, fixed:0, variable:0};
}
function renderMoney(){
  const m = MONTHS[currentMoneyIdx];
  document.getElementById("moneyMonthLabel").textContent = `${m.name} ${m.year}`;
  const entry = currentMoneyEntry();
  document.getElementById("incomeInput").value = entry.income || "";
  document.getElementById("fixedInput").value = entry.fixed || "";
  document.getElementById("variableInput").value = entry.variable || "";
  updateMoneyDerived();
  renderMoneyChart();
}
function updateMoneyDerived(){
  const income = +document.getElementById("incomeInput").value || 0;
  const fixed = +document.getElementById("fixedInput").value || 0;
  const variable = +document.getElementById("variableInput").value || 0;
  const savings = income - fixed - variable;
  const rate = income ? (savings/income)*100 : 0;
  document.getElementById("savingsOut").textContent = "₹" + savings.toLocaleString("en-IN");
  document.getElementById("savingsRateOut").textContent = Math.round(rate) + "%";
}
["incomeInput","fixedInput","variableInput"].forEach(id=>{
  document.getElementById(id).addEventListener("input", ()=>{
    state.money[currentMoneyIdx] = {
      income: +document.getElementById("incomeInput").value || 0,
      fixed: +document.getElementById("fixedInput").value || 0,
      variable: +document.getElementById("variableInput").value || 0,
    };
    saveState();
    updateMoneyDerived();
    renderMoneyChart();
  });
});
function renderMoneyChart(){
  const labels = MONTHS.map(m=>m.name.slice(0,3));
  const data = MONTHS.map((m,i)=>{
    const e = state.money[i] || {income:0,fixed:0,variable:0};
    return (e.income||0) - (e.fixed||0) - (e.variable||0);
  });
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
function renderGoals(){
  const list = document.getElementById("goalsList");
  list.innerHTML = "";
  if(state.goals.length===0){ list.innerHTML = `<p class="hint">No goals yet. Tap "+ Add a goal" to start.</p>`; return; }
  state.goals.forEach((g, idx)=>{
    const remaining = Math.max(g.cost - (g.saved||0), 0);
    const target = g.targetDate ? new Date(g.targetDate) : null;
    const daysLeft = target ? Math.max(Math.ceil((target - new Date())/86400000),0) : null;
    const weeksLeft = daysLeft!==null ? Math.max(Math.ceil(daysLeft/7),0) : null;
    const perDay = daysLeft ? Math.ceil(remaining/Math.max(daysLeft,1)) : remaining;
    const perWeek = weeksLeft ? Math.ceil(remaining/Math.max(weeksLeft,1)) : remaining;
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

/* ---------- SETTINGS ---------- */
const notifToggle = document.getElementById("notifToggle");
const reminderTime = document.getElementById("reminderTime");
notifToggle.checked = state.settings.notifOn;
reminderTime.value = state.settings.reminderTime;

notifToggle.addEventListener("change", async ()=>{
  if(notifToggle.checked){
    if(!("Notification" in window)){ toast("Notifications not supported here"); notifToggle.checked=false; return; }
    const perm = await Notification.requestPermission();
    if(perm !== "granted"){ toast("Permission denied"); notifToggle.checked=false; return; }
    toast("Reminders on");
  } else {
    toast("Reminders off");
  }
  state.settings.notifOn = notifToggle.checked;
  saveState();
});
reminderTime.addEventListener("change", ()=>{
  state.settings.reminderTime = reminderTime.value;
  saveState();
});

function checkReminderLoop(){
  if(!state.settings.notifOn) return;
  const now = new Date();
  const [h,m] = (state.settings.reminderTime||"20:00").split(":").map(Number);
  if(now.getHours()===h && now.getMinutes()===m){
    const log = state.dailyLogs[todayKey()];
    const done = log && log.some(Boolean);
    if(!done && Notification.permission==="granted"){
      new Notification("Forge — Daily reminder", { body:"You haven't logged today's habits yet. Open Forge to check in.", icon:"icons/icon-192.png" });
    }
  }
}
setInterval(checkReminderLoop, 60000);

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
      state = {...DEFAULT_STATE(), ...parsed};
      saveState();
      toast("Backup restored");
      showView("home");
    }catch(err){ toast("Invalid backup file"); }
  };
  reader.readAsText(file);
});
document.getElementById("resetBtn").addEventListener("click", ()=>{
  if(confirm("This clears all data on this device. Continue?")){
    state = DEFAULT_STATE();
    saveState();
    toast("Data reset");
    showView("home");
  }
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

/* ---------- Service worker ---------- */
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}

/* ---------- Init ---------- */
renderHome();
