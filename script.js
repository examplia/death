const form = document.getElementById('death-form');
const list = document.getElementById('death-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  if (!user) return;

  const entry = {
    name: user,
    time: new Date().toLocaleString(),
    reason: "" // you can add a reason field too
  };

  // save to localStorage
  const stored = JSON.parse(localStorage.getItem('killList') || '[]');
  stored.push(entry);
  localStorage.setItem('killList', JSON.stringify(stored));

  // update live UI
  const li = document.createElement('li');
  li.textContent = `${entry.name} — marked at ${entry.time}`;
  list.appendChild(li);
  document.getElementById('username').value = '';
});
