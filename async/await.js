async function a() {
  try {
    const res = await login(username, password);
    console.info(res);
  } catch (error) {}

  login(username, password)
    .then((res) => {
      console.info(res);
    })
    .catch((error) => {});
}
