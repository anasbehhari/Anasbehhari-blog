import { useEffect } from "react";
const checkVisibility = () => {
        useEffect(() => {
            document.querySelector(".search-popup").classList.contains("visible") ? document.querySelector(".search-popup").classList.remove("visible") : ""
        })
        return "";
}

export default checkVisibility;