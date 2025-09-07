document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnSubmit');
    const out = document.getElementById('stpdOutput');
    // const name = document.('msgFormName');
    const age = document.getElementById('msgFormAge');
    btn.addEventListener('click',  () => {
        const name = document.getElementById('msgFormName').value;
        const age = document.getElementById('msgFormAge').value;
        const output = 'Your name is '+ age + ' and you are ' + name + ' years old'; 
        out.textContent = output;
    });
});
