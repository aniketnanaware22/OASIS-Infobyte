function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;

    if (!name || !email || !gender || !username || !password) {
        alert("Please fill all fields");
        return;
    }

    const user = {
        name,
        email,
        gender,
        username,
        password
    };

    localStorage.setItem("userData", JSON.stringify(user));
    alert("Registration successful");
    window.location.href = "login.html";
}

function login() {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (
        storedUser &&
        username === storedUser.username &&
        password === storedUser.password
    ) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

function loadUser() {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
        document.getElementById("userInfo").innerHTML =
            `Name: ${storedUser.name}<br>
             Email: ${storedUser.email}<br>
             Gender: ${storedUser.gender}`;
    }
}

function logout() {
    window.location.href = "login.html";
}
