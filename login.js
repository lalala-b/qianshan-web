function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username) {
    alert("请输入用户名");
    return;
  }

  if (!password) {
    alert("请输入密码");
    return;
  }

  login(username, password)
    .then((res) => {
      if (res.code === 200) {
        localStorage.setItem("token", res.data.token);
        // 成功登陆
        alert("登陆成功");
        // setTimeout(function () {
        //   window.location.href = "./list.html?token" + res.data.token;
        // }, 1000);

        return res.data.token;
      } else {
        alert(res.message);
      }
    })
    .then((token) => {
      getList(token);
    })
    .catch((error) => {});
}

function login(username, password) {
  const promise = new Promise((resolved, rejected) => {
    $.ajax({
      url: "http://localhost:3000/login",
      method: "post",
      data: { username, password },
      success: (res) => {
        resolved(res);
      },
      error: (error) => {
        rejected(error);
      },
    });
  });

  return promise;
}

function getList(token) {
  const promise = new Promise((resolve, reject) => {
    $.ajax({
      url: "http://localhost:3000/getList",
      data: { token },
      success: function (res) {
        resolved(res);
      },
    });
  });
  return promise;
}

function getOtherList() {}
