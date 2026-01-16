// --- ⚙️ 用户配置区域 ---

const isHoliday = false; // 寒暑假模式开关
let activeBookIndex = 0; // 书单当前显示的分类索引

// === 1. 任务清单配置 (每日/每周/周期) ===
const taskConfig = [
    // === 🌅 早晨 Morning ===
    { id: 'd_wakeup', text: '🌄起床 & 喝水', type: 'daily', period: 'morning' },
    { id: 'd_cleanmyself', text: '🪥洗脸/刷牙/涂药/护肤', type: 'daily', period: 'morning' },
    { id: 'd_sport', text: '🥋晨间运动 (站桩/金刚功)', type: 'daily', period: 'morning' },
    { id: 'd_incense', text: '🧘‍♀️ 燃香 / 念经', type: 'daily', period: 'morning' },
    { id: 'd_breakfast', text: '🍳早餐', type: 'daily', period: 'morning' },
    { id: 'd_meds1', text: '💊 维B+D3', type: 'daily', period: 'morning' },
    { id: 'd_dog_am', text: '🐶 遛狗 (早)', type: 'daily', period: 'morning' },

    // === 💻 日间 Daytime ===
    { id: 'd_study', text: '📚 软考听力 (通勤)', type: 'daily', period: 'daytime', workdayOnly: true },
    { id: 'd_meds2', text: '💊 吃药 & 鱼油& 辅酶Q10', type: 'daily', period: 'daytime' },
    { id: 'd_water', text: '💧 多喝水/间歇走动', type: 'daily', period: 'daytime' },
    { id: 'd_exam_night', text: '📝 软考专注学习 (1h+)', type: 'daily', period: 'daytime' },
    { id: 'd_cook', text: '🍲 煮养生粥/做饭', type: 'daily', period: 'daytime', days: [0, 6] }, // 周末

    // === 🌙 晚间 Evening ===
    { id: 'd_clean', text: '🧹 简单归位 & 丢垃圾', type: 'daily', period: 'evening' },
    { id: 'd_dog_pm', text: '🐶 遛狗 (晚) ', type: 'daily', period: 'evening' },
    { id: 'd_evensport', text: '🏃🏻‍♀️晚间运动（踏步机/拉伸）', type: 'daily', period: 'evening' },
    { id: 'd_dog_care', text: '🪮 擦脚/梳毛/喂饭', type: 'daily', period: 'evening' },
    { id: 'd_watermachine', text: '💧加湿器补水', type: 'daily', period: 'evening' },
    { id: 'd_interest', text: '✍🏻 兴趣学习/书法练习', type: 'daily', period: 'evening' },
    { id: 'd_skin', text: '🛁 洗澡或泡脚', type: 'daily', period: 'evening' },
    { id: 'd_skin33', text: '🧪 涂药 ', type: 'daily', period: 'evening' },
    { id: 'd_RIPC', text: '🧰 RIPC疗法', type: 'daily', period: 'evening' },
    { id: 'd_meds3', text: '温水 💊 镁片', type: 'daily', period: 'evening' },
    { id: 'd_door', text: '🔒 门窗检查', type: 'daily', period: 'evening' },

    // === 📅 每周任务 ===
    { id: 'w_calligraphy', text: '✍️ 书法课', type: 'weekly', hideOnHoliday: true },
    { id: 'w_laundry', text: '👕 洗衣服', type: 'weekly' },
    { id: 'w_laundry_dry', text: '☀️ 晾晒衣服', type: 'weekly' },
    { id: 'w_pillow', text: '🛏️ 换洗枕巾', type: 'weekly' },
    { id: 'w_plant', text: '🌿 绿植浇水', type: 'weekly' },
    { id: 'w_cleanmachine', text: '🤖 加湿器滤芯清理', type: 'weekly' },
    { id: 'w_clean_floor', text: '🧹 扫地机/拖地', type: 'weekly' },
    { id: 'w_summary', text: '📊 软考周总结 & 案例', type: 'weekly' },

    // === ⏳ 周期任务 (每完成一个都庆祝) ===
    { id: 'c_sheets', text: '🛏️ 更换床单被罩', type: 'cycle', interval: 14 }, 
    { id: 'c_dog_bath', text: '🛁 狗狗洗澡/剪指甲', type: 'cycle', interval: 21 },
    { id: 'c_dog_ext', text: '🐛 狗狗体外驱虫', type: 'cycle', interval: 30 },
    { id: 'c_dog_in', text: '💊 狗狗体内驱虫', type: 'cycle', interval: 90 },
    { id: 'c_house', text: '🏠 家电维护/库存盘点', type: 'cycle', interval: 30 },
];

// === 2. 🎯 年度目标 (含课程细分) ===
const yearlyGoals = [
    { id: 'y_checkup', text: "🏥 年度体检 (每年一次)" },
    { id: 'y_dogvac', text: "💉 狗狗疫苗接种" },
    { id: 'y_exam', text: "🎓 软考拿证 (5月)" },
    { id: 'y_taichi', text: "☯️ 春天学习太极拳" },
    // 课程细分
    { id: 'y_note_astro', text: "🌌 天文历法：笔记补齐" },
    { id: 'y_note_tao', text: "📜 道教仪式：PPT/资料整理笔记" },
    { id: 'y_note_rel', text: "📚 宗教文献学：整理归纳思考" },
    { id: 'y_note_call', text: "✍️ 书法知识：课堂记录落纸" },
    { id: 'y_note_tea', text: "🍵 喝茶知识：紫砂全手辨认笔记" }
];

// === 3. 📚 书单 ===
const bookList = [
    { category: "☯️ 道教核心", books: [
        { id: 'tao_01', text: '中华书局《老子》' }, { id: 'tao_02', text: '中华书局《庄子》' }, { id: 'tao_03', text: '陈鼓应《老子今注今译》' }, { id: 'tao_04', text: '修道真言' }, { id: 'tao_05', text: '雷霆奥旨/八段锦' }, { id: 'tao_06', text: '苏州道教醮事' }, { id: 'tao_07', text: '海琼白真人语录' }, { id: 'tao_08', text: '道德宝章' }, { id: 'tao_09', text: '灵宝毕法' }, { id: 'tao_10', text: '太乙金华宗旨' }, { id: 'tao_11', text: '道藏源流考' }, { id: 'tao_12', text: '道藏说略' }, { id: 'tao_13', text: '道藏提要' }, { id: 'tao_14', text: '太极张三丰全书' }, { id: 'tao_15', text: '紫清全集' }, { id: 'tao_16', text: '道教大辞典' }, { id: 'tao_17', text: '盟约 (共4册)' }, { id: 'tao_18', text: '道教神仙信仰' }, { id: 'tao_19', text: '神仙' }, { id: 'tao_20', text: '口诀直指' }, { id: 'tao_21', text: '中国道冥思静坐史' }, { id: 'tao_22', text: '道风集' }, { id: 'tao_23', text: '弘道八十年' }, { id: 'tao_24', text: '陈莲笙文集' }, { id: 'tao_25', text: '清净经经注' }, { id: 'tao_26', text: '投龙' }, { id: 'tao_27', text: '上清派研究' }, { id: 'tao_28', text: '道学百问' }, { id: 'tao_29', text: '茶筵科仪资料集' }
    ]},
    { category: "🔮 术数易学", books: [{ id: 'shu_01', text: '玉照定真经' }, { id: 'shu_02', text: '紫微斗数源流' }, { id: 'shu_03', text: '周易本义' }, { id: 'shu_06', text: '易经' }]},
    { category: "📜 历史文化", books: [{ id: 'hist_01', text: '嘉靖帝' }, { id: 'hist_02', text: '声回响转' }, { id: 'hist_08', text: '唐前志怪小说史' }, { id: 'hist_12', text: '猛将还乡' }]},
    { category: "🎨 文学艺术", books: [{ id: 'lit_01', text: '丹·布朗《地狱》' }, { id: 'lit_07', text: '罪与罚' }]},
    { category: "🧠 哲学心理", books: [{ id: 'phil_01', text: '哲学的慰藉' }, { id: 'phil_04', text: '荣格《红书》' }]},
    { category: "💻 商业技术", books: [{ id: 'tech_01', text: '从零构建向量数据库' }, { id: 'tech_02', text: '小米创业思考' }]}
];

// --- 🧠 核心逻辑 Engine ---

const STORAGE_KEY = 'life_dashboard_v4'; // 升级版本号

function getData() { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
function saveData(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

// 📅 本地日期处理 (Local Timezone Fix)
function getTodayStr() {
    const n = new Date();
    return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;
}
function getYesterdayStr() {
    const d = new Date(); d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function getMondayStr() {
    const d = new Date(); const day = d.getDay();
    const diff = d.getDate() - day + (day == 0 ? -6 : 1);
    const m = new Date(d.setDate(diff));
    return `${m.getFullYear()}-${String(m.getMonth()+1).padStart(2,'0')}-${String(m.getDate()).padStart(2,'0')}`;
}

// 🎨 主渲染函数
function render() {
    const data = getData();
    const todayStr = getTodayStr();
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); 

    // 1. 设置问候语 & 日期
    let greeting = "Life Dashboard";
    let activePeriod = '';
    if (currentHour >= 5 && currentHour < 11) { greeting = "早上好！☀️"; activePeriod = 'morning'; }
    else if (currentHour >= 11 && currentHour < 18) { greeting = "下午好！☕"; activePeriod = 'daytime'; }
    else { greeting = "晚上好！🌙"; activePeriod = 'evening'; }
    
    document.getElementById('greeting').innerText = greeting;
    document.getElementById('currentDate').innerText = now.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

    // 2. 高亮当前时间段
    ['morning', 'daytime', 'evening'].forEach(p => {
        const el = document.getElementById(`block-${p}`);
        if (el) el.classList.toggle('active-now', p === activePeriod);
    });

    // 清空旧列表
    document.querySelectorAll('.task-list, .static-list').forEach(el => el.innerHTML = '');

    // 3. 渲染任务 (Daily/Weekly/Cycle)
    taskConfig.forEach(task => {
        if (task.hideOnHoliday && isHoliday) return;
        if (task.workdayOnly && (currentDay === 0 || currentDay === 6)) return;
        if (task.days && !task.days.includes(currentDay)) return;

        const taskData = data[task.id] || { lastDone: '', streak: 0 };
        let isCompleted = false;

        // 状态判断
        if (task.type === 'daily') {
            isCompleted = (taskData.lastDone === todayStr);
        } else if (task.type === 'weekly') {
            isCompleted = (taskData.lastDone >= getMondayStr());
        } else if (task.type === 'cycle') {
            if (taskData.lastDone) {
                const diff = Math.ceil(Math.abs(new Date(todayStr) - new Date(taskData.lastDone)) / (1000 * 60 * 60 * 24));
                isCompleted = (diff < task.interval); // 未到期则显示已划掉
            }
        }

        const li = document.createElement('li');
        li.className = `task-item ${isCompleted ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" ${isCompleted ? 'checked' : ''} onclick="toggleTask('${task.id}', '${task.type}')">
                <span>${task.text} ${task.type === 'cycle' && isCompleted ? '<small style="color:#999; font-size:0.7rem;">(已达成)</small>' : ''}</span>
            </div>
            ${(task.type === 'daily' && taskData.streak > 0) ? `<div class="streak-badge">🔥 ${taskData.streak}</div>` : ''}
        `;

        let listId = (task.type === 'daily') ? `list-${task.period}` : (task.type === 'weekly' ? 'list-weekly' : 'list-cycle');
        document.getElementById(listId)?.appendChild(li);
    });

    // 4. 渲染年度目标 (可勾选)
    const yearlyEl = document.getElementById('list-yearly');
    if (yearlyEl) {
        yearlyEl.className = 'task-list'; 
        yearlyGoals.forEach(goal => {
            const isDone = data[goal.id]?.done;
            const li = document.createElement('li');
            li.className = `task-item ${isDone ? 'completed' : ''}`;
            li.innerHTML = `
                <div class="task-left">
                    <input type="checkbox" ${isDone ? 'checked' : ''} onclick="toggleTask('${goal.id}', 'yearly')">
                    <span>${goal.text}</span>
                </div>
            `;
            yearlyEl.appendChild(li);
        });
    }

    // 5. 渲染书单
    const bookContainer = document.getElementById('book-container');
    if (bookContainer) {
        // 统计
        let totalRead = 0;
        bookList.forEach(cat => cat.books.forEach(b => { if(data[b.id]) totalRead++; }));

        bookContainer.innerHTML = '';
        const statDiv = document.createElement('div');
        statDiv.style.cssText = "margin-bottom:15px; padding:10px; background:#e3f2fd; color:#1976d2; border-radius:8px; font-weight:bold; text-align:center;";
        statDiv.innerHTML = `📊 本年度已阅读：<span style="font-size:1.2rem;">${totalRead}</span> 本`;
        bookContainer.appendChild(statDiv);

        // 书单标签 & 内容
        const navDiv = document.createElement('div'); navDiv.className = 'book-nav';
        const contentDiv = document.createElement('div');

        bookList.forEach((cat, idx) => {
            const btn = document.createElement('button');
            btn.className = `book-nav-btn ${idx === activeBookIndex ? 'active' : ''}`;
            btn.innerText = cat.category;
            btn.onclick = () => { activeBookIndex = idx; render(); };
            navDiv.appendChild(btn);

            if (idx === activeBookIndex) {
                const page = document.createElement('div');
                page.className = 'book-page active';
                page.innerHTML = `<ul class="task-list">` + cat.books.map(b => `
                    <li class="task-item ${data[b.id] ? 'completed' : ''}">
                        <input type="checkbox" ${data[b.id] ? 'checked' : ''} onclick="toggleTask('${b.id}', 'book')">
                        <span>${b.text}</span>
                    </li>`).join('') + `</ul>`;
                contentDiv.appendChild(page);
            }
        });
        bookContainer.appendChild(navDiv); bookContainer.appendChild(contentDiv);
    }
}

// ✅ 核心操作逻辑
function toggleTask(taskId, type) {
    const data = getData();
    const today = getTodayStr();
    const yesterday = getYesterdayStr();
    let justCompleted = false; 

    if (type === 'book' || type === 'yearly') {
        if (data[taskId]?.done) {
            delete data[taskId];
        } else {
            data[taskId] = { done: true, date: today };
            // 书单和年度目标暂时不触发撒花
        }
    } else {
        // 常规任务 (daily/weekly/cycle)
        if (!data[taskId]) data[taskId] = { lastDone: '', streak: 0 };
        const record = data[taskId];

        if (record.lastDone === today) {
            // 取消逻辑
            if (type === 'daily') {
                if (record.streak > 1) {
                    record.lastDone = yesterday; // 连击回滚
                    record.streak -= 1;
                } else {
                    record.lastDone = '';
                    record.streak = 0;
                }
            } else { record.lastDone = ''; }
        } else {
            // 完成逻辑
            if (type === 'daily') {
                record.streak = (record.lastDone === yesterday) ? record.streak + 1 : 1;
            }
            record.lastDone = today;
            justCompleted = true; // 标记为刚刚完成
        }
    }

    saveData(data);
    render();

    // 🚀 触发庆祝逻辑
    if (justCompleted) {
        checkCelebration(taskId, type);
    }
}

// ✅ 庆祝逻辑 (组队完成 & 大事完成)
function checkCelebration(triggerTaskId, type) {
    const taskConfigItem = taskConfig.find(t => t.id === triggerTaskId);
    if (!taskConfigItem) return;

    // 1. 🎉 周期任务：大事每完成一个都庆祝
    if (type === 'cycle') {
        showConfetti(`🎉 厉害了！完成了大事：${taskConfigItem.text}`);
        return;
    }

    // 2. 📋 分组任务 (每日/每周)：检查该组是否 *全部* 完成
    let groupTasks = [];
    let groupName = "";

    // 确定分组
    if (type === 'daily') {
        const period = taskConfigItem.period;
        groupTasks = taskConfig.filter(t => t.type === 'daily' && t.period === period);
        if (period === 'morning') groupName = "早晨";
        else if (period === 'daytime') groupName = "日间";
        else if (period === 'evening') groupName = "晚间";
    } else if (type === 'weekly') {
        groupTasks = taskConfig.filter(t => t.type === 'weekly');
        groupName = "本周";
    } else {
        return; // 其他类型不庆祝
    }

    // 过滤掉今天不需要做的任务 (例如周末特供、工作日特供)
    const now = new Date();
    const day = now.getDay(); 
    const validTasks = groupTasks.filter(t => {
        if (t.hideOnHoliday && isHoliday) return false;
        if (t.workdayOnly && (day === 0 || day === 6)) return false;
        if (t.days && !t.days.includes(day)) return false;
        return true;
    });

    // 检查是否全绿
    const data = getData();
    const today = getTodayStr();
    const monday = getMondayStr();

    const allDone = validTasks.every(t => {
        const lastDone = data[t.id]?.lastDone;
        if (t.type === 'daily') return lastDone === today;
        if (t.type === 'weekly') return lastDone >= monday;
        return false;
    });

    if (allDone) {
        showConfetti(`🎉 太棒了！${groupName}任务全部清零！`);
    }
}

// 🎊 撒花特效
function showConfetti(msg) {
    const toast = document.createElement('div');
    toast.innerText = msg;
    toast.style.cssText = "position:fixed; top:20%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.8); color:#fff; padding:15px 25px; border-radius:30px; z-index:9999; animation: popIn 0.5s ease; box-shadow: 0 10px 20px rgba(0,0,0,0.2); text-align:center;";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);

    const emojis = ['🎉', '✨', '🔥', '🌟', '💪', '🌸'];
    for (let i = 0; i < 30; i++) {
        const el = document.createElement('div');
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.cssText = `
            position: fixed;
            top: -50px;
            left: ${Math.random() * 100}vw;
            font-size: ${Math.random() * 20 + 20}px;
            z-index: 9998;
            pointer-events: none;
            animation: fall ${Math.random() * 2 + 1}s linear forwards;
        `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
    }
}

// 注入动画样式
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes popIn { from { opacity:0; transform:translate(-50%, -40%); } to { opacity:1; transform:translate(-50%, -50%); } }
    @keyframes fall { to { transform: translateY(110vh) rotate(360deg); } }
`;
document.head.appendChild(styleSheet);

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.add('active');
    
    const idx = tabName === 'today' ? 0 : (tabName === 'plan' ? 1 : 2);
    document.querySelectorAll('.nav-btn')[idx].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 初始化
render();
setInterval(render, 60000);
