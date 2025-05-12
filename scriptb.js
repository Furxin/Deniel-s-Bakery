// Highlight the current navigation link
document.addEventListener('DOMContentLoaded', () => {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.topnav a');

  // Get the current page's file name
  const currentPage = window.location.pathname.split('/').pop();

  // Loop through links to find the matching one
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Smooth scroll to sections when clicking on the menu items
document.querySelectorAll('.menu-nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Get section ID
    const targetSection = document.getElementById(targetId);
    
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Add hover effect to menu item images (zoom effect)
const menuImages = document.querySelectorAll('.menu-item img');
menuImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.05)';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});

