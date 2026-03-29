/* ============================================================
   NALAZA MISSION TERMINAL — MAIN.JS
   Hardcoded data + all interactivity
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const DATA = {
  campaign: {
    id: 'PCB-01',
    name: 'Sales Form Automation Capability',
    domain: 'SaaS',
    status: 'Active',
    startYear: 2026
  },

  stats: {
    totalQuests: 19,
    questsDone: 0,
    inProgress: 2,
    toolsLaunched: 0,
    xpEarned: 80,
    xpTarget: 5990,
    currentPhase: 'Alpha'
  },

  phases: [
    { name: 'Alpha',  xpTarget: 600,  xpEarned: 80, status: 'Active' },
    { name: 'Beta',   xpTarget: 1200, xpEarned: 0,  status: 'Locked' },
    { name: 'Fasa 1', xpTarget: 2000, xpEarned: 0,  status: 'Locked' },
    { name: 'Fasa 2', xpTarget: 3000, xpEarned: 0,  status: 'Locked' },
    { name: 'Fasa 3', xpTarget: 4000, xpEarned: 0,  status: 'Locked' },
    { name: 'Fasa 4', xpTarget: 5000, xpEarned: 0,  status: 'Locked' },
    { name: 'Fasa 5', xpTarget: 5750, xpEarned: 0,  status: 'Locked' },
  ],

  quests: [
    { id:'PCB01-Q01', level:'L0', phase:'Alpha',  name:'WhatsApp Order Generator',       type:'Utility Tool',   diff:1, xpTotal:120, xpDone:40,  tasksDone:2, tasksTotal:4, status:'In Progress', icon:'📦', prereq:null },
    { id:'PCB01-Q02', level:'L0', phase:'Alpha',  name:'WhatsApp Reply Script Library',  type:'Utility Tool',   diff:1, xpTotal:110, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'💬', prereq:null },
    { id:'PCB01-Q03', level:'L0', phase:'Alpha',  name:'Profit Calculator',              type:'Utility Tool',   diff:2, xpTotal:180, xpDone:40,  tasksDone:2, tasksTotal:6, status:'In Progress', icon:'💰', prereq:null },
    { id:'PCB01-Q04', level:'L0', phase:'Alpha',  name:'Shipping Cost Estimator',        type:'Utility Tool',   diff:2, xpTotal:140, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🚚', prereq:null },
    { id:'PCB01-Q05', level:'L1', phase:'Beta',   name:'WhatsApp Template Manager',      type:'SaaS',           diff:3, xpTotal:240, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🧩', prereq:'PCB01-Q02' },
    { id:'PCB01-Q06', level:'L1', phase:'Beta',   name:'Mini CRM',                       type:'SaaS',           diff:4, xpTotal:260, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'📒', prereq:'PCB01-Q03' },
    { id:'PCB01-Q07', level:'L1', phase:'Beta',   name:'Invoice Generator',              type:'SaaS',           diff:4, xpTotal:250, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🧾', prereq:'PCB01-Q03' },
    { id:'PCB01-Q08', level:'L2', phase:'Fasa 1', name:'CSV Order Manager',              type:'Workflow Tool',  diff:5, xpTotal:300, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'📊', prereq:'PCB01-Q06' },
    { id:'PCB01-Q09', level:'L2', phase:'Fasa 1', name:'Shipping Label Generator',       type:'Workflow Tool',  diff:5, xpTotal:280, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🏷️', prereq:'PCB01-Q08' },
    { id:'PCB01-Q10', level:'L2', phase:'Fasa 1', name:'Tracking Notification Generator',type:'Workflow Tool',  diff:5, xpTotal:300, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'📩', prereq:'PCB01-Q08' },
    { id:'PCB01-Q11', level:'L3', phase:'Fasa 2', name:'Hosted Order Form',              type:'SaaS Core',      diff:6, xpTotal:350, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🧾', prereq:'PCB01-Q08' },
    { id:'PCB01-Q12', level:'L3', phase:'Fasa 2', name:'Product-per-Link Order Page',    type:'SaaS Core',      diff:6, xpTotal:340, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🔗', prereq:'PCB01-Q11' },
    { id:'PCB01-Q13', level:'L3', phase:'Fasa 2', name:'Simple Order Dashboard',         type:'SaaS Core',      diff:7, xpTotal:390, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'📋', prereq:'PCB01-Q11' },
    { id:'PCB01-Q14', level:'L4', phase:'Fasa 3', name:'Payment Link Generator',         type:'Integration',    diff:7, xpTotal:420, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'💳', prereq:'PCB01-Q11' },
    { id:'PCB01-Q15', level:'L4', phase:'Fasa 3', name:'Payment Reconciliation Tool',    type:'Integration',    diff:7, xpTotal:400, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'📑', prereq:'PCB01-Q14' },
    { id:'PCB01-Q16', level:'L4', phase:'Fasa 3', name:'Courier Tracking Integration',   type:'Integration',    diff:8, xpTotal:450, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🚛', prereq:'PCB01-Q13' },
    { id:'PCB01-Q17', level:'L5', phase:'Fasa 4', name:'Affiliate Link Tracking',        type:'SaaS Growth',    diff:8, xpTotal:480, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🤝', prereq:'PCB01-Q14' },
    { id:'PCB01-Q18', level:'L5', phase:'Fasa 4', name:'Upsell Engine',                  type:'SaaS Growth',    diff:8, xpTotal:460, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'📈', prereq:'PCB01-Q14' },
    { id:'PCB01-Q19', level:'L5', phase:'Fasa 4', name:'Multi-tenant SaaS Billing',      type:'SaaS Core',      diff:9, xpTotal:520, xpDone:0,   tasksDone:0, tasksTotal:0, status:'Planned',     icon:'🏦', prereq:'PCB01-Q05' },
  ],

  tasks: [
    { id:'PCB01-Q01-T01', questId:'PCB01-Q01', quest:'WhatsApp Order Generator',  name:'Create order form UI',              type:'UI',         xp:20, status:'Done',        owner:'Lan', due:'2026-01-03', done:'2026-01-03', icon:'🛠️' },
    { id:'PCB01-Q01-T02', questId:'PCB01-Q01', quest:'WhatsApp Order Generator',  name:'Add product + quantity fields',      type:'UI',         xp:20, status:'Done',        owner:'Lan', due:'2026-01-04', done:'2026-01-04', icon:'🛠️' },
    { id:'PCB01-Q01-T03', questId:'PCB01-Q01', quest:'WhatsApp Order Generator',  name:'Implement WhatsApp URL encoding',    type:'Logic',      xp:30, status:'In Progress', owner:'Lan', due:'2026-01-06', done:null,         icon:'🧠' },
    { id:'PCB01-Q01-T04', questId:'PCB01-Q01', quest:'WhatsApp Order Generator',  name:'Deploy tool',                        type:'Deployment', xp:50, status:'Pending',     owner:'Lan', due:'2026-01-07', done:null,         icon:'🚀' },
    { id:'PCB01-Q03-T01', questId:'PCB01-Q03', quest:'Profit Calculator',         name:'Create UI input form',               type:'UI',         xp:20, status:'Done',        owner:'Lan', due:'2026-01-08', done:'2026-01-08', icon:'🛠️' },
    { id:'PCB01-Q03-T02', questId:'PCB01-Q03', quest:'Profit Calculator',         name:'Add cost input fields',              type:'UI',         xp:20, status:'Done',        owner:'Lan', due:'2026-01-09', done:'2026-01-09', icon:'🛠️' },
    { id:'PCB01-Q03-T03', questId:'PCB01-Q03', quest:'Profit Calculator',         name:'Implement profit formula',           type:'Logic',      xp:40, status:'In Progress', owner:'Lan', due:'2026-01-10', done:null,         icon:'🧠' },
    { id:'PCB01-Q03-T04', questId:'PCB01-Q03', quest:'Profit Calculator',         name:'Add break-even calculation',         type:'Logic',      xp:40, status:'Pending',     owner:'Lan', due:'2026-01-11', done:null,         icon:'🧠' },
    { id:'PCB01-Q03-T05', questId:'PCB01-Q03', quest:'Profit Calculator',         name:'Mobile optimisation',                type:'UI',         xp:30, status:'Pending',     owner:'Lan', due:'2026-01-12', done:null,         icon:'📱' },
    { id:'PCB01-Q03-T06', questId:'PCB01-Q03', quest:'Profit Calculator',         name:'Deploy tool',                        type:'Deployment', xp:30, status:'Pending',     owner:'Lan', due:'2026-01-13', done:null,         icon:'🚀' },
  ],

  badges: [
    { id:'B01', name:'Utility Builder',    icon:'🧰', cond:'Complete 3 Level 0 quests',                 unlocked:false },
    { id:'B02', name:'Workflow Architect', icon:'🏗️', cond:'Complete Level 2 order workflow',           unlocked:false },
    { id:'B03', name:'SaaS Engineer',      icon:'⚙️', cond:'Deploy first SaaS quest',                   unlocked:false },
    { id:'B04', name:'Integration Master', icon:'🔌', cond:'Complete payment + courier integration',    unlocked:false },
    { id:'B05', name:'Platform Builder',   icon:'🛰️', cond:'Reach Fasa 5 threshold',                    unlocked:false },
  ],

  capabilities: [
    { name:'Form UX',        unlocked:true },
    { name:'Business Logic', unlocked:true },
    { name:'Rate Tables',    unlocked:false },
    { name:'Authentication', unlocked:false },
    { name:'Database/CRUD',  unlocked:false },
    { name:'Payment API',    unlocked:false },
  ],

  weekSetup: [
    { day:'Day 1', obj:'Set up development environment', tasks:'Create repo, project folder, base HTML layout', quest:'PCB01-Q03', icon:'⚙️' },
    { day:'Day 2', obj:'Design Profit Calculator UI',     tasks:'Build form inputs and output layout',           quest:'PCB01-Q03', icon:'🎨' },
    { day:'Day 3', obj:'Implement business logic',        tasks:'Add profit formula calculation',                quest:'PCB01-Q03', icon:'🧠' },
    { day:'Day 4', obj:'Add break-even feature',          tasks:'Calculate break-even price',                    quest:'PCB01-Q03', icon:'📊' },
    { day:'Day 5', obj:'Mobile optimisation',             tasks:'Improve mobile UI',                             quest:'PCB01-Q03', icon:'📱' },
    { day:'Day 6', obj:'Testing',                         tasks:'Test calculations and UX',                      quest:'PCB01-Q03', icon:'🧪' },
    { day:'Day 7', obj:'Launch tool',                     tasks:'Deploy first utility tool',                     quest:'PCB01-Q03', icon:'🚀' },
  ],

  routes: [
    { name:'Speed Route',     icon:'⚡', desc:'Ship Q01 fast — build momentum with a working tool ASAP.', pros:['Quick win', 'Validates core loop', 'Early demo-able'] },
    { name:'Quality Route',   icon:'🎯', desc:'Polish Q03 to production standard before moving on.', pros:['Higher XP per quest', 'Better foundation', 'Portfolio quality'] },
    { name:'Parallel Route',  icon:'🔀', desc:'Work Q01 and Q03 simultaneously across different sessions.', pros:['Double progress', 'Context switching', 'Covers both paths'] },
    { name:'Research Route',  icon:'🔭', desc:'Spike into Q05/Q06 architecture before committing to execution.', pros:['Derisk Beta phase', 'System thinking', 'Avoid rework'] },
  ],

  blockers: [
    { icon:'🔒', title:'Beta Phase Locked',         desc:'All L1 quests require completing L0 foundation quests first. Focus on Q01–Q04 to unlock.' },
    { icon:'🔗', title:'Q06 depends on Q03',        desc:'Mini CRM cannot start until Profit Calculator logic is validated.' },
    { icon:'🚧', title:'Q05 depends on Q02',        desc:'Template Manager blocked until Reply Script Library is complete.' },
    { icon:'⚠️', title:'No tasks yet for Q02, Q04', desc:'These quests have no tasks defined. Add tasks before starting.' },
  ],

  log: [
    { time:'2026-01-09', icon:'✅', text:'<strong>PCB01-Q03-T02</strong> — Add cost input fields — <strong>DONE</strong>' },
    { time:'2026-01-08', icon:'✅', text:'<strong>PCB01-Q03-T01</strong> — Create UI input form — <strong>DONE</strong>' },
    { time:'2026-01-04', icon:'✅', text:'<strong>PCB01-Q01-T02</strong> — Add product + quantity fields — <strong>DONE</strong>' },
    { time:'2026-01-03', icon:'✅', text:'<strong>PCB01-Q01-T01</strong> — Create order form UI — <strong>DONE</strong>' },
    { time:'2026-01-02', icon:'🚀', text:'Campaign <strong>PCB-01 Sales Form Automation</strong> initiated' },
    { time:'2026-01-02', icon:'🗺️', text:'Quest map loaded — <strong>19 quests</strong> across 7 phases' },
  ]
};

/* ══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */
function pct(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function statusBadge(s) {
  const map = {
    'Done':        'badge-done',
    'In Progress': 'badge-active',
    'Pending':     'badge-pending',
    'Planned':     'badge-planned',
    'Blocked':     'badge-blocked',
    'Locked':      'badge-locked',
    'Active':      'badge-active',
  };
  return `<span class="badge ${map[s] || 'badge-locked'}">${s}</span>`;
}

function diffPips(d) {
  let html = '<div class="quest-diff">';
  for (let i = 1; i <= 10; i++) {
    html += `<div class="diff-pip ${i <= d ? 'filled' : ''}"></div>`;
  }
  return html + '</div>';
}

/* ══════════════════════════════════════════════════════════════
   CLOCK
═══════════════════════════════════════════════════════════════ */
function initClock() {
  const el = document.getElementById('header-clock');
  function tick() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');
    if (el) el.textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

/* ══════════════════════════════════════════════════════════════
   TABS
═══════════════════════════════════════════════════════════════ */
function initTabs() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   PANEL COLLAPSE
═══════════════════════════════════════════════════════════════ */
function initPanelToggles() {
  document.querySelectorAll('.panel-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.closest('.panel').querySelector('.panel-body');
      if (!body) return;
      const collapsed = body.classList.toggle('collapsed');
      btn.textContent = collapsed ? '▶' : '▼';
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   QUEST FILTERS
═══════════════════════════════════════════════════════════════ */
function initQuestFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderQuestGrid();
    });
  });
}

function getActiveFilter(group) {
  const btn = document.querySelector(`.filter-btn[data-group="${group}"].active`);
  return btn ? btn.dataset.value : 'all';
}

function renderQuestGrid() {
  const phaseF  = getActiveFilter('phase');
  const statusF = getActiveFilter('status');
  const levelF  = getActiveFilter('level');

  let quests = DATA.quests.filter(q => {
    if (phaseF  !== 'all' && q.phase  !== phaseF)  return false;
    if (statusF !== 'all' && q.status !== statusF) return false;
    if (levelF  !== 'all' && q.level  !== levelF)  return false;
    return true;
  });

  const grid = document.getElementById('quest-grid');
  if (!grid) return;

  if (!quests.length) {
    grid.innerHTML = `<div style="color:var(--text-muted);font-family:var(--font-mono);font-size:11px;padding:20px;">NO QUESTS MATCH CURRENT FILTERS</div>`;
    return;
  }

  grid.innerHTML = quests.map(q => {
    const progress = pct(q.xpDone, q.xpTotal);
    const statusClass = {
      'In Progress':'status-active',
      'Done':'status-done',
      'Planned':'status-planned',
      'Blocked':'status-blocked'
    }[q.status] || 'status-planned';

    return `
    <div class="quest-card ${statusClass}" data-quest="${q.id}">
      <div class="quest-card-top">
        <div class="quest-emoji">${q.icon}</div>
        <div class="quest-meta">
          <div class="quest-id">${q.id}</div>
          <div class="quest-name">${q.name}</div>
          <div class="quest-tags">
            <span class="tag tag-level">${q.level}</span>
            <span class="tag tag-phase">${q.phase}</span>
            <span class="tag tag-type">${q.type}</span>
          </div>
        </div>
        ${statusBadge(q.status)}
      </div>
      <div class="quest-card-mid">
        <div class="quest-xp">⚡ ${q.xpTotal} XP</div>
        ${diffPips(q.diff)}
      </div>
      ${q.prereq ? `<div class="quest-prereq mb-8">Requires: <span>${q.prereq}</span></div>` : ''}
      <div class="quest-progress-mini">
        <div class="mini-track">
          <div class="mini-fill ${q.status.toLowerCase().replace(' ','-')}" style="width:${progress}%"></div>
        </div>
        <div class="mini-tasks">${q.tasksDone}/${q.tasksTotal} tasks · ${progress}%</div>
      </div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════════════
   ROUTE SELECTOR
═══════════════════════════════════════════════════════════════ */
function initRoutes() {
  document.querySelectorAll('.route-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.route-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
}

/* ══════════════════════════════════════════════════════════════
   RENDER: DASHBOARD
═══════════════════════════════════════════════════════════════ */
function renderDashboard() {
  const s = DATA.stats;

  /* Overview cards */
  document.getElementById('stat-xp-earned').textContent = s.xpEarned;
  document.getElementById('stat-xp-target').textContent = s.xpTarget;
  document.getElementById('stat-quests-total').textContent = s.totalQuests;
  document.getElementById('stat-quests-done').textContent = s.questsDone;
  document.getElementById('stat-in-progress').textContent = s.inProgress;
  document.getElementById('stat-phase').textContent = s.currentPhase;

  /* XP arc */
  const arcEl = document.getElementById('xp-arc-fill');
  const arcPct = (s.xpEarned / s.xpTarget);
  const circ = 2 * Math.PI * 32;
  if (arcEl) {
    arcEl.setAttribute('stroke-dasharray', circ);
    arcEl.setAttribute('stroke-dashoffset', circ * (1 - arcPct));
  }
  const xpBarFill = document.getElementById('xp-bar-fill');
  if (xpBarFill) xpBarFill.style.width = (arcPct * 100).toFixed(1) + '%';
  const xpBarNums = document.getElementById('xp-bar-nums');
  if (xpBarNums) xpBarNums.textContent = `${s.xpEarned} / ${s.xpTarget} XP`;

  /* Phase progress */
  const phaseList = document.getElementById('phase-list');
  if (phaseList) {
    phaseList.innerHTML = DATA.phases.map(p => {
      const pp = pct(p.xpEarned, p.xpTarget);
      const isActive = p.status === 'Active';
      const dotClass = isActive ? 'dot-active' : p.status === 'Done' ? 'dot-done' : 'dot-locked';
      const rowClass = isActive ? 'active-phase' : p.status === 'Locked' ? 'locked-phase' : '';
      const fillColor = isActive ? 'var(--accent-cyan)' : 'var(--accent-green)';
      return `
      <div class="phase-row ${rowClass}">
        <div class="phase-status-dot ${dotClass}"></div>
        <div class="phase-name">${p.name}</div>
        <div class="progress-track" style="flex:1">
          <div class="progress-fill" style="width:${pp}%;--fill-color:${fillColor}"></div>
        </div>
        <div class="progress-xp">${p.xpEarned}/${p.xpTarget}</div>
        <div style="width:32px">${statusBadge(p.status)}</div>
      </div>`;
    }).join('');
  }

  /* Today's focus */
  const focusList = document.getElementById('today-focus');
  if (focusList) {
    const todayTasks = DATA.tasks.filter(t => t.status !== 'Done').slice(0, 5);
    focusList.innerHTML = todayTasks.map(t => `
      <div class="task-row">
        <div class="task-icon">${t.icon}</div>
        <div class="task-info">
          <div class="task-name">${t.name}</div>
          <div class="task-quest">${t.quest}</div>
        </div>
        <div class="task-meta">
          ${statusBadge(t.status)}
          <div class="task-due">${t.due || '—'}</div>
        </div>
      </div>`).join('');
  }

  /* Capabilities */
  const capGrid = document.getElementById('cap-grid');
  if (capGrid) {
    capGrid.innerHTML = DATA.capabilities.map(c => `
      <div class="cap-item">
        <div class="cap-icon ${c.unlocked ? 'unlocked' : 'locked'}">${c.unlocked ? '✓' : '○'}</div>
        <div class="cap-name">${c.name}</div>
        ${statusBadge(c.unlocked ? 'Done' : 'Locked')}
      </div>`).join('');
  }

  /* Mission log */
  const logEl = document.getElementById('mission-log');
  if (logEl) {
    logEl.innerHTML = DATA.log.map(e => `
      <div class="log-entry">
        <div class="log-time">${e.time}</div>
        <div class="log-icon">${e.icon}</div>
        <div class="log-text">${e.text}</div>
      </div>`).join('');
  }

  /* Blockers */
  const blockersEl = document.getElementById('blockers-list');
  if (blockersEl) {
    blockersEl.innerHTML = DATA.blockers.map(b => `
      <div class="blocker-item">
        <div class="blocker-icon">${b.icon}</div>
        <div class="blocker-info">
          <div class="blocker-title">${b.title}</div>
          <div class="blocker-desc">${b.desc}</div>
        </div>
      </div>`).join('');
  }

  /* Next actions */
  const actionsEl = document.getElementById('next-actions');
  if (actionsEl) {
    const pending = DATA.tasks.filter(t => t.status === 'In Progress' || t.status === 'Pending').slice(0, 5);
    actionsEl.innerHTML = pending.map((t, i) => `
      <div class="action-item">
        <div class="action-num">${String(i+1).padStart(2,'0')}</div>
        <div class="action-detail">
          <div class="action-title">${t.name}</div>
          <div class="action-sub">${t.quest} · ${t.type} · ${t.xp} XP</div>
        </div>
        <div class="action-tag">${t.status}</div>
      </div>`).join('');
  }
}

/* ══════════════════════════════════════════════════════════════
   RENDER: TASK TABLE
═══════════════════════════════════════════════════════════════ */
function renderTaskTable() {
  const tbody = document.getElementById('task-tbody');
  if (!tbody) return;

  tbody.innerHTML = DATA.tasks.map(t => `
    <tr>
      <td class="col-id">${t.id}</td>
      <td><span style="font-size:14px">${t.icon}</span></td>
      <td class="col-name">${t.name}</td>
      <td>${t.quest}</td>
      <td>
        <span class="tag tag-type" style="font-size:9px">${t.type}</span>
      </td>
      <td class="col-xp">⚡${t.xp}</td>
      <td>${statusBadge(t.status)}</td>
      <td style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted)">${t.due || '—'}</td>
      <td style="font-family:var(--font-mono);font-size:10px;color:var(--text-muted)">${t.done || '—'}</td>
    </tr>`).join('');
}

/* ══════════════════════════════════════════════════════════════
   RENDER: BADGES
═══════════════════════════════════════════════════════════════ */
function renderBadges() {
  const grid = document.getElementById('badges-grid');
  if (!grid) return;
  grid.innerHTML = DATA.badges.map(b => `
    <div class="badge-card ${b.unlocked ? 'earned' : 'locked-badge'}">
      <span class="badge-emblem">${b.icon}</span>
      <div class="badge-name">${b.name}</div>
      <div class="badge-cond">${b.cond}</div>
      ${b.unlocked ? '' : '<div class="badge-locked-overlay"><span class="badge-lock-icon">🔒</span></div>'}
    </div>`).join('');
}

/* ══════════════════════════════════════════════════════════════
   RENDER: FIRST WEEK
═══════════════════════════════════════════════════════════════ */
function renderWeekSetup() {
  const el = document.getElementById('week-timeline');
  if (!el) return;
  el.innerHTML = DATA.weekSetup.map((d, i) => `
    <div class="week-day ${i === 0 ? 'active-day' : ''}">
      <div class="week-day-header">
        <div class="week-day-num">${d.day}</div>
        <div class="week-day-icon">${d.icon}</div>
        <div class="week-day-obj">${d.obj}</div>
        <div style="margin-left:auto;font-family:var(--font-mono);font-size:9px;color:var(--text-muted)">${d.quest}</div>
      </div>
      <div class="week-day-tasks">${d.tasks}</div>
    </div>`).join('');
}

/* ══════════════════════════════════════════════════════════════
   RENDER: DEP MAP
═══════════════════════════════════════════════════════════════ */
function renderDepMap() {
  const el = document.getElementById('dep-map');
  if (!el) return;

  const levels = [
    { label:'L0 — ALPHA FOUNDATION', quests: DATA.quests.filter(q => q.level === 'L0'), color:'var(--accent-cyan)' },
    { label:'L1 — BETA TOOLS',       quests: DATA.quests.filter(q => q.level === 'L1'), color:'var(--accent-purple)' },
    { label:'L2 — FASA 1 WORKFLOW',  quests: DATA.quests.filter(q => q.level === 'L2'), color:'var(--accent-gold)' },
    { label:'L3 — FASA 2 CORE',      quests: DATA.quests.filter(q => q.level === 'L3'), color:'var(--accent-teal)' },
    { label:'L4 — FASA 3 INTEGRATION',quests:DATA.quests.filter(q => q.level === 'L4'), color:'var(--accent-amber)' },
    { label:'L5 — FASA 4 GROWTH',    quests: DATA.quests.filter(q => q.level === 'L5'), color:'var(--accent-red)' },
  ];

  const nodeClass = s => ({
    'In Progress':'node-active',
    'Done':'node-done',
    'Planned':'node-planned',
    'Blocked':'node-locked',
  }[s] || 'node-locked');

  el.innerHTML = levels.map(lv => `
    <div class="dep-level">
      <div class="dep-level-label" style="--level-color:${lv.color}">${lv.label}</div>
      <div class="dep-nodes">
        ${lv.quests.map(q => `
          <div class="dep-node ${nodeClass(q.status)}">
            <div class="dep-node-icon">${q.icon}</div>
            <div class="dep-node-id">${q.id}</div>
            <div class="dep-node-name">${q.name}</div>
            <div class="dep-node-footer">
              ${statusBadge(q.status)}
              ${q.prereq ? `<div class="dep-prereq-line">→ ${q.prereq}</div>` : ''}
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

/* ══════════════════════════════════════════════════════════════
   RENDER: ROUTES
═══════════════════════════════════════════════════════════════ */
function renderRoutes() {
  const el = document.getElementById('route-grid');
  if (!el) return;
  el.innerHTML = DATA.routes.map((r, i) => `
    <div class="route-card ${i === 0 ? 'selected' : ''}" data-route="${i}">
      <div class="route-icon">${r.icon}</div>
      <div class="route-name">${r.name}</div>
      <div class="route-desc">${r.desc}</div>
      <div class="route-pros">
        ${r.pros.map(p => `<div class="route-pro">${p}</div>`).join('')}
      </div>
    </div>`).join('');
}

/* ══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initTabs();
  initPanelToggles();
  initQuestFilters();

  renderDashboard();
  renderQuestGrid();
  renderTaskTable();
  renderBadges();
  renderWeekSetup();
  renderDepMap();
  renderRoutes();

  initRoutes();
});