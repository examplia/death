const form = document.getElementById('death-form');
const list = document.getElementById('death-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  if (user) {
    const li = document.createElement('li');
    li.textContent = `${user} — marked for SUPER DEATH™ at ${new Date().toLocaleTimeString()}`;
    list.appendChild(li);
    document.getElementById('username').value = '';
  }
});
