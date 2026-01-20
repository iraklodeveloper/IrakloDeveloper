// "ბანკომატის ფაქტორიალი"

let on = true
while (on) {
    let factorialNumberInput = prompt('ჩაწერეთ სასურველი თანხის რიცხვი, 1-დან 10-მდე');
    if (factorialNumberInput === null || factorialNumberInput === '') {
        alert('ველი ცარიელია!');
        continue
    }
    let number = Number(factorialNumberInput);
    if (isNaN(number)) {
        alert('ჩაწერეთ მხოლოდ ციფრი!');
        continue
    } else if(number > 10) {
        alert('რიცხვი 10-ზე მეტია! შეიყვანეთ რიცხვი 1-დან 10-მდე')
        continue
    } else if (number % 2 === 0) {
        alert('რიცხვი ლუწია! ლუწ რიცხვს არ იღებს ბანკომატი');
        continue
    } else {
        let result = numberFactorial(number);
        alert(`შენი რიცხვის ფაქტორიალი უდრის: ${result} !`);
    }
    on = confirm('გსურთ გამოთვალოთ ახალი რიცხვის ფაქტორიალი? Ok - დიახ; CANCEL - არა.')
}
function numberFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * numberFactorial(n - 1)
}