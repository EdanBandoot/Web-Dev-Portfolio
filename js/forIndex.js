let interval = null;

const randomizeBinaryText = (event) => {
    let iteration = 0;
    const lines = event.target.innerHTML.split("<br>").map((line) => line.trim());
    interval = setInterval(() => {
        const updatedLines = lines.map((line, lineIndex) => {
            return line
                .split("")
                .map((char, charIndex) => {

                    if (charIndex > 0 && charIndex % 8 === 0) {
                        return " ";
                    }


                    if (lineIndex * line.length + charIndex < Math.floor(iteration)) {
                        return event.target.dataset.value.split("")[lineIndex * line.length + charIndex] || " ";
                    }


                    return Math.random() > 0.5 ? "0" : "1";
                })
                .join("");
        });
        event.target.innerHTML = updatedLines.join("<br>");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};

document.getElementById("mainBinary").onmouseover = (event) => {
    let iteration = 0;

    const lines = event.target.innerHTML.split("<br>").map((line) => line.trim());

    clearInterval(interval);

    interval = setInterval(() => {

        const updatedLines = lines.map((line, lineIndex) => {
            return line
                .split("")
                .map((char, charIndex) => {

                    if (charIndex > 0 && charIndex % 8 === 0) {
                        return " ";
                    }

                    if (lineIndex * line.length + charIndex < Math.floor(iteration)) {
                        return event.target.dataset.value.split("")[lineIndex * line.length + charIndex] || " ";
                    }

                    return Math.random() > 0.5 ? "0" : "1";
                })
                .join("");
        });

        event.target.innerHTML = updatedLines.join("<br>");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};

window.onload = () => {
    const mainBinaryElement = document.getElementById("mainBinary");
    if (mainBinaryElement) {
        const lines = mainBinaryElement.innerHTML.split("<br>").map(line => line.trim());
        const updatedLines = lines.map(line => {
            return line
                .split("")
                .map((char, index) => {
                    if (index > 0 && index % 8 === 0) return " ";
                    return char;
                })
                .join("");
        });

        mainBinaryElement.innerHTML = updatedLines.join("<br>");
    }
};
