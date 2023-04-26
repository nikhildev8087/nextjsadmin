const settingsDropdown = document.querySelector('#settings-dropdown');
const settingsDropdownIcon = document.querySelector('#settings-dropdown-icon');
const settingsSubmenu = document.querySelector('#settings-submenu');

settingsDropdown.addEventListener('click', function() {
  settingsSubmenu.classList.toggle('hidden');
  settingsDropdownIcon.textContent = settingsSubmenu.classList.contains('hidden') ? 'arrow_drop_down' : 'arrow_drop_up';
});
