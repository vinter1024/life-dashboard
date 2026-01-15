// --- ⚙️ 用户配置区域 ---

// 寒暑假模式开关
const isHoliday = false; 

const taskConfig = [
    // === 每日任务 ===
    { id: 'd_wakeup', text: '起床 & 喝水', type: 'daily', period: 'morning' },
    { id: 'd_cleanmyself', text: '洗脸/刷牙/涂药/护肤', type: 'daily', period: 'morning' },
    { id: 'd_sport', text: '晨间运动 (站桩/金刚功)', type: 'daily', period: 'morning' },
    { id: 'd_incense', text: '🧘‍♀️ 燃香 / 念经', type: 'daily', period: 'morning' },
    { id: 'd_breakfast', text: '早餐', type: 'daily', period: 'morning' },
    { id: 'd_meds1', text: '💊 维B+D3', type: 'daily', period: 'morning' },
    { id: 'd_dog_am', text: '🐶 遛狗 (早)', type: 'daily', period: 'morning' },
  
    
    // workdayOnly: 只在周一到周五显示
    { id: 'd_study', text: '📚 软考听力 (通勤)', type: 'daily', period: 'daytime', workdayOnly: true },
     { id: 'd_meds2', text: '💊 吃药 & 鱼油& 辅酶Q10', type: 'daily', period: 'daytime' },
    { id: 'd_water', text: '💧 多喝水/间歇走动', type: 'daily', period: 'daytime' },
    { id: 'd_exam_night', text: '📝 软考专注学习 (1h+)', type: 'daily', period: 'daytime' },

    // days: [0, 6] 表示只在周六(6)和周日(0)显示
    { id: 'd_cook', text: '🍲 煮养生粥/做饭', type: 'daily', period: 'daytime', days: [0, 6] },

    { id: 'd_clean', text: '🧹 简单归位 & 丢垃圾', type: 'daily', period: 'evening' },
    { id: 'd_dog_pm', text: '🐶 遛狗 (晚) ', type: 'daily', period: 'evening' },
    { id: 'd_evensport', text: '🏃🏻‍♀️晚间运动（踏步机/拉伸）', type: 'daily', period: 'evening' },
    { id: 'd_dog_care', text: '🐶 擦脚/梳毛/喂饭', type: 'daily', period: 'evening' },
    { id: 'd_watermachine', text: '💧加湿器补水', type: 'daily', period: 'evening' },
    { id: 'd_interest', text: '✍🏻 兴趣学习/书法练习', type: 'daily', period: 'evening' },
    { id: 'd_skin', text: '🧖‍♀️ 洗澡或泡脚', type: 'daily', period: 'evening' },
    { id: 'd_RIPC', text: 'RIPC疗法', type: 'daily', period: 'evening' },
    { id: 'd_meds3', text: '温水 💊 镁片', type: 'daily', period: 'morning' },
    { id: 'd_door', text: '🔒 门窗检查', type: 'daily', period: 'evening' },

    // === 每周任务 (周一重置) ===
    { id: 'w_calligraphy', text: '✍️ 书法课', type: 'weekly', hideOnHoliday: true },
    { id: 'w_laundry', text: '👕 洗衣服', type: 'weekly' },
    { id: 'w_laundry', text: '☀️ 晾晒衣服', type: 'weekly' },
    { id: 'w_pillow', text: '🛏️ 换洗枕巾', type: 'weekly' },
    { id: 'w_plant', text: '🌿 绿植浇水', type: 'weekly' },
     { id: 'w_cleanmachine', text: '🤖 加湿器滤芯清理', type: 'weekly' },
    { id: 'w_clean_floor', text: '🧹 扫地机/拖地', type: 'weekly' },
    { id: 'w_summary', text: '📊 软考周总结 & 案例', type: 'weekly' },
 

    // === 周期任务 (N天后自动出现) ===
    { id: 'c_sheets', text: '🛏️ 更换床单被罩 (含洗涤)', type: 'cycle', interval: 14 }, 
    { id: 'c_dog_bath', text: '🛁 狗狗洗澡/剪指甲', type: 'cycle', interval: 21 },
    { id: 'c_dog_ext', text: '🐛 狗狗体外驱虫 (1月)', type: 'cycle', interval: 30 },
    { id: 'c_dog_in', text: '💊 狗狗体内驱虫 (3月)', type: 'cycle', interval: 90 },
    { id: 'c_house', text: '🏠 家电维护/库存盘点', type: 'cycle', interval: 30 },
];

const yearlyGoals = [
    "🏥 年度体检 (每年一次)",
    "💉 狗狗疫苗接种",
    "🎓 软考拿证 (5月)",
    "☯️ 春天学习太极拳",
    "📖 课程笔记补齐"
];

// --- 🧠 核心逻辑 ---

const STORAGE_KEY = 'life_dashboard_v2';

function getData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

// 获取昨天日期，用于计算坚持天数
function getYesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
}

function getMondayStr() {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day == 0 ? -6 : 1); 
    const monday = new Date(d.setDate(diff));
    return monday.toISOString().split('T')[0];
}

function render() {
    const data = getData();
    const todayStr = getTodayStr();
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0是周日, 1-6是周一到周六

    // 1. 设置日期和问候语
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateText = now.toLocaleDateString('zh-CN', dateOptions);
    
    let greeting = "Life Dashboard";
    let activePeriod = '';

    // 判断时间段 (用于高亮)
    if (currentHour >= 5 && currentHour < 11) {
        greeting = "早上好，又是充满能量的一天！☀️";
        activePeriod = 'morning';
    } else if (currentHour >= 11 && currentHour < 18) {
        greeting = "下午好，记得多喝水。☕";
        activePeriod = 'daytime';
    } else {
        greeting = "晚上好，准备休息了吗？🌙";
        activePeriod = 'evening';
    }

    document.getElementById('greeting').innerText = greeting;
    document.getElementById('currentDate').innerText = `${dateText}`;

    // 处理高亮样式
    document.querySelector('.container').classList.add('focus-mode');
    ['morning', 'daytime', 'evening'].forEach(p => {
        const el = document.getElementById(`block-${p}`);
        if (p === activePeriod) {
            el.classList.add('active-now');
        } else {
            el.classList.remove('active-now');
        }
    });

    // 清空列表
    document.querySelectorAll('.task-list').forEach(el => el.innerHTML = '');

    // 2. 遍历并渲染任务
    taskConfig.forEach(task => {
        // --- 过滤逻辑 ---
        if (task.hideOnHoliday && isHoliday) return;
        if (task.workdayOnly && (currentDay === 0 || currentDay === 6)) return;
        // 如果配置了 specificDays (比如周三 [3])，今天不是周三就不显示
        if (task.days && !task.days.includes(currentDay)) return;

        // --- 状态逻辑 ---
        const taskData = data[task.id] || { lastDone: '', streak: 0 };
        const lastDone = taskData.lastDone;
        let isCompleted = false;
        let shouldShow = false;

        if (task.type === 'daily') {
            shouldShow = true;
            isCompleted = (lastDone === todayStr);
        } else if (task.type === 'weekly') {
            const thisMonday = getMondayStr();
            shouldShow = true;
            isCompleted = (lastDone >= thisMonday);
        } else if (task.type === 'cycle') {
            if (!lastDone) {
                shouldShow = true;
            } else {
                const diffTime = Math.abs(new Date(todayStr) - new Date(lastDone));
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays >= task.interval) {
                    shouldShow = true;
                    isCompleted = false;
                } else {
                    shouldShow = false; // 没到期，隐藏
                }
            }
        }

        // --- 渲染 ---
        if (shouldShow) {
            const li = document.createElement('li');
            li.className = `task-item ${isCompleted ? 'completed' : ''}`;

            // 左侧：复选框和文字
            const leftDiv = document.createElement('div');
            leftDiv.className = 'task-left';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = isCompleted;
            checkbox.onclick = () => toggleTask(task.id, task.type);

            const span = document.createElement('span');
            span.innerText = task.text;

            leftDiv.appendChild(checkbox);
            leftDiv.appendChild(span);

            // 右侧：坚持天数 (仅每日任务显示)
            const rightDiv = document.createElement('div');
            if (task.type === 'daily' && taskData.streak > 0) {
                const streakBadge = document.createElement('span');
                streakBadge.className = 'streak-badge';
                streakBadge.innerHTML = `🔥 ${taskData.streak}`;
                rightDiv.appendChild(streakBadge);
            }

            li.appendChild(leftDiv);
            li.appendChild(rightDiv);

            // 放入对应容器
            let listId = 'list-cycle';
            if (task.type === 'daily') listId = `list-${task.period}`;
            if (task.type === 'weekly') listId = 'list-weekly';
            
            const container = document.getElementById(listId);
            if(container) container.appendChild(li);
        }
    });

    // 渲染年度目标
    document.getElementById('list-yearly').innerHTML = '';
    yearlyGoals.forEach(goal => {
        const li = document.createElement('li');
        li.innerText = goal;
        document.getElementById('list-yearly').appendChild(li);
    });
}

function toggleTask(taskId, type) {
    const data = getData();
    const todayStr = getTodayStr();
    const yesterdayStr = getYesterdayStr();
    
    // 初始化数据结构
    if (!data[taskId]) data[taskId] = { lastDone: '', streak: 0 };
    
    const taskRecord = data[taskId];

    if (taskRecord.lastDone === todayStr) {
        // 如果今天已经完成了，再次点击 => 取消完成
        // 注意：取消完成不扣减 Streak (为了逻辑简单，假设只是误触)，但移除今天的标记
        taskRecord.lastDone = ''; 
        // 只有当 Streak 是因为今天刚加上的，我们才减回去（这需要复杂状态），
        // 这里简化处理：取消打卡不影响历史 Streak，除非明天再打卡时会重新计算
    } else {
        // 点击完成
        // 计算 Streak
        if (type === 'daily') {
            if (taskRecord.lastDone === yesterdayStr) {
                // 昨天做了，连续！
                taskRecord.streak += 1;
            } else {
                // 昨天没做（或者是第一次），重置为 1
                taskRecord.streak = 1;
            }
        }
        taskRecord.lastDone = todayStr;
    }

    saveData(data);
    render();
}

// 启动
render();
// 每分钟刷新一次，确保跨越时间段时(比如从早上变成下午)自动变色
setInterval(render, 60000);