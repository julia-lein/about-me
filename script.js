var nav = document.querySelector("nav");

        nav.addEventListener("click", toggleNav);

        function toggleNav() {
            if (nav.className == "navigation") {
                nav.className += " responsive";
            } else {
                nav.className = "navigation";
            }
        }

