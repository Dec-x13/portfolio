// Tailwind configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#8B5FBF', // elegant purple
        secondary: '#FFD166' // warm yellow
      }
    }
  }
};

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'md:hidden hidden absolute top-16 left-0 w-full bg-white shadow-lg py-2 px-4';
  
  mobileMenu.innerHTML = `
    <a href="#home" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary hover:text-white">Home</a>
    <a href="#services" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary hover:text-white">Services</a>
    <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary hover:text-white">About</a>
    <a href="#testimonials" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary hover:text-white">Testimonials</a>
    <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-primary hover:text-white">Contact</a>
  `;
  
  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
      document.body.appendChild(mobileMenu);
    } else {
      mobileMenu.classList.add('hidden');
      if (document.body.contains(mobileMenu)) {
        document.body.removeChild(mobileMenu);
      }
    }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      if (document.body.contains(mobileMenu)) {
        document.body.removeChild(mobileMenu);
      }
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  //Submit Data to Sheets

  // Initialize feather icons
  feather.replace();
  document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;
    var message = document.getElementById('message').value;
  
    fetch('https://script.google.com/macros/s/AKfycbycwa0dMN2fU-T0ZDQQiT0aIWojMpuY0XfGyPIjQFP9HCZj4HR_AtqFiM4Y_IrvoH3x/exec', {
      method: 'POST',
      body: JSON.stringify({name: name, email: email, service: service, message: message}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.text())
    .then(result => {
      alert('Message sent!');
    })
    .catch(error => {
      alert('Error sending message.');
    });
  });
});