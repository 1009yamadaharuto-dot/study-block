// 📘 問題データベース (生物ノート完全網羅 + 英検)
const quizzes = [
    // --- 生物（ノート網羅） ---
    {q: "真核生物の光合成が行われる細胞小器官は？", a: "葉緑体", options: ["ミトコンドリア", "リボソーム", "液胞"]},
    {q: "葉緑体が独自にもつ、遺伝情報の本体は？", a: "DNA", options: ["RNA", "タンパク質", "脂質"]},
    {q: "葉緑体内部のへん平な袋状構造は？", a: "チラコイド", options: ["ストロマ", "クリステ", "マトリックス"]},
    {q: "チラコイド膜に存在するものは？", a: "光合成色素", options: ["酵素", "DNAポリメラーゼ", "リボソーム"]},
    {q: "チラコイドと包膜の間の基質部分は？", a: "ストロマ", options: ["チラコイド", "ルメン", "クリステ"]},
    {q: "光の波長と吸収の関係を示すグラフは？", a: "吸収スペクトル", options: ["作用スペクトル", "クロマトグラフィー", "光化学反応"]},
    {q: "光の波長と光合成速度の関係を示すグラフは？", a: "作用スペクトル", options: ["吸収スペクトル", "透過スペクトル", "吸収率"]},
    {q: "光合成で発生する酸素の由来となる物質は？", a: "水", options: ["二酸化炭素", "グルコース", "ATP"]},
    {q: "二酸化炭素の経路を解明した回路は？", a: "カルビン・ベンソン回路", options: ["クエン酸回路", "解糖系", "電子伝達系"]},
    {q: "二酸化炭素の解析に使われた手法は？", a: "二次元ペーパークロマトグラフィー", options: ["電気泳動", "遠心分離", "X線解析"]},
    {q: "CO2から最初にC3化合物をつくる植物は？", a: "C3植物", options: ["C4植物", "CAM植物", "光合成細菌"]},
    {q: "トウモロコシやサトウキビは何植物？", a: "C4植物", options: ["C3植物", "CAM植物", "シダ植物"]},
    {q: "サボテンやベンケイソウは何植物？", a: "CAM植物", options: ["C3植物", "C4植物", "コケ植物"]},
    {q: "緑色硫黄細菌が水のかわりに利用する物質は？", a: "硫化水素", options: ["酸素", "二酸化炭素", "メタン"]},
    {q: "DNAの構造を表現する言葉は？", a: "二重らせん", options: ["αヘリックス", "βシート", "一本鎖"]},
    {q: "DNAやRNAの構成単位は？", a: "ヌクレオチド", options: ["アミノ酸", "ペプチド", "単糖"]},
    {q: "DNAの構成要素（ヌクレオチド）に含まれないものは？", a: "ウラシル", options: ["リン酸", "デオキシリボース", "アデニン"]},
    {q: "DNA塩基対でアデニン(A)と結合するのは？", a: "チミン(T)", options: ["シトシン(C)", "グアニン(G)", "ウラシル(U)"]},
    {q: "塩基の互いに補いあう関係を何という？", a: "相補性", options: ["対立性", "同一性", "選好性"]},
    {q: "DNA複製の形式を何というか？", a: "半保存的複製", options: ["全保存的複製", "分散的複製", "転写"]},
    {q: "二重らせんをほどく酵素は？", a: "DNAヘリカーゼ", options: ["DNAポリメラーゼ", "DNAリガーゼ", "RNAポリメラーゼ"]},
    {q: "新生鎖を伸長させる酵素は？", a: "DNAポリメラーゼ", options: ["DNAヘリカーゼ", "DNAリガーゼ", "プロモーター"]},
    {q: "複製開始の起点となる短いRNAは？", a: "プライマー", options: ["コドン", "プロモーター", "イントロン"]},
    {q: "連続的に複製される側の新生鎖は？", a: "リーディング鎖", options: ["ラギング鎖", "岡崎フラグメント", "センス鎖"]},
    {q: "不連続に合成される断片をつなぐ酵素は？", a: "DNAリガーゼ", options: ["DNAポリメラーゼ", "DNAヘリカーゼ", "制限酵素"]},
    {q: "原核細胞のDNA複製起点は何箇所？", a: "1箇所", options: ["数十箇所", "数百箇所", "無制限"]},
    {q: "DNAの塩基配列がRNAへと写し取られる現象は？", a: "転写", options: ["翻訳", "複製", "修飾"]},
    {q: "RNAの塩基配列がアミノ酸配列に置き換わる現象は？", a: "翻訳", options: ["転写", "複製", "スプライシング"]},
    {q: "RNAに含まれる糖の種類は？", a: "リボース", options: ["デオキシリボース", "グルコース", "フルクトース"]},
    {q: "RNAの合成を開始するDNA上の領域は？", a: "プロモーター", options: ["オペレーター", "イントロン", "エキソン"]},
    {q: "RNAからイントロンを除去する過程は？", a: "スプライシング", options: ["転写", "翻訳", "キャッピング"]},
    {q: "アミノ酸を指定するmRNA上の連続3塩基は？", a: "コドン", options: ["アンチコドン", "トリプレット", "プロモーター"]},
    {q: "tRNAがもつコドンと結合する3塩基は？", a: "アンチコドン", options: ["コドン", "イントロン", "エキソン"]},
    {q: "タンパク質合成の場となる小器官は？", a: "リボソーム", options: ["ゴルジ体", "中心体", "リソソーム"]},
    {q: "原核生物で複数の構造遺伝子がまとまった転写単位は？", a: "オペロン", options: ["クロマチン", "リプレッサー", "プロモーター"]},
    {q: "転写を抑制する調節タンパク質は？", a: "リプレッサー", options: ["インデューサー", "プロモーター", "基本転写因子"]},
    {q: "リプレッサーが結合するDNA上の部位は？", a: "オペレーター", options: ["プロモーター", "エキソン", "イントロン"]},
    {q: "真核生物でDNAがヒストンと結合した構造は？", a: "クロマチン", options: ["オペロン", "リプレッサー", "プロモーター"]},

    // --- 英検準2級 ---
    {q: "「～に頼る、依存する」", a: "rely on", options: ["depend to", "look for", "believe in"]},
    {q: "「参加する」", a: "take part in", options: ["take care of", "take off", "take place"]},
    {q: "「～の世話をする」", a: "look after", options: ["look at", "look for", "look up"]},
    {q: "「～を諦める」", a: "give up", options: ["give in", "give out", "give away"]},
    {q: "「延期する」", a: "put off", options: ["put on", "put out", "put away"]}
];

const praises = ["天才！", "神業！", "素晴らしい！", "最高！", "センス良すぎ！", "ドーパミン全開！", "完璧！"];

// ブロック形状の定義
const BLOCK_SHAPES = [
    [[1]], // 1x1
    [[1, 1]], // 1x2
    [[1], [1]], // 2x1
    [[1, 1, 1]], // 1x3
    [[1], [1], [1]], // 3x1
    [[1, 1], [1, 1]], // 2x2 正方形
    [[1, 1, 1], [0, 1, 0]], // T字
    [[1, 1, 0], [0, 1, 1]], // Z字
    [[1, 1, 1], [1, 0, 0]]  // L字
];

let blocksPlaced = 0;
let combo = 0;
let gracePeriod = 3;
let trophies = 10;
let soundEnabled = true;
let currentPieces = [null, null, null];

const grid = document.getElementById('grid');
let gridData = Array(8).fill().map(() => Array(8).fill(false));

function initGrid() {
    grid.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.r = r;
            cell.dataset.c = c;
            grid.appendChild(cell);
        }
    }
}

// 3つのブロックピースを生成して配置
function generatePieces() {
    const container = document.getElementById('blocks-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        const shape = BLOCK_SHAPES[Math.floor(Math.random() * BLOCK_SHAPES.length)];
        currentPieces[i] = shape;
        
        const pieceEl = document.createElement('div');
        pieceEl.className = 'piece';
        pieceEl.dataset.index = i;
        pieceEl.style.display = 'grid';
        pieceEl.style.gridTemplateRows = `repeat(${shape.length}, 24px)`;
        pieceEl.style.gridTemplateColumns = `repeat(${shape[0].length}, 24px)`;
        pieceEl.style.gap = '2px';
        pieceEl.style.cursor = 'pointer';
        
        shape.forEach((row, r) => {
            row.forEach((val, c) => {
                const blockCell = document.createElement('div');
                blockCell.style.width = '24px';
                blockCell.style.height = '24px';
                if (val) {
                    blockCell.className = 'cell filled';
                }
                pieceEl.appendChild(blockCell);
            });
        });
        
        // タップ/クリックで置ける場所にスマート配置
        pieceEl.addEventListener('click', () => tryPlaceSelectedPiece(i));
        container.appendChild(pieceEl);
    }
}

function tryPlaceSelectedPiece(pieceIndex) {
    const shape = currentPieces[pieceIndex];
    if (!shape) return;
    
    let placed = false;
    for (let r = 0; r <= 8 - shape.length; r++) {
        for (let c = 0; c <= 8 - shape[0].length; c++) {
            if (canPlace(shape, r, c)) {
                placeShape(shape, r, c);
                placed = true;
                break;
            }
        }
        if (placed) break;
    }
    
    if (placed) {
        currentPieces[pieceIndex] = null;
        const container = document.getElementById('blocks-container');
        if (container.children[pieceIndex]) {
            container.children[pieceIndex].classList.add('placed');
        }
        
        blocksPlaced++;
        gracePeriod--;
        checkLines();
        
        if (blocksPlaced % 3 === 0) {
            setTimeout(showQuiz, 300);
        }
        
        if (currentPieces.every(p => p === null)) {
            generatePieces();
        }
    } else {
        playSE('wrong');
    }
}

function canPlace(shape, startR, startC) {
    for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[0].length; c++) {
            if (shape[r][c] && gridData[startR + r][startC + c]) {
                return false;
            }
        }
    }
    return true;
}

function placeShape(shape, startR, startC) {
    for (let r = 0; r < shape.length; r++) {
        for (let c = 0; c < shape[0].length; c++) {
            if (shape[r][c]) {
                gridData[startR + r][startC + c] = true;
            }
        }
    }
    updateGridUI();
    playSE('place');
}

function updateGridUI() {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            let cell = document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`);
            if (gridData[r][c]) {
                cell.classList.add('filled');
            } else {
                cell.classList.remove('filled');
            }
        }
    }
}

function checkLines() {
    let linesCleared = 0;
    
    for (let r = 0; r < 8; r++) {
        if (gridData[r].every(val => val)) {
            gridData[r].fill(false);
            linesCleared++;
        }
    }
    for (let c = 0; c < 8; c++) {
        let colFilled = true;
        for (let r = 0; r < 8; r++) {
            if (!gridData[r][c]) colFilled = false;
        }
        if (colFilled) {
            for (let r = 0; r < 8; r++) {
                gridData[r][c] = false;
            }
            linesCleared++;
        }
    }
    
    if (linesCleared > 0) {
        combo++;
        gracePeriod = 3;
        document.getElementById('combo-count').innerText = `Combo: ${combo}`;
        showPraise();
        playSE('clear');
    } else if (gracePeriod <= 0) {
        combo = 0;
        gracePeriod = 3;
        document.getElementById('combo-count').innerText = `Combo: 0`;
    }
    
    updateGridUI();
}

function showPraise() {
    const pText = document.getElementById('praise-text');
    pText.innerText = praises[Math.floor(Math.random() * praises.length)];
    pText.classList.remove('hidden');
    const newPText = pText.cloneNode(true);
    pText.parentNode.replaceChild(newPText, pText);
    
    setTimeout(() => {
        newPText.classList.add('hidden');
    }, 1100);
}

// クイズ機能（毎回選択肢をシャッフル）
function showQuiz() {
    const q = quizzes[Math.floor(Math.random() * quizzes.length)];
    document.getElementById('quiz-question').innerText = q.q;
    
    let opts = [q.a, ...q.options];
    opts.sort(() => Math.random() - 0.5);
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    opts.forEach(opt => {
        let btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === q.a) {
                trophies += 10;
                document.getElementById('trophy-count').innerText = `🏆 ${trophies}`;
                playSE('correct');
            } else {
                playSE('wrong');
            }
            document.getElementById('quiz-modal').classList.add('hidden');
        };
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('quiz-modal').classList.remove('hidden');
}

// UI / スキン切り替え
document.getElementById('settings-btn').addEventListener('click', () => {
    document.getElementById('settings-modal').classList.remove('hidden');
});
document.getElementById('close-settings').addEventListener('click', () => {
    document.getElementById('settings-modal').classList.add('hidden');
});

document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        document.body.className = `theme-${e.target.dataset.theme}`;
    });
});

document.getElementById('toggle-bgm').addEventListener('click', (e) => {
    soundEnabled = !soundEnabled;
    e.target.innerText = soundEnabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
});

// Sound (Web Audio API)
let audioCtx;
function playSE(type) {
    if (!soundEnabled) return;
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    if (type === 'place') {
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    } else if (type === 'correct') {
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.25);
    } else if (type === 'clear') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440 * (1 + combo * 0.1), audioCtx.currentTime);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    }
}

initGrid();
generatePieces();
