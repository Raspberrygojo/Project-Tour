// notifcation error close
const ErrorDiv = document.getElementsByClassName("Error")[0]
const CloseButtonForErrorDiv = document.getElementsByClassName("Close")[0]

CloseButtonForErrorDiv.addEventListener('click', () => {
    ErrorDiv.style.display = 'none'
});
