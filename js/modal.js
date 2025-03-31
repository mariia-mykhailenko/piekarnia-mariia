const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

const form = document.querySelector("form[name='contact-form']");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form["user-name"].value.trim();
  const phone = form["user-tel"].value.trim();
  const email = form["user-email"].value.trim();

  if (!name || !phone || !email) {
    alert("Proszę wypełnić wszystkie pola!");
    return;
  }

  if (!/^\+48[0-9]{9}$/.test(phone)) {
    alert("Proszę wprowadzić numer telefonu w formacie +48XXXXXXXXX");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Proszę wprowadzić prawidłowy adres e-mail!");
    return;
  }

  alert("Formularz został pomyślnie wysłany!");
  form.reset();
});


