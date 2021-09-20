module.exports = {
    replaceAll: function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    },
    Dateit: function (d) {
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return monthNames[d.getMonth()] + " " + d.getDay() + ", " + d.getFullYear();
    },
    isvalidEmail: function (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    randomClr: () => {
        var colors = ["#682ae9", "#b43adf", "#e10689", "#6cd66a", "#2da140", "#9d6805", "#682ae9", "#80abff", "#682ae9"];
        return colors[Math.floor(Math.random() * colors.length)];

    },
    checkVisibility: () => {
        useEffect(() => {
            document.querySelector(".search-popup").classList.contains("visible") ? document.querySelector(".search-popup").classList.remove("visible") : ""
        })
    }
}