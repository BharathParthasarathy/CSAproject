function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
     // Call the API Gateway endpoint to authenticate the user
     fetch('https://erq5okglr2.execute-api.us-east-1.amazonaws.com/sample-stage/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
      })
      .then(response => {
          if (response.ok) {
              window.location.href = "home.html"; // Redirect to home page on successful login
          } else {
              return response.json();
          }
      })
      .then(data => {
          // Display error message if authentication fails
          document.getElementById("loginMessage").innerHTML = data.message;
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
  
  function signUp() {
    
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
  
    // Call the API Gateway endpoint to sign up the user
    fetch('https://erq5okglr2.execute-api.us-east-1.amazonaws.com/sample-stage/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
    })
    .then(response => response.json())
    .then(data => {
        // Display sign-up message
        document.getElementById("signUpMessage").innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }
  
  function showSignUpForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "block";
  }


  
  function showLogInForm() {
    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }

  function logout() {
    // Remove user session data (if any) and redirect to the login page
    // For example, you can clear local storage and redirect to the login page
    localStorage.clear(); // Clear all data in local storage
    window.location.href = "https://dbsbookstore.auth.us-east-1.amazoncognito.com/login?client_id=1dk94durjpssfiuvpge987377f&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fcsa-project-myaccount.s3.amazonaws.com%2FProject_UI%2Fhome.html"; // Redirect to the login page
}

function getData() {
    fetch('https://bfcvc1fh56.execute-api.us-east-1.amazonaws.com/newrestapistage/Get-items', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            // Add any other headers as needed, such as authentication token
        }
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}

function editData() {
    fetch('https://erq5okglr2.execute-api.us-east-1.amazonaws.com/sample-stage/item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // Add any other headers as needed, such as authentication token
        },
        body: JSON.stringify({
            // Add data to be edited
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}

function deleteData() {
    fetch('https://erq5okglr2.execute-api.us-east-1.amazonaws.com/sample-stage/item', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // Add any other headers as needed, such as authentication token
        },
        body: JSON.stringify({
            // Add data to be deleted
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response data
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}
