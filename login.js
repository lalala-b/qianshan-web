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

  $.ajax({
    url: "http://localhost:3000/login",
    method: "post",
    data: { username, password },
    success: function (res) {
      if (res.code === 200) {
        localStorage.setItem("token", res.data.token);
        // 成功登陆
        alert("登陆成功");
        setTimeout(function () {
          window.location.href = "./list.html?token" + res.data.token;
        }, 1000);
      } else {
        alert(res.message);
      }
    },
    error: function () {
      alert("出错了，请重试");
    },
  });
}
