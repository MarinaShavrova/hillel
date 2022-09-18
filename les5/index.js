let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplication(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
  console.log(obj);
}

function deleteValue(obj) {
  delete obj.height;
  delete obj.width;
  console.log(obj);
}

function replaceValue(obj, key, value) {
    obj[key] = value;
    console.log(obj);
}


multiplication(menu);
deleteValue(menu);
replaceValue(menu, "title", "Clear");
