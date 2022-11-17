let btn = document.querySelector("button")
let input = document.querySelector("input")

btn.onclick = () => {
	if (input.value == "вектор") {
		window.location.replace("finish.html");
	} else {
		input.value = "Неправильно!"
	}
}