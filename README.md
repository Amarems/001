# GOALMIND · World Cup Score Predictor

GOALMIND 是一个静态网页版世界杯比分预测实验项目。

它结合：

- 双变量泊松分布
- Dixon-Coles 低比分修正
- 贝叶斯实力收缩
- 小组赛 / 淘汰赛分层模拟
- 胜平负、让球、比分、总进球推荐
- 赛制背景、淘汰赛路径、气候、休息天数和裁判尺度协变量

## 当前更新规则

从 2026-06-29 起，项目采用“赔率驱动更新”而不是固定每日更新时间：

- 每 3 小时检查一次新赛程、已结束赛果、赔率和盘口变化。
- 只要新比赛赔率出现，就更新网页预测，不等待美国时间固定早上更新。
- 每次默认更新未来最值得关注的 3 场比赛，可以跨不同比赛日期。
- 进入 8 强阶段后，自动改为每次更新未来最值得关注的 2 场比赛。
- 如果赔率变化超过 5%、去水隐含概率变化超过 2 个百分点、市场方向反转，或模型与市场分歧扩大，会重新生成预测。
- 页面不再提供手动策略开关；赛制和淘汰赛路径只作为模型背景变量。
- GitHub 连接可用时同步到 Pages；连接不可用时使用分享包手动上传。

## 本地打开

双击 `index.html` 即可。

## 发布到 GitHub Pages

1. 上传这些文件到仓库根目录：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `calibration-results.json`
   - `coach-data.csv`
   - `social-predictions.csv`
   - `.nojekyll`
   - `README.md`
2. 打开仓库 Settings → Pages。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`，目录选择 `/root`。
5. 保存后等待 1-3 分钟。

公开地址：

```text
https://amarems.github.io/001/
```

## 免责声明

这是数据科学练习项目，不构成投注建议。页面内赔率为示例值，不代表实时盘口。
