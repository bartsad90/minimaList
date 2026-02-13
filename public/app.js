// Boilerplate JS for CRUD operations with the list API
// Assumes API endpoints: /api/lists (GET, POST), /api/lists/:id (PUT, DELETE)

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('list-form');
  const listsContainer = document.getElementById('lists-container');

  // Fetch and render all lists
  function fetchLists() {
    fetch('/api/lists')
      .then(res => res.json())
      .then(data => {
        listsContainer.innerHTML = '';
        data.forEach(renderList);
      });
  }

  // Render a single list
  function renderList(list) {
    const div = document.createElement('div');
    div.className = 'list';
    div.innerHTML = `
      <strong>${list.name}</strong> ${list.starred ? '<span class="starred">★</span>' : ''}<br>
      <span>Items: ${Array.isArray(list.body) ? list.body.join(', ') : ''}</span><br>
      <span>Added by: ${list.addedBy || 'N/A'}</span><br>
      <span class="progress">Progress: ${list.completeCount || '0/0'}</span><br>
      <div class="actions">
        <button onclick="editList('${list._id}')">Edit</button>
        <button onclick="deleteList('${list._id}')">Delete</button>
        <button onclick="toggleStar('${list._id}', ${list.starred})">${list.starred ? 'Unstar' : 'Star'}</button>
      </div>
    `;
    listsContainer.appendChild(div);
  }

  // Add new list
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('list-name').value.trim();
    const body = document.getElementById('list-body').value.split(',').map(i => i.trim()).filter(Boolean);
    const addedBy = document.getElementById('added-by').value.trim();
    fetch('/api/lists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, body, addedBy })
    })
      .then(res => res.json())
      .then(() => {
        form.reset();
        fetchLists();
      });
  });

  // Expose edit/delete/star functions globally
  window.deleteList = function(id) {
    fetch(`/api/lists/${id}`, { method: 'DELETE' })
      .then(() => fetchLists());
  };

  window.editList = function(id) {
    // For brevity, prompt-based edit (replace with modal in production)
    const name = prompt('New name:');
    if (!name) return;
    fetch(`/api/lists/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    }).then(() => fetchLists());
  };

  window.toggleStar = function(id, starred) {
    fetch(`/api/lists/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ starred: !starred })
    }).then(() => fetchLists());
  };

  fetchLists();
});
