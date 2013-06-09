var buttons = document.getElementsByTagName("INPUT");
for (var i = 0; i < buttons.length; i++) {
	if (buttons[i].name === "q") {
		buttons[i].focus();
	}
}
