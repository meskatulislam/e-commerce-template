const openNav = (divId) => {
            document.getElementById(divId).style.width =
                document.getElementById(divId).style.width === "300px"
                    ? "0px"
                    : "300px";
        };

        const openSearchBox = (divId) => {
            var div = document.getElementById(divId);
            document.getElementById(divId).style.height =
                document.getElementById(divId).style.height === "3rem"
                    ? "0rem"
                    : "3rem";
        };
        const openSuggestionBox = (data) => {
            divId = "suggestion-box";
            document.getElementById(divId).style.height =
                data.length === 0 ? "0px" : "16rem";
        };
        const showCatItems = (catId, btnId) => {
            document.getElementById(catId).style.display =
                document.getElementById(catId).style.display === "block"
                    ? "none"
                    : "block";

            document.getElementById(btnId).innerHTML =
                document.getElementById(btnId).innerHTML == "+" ? "-" : "+";
            // alert(catId);
        };
    