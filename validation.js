
// addshow validation
function allLetter(inputtxt)
      {
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      alert('Tv show has been added successfully');
      return true;
      }
      else
      {
      alert('Invalid tv show name');
      return false;
      }
      }

// email validation
      // function ValidateEmail(email)
      // {
      //  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
      //   {
      //     return (true)
      //   }
      //     alert("You have entered an invalid email address!")
      //     return (false)
      // }


// password validation
      function CheckPassword(password)
      {
      var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(password.value.match(passw))
      {
      alert('Correct, try another...')
      return true;
      }
      else
      {
      alert('Wrong...!')
      return false;
      }
      }
      //
      // // text validation
      // function allLetter(name)
      //       {
      //       var letters = /^[A-Za-z]+$/;
      //       if(name.value.match(letters))
      //       {
      //       alert('Your name have accepted : you can try another');
      //       return true;
      //       }
      //       else
      //       {
      //       alert('Please input alphabet characters only');
      //       return false;
      //       }
      //       }

// letter
            function lettersOnly()
{
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
            {

                              return true;
            }

            else{
              alert('Please enter alphabet characters only');
                  return false;
  }
            }



      // email
      function ValidateEmail(inputText)
      {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(inputText.value.match(mailformat))
      {
      alert("Valid email address!");
      document.form1.email.focus();
      return true;
      }
      else
      {
      alert("You have entered an invalid email address!");
      document.form1.email.focus();
      return false;
      }
      }


// emmail2

      function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


// ma
var testresults

function checkemail() {
  var str = document.form1.email.value
  var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  if (filter.test(str))
    testresults = true
  else {
    alert("Please input a valid email address!")
    testresults = false
  }
  return (testresults)
}

function checkbae() {
  if (document.layers || document.getElementById || document.all)
    return checkemail()
  else
    return true
}



function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    alert("Valid email address!");

    document.form1.email.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.email.focus();

    return false;

  }

}
