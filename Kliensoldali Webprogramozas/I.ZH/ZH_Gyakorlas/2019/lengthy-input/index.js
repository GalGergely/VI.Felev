const inputMezo  = document.getElementById("inputMezo");
inputMezo.addEventListener("input", () => {
    var css = 'border: linear-gradient(to right, orange százalék%, hsla(0, 0%, 90%, 1) százalék% 100%);';
    const max = inputMezo.maxLength;
    const current = inputMezo.value.length;
    const százalék = (current / max) * 100;
    console.log(százalék);
    css = css.replace(/százalék/g, százalék);
    inputMezo.style = css;
    console.log(inputMezo.style);
});
