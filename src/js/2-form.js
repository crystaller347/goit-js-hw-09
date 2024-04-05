const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = "feedback-form-state";
const storedData = {};
const savedData = localStorage.getItem(localStorageKey);

if (localStorage.getItem(localStorageKey)) {
    const parsedStoredData = JSON.parse(savedData);
    email.value = parsedStoredData.email;
    message.value = parsedStoredData.message;
};

form.addEventListener("input", (evt) => {
    storedData.email = email.value.trim(),
    storedData.message = message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(storedData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!email.value.trim() || !message.value.trim()) {
        return alert("Please, fill all the form fields");
    };
	console.log(storedData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
