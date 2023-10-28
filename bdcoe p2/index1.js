const checkbox = document.getElementById("check");
        const sidebar = document.querySelector(".sidebar");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                sidebar.style.transform = "translateX(0)";
            } else {
                sidebar.style.transform = "translateX(-100%)";
            }
        });