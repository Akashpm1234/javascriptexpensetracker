//   var   add = document.getElementById('nametext');
//   var   amount = document.getElementById('amount');
   var   list = document.getElementById('list');
    var  button1 = document.getElementById('button1');
    var  button2 = document.getElementById('button2');




      button2.onclick= function(){
		    document.getElementById('list').innerHTML='';
	  }

        button1.onclick = function(){
			  
			 newlis(list);
			 
			document.getElementById('nametext').value ='';
			document.getElementById('amount').value ='';
			document.getElementById('mydate').value ='';
			 document.getElementById('nametext').focus(); 
		}
		
		
		 function newlis(targetul){
            
			   var add = document.getElementById('nametext').value;
			   var amount = document.getElementById('amount').value;
			   var mydate = document.getElementById('mydate').value;
			   var li = document.createElement('li');
//			   var tabe = document.createElement('td');
			   
			  
			   
			   
			   var textnode = document.createTextNode(add + ' ');
			   var textnode1 = document.createTextNode(amount  +  ' ');
			   var textnode2 =document.createTextNode(mydate + ' ');
			
			   var removebutton = document.createElement('button'); 
			   
			   
			    
			 
		
			    
			   if(add!='' && amount!='' && mydate!=''){
				      
			          removebutton.className ="btn btn-xs btn-danger" + ' ';
				      removebutton.innerHTML ='&times;' ;
				       removebutton.setAttribute('onclick','removeme(this)');
				    
				   
				      li.appendChild(textnode);
				      li.appendChild(textnode1);
				      li.appendChild(textnode2);
				      li.appendChild(removebutton);
				      targetul.appendChild(li);
//				       targettable.appendChild(td);
			   }
			  else{
				   alert(" Plase enter the expenses")
			  }
			 
		 }
		
		
	

     function removeme(item){
		var p = item.parentElement;
		p.parentElement.removeChild(p);
		 
	}
		
	


// function removeme(item){
//	 var p =item.parentElement;
//	 p.parentElement.removeChild(p);
// }