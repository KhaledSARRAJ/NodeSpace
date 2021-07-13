// async : pour dire que c'est asyncrone && wait: pour dire que ca prends de temps

  const getTodos = async (url)=>{
      //cette ligne  "await" pour dire que ca va prendre du gtemps mais qu'on il fini raméne moi la réponse
   const reponse= await fetch(url)
    const datas = await reponse.json();
    console.log('Promise: 1', datas)
    const reponse2 = await fetch(url +'/'+datas[0].userId);
    const data = await reponse2.json();
    console.log('Promise: 2', data);
    const reponse3 = await fetch(url +'/'+datas[0].userId+'/comments');
    const data3 = await reponse3.json();
    console.log('Promise: 3', data3)
  }

  getTodos('https://jsonplaceholder.typicode.com/todos');