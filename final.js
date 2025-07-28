function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }

 
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
// function openModal(course) {
//   const modalContent = document.getElementById('modal-info');

//   const courseDetails = {
//     'web-dev': {
//       title: 'Web Development',
//       duration: '14 Weeks',
//       description: `This course covers HTML, CSS, JavaScript, and backend technologies like Node.js. 
//         You will build live projects and learn from experienced mentors.`,
//       callToAction: 'Enroll now and start building real-world websites!'
//     },
//     'data-science': {
//       title: 'Python',
//       duration: '14 Weeks',
//       description: `This course dives deep into Python for web development, data analysis, automation, and AI.
//         You'll work on real-time projects and explore Python libraries like Flask, Pandas, and NumPy.`,
//       callToAction: 'Enroll now and start building intelligent, practical solutions with Python!'
//     },
//     'ai': {
//       title: 'Java',
//       duration: '18 Weeks',
//       description: `This course covers core and advanced Java concepts including OOP, data structures, and backend development.
//         Build scalable applications and prepare for coding interviews.`,
//       callToAction: 'Enroll now to create robust applications and strengthen your software engineering skills!'
//     }
//   };

//   const selected = courseDetails[course];

//   if (selected) {
//     modalContent.innerHTML = `
//       <h2>${selected.title}</h2>
//       <p><strong>Duration:</strong> ${selected.duration}</p>
//       <p>${selected.description}</p>
//       <p><strong>${selected.callToAction}</strong></p>
//     `;
//     document.getElementById('course-modal').style.display = 'block';
//   }
// }
function openModal(course) {
  const modalContent = document.getElementById('modal-info');

  const courseDetails = {
    'web-dev': {
      title: 'Web Development',
      // video: '<video controls src="https://www.w3schools.com/html/mov_bbb.mp4" width="100%" height="200" style="border-radius: 10px; object-fit: cover;"></video>',
      video: `
        <video width="100%" height="200" autoplay muted  playsinline 
    oncontextmenu="return false;" 
    onpause="this.play();"
    style="pointer-events: none; border-radius: 10px;"> >
          <source src="Web_Development.mp4_1751700037749.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `,
      duration: '14 Weeks',
      description: `This course covers HTML, CSS, JavaScript, and backend technologies like Node.js. 
        You will build live projects and learn from experienced mentors.`,
      callToAction: 'Enroll now and start building real-world websites!'
    },
    'python': {
      title: 'Python',
       video: `
        <video width="100%" height="200" autoplay muted  playsinline 
    oncontextmenu="return false;" 
    onpause="this.play();"
    style="pointer-events: none; border-radius: 10px;"> >
          <source src="python_vid.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `,
      duration: '14 Weeks',
      description: `This course dives deep into Python for web development, data analysis, automation, and AI.
        You'll work on real-time projects and explore Python libraries like Flask, Pandas, and NumPy.`,
      callToAction: 'Enroll now and start building intelligent, practical solutions with Python!'
    },
    'java': {
      title: 'Java',
         video: `
        <video width="100%" height="200" autoplay muted  playsinline 
    oncontextmenu="return false;" 
    onpause="this.play();"
    style="pointer-events: none; border-radius: 10px;"> >
          <source src="java_vid (1).mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `,
      duration: '14 Weeks',
      description: `This course covers core and advanced Java concepts including OOP, data structures, and backend development.
        Build scalable applications and prepare for coding interviews.`,
      callToAction: 'Enroll now to create robust applications and strengthen your software engineering skills!'
    },
          'datascience': {
      title: 'Data Science',
         video: `
        <video width="100%" height="200" autoplay muted  playsinline 
    oncontextmenu="return false;" 
    onpause="this.play();"
    style="pointer-events: none; border-radius: 10px;"> >
          <source src="java_vid (1).mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `,
      duration: '14 Weeks',
      description: `This course covers essential and advanced Data Science concepts including statistics, machine learning, and data visualization. 
        Work with real-world datasets and build predictive models to solve complex problems.`,
callToAction: 'Enroll now to master data analysis, machine learning, and launch your career in Data Science!'

  };

  const selected = courseDetails[course];

  if (selected) {
    modalContent.innerHTML = `
      <h2>${selected.title}</h2>
      <p><strong>Duration:</strong> ${selected.duration}</p>
      ${selected.video}
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

const pythonBtn = document.getElementById('pythonBtn');
const javaBtn = document.getElementById('javaBtn');
const webBtn = document.getElementById('webBtn');
const dataBtn = document.getElementById('dataBtn');

const durationSection = document.getElementById('durationSection');
const durationBadges = document.querySelectorAll('.duration-badge');
const timeSlotSection = document.getElementById('timeSlotSection');
const priceAmount = document.getElementById('priceAmount');
const priceBanner = document.getElementById('priceBanner');
const finalSection = document.getElementById('finalSection');

// Show durations when domain button is clicked
[pythonBtn, javaBtn, webBtn, dataBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    durationSection.classList.remove('hidden');
    timeSlotSection.classList.add('hidden');
    priceBanner.classList.add('hidden');
    finalSection.classList.add('hidden');
  });
});

// Show time slots and price when a duration is selected
durationBadges.forEach(badge => {
  badge.addEventListener('click', () => {
    const price = badge.getAttribute('data-price');
    priceAmount.textContent = price;

    timeSlotSection.classList.remove('hidden');
    priceBanner.classList.remove('hidden');
    finalSection.classList.remove('hidden');
  });
});


 const track = document.getElementById('carouselTrack');
  let position = 0;

  const scrollTestimonials = () => {
    const cards = document.querySelectorAll('.testimonial-card');
    const cardWidth = cards[0].offsetWidth + 30; // width + margin

    position += cardWidth;

    if (position >= track.scrollWidth - track.clientWidth) {
      position = 0;
    }

    track.style.transform = `translateX(-${position}px)`;
  };

    let scrollInterval = setInterval(scrollTestimonials, 3000);

  // Pause on hover
  track.addEventListener('mouseover', () => clearInterval(scrollInterval));
  track.addEventListener('mouseout', () => scrollInterval = setInterval(scrollTestimonials, 3000));

document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById('openTermsModal');
    const closeBtn = document.getElementById('closeTermsModal');
    const modal = document.getElementById('termsModalBox');

    if (openBtn && closeBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  });






