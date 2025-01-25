
      // Navbar Hide Script
       document.addEventListener('scroll', function () {
           const navbar = document.querySelector('.navbar');
           const servicesSection = document.getElementById('services');
           const servicesTop = servicesSection.offsetTop;
           const servicesBottom = servicesTop + servicesSection.offsetHeight;
 
           // Check if viewport is within the "Services" section
           if (window.scrollY >= servicesTop && window.scrollY < servicesBottom) {
               navbar.style.display = 'none';
           } else {
               navbar.style.display = 'flex'; // Show navbar outside the Services section
           }
       });