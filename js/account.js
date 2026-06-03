const tabButtons = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".account-form");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedTab = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    forms.forEach(form => form.classList.remove("active"));

    if (selectedTab === "login") {
      document.getElementById("loginForm").classList.add("active");
    } else {
      document.getElementById("registerForm").classList.add("active");
    }
  });
});

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const message = document.getElementById("registerMessage");

  if (password.length < 6) {
    message.textContent = "Şifre en az 6 karakter olmalıdır.";
    message.className = "form-message error";
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("vianovaUser", JSON.stringify(user));

  message.textContent = "Üyeliğiniz başarıyla oluşturuldu.";
  message.className = "form-message success";

  registerForm.reset();
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("loginMessage");

  const savedUser = JSON.parse(localStorage.getItem("vianovaUser"));

  if (!savedUser) {
    message.textContent = "Kayıtlı kullanıcı bulunamadı. Önce üye olun.";
    message.className = "form-message error";
    return;
  }

  if (savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("loggedInUser", savedUser.name);
    message.textContent = `Hoş geldiniz, ${savedUser.name}.`;
    message.className = "form-message success";
  } else {
    message.textContent = "E-posta veya şifre hatalı.";
    message.className = "form-message error";
  }
});