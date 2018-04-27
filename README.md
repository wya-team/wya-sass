# wya-sass 
[![npm][npm-image]][npm-url] [![changelog][changelog-image]][changelog-url]

```
npm install --save wya-sass
```

[1. 准则](#1)  

[2. 文件目录](#2)
 
[3. 命名规范](#3) 

[4. 使用方式](#4)

[5. 样式输出](#5)

* [ 5.1 flex ](#5.1) 
* [ 5.2 layout ](#5.2) 
* [ 5.3 柵格 ](#5.3) 
* [ 5.4 定位 ](#5.4) 
* [ 5.5 辅助 ](#5.5) 
* [ 5.6 动画 ](#5.6) 

### <h3 id="1">准则</h3>
1. 以flex布局为主，栅格布局、固定布局、流体布局，绝对定位布局，浮动布局等为辅的一套css样式表。
2. 常见的flex布局和flex单个属性类。
3. 辅助布局类。

### <h3 id="2"> 文件目录</h3>
+ themes 定义公共的变量
  - color.scss 颜色变量
  - default.scss 全局变量
+ mixins 定义公共的方法
  - animate.scss 动画
  - common.scss 公共方法
+ core 输出全局的样式
  - globals.scss 定义全局变量的方法
  - reset.scss 输出reset样式
  - animate.scss 输出动画
  - flex.scss 输出flex布局
  - layout.scss 输出全局变量
  - pc pc模块样式
  - mobile 手机模块样式

### <h3 id="3">命名规范</h3>
* 全局命名以 `g-` 开头
* 模块命名以 `v-` 开头
	1. 外层：以 `v-` 开头， v-(路由简写)-(组件模块)， 例如： `v-home-header`;
	2. 内层：以`_` 开头， `_`(模块)， 例如： `_tab `;
* 公共组件命名以 `c-` 开头
	1. 外层：以 `c-` 开头， c-(弹层功能)-(结构)， 例如： `c-addr-header`;
	2. 内层：以`__` 开头， `__`(模块)， 例如： `__tab `; 


### <h3 id="4">使用方法</h3>
在需要引用公共变量的时候，一般里面可以去改变全局的颜色，边距，单位等变量。

```scss
  @import "../themes/default"; // 公共变量
```
在需要引用公共方法的时候，可以去调用全局定义的方法，例如：`@include commonScale(100px)`。

```scss
  @import "../mixins/common"; // 公共方法
```
在需要引用动画方法的时候，定义了例如： `@keyframes animate-fadeIn` 淡入等动画。

```scss
  @import "../mixins/animate"; // 公共动画
```

###  <h3 id="5">样式输出</h3>

*  <h5 id="5.1"> 5.1 flex </h5>

>百分比布局

| class  | 备注  |
|:-------------|:---------------|
| .g-flex  | flex |
| .g-col   | 1  |
| .g-col-2 | 2  |
| .g-full  | 100%  |
| .g-1of2  | 50%   |
| .g-1of3  | 33.3333%  |
| .g-1of4  | 25%  |

>基本网格布局

| class  | 备注  |
|:-------------|:---------------|
|.g-flex-grid-3   | 三列|
|.g-flex-grid-3   | 四列|


>圣杯布局

| class  | 备注  |
|:-------------|:---------------|
| .g-flex-holy | |

>输入框的布局

```html
<div class="g-flex">
	<label></label>
	<input class="g-col" />
	<button></button>
</div>
```
>悬挂式布局

```html
<div class="g-flex g-ai-fs">
  <img class="g-m-r" src="" alt="">
  <p class="g-col"></p>
</div>
```
>对齐

| class  | 备注  |
|:-------------|:---------------|
|.g-flex-cc  | 水平对齐|
|.g-flex-ac  | 垂直对齐|
>flex单个属性类 以g-(属性名首字母)-(属性值首字母) 命名

| class  | 备注  | 
|:-----|:-----|
|.g-fd-c  |主轴为垂直方向，起点在上| 
|.g-fd-cr| 111 |
|.g-fw-w |换行，第一行在上方。| 
|.g-fw-wr | 换行，第一行在下方。 |
|.g-jc-fe|右对齐| 
|.g-jc-c|居中| 
|.g-jc-sb|两端对齐, 间隔相等|
|.g-ai-fs|交叉轴的起点对齐| 
|.g-ai-fe|交叉轴的终点对齐|
|.g-ai-c|交叉轴的中点对齐|
|.g-ac-c | 与交叉轴的起点对齐|
|...| |||


*  <h5 id="5.2">  5.2 layout </h5>

> color  g-c-(颜色／变量) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-c-blue-dark ||
|.g-c-blue-mid ||
|.g-c-blue-light ||
| ...| |

> bgColor g-bg-(颜色／变量)

| class  | 备注  |
|:-------------|:---------------|
|.g-bg-blue-dark ||
|.g-bg-blue-mid ||
|.g-bg-blue-light ||
| ...| |
> padding g-pd-(方向)?-(值/变量) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-pd-10| 四个方向 |
|.g-pd-t-10 | 单方向|
|.g-pd-lr-10 | 组合方向|
|... ||
> margin g-m-(方向)?-(值/变量) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-m-10| 四个方向 |
|.g-m-t-10 | 单方向|
|.g-m-lr-10 | 组合方向|
|... ||
> font-size g-fs-(值) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-fs-12|  |
|.g-fs-12em | 带单位 |
|... ||
> line-height g-lh-(值) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-lh-44|  |
|.g-lh-88 | |
|... ||
> img大小 g-img-(值) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-img-40|  |
|.g-img-60 | |
|... ||


*  <h5 id="5.3"> 5.3 柵格 </h5>

| class  | 备注  |
|:-------------|:---------------| 
|.g-row|  | 
|.g-w-(number)| 12>= number >=1 |  
|.g-fw-(number)| 12>= number >=1 float:left;|

*  <h5 id="5.4">  5.4 定位 

| class  | 备注  |
|:-------------|:---------------| 
|.g-fixed| 固定定位 | 
|.g-relative| 绝对定位|  
|.g-absolute| 相对定位|

*  <h5 id="5.5">  5.5 浮动  </h5>

| class  | 备注  |
|:-------------|:---------------| 
|.g-clearfix| 清除浮动 | 
|.g-fr | 右浮|  
|.g-fl | 左浮|

*  <h5 id="5.6"> 5.6 辅助 </h5>

> 1像素边框
 
| class  | 备注  |
|:-------------|:---------------| 
|.g-bb| 1像素下(border-bottom)边框 | 
|.g-br |  1像素右(border-right)边框 |  
|.g-bl| 1像素左(border-left)边框 | 
|.g-bt |  1像素上(border-top)边框 | 

> 文本

| class  | 备注  |
|:-------------|:---------------| 
|.g-tc| 居中|
|.g-tl| 居左|
|.g-tr| 居右|
|.g-td-lh| 删除线|
|.g-td-ul| 下划线|
|.g-nowrap| 不换行|
|.g-nobreak| 字母数字不换行|
|.g-tl| 文本居左|
|.g-tr| 文本居右|

> 其他

| class  | 备注  |
|:-------------|:---------------| 
|.g-h-full| height: 100vh; |
|.g-br-circle| border-radius: 100%; |
|.g-br-sem| 默认圆角 (8px) |
|.g-bs| 边框阴影|
|.g-disabled| 禁用事件 |
|.g-noanimate| 禁用动画|
|.g-show| 显示|
|.g-hide| 隐藏|


*  <h5 id="5.7"> 5.7动画 </h5>

| class  | 备注  |
|:-------------|:---------------| 
|.g-bg-mask| 遮罩层|
|.g-popup-down| 向下弹出 height：50% |
|.g-popup-up| 向上弹出 height：50% |
|.g-popup-left| 向左弹出 height：50% |
|.g-popup-right| 向右弹出 height：50% |
|.g-modal| 居中弹窗 |


























<!--  以下内容无视  -->
[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg
[changelog-url]: CHANGELOG.md

[npm-image]: https://img.shields.io/npm/v/wya-sass.svg
[npm-url]: https://www.npmjs.com/package/wya-sass