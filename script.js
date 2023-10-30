let commentThreads = [];

function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "COMUNISMOACIDO") {
        document.querySelector(".password-screen").style.display = "none";
        document.querySelector(".forum").style.display = "block";
    } else {
        document.getElementById("error-message").textContent = "Incorrect password. Try again.";
    }
}

function addComment(button) {
    const nameInput = button.previousElementSibling.previousElementSibling;
    const commentInput = nameInput.nextElementSibling;
    const name = nameInput.value;
    const commentText = commentInput.value;

    if (name && commentText) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `<strong>${name}:</strong> ${commentText}
                                <input type="text" class="name-input dark-background" placeholder="Your Name">
                                <input type="text" class="comment-input dark-background" placeholder="Leave a comment">
                                <button class="comment-submit subtle-button" onclick="addComment(this)">Comment</button>`;
        commentInput.value = "";
        nameInput.value = "";

        // Determine the context for the comment (original post or a reply)
        const parentComment = button.closest(".comment");
        if (parentComment) {
            parentComment.appendChild(commentDiv);
        } else {
            document.querySelector(".comments").appendChild(commentDiv);
        }
    }
}