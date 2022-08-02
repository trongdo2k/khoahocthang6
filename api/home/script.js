axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
    console.log(response.data[1]);
})

const getuser=()=>{
    return axios.get("https://jsonplaceholder.typicode.com/todos");
}
const renderlist=async ()=>{
    try{
        const {data}=await getuser();
        const html= data.map((user) =>{
            return`<tr>
            <td>${user.userId}</td>
            <td>${user.id}</td>
            <td>${user.title}</td>
            <td>${user.completed}</td>
            </tr>
            
            `;
        }).join("");

        document.querySelector(".body").innerHTML+=html;
    }
    catch(err){
        console.log(err)
    }
}

renderlist();
