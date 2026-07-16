document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(15px)";

    setTimeout(() => {

        hero.style.transition = "1.5s ease";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";

    }, 200);

});
