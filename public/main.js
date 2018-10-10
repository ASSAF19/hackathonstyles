

//  new user in data

let users = this.users = [];

$('#valid').on('click', function () {
    let userval = $('#username').val()
    let passval = $('#password').val()
    if (userval === "") {
        alert("Please enter name!!")
    }
    if (passval === "") {
        alert("please enter password!!")
    }
    else {
        adduser(userval, passval).then(() => {

            alert("welcome" + " " + userval)
            $("#username").val("")
            $("#password").val("")
            window.location.href = "/Dj-Kranks/index2.html";
        })


    }
}
)

let getuser = function () {
    return $.get('/users').then((data) => {
        users = data;
    })
}

let adduser = function (userText, passText) {
    let Objuser = {
        username: userText,
        password: passText,
        playlist: []
    }
    return $.post('/users', Objuser).then((data) => {
        users.push(data)
    })
}