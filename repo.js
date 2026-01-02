function loadFile(fileId) {
    // Hide all content
    const contents = document.querySelectorAll('.file-content');
    contents.forEach(el => el.style.display = 'none');

    // Show selected content
    const selected = document.getElementById('content-' + fileId);
    if (selected) {
        selected.style.display = 'block';
    }
}
