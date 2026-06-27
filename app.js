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
  { home: "巴拿马", away: "英格兰", homeFlag: "🇵🇦", awayFlag: "🏴", group: "L组", venue: "多伦多 · 小组收官战", rankH: 31, rankA: 4, pointsH: 0, pointsA: 4, stage: "group", evidenceH: 8, evidenceA: 14, climateGoalPenalty: 0, refereePenaltyBoost: .03, restDiff: 0, coachH: ["托马斯·克里斯蒂安森", 2, 0, 0, 2], coachA: ["托马斯·图赫尔", 2, 1, 1, 0], odds: [10.50, 5.40, 1.28], statusH: "已基本出局，为荣誉而战", statusA: "赢球锁定头名", intentH: .92, intentA: 1.08, riskH: 1.05, riskA: .96, routeH: .98, routeA: 1.10, bracket: "L1 对阵第三名球队，L2 则会碰 K2。英格兰若稳住小组第一，16强首轮压力明显低于第二名路径。", path: "英格兰积分优势明显，但仍需要赢球保证头名；巴拿马缺少出线主动权，若早丢球容易被迫拉开阵型。", attackH: .72, defenseH: 1.32, attackA: 1.74, defenseA: .84, formH: 3, formA: 7 },
  { home: "克罗地亚", away: "加纳", homeFlag: "🇭🇷", awayFlag: "🇬🇭", group: "L组", venue: "费城 · 二三名卡位战", rankH: 11, rankA: 73, pointsH: 3, pointsA: 4, stage: "group", evidenceH: 14, evidenceA: 9, climateGoalPenalty: .02, refereePenaltyBoost: .02, restDiff: 0, coachH: ["兹拉特科·达利奇", 2, 1, 0, 1], coachA: ["奥托·阿多", 2, 1, 1, 0], odds: [1.82, 3.55, 4.40], statusH: "需要赢球争前二", statusA: "打平大概率晋级", intentH: 1.13, intentA: .98, riskH: 1.08, riskA: .94, routeH: 1.06, routeA: 1.02, bracket: "L2 将对阵 K2，第三名若晋级则可能被送入A/G/I/J/K头名线路。克罗地亚更需要主动拿三分，加纳可以先控风险。", path: "克罗地亚中场控制力更强，必须把节奏抬起来；加纳的目标首先是不被早早打穿，反击质量决定冷门空间。", attackH: 1.42, defenseH: .92, attackA: 1.02, defenseA: 1.12, formH: 5, formA: 7 },
  { home: "阿尔及利亚", away: "奥地利", homeFlag: "🇩🇿", awayFlag: "🇦🇹", group: "J组", venue: "堪萨斯城 · 出线卡位战", rankH: 37, rankA: 22, pointsH: 3, pointsA: 3, stage: "group", evidenceH: 10, evidenceA: 13, climateGoalPenalty: .05, refereePenaltyBoost: .01, restDiff: 0, goalCorrelation: .16, coachH: ["弗拉基米尔·佩特科维奇", 2, 1, 0, 1], coachA: ["拉尔夫·朗尼克", 2, 1, 0, 1], odds: [3.05, 3.20, 2.35], statusH: "拿分有望晋级，赢球更稳", statusA: "拿分有望晋级，争第二名", intentH: 1.04, intentA: 1.06, riskH: .99, riskA: 1.03, routeH: 1.00, routeA: 1.02, bracket: "J2 将对阵 H1 西班牙，J3 若晋级可能进入其他头名线路。两队都知道输球风险极高，因此前60分钟更可能谨慎。", path: "这是典型末轮卡位局：阿尔及利亚身体对抗强，奥地利压迫体系更成熟；如果另一场阿根廷领先，双方对平局的接受度会上升。", attackH: 1.12, defenseH: 1.04, attackA: 1.30, defenseA: .96, formH: 5, formA: 6 },
  { home: "约旦", away: "阿根廷", homeFlag: "🇯🇴", awayFlag: "🇦🇷", group: "J组", venue: "达拉斯 · 头名已定局", rankH: 64, rankA: 3, pointsH: 0, pointsA: 6, stage: "group", evidenceH: 8, evidenceA: 16, climateGoalPenalty: .10, refereePenaltyBoost: .02, restDiff: 0, coachH: ["贾迈勒·塞拉米", 2, 0, 0, 2], coachA: ["利昂内尔·斯卡洛尼", 2, 2, 0, 0], odds: [13.50, 6.60, 1.20], statusH: "已基本出局，为首分而战", statusA: "已锁定小组第一，可能轮换", intentH: .94, intentA: .88, riskH: 1.07, riskA: .96, routeH: .98, routeA: .92, bracket: "阿根廷已锁定 J1，16强将对阵 H2 佛得角。路径清晰后，轮换和保护主力会比追大比分更重要。", path: "阿根廷实力碾压，但战意不是无限拉满；约旦若能守住前30分钟，比赛会更接近低速控球局。", attackH: .64, defenseH: 1.42, attackA: 1.86, defenseA: .72, formH: 3, formA: 9 },
  { home: "哥伦比亚", away: "葡萄牙", homeFlag: "🇨🇴", awayFlag: "🇵🇹", group: "K组", venue: "迈阿密 · 小组第一争夺", rankH: 13, rankA: 6, pointsH: 6, pointsA: 4, stage: "group", evidenceH: 14, evidenceA: 15, climateGoalPenalty: .12, refereePenaltyBoost: .03, restDiff: 0, goalCorrelation: .17, coachH: ["内斯托尔·洛伦索", 2, 2, 0, 0], coachA: ["罗伯托·马丁内斯", 2, 1, 1, 0], odds: [3.15, 3.35, 2.22], statusH: "打平锁定小组第一", statusA: "必须赢球才能反超第一", intentH: .98, intentA: 1.12, riskH: .94, riskA: 1.08, routeH: 1.06, routeA: 1.08, bracket: "K1 对阵第三名球队，K2 将与 L2 交手。葡萄牙若只拿第二，首轮难度可能高于头名路径，因此仍有争胜动机。", path: "哥伦比亚可以接受平局，会更重视中场保护；葡萄牙需要主动，但如果久攻不下也会避免把第二名资格置于风险。", attackH: 1.36, defenseH: .88, attackA: 1.62, defenseA: .82, formH: 8, formA: 7 },
  { home: "民主刚果", away: "乌兹别克斯坦", homeFlag: "🇨🇩", awayFlag: "🇺🇿", group: "K组", venue: "亚特兰大 · 第三名生死战", rankH: 60, rankA: 50, pointsH: 1, pointsA: 0, stage: "group", evidenceH: 8, evidenceA: 8, climateGoalPenalty: .07, refereePenaltyBoost: .02, redCardVolatility: .04, restDiff: 0, coachH: ["塞巴斯蒂安·德萨布尔", 2, 0, 1, 1], coachA: ["斯雷奇科·卡塔内茨", 2, 0, 0, 2], odds: [2.18, 3.20, 3.35], statusH: "必须赢球争第三名", statusA: "必须赢球才保留希望", intentH: 1.15, intentA: 1.15, riskH: 1.12, riskA: 1.16, routeH: 1.02, routeA: 1.00, bracket: "K组第三若晋级，多半会落入强头名线路。净胜球和第三名横向比较都重要，因此后段可能开放。", path: "民主刚果身体冲击更强，乌兹别克斯坦组织更细；两队都不能只守平，最后半小时的进球波动会明显增加。", attackH: 1.12, defenseH: 1.04, attackA: .98, defenseA: 1.08, formH: 5, formA: 3 }
];

let selectedIndex = 0;
let simulationEpoch = 0;
const onlineCalibration = {
  goalScale: 1.018,
  eligibleFinals: 6,
  exactScoreJointProbability: 0.000000004,
  outcomeDirectionAccuracy: 0.5,
  status: "2026-06-26 recalibrated"
};

const modelConfig = {
  priorMean: 1,
  priorVariance: .14,
  observationBaseVariance: .42,
  globalGoalMean: 1.5,
  defaultEvidenceMatches: 10,
  bivariateCorrelation: .12,
  lowScoreDrawBoost: .10,
  knockoutPenaltyStarRange: .08
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
  const drawBoost = (isTenseGroupGame ? modelConfig.lowScoreDrawBoost : 0) + (isKnockout ? .18 : 0);
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
  const homeAdvantage = 1.08;
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

function reasonText(match, result, homeForm, awayForm, tempo, strategyOn) {
  const favorite = result.homeWin > result.awayWin ? match.home : match.away;
  const edge = Math.abs(result.homeXg - result.awayXg);
  const state = edge > .8 ? "优势明显" : edge > .3 ? "略占上风" : "实力非常接近";
  const rhythm = tempo >= 7 ? "比赛节奏偏开放，双方得分机会都会增加" :
    tempo <= 3 ? "比赛可能谨慎展开，低比分权重更高" : "节奏预计适中";
  const formNote = Math.abs(homeForm - awayForm) >= 3 ? "，近期状态差距也放大了结果倾向" : "";
  const strategyNote = strategyOn ? ` 战意层判断：${match.statusH}；${match.statusA}。${match.path} 淘汰赛路径：${match.bracket}` : "";
  const layerNote = match.stage === "knockout"
    ? `本场按淘汰赛分层，90分钟平局后会嵌套点球子模拟；晋级概率为 ${match.home} ${(result.homeAdvance * 100).toFixed(1)}%，${match.away} ${(result.awayAdvance * 100).toFixed(1)}%。`
    : `本场按小组赛分层，出线压力、净胜球需求和可接受平局状态会改变节奏。`;
  const modelNote = `已加入双变量泊松相关性、贝叶斯收缩和气候/休息/裁判协变量。`;
  const scoreNote = `经过 ${result.runs.toLocaleString("zh-CN")} 次赛况抽样，最高频比分为 ${result.best.h}:${result.best.a}。`;
  return `${favorite}在模型中${state}，${rhythm}${formNote}。${strategyNote} ${layerNote}${modelNote}${scoreNote}`;
}

function renderCards() {
  $("matchGrid").innerHTML = matches.map((match, index) => {
    const seed = 20260624 + index * 997 + match.formH * 31 + match.formA * 17 + 5;
    const r = monteCarlo(match, match.formH, match.formA, 5, true, 50000, seed);
    return `
      <button class="match-card ${index === selectedIndex ? "active" : ""}" data-index="${index}">
        <div class="match-meta"><span>${match.group} · ${match.venue}</span><span>M${index + 1}</span></div>
        <div class="fixture-teams">
          <div class="fixture-team"><span>${match.homeFlag} ${match.home}</span><small>#${match.rankH} · ${match.pointsH}分</small></div>
          <div class="fixture-team"><span>${match.awayFlag} ${match.away}</span><small>#${match.rankA} · ${match.pointsA}分</small></div>
        </div>
        <div class="card-prediction"><small>蒙特卡洛首选</small><span class="mini-score">${r.best.h}:${r.best.a}</span></div>
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
  $("strategyMode").checked = true;
  setOdds(match.odds);
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
  const strategyOn = $("strategyMode").checked;
  const rho = Number($("rho").value) / 100;
  const odds = ["oddsHome", "oddsDraw", "oddsAway"].map(id => Math.max(1.01, Number($(id).value) || 2));
  const crowd = {
    enabled: $("crowdMode").checked,
    score: `${Math.max(0, Number($("crowdHome").value) || 0)}:${Math.max(0, Number($("crowdAway").value) || 0)}`,
    penalty: Number($("crowdPenalty").value) / 100
  };
  const seed = 20260624 + selectedIndex * 997 + simulationEpoch * 7919 + homeForm * 31 + awayForm * 17 + tempo;
  const r = monteCarlo(match, homeForm, awayForm, tempo, strategyOn, 50000, seed, rho, crowd);
  const market = marketAnalysis([r.homeWin, r.draw, r.awayWin], odds);
  const wdlPick = recommendWdl(match, r);
  const handicapPick = recommendHandicap(match, r);

  $("resultCard").animate(
    [{ transform: "translateY(5px)", opacity: .75 }, { transform: "translateY(0)", opacity: 1 }],
    { duration: 320, easing: "ease-out" }
  );
  $("homeScore").textContent = r.best.h;
  $("awayScore").textContent = r.best.a;
  $("predictionType").textContent = strategyOn ? "蒙特卡洛策略预测" : "蒙特卡洛纯数据";
  $("homeWin").textContent = `${Math.round(r.homeWin * 100)}%`;
  $("draw").textContent = `${Math.round(r.draw * 100)}%`;
  $("awayWin").textContent = `${Math.round(r.awayWin * 100)}%`;
  $("wdlPick").textContent = wdlPick.label;
  $("wdlPickNote").textContent = wdlPick.probability === null
    ? wdlPick.note
    : `${wdlPick.note} · ${(wdlPick.probability * 100).toFixed(1)}%`;
  $("handicapPick").textContent = handicapPick.label;
  $("handicapPickNote").textContent = `${handicapPick.note} · ${(handicapPick.probability * 100).toFixed(1)}%`;
  $("confidence").textContent = `置信度 ${r.confidence}%`;
  $("reason").textContent = reasonText(match, r, homeForm, awayForm, tempo, strategyOn);
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
  renderMarket(market, [r.homeWin, r.draw, r.awayWin]);
}

function setOdds(odds) {
  ["oddsHome", "oddsDraw", "oddsAway"].forEach((id, index) => {
    $(id).value = odds[index].toFixed(2);
  });
}

function renderMarket(analysis, model) {
  const labels = ["主胜", "平局", "客胜"];
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
  $("homeSituation").textContent = `${match.pointsH}分 · ${match.statusH}`;
  $("awaySituation").textContent = `${match.pointsA}分 · ${match.statusA}`;
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
});
$("strategyMode").addEventListener("change", updatePrediction);
$("aboutButton").addEventListener("click", () => $("aboutDialog").showModal());
$("closeDialog").addEventListener("click", () => $("aboutDialog").close());
$("aboutDialog").addEventListener("click", event => {
  if (event.target === $("aboutDialog")) $("aboutDialog").close();
});

const initialMatch = matches[0];
$("homeFlag").textContent = initialMatch.homeFlag;
$("awayFlag").textContent = initialMatch.awayFlag;
$("homeName").textContent = initialMatch.home;
$("awayName").textContent = initialMatch.away;
$("homeForm").value = initialMatch.formH;
$("awayForm").value = initialMatch.formA;
setOdds(initialMatch.odds);
updateContext(initialMatch);
syncOutputs();
renderCards();
updatePrediction();
