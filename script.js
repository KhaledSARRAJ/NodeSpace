const getTodos = ( url ) => {

    return new Promise( (resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request);
        
            if(request.readyState === 4 && request.status === 200) {
    
                const data = JSON.parse(request.responseText);
    
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Could not fectch data');
            }
        });
        
        request.open('GET', url);
        
        request.send();
    });
}



getTodos('https://jsonplaceholder.typicode.com/todos')
   .then( (data) =>{ 
       console.log(data);
       return getTodos('https://jsonplaceholder.typicode.com/todos/'+data[0].userId);     
    })
    .then( data=> {
        console.log(data);
        return getTodos('https://jsonplaceholder.typicode.com/todos/'+data.userId+'/comments');
    })
    .then( data=> 
        console.log(data))
   .catch( err => console.log(err));












