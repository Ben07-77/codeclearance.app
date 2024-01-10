// Toggle function for the first section
function toggleReadMore1() {
    var moreText = document.getElementById("more");
    var readMore = document.getElementById("readMore2");
    
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMore.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        readMore.textContent = "Read more";
    }
}

// Toggle function for the second section
function toggleReadMore2() {
    var moreText = document.getElementById("more2");
    var readMore = document.getElementById("readMore");
    
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMore.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        readMore.textContent = "Read more";
    }
}

// Attach click event listeners
document.getElementById("readMore").addEventListener("click", toggleReadMore2);
document.getElementById("readMore2").addEventListener("click", toggleReadMore1);


