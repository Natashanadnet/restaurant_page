import "./style.css";

function contactContent() {
  const contactCont = document.createElement("div");
  contactCont.classList.add("contact-content");
  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";
  const form = document.createElement("form");
  form.innerHTML = `<div class="name fl">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
</div>
<div class="email fl">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</div>
<div class="text-area fl">
  <label for="message">Message:</label>
  <textarea name="mesage" id="message" cols="50" rows="5"></textarea>
</div>
<button type="submit" class="form-btn">Submit</button>`;
  contactCont.append(h2, form);
  return contactCont;
}

export { contactContent };
