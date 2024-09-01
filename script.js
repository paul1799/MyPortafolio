document.addEventListener('DOMContentLoaded', () => {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            toggleProjectDetails(projectId, link);
        });
    });
});

function toggleProjectDetails(projectId, button) {
    const details = document.getElementById(projectId);
    const isHidden = details.classList.contains('hidden');
    
    // Ocultar todos los detalles de proyectos
    document.querySelectorAll('.project-details').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Cambiar todos los botones a "Ver proyecto"
    document.querySelectorAll('.project-link').forEach(el => {
        el.textContent = 'Ver proyecto';
    });

    if (isHidden) {
        details.classList.remove('hidden');
        button.textContent = 'Ocultar detalles';
        
        // Scroll suave hacia los detalles del proyecto
        details.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
