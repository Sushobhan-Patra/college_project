const icon = document.getElementById("icon");
icon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src =
      "C:/Users/91755/OneDrive/Desktop/E-Learning College Project/Sujan CLg project/college_project/dark theme icon/dark theme icon/sun.png";
  } else {
    icon.src =
      "C:/Users/91755/OneDrive/Desktop/E-Learning College Project/Sujan CLg project/college_project/dark theme icon/dark theme icon/moon.png";
  }
});
