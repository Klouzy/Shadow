const year = new Date().getFullYear();
const section = document.getElementById('footer');
const div = document.createElement('div');
div.innerHTML = `<p>Copyright @${year} Shadow. All rights reserved</p>`;
section.appendChild(div);