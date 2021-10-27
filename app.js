// new Promise((resolve, reject) =>{
// resolve();
// })
// Promise {<fulfilled>: undefined}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: undefined


// new Promise((resolve, reject) =>{
// reject();
// })
// Promise {<rejected>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: undefined


// new Promise((resolve, reject) =>{

// })
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

const fakeRequest = (url) =>{
    return new Promise((resolve,reject) =>{
        const rand = Math.random();
        setTimeout(() => {
            if(rand<0.7)
            {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('REQUEST ERROR!');
        },1000)
    })
}
// let req = fakeRequest()
// req
// Promise {<fulfilled>: undefined}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined

fakeRequest('/meow/1')
.then((data) => {
    console.log('DONE WITH REQUEST!');
    console.log("DATA IS:",data)
})
.catch((err) => {
    console.log("OH NO!",err);
})