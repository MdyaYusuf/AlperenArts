const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
    filterItem.addEventListener("click", (selectedItem) => {
        if (selectedItem.target.classList.contains("item")) {
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image) => {
                let filterImages = image.getAttribute("data-name");
                if ((filterImages == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.remove("show");
                    image.classList.add("hide");
                }
            });
        }
    });
    for (let i = 0; i < filterImg.length; i++) {
        filterImg[i].addEventListener("click", () => preview(filterImg[i]));
    }
}

const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const previewTitle = previewBox.querySelector("h2");
const closeIcon = previewBox.querySelector("#icon");
const shadow = document.querySelector(".shadow");

const preview = (element) => {
    document.querySelector("body").style.overflowY = "hidden";
    let selectedPrevImg = element.querySelector("img").src;
    previewImg.src = selectedPrevImg;
    let selectedImgAlt = element.querySelector("img").alt;
    previewImg.alt = selectedImgAlt;
    let selectedImgTitle = element.querySelector("img").title;
    previewTitle.textContent = selectedImgTitle;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = () => {
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflowY = "scroll"; 
    };
};
