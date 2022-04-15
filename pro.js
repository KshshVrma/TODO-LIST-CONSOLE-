//let var=prompt("enter next task in the list");
console.log("enter 1 to enter a task in the list 2 to delete an item in the list(0) to quit");
//let this=var.toLowerCase();let count=0;
const arr=["study"];let thi=5;

let ths="";
while(thi!=0){
thi=prompt("do you want to add or deleter a task (0/1/2/3)");
if(thi==1){
 ths=prompt("enter next task in the list");
 console.log("*****************");
    arr.push(ths);
    console.log(`${ths} added to the list`);
}
else if(thi==2){
let va=prompt("enter the index you want to delete");
console.log(`${arr[va]} task deleted`);
arr.splice(va,1);
}
else if(thi==3){
    console.log("*****************");
    for(let i =0;i<arr.length;i++){
        console.log(`${i}:${arr[i]}`);
       
    }
    console.log("****************")
}

}