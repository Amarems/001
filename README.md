# GOALMIND · World Cup Score Predictor

GOALMIND 是一个静态网页版世界杯比分预测实验项目。

它结合：

- 双变量泊松分布
- Dixon-Coles 低比分修正
- 贝叶斯实力收缩
- 小组赛 / 淘汰赛分层模拟
- 出线策略、淘汰赛路径、气候、休息天数和裁判尺度协变量

## 本地打开

双击 `index.html` 即可。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个 public repository，例如 `goalmind`.
2. 上传这些文件到仓库根目录：
   - `index.html`
   - `styles.css`
   - `app.js`
   - `calibration-results.json`
   - `coach-data.csv`
   - `social-predictions.csv`
   - `.nojekyll`
   - `README.md`
3. 打开仓库 Settings → Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 1-3 分钟。

发布完成后，公开地址通常是：

```text
https://你的用户名.github.io/goalmind/
```

## 免责声明

这是数据科学练习项目，不构成投注建议。页面内赔率为示例值，不代表实时盘口。
