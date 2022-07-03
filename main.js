function goSubmit(e) {
  const formData = new FormData(e.target);
  const username = formData.get("username");
  console.log(username);
  const data = {};
  for (const item of formData) {
    data[item[0]] = item[1];
  }
  console.log(data);
  return false;
}
