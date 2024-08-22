'use strict';

// !У всіх задачах доступ до форм лише через document.forms (де це можливо)!

// 1. Є HTML-форма:
{
	/* <form name="form">
  <input type="text" name="input1">
  <input type="text" name="input2">
  <button name="btn">Swap</button>
</form> */
}
// Після натискання на кнопку, виконайте обмін вмістом між двома інпутами. Під час повторного натискання знову змінити вміст інпутів

// const form = document.forms['form'];
// const input1 = form.input1;
// const input2 = form.input2;
// const btn = form.btn;
// btn.addEventListener('click', function () {
// 	const tempValue = input1.value;

// 	input1.value = input2.value;
// 	input2.value = tempValue;
// });

// 2. Є HTML-форма:
// При натисканні Заблокувати кнопка блокує інпут за допомогою атрибута disabled, а інша розблоковує.
// function blockInput() {
//   document.forms["myForm"]["myInput"].disabled = true;
// }
// function unblockInput() {
//   document.forms["myForm"]["myInput"].disabled = false;
// }

// 3. Є HTML-форма:
// <form name="form">
//   <input type="text" name="input">
//   <a href="https://www.youtube.com/watch?v=OtJkXuqyjkk&list=PLRD56Ql8zouzzCQWIwysCdq8UvC6LmCYh&index=16">Click here</a>
// </form>
// Напишіть код, який під час натискання на лінк заповнюватиме інпут значенням з атрибута href.
// ! Розмітку не можна.

// document.forms['form_link'].querySelector('a').onclick = function (event) {
// 	event.preventDefault();
// 	document.forms['form_link']['input'].value = this.href;
// };

// 4. Є HTML-форма:
// <form name="form">
//   <textarea name="textarea"></textarea>
//   <button name="btn">Statistics</button>
// </form>
// <div>
//   Spaces: 10
//   Consonants: 5
//   Vowels: 4
// </div>
// Напишіть скрипт, який під час натискання на кнопку отримуватиме текст із багаторядкового текстового поля, підраховуватиме статистику (приклад вище) і результат виводитиме в div

// document.forms['form_count']['btn'].addEventListener('click', function (event) {
// 	const text = document.forms['form_count']['textarea'].value;
// 	const spaces = (text.match(/ /g) || []).length;
// 	const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;
// 	const consonants = (
// 		text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []
// 	).length;
// 	document.getElementById('stats').innerHTML = `
//     Spaces: ${spaces}<br>
//     Consonants: ${consonants}<br>
//     Vowels: ${vowels}
//   `;
// });

// 5. Є HTML-форма:
// <form name="form">
//   <input type="file" name="file">
//   <button name="btn">Upload image</button>
// </form>
// Ваше завдання - завантажити картинку і по кліку на кнопку вивести її в HTML. Якщо картинка не вибрана - вивести повідомлення: "You should upload an image". Також має бути кнопка видалення картинки. Гарно стилізувати (згадаєте, що таке css)
// const fileUrl = URL.createObjectURL(file)

// document.forms['form_image']['btn'].addEventListener('click', function () {
// 	const fileInput = document.forms['form_image']['file'];
// 	const file = fileInput.files[0];
// 	const messageDiv = document.getElementById('message');
// 	const imageContainer = document.getElementById('image-container');
// 	const removeBtn = document.getElementById('remove-btn');
// 	messageDiv.textContent = '';

// 	if (file) {
// 		const fileUrl = URL.createObjectURL(file);
// 		imageContainer.innerHTML = `<img src="${fileUrl}" alt="Uploaded image">`;
// 		removeBtn.style.display = 'block';
// 	} else {
// 		messageDiv.textContent = 'Ви повинні вибрати зображення';
// 	}
// });

// document.getElementById('remove-btn').addEventListener('click', function () {
// 	const imageContainer = document.getElementById('image-container');
// 	const removeBtn = document.getElementById('remove-btn');
// 	imageContainer.innerHTML = '';
// 	removeBtn.style.display = 'none';
// });
