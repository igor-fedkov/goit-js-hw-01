let input;
let total = 0;

input = prompt(`Введите число`, 0);
while (input != null) {
	input = input.replace(/,/, '.');
	input = Number(input);
	if (isNaN(input)) {
		alert(`Было введено не число, попробуйте еще раз`);
	} else {
		total += input;
	}
	input = prompt(`Введите число`);
}

alert(`Общая сумма чисел равна ${total}`);
