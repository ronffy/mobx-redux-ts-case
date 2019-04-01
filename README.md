
## mobx-redux-ts-case
在 typescript 环境下，分别用 mobx、redux 实现商场购物的案例

### 从一个需求开始

需求简单描述：
一家书店有一些书籍，展示在页面上。
用户可以选购书籍到购物车，在购物车里可以增减商品
且某些特定商品满足特定条件时可以享受优惠活动

商店书籍信息：
react书籍：5本 单价11元
mobx书籍：5本 单价12元
redux书籍：5本 单价13元

优惠活动信息：
react + mobx 满 40元可优惠3元


### 使用 mobx 遇到的问题，临时记录

1. 什么时候需要用 observer 包住组件，不是太确定



2. 为什么 mobx devtools 开始是空白

因为 mobx 是多 store , 开始 mobx 是不知道该显示哪个 store 的，
所以 mobx devtools 采用哪个 store 改变，打印哪个 store 的日志的方式
