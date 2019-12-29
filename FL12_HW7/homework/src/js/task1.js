let loginMail = ["user@gmail.com", "admin@gmail.com"];
let passwords = ["UserPass", "AdminPass"];
let loginInput = prompt("Input your E-Mail (xxxxxx@xxxx.xx)");

if (typeof loginInput === "object" || loginInput === "") {
  alert("Canceled");
} else if (loginInput.length < 5) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (loginMail.includes(loginInput, 0) === true) {
  let passwordInput = prompt("Input your Password");
  if (typeof passwordInput === "object" || passwordInput === "") {
    alert("Canceled");
  } else if (
    (loginInput === loginMail[0] && passwordInput === passwords[0]) ||
    (loginInput === loginMail[1] && passwordInput === passwords[1])
  ) {
    let pwdChange = confirm("Do you want to change your password?");
    if (pwdChange === true) {
      let oldpasswordInput = prompt("Input your old Password");
      if (typeof oldpasswordInput === "object" || oldpasswordInput === "") {
        alert("Canceled");
      } else if (
        (loginInput === loginMail[0] && oldpasswordInput !== passwords[0]) ||
        (loginInput === loginMail[1] && oldpasswordInput !== passwords[1])
      ) {
        alert("Wrong password");
      } else {
        let newpasswordInput = prompt("Input your new Password");
        if (typeof newpasswordInput === "object" || newpasswordInput === "") {
          alert("Canceled");
        } else if (newpasswordInput.length < 6) {
          alert("It’s too short password. Sorry.");
        } else {
          let reenternewpassword = prompt("Input your new Password again");
          if (reenternewpassword !== newpasswordInput) {
            alert("You wrote the wrong password.");
          } else {
            alert("You have successfully changed your password.");
          }
        }
      }
    } else {
      alert("You have failed the change.");
    }
  } else {
    alert("Wrong password");
  }
} else {
  alert("I don’t know you");
}
