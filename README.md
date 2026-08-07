# China Gazetteer Land Reform Database (CGLRD) Website

中国地方志土地改革数据库（China Gazetteer Land Reform Database, CGLRD）网站项目。

本项目为数据库展示网站，基于 **Quarto** 构建，提供中文和英文两套独立页面，用于展示项目背景、数据来源与方法、变量字典、数据访问方式、项目团队及相关信息。

网站支持通过导航栏右侧的“中文｜ENGLISH”在两个语言版本之间切换。中英文页面共享同一套 CSS、SCSS、JavaScript、图片和数据资源。

**在线地址：** <https://jael1030.github.io/China-Gazetteer-LandReform-Website/>

---

## 本地渲染

# 需要已安装 Quarto: https://quarto.org/docs/get-started/

由于中文和英文分别使用独立配置，需要依次渲染两个版本。

首先渲染中文站点：

```bash
quarto render --profile zh
```

然后在不清理中文输出的情况下渲染英文站点：

```bash
quarto render --profile en --no-clean
```

必须保留第二条命令中的 `--no-clean`，否则第二次渲染可能清除第一次生成的中文页面。

---

## 本地预览

完成中英文渲染后，可以运行：

```bash
quarto preview
```

然后通过终端显示的本地地址访问网站，例如：

```text
http://localhost:6940/
```

测试时应检查：

- 根地址能否进入中文首页
- 中文导航是否始终进入中文页面
- 英文导航是否始终进入英文页面
- “中文｜ENGLISH”能否正确切换语言
- CSS、JavaScript、图片和数据文件能否正常加载
- 浏览器控制台和终端是否出现 404

---

## 站点结构

| 文件 | 内容 |
|------|------|
| `index.qmd` | 网站根入口，访问时自动跳转至中文首页 |
| `zh/index.qmd` | 中文首页 |
| `zh/about.qmd` | 中文项目概况 |
| `zh/methodology.qmd` | 中文数据来源与方法 |
| `zh/codebook.qmd` | 中文核心指标与变量字典 |
| `zh/data.qmd` | 中文数据检索与下载 |
| `zh/documentation.qmd` | 中文文档与学术规范 |
| `zh/faq.qmd` | 中文常见问题 |
| `zh/team.qmd` | 中文团队联系 |
| `en/index.qmd` | 英文首页 |
| `en/about.qmd` | 英文项目概况 |
| `en/methodology.qmd` | 英文数据来源与方法 |
| `en/codebook.qmd` | 英文核心指标与变量字典 |
| `en/data.qmd` | 英文数据检索与下载 |
| `en/documentation.qmd` | 英文文档与学术规范 |
| `en/faq.qmd` | 英文常见问题 |
| `en/team.qmd` | 英文团队联系 |
| `styles.css` | 中英文共享的页面样式 |
| `styles.scss` | 中英文共享的 Quarto 主题设置 |
| `assets/` | 中英文共享的图片、数据和 JavaScript |
| `_quarto.yml` | 中英文共享的基础配置 |
| `_quarto-zh.yml` | 中文站点配置 |
| `_quarto-en.yml` | 英文站点配置 |
| `.github/workflows/publish.yml` | 中英文合并渲染及 GitHub Pages 发布流程 |

---

## GitHub Pages 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/publish.yml`）会自动渲染并发布到 `gh-pages` 分支。

仓库 Settings → Pages → Source 选择 **Deploy from a branch**，Branch 设为 `gh-pages` / `/ (root)`。

也可手动触发：Actions → Quarto Publish → Run workflow。

---

## 后续需要完善内容

### 1. 项目团队信息补充

当前项目团队页面已完成基础框架，需要进一步补充团队成员信息、个人主页、GitHub 或其他学术链接（若有）。

### 2. 数据文档完善

- 完整变量字典（Codebook）
- 数据清洗说明书
- 数据编码规则说明
- 缺失值处理规则
- 数据质量审核流程说明