function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Your login validation logic goes here
    // For simplicity, let's assume username and password are valid
    // Replace this with your actual validation logic
  
    // If login is successful, show home page
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("home").style.display = "block";
  }
  
  function signUp() {
    console.log("signUp function called");
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
  
    // Your sign-up logic goes here
    // For simplicity, let's assume the sign-up is successful
    // Replace this with your actual sign-up logic
    if (newUsername.trim() === '' || newPassword.trim() === '') {
        document.getElementById("signUpMessage").innerHTML = "Please enter both username and password.";
        return;
      }
    localStorage.setItem(newUsername, newPassword);
  
    // Show a message indicating sign-up success
    document.getElementById("signUpMessage").innerHTML = "Sign-up successful! Please <a href='index.html'>log in</a>.";
  }
  
  function showSignUpForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
  }
  
  function showLogInForm() {
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }