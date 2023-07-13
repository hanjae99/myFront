document.querySelector("#open").onclick = () => {
  document.querySelector("#desc").style.display = "block";
  document.querySelector("#open").style.display = "none";
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#desc").style.display = "none";
  document.querySelector("#open").style.display = "block";
};
