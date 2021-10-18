const editRange = document.querySelectorAll(".edit__range");
const editColor = document.querySelector(".edit__color");
const imageContainer = document.querySelector(".image-container");
const image = document.querySelector(".image-container img");
const jsText = document.querySelector(".main-heading span");

editRange.forEach((element) =>
  element.addEventListener("mousemove", changeValue)
);

function changeValue() {
  imageContainer.style.padding = `${editRange[0].value}px`;
  image.style.filter = `blur(${editRange[1].value}px)`;
  imageContainer.style.background = `${editColor.value}`;
  jsText.style.color = `${editColor.value}`;
}

editColor.addEventListener("click", changeValue());
