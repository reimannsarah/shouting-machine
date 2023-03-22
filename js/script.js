window.onload = () => {
    let form = document.querySelector("form");
    const output = document.getElementById("output");
    let fontSize = 10;

    form.onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById("input").value.toUpperCase();
        output.innerText = input;
        output.style.fontSize = fontSize + "vw";
        fontSize += 2;
        document.querySelector("p#output").innerText = input;
        document.querySelector("div#upperCase").removeAttribute("class");
    };
};

