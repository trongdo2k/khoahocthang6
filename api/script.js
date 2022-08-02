fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response)=>{
        return response.json();
    }
).then(json=>{
    console.log(json);
});
//thu vien ben thu 3
axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
    console.log(response.data[1]);
})


//

const getuser=()=>{
    return axios.get("https://jsonplaceholder.typicode.com/todos");
}
const renderlist=async ()=>{
    try{
        const {data}=await getuser();
        const html= data.map((user) =>{
            return`${user.userId}
            <br/>`;
        }).join("");

        document.querySelector(".body").innerHTML=html;
    }
    catch(err){
        console.log(err)
    }
}

renderlist();
document.querySelector(".body").innerHTML=renderlist();


//cach2:
const createcart=({userId,id})=>{
    const usercard=document.createElement("div");
    usercard.classList.add("body")

    const idCard=document.createElement("div");
    idCard.classList.add("body");
    idCard.textContent=userId;

    const id=document.createElement("div");
    id.classList.add("bodyd");
    id.textContent=id;

    usercard.append(idCard,id)

}