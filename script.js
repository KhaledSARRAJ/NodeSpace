// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', ()=>{
//     // console.log(request);
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send(); 
// function m(a ='titi'){
//     console.log("Hello ",a);

// }
// m("tata");
// m();
// const m =function(){
//     console.log("Hello fonction dans un variable ");
// };
// m();

// const m1 =(a='baba')=>{
//     console.log("Hello fonction fleché",a);
// };
// m1('toto');
// m1();
// const m =(a)=>{
//     return a;
// };
const m =a=> a**2;
console.log(m(2))