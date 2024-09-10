let timeOutId;
let input = document.getElementById('input');
input.addEventListener('input',debounce)
let h1 = document.getElementById('text');


function debounce () {
if(timeOutId) {
    clearTimeout(timeOutId)
 }
 timeOutId = setTimeout(()=>{
  fetchData(input.value)
 },500)
}


async function fetchData (query) {
const search = new Promise((res,rej)=>{
setTimeout(()=>{
res(`Data fetched Successful for search ${query}`)
},1000)
})

search
.then((data)=>{
 h1.innerHTML = data;
 console.log(data);
 setTimeout(()=>{
 h1.innerHTML = "";
 },2000)
 
}).catch((err)=>{
    console.log(err);
    
})

}

