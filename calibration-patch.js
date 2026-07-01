(function applyNorwayCalibrationPatch() {
  if (typeof onlineCalibration !== "undefined") {
    onlineCalibration.goalScale = 1.003;
    onlineCalibration.eligibleFinals = 5;
    onlineCalibration.status = "2026-07-01 odds patrol; Norway 2-1 result absorbed with small-sample shrinkage";
  }

  if (typeof modelConfig !== "undefined") {
    modelConfig.knockoutDrawBoost = 0.21;
  }

  if (typeof dixonColesTau === "function" && typeof clamp === "function") {
    lowScoreDrawWeight = function patchedLowScoreDrawWeight(homeGoals, awayGoals, homeLambda, awayLambda, match, rho) {
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
      const knockoutMismatchDamping = isKnockout ? clamp(Math.abs(homeLambda - awayLambda) / .9, 0, .45) : 0;
      const adjustedKnockoutDrawBoost = modelConfig.knockoutDrawBoost * (1 - knockoutMismatchDamping);
      const drawBoost = (isTenseGroupGame ? modelConfig.lowScoreDrawBoost : 0) + (isKnockout ? adjustedKnockoutDrawBoost : 0);
      if (homeGoals === 0 && awayGoals === 0) return baseTau * (1 + drawBoost * 1.25);
      if (homeGoals === 1 && awayGoals === 1) return baseTau * (1 + drawBoost);
      return baseTau;
    };
  }

  if (typeof renderCards === "function" && typeof updatePrediction === "function") {
    renderCards();
    updatePrediction();
  }
})();
