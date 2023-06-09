//asignment 17-20
//q1 Declare and initialize an empty multidimensional array.
var myArray=[[],[],[]];
//q2 declare and initialize a multidimensional array 
//representing the following matrix:

var myArray=[[0,1,2,3],
[1,0,1,2],
[2,1,0,1],
];
let subarray=myArray[0];
console.log(subarray);
let subarray1=myArray[1];
console.log(subarray1);
let subarray2=myArray[2];
console.log(subarray2);
//q3. Write a program to print numeric counting from 1 to 10.
for (var i=1; i<11;i++){
console.log(i);
}
//q4. Write a program to print multiplication table of.......
var question=prompt("enter a number to show its multiplication table");
var b=prompt("enter length of multiplication table");
for (var i=0;i<=b;i++){
    var result=(i*question);
    console.log(question,"*",i,"=",result);
}
//q5. Write a program to print items of the following array 
//using for loop............
var fruits =["apple","banana","mango","orange","strawberry"];
console.log(fruits);
    for(var i=0;i<=fruits.length;i++) {
        console.log("Element at index",i,"is",fruits[i]);
    }
    //q6 Generate the following series in your browser. See..
    document.write("Counting","<br>");
    for (var i=1;i<=15;i++){
        
        document.write(i,",");
    }
    document.write("<br>","Revers counting","<br>");
    for (var i=10;i>=1;i--){
        document.write(i,",");
    }
    document.write("<br>","Even","<br>");
    for (var i=0;i<=10;i++){
        var Even=(i*2);
        document.write(Even,",");
    }
    document.write("<br>","odd","<br>");
    for (var i=0;i<10;i++){
        var odd=(2*i)+1;
        
        document.write(odd,",");
    }
    document.write("<br>","Series","<br>");
    for (var i=1;i<=10;i++){
        var series=(i*2);
        document.write(series,"k, ");
    }
    //Q7 
var a = ["cake","apple pie","cookies","chips","patties"];
var order = prompt("Welcome to ABC bakery sir/madam what do you want to order");
var b=a.includes(order);
if (b==true){
    console.log(order,"is avalable in our bakery");
}
else{
    console.log("sorry", order, "is not available");
}
//q8
var A=[24,53,78,91,12];
var B=A.sort();
console.log("largest number is" ,B[4]);


//q9
var a=[24,53,78,91,12];
var b=a.sort();
console.log("smallest number is" ,b[0]);

//q10
for (var i=0;i<=100;i++){
    if(i%5==0){console.log(i);}
}

//for(var a = 1; a<=100;a++){
//if(a%5==0){console.log(a);}
//}
