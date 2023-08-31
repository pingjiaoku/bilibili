# UnoCSS

默认使用UnoCSS预设，继承了WindCSS 
[UnoCSS预设](https://github.com/unocss/unocss/blob/main/packages/preset-mini/src/_rules)
[WindCSS预设](https://github.com/unocss/unocss/tree/main/packages/preset-wind/src/rules)

> 文档中的出现的特殊符号具有以下含义
> | 符号  | 含义           |
> | ----- | -------------- |
> | *     | 匹配0到无限次  |
> | +     | 匹配1到无限次  |
> | ?     | 匹配0或1次     |
> | |     | 或者           |
> | num   | 数字           |
> | str   | 字符           |
> | rate  | 百分比         |

## size
| class                                       | 描述         |
| ------------------------------------------- | ------------ |
| w-\${num}(%)?, w-full, w-screen             | 宽度         |
| min-w-\${num \| rate}, max-w-${num \| rate} | 最大最小宽度 |
> 高度同上

## space
| class                                          | 描述    |
| ---------------------------------------------- | ------- |
| (p \| px \| py \| pl \| pr \| pt \| pb)-${num} | padding |
| (m \| mx \| my \| ml \| mr \| mt \| mb)-${num} | margin  |

## animate
 [animate_style](https://github.com/unocss/unocss/blob/main/packages/preset-wind/src/theme.ts) 
| class                          | 描述                             |
| ------------------------------ | -------------------------------- |
| animate-${name}                | 动画样式，参考上方链接           |
| animate-duration-${num \| str} | 持续时间 num默认毫秒             |
| animate-delay-${num \| str}    | 延迟时间 num默认毫秒             |
| animate-iteration-${num}       | 重复次数                         |
| animate-running                | 开始动画，无interation时无限重复 |
| animate-paused                 | 暂停动画                         |
| animate-none                   | 取消动画                         |

## transition
| class                                | 描述                                                 | eg                          |
| ------------------------------------ | ---------------------------------------------------- | --------------------------- |
| transition-\${props}-${num}          | props: 过渡的属性，多个用逗号分隔；num：过度持续时间 | transition-color,width-1000 |
| transition-${num}                    | 持续时间 num为毫秒                                   |
| (transition-)?property-${props}      | 过渡的属性，多个用逗号分隔                           |
| (transition-)?duration-${num \| str} | 持续时间 num默认毫秒                                 |
| (transition-)?delay-${num \| str}    | 延迟时间 num默认毫秒                                 |
| transition-none                      | 取消过度动画                                         |
> props可能的值： all, color, background-color, border-color, outline-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;

## transform
| class                                     | 描述                               |
| ----------------------------------------- | ---------------------------------- |
| translate-(x \| y)?-${num \| str \| rate} | 指定方向上平移，默认为 `y=-x` 轴上 |
| rotate-(x \| y \| z)?-${num}              | 指定方向上旋转，默认为 z 轴上      |
| skew-(x \| y)?-${num}                     | 指定方向上倾斜，默认为 `y=-x` 轴上 |
| scale-(x \| y \| z)?-${num \| rate}       | 指定方向上缩放，默认全方位         |

## text
| class               | 描述         |
| ------------------- | ------------ |
| text-${color}       | 颜色         |
| text-${num}         | 大小         |
| font-bold           | 加粗         |
| font-italic         | 倾斜         |
| underline           | 下划线       |
| line-through        | 删除线       |
| decoration-${num}   | 线粗         |
| decoration-${color} | 线颜色       |
| text-wrap           | 文本可换行   |
| text-nowrap         | 文本不可换行 |
| line-clamp-${num}   | 省略行       |

## shadow 
| class             | 描述               |
| ----------------- | ------------------ |
| shadow(-${size})? | 阴影大小           |
| shadow-${color}   | 阴影颜色           |
| shadow-inset      | 内阴影             |
| shadow-op-${num}  | 阴影透明度，0到100 |
> size可能的值： none, DEFAULT, sm, md, lg, xl, 2xl, inner

## border
| class           | 描述     |
| --------------- | -------- |
| border-${num}   | 边框大小 |
| border-${type}  | 边框样式 |
| border-${color} | 边框颜色 |
> type可能的值： solid, dashed, dotted, double, hidden, none, groove, ridge, inset, outset, inherit, initial, revert, revert-layer, unset,