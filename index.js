function validation(){
    let phone = document.getElementById("num").value;
    
    let numLength = phone.length;
   let firstNums = phone.substr(0, 2);
   let lastNums = phone.substr(numLength-9,9);
   
   
   let num;
  
   if(numLength<9){
      alert("Number missing please check again !");
      document.getElementById("msg").innerHTML="invalid Number";
      
   }else if(numLength == 9){
      alert("number validation successfully!");
      num = "94" + phone;
      document.getElementById("msg").innerHTML=num;
   }else if(numLength == 10){
      alert("number validation successfully!");
      num = "94" + lastNums;
      document.getElementById("msg").innerHTML=num;
   }else if(numLength >11){
      alert("Invalid number please check again !");
      document.getElementById("msg").innerHTML="invalid Number";
   }else if(numLength == 11 && firstNums != 94){
      alert("Invalid number please check again !");
      document.getElementById("msg").innerHTML="invalid Number";
   }else if(numLength == 11 && firstNums == 94){
      alert("number validation successfully!");
      num= phone;
      document.getElementById("msg").innerHTML=num;
   }else{
      alert("Invalid number please check again !");
      document.getElementById("msg").innerHTML="invalid Number";
   }
   
  
  
  }