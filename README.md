# \@wya/sass
[![npm][npm-image]][npm-url] [![changelog][changelog-image]][changelog-url]

```
npm install --save @wya/sass
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

| class  | 备注  | 关键代码 |
|:-------------|:---------------|:---------------|
| .g-flex  | flex布局 | `display: flex` |
| .g-col   | 占一位 | `flex: 1`  |
| .g-col-2 | 占两位 | `flex: 2`  |
| .g-full  | 铺满 | `flex: 0 0 100%`  |
| .g-1of2  | 占50% | `flex: 0 0 50%`   |
| .g-1of3  | 占1/3 | `flex: 0 0 33.33333333%`  |
| .g-2of3  | 占2/3 | `flex: 0 0 66.66666666%`  |
| .g-1of4  | 占1/4 | `flex: 0 0 25%`  |
| .g-3of4  | 占3/4 | `flex: 0 0 75%`  |
| .g-1of5  | 占1/5 | `flex: 0 0 20%`  |
| .g-2of5  | 占2/5 | `flex: 0 0 40%`  |
| .g-3of5  | 占3/5 | `flex: 0 0 60%`  |
| .g-4of5  | 占4/5 | `flex: 0 0 80%`  |

>基本网格布局

| class  | 备注  |
|:-------------|:---------------|
|.g-flex-grid-3   | 三列 |
|.g-flex-grid-4   | 四列 |
|.g-flex-grid-5   | 五列 |
|.g-flex-grid-6   | 六列 |


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

| class  | 备注  | 关键代码 |
|:-------------|:---------------|:---------------|
|.g-flex-cc  | 水平垂直居中| `justify-content: center; align-items: center` |
|.g-flex-ac  | 垂直居中| `align-items: center` |
>flex单个属性类 以g-(属性名首字母)-(属性值首字母) 命名

| class | 备注  | 关键代码 |
|:-------------|:-------------|:-------------|
|.g-fd-c|主轴为垂直方向，起点在上| `flex-direction: column` |
|.g-fd-cr| 主轴为垂直方向，倒序 | `flex-direction: column-reverse` |
|.g-fd-r|主轴为水平方向，起点在左| `flex-direction: row` |
|.g-fd-rr|主轴为水平方向，起点在右| `flex-direction: row-reverse` |
|.g-fw-w |换行，第一行在上方。| `flex-wrap: wrap` |
|.g-fw-wr | 换行，第一行在下方。 | `flex-wrap: wrap-reverse` |
|.g-fw-n | 不换行 | `flex-wrap: nowrap` |
|.g-jc-fs|位于容器的开头| `justify-content: flex-start` |
|.g-jc-fe|位于容器的结尾| `justify-content: flex-end` |
|.g-jc-c|位于容器的中心| `justify-content: center` |
|.g-jc-sb|两端对齐, 间隔相等| `justify-content: space-between` |
|.g-jc-sa|间隔相等| `justify-content: space-around` |
|.g-ai-fs|侧轴方向, 位于容器的开头, 主轴方向排列| `align-items: flex-start` |
|.g-ai-fe|侧轴方向, 位于容器的结尾, 主轴方向排列| `align-items: flex-end` |
|.g-ai-c|侧轴方向, 位于容器的中心, 主轴方向排列| `align-items: center` |
|.g-ai-b|侧轴方向, 位于容器的基线上, 主轴方向排列| `align-items: baseline` |
|.g-ai-s|侧轴方向, 元素被拉伸以适应容器, 主轴方向排列| `align-items: stretch` |
|.g-ac-fs |侧轴方向, 元素位于容器的开头, 侧轴方向排列| `align-content: flex-start` |
|.g-ac-fe | 侧轴方向,元素位于容器的结尾, 侧轴方向排列| `align-content: flex-end` |
|.g-ac-sb | 两端对齐, 间隔相等, 侧轴方向排列| `align-content: space-between` |
|.g-ac-sa | 间隔相等, 侧轴方向排列| `align-content: space-around` |
|.g-ac-s | 元素被拉伸以适应容器, 剩余空间被所有行平分, 以扩大它们的侧轴尺寸| `align-content: stretch` |
|.g-as-fs | flex子项在侧轴方向上的对齐方式: 位于容器的开头| `align-self: flex-start` |
|.g-as-fe | flex子项在侧轴方向上的对齐方式: 位于容器的结尾| `align-self: flex-end`|
|.g-as-a | 默认值，继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"| `align-self: auto` |
|.g-as-b | 元素位于容器的基线上| `align-self: baseline` |
|.g-as-c | flex子项在侧轴方向上的对齐方式: 元素位于容器的中心 | `align-self: center` |
|.g-as-s | 元素被拉伸以适应容器| `align-self: stretch` |


*  <h5 id="5.2">  5.2 layout </h5>

> color  g-c-(颜色／变量)  颜色效果可在MarkDown编辑器中查看

| class  | 备注  | 颜色效果 |
|:-------------|:---------------|:---------------| 
|.g-c-blue-dark | `#0b76fe` | <div style="color: #0b76fe;">blue-dark</div> |
|.g-c-blue-mid | `#16a3ff` | <div style="color: #16a3ff;">blue-mid</div> |
|.g-c-blue-light | `#6ab4ff` | <div style="color: #6ab4ff;">blue-light</div> |
|.g-c-yellow-dark | `#f2c300` | <div style="color: #f2c300;">yellow-dark</div> |
|.g-c-yellow-mid | `#ffd00d` | <div style="color: #ffd00d;">yellow-mid</div> |
|.g-c-yellow-light | `#ffd31c` | <div style="color: #ffd31c;">yellow-light</div> |
|.g-c-orange-dark | `#ef3528` | <div style="color: #ef3528;">orange-dark</div> |
|.g-c-orange-mid | `#fa6f60` | <div style="color: #fa6f60;">orange-mid</div> |
|.g-c-orange-light | `#fc9780` | <div style="color: #fc9780;">orange-light</div> |
|.g-c-gray-dark | `#edeef0` | <div style="color: #edeef0;">gray-dark</div> |
|.g-c-gray-mid | `#f5f6f7` | <div style="color: #f5f6f7;">gray-mid</div> |
|.g-c-gray-light | `#f7f8fa` | <div style="color: #f7f8fa;">gray-light</div> |
|.g-c-black-dark | `#2e3136` | <div style="color: #2e3136;">black-dark</div> |
|.g-c-black-mid | `#636770` | <div style="color: #636770;">black-mid</div> |
|.g-c-black-light | `#9c9fa6` | <div style="color: #9c9fa6;">black-light</div> |
|.g-c-purple-dark | `#8b61f3` | <div style="color: #8b61f3;">purple-dark</div> |
|.g-c-purple-mid | `#a48efc` | <div style="color: #a48efc;">purple-mid</div> |
|.g-c-purple-light | `#cca3ff` | <div style="color: #cca3ff;">purple-light</div> |
|.g-c-black | `#000` | <div style="color: #000;">black</div> |
|.g-c-white | `#fff` | <div style="color: #fff;">white</div> |
|.g-c-444 | `#444` | <div style="color: #444;">444</div> |
|.g-c-67 | `#676767` | <div style="color: #676767;">676767</div> |
|.g-c-f8 | `#f2f2f2` | <div style="color: #f2f2f2;">f2f2f2</div> |
|.g-c-f8 | `#f8f8f8` | <div style="color: #f8f8f8;">f8f8f8</div> |
|.g-c-ef | `#efefef` | <div style="color: #efefef;">efefef</div> |
|.g-c-cd | `#cdcdcd` | <div style="color: #cdcdcd;">cdcdcd</div> |
|.g-c-e8 | `#e8e8e8` | <div style="color: #e8e8e8;">e8e8e8</div> |
|.g-c-d9 | `#d9d9d9` | <div style="color: #d9d9d9;">d9d9d9</div> |
|.g-c-f4 | `#f4f4f4` | <div style="color: #f4f4f4;">f4f4f4</div> |
|.g-c-f9 | `#f9f9f9` | <div style="color: #f9f9f9;">f9f9f9</div> |
|.g-c-000 | `#000000` | <div style="color: #000000;">000000</div> |
|.g-c-333 | `#333333` | <div style="color: #333333;">333333</div> |
|.g-c-51 | `#515151` | <div style="color: #515151;">515151</div> |
|.g-c-666 | `#666666` | <div style="color: #666666;">666666</div> |
|.g-c-999 | `#999999` | <div style="color: #999999;">999999</div> |
|.g-c-aaa | `#aaaaaa` | <div style="color: #aaaaaa;">aaaaaa</div> |
|.g-c-bbb | `#bbbbbb` | <div style="color: #bbbbbb;">bbbbbb</div> |
|.g-c-bd | `#bdbdbd` | <div style="color: #bdbdbd;">bdbdbd</div> |
|.g-c-info | `#0177de` | <div style="color: #0177de;">0177de</div> |
|.g-c-success | `#00a854` | <div style="color: #00a854;">00a854</div> |
|.g-c-error | `#f04134` | <div style="color: #f04134;">f04134</div> |
|.g-c-warn | `#ffbf00` | <div style="color: #ffbf00;">ffbf00</div> |


> bgColor g-bg-(颜色／变量)  颜色效果可在MarkDown编辑器中查看

| class  | 备注  | 颜色效果 |
|:-------------|:---------------|:---------------|
|.g-bg-blue-dark | `#0b76fe` | <div style="background: #0b76fe; height: 10px" /> |
|.g-bg-blue-mid | `#16a3ff` | <div style="background: #16a3ff; height: 10px" /> |
|.g-bg-blue-light | `#6ab4ff` | <div style="background: #6ab4ff; height: 10px" /> |
|.g-bg-yellow-dark | `#f2c300` | <div style="background: #f2c300; height: 10px" /> |
|.g-bg-yellow-mid | `#ffd00d` | <div style="background: #ffd00d; height: 10px" /> |
|.g-bg-yellow-light | `#ffd31c` | <div style="background: #ffd31c; height: 10px" /> |
|.g-bg-orange-dark | `#ef3528` | <div style="background: #ef3528; height: 10px" /> |
|.g-bg-orange-mid | `#fa6f60` | <div style="background: #fa6f60; height: 10px" /> |
|.g-bg-orange-light | `#fc9780` | <div style="background: #fc9780; height: 10px" /> |
|.g-bg-gray-dark | `#edeef0` | <div style="background: #edeef0; height: 10px" /> |
|.g-bg-gray-mid | `#f5f6f7` |  <div style="background: #f5f6f7; height: 10px" />|
|.g-bg-gray-light | `#f7f8fa` | <div style="background: #f7f8fa; height: 10px" /> |
|.g-bg-black-dark | `#2e3136` | <div style="background: #2e3136; height: 10px" /> |
|.g-bg-black-mid | `#636770` | <div style="background: #636770; height: 10px" /> |
|.g-bg-black-light | `#9c9fa6` | <div style="background: #9c9fa6; height: 10px" /> |
|.g-bg-purple-dark | `#8b61f3` | <div style="background: #8b61f3; height: 10px" /> |
|.g-bg-purple-mid | `#a48efc` | <div style="background: #a48efc; height: 10px" /> |
|.g-bg-purple-light | `#cca3ff` | <div style="background: #cca3ff; height: 10px" /> |
|.g-bg-black | `#000` | <div style="background: #000; height: 10px" /> |
|.g-bg-white | `#fff` | <div style="background: #fff; height: 10px" /> |
|.g-bg-444 | `#444` | <div style="background: #444; height: 10px" /> |
|.g-bg-67 | `#676767` | <div style="background: #676767; height: 10px" /> |
|.g-bg-f2 | `#f2f2f2` | <div style="background: #f2f2f2; height: 10px" /> |
|.g-bg-f8 | `#f8f8f8` | <div style="background: #f8f8f8; height: 10px" /> |
|.g-bg-ef | `#efefef` | <div style="background: #efefef; height: 10px" /> |
|.g-bg-cd | `#cdcdcd` | <div style="background: #cdcdcd; height: 10px" /> |
|.g-bg-e8 | `#e8e8e8` | <div style="background: #e8e8e8; height: 10px" /> |
|.g-bg-d9 | `#d9d9d9` | <div style="background: #d9d9d9; height: 10px" /> |
|.g-bg-f4 | `#f4f4f4` | <div style="background: #f4f4f4; height: 10px" /> |
|.g-bg-f9 | `#f9f9f9` | <div style="background: #f9f9f9; height: 10px" /> |
|.g-bg-000 | `#000000` | <div style="background: #000000; height: 10px" /> |
|.g-bg-333 | `#333333` | <div style="background: #333333; height: 10px" /> |
|.g-bg-51 | `#515151` | <div style="background: #515151; height: 10px" /> |
|.g-bg-666 | `#666666` | <div style="background: #666666; height: 10px" /> |
|.g-bg-999 | `#999999` | <div style="background: #999999; height: 10px" /> |
|.g-bg-aaa | `#aaaaaa` | <div style="background: #aaaaaa; height: 10px" /> |
|.g-bg-bbb | `#bbbbbb` | <div style="background: #bbbbbb; height: 10px" /> |
|.g-bg-bd | `#bdbdbd` | <div style="background: #bdbdbd; height: 10px" /> |
|.g-bg-info | `#0177de` | <div style="background: #0177de; height: 10px" /> |
|.g-bg-success | `#00a854` | <div style="background: #00a854; height: 10px" /> |
|.g-bg-error | `#f04134` | <div style="background: #f04134; height: 10px" /> |
|.g-bg-warn | `#ffbf00` | <div style="background: #ffbf00; height: 10px" /> |

> font-size g-fs-(字号)

| class | 备注 |
|:------|:-------|
|.g-fs-10| `font-size: 10px` |
|.g-fs-12| `font-size: 12px` |
|.g-fs-12| `font-size: 13px` |
|.g-fs-14| `font-size: 14px` |
|.g-fs-16| `font-size: 16px` |
|.g-fs-18| `font-size: 18px` |
|.g-fs-20| `font-size: 20px` |
|.g-fs-22| `font-size: 22px` |
|.g-fs-24| `font-size: 24px` |
|.g-fs-26| `font-size: 26px` |
|.g-fs-28| `font-size: 28px` |
|.g-fs-30| `font-size: 30px` |
|.g-fs-32| `font-size: 32px` |
|.g-fs-34| `font-size: 34px` |
|.g-fs-36| `font-size: 36px` |
|.g-fs-38| `font-size: 38px` |
|.g-fs-40| `font-size: 40px` |
|.g-fs-48| `font-size: 48px` |
|.g-fs-50| `font-size: 50px` |
|.g-fs-60| `font-size: 60px` |
|.g-fs-70| `font-size: 70px` |
|.g-fs-80| `font-size: 80px` |
|.g-fs-90| `font-size: 90px` |
|.g-fs-100| `font-size: 100px` |

> line-height g-lh-(值) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-lh-16| `line-height: 16px` |
|.g-lh-18 | `line-height: 18px` |
|.g-lh-20 | `line-height: 20px` |
|.g-lh-22 | `line-height: 22px` |
|.g-lh-24 | `line-height: 24px` |
|.g-lh-26 | `line-height: 26px` |
|.g-lh-28 | `line-height: 28px` |
|.g-lh-30 | `line-height: 30px` |
|.g-lh-32 | `line-height: 32px` |
|.g-lh-34 | `line-height: 34px` |
|.g-lh-36 | `line-height: 36px` |
|.g-lh-38 | `line-height: 38px` |
|.g-lh-40 | `line-height: 40px` |
|.g-lh-42 | `line-height: 42px` |
|.g-lh-44 | `line-height: 44px` |
|.g-lh-60 | `line-height: 60px` |
|.g-lh-72 | `line-height: 72px` |
|.g-lh-80 | `line-height: 80px` |
|.g-lh-88 | `line-height: 88px` |
|.g-lh-120 | `line-height: 120px` |

> padding g-pd-(方向)?-(值/变量) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-pd-5| `padding: 5px` |
|.g-pd-8| `padding: 8px` |
|.g-pd-10| `padding: 10px` |
|.g-pd-12| `padding: 12px` |
|.g-pd-13| `padding: 13px` |
|.g-pd-15| `padding: 15px` |
|.g-pd-16| `padding: 16px` |
|.g-pd-18| `padding: 18px` |
|.g-pd-20| `padding: 20px` |
|.g-pd-21| `padding: 21px` |
|.g-pd-24| `padding: 24px` |
|.g-pd-25| `padding: 25px` |
|.g-pd-30| `padding: 30px` |
|.g-pd-32| `padding: 32px` |
|.g-pd-48| `padding: 48px` |
|.g-pd-56| `padding: 56px` |
|.g-pd-tb-5| `padding-top: 5px; padding-bottom: 5px` |
|.g-pd-tb-8| `padding-top: 8px; padding-bottom: 8px` |
|.g-pd-tb-10| `padding-top: 10px; padding-bottom: 10px` |
|.g-pd-tb-12| `padding-top: 12px; padding-bottom: 12px` |
|.g-pd-tb-13| `padding-top: 13px; padding-bottom: 13px` |
|.g-pd-tb-15| `padding-top: 15px; padding-bottom: 15px` |
|.g-pd-tb-16| `padding-top: 16px; padding-bottom: 16px` |
|.g-pd-tb-18| `padding-top: 18px; padding-bottom: 18px` |
|.g-pd-tb-20| `padding-top: 20px; padding-bottom: 20px` |
|.g-pd-tb-21| `padding-top: 21px; padding-bottom: 21px` |
|.g-pd-tb-24| `padding-top: 24px; padding-bottom: 24px` |
|.g-pd-tb-25| `padding-top: 25px; padding-bottom: 25px` |
|.g-pd-tb-30| `padding-top: 30px; padding-bottom: 30px` |
|.g-pd-tb-32| `padding-top: 32px; padding-bottom: 32px` |
|.g-pd-tb-48| `padding-top: 48px; padding-bottom: 48px` |
|.g-pd-tb-56| `padding-top: 56px; padding-bottom: 56px` |
|.g-pd-lr-5 | `padding-left: 5px; padding-right: 5px`|
|.g-pd-lr-8 | `padding-left: 8px; padding-right: 8px`|
|.g-pd-lr-10 | `padding-left: 10px; padding-right: 10px`|
|.g-pd-lr-13 | `padding-left: 13px; padding-right: 13px`|
|.g-pd-lr-15 | `padding-left: 15px; padding-right: 15px`|
|.g-pd-lr-16 | `padding-left: 16px; padding-right: 16px`|
|.g-pd-lr-18 | `padding-left: 18px; padding-right: 18px`|
|.g-pd-lr-20 | `padding-left: 20px; padding-right: 20px`|
|.g-pd-lr-21 | `padding-left: 21px; padding-right: 21px`|
|.g-pd-lr-24 | `padding-left: 24px; padding-right: 24px`|
|.g-pd-lr-25 | `padding-left: 25px; padding-right: 25px`|
|.g-pd-lr-30 | `padding-left: 30px; padding-right: 30px`|
|.g-pd-lr-32 | `padding-left: 32px; padding-right: 32px`|
|.g-pd-lr-48 | `padding-left: 48px; padding-right: 48px`|
|.g-pd-lr-56 | `padding-left: 56px; padding-right: 56px`|
|.g-pd-t-5| `padding-top: 5px` |
|.g-pd-t-8| `padding-top: 8px` |
|.g-pd-t-10| `padding-top: 10px` |
|.g-pd-t-12| `padding-top: 12px` |
|.g-pd-t-13| `padding-top: 13px` |
|.g-pd-t-15| `padding-top: 15px` |
|.g-pd-t-16| `padding-top: 16px` |
|.g-pd-t-18| `padding-top: 18px` |
|.g-pd-t-20| `padding-top: 20px` |
|.g-pd-t-21| `padding-top: 21px` |
|.g-pd-t-24| `padding-top: 24px` |
|.g-pd-t-25| `padding-top: 25px` |
|.g-pd-t-30| `padding-top: 30px` |
|.g-pd-t-32| `padding-top: 32px` |
|.g-pd-t-48| `padding-top: 48px` |
|.g-pd-t-56| `padding-top: 56px` |
|.g-pd-l-5| `padding-left: 5px` |
|.g-pd-l-8| `padding-left: 8px` |
|.g-pd-l-10| `padding-left: 10px` |
|.g-pd-l-12| `padding-left: 12px` |
|.g-pd-l-13| `padding-left: 13px` |
|.g-pd-l-15| `padding-left: 15px` |
|.g-pd-l-16| `padding-left: 16px` |
|.g-pd-l-18| `padding-left: 18px` |
|.g-pd-l-20| `padding-left: 20px` |
|.g-pd-l-21| `padding-left: 21px` |
|.g-pd-l-24| `padding-left: 24px` |
|.g-pd-l-25| `padding-left: 25px` |
|.g-pd-l-30| `padding-left: 30px` |
|.g-pd-l-32| `padding-left: 32px` |
|.g-pd-l-48| `padding-left: 48px` |
|.g-pd-l-56| `padding-left: 56px` |
|.g-pd-b-5| `padding-bottom: 5px` |
|.g-pd-b-8| `padding-bottom: 8px` |
|.g-pd-b-10| `padding-bottom: 10px` |
|.g-pd-b-12| `padding-bottom: 12px` |
|.g-pd-b-13| `padding-bottom: 13px` |
|.g-pd-b-15| `padding-bottom: 15px` |
|.g-pd-b-16| `padding-bottom: 16px` |
|.g-pd-b-18| `padding-bottom: 18px` |
|.g-pd-b-20| `padding-bottom: 20px` |
|.g-pd-b-21| `padding-bottom: 21px` |
|.g-pd-b-24| `padding-bottom: 24px` |
|.g-pd-b-25| `padding-bottom: 25px` |
|.g-pd-b-30| `padding-bottom: 30px` |
|.g-pd-b-32| `padding-bottom: 32px` |
|.g-pd-b-48| `padding-bottom: 48px` |
|.g-pd-b-56| `padding-bottom: 56px` |
|.g-pd-r-5| `padding-right: 5px` |
|.g-pd-r-8| `padding-right: 8px` |
|.g-pd-r-10| `padding-right: 10px` |
|.g-pd-r-12| `padding-right: 12px` |
|.g-pd-r-13| `padding-right: 13px` |
|.g-pd-r-15| `padding-right: 15px` |
|.g-pd-r-16| `padding-right: 16px` |
|.g-pd-r-18| `padding-right: 18px` |
|.g-pd-r-20| `padding-right: 20px` |
|.g-pd-r-21| `padding-right: 21px` |
|.g-pd-r-24| `padding-right: 24px` |
|.g-pd-r-25| `padding-right: 25px` |
|.g-pd-r-30| `padding-right: 30px` |
|.g-pd-r-32| `padding-right: 32px` |
|.g-pd-r-48| `padding-right: 48px` |
|.g-pd-r-56| `padding-right: 56px` |

> margin g-m-(方向)?-(值/变量) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-m-5| `margin: 5px` |
|.g-m-8| `margin: 8px` |
|.g-m-10| `margin: 10px` |
|.g-m-12| `margin: 12px` |
|.g-m-13| `margin: 13px` |
|.g-m-15| `margin: 15px` |
|.g-m-16| `margin: 16px` |
|.g-m-18| `margin: 18px` |
|.g-m-20| `margin: 20px` |
|.g-m-21| `margin: 21px` |
|.g-m-24| `margin: 24px` |
|.g-m-25| `margin: 25px` |
|.g-m-30| `margin: 30px` |
|.g-m-32| `margin: 32px` |
|.g-m-48| `margin: 48px` |
|.g-m-56| `margin: 56px` |
|.g-m-tb-5| `margin-top: 5px; margin-bottom: 5px` |
|.g-m-tb-8| `margin-top: 8px; margin-bottom: 8px` |
|.g-m-tb-10| `margin-top: 10px; margin-bottom: 10px` |
|.g-m-tb-12| `margin-top: 12px; margin-bottom: 12px` |
|.g-m-tb-13| `margin-top: 13px; margin-bottom: 13px` |
|.g-m-tb-15| `margin-top: 15px; margin-bottom: 15px` |
|.g-m-tb-16| `margin-top: 16px; margin-bottom: 16px` |
|.g-m-tb-18| `margin-top: 18px; margin-bottom: 18px` |
|.g-m-tb-20| `margin-top: 20px; margin-bottom: 20px` |
|.g-m-tb-21| `margin-top: 21px; margin-bottom: 21px` |
|.g-m-tb-24| `margin-top: 24px; margin-bottom: 24px` |
|.g-m-tb-25| `margin-top: 25px; margin-bottom: 25px` |
|.g-m-tb-30| `margin-top: 30px; margin-bottom: 30px` |
|.g-m-tb-32| `margin-top: 32px; margin-bottom: 32px` |
|.g-m-tb-48| `margin-top: 48px; margin-bottom: 48px` |
|.g-m-tb-56| `margin-top: 56px; margin-bottom: 56px` |
|.g-m-lr-5 | `margin-left: 5px; margin-right: 5px`|
|.g-m-lr-8 | `margin-left: 8px; margin-right: 8px`|
|.g-m-lr-10 | `margin-left: 10px; margin-right: 10px`|
|.g-m-lr-13 | `margin-left: 13px; margin-right: 13px`|
|.g-m-lr-15 | `margin-left: 15px; margin-right: 15px`|
|.g-m-lr-16 | `margin-left: 16px; margin-right: 16px`|
|.g-m-lr-18 | `margin-left: 18px; margin-right: 18px`|
|.g-m-lr-20 | `margin-left: 20px; margin-right: 20px`|
|.g-m-lr-21 | `margin-left: 21px; margin-right: 21px`|
|.g-m-lr-24 | `margin-left: 24px; margin-right: 24px`|
|.g-m-lr-25 | `margin-left: 25px; margin-right: 25px`|
|.g-m-lr-30 | `margin-left: 30px; margin-right: 30px`|
|.g-m-lr-32 | `margin-left: 32px; margin-right: 32px`|
|.g-m-lr-48 | `margin-left: 48px; margin-right: 48px`|
|.g-m-lr-56 | `margin-left: 56px; margin-right: 56px`|
|.g-m-t-5| `margin-top: 5px` |
|.g-m-t-8| `margin-top: 8px` |
|.g-m-t-10| `margin-top: 10px` |
|.g-m-t-12| `margin-top: 12px` |
|.g-m-t-13| `margin-top: 13px` |
|.g-m-t-15| `margin-top: 15px` |
|.g-m-t-16| `margin-top: 16px` |
|.g-m-t-18| `margin-top: 18px` |
|.g-m-t-20| `margin-top: 20px` |
|.g-m-t-21| `margin-top: 21px` |
|.g-m-t-24| `margin-top: 24px` |
|.g-m-t-25| `margin-top: 25px` |
|.g-m-t-30| `margin-top: 30px` |
|.g-m-t-32| `margin-top: 32px` |
|.g-m-t-48| `margin-top: 48px` |
|.g-m-t-56| `margin-top: 56px` |
|.g-m-l-5| `margin-left: 5px` |
|.g-m-l-8| `margin-left: 8px` |
|.g-m-l-10| `margin-left: 10px` |
|.g-m-l-12| `margin-left: 12px` |
|.g-m-l-13| `margin-left: 13px` |
|.g-m-l-15| `margin-left: 15px` |
|.g-m-l-16| `margin-left: 16px` |
|.g-m-l-18| `margin-left: 18px` |
|.g-m-l-20| `margin-left: 20px` |
|.g-m-l-21| `margin-left: 21px` |
|.g-m-l-24| `margin-left: 24px` |
|.g-m-l-25| `margin-left: 25px` |
|.g-m-l-30| `margin-left: 30px` |
|.g-m-l-32| `margin-left: 32px` |
|.g-m-l-48| `margin-left: 48px` |
|.g-m-l-56| `margin-left: 56px` |
|.g-m-b-5| `margin-bottom: 5px` |
|.g-m-b-8| `margin-bottom: 8px` |
|.g-m-b-10| `margin-bottom: 10px` |
|.g-m-b-12| `margin-bottom: 12px` |
|.g-m-b-13| `margin-bottom: 13px` |
|.g-m-b-15| `margin-bottom: 15px` |
|.g-m-b-16| `margin-bottom: 16px` |
|.g-m-b-18| `margin-bottom: 18px` |
|.g-m-b-20| `margin-bottom: 20px` |
|.g-m-b-21| `margin-bottom: 21px` |
|.g-m-b-24| `margin-bottom: 24px` |
|.g-m-b-25| `margin-bottom: 25px` |
|.g-m-b-30| `margin-bottom: 30px` |
|.g-m-b-32| `margin-bottom: 32px` |
|.g-m-b-48| `margin-bottom: 48px` |
|.g-m-b-56| `margin-bottom: 56px` |
|.g-m-r-5| `margin-right: 5px` |
|.g-m-r-8| `margin-right: 8px` |
|.g-m-r-10| `margin-right: 10px` |
|.g-m-r-12| `margin-right: 12px` |
|.g-m-r-13| `margin-right: 13px` |
|.g-m-r-15| `margin-right: 15px` |
|.g-m-r-16| `margin-right: 16px` |
|.g-m-r-18| `margin-right: 18px` |
|.g-m-r-20| `margin-right: 20px` |
|.g-m-r-21| `margin-right: 21px` |
|.g-m-r-24| `margin-right: 24px` |
|.g-m-r-25| `margin-right: 25px` |
|.g-m-r-30| `margin-right: 30px` |
|.g-m-r-32| `margin-right: 32px` |
|.g-m-r-48| `margin-right: 48px` |
|.g-m-r-56| `margin-right: 56px` |

> img大小 g-img-(值) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-img-24| 长宽`24px` |
|.g-img-32| 长宽`32px` |
|.g-img-40| 长宽`40px` |
|.g-img-56| 长宽`56px` |
|.g-img-64| 长宽`64px` |
|.g-imgc-24| 圆形，长宽`24px` |
|.g-imgc-32| 圆形，长宽`32px` |
|.g-imgc-40| 圆形，长宽`40px` |
|.g-imgc-56| 圆形，长宽`56px` |
|.g-imgc-64| 圆形，长宽`64px` |
|.g-imgr-24| 圆角4px，长宽`24px` |
|.g-imgr-32| 圆角4px，长宽`32px` |
|.g-imgr-40| 圆角4px，长宽`40px` |
|.g-imgr-56| 圆角4px，长宽`56px` |
|.g-imgr-64| 圆角4px，长宽`64px` |


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
|.g-b| 1像素边框 | 
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

> 其他

| class  | 备注  |
|:-------------|:---------------| 
|.g-h-full| height: 100vh; |
|.g-br-circle| border-radius: 100%; |
|.g-br-sem| 默认圆角 (8px) |
|.g-bs| 边框阴影|
|.g-bs-t| 顶部阴影|
|.g-disabled| 禁用事件 |
|.g-noanimate| 禁用动画|
|.g-show, .g-block, .g-dp-b| `display: block` |
|.g-dp-n, .g-hide, .g-none| `displacy: none` |
|.g-dp-i, .g-inline| `display: inline` |
|.g-dp-ib, .g-inline-block| `display: inline-block` |
|.g-pointer| `cursor: pointer` |
|.g-divide| 分割线 |
|.g-dot| 5像素的点 |
|.g-of-h| `overflow: hidden` |
|.g-oneline| 单行省略 |
|.g-twoline| 两行省略 |
|.g-one-lh| 行高32px, 高度64px |
|.g-two-lh| 行高32px, 高度32px |
|.g-operation| 点击文字按钮样式 |
|.g-disabled| 无点击事件 |


*  <h5 id="5.7"> 5.7动画 </h5>

| class  | 备注  |
|:-------------|:---------------| 
|.g-popup-down| 向下弹出 height：50% |
|.g-popup-up| 向上弹出 height：50% |
|.g-popup-left| 向左弹出 height：50% |
|.g-popup-right| 向右弹出 height：50% |
|.g-bg-mask| 遮罩层|
|.g-modal| 居中弹窗 |


























<!--  以下内容无视  -->
[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg
[changelog-url]: CHANGELOG.md

[npm-image]: https://img.shields.io/npm/v/@wya/sass.svg
[npm-url]: https://www.npmjs.com/package/@wya/sass