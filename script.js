// fetch api

fetch('https://jsonplaceholder.typicode.com/todos')
  .then (response => {
      return response.json();
  })
  .then( json => {
      console.log('Promise 1: ', json)
      return fetch('https://jsonplaceholder.typicode.com/todos/'+json[0].userId);
  })
  .then (response => {
    console.log('Promise 2: ', response)
    return response.json();
  })
  .then( json => {
    console.log('Promise 3: ', json)
  })
  .catch ( err => console.log(err));