# CSS 功能拓展
* 嵌套规则、父选择器&、属性嵌套、位符选择器 %

### SassScript
#### 变量 $
#### 运算
* 所有数据类型均支持相等运算 == 或 !=
* 数字的加减乘除、取整等运算 (+, -, *, /, %)，如果必要会在不同单位间转换值
* 注意：除法运算
* 以下三种情况 / 将被视为除法运算符号：<br />
  1. 如果值，或值的一部分，是变量或者函数的返回值<br />
  2. 如果值被圆括号包裹<br />
  3. 如果值是算数表达式的一部分<br />
  4. 如果需要使用变量，同时又要确保 / 不做除法运算而是完整地编译到 CSS 文件中，只需要用 #{} 插值语句将变量包裹。<br />

* 关系运算 <, >, <=, >= 也可用于数字运算
* 颜色值运算
* 字符串运算
* 布尔运算：支持布尔型的 and or 以及 not 运算。

#### 插值语句 #{}
#### 控制指令
* @extend
* @include
* @at-root
* @debug
* @if
* @for
* @each
* @while
* @mixin
* @function

#### SassScript 支持六种主要的数据类型：
* 数字Number（例如 1.2、13、10px）
* 文本字符串Strings，无论是否有引号（例如 "foo"、'bar'、baz）
* 颜色Color（例如 blue、#04a3f9、rgba(255, 0, 0, 0.5)）
* 布尔值Boolean（例如 true、false）
* 空值Null（例如 null）
* 值列表Lists，用空格或逗号分隔（例如 1.5em 1em 0 2em、Helvetica, Arial, sans-serif）
* Maps（扩展）

#### 函数：
- 字符串函数
  * unquote（$string）:删除字符串中的引号；
  * quote（$string）：给字符串添加引号；
  * To-upper-case（$string）：将字符串小写字母转换为大写字母
  * To-lower-case（$string）：将字符串大写字母转换为小写字母
- 数字函数
  * percentage($value)：将不带单位的数转换成百分比值；
  * round($value)：将数值四舍五入，转换成一个最接近的整数；
  * ceil($value)：向上取整；
  * floor($value)：向下取整；
  * abs($value)：取数的绝对值；
  * min($numbers…)：找出几个数值之间的最小值；
  * max($numbers…)：找出几个数值之间的最大值；
  * random(): 获取随机数
- 列表函数
  * length($list)：返回一个列表的长度值;
  * nth($list, $n)：返回一个列表中指定的某个标签值;
  * join($list1, $list2, [$separator])：将两个列给连接在一起，变成一个列表；
  * append($list1, $val, [$separator])：将某个值放在列表的最后；
  * zip($lists…)：将几个列表结合成一个多维的列表；
  * index($list, $value)：返回一个值在列表中的位置值。
  * Introspection函数: 主要用来对值做一个判断
  * type-of($value)：返回一个值的类型;
  * unit($number)：返回一个值的单位;
  * unitless($number)：判断一个值是否带有单位;
  * comparable($number-1, $number-2)：判断两个值是否可以做加、减和合并.

####  三元条件函数
```scss
  if($condition,$if-true,$if-false)；
```

#### Maps的函数
```scss
$map: (
  $key1: value1,
  $key2: value2,
  $key3: value3
)
```
* `map-get($map,$key)`：根据给定的 `key` 值，返回 `map` 中相关的值；
* `map-has-key($map,$key)`：根据给定的 `key` 值判断 `map` 是否有对应的 `value` 值，如果有返回 `true`，否则返回 `false`。
* `map-keys($map)`：返回 `map` 中所有的 `key`。
* `map-values($map)`：返回 `map` 中所有的 `value`。
* `map-merge($map1,$map2)`：将两个 `map` 合并成一个新的 `map`。
* `map-remove($map,$key)`：从 `map` 中删除一个 key，返回一个新 `map`。
* `keywords($args)`：返回一个函数的参数，这个参数可以动态的设置 `key` 和 `value`。

#### 颜色函数
 * `RGB`
 * `HSL`
 * `Opacity`
    

[简单介绍scss](http://note.youdao.com/noteshare?id=3437a54f41d25b9e695786c2db3fa7d0)



