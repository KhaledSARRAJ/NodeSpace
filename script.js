// const getTodos = (url, callback)=>{
//     const request = new XMLHttpRequest();
//  request.addEventListener('readystatechange', ()=>{
//      // console.log(request);
//      if(request.readyState === 4 && request.status===200){
//          const data = JSON.parse(request.responseText);
// callback(undefined,data);
//     }else if(request.readyState===4){
// callback('Could not fetch data',undefined);
//      }
//  });
 
//  request.open('GET', url);
//  request.send(); 
// }


// getTodos('https://jsonplaceholder.typicode.com/todos',(err, data)=>{
// console.log(data);
// getTodos('https://jsonplaceholder.typicode.com/todos/'+data[0].userId,(err, data)=>{
//     console.log(data);
//     getTodos('https://jsonplaceholder.typicode.com/todos/'+data.userId+'/comments',(err, data)=>{

//         console.log(data);

//     });

// });

// });


//promise exemple
const getSomething = ()=>{
    return new Promise((resolve, reject)=>{
//network call
//resolve('Data received');
reject('Data not availlable')
    });
}

getSomething().then((data)=> console.log(data), (err)=>console.log(err));




