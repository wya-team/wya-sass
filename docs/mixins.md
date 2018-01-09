# 公共方法

* 缩放比例

`commonScale($value)` `$value` 可带单位， 返回缩放后的值

```scss
.test{
	@include commonScale(3);
}
```
* 宽高 

`commonSize($w,$h:$w)` 带有缩放功能 `$h` 默认等于 `$w`

```scss
.test{
	@include commonSize(100);
}
.test1{
	@include commonSize(100px, 100px);
}
```
* 1px边框的兼容问题

`commonBorder($border: ltbr)`  `$border` 默认四个方位

```scss
.test{
	@include commonBorder(l);
}
```
* 透明度的兼容

`commonOpacity($opacity)`  `$opacity` 透明度:0-1

```scss
.test{
	@include commonOpacity(.3);
}
```
* padding

`commonPadding($t, $r: $t, $b: $t, $l: $r) `

```scss
.test{
	@include commonPadding(10);
}
```
* margin

`commonMargin($t, $r: $t, $b: $t, $l: $r)`

```scss
.test{
	@include commonMargin(10);
}
```
* absolute

`commonAbsolute($direction-val...)` `$direction-val: top, right, bottom, left` 的值

```scss
.test{
	@include commonAbsolute(0,0,0,0);
}
```
* 水平垂直居中

`commonFlexCc` 输出垂直居中的样式

```scss
.test{
	@include commonFlexCc;
}
```
* 渐变色

`commonBgLinear($angle: to bottom, $start: #fff, $end: #000)`

```scss
.test{
	@include commonBgLinear()
}
```
* 单词不换行

`commonNoBreak` 输出单词不换行的样式

```scss
.test{
	@include commonNoBreak;
}
```
* 清除浮动

`commonClearfix` 清除浮动

```scss
.test{
	@include commonClearfix;
}
```
* 限高文字

`commonEllipsis`  一行文字

```scss
.test{
	@include commonEllipsis;
}
```
* 省略文字

`commonTextLine($line)` 显示 `$line` 行

```scss
.test{
	@include commonTextLine(3)
}
```

