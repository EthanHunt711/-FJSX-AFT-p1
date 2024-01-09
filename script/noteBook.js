//text area targeting
const textAreaContent = document.querySelector('#notebookText');
//saving the input in the local storage
textAreaContent.addEventListener('input', () => {
    localStorage.notebookText = textAreaContent.value;
});
//show the previous changes if any exists
if(localStorage.notebookText != undefined)
    notebookText.value = localStorage.notebookText;