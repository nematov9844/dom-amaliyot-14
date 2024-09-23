// Inactive va Active userlar ma'lumotlari
let inactiveUsers = [
    { id: 1, name: 'User 1', selected: false },
    { id: 2, name: 'User 2', selected: false },
    { id: 3, name: 'User 3', selected: false },
    { id: 2, name: 'User 4', selected: false },
    { id: 2, name: 'User 5', selected: false },
  ];
  
  let activeUsers = [];
  
  const inactiveUsersList = document.getElementById('inactiveUsersList');
  const activeUsersList = document.getElementById('activeUsersList');
  
  function renderUsers() {
    inactiveUsersList.innerHTML = '';
    inactiveUsers.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `
        <label>
          <input type="checkbox" onchange="toggleSelection(${user.id}, 'inactive')" ${user.selected ? 'checked' : ''}>
          ${user.name}
        </label>
      `;
      inactiveUsersList.appendChild(li);
    });
  
    activeUsersList.innerHTML = '';
    activeUsers.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `
        <label>
          <input type="checkbox" onchange="toggleSelection(${user.id}, 'active')" ${user.selected ? 'checked' : ''}>
          ${user.name}
        </label>
      `;
      activeUsersList.appendChild(li);
    });
  }
  
  function toggleSelection(id, type) {
    if (type === 'inactive') {
      inactiveUsers = inactiveUsers.map(user => user.id === id ? { ...user, selected: !user.selected } : user);
    } else {
      activeUsers = activeUsers.map(user => user.id === id ? { ...user, selected: !user.selected } : user);
    }
  }
  
  function activateUsers() {
    const selectedUsers = inactiveUsers.filter(user => user.selected);
    activeUsers = activeUsers.concat(selectedUsers.map(user => ({ ...user, selected: false })));
    inactiveUsers = inactiveUsers.filter(user => !user.selected);
    renderUsers();
  }
  
  function deactivateUsers() {
    const selectedUsers = activeUsers.filter(user => user.selected);
    inactiveUsers = inactiveUsers.concat(selectedUsers.map(user => ({ ...user, selected: false })));
    activeUsers = activeUsers.filter(user => !user.selected);
    renderUsers();
  }
  
  renderUsers();
  