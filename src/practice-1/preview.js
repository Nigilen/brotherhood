const logoBtnDel = document.querySelector(".logo-btn-del");
const logoInput = document.querySelector(".logo__input");
const logoImg = document.querySelector(".logo__img");

function previewImage(file) {
  const reader = new FileReader();
  reader.onload = () =>
    (document.getElementById("preview").src = reader.result);
  reader.readAsDataURL(file);
}

logoBtnDel.addEventListener("click", (e) => {
  logoInput.value = null;
  logoImg.src = "./images/avatar.png";
});