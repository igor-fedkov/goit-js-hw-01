let input;
let total = 0;
let message;

input = prompt(`Введите число`, 0);
while (input != null) {
	input = Number(input);
	if (input == NaN) {
		message = `Было введено не число, попробуйте еще раз`;
	} else {
		total += input;
	}
	input = prompt(`Введите число`);
}

message = `Общая сумма чисел равна ${total}`;
alert(message);
