document.forms.form.addEventListener("submit",function(e){
    e.preventDefault();
    })

class trongdo{
    
}


const loadscript=(src,callback)=>{
    const script=document.createElement("script");
    script.src=src;
    script.onload=()=>callback(script);
    document.head.append(script);
}
laodscript("other.js",(script)=>{
    console.log("load script ok");
    console.log(sum(1,2));
})


