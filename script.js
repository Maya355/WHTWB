document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const content = document.getElementById('content').value;

    if(content) {
        // Save to localStorage
        let contentArray = JSON.parse(localStorage.getItem('contentArray')) || [];
        contentArray.push(content);
        localStorage.setItem('contentArray', JSON.stringify(contentArray));

        // Redirect to view.html
        window.location.href = 'view.html';
    }
});
