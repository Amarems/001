/* Earlier cross-matchday fixture sample retained for reference.
const legacyMatches = [
  { home: "摩洛哥", away: "苏格兰", homeFlag: "🇲🇦", awayFlag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C组", venue: "波士顿", attackH: 1.48, defenseH: .82, attackA: 1.10, defenseA: 1.08, formH: 7, formA: 6 },
  { home: "巴西", away: "海地", homeFlag: "🇧🇷", awayFlag: "🇭🇹", group: "C组", venue: "费城", attackH: 1.92, defenseH: .74, attackA: .72, defenseA: 1.48, formH: 8, formA: 4 },
  { home: "巴拿马", away: "克罗地亚", homeFlag: "🇵🇦", awayFlag: "🇭🇷", group: "L组", venue: "多伦多", attackH: 1.00, defenseH: 1.18, attackA: 1.45, defenseA: .90, formH: 5, formA: 7 },
  { home: "哥伦比亚", away: "葡萄牙", homeFlag: "🇨🇴", awayFlag: "🇵🇹", group: "K组", venue: "迈阿密", attackH: 1.42, defenseH: .88, attackA: 1.66, defenseA: .80, formH: 7, formA: 8 },
  { home: "阿根廷", away: "约旦", homeFlag: "🇦🇷", awayFlag: "🇯🇴", group: "J组", venue: "达拉斯", attackH: 1.86, defenseH: .70, attackA: .82, defenseA: 1.32, formH: 9, formA: 5 },
  { home: "阿尔及利亚", away: "奥地利", homeFlag: "🇩🇿", awayFlag: "🇦🇹", group: "J组", venue: "堪萨斯城", attackH: 1.18, defenseH: 1.00, attackA: 1.40, defenseA: .92, formH: 6, formA: 7 }
];
*/
const matches = [
  { home: "巴西", away: "日本", homeFlag: "🇧🇷", awayFlag: "🇯🇵", group: "32强 · 已完赛", venue: "休斯顿 · 13:00 ET", rankH: 5, rankA: 17, pointsH: "淘汰赛", pointsA: "淘汰赛", recordH: "晋级16强", recordA: "已出局", stage: "knockout", evidenceH: 18, evidenceA: 16, climateGoalPenalty: .06, refereePenaltyBoost: 0, redCardVolatility: .03, restDiff: 0, homeAdvantage: 1.00, goalCorrelation: .20, penaltyEdgeH: .04, penaltyEdgeA: .01, coachH: ["巴西教练组", 10, 6, 2, 2], coachA: ["森保一", 10, 7, 1, 2], odds: [1.70, 3.69, 5.23], openingOdds: [1.75, 3.50, 4.70], oddsSource: "中彩网百家指数平均欧赔快照", oddsCheckedAt: "2026-06-29 赛前快照", wdlOpen: true, result: { regulation: "2:1", advance: "巴西", status: "FT", audit: "赛前方向命中，精确比分未命中；总进球3球进入模型参考区间。" }, statusH: "已完赛，2–1晋级", statusA: "已完赛，领先后被逆转", intentH: 1.05, intentA: 1.03, riskH: .98, riskA: .96, routeH: 1.04, routeA: .99, bracket: "已完赛校准：Brazil 2–1 Japan。赛前赔率初赔1.75/3.50/4.70，最新1.70/3.69/5.23，方向偏巴西；模型保留赛前分布用于回看。", path: "赛果回灌：巴西 2–1 日本。主客/顺序按公开赛程 Brazil vs Japan 复核；中立场不默认给赛程第一队主场加成。本场说明模型对强侧方向判断有效，但低估了巴西最后阶段压制带来的2:1尾部。", attackH: 1.84, defenseH: .78, attackA: 1.34, defenseA: .86, formH: 8, formA: 7 },
  { home: "科特迪瓦", away: "挪威", homeFlag: "🇨🇮", awayFlag: "🇳🇴", group: "32强 · 今日待赛", venue: "费城 · 14:00 ET", rankH: 41, rankA: 24, pointsH: "淘汰赛", pointsA: "淘汰赛", recordH: "晋级32强", recordA: "晋级32强", stage: "knockout", evidenceH: 12, evidenceA: 15, climateGoalPenalty: .05, refereePenaltyBoost: 0, redCardVolatility: .04, restDiff: 0, homeAdvantage: 1.00, goalCorrelation: .20, penaltyEdgeH: 0, penaltyEdgeA: .02, coachH: ["科特迪瓦教练组", 10, 4, 3, 3], coachA: ["挪威教练组", 10, 6, 2, 2], odds: null, wdlOpen: false, partialOdds: "未找到完整同源90分钟1X2；仅记录为盘口待复核", statusH: "淘汰赛，身体对抗和转换冲击是主要武器", statusA: "淘汰赛，中锋终结与高位压迫优势更明显", intentH: 1.02, intentA: 1.04, riskH: .96, riskA: .98, routeH: .99, routeA: 1.02, bracket: "32强淘汰赛。赛程顺序 Ivory Coast vs Norway 已用两个独立赛程源交叉核验；费城中立场，homeAdvantage 维持1.00。", path: "今日待赛：科特迪瓦–挪威。赛程顺序按公开赛程 Ivory Coast vs Norway 复核；未发现可复访完整同源1X2盘口，因此胜平负正式推荐保持“-”。", attackH: 1.14, defenseH: 1.03, attackA: 1.54, defenseA: .90, formH: 6, formA: 7 },
  { home: "法国", away: "瑞典", homeFlag: "🇫🇷", awayFlag: "🇸🇪", group: "32强 · 今日待赛", venue: "西雅图 · 17:00 ET", rankH: 2, rankA: 43, pointsH: "淘汰赛", pointsA: "淘汰赛", recordH: "晋级32强", recordA: "晋级32强", stage: "knockout", evidenceH: 18, evidenceA: 12, climateGoalPenalty: .04, refereePenaltyBoost: .01, redCardVolatility: .03, restDiff: 0, homeAdvantage: 1.00, goalCorrelation: .18, penaltyEdgeH: .04, penaltyEdgeA: 0, coachH: ["法国教练组", 10, 7, 2, 1], coachA: ["瑞典教练组", 10, 4, 3, 3], odds: null, wdlOpen: false, partialOdds: "公开赔率页仅出现法国强热门片段，非完整同源1X2", statusH: "淘汰赛，阵容厚度和攻防上限显著占优", statusA: "淘汰赛，预计收缩空间并依赖定位球/反击", intentH: 1.05, intentA: 1.01, riskH: .99, riskA: .94, routeH: 1.04, routeA: .98, bracket: "32强淘汰赛。赛程顺序 France vs Sweden 已用两个独立赛程源交叉核验；西雅图中立场，homeAdvantage 维持1.00。", path: "今日待赛：法国–瑞典。法国强度经贝叶斯收缩后仍明显领先，但淘汰赛低比分修正会保留瑞典低位防守导致的0:0/1:1尾部；完整同源1X2未核验前胜平负正式推荐保持“-”。", attackH: 1.86, defenseH: .74, attackA: .98, defenseA: 1.08, formH: 8, formA: 5 },
  { home: "墨西哥", away: "厄瓜多尔", homeFlag: "🇲🇽", awayFlag: "🇪🇨", group: "32强 · 今日待赛", venue: "墨西哥城 Azteca · 20:00 ET", rankH: 15, rankA: 30, pointsH: "淘汰赛", pointsA: "淘汰赛", recordH: "晋级32强", recordA: "晋级32强", stage: "knockout", evidenceH: 16, evidenceA: 14, climateGoalPenalty: .08, refereePenaltyBoost: 0, redCardVolatility: .04, restDiff: 0, homeAdvantage: 1.06, goalCorrelation: .21, penaltyEdgeH: .02, penaltyEdgeA: .01, coachH: ["墨西哥教练组", 10, 6, 2, 2], coachA: ["厄瓜多尔教练组", 10, 5, 2, 3], odds: null, wdlOpen: false, partialOdds: "公开页出现墨西哥晋级/让球赔率片段，但非完整90分钟同源1X2", statusH: "淘汰赛，东道主在 Azteca 作赛，高海拔和真实主场权益入模", statusA: "淘汰赛，身体强度与转换速度具备制造冷门能力", intentH: 1.04, intentA: 1.03, riskH: .97, riskA: .97, routeH: 1.02, routeA: 1.00, bracket: "32强淘汰赛。赛程顺序 Mexico vs Ecuador 已用两个独立赛程源交叉核验；比赛在墨西哥城 Azteca，东道主真实主场权益明确，homeAdvantage 设为1.06。", path: "今日待赛：墨西哥–厄瓜多尔。墨西哥是东道主且本场在 Azteca 作赛，因此允许加入温和主场/高海拔权重；完整同源1X2未核验前胜平负正式推荐保持“-”。", attackH: 1.38, defenseH: .92, attackA: 1.20, defenseA: .98, formH: 7, formA: 6 },
  { home: "英格兰", away: "刚果（金）", homeFlag: "🏴", awayFlag: "🇨🇩", group: "32强", venue: "后续待赛 · 公开赛程已列", rankH: 6, rankA: 56, pointsH: "淘汰赛", pointsA: "淘汰赛", recordH: "晋级32强", recordA: "晋级32强", stage: "knockout", evidenceH: 18, evidenceA: 10, climateGoalPenalty: .04, refereePenaltyBoost: 0, redCardVolatility: .03, restDiff: 0, homeAdvantage: 1.00, goalCorrelation: .18, penaltyEdgeH: .03, penaltyEdgeA: 0, coachH: ["英格兰教练组", 10, 7, 2, 1], coachA: ["刚果（金）教练组", 10, 3, 4, 3], odds: null, wdlOpen: false, statusH: "淘汰赛，阵容深度、定位球和控场能力占优", statusA: "淘汰赛，低位防守和身体对抗会压低节奏", intentH: 1.05, intentA: 1.00, riskH: .99, riskA: .94, routeH: 1.04, routeA: .98, bracket: "32强淘汰赛。按公开赛程写法 England vs DR Congo 加入；中立场不默认给列表第一队主场加成。", path: "英格兰–刚果（金）已加入后续待赛池。英格兰在阵容深度和定位球端优势明显，但淘汰赛低比分修正会保留刚果（金）拖入胶着局面的概率；盘口未核验前胜平负正式推荐保持“-”。", attackH: 1.76, defenseH: .78, attackA: .86, defenseA: 1.12, formH: 8, formA: 5 },
  { home: "德国", away: "巴拉圭", homeFlag: "🇩🇪", awayFlag: "🇵🇾", group: "32强 · 已完赛", venue: "波士顿 · 16:30 ET", rankH: 10, rankA: 48, pointsH: "淘汰赛", pointsA: "淘汰赛", recordH: "已出局", recordA: "晋级16强", stage: "knockout", evidenceH: 17, evidenceA: 12, climateGoalPenalty: .04, refereePenaltyBoost: .01, redCardVolatility: .03, restDiff: 0, homeAdvantage: 1.00, goalCorrelation: .17, penaltyEdgeH: .03, penaltyEdgeA: 0, coachH: ["德国教练组", 10, 6, 2, 2], coachA: ["巴拉圭教练组", 10, 4, 3, 3], odds: [1.35, 5.05, 9.06], openingOdds: [1.43, 4.70, 7.29], oddsSource: "中彩网百家指数平均欧赔快照", oddsCheckedAt: "2026-06-29 赛前快照", wdlOpen: true, result: { regulation: "1:1", penalties: "3:4", advance: "巴拉圭", status: "PEN", audit: "赛前市场过度集中于德国，实际90分钟平局；点球随机性需要上调。" }, statusH: "已完赛，1–1后点球出局", statusA: "已完赛，1–1后点球晋级", intentH: 1.05, intentA: 1.01, riskH: .99, riskA: .94, routeH: 1.04, routeA: .98, bracket: "已完赛校准：Germany 1–1 Paraguay，点球德国3–4巴拉圭。赛前赔率初赔1.43/4.70/7.29，最新1.35/5.05/9.06；市场强烈偏德国但未覆盖淘汰赛低比分拖入点球的尾部。", path: "赛果回灌：德国 1–1 巴拉圭，巴拉圭点球4–3晋级。本场用于上调淘汰赛90分钟平局权重，并收缩点球阶段强队/球星优势，避免热门队在模型里被过度保护。", attackH: 1.72, defenseH: .82, attackA: .96, defenseA: 1.06, formH: 7, formA: 6 },
  { home: "荷兰", away: "摩洛哥", homeFlag: "🇳🇱", awayFlag: "🇲🇦", group: "32强 · 已完赛", venue: "蒙特雷 · 21:00 ET", rankH: 7, rankA: 12, pointsH: "淘汰赛", pointsA: "淘汰赛", recordH: "已出局", recordA: "晋级16强", stage: "knockout", evidenceH: 16, evidenceA: 16, climateGoalPenalty: .05, refereePenaltyBoost: 0, redCardVolatility: .04, restDiff: 0, homeAdvantage: 1.00, goalCorrelation: .22, penaltyEdgeH: .01, penaltyEdgeA: .03, coachH: ["荷兰教练组", 10, 6, 2, 2], coachA: ["摩洛哥教练组", 10, 6, 3, 1], odds: [2.28, 3.10, 3.42], openingOdds: [2.00, 3.25, 3.70], oddsSource: "中彩网百家指数平均欧赔快照", oddsCheckedAt: "2026-06-29 赛前快照", wdlOpen: true, result: { regulation: "1:1", penalties: "2:3", advance: "摩洛哥", status: "PEN", audit: "90分钟平局方向命中；点球端摩洛哥晋级，市场后移方向有效。" }, statusH: "已完赛，1–1后点球出局", statusA: "已完赛，1–1后点球晋级", intentH: 1.03, intentA: 1.03, riskH: .97, riskA: .97, routeH: 1.01, routeA: 1.01, bracket: "已完赛校准：Netherlands 1–1 Morocco，点球荷兰2–3摩洛哥。赛前赔率初赔2.00/3.25/3.70，最新2.28/3.10/3.42，市场向摩洛哥方向移动；90分钟平局权重有效。", path: "赛果回灌：荷兰 1–1 摩洛哥，摩洛哥点球3–2晋级。本场验证了强强/接近局里1:1权重应继续保留；同时点球胜率不能被排名差过度拉开。", attackH: 1.48, defenseH: .84, attackA: 1.36, defenseA: .82, formH: 7, formA: 7 }
];

let selectedIndex = 1;
let simulationEpoch = 0;
const onlineCalibration = {
  goalScale: .996,
  eligibleFinals: 3,
  exactScoreJointProbability: 0,
  outcomeDirectionAccuracy: .67,
  status: "2026-06-30 matchday odds patrol"
};

const modelConfig = {
  priorMean: 1,
  priorVariance: .14,
  observationBaseVariance: .42,
  globalGoalMean: 1.5,
  defaultEvidenceMatches: 10,
  bivariateCorrelation: .12,
  lowScoreDrawBoost: .10,
  knockoutDrawBoost: .23,
  knockoutPenaltyStarRange: .06
};

const $ = id => document.getElementById(id);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const poisson = (goals, lambda) => Math.exp(-lambda) * Math.pow(lambda, goals) / factorial(goals);

function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6D2B79F5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(random) {
  const u = Math.max(random(), 1e-9);
  const v = random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function samplePoisson(lambda, random) {
  const limit = Math.exp(-lambda);
  let product = 1;
  let count = 0;
  do {
    count++;
    product *= random();
  } while (product > limit && count < 12);
  return count - 1;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function bayesianShrink(observed, evidenceMatches = modelConfig.defaultEvidenceMatches, quality = 1) {
  const effectiveEvidence = clamp(evidenceMatches * quality, 2, 30);
  const observationVariance = modelConfig.observationBaseVariance / effectiveEvidence;
  const priorWeight = observationVariance / (modelConfig.priorVariance + observationVariance);
  const observedWeight = modelConfig.priorVariance / (modelConfig.priorVariance + observationVariance);
  return observedWeight * observed + priorWeight * modelConfig.priorMean;
}

function rankQuality(rank) {
  return clamp(1.22 - rank / 160, .55, 1.18);
}

function eloLikeFactor(rank) {
  return clamp(1 + (50 - rank) * .0032, .82, 1.18);
}

function shrinkTeamParameters(match, homeForm, awayForm) {
  const evidenceH = match.evidenceH || modelConfig.defaultEvidenceMatches;
  const evidenceA = match.evidenceA || modelConfig.defaultEvidenceMatches;
  const formSignalH = 1 + (homeForm - 5.5) * .035;
  const formSignalA = 1 + (awayForm - 5.5) * .035;
  return {
    attackH: bayesianShrink(match.attackH * formSignalH, evidenceH, rankQuality(match.rankH)) * eloLikeFactor(match.rankH),
    defenseH: bayesianShrink(match.defenseH / formSignalH, evidenceH, rankQuality(match.rankH)) / eloLikeFactor(match.rankH),
    attackA: bayesianShrink(match.attackA * formSignalA, evidenceA, rankQuality(match.rankA)) * eloLikeFactor(match.rankA),
    defenseA: bayesianShrink(match.defenseA / formSignalA, evidenceA, rankQuality(match.rankA)) / eloLikeFactor(match.rankA)
  };
}

function contextualFactors(match) {
  const climateGoalPenalty = match.climateGoalPenalty ?? 0;
  const refereePenaltyBoost = match.refereePenaltyBoost ?? 0;
  const redCardVolatility = match.redCardVolatility ?? 0;
  const restDiff = match.restDiff ?? 0;
  const homeRest = restDiff <= -2 ? .96 : restDiff >= 2 ? 1.03 : 1;
  const awayRest = restDiff >= 2 ? .96 : restDiff <= -2 ? 1.03 : 1;
  return {
    totalGoalShift: -climateGoalPenalty + refereePenaltyBoost,
    homeRest,
    awayRest,
    volatility: 1 + redCardVolatility
  };
}

function sampleBivariatePoisson(homeLambda, awayLambda, correlation, random) {
  const commonLambda = clamp(correlation, 0, .35) * Math.min(homeLambda, awayLambda);
  const sharedGoals = samplePoisson(commonLambda, random);
  const homeGoals = samplePoisson(Math.max(.01, homeLambda - commonLambda), random) + sharedGoals;
  const awayGoals = samplePoisson(Math.max(.01, awayLambda - commonLambda), random) + sharedGoals;
  return { homeGoals, awayGoals, commonLambda };
}

function dixonColesTau(homeGoals, awayGoals, homeLambda, awayLambda, rho) {
  if (homeGoals === 0 && awayGoals === 0) return 1 - homeLambda * awayLambda * rho;
  if (homeGoals === 0 && awayGoals === 1) return 1 + homeLambda * rho;
  if (homeGoals === 1 && awayGoals === 0) return 1 + awayLambda * rho;
  if (homeGoals === 1 && awayGoals === 1) return 1 - rho;
  return 1;
}

function lowScoreDrawWeight(homeGoals, awayGoals, homeLambda, awayLambda, match, rho) {
  const baseTau = dixonColesTau(homeGoals, awayGoals, homeLambda, awayLambda, rho);
  const isTenseGroupGame = match.stage !== "knockout" && (
    match.statusH.includes("打平") ||
    match.statusA.includes("打平") ||
    match.statusH.includes("拿分") ||
    match.statusA.includes("拿分") ||
    match.statusH.includes("锁定") ||
    match.statusA.includes("锁定")
  );
  const isKnockout = match.stage === "knockout";
  const drawBoost = (isTenseGroupGame ? modelConfig.lowScoreDrawBoost : 0) + (isKnockout ? modelConfig.knockoutDrawBoost : 0);
  if (homeGoals === 0 && awayGoals === 0) return baseTau * (1 + drawBoost * 1.25);
  if (homeGoals === 1 && awayGoals === 1) return baseTau * (1 + drawBoost);
  return baseTau;
}

function monteCarlo(match, homeForm, awayForm, tempo, strategyOn, runs = 50000, seed = 20260624, rho = -.08, crowd = null) {
  const baseline = calculate(match, homeForm, awayForm, tempo, strategyOn);
  const random = seededRandom(seed);
  const scores = new Map();
  const totalGoals = new Map();
  let homeWins = 0, draws = 0, awayWins = 0, totalWeight = 0;
  let homeAdvances = 0, awayAdvances = 0;
  let totalHomeGoals = 0, totalAwayGoals = 0;

  for (let i = 0; i < runs; i++) {
    const sharedMatchShock = Math.exp(.18 * baseline.volatility * gaussian(random) - .5 * (.18 * baseline.volatility) ** 2);
    let homeLambda = baseline.homeXg * sharedMatchShock * Math.exp(.12 * gaussian(random) - .5 * .12 ** 2);
    let awayLambda = baseline.awayXg * sharedMatchShock * Math.exp(.12 * gaussian(random) - .5 * .12 ** 2);

    if (strategyOn && match.statusH.includes("必须赢") && match.statusA.includes("必须赢") && random() < .38) {
      homeLambda *= 1.18;
      awayLambda *= 1.18;
    } else if (strategyOn && match.statusH.includes("必须赢") && random() < .32) {
      homeLambda *= 1.18;
      awayLambda *= 1.09;
    } else if (strategyOn && match.statusA.includes("必须赢") && random() < .32) {
      awayLambda *= 1.18;
      homeLambda *= 1.09;
    }

    if (strategyOn && match.statusH.includes("锁定") && random() < .28) {
      homeLambda *= .84;
      awayLambda *= 1.08;
    }
    if (strategyOn && match.statusA.includes("锁定") && random() < .28) {
      awayLambda *= .84;
      homeLambda *= 1.08;
    }

    if (match.stage === "knockout" && random() < .34) {
      homeLambda *= .92;
      awayLambda *= .92;
    }

    const correlation = match.goalCorrelation ?? (
      modelConfig.bivariateCorrelation +
      (match.stage === "knockout" ? .04 : 0) +
      (Math.abs(baseline.homeXg - baseline.awayXg) < .35 ? .03 : 0)
    );
    const sample = sampleBivariatePoisson(Math.min(homeLambda, 4.8), Math.min(awayLambda, 4.8), correlation, random);
    const homeGoals = sample.homeGoals;
    const awayGoals = sample.awayGoals;
    const scoreKey = `${homeGoals}:${awayGoals}`;
    const crowdDiscount = crowd?.enabled && scoreKey === crowd.score ? 1 - crowd.penalty : 1;
    const weight = Math.max(.05, lowScoreDrawWeight(homeGoals, awayGoals, homeLambda, awayLambda, match, rho) * crowdDiscount);
    totalWeight += weight;
    totalHomeGoals += homeGoals * weight;
    totalAwayGoals += awayGoals * weight;
    if (homeGoals > awayGoals) {
      homeWins += weight;
      homeAdvances += weight;
    } else if (homeGoals === awayGoals) {
      draws += weight;
      if (match.stage === "knockout") {
        const starEdge = clamp(((50 - match.rankH) - (50 - match.rankA)) / 220, -modelConfig.knockoutPenaltyStarRange, modelConfig.knockoutPenaltyStarRange);
        const homePenaltyWin = clamp(.5 + starEdge + (match.penaltyEdgeH || 0) - (match.penaltyEdgeA || 0), .38, .62);
        if (random() < homePenaltyWin) homeAdvances += weight;
        else awayAdvances += weight;
      } else {
        homeAdvances += weight * .5;
        awayAdvances += weight * .5;
      }
    } else {
      awayWins += weight;
      awayAdvances += weight;
    }
    scores.set(scoreKey, (scores.get(scoreKey) || 0) + weight);
    const totalKey = homeGoals + awayGoals;
    totalGoals.set(totalKey, (totalGoals.get(totalKey) || 0) + weight);
  }

  const topScores = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([score, count]) => ({ score, probability: count / totalWeight }));
  const [homeScore, awayScore] = topScores[0].score.split(":").map(Number);
  const topTotals = [...totalGoals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([goals, count]) => ({ goals, probability: count / totalWeight }));
  const probabilities = [homeWins / totalWeight, draws / totalWeight, awayWins / totalWeight];
  const sorted = [...probabilities].sort((a, b) => b - a);
  return {
    homeWin: probabilities[0],
    draw: probabilities[1],
    awayWin: probabilities[2],
    homeXg: totalHomeGoals / totalWeight,
    awayXg: totalAwayGoals / totalWeight,
    regulationHomeXg: baseline.homeXg,
    regulationAwayXg: baseline.awayXg,
    homeAdvance: homeAdvances / totalWeight,
    awayAdvance: awayAdvances / totalWeight,
    best: { h: homeScore, a: awayScore },
    topScores,
    topTotals,
    confidence: Math.min(88, Math.round(48 + (sorted[0] - sorted[1]) * 60)),
    runs,
    rho,
    scoreProbabilities: Object.fromEntries([...scores.entries()].map(([score, count]) => [score, count / totalWeight]))
  };
}

function marketAnalysis(probabilities, odds) {
  const raw = odds.map(odd => 1 / odd);
  const overround = raw.reduce((sum, value) => sum + value, 0);
  const market = raw.map(value => value / overround);
  const edges = probabilities.map((value, index) => value - market[index]);
  const kelly = probabilities.map((value, index) => {
    const b = odds[index] - 1;
    return Math.max(0, (value * odds[index] - 1) / b);
  });
  return { market, edges, kelly, overround: overround - 1 };
}

function recommendWdl(match, result) {
  if (match.wdlOpen === false) return { label: "-", probability: null, note: "胜平负未开" };
  const options = [
    { label: "主胜", probability: result.homeWin },
    { label: "平局", probability: result.draw },
    { label: "客胜", probability: result.awayWin }
  ].sort((a, b) => b.probability - a.probability);
  const top = options[0];
  const second = options[1];
  return {
    label: top.label,
    probability: top.probability,
    note: top.probability - second.probability < .06 ? "分歧较小，谨慎" : "模型最高概率"
  };
}

function handicapText(line) {
  if (line === 0) return "0";
  return `${line > 0 ? "+" : ""}${line}`;
}

function recommendHandicap(match, result) {
  const lines = [-2, -1.5, -1, -.5, .5, 1, 1.5, 2];
  const candidates = [];
  for (const side of ["home", "away"]) {
    for (const line of lines) {
      let cover = 0;
      for (const [score, probability] of Object.entries(result.scoreProbabilities)) {
        const [homeGoals, awayGoals] = score.split(":").map(Number);
        const margin = side === "home" ? homeGoals - awayGoals : awayGoals - homeGoals;
        if (margin + line > 0) cover += probability;
      }
      const useful = cover >= .54 && cover <= .82;
      const balancePenalty = Math.abs(cover - .64);
      const linePenalty = Math.abs(line) >= 2 ? .04 : Math.abs(line) >= 1.5 ? .02 : 0;
      candidates.push({
        side,
        line,
        cover,
        score: (useful ? .08 : 0) + cover - balancePenalty - linePenalty
      });
    }
  }
  candidates.sort((a, b) => b.score - a.score);
  const pick = candidates[0];
  const team = pick.side === "home" ? match.home : match.away;
  return {
    label: `${team} ${handicapText(pick.line)}`,
    probability: pick.cover,
    note: pick.cover >= .70 ? "保护垫较厚" : "模型覆盖率最高"
  };
}

function coachMetrics(coach) {
  const [name, matches, wins, draws, losses, verified = false] = coach;
  const raw = wins / matches;
  const adjusted = (wins + 4) / (matches + 8);
  const factor = verified ? 1 + (adjusted - .5) * .18 : 1;
  return { name, matches, wins, draws, losses, raw, adjusted, factor, verified };
}

function calculate(match, homeForm = match.formH, awayForm = match.formA, tempo = 5, strategyOn = true) {
  const shrunk = shrinkTeamParameters(match, homeForm, awayForm);
  const context = contextualFactors(match);
  const formFactorH = 1 + (homeForm - 5.5) * .018;
  const formFactorA = 1 + (awayForm - 5.5) * .018;
  const tempoFactor = .82 + tempo * .036;
  const rankingEdge = Math.max(-.12, Math.min(.12, (match.rankA - match.rankH) * .002));
  const strategyH = strategyOn ? match.intentH : 1;
  const strategyA = strategyOn ? match.intentA : 1;
  const riskH = strategyOn ? match.riskH : 1;
  const riskA = strategyOn ? match.riskA : 1;
  const coachH = coachMetrics(match.coachH).factor;
  const coachA = coachMetrics(match.coachA).factor;
  const routeH = strategyOn ? (match.routeH || 1) : 1;
  const routeA = strategyOn ? (match.routeA || 1) : 1;
  const homeAdvantage = match.homeAdvantage ?? 1.00;
  let homeXg = Math.max(.25, Math.min(3.5, shrunk.attackH * shrunk.defenseA * formFactorH * tempoFactor * homeAdvantage * (1 + rankingEdge) * strategyH * riskA * coachH * routeH * context.homeRest * onlineCalibration.goalScale));
  let awayXg = Math.max(.20, Math.min(3.2, shrunk.attackA * shrunk.defenseH * formFactorA * tempoFactor * (1 - rankingEdge) * strategyA * riskH * coachA * routeA * context.awayRest * onlineCalibration.goalScale));

  if (context.totalGoalShift !== 0) {
    const total = homeXg + awayXg;
    const adjustedTotal = Math.max(.7, total + context.totalGoalShift);
    homeXg *= adjustedTotal / total;
    awayXg *= adjustedTotal / total;
  }

  let homeWin = 0, draw = 0, awayWin = 0;
  let best = { h: 0, a: 0, p: 0 };
  for (let h = 0; h <= 7; h++) {
    for (let a = 0; a <= 7; a++) {
      const commonLambda = clamp((match.goalCorrelation ?? modelConfig.bivariateCorrelation) * Math.min(homeXg, awayXg), 0, Math.min(homeXg, awayXg) * .35);
      let p = 0;
      for (let k = 0; k <= Math.min(h, a); k++) {
        p += poisson(h - k, homeXg - commonLambda) * poisson(a - k, awayXg - commonLambda) * poisson(k, commonLambda);
      }
      p *= lowScoreDrawWeight(h, a, homeXg, awayXg, match, -.08);
      if (h > a) homeWin += p;
      else if (h === a) draw += p;
      else awayWin += p;
      if (p > best.p) best = { h, a, p };
    }
  }

  const total = homeWin + draw + awayWin;
  homeWin /= total; draw /= total; awayWin /= total;
  const sorted = [homeWin, draw, awayWin].sort((a, b) => b - a);
  const confidence = Math.min(88, Math.round(48 + (sorted[0] - sorted[1]) * 60));
  return { homeXg, awayXg, homeWin, draw, awayWin, best, confidence, volatility: context.volatility, shrunk };
}

function reasonText(match, result, homeForm, awayForm, tempo) {
  const favorite = result.homeWin > result.awayWin ? match.home : match.away;
  const edge = Math.abs(result.homeXg - result.awayXg);
  const state = edge > .8 ? "优势明显" : edge > .3 ? "略占上风" : "实力非常接近";
  const rhythm = tempo >= 7 ? "比赛节奏偏开放，双方得分机会都会增加" :
    tempo <= 3 ? "比赛可能谨慎展开，低比分权重更高" : "节奏预计适中";
  const formNote = Math.abs(homeForm - awayForm) >= 3 ? "，近期状态差距也放大了结果倾向" : "";
  const contextNote = ` 赛制背景：${match.statusH}；${match.statusA}。${match.path} 淘汰赛路径：${match.bracket}`;
  const layerNote = match.stage === "knockout"
    ? `本场按淘汰赛分层，90分钟平局后会嵌套点球子模拟；晋级概率为 ${match.home} ${(result.homeAdvance * 100).toFixed(1)}%，${match.away} ${(result.awayAdvance * 100).toFixed(1)}%。`
    : `本场按小组赛分层，积分、净胜球需求和可接受平局状态会改变节奏。`;
  const modelNote = `已加入双变量泊松相关性、贝叶斯收缩和气候/休息协变量；裁判、伤停和社媒样本缺失时不入模。`;
  const scoreNote = `经过 ${result.runs.toLocaleString("zh-CN")} 次赛况抽样，最高频比分为 ${result.best.h}:${result.best.a}。`;
  const actualNote = match.result
    ? `已完赛校准：${match.home} ${match.result.regulation.replace(":", "–")} ${match.away}${match.result.penalties ? `，点球 ${match.result.penalties.replace(":", "–")}，${match.result.advance}晋级` : ""}。${match.result.audit} 本卡片保留赛前模型分布用于回看。`
    : "";
  return `${actualNote}${favorite}在模型中${state}，${rhythm}${formNote}。${contextNote} ${layerNote}${modelNote}${scoreNote}`;
}

function renderCards() {
  const stageOrder = match => {
    if (match.group.includes("今日待赛")) return 0;
    if (match.result) return 1;
    return 2;
  };
  const timeOrder = match => {
    const text = match.venue || "";
    if (text.includes("14:00")) return 14;
    if (text.includes("17:00")) return 17;
    if (text.includes("20:00")) return 20;
    if (text.includes("13:00")) return 13;
    if (text.includes("16:30")) return 16.5;
    if (text.includes("21:00")) return 21;
    return 99;
  };
  const cardEntries = matches
    .map((match, index) => ({ match, index }))
    .sort((a, b) => stageOrder(a.match) - stageOrder(b.match) || timeOrder(a.match) - timeOrder(b.match) || a.index - b.index);
  $("matchGrid").innerHTML = cardEntries.map(({ match, index }) => {
    const seed = 20260624 + index * 997 + match.formH * 31 + match.formA * 17 + 5;
    const r = monteCarlo(match, match.formH, match.formA, 5, true, 50000, seed);
    const resultScore = match.result
      ? `${match.result.regulation}${match.result.penalties ? ` 点${match.result.penalties}` : ""}`
      : `${r.best.h}:${r.best.a}`;
    const resultLabel = match.result ? "已完赛校准" : "蒙特卡洛首选";
    return `
      <button class="match-card ${index === selectedIndex ? "active" : ""}" data-index="${index}">
        <div class="match-meta"><span>${match.group} · ${match.venue}</span><span>M${index + 1}</span></div>
        <div class="fixture-teams">
          <div class="fixture-team"><span>${match.homeFlag} ${match.home}</span><small>#${match.rankH} · ${match.recordH || `${match.pointsH}分`}</small></div>
          <div class="fixture-team"><span>${match.awayFlag} ${match.away}</span><small>#${match.rankA} · ${match.recordA || `${match.pointsA}分`}</small></div>
        </div>
        <div class="card-prediction"><small>${resultLabel}</small><span class="mini-score">${resultScore}</span></div>
      </button>
    `;
  }).join("");

  document.querySelectorAll(".match-card").forEach(card => {
    card.addEventListener("click", () => selectMatch(Number(card.dataset.index)));
  });
}

function selectMatch(index) {
  selectedIndex = index;
  const match = matches[index];
  $("homeFlag").textContent = match.homeFlag;
  $("awayFlag").textContent = match.awayFlag;
  $("homeName").textContent = match.home;
  $("awayName").textContent = match.away;
  $("homeForm").value = match.formH;
  $("awayForm").value = match.formA;
  $("tempo").value = 5;
  setOdds(match);
  updateContext(match);
  syncOutputs();
  renderCards();
  updatePrediction();
  $("lab").scrollIntoView({ behavior: "smooth", block: "center" });
}

function syncOutputs() {
  $("homeFormOutput").textContent = $("homeForm").value;
  $("awayFormOutput").textContent = $("awayForm").value;
  $("tempoOutput").textContent = $("tempo").value;
}

function updatePrediction() {
  const match = matches[selectedIndex];
  const homeForm = Number($("homeForm").value);
  const awayForm = Number($("awayForm").value);
  const tempo = Number($("tempo").value);
  const strategyOn = true;
  const rho = Number($("rho").value) / 100;
  const odds = ["oddsHome", "oddsDraw", "oddsAway"].map(id => Math.max(1.01, Number($(id).value) || 2));
  const crowd = {
    enabled: $("crowdMode").checked,
    score: `${Math.max(0, Number($("crowdHome").value) || 0)}:${Math.max(0, Number($("crowdAway").value) || 0)}`,
    penalty: Number($("crowdPenalty").value) / 100
  };
  const seed = 20260624 + selectedIndex * 997 + simulationEpoch * 7919 + homeForm * 31 + awayForm * 17 + tempo;
  const r = monteCarlo(match, homeForm, awayForm, tempo, strategyOn, 50000, seed, rho, crowd);
  const market = match.wdlOpen === false || !match.odds ? null : marketAnalysis([r.homeWin, r.draw, r.awayWin], odds);
  const wdlPick = recommendWdl(match, r);
  const handicapPick = recommendHandicap(match, r);

  $("resultCard").animate(
    [{ transform: "translateY(5px)", opacity: .75 }, { transform: "translateY(0)", opacity: 1 }],
    { duration: 320, easing: "ease-out" }
  );
  const displayScore = match.result ? match.result.regulation.split(":").map(Number) : [r.best.h, r.best.a];
  $("homeScore").textContent = displayScore[0];
  $("awayScore").textContent = displayScore[1];
  $("predictionType").textContent = match.result ? "已完赛校准" : "模型综合预测";
  $("homeWin").textContent = `${Math.round(r.homeWin * 100)}%`;
  $("draw").textContent = `${Math.round(r.draw * 100)}%`;
  $("awayWin").textContent = `${Math.round(r.awayWin * 100)}%`;
  $("wdlPick").textContent = wdlPick.label;
  $("wdlPickNote").textContent = wdlPick.probability === null
    ? wdlPick.note
    : `${wdlPick.note} · ${(wdlPick.probability * 100).toFixed(1)}%`;
  $("handicapPick").textContent = handicapPick.label;
  $("handicapPickNote").textContent = `${handicapPick.note} · ${(handicapPick.probability * 100).toFixed(1)}%`;
  $("confidence").textContent = match.result
    ? `${match.result.status === "PEN" ? `点球 ${match.result.penalties} · ` : ""}${match.result.advance}晋级`
    : `置信度 ${r.confidence}%`;
  $("reason").textContent = reasonText(match, r, homeForm, awayForm, tempo);
  $("xgText").textContent = `${r.homeXg.toFixed(2)} — ${r.awayXg.toFixed(2)}`;
  $("simulationCount").textContent = `${r.runs.toLocaleString("zh-CN")} 次模拟`;
  $("rhoOutput").textContent = rho.toFixed(2);
  $("crowdPenaltyOutput").textContent = `${Math.round(crowd.penalty * 100)}%`;
  $("topScores").innerHTML = r.topScores.map((item, index) =>
    `<span><i>${index + 1}</i>${item.score}<small>${(item.probability * 100).toFixed(1)}%</small></span>`
  ).join("");
  $("topTotals").innerHTML = r.topTotals.map((item, index) =>
    `<span><i>${index + 1}</i><strong>${item.goals} 球</strong><small>${(item.probability * 100).toFixed(1)}%</small></span>`
  ).join("");
  const totalXg = r.homeXg + r.awayXg;
  $("homeXgBar").style.width = `${r.homeXg / totalXg * 100}%`;
  $("awayXgBar").style.width = `${r.awayXg / totalXg * 100}%`;
  renderMarket(market, [r.homeWin, r.draw, r.awayWin], match);
}

function setOdds(match) {
  const odds = match.odds || [2, 3.2, 2];
  ["oddsHome", "oddsDraw", "oddsAway"].forEach((id, index) => {
    $(id).value = odds[index].toFixed(2);
  });
}

function renderMarket(analysis, model, match) {
  const labels = ["主胜", "平局", "客胜"];
  if (!analysis) {
    $("marketMargin").textContent = "盘口未核验";
    $("marketRows").innerHTML = labels.map((label, index) => `<div>
      <strong>${label}</strong>
      <span>${(model[index] * 100).toFixed(1)}%</span>
      <span>—</span>
      <span>—</span>
      <span>—</span>
    </div>`).join("");
    return;
  }
  $("marketMargin").textContent = `市场水位 ${(analysis.overround * 100).toFixed(1)}%`;
  $("marketRows").innerHTML = labels.map((label, index) => {
    const edge = analysis.edges[index] * 100;
    const edgeClass = edge > 0 ? "positive" : edge < 0 ? "negative" : "";
    return `<div>
      <strong>${label}</strong>
      <span>${(model[index] * 100).toFixed(1)}%</span>
      <span>${(analysis.market[index] * 100).toFixed(1)}%</span>
      <span class="${edgeClass}">${edge >= 0 ? "+" : ""}${edge.toFixed(1)}pp</span>
      <span>${(analysis.kelly[index] * 100).toFixed(1)}%</span>
    </div>`;
  }).join("");
}

function updateContext(match) {
  $("homeRank").textContent = `世界 #${match.rankH}`;
  $("awayRank").textContent = `世界 #${match.rankA}`;
  $("homeSituation").textContent = `${match.recordH || `${match.pointsH}分`} · ${match.statusH}`;
  $("awaySituation").textContent = `${match.recordA || `${match.pointsA}分`} · ${match.statusA}`;
  $("pathText").textContent = match.path;
  $("bracketText").textContent = match.bracket;
  const homeCoach = coachMetrics(match.coachH);
  const awayCoach = coachMetrics(match.coachA);
  $("homeCoach").textContent = homeCoach.name;
  $("awayCoach").textContent = awayCoach.name;
  $("homeCoachRecord").textContent = `${homeCoach.wins}胜 ${homeCoach.draws}平 ${homeCoach.losses}负`;
  $("awayCoachRecord").textContent = `${awayCoach.wins}胜 ${awayCoach.draws}平 ${awayCoach.losses}负`;
  $("homeCoachRate").textContent = homeCoach.verified
    ? `胜率 ${(homeCoach.raw * 100).toFixed(1)}% · 收缩后 ${(homeCoach.adjusted * 100).toFixed(1)}%`
    : `首版整理值 · 待逐场复核，暂不入模`;
  $("awayCoachRate").textContent = awayCoach.verified
    ? `胜率 ${(awayCoach.raw * 100).toFixed(1)}% · 收缩后 ${(awayCoach.adjusted * 100).toFixed(1)}%`
    : `首版整理值 · 待逐场复核，暂不入模`;
}

["homeForm", "awayForm", "tempo"].forEach(id => {
  $(id).addEventListener("input", syncOutputs);
});
["rho", "oddsHome", "oddsDraw", "oddsAway", "crowdHome", "crowdAway", "crowdPenalty"].forEach(id => {
  $(id).addEventListener("input", updatePrediction);
});
$("crowdMode").addEventListener("change", updatePrediction);
$("predictButton").addEventListener("click", () => {
  simulationEpoch++;
  updatePrediction();
  $("simulationDoneDialog").showModal();
});
$("aboutButton").addEventListener("click", () => $("aboutDialog").showModal());
$("closeDialog").addEventListener("click", () => $("aboutDialog").close());
$("aboutDialog").addEventListener("click", event => {
  if (event.target === $("aboutDialog")) $("aboutDialog").close();
});
$("simulationDoneButton").addEventListener("click", () => $("simulationDoneDialog").close());
$("simulationDoneDialog").addEventListener("click", event => {
  if (event.target === $("simulationDoneDialog")) $("simulationDoneDialog").close();
});

const initialMatch = matches[selectedIndex];
$("homeFlag").textContent = initialMatch.homeFlag;
$("awayFlag").textContent = initialMatch.awayFlag;
$("homeName").textContent = initialMatch.home;
$("awayName").textContent = initialMatch.away;
$("homeForm").value = initialMatch.formH;
$("awayForm").value = initialMatch.formA;
setOdds(initialMatch);
updateContext(initialMatch);
syncOutputs();
renderCards();
updatePrediction();
