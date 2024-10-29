
document.addEventListener('DOMContentLoaded', (event) => {
    const content = document.getElementById('content');
    const text = content.innerHTML;
    content.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            content.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
        }
    }

    typeWriter();

    // Interactive element: Skill hover effect
    const skills = document.querySelectorAll('#skills li');
    skills.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.color = '#007bff';
        });
        skill.addEventListener('mouseout', () => {
            skill.style.color = 'inherit';
        });
    });
});
