# GOALMIND · World Cup Score Predictor

GOALMIND 是一个静态网页版世界杯比分预测实验项目。

它结合：

- 双变量泊松分布
- Dixon-Coles 低比分修正
- 贝叶斯实力收缩
- 小组赛 / 淘汰赛分层模拟
- 胜平负、让球、比分、总进球推荐
- 赛制背景、淘汰赛路径、气候、休息天数和裁判尺度协变量
- Dixon-Coles 滚动回测、EV/Kelly/CLV/ROI/最大回撤评估

## 当前更新规则

从 2026-06-29 起，项目采用“赔率驱动更新”而不是固定每日更新时间：

- 每 3 小时检查一次新赛程、已结束赛果、赔率和盘口变化。
- 只要新比赛赔率出现，就更新网页预测，不等待美国时间固定早上更新。
- 如果赔率变化超过 5%、去水隐含概率变化超过 2 个百分点、市场方向反转，或模型与市场分歧扩大，会重新生成预测。
- 页面不再提供手动策略开关；赛制和淘汰赛路径只作为模型背景变量。

## Dixon-Coles 回测

页面底部的 `ROLLING BACKTEST` 面板可以导入历史赛果 + 历史赔率 CSV。字段模板见 `backtest-template.csv`。

回测规则：

- 预测某一天时，只使用这一天以前的比赛训练模型，避免未来数据泄漏。
- 模型概率会转换为公允赔率，再与市场赔率计算 EV。
- 默认只选择每场 EV 最高的一项，避免同场多边下注虚高收益。
- 支持固定均注、Kelly、半 Kelly。
- 输出 ROI、CLV 胜率、平均 CLV、最大回撤、Sharpe、LogLoss、RPS。

## 本地打开

双击 `index.html` 即可。

## 发布到 GitHub Pages

上传这些文件到仓库根目录：

- `index.html`
- `styles.css`
- `app.js`
- `backtest-engine.js`
- `backtest-ui.js`
- `backtest-template.csv`
- `calibration-results.json`
- `coach-data.csv`
- `social-predictions.csv`
- `.nojekyll`
- `README.md`

公开地址：

```text
https://amarems.github.io/001/
```

## 免责声明

这是数据科学练习项目，不构成投注建议。页面内赔率为示例值，不代表实时盘口。
