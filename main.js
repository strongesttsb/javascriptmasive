const array = []; // Создаем пустой массив

for (let i = 0; i < Infinity; i++) {
    const command = prompt("Введите команду");

    if (command === null || command.toLowerCase() === "stop") {
        break; // Выходим из цикла при вводе команды stop
    }

    const [action, value] = command.split(",").map(item => item.trim()); // Разделяем команду и значение

    if (action.toLowerCase() === "add") {
        if (!array.includes(value)) {
            array.push(value); // Добавляем элемент в массив, если его нет
            console.log(array); // Выводим массив сразу после добавления
        }
    } else if (action.toLowerCase() === "del") {
        const index = array.indexOf(value); // Ищем индекс элемента
        if (index !== -1) {
            array.splice(index, 1); // Удаляем элемент из массива
            console.log(array); // Выводим массив сразу после удаления
        }
    }
}
