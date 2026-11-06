const EnRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
console.log(EnRougeSuiteAClick);
EnRougeSuiteAClick.addEventListener("click", (ev) => {
    console.log("click sur le bouton", ev);
    EnRougeSuiteAClick.style.color = "red";
});
const collH2 = document.querySelectorAll("h2");
collH2.forEach((elm) => 
    {elm.addEventListener("click", (evt) => 
        {evt.target.style.color = "red";

        });
 });
