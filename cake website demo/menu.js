document.querySelectorAll('.dropbtn').forEach(function(button) {
  button.addEventListener('click', function (e) {
    if (this.parentElement.querySelector('.dropdown-content')) {
      e.preventDefault();
      const dropdown = this.parentElement;
      dropdown.classList.toggle('show');
    }
  });
});

// Close dropdown when clicking outside
window.addEventListener('click', function (e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('show'));
  }
});

 
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    button.addEventListener('click', () => {
      // Close other dropdowns first (optional)
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
      });

      // Toggle the clicked one
      dropdown.classList.toggle('show');
    });
  });

  // Optional: close dropdowns when clicking outside
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropbtn')) {
      dropdowns.forEach(d => d.classList.remove('show'));
    }
  });




// Close dropdown when selecting a menu item

