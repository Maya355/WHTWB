document.addEventListener('DOMContentLoaded', function() {
    const contentList = document.getElementById('contentList');
    let contentArray = JSON.parse(localStorage.getItem('contentArray')) || [];

    contentArray.forEach(content => {
        const contentItem = document.createElement('div');
        contentItem.className = 'content-item';
        contentItem.textContent = content;
        contentList.appendChild(contentItem);
    });
});
