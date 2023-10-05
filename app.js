const api ='https://restcountries.com/v3.1/all'

const getData=(resource)=>{

    return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest()
        request.addEventListener("readystatechange",()=>{
            if (request.readyState==4 && request.status==200) {
                const data =JSON.parse(request.responseText)
                resolve(data)
                
            }else if (request.readyState==4) {
                reject('no page')
                
            }
        })

       


        request.open("GET",resource)
        request.send()
    })
}
getData(api)
.then((data)=>{
    console.log(data);
})
.catch((er)=>{
    console.log(er);
})
// setTimeout(() => {
//     console.log('///////////////////////////////////');
    
// }, 1000);

fetch(api)
.then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})