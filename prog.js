var value= document.querySelector("input");
var stack= document.querySelector('.stack');
var pushing= document.querySelector('.push');
var popping= document.querySelector('.pop');
var stack_size= document.querySelector('.stack-size');
var data_type= document.querySelector('.data-type');
var create= document.querySelector(".creation");
var getdata= document.querySelector(".pop-up-screen-bg");
var define_stack= document.querySelector(".define");

   var  t=-1;
   let size= 999;
   let first_time=1;
    
    var push= ()=>{
        if(value.value!=""){
            if(t<size-1){
                document.querySelector('.status').innerHTML= "";
                t++;
                var element= document.createElement('div');
                element.className= `element${t}`;
                element.innerHTML=value.value;
                stack.appendChild(element);
                value.value="";
            }
            else{
                document.querySelector('.status').innerHTML= "Overflow";
            }
        } 
        console.log(t);
    }
    
    var pop= ()=>{
        if(t<=-1){
            document.querySelector('.status').innerHTML= "Underflow";
        }
        else{
            document.querySelector('.status').innerHTML= "";
            document.querySelector(`.element${t}`).remove();
            t--;
        }
    console.log(t);    
    }


    var createStack= ()=>{
        if(first_time>1){
            while(t>-1){
                pop();
                size--;
            }
      }

    
            size= stack_size.value;
            if(data_type.value=='Int'){
                 document.querySelector('.type-element').type= 'number';
            }
            else{
                document.querySelector('.type-element').type= 'text';
            }   
      getdata.style.display= "none";

      first_time++;    
    }

    
    var popup= ()=>{
        getdata.style.display= "flex";
    }

    pushing.addEventListener('click',push);
    popping.addEventListener('click',pop);
    create.addEventListener('click',createStack);
    define_stack.addEventListener('click',popup);
