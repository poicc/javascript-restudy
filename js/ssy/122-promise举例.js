new Promise((resolve, reject) => {
    resolve()
    console.log('promise')  // 代码1：同步任务，会立即执行
}).then(res => {
    console.log('promise then')  // 代码2：异步任务中的微任务
})

console.log('ssy')  // 代码3：同步任务



const p = new Promise((resolve, reject) => {
    resolve(1) // 代码执行到这里时， promise状态是 fulfilled
    reject(2) // 尝试修改状态为 rejected，是不行的。因为状态执行到上一行时，已经被改变了。
})

p.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})