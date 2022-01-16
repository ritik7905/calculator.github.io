let input = document.querySelector('#user_inp');
var sqrt = document.querySelector('#squareRoot');
buttons = document.querySelectorAll('button');
var findData = "";

for (items of buttons) {

    items.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            findData += buttonText;
            input.value = findData;

        } else if (buttonText == 'C') {
            findData = '';
            input.value = findData;

        } else if (buttonText == '=') {
            input.value = eval(findData)

        }
         else {
            findData += buttonText;
            input.value = findData;

        }

    })


}




























// var table = document.querySelector('#my_table');
// let input = document.querySelector('#user_inp');
// buttons = document.querySelectorAll('button');
// let screenValue = "";


// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         // console.log(buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             input.value = screenValue;

//         } else if (buttonText == "C") {
//             screenValue = "";
//             input.value = screenValue;


//         } else if (buttonText == '=') {
//             input.value = eval(screenValue);



//         } else {
//             screenValue += buttonText;
//             input.value = screenValue;

//         }

//     })


// }