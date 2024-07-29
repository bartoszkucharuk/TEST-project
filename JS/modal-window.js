document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.querySelector(".modal-btn-open");
    const closeBtn = document.querySelector(".modal-btn-close");
    const backdrop = document.querySelector(".backdrop");

   
    if (openBtn && closeBtn && backdrop) {
        openBtn.addEventListener("click", () => {
            backdrop.classList.remove("is-closed");
        });

        closeBtn.addEventListener("click", () => {
            backdrop.classList.add("is-closed");
        });


    } else {
        console.error("One or more elements are missing. Check the selectors and the HTML structure.");
    }
});

// const escKeydown = documentQuerySelector(e.key == "Escape");
// document.addEventListener('keydown', function (event) {

//     if (event.key === 'Escape') {
// const backdrop = document.querySelector(".backdrop");

//       backdrop.classList.add("is-closed");
//   }
// })


// const backdrop = document.querySelector(".backdrop");
// document.addEventListener("keydown", function (e) {
//     if (e.key == "Escape") {
//         backdrop.classList.add("is-closed");
//      }
// })
 

// function keyPress(e) {
//     if(e.key === "Escape") {
//         backdrop.classList.add("is-closed");
//     }
// }