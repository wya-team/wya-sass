# 样式输出
* reset

| class  | 备注  |
|:-------------|:---------------|
| .g-reset  | 用户初始化元素的类 |

*  flex

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
|:-------------|:---------------|
|.g-fd-c  |主轴为垂直方向，起点在上| 
|.g-fd-cr| 主轴为垂直方向，起点在下 |
|.g-fw-w |换行，第一行在上方。| 
|.g-fw-wr | 换行，第一行在下方。 |
|.g-jc-fe|右对齐| 
|.g-jc-c|居中| 
|.g-jc-sb|两端对齐, 间隔相等|
|.g-ai-fs|交叉轴的起点对齐| 
|.g-ai-fe|交叉轴的终点对齐|
|.g-ai-c|交叉轴的中点对齐|
|.g-ac-c | 与交叉轴的起点对齐|
|...| |


* layout 

> color  g-c-(颜色／变量) 

| class  | 备注  |
|:-------------|:---------------| 
|.g-c-pink ||
|.g-c-pink-1 ||
|.g-c-deep ||
| ...| |

> bgColor g-bg-(颜色／变量)

| class  | 备注  |
|:-------------|:---------------|
|.g-bg-pink ||
|.g-bg-pink-1 ||
|.g-bg-deep ||
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


*  柵格

| class  | 备注  |
|:-------------|:---------------| 
|.g-row|  | 
|.g-w-(number)| 12>= number >=1 |  
|.g-fw-(number)| 12>= number >=1 float:left;|

*  定位 

| class  | 备注  |
|:-------------|:---------------| 
|.g-fixed| 固定定位 | 
|.g-relative| 绝对定位|  
|.g-absolute| 相对定位|

*  浮动 

| class  | 备注  |
|:-------------|:---------------| 
|.g-clearfix| 清除浮动 | 
|.g-fr | 右浮|  
|.g-fl | 左浮|

*  辅助 

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
|.g-nobreak| 单词不换行|
|.g-tl| 文本居左|
|.g-tr| 文本居右|
|.g-oneline| 一行文字|
|.g-twoline| 两行文字|
|.g-one-lh| 一行文字 限高|
|.g-two-lh|两行文字 限高|

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


*  动画 

| class  | 备注  |
|:-------------|:---------------| 
|.g-bg-mask| 遮罩层|
|.g-popup-down| 向下弹出 height：50% |
|.g-popup-up| 向上弹出 height：50% |
|.g-popup-left| 向左弹出 height：50% |
|.g-popup-right| 向右弹出 height：50% |
|.g-modal| 居中弹窗 |