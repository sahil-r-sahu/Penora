/* dropdown functionality on large screen in home.html */
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

/* Toggle desktop user menu dropdown in home.html */
const userBtn = document.getElementById('user-btn');
const userDropdown = document.getElementById('user-dropdown');
userBtn.addEventListener('click', () => {
  userDropdown.classList.toggle('hidden');
});
document.addEventListener('click', (e) => {
  if (!userBtn.contains(e.target) && !userDropdown.contains(e.target)) {
    userDropdown.classList.add('hidden');
  }
});

/* Toggle mobile menu in home.html */
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

/* toggling Q&A */
function toggleAnswer(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  // Toggle visibility
  answer.classList.toggle('hidden');

  // Rotate arrow
  icon.classList.toggle('rotate-180');
}

// LOGIN FUNCTION
function loginUser(event) {
  event.preventDefault(); // 🛑 Prevents default form reload

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // 🧩 Validate inputs
  if (email === '' || password === '') {
    alert('Please fill all required fields!');
  } else {
    alert('Login successful!');
    // 🆕 Redirect to landing/home page
    window.location.href = 'home.html';
  }
}

// 🟢 REGISTER FUNCTION
function registerUser(event) {
  event.preventDefault(); // 🛑 Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const Password = document.getElementById('password').value.trim();

  // 🧩 Validation check
  if (name === '' || email === '' || Password === '' || username === '') {
    alert('Please fill all required fields!');
  } else {
    alert('Registration successful!');
    // 🆕 Redirect to landing page
    window.location.href = 'home.html';
  }
}
