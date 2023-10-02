// Define a variable to track the currently active split index
let currentSplitIndex = 0;

// Function to open the modal
function openModal(splitIndex) {
    currentSplitIndex = splitIndex;
    document.getElementById("modal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Function to save the comment and update the split list
function saveComment() {
    const comment = document.getElementById("comment").value;
    if (comment.trim() !== "") {
        splitTimes[currentSplitIndex].comment = comment;
        closeModal();
        updateSplitList();
        // Clear the comment input field
        document.getElementById("comment").value = "";
    }
}

// Modify the split function to open the modal for comment input
function split() {
    if (isRunning) {
        const currentTime = Date.now() - startTime;
        const splitTime = formatTime(currentTime);
        const split = { time: splitTime, comment: "" };
        splitTimes.push(split);
        updateSplitList();
        openModal(splitTimes.length - 1);
    }
}
