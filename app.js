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

// ********************************* EXAMPLE ****************************************
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     },delay)
// }

// delayedColorChange('red',1000, ()=>{
//     delayedColorChange('orange',1000, ()=>{
//          delayedColorChange('yellow',1000, ()=>{
//              delayedColorChange('green',1000, ()=>{
//                  delayedColorChange('blue',1000, ()=>{
//                      delayedColorChange('indigo',1000, ()=>{
//                         delayedColorChange('violet',1000, ()=>{
        
//                         })
//                     })
        
//                 })
//             })
//         })
//     })
// })

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

delayedColorChange('red',2000)
    .then(() => delayedColorChange('orange',2000))
    .then(() => delayedColorChange('yellow',2000))
    .then(() => delayedColorChange('green',2000))
    .then(() => delayedColorChange('blue',2000))
    .then(() => delayedColorChange('indigo',2000))
    .then(() => delayedColorChange('violet',2000))
    .catch((err) => console.error(err))