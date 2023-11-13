function changeContent(contentId) {
    document.querySelectorAll('.content').forEach(function(content) {
        content.style.display = 'none';
    });
    
    document.querySelectorAll('.content-buttons button').forEach(function(button) {
        button.classList.remove('active');
    });

    document.getElementById('btn-' + contentId).classList.add('active');

    document.getElementById('content-' + contentId).style.display = 'block';
}

changeContent('disciplinas');