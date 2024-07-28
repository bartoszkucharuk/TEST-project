
function handleClose() {
const closeBtn = document.querySelector(".modal-btn-close");
const backdrop = document.querySelector(".backdrop");
closeBtn.addEventListener("click", handleClose);
    backdrop.classList.toggle(".backdrop.is-hidden");
};

