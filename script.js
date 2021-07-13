const getTodos = (url, callback)=>{
    const request = new XMLHttpRequest();
 request.addEventListener('readystatechange', ()=>{
     // console.log(request);
     if(request.readyState === 4 && request.status===200){
         const data = JSON.parse(request.responseText);
callback(undefined,data[0]);
    }else if(request.readyState===4){
callback('Could not fetch data',undefined);
     }
 });
 
 request.open('GET', url);
 request.send(); 
}


getTodos('https://jsonplaceholder.typicode.com/todos',(err, data)=>{
console.log('Appel du callback');
if(err){
    console.log(err);
}else{
console.log(data);
}
});
