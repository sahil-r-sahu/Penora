// Prevent default action for all links with href="#"
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener('click', (e) => e.preventDefault());
});

//Toggle 3 lines menu on mobile in index.html
document.getElementById('menu-btn').addEventListener('click', function () {
  const mobileMenu = document.getElementById('mobile-menu');

  // Fix: toggle both `hidden` and `flex`
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

//dropdown functionality on large screen in index.html 
const productsBtn = document.getElementById('pdt-btn');
const res_Btn = document.getElementById('resourses-btn');
const productsDropdown = document.getElementById('pdt-dropdown');
const res_Dropdown = document.getElementById('resourses-dropdown');

productsBtn.addEventListener('click', () => {
  productsDropdown.classList.toggle('hidden');
});
res_Btn.addEventListener('click', () => {
  res_Dropdown.classList.toggle('hidden');
});

//Closimg dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!productsBtn.contains(e.target) && !productsDropdown.contains(e.target)) {
    productsDropdown.classList.add('hidden');
  }
  if (!res_Btn.contains(e.target) && !res_Dropdown.contains(e.target)) {
    res_Dropdown.classList.add('hidden');
  }
});

// Select all accordion sections in index.html
const accordionSections = document.querySelectorAll('.extra-info');

accordionSections.forEach((section) => {
  const items = section.querySelectorAll('.accordion-item');

  items.forEach((item) => {
    const heading = item.querySelector('h2');
    const para = item.querySelector('p');

    heading.addEventListener('click', () => {
      // If clicked paragraph is already visible, do nothing
      if (!para.classList.contains('hidden')) return;

      // Hide all other paragraphs in THIS section only
      items.forEach((i) => {
        const p = i.querySelector('p');
        if (p !== para) {
          p.classList.add('hidden');
        }
      });

      // Show clicked paragraph
      para.classList.remove('hidden');
    });
  });
});

// Testimonials carousel in index.html
const testimonials = document.querySelectorAll('.testimonial');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('hidden', i !== index);
  });
}

// Next button
nextBtn.addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

// Previous button
prevBtn.addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

// Initialize first testimonial
function toggleAnswer(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  // Toggle visibility
  answer.classList.toggle('hidden');

  // Rotate arrow
  icon.classList.toggle('rotate-180');
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
