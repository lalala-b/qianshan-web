let globalData = {};

window.onload = () => {
  getList();

  setInterval(() => {
    // getList();
    const contentDom = document.getElementById("content");

    const domList = getByClass(contentDom, "listUl contentUl");

    request("/getList").then((res) => {
      // console.info(res);
      res.forEach((item, index) => {
        domList[index].childNodes[1].innerText = item.newPrice;
        domList[index].childNodes[2].innerText = item.orValue;
        domList[index].childNodes[3].innerText = item.maxPrice;
        domList[index].childNodes[4].innerText = item.minPrice;
        domList[index].childNodes[5].innerText = item.oldPrice;
      });
    });
  }, 1000);
};

const getList = () => {
  request("/getList")
    .then((data) => {
      let str = "";

      // for (let i = 0; i < data.length; i++) {
      //   const {
      //     name,
      //     code,
      //     newPrice,
      //     orValue,
      //     maxPrice,
      //     minPrice,
      //     oldPrice,
      //   } = data[i];

      //   str +=
      //     "<ul class='listUl contentUl'><li class='nameItem'><span>" +
      //     name +
      //     "</span><br /><span>" +
      //     code +
      //     "</span></li><li>" +
      //     newPrice +
      //     "</li><li>" +
      //     orValue +
      //     "</li><li>" +
      //     maxPrice +
      //     "</li><li>" +
      //     minPrice +
      //     "</li><li>" +
      //     oldPrice +
      //     "</li></ul>";
      // }
      globalData = data;
      data.forEach(
        (
          { name, code, newPrice, orValue, maxPrice, minPrice, oldPrice },
          idx
        ) => {
          // if (+orValue > 0) {
          //   str +=
          //     "<ul class='listUl contentUl'><li class='nameItem'><span>" +
          //     name +
          //     "</span><br /><span>" +
          //     code +
          //     "</span></li><li class='red'>" +
          //     newPrice +
          //     "</li><li class='red'>" +
          //     orValue +
          //     "</li><li class='red'>" +
          //     maxPrice +
          //     "</li><li class='red'>" +
          //     minPrice +
          //     "</li><li class='red'>" +
          //     oldPrice +
          //     "</li></ul>";
          // } else if (+orValue < 0) {
          //   str +=
          //     "<ul class='listUl contentUl'><li class='nameItem'><span>" +
          //     name +
          //     "</span><br /><span>" +
          //     code +
          //     "</span></li><li class='green'>" +
          //     newPrice +
          //     "</li><li class='green'>" +
          //     orValue +
          //     "</li><li class='green'>" +
          //     maxPrice +
          //     "</li><li class='green'>" +
          //     minPrice +
          //     "</li><li class='green'>" +
          //     oldPrice +
          //     "</li></ul>";
          // } else {
          //   str +=
          //     "<ul class='listUl contentUl'><li class='nameItem'><span>" +
          //     name +
          //     "</span><br /><span>" +
          //     code +
          //     "</span></li><li>" +
          //     newPrice +
          //     "</li><li>" +
          //     orValue +
          //     "</li><li>" +
          //     maxPrice +
          //     "</li><li>" +
          //     minPrice +
          //     "</li><li>" +
          //     oldPrice +
          //     "</li></ul>";
          // }
          str +=
            "<ul class='listUl contentUl'><li class='nameItem'><span class='radio' type='radio' onclick='handleClick(event, " +
            idx +
            ")'></span><span>" +
            name +
            "</span><br /><span>" +
            code +
            "</span></li><li>" +
            newPrice +
            "</li><li>" +
            orValue +
            "</li><li>" +
            maxPrice +
            "</li><li>" +
            minPrice +
            "</li><li>" +
            oldPrice +
            "</li></ul>";
        }
      );
      const contentDom = document.getElementById("content");
      contentDom.innerHTML = str;

      const domList = getByClass(contentDom, "listUl contentUl");

      data.forEach(({ orValue }, index) => {
        if (orValue > 0) {
          domList[index].childNodes.forEach((it, idx) => {
            if (idx !== 0) {
              it.classList.add("red");
              it.classList.remove("green");
            }
          });
        } else if (orValue < 0) {
          domList[index].childNodes.forEach((it, idx) => {
            if (idx !== 0) {
              it.classList.add("green");
              it.classList.remove("red");
            }
          });
        } else {
          domList[index].childNodes.forEach((it, idx) => {
            if (idx !== 0) {
              it.classList.remove("green");
              it.classList.remove("red");
            }
          });
        }
      });
    })
    .catch((err) => {
      alert(err);
    });
};

const request = (url, method = "get", params = {}) => {
  const promise = new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:3000${url}`,
      method,
      data: params,
      success: ({ code, data }) => {
        if (+code === 200) {
          resolve(data);
        } else {
          reject("服务端出错，请刷新");
        }
      },
      error: (error) => {
        reject(error);
      },
    });
  });

  return promise;
};

const getByClass = (oParent, sClass) => {
  //获取oParent下的所有标签元素
  var aEle = oParent.getElementsByTagName("*");
  //用于存放，含有sClass的标签
  var aResult = [];
  var i = 0;
  for (i = 0; i < aEle.length; i++) {
    if (aEle[i].className.indexOf(sClass) > -1) {
      aResult.push(aEle[i]);
    }
  }
  //返回含有含有sClass的标签
  return aResult;
};
