
   var employee = [
     {
       ename : "ravi",
       num : "2",
       salary : "5000"
     },
     {
       ename : "siva",
       num : "3",
       salary : "6000"
     },
     {
       ename : "aravind",
       num : "4",
       salary : "8000"
     },
     {
       ename : "balu",
       num : "5",
       salary : "9000"
     },
     {
       ename : "charan",
       num : "6",
       salary : "4000"
     },
     {
       ename : "delhi",
       num : "7",
       salary : "1000"
     }
   ];
   var str;
   str += "<table><tr><td>search:- <input type='text' id='text'></td>"
   str += "<td><button = 'button' id= 'button'>clikHere  </button></td></tr></table><br><br>";

   str += "<table border = '1' id='table' ><tr>"
   str += "<th id = 'th1' class='th'> Emp_name </th>"
   str += "<th id = 'th2' class='th'>Emp_Id</th>"
   str += "<th id = 'th3' class='th'>Emp_Sal</th></tr>";
    for( var i = 0; i < employee.length; i++){
     str += "<tr><td>" +employee[i].ename+ "</td><td>" +employee[i].num+ "</td><td>" +employee[i].salary+ "</td></tr>";
   }

   str += "</table>";
   var body = document.getElementById("body");

   body.innerHTML = str;


document.getElementById("th1").addEventListener("click",sorting1);
document.getElementById("th2").addEventListener("click",sorting2);
document.getElementById("th3").addEventListener("click",sorting3);
document.getElementById("button").addEventListener("click",Filter);

function sorting1(){

var len=employee.length;
var a=employee;
for (var i = 0; i < len-1; i++) {
      for (var j = i + 1 ; j < len; j++) {
         if (a[i]["ename"] > a[j]["ename"]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
         }
      }
    }
    display(a);
  }

function sorting2(){

var len=employee.length;
var a=employee;
for (var i = 0; i < len-1; i++) {
      for (var j = i + 1 ; j < len; j++) {
         if (a[i]["num"] > a[j]["num"]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
         }
      }
    }display(a);
  }

function sorting3(){

var len = employee.length;
var a = employee;
for (var i = 0; i < len-1; i++) {
      for (var j = i + 1 ; j < len; j++) {
         if (a[i]["salary"] > a[j]["salary"]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
         }
      }
    }display(a);
}
function display(a){

    var table = document.getElementById("table");
    var rows = table.rows;
    for (i = 0; i < a.length; i++) {
    rows[i+1].innerHTML = "<td>"+a[i]["ename"]+"</td><td>"+a[i].num+"</td><td>"+a[i].salary+"</td>";
  }
}
function Filter() {

  var name = document.getElementById("text").value;
  var tbody = document.getElementById("table");
  var rows = tbody.rows,
      rlen = rows.length,
      arr = new Array(),
      i, j, cells, clen,r;

  for (i = 0; i < rlen; i++) {
      cells = rows[i].cells;
      clen = cells.length;
      arr[i] = new Array();
      for (j = 0; j < clen; j++) {
          arr[i][j] = cells[j].innerHTML;

           if(arr[i][j]==name){
              r = i;
           }
           
          //  tbody.rows[i].innerHTML = arr[i];
            //else
             //tbody.rows[i].style.display = "none";
          
       }
     }
     for(i = 0; i < rlen; i++){
        if(i === r){
           continue;
        }
        else{
           tbody.rows[i].style.display="none";
        }
     }
   }
   

/*var d = 1;
function displayFilter(temp){
  var table = document.getElementById("table");
  var rows = table.rows;
  rows[d] = "<td>"+temp[0][0]+"</td><td>"+temp[0][1]+"</td><td>"+temp[0][2]+"</td>";
  d = d + 1;
}*/
