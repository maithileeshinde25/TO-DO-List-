
let tasks=[];
function uppdateTask()
{
    document.getElementById("showtasks").innerHTML=tasks.map(
                                                    (task, index)=>`<li>${task}</li> 
                                                    <button class="btn btn-primary" onclick="deleteTask(${index})">Delete</button><br>`).join('')
    }
function addtask()
{
    taskinput=document.getElementById('taskname')
    // console.log(taskinput);
    
    taskelement= taskinput.value
    tasks.push(taskelement);
    taskinput.value=""
    uppdateTask();
  

}
function deleteTask(i){
    tasks.splice(i,1)
    uppdateTask();
}
function cleartask(){
    tasks=[];
    uppdateTask();
}




let marks=[];


function addmarks()
{
    inputmarks=document.getElementById('marks')
   let  mark=Number(inputmarks.value)
    console.log(marks);
    
    marks.push(mark);
    inputmarks.value=""
}
function calculatemarks(){
    if(marks.length>0)
    {
        len=marks.length
        let total=marks.reduce(( sum,mark)=>sum+mark);
        let average=total/len;
        const max = Math.max(...marks);
        const min = Math.min(...marks);
    document.getElementById("marksoutput").innerHTML=`
    Total Marks =${total}<br>
 Average Marks =${average}<br>
  Highest Marks =${max}<br>
  Lowest Marks =${min}<br>`;

    }
}
  
function Resetmarks(){
    marks=[];
    document.getElementById('marksoutput').innerHTML =''
}


let cars=["Maruti SuzuKi","Hyundai","tata","fortuner","punch","honda"]


function arraysearch(){
carname=document.getElementById("carname").value
  if(cars.find((car)=>car==carname))
  {
    output=cars.find((car)=>car==carname)
  }
  else{
    output="No Matches Found"
  }
document.getElementById('showoutput').innerHTML=output;
}





let numbers=[]
function addnumbers()
{
    inputnum=document.getElementById('numbers')
    let num=Number(inputnum.value)
    numbers.push(num);
    console.log(numbers);
    
    inputnum.value=""
}

let evenarray=[]
function showeven(){
    for(num of numbers){
        if(num%2===0){
           evenarray.push(num)


    }
    document.getElementById("evennumberoutput").innerHTML=evenarray;
}


}

let oddarray=[]
function showodd(){
    for(num of numbers){
        if(num%2!=0){
           oddarray.push(num)


    }
    document.getElementById("oddnumberoutput").innerHTML=oddarray
}


}


 function clearnumbers(){
    numbers=[]
    evenarray=[]
    oddarray=[]
    document.getElementById("evennumberoutput").innerHTML=""
    document.getElementById("oddnumberoutput").innerHTML=""
}


let names=[];
function arrayname()
{
    inputname=document.getElementById('names')
    let name=inputname.value
    names.push(name);
    console.log(name);
    
    inputname.value=""
    document.getElementById("sortedoutput").innerHTML=names
}
function sortnames()
{
    names.sort();
    console.log(names);
    

    document.getElementById("sortedoutput").innerHTML=names

}

function clearnames(){
    names=[]
    document.getElementById("sortedoutput").innerHTML=""
}


