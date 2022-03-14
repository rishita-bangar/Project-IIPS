
function validate()
{
var name = document.getElementById('name');
var program = document.getElementById('program');  
var email= document.getElementById('email');
var phone = document.getElementById('phone'); 
var team = document.getElementById('team');


    if((name.value.length <= 2) || (name.value.length > 20)) 
    {
      window.alert("** Username length greater than 2 upto 20");
      return false;	
    }

    if((program.value.length <=1) || (program.value.length > 30))
    {
        window.alert("**program name should be greater than 1");
        return false;
    }
 
    if(email.value.length <= 0)
    {
        window.alert("please enter email address");
        return false;
    }

    if(phone.value.length != 10)
     {
         window.alert("please enter 10 digit number");
         return false;
     }
    
     if((team.value.length <=5) || (team.value.length >20))
     {
         window.alert("Please enter your team name");
         return false;
     }

true;
}