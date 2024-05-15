let likesCount = 0;

function like() {
    likesCount++;
    updateLikes();
}

function dislike() {
    likesCount--;
    updateLikes();
}

function updateLikes() {
    const likesElement = document.getElementById("likes");
    likesElement.textContent = "Likes: " + likesCount;
}
