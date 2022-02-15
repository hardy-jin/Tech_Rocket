# Vue项目命名规范

### 重点

components : PascalCase

views: kebab-case

### 1.1 项目文件命名

**1.1.1 项目名**

全部采用小写方式， 以短横线分隔。例：vue-project-name。

**1.1.2 目录名**

参照项目命名规则，有复数结构时，要采用复数命名法。例：docs、assets、components、directives、mixins、utils、views。

```
vue-project-name/
|- BuildScript    // 流水线部署文件目录
|- docs           // 项目的细化文档目录（可选）
|- nginx          // 部署在容器上前端项目 nginx 代理文件目录
|- node_modules   // 下载的依赖包
|- public         // 静态页面目录
    |- index.html // 项目入口
|- src            // 源码目录
    |- api        // http 请求目录
    |- assets     // 静态资源目录，这里的资源会被wabpack构建
        |- icon   // icon 存放目录
        |- img    // 图片存放目录
        |- js     // 公共 js 文件目录
        |- scss   // 公共样式 scss 存放目录
            |- frame.scss   // 入口文件
            |- global.scss  // 公共样式
            |- reset.scss   // 重置样式
    |- components     // 组件
    |- plugins        // 插件
    |- router         // 路由
    |- routes         // 详细的路由拆分目录（可选）
        |- index.js
    |- store          // 全局状态管理
    |- utils          // 工具存放目录
        |- request.js // 公共请求工具
    |- views          // 页面存放目录
    |- App.vue        // 根组件
    |- main.js        // 入口文件
    |- tests          // 测试用例
    |- .browserslistrc// 浏览器兼容配置文件
    |- .editorconfig  // 编辑器配置文件
    |- .eslintignore  // eslint 忽略规则
    |- .eslintrc.js   // eslint 规则
    |- .gitignore     // git 忽略规则
    |- babel.config.js // babel 规则
    |- Dockerfile // Docker 部署文件
    |- jest.config.js
    |- package-lock.json
    |- package.json // 依赖
    |- README.md // 项目 README
    |- vue.config.js // webpack 配置
```

**1.1.3 图像文件名**

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**下划线**分隔。

```
banner_sina.gif
menu_aboutus.gif
menutitle_news.gif
logo_police.gif
logo_national.gif
pic_people.jpg
pic_TV.jpg
```

**1.1.4 HTML 文件名**

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**下划线**分隔

```
|- error_report.html
|- success_report.html
```

**1.1.5 CSS 文件名**

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**短横线**分隔。

```
|- normalize.less
|- base.less
|- date-picker.scss
|- input-number.scss
```

**1.1.6 JavaScript 文件名**

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**短横线**分隔。

```
|- index.js
|- plugin.js
|- util.js
|- date-util.js
|- account-model.js
|- collapse-transition.js
```

总结：

> 上述规则可以快速记忆为“静态文件下划线，编译文件短横线”。



### 1.2 Vue 组件命名

**1.2.1 单文件组件名**

文件扩展名为 .vue 的 single-file components (单文件组件)。单文件组件名应该始终是单词大写开头 (PascalCase)。

```
components/
|- MyComponent.vue
```

**1.2.2 单例组件名**

只拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。

这不意味着组件只可用于一个单页面，而是_每个页面_只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，_只是目前_在每个页面里只使用一次。

比如，头部和侧边栏组件几乎在每个页面都会使用，不接受 prop，该组件是专门为该应用所定制的。

```
components/
|- TheHeading.vue
|- TheSidebar.vue
```

**1.2.3 基础组件名**

> 基础组件：不包含业务，独立、具体功能的基础组件，比如日期选择器、模态框等。这类组件作为项目的基础控件，会被大量使用，因此组件的 API 进行过高强度的抽象，可以通过不同配置实现不同的功能。

应用特定样式和约定的基础组件(也就是展示类的、无逻辑的或无状态、不掺杂业务逻辑的组件) 应该全部以一个特定的前缀开头 —— Base。**基础组件在一个页面内可使用多次，在不同页面内也可复用，是高可复用组件。**

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

**1.2.4 业务组件**

> 业务组件：它不像基础组件只包含某个功能，而是在业务中被多个页面复用的（具有可复用性），它与基础组件的区别是，业务组件只在当前项目中会用到，不具有通用性，而且会包含一些业务，比如数据请求；而基础组件不含业务，在任何项目中都可以使用，功能单一，比如一个具有数据校验功能的输入框。

掺杂了复杂业务的组件（拥有自身 data、prop 的相关处理）即业务组件应该以 Custom 前缀命名。业务组件在一个页面内比如：某个页面内有一个卡片列表，而样式和逻辑跟业务紧密相关的卡片就是业务组件。

```
components/
|- CustomCard.vue
```

**1.2.5 紧密耦合的组件名**

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。** 因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

**1.2.6 组件名中单词顺序**

**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。** 因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。如下组件主要是用于搜索和设置功能。

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

还有另一种多级目录的方式，把所有的搜索组件放到“search”目录，把所有的设置组件放到“settings”目录。我们只推荐在非常大型 (如有 100+ 个组件) 的应用下才考虑这么做，因为在多级目录间找来找去，要比在单个 components 目录下滚动查找要花费更多的精力。

**1.2.7 完整单词的组件名**

**组件名应该倾向于而不是缩写。** 编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### 1.3 Views下文件命名规范

在views文件下，代表路由的.vue文件都使用横线连接，代表路由的文件夹也是用同样的规则
例如：

> @/src/views/svg-icons/index.vue
> @/src/views/svg-icons/require-icons.js

使用横线连接来命名views主要是出于以下几个考虑。

- 横线连接 (kebab-case) 也是官方推荐的命名规范之一 文档
- views下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头)
- 页面的url 也都是横线连接的，比如https://www.xxx.admin/export-excel，所以路由对应的view应该要保持统一
- 没有大小写敏感问题

- [命名规范](javascript:void(0);)
- [Component](javascript:void(0);)
- [JS 文件](javascript:void(0);)
- [Views](javascript:void(0);)



#### 位于 `views/` 下的视图组件

这个文件夹下主要是**以页面为单位的组件**或者**模块文件夹**，需要遵循以下命名规范：

- `views/` 目录下面的 `.vue` 文件代表着页面的名字；

- 只有一个文件的情况，直接放在 `views/` 目录下面，如 `Login.vue`、`Home.vue`；

- 有 `utils/` 等子文件夹时，在 `views/` 下创建一个文件夹，要体现页面的名字， `.vue` 文件可与之同名；

- 有两个以上 `.vue` 文件时，在 `views/` 下创建一个文件夹，要体现内部文件的所属类名（例如`car`），`.vue` 文件放在里面（例如`car-list.vue`，`car-detail.vue`）；

- 有私有组件时，在 `views/` 下创建一个文件夹，要体现页面的名字，文件夹下必须有 `index.vue` 或 `index.js`；

- 尽量是名词；

- 除 `components/` 下的，一律采用 `kebab-case` 的风格；

- 名字至少两个单词（good: `car-detail`）（bad: `car`）

- 常用结尾单词有（`detail`、`edit`、`list`、`info`、`report`）

- 私有 `components/` 目录下，以 `Item` 结尾的代表着私有组件（`CarListItem`、`CarInfoItem`）

  

### 参考

[风格指南 - Vue.js](https://v3.cn.vuejs.org/style-guide/)

[vue代码规范指南- mdnice 墨滴](https://www.mdnice.com/writing/93253bb711244f938933d16f30e1f6fa)

[代码编写规范- Vue 项目 - 腾讯云](https://cloud.tencent.com/developer/article/1840505)	

https://github.com/PanJiaChen/vue-element-admin.git