  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }

  // Close nav when clicking outside
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    // If menu is open and click is outside the nav
    if (navLinks.classList.contains('active') &&
        !nav.contains(event.target)) {
      navLinks.classList.remove('active');
    }
  });

 
  const slider = document.getElementById("slider");
  let autoScrollInterval;

  function scrollSlider(direction) {
    const slideWidth = slider.querySelector('.slide').offsetWidth + 32; // 32px gap
    slider.scrollBy({
      left: direction * slideWidth,
      behavior: 'smooth'
    });
  }

  // Modal functionality
// Open modal and display course details


// Close modal when clicking anywhere outside the modal content
function openModal(course) {
  const modalContent = document.getElementById('modal-info');

  const courseDetails = {
    'web-dev': {
      title: 'Web Development',
      duration: '14 Weeks',
      description: `This course covers HTML, CSS, JavaScript, and backend technologies like Node.js. 
        You will build live projects and learn from experienced mentors.`,
      callToAction: 'Enroll now and start building real-world websites!'
    },
    'data-science': {
      title: 'Python',
      duration: '14 Weeks',
      description: `This course dives deep into Python for web development, data analysis, automation, and AI.
        You'll work on real-time projects and explore Python libraries like Flask, Pandas, and NumPy.`,
      callToAction: 'Enroll now and start building intelligent, practical solutions with Python!'
    },
    'ai': {
      title: 'Java',
      duration: '18 Weeks',
      description: `This course covers core and advanced Java concepts including OOP, data structures, and backend development.
        Build scalable applications and prepare for coding interviews.`,
      callToAction: 'Enroll now to create robust applications and strengthen your software engineering skills!'
    }
  };

  const selected = courseDetails[course];

  if (selected) {
    modalContent.innerHTML = `
      <h2>${selected.title}</h2>
      <p><strong>Duration:</strong> ${selected.duration}</p>
      <p>${selected.description}</p>
      <p><strong>${selected.callToAction}</strong></p>
    `;
    document.getElementById('course-modal').style.display = 'block';
  }
}
function openModal(course) {
  const modalContent = document.getElementById('modal-info');

  const courseDetails = {
    'web-dev': {
      title: 'Web Development',
      duration: '14 Weeks',
      description: `This course covers HTML, CSS, JavaScript, and backend technologies like Node.js. 
        You will build live projects and learn from experienced mentors.`,
      callToAction: 'Enroll now and start building real-world websites!'
    },
    'data-science': {
      title: 'Python',
      duration: '14 Weeks',
      description: `This course dives deep into Python for web development, data analysis, automation, and AI.
        You'll work on real-time projects and explore Python libraries like Flask, Pandas, and NumPy.`,
      callToAction: 'Enroll now and start building intelligent, practical solutions with Python!'
    },
    'ai': {
      title: 'Java',
      duration: '18 Weeks',
      description: `This course covers core and advanced Java concepts including OOP, data structures, and backend development.
        Build scalable applications and prepare for coding interviews.`,
      callToAction: 'Enroll now to create robust applications and strengthen your software engineering skills!'
    }
  };

  const selected = courseDetails[course];

  if (selected) {
    modalContent.innerHTML = `
      <h2>${selected.title}</h2>
      <p><strong>Duration:</strong> ${selected.duration}</p>
      <p>${selected.description}</p>
      <p><strong>${selected.callToAction}</strong></p>
    `;
    document.getElementById('course-modal').style.display = 'block';
  }
}

// Close modal when clicking outside modal-content
window.onclick = function(event) {
  const modal = document.getElementById('course-modal');
  const modalBox = document.getElementById('modal-box');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


  const sections = document.querySelectorAll('.section-card');

  function goToSection(index) {
    sections.forEach((section, i) => {
      section.classList.remove('active', 'left-offscreen', 'right-offscreen');

      if (i === index) {
        section.classList.add('active');
      } else if (i < index) {
        section.classList.add('left-offscreen');
      } else {
        section.classList.add('right-offscreen');
      }
    });
  }






