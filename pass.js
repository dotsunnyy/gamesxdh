var password = "Morgan garnet";
(function passcodeprotect() {
   var passcode = prompt("enter the password (hint: cooper franks middle names lowercase)");
   while (passcode !== password) {
      alert("wrong");
      return passcodeprotect();
   }
}());
alert('good job');