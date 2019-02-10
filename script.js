today=new Date();
var cmas=new Date(today.getFullYear(), 03, 16);
if (today.getMonth()==1 && today.getDate()>08) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
let theDay = Math.ceil((cmas.getTime()-today.getTime())/(one_day))
console.log(theDay)
let oneDay = document.querySelector(".daySinceLastIncident")

