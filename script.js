// --- ⚙️ 用户配置区域 ---

// 寒暑假模式开关
const isHoliday = false; 

// 书单当前显示的分类索引 (0 代表第一个分类)
let activeBookIndex = 0;

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
    { id: 'w_laundry_dry', text: '☀️ 晾晒衣服', type: 'weekly' },
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

const bookList = [
    {
        category: "☯️ 道教核心", // 名字缩短一点，方便标签显示
        books: [
            { id: 'tao_01', text: '中华书局《老子》' },
            { id: 'tao_02', text: '中华书局《庄子》' },
            { id: 'tao_03', text: '陈鼓应《老子今注今译》' },
            { id: 'tao_04', text: '修道真言 (线装本)' },
            { id: 'tao_05', text: '火师汪真君雷霆奥旨 八段锦 玄珠歌' },
            { id: 'tao_06', text: '苏州道教的醮事 (线装本)' },
            { id: 'tao_07', text: '海琼白真人语录 (线装本)' },
            { id: 'tao_08', text: '道德宝章 (线装本)' },
            { id: 'tao_09', text: '灵宝毕法 (线装本)' },
            { id: 'tao_10', text: '太乙金华宗旨 (线装本)' },
            { id: 'tao_11', text: '道藏源流考 (共2册)' },
            { id: 'tao_12', text: '道藏说略 (共3册)' },
            { id: 'tao_13', text: '道藏提要' },
            { id: 'tao_14', text: '太极张三丰全书 (两册)' },
            { id: 'tao_15', text: '紫清全集 (两册)' },
            { id: 'tao_16', text: '道教大辞典' },
            { id: 'tao_17', text: '盟约 (L\'ALLIANCE) (共4册)' },
            { id: 'tao_18', text: '道教神仙信仰' },
            { id: 'tao_19', text: '神仙' },
            { id: 'tao_20', text: '口诀直指' },
            { id: 'tao_21', text: '中国道冥思静坐史 (共6册)' },
            { id: 'tao_22', text: '道风集' },
            { id: 'tao_23', text: '弘道八十年' },
            { id: 'tao_24', text: '陈莲笙文集' },
            { id: 'tao_25', text: '太上老君常说清净经经注' },
            { id: 'tao_26', text: '投龙: 从山川祭祀到洞天福地' },
            { id: 'tao_27', text: '六朝道教上清派研究' },
            { id: 'tao_28', text: '中华道学百问 (三册)' },
            { id: 'tao_29', text: '太湖流域茶筵科仪资料集' }
        ]
    },
    {
        category: "🔮 术数易学",
        books: [
            { id: 'shu_01', text: '玉照定真经' },
            { id: 'shu_02', text: '紫微斗数源流初探' },
            { id: 'shu_03', text: '周易本义' },
            { id: 'shu_04', text: '周易本义 (繁体版)' },
            { id: 'shu_05', text: '新刻纂集紫微斗数捷览' },
            { id: 'shu_06', text: '易经' }
        ]
    },
    {
        category: "📜 历史文化",
        books: [
            { id: 'hist_01', text: '嘉靖帝-丹鼎青烟里的王朝乱象' },
            { id: 'hist_02', text: '声回响转-讲稿八篇' },
            { id: 'hist_03', text: '新文化运动的兴起' },
            { id: 'hist_04', text: '中国思想的再发现' },
            { id: 'hist_05', text: '这个唐朝真好玩' },
            { id: 'hist_06', text: '中国古代文化常识' },
            { id: 'hist_07', text: '吃的中国史' },
            { id: 'hist_08', text: '唐前志怪小说史' },
            { id: 'hist_09', text: '巴黎烧了吗？' },
            { id: 'hist_10', text: '童话、博物学与维多利亚文化' },
            { id: 'hist_11', text: '基督教历史：最初的三千年' },
            { id: 'hist_12', text: '猛将还乡' }
        ]
    },
    {
        category: "🎨 文学艺术",
        books: [
            { id: 'lit_01', text: '丹·布朗《地狱》' },
            { id: 'lit_02', text: '面向远处' },
            { id: 'lit_03', text: '西北雨' },
            { id: 'lit_04', text: '颜真卿书法集' },
            { id: 'lit_05', text: '颜真卿书法评价研究' },
            { id: 'lit_06', text: '不一样的天空' },
            { id: 'lit_07', text: '罪与罚' },
            { id: 'lit_08', text: '血月的华尔兹' },
            { id: 'lit_09', text: '美丽的京剧' }
        ]
    },
    {
        category: "🧠 哲学/心理/神秘",
        books: [
            { id: 'phil_01', text: '《哲学的慰藉》' },
            { id: 'phil_02', text: 'DK 魔法百科' },
            { id: 'phil_03', text: '炼金术与神秘主义' },
            { id: 'phil_04', text: '荣格《红书》' },
            { id: 'phil_05', text: '周敦颐集' }
        ]
    },
    {
        category: "💻 商业技术",
        books: [
            { id: 'tech_01', text: '从零构建向量数据库' },
            { id: 'tech_02', text: '小米创业思考' }
        ]
    }
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
    const currentDay = now.getDay(); 

    // 1. 设置日期和问候语
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateText = now.toLocaleDateString('zh-CN', dateOptions);
    
    let greeting = "Life Dashboard";
    let activePeriod = '';

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

    // 高亮逻辑
    const container = document.querySelector('.main-container');
    if (container) container.classList.add('focus-mode');
    
    ['morning', 'daytime', 'evening'].forEach(p => {
        const el = document.getElementById(`block-${p}`);
        if (el) {
            if (p === activePeriod) {
                el.classList.add('active-now');
            } else {
                el.classList.remove('active-now');
            }
        }
    });

    // 清空常规任务
    document.querySelectorAll('.task-list').forEach(el => el.innerHTML = '');

    // 2. 渲染任务
    taskConfig.forEach(task => {
        if (task.hideOnHoliday && isHoliday) return;
        if (task.workdayOnly && (currentDay === 0 || currentDay === 6)) return;
        if (task.days && !task.days.includes(currentDay)) return;

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
                    shouldShow = false; 
                }
            }
        }

        if (shouldShow) {
            const li = document.createElement('li');
            li.className = `task-item ${isCompleted ? 'completed' : ''}`;

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

            const rightDiv = document.createElement('div');
            if (task.type === 'daily' && taskData.streak > 0) {
                const streakBadge = document.createElement('span');
                streakBadge.className = 'streak-badge';
                streakBadge.innerHTML = `🔥 ${taskData.streak}`;
                rightDiv.appendChild(streakBadge);
            }

            li.appendChild(leftDiv);
            li.appendChild(rightDiv);

            let listId = 'list-cycle';
            if (task.type === 'daily') listId = `list-${task.period}`;
            if (task.type === 'weekly') listId = 'list-weekly';
            
            const containerEl = document.getElementById(listId);
            if(containerEl) containerEl.appendChild(li);
        }
    });

    // 3. 渲染年度目标
    const yearlyEl = document.getElementById('list-yearly');
    if (yearlyEl) {
        yearlyEl.innerHTML = '';
        yearlyGoals.forEach(goal => {
            const li = document.createElement('li');
            li.innerText = goal;
            yearlyEl.appendChild(li);
        });
    }

    // === 4. (升级) 渲染书单子标签系统 ===
    const bookContainer = document.getElementById('book-container');
    if (bookContainer) {
        bookContainer.innerHTML = ''; // 清空

        // 4.1 创建顶部的横向滚动标签栏
        const navDiv = document.createElement('div');
        navDiv.className = 'book-nav';
        
        // 4.2 创建内容区域容器
        const contentDiv = document.createElement('div');

        // 4.3 遍历生成 标签按钮 和 内容列表
        bookList.forEach((cat, index) => {
            // -- 生成按钮 --
            const btn = document.createElement('button');
            btn.className = `book-nav-btn ${index === activeBookIndex ? 'active' : ''}`;
            btn.innerText = cat.category;
            btn.onclick = () => switchBookCat(index); // 点击切换
            navDiv.appendChild(btn);

            // -- 生成内容列表 --
            const pageDiv = document.createElement('div');
            pageDiv.className = `book-page ${index === activeBookIndex ? 'active' : ''}`;
            
            const ul = document.createElement('ul');
            ul.className = 'task-list';
            
            cat.books.forEach(book => {
                const isRead = !!data[book.id]; 
                
                const li = document.createElement('li');
                li.className = `task-item ${isRead ? 'completed' : ''}`;
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = isRead;
                checkbox.onclick = () => toggleTask(book.id, 'book'); 

                const span = document.createElement('span');
                span.innerText = book.text;

                li.appendChild(checkbox);
                li.appendChild(span);
                ul.appendChild(li);
            });
            
            pageDiv.appendChild(ul);
            contentDiv.appendChild(pageDiv);
        });

        bookContainer.appendChild(navDiv);
        bookContainer.appendChild(contentDiv);
    }
}

// === 切换书单分类 ===
function switchBookCat(index) {
    activeBookIndex = index; // 更新当前索引
    render(); // 重新渲染页面
}

function toggleTask(taskId, type) {
    const data = getData();
    
    // 书单逻辑
    if (type === 'book') {
        if (data[taskId]) {
            delete data[taskId];
        } else {
            data[taskId] = { lastDone: 'done' };
        }
        saveData(data);
        render();
        return; 
    }

    // 常规逻辑
    const todayStr = getTodayStr();
    const yesterdayStr = getYesterdayStr();
    
    if (!data[taskId]) data[taskId] = { lastDone: '', streak: 0 };
    const taskRecord = data[taskId];

    if (taskRecord.lastDone === todayStr) {
        taskRecord.lastDone = ''; 
    } else {
        if (type === 'daily') {
            if (taskRecord.lastDone === yesterdayStr) {
                taskRecord.streak += 1;
            } else {
                taskRecord.streak = 1;
            }
        }
        taskRecord.lastDone = todayStr;
    }

    saveData(data);
    render();
}

// 底部 Tab 切换逻辑
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(`tab-${tabName}`).classList.add('active');

    const btns = document.querySelectorAll('.nav-btn');
    if (tabName === 'today') btns[0].classList.add('active');
    if (tabName === 'plan') btns[1].classList.add('active');
    if (tabName === 'library') btns[2].classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

render();
setInterval(render, 60000);
