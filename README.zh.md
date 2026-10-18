# Paper Skin · 期刊桌面

一个安静、克制的学术皮肤，适用于 **DeepSeek Harness**。

在今天要发的期刊里选一本 —— *Nature*、*Science*、*IEEE* 或 *Elsevier* —— 再选择稿件进度。一封措辞专业的编辑部信会作为对话背景，铺在正文后方。

> 仅作排版致意，与 Nature、Science、AAAS、IEEE、Elsevier 无隶属关系。

![Paper Skin 在 DeepSeek Harness 中的效果](docs/preview-nature.webp)

## 它会做什么

- **期刊刊头。** 侧边栏是一整块深色封面书脊，包含排印字标、圆形封面缩略图、期刊说明，以及一条细小的版本与进度题花。
- **四张封面。** 期刊只在 Harness 左下角的「小期刊封面按钮」中切换；侧边栏保留一条细题花，不再放臃肿的切换器。
- **论文进度。** 在同一个皮肤面板里选择：
  - **初审 · With Editor** — 编辑部初审
  - **中期 · Under Review** — 同行评审
  - **大修 · Major Revision** — 大修后重投
  - **小修 · Minor Revision** — 小修后预计接收
  - **录用 · Accepted** — 正式录用信
  - **见刊 · Published** — 正式发表
- **专业英文背景信。** 当前阶段的编辑部信会铺在对话后面的纸面上：大字阶段名、专业措辞、稿件编号、日期和圆形印章。它是真正的背景层，不是输入框下方的一条横幅。背景信透明度可在皮肤面板中从 **5% 调到 80%**，颜色可跟随阶段、从预设色板选择，或使用自定义取色器。
- **期刊封面图。** 四张封面都来自 `assets/`：Nature、Science、IEEE 封面，以及 Elsevier 的树徽与字标。小封面按钮、首页印章和侧栏徽标也复用这些图。
- **看得见的纸纹。** 对话区、输入框、设置面板与侧栏都有一层纤维纸纹，可以一键关掉。
- **明暗两套。** 纸张、封面墨色和背景信都跟随 Harness 的明暗主题。
- **只存在本机。** 选择保存在当前浏览器的 `localStorage`，键名为 `dsh.paper-skin.v1`。皮肤不发起外部网络请求，也不收集数据。

![Paper Skin 设置面板](docs/preview-panel.webp)

## 使用

安装后重新加载一次页面。

1. 左下角、原生 **Settings** 旁，是小期刊封面按钮。
2. 点开，选择期刊和稿件进度。
3. 侧边栏、封面颜色、字体和对话后方的编辑部信会一起变化。
4. 「录用」使用正式 acceptance letter 语气；其他阶段使用对应的编辑部状态措辞。

浮动设置面板的交互习惯参考了 [open-sea-skin](https://github.com/d-dev0101/open-sea-skin)；本项目的面板和皮肤是独立实现，不依赖 open-sea-skin。

## 安装

Paper Skin 是一个自包含的 DeepSeek Harness bundle：一条 Host 行（`paper-skin`）、一个 Web 客户端模块，以及一条只读的本地图片路由。没有运行时依赖，没有构建步骤。

### 从 GitHub 安装

直接从公开仓库安装带标签的版本：

```sh
dsh plugin --profile desktop add github:1552421144-cloud/paper-skin#v1.0.0
```

也可以在 Harness 的 **Plugins → Add plugin → Install a third-party plugin** 中粘贴同一个 `github:...` spec，安装后启用 **Paper Skin · 期刊桌面**。

### 从发布包安装

下载 `paper-skin-1.0.0.tgz`（来自 [Release 页面](https://github.com/1552421144-cloud/paper-skin/releases)），然后安装到运行 Harness 的那个 profile：

```sh
dsh plugin --profile desktop add /absolute/path/to/paper-skin-1.0.0.tgz
```

macOS 桌面版可以使用应用自带的 CLI：

```sh
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" \
  plugin --profile desktop add /absolute/path/to/paper-skin-1.0.0.tgz
```

重启 Harness，刷新一次页面，然后在 **Plugins** 中确认 **Paper Skin · 期刊桌面** 已启用。Bundle 行为 `paper-skin`。

### 从 npm 安装

如果包已发布到 npm，安装确切的版本：

```sh
dsh plugin --profile desktop add paper-skin@1.0.0
```

也可以在 Harness 的 **Plugins → Add plugin** 中输入 `paper-skin@1.0.0`，安装后启用 **Paper Skin · 期刊桌面**。

### 从工作副本安装

开发时可以直接链接当前目录：

```sh
dsh plugin --profile desktop add "link:/absolute/path/to/paper-skin"
```

## 卸载

在 **Plugins** 中移除 **Paper Skin**，或：

```sh
dsh plugin --profile desktop remove paper-skin
```

卸载时 CSS、根节点属性、背景信和所有 slot 条目会一并移除；`localStorage` 中的键会保留，直到手动清除。

## 兼容性

已在 macOS 的 DeepSeek Harness Desktop **0.2.1-rc.2** 上验证。客户端只用下面列出的标准 Web slot，因此在具有相同客户端包的 `dsh web` profile 中也可以使用。不会修改 Harness 安装目录。

## 文件

| 文件 | 作用 |
| --- | --- |
| `client.js` | 浏览器端皮肤：React slots、封面、阶段信、颜色与透明度控制、CSS 和设置面板。 |
| `index.js` | Host 半边；从 `assets/` 提供封面图。不注册工具、模型上下文或会话路由。 |
| `cordis.patch.yml` | Bundle patch，插入 `paper-skin` 行。 |
| `locale/*.json` | 插件管理器的中英文元数据。 |
| `icon.svg` | 原创期刊封面图标。 |
| `assets/*` | 优化后的 Nature / Science / IEEE 封面、Elsevier 封面与透明树徽。 |
| `docs/*.webp` | README 截图。 |
| `THIRD_PARTY_NOTICES.md` | 商标与封面图归属说明。 |

## 使用的插槽

- `sidebar.brand.mark`、`sidebar.brand.name`
- `sidebar.footer.action`（细小题花，不是切换器）
- `conversation.hero.brand.mark`
- `shell.overlay`（唯一的期刊 / 进度切换入口）

对话后方的编辑部信是记录区表面的一层 CSS 背景，不会新增对话行。封面图片由 Host 从 `assets/` 本地提供。不替换应用根节点、不发起外部网络请求。

## 打包发布

```sh
npm pack
```

生成的 `paper-skin-1.0.0.tgz` 只包含运行时文件、语言包、图标、封面图、截图和文档。仓库与 Release 在 [1552421144-cloud/paper-skin](https://github.com/1552421144-cloud/paper-skin)。发布到 npm 是可选的，发布后可以用包名安装：

```sh
npm publish
```

## License

插件代码使用 MIT。期刊与出版商名称及封面图仅作描述性使用，不代表官方认可；封面图不在 MIT 许可范围内，详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。相关商标归各权利人所有。
