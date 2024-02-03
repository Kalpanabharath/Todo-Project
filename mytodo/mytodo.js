let container=document.getElementById("contdiv");
let saveEl=document.getElementById("savebtn");




let todo=finaltodo();
// let todo=[]


function finaltodo(){
    let getarr=localStorage.getItem("myarr")
    let getiten=JSON.parse(getarr)
      if(getiten==null){
       return [];
       }else{
       return getiten;
      }
}



let count=todo.length;

//checkbox is checked make line through
function labstyle(labid,checkid,divid){
     let mylab=document.getElementById(labid);
     let myinp=document.getElementById(checkid);
     mylab.classList.toggle('linethorugh');

     let index=todo.findIndex(function(call){
        let callel= "divid"+call.unicno;
        if(callel===divid){
            return true;

        }else{
            return false;
        }
     })
     let arrel=todo[index]
     if(arrel.ischecked===false){
        arrel.ischecked=true;
     }else{
        arrel.ischecked=false
     }


}

//delete div from tha container
function deldiv(divid){
     let eldiv=document.getElementById(divid);
     container.removeChild(eldiv);
      
     let index=todo.findIndex(function(eachItem){
        let eachitemid = "divid"+eachItem.unicno;
        if(eachitemid===divid){
            return true;
        }else{
            return false;
        }
     })

     todo.splice(index,1);
     
}



function funonclick(){
    let textinp=document.getElementById("inpidtext");
    let userinp=textinp.value;
    count+=1;
    if(userinp===""){
        alert("Enter Task")
    }else{
        let obj={
            text:userinp,
            unicno:count,
            ischecked:false
    
        };
    todo.push(obj)
    // createli(todo)
    createli(obj)
    
    textinp.value="";
    }
   
}


 
function createli(todos)  {

     let labid="labid"+todos.unicno;
     let checkid="checkid"+todos.unicno;
     let divid="divid"+todos.unicno;

     let div=document.createElement('div');
     div.id=divid;
     div.classList.add("lidiv");
     container.appendChild(div);

     let inp=document.createElement('input');
     inp.type="checkBox";
     inp.id=checkid;
     inp.checked=todos.ischecked;
     inp.onclick =function(){
     labstyle(labid,checkid,divid);
     }
     div.appendChild(inp);

     let lab=document.createElement('label');
     lab.id=labid;
     lab.htmlFor=checkid;
     lab.textContent=todos.text;
     div.appendChild(lab);

     if(inp.checked===true){
        lab.classList.add('linethorugh')
     }

     let icon= document.createElement('i');
     icon.classList.add("fa-solid","fa-trash");
     icon.onclick=function(){
         deldiv(divid);
     }
     div.appendChild(icon);

}



saveEl.onclick= function(){
    localStorage.setItem("myarr",JSON.stringify(todo))
    
}
for(let todos of todo){
    createli(todos)
    
}
 
// let condiv=document.getElementById("contdiv");
// let svbtn=document.getElementById("savebtn");
// if(condiv.children<=0){
//     svbtn.style.display="none"
//     alert("work")
// }

 







