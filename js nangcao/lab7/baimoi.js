//hoisting hoat dong voi function va var
// cac khai bao ham function va bien var(khai báo) duoc di chuyen len khối mã
// template string(template literal)-``
// cho phép nhúng trực tiếp các giá trị vào trong chuỗi
// es5
// var name="ba";
// var msg="hello, "+name+".welcome to my website";
// var message="hello, ".concat(name).concat(". wlecome to my website");
// es6 
// let name ="ba";
// let msg='hello,${name}.welcom to my website';

///arrow function
//thay thế từ khóa function thành => ở giữa phần tham số (parametter) và function boy

let isoddNumber=(number)=>{
    if(number%2==1){
        return true;

    }
    else return false;
}
console.log(isoddNumber(10));

let maxoftwo=(a,b)=>{
    if(a>b){
        return a;
    }
    else return b;
}
console.log(maxoftwo(10,12));

let dix=(number)=>{
    if(number%3==0){
        if(number%5==0){
            return true;
        }
        else return false;
    }else return false;
}
console.log(dix(150));
// k có this. giá trị của this sẽ được tham chiếu ra bên ngoài còn với arrow funtion sẽ khồng truy câp được
//được sử dụng trong các phương thưc yêu cầu hàm callback
// sưr dụng để pas thí cho mã bên trong
// khong sử dụng được các phương thưc như bind, apply,call



let filterRange=(arr,a,b)=>{
   const result=arr.filter((number)=>
   {
    return a<=number&& number<=b;
   }
   );
   return result;
}
console.log(filterRange([1,3,8,9,4],2,6));

//khi ma arrow funtion chỉ có 1 câu lệnh trả về 1 giá trị hoặc biểu thức thì ta có thể bỏ qua {} và từ khóa return

const filterRange1=(arr,a,b)=>arr.filter((number)=> a<=number&& number<=b);
console.log(filterRange([1,3,8,9,4],2,6));

const getname=(users)=>users.map((user)=>user.name);

//ternary operator-?
// dạng rút gọn dùng để gán giá trị cho 1 biến theo điều kiện nhất định
let isvalid=condition?true:false;
let number=10;
let chanle=number%2==1 ?true:false;
console.log(chanle)

vd2:

const result=point=>point<4
        ?"f":point<5.5
        ?"D":point<7
        ?"c":point<8.5
        ?"B":"A";
console.log(result(9))
//destructuring
//cho phép phân rã nhanh các giá trị bên trong 1 collection(aray,object) thành các biến riêng biệt
ex:
var a=arr[0];
var b=arr[1];
var obj={
    name:"trong",
    age:22,
    job:"student"
};
var name=obj.name;
var age=obj.age;
es6:
const arr=[1,2,3,4,5];
const [a,b]=arr//gán 2 phần tử ở vị trí index 0,1 cho a và b
const obj={
    name: "trong",
    age:22,
    job:'student'
};
//phân tách sử dụng cú pháp {}
//chú ý sử dụng đúng tên thuộc tính. nếu k đung thuộc tính trả về là undefind
const{name,age}=obj;

const obj={
    name: "trong",
    age:22,
    job:'student'
};
//phân tách object trong khai báo hàm
const getName=({name})=>name;
getName(obj);
// spread operator-...
//cho phép tách ròi các giá TRỊ TRONG 1 colection ra thành các giá trị riêng biệt
//thường được sử dụng để sao chép nhanh 1 mảng, object, hoặc là tách các giá trị trong 1 colection thành các tham số riêng biệt khi truyền vaò hàm

const arr2=[1,2,3,4,5];
const clone=arr2.slice();

es6:
const arrs1=[1,2,3,4,5];
const arrs2=[10,20,30,40];
const clonez=[...arrs1];
const clonezz=[...arrs1,...arrs2];
//trong obj
const cloneff={...obj};

ex:
const sum=(a,b)=>a+b;
const arrn=[1,2];
sum(...arrn);
//rest parameters
es5
const sumn=function(a,b){
//arguments- chứa tất cả các tham số được truyền vào hàm(bao gồm cả a và b)
let total=a+b;
for (let index=2;index<arguments;index++)
{

}
}

es6:
const sumqw=(a,b, ...others)=>{
    let total=a+b;
    for(let index of others) total+=value;
    return total;
};
console.log(sumqw(1,2,3,4,5,6))


function hello(name="stranger",age=0,job="teacher"){
    console.log(`hello${name}`);
}

hello("trong");
hello();