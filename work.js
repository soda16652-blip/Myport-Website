function result() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let operator = document.getElementById("operator").value.trim();
    let num2 = parseFloat(document.getElementById("num2").value);
    let answer;

    if (isNaN(num1) || isNaN(num2)) {
        answer = "กรุณาใส่ตัวเลขให้ครบ";
    } else {
        switch (operator) {
            case "+":
                answer = num1 + num2;
                break;
            case "-":
                answer = num1 - num2;
                break;
            case "*":
                answer = num1 * num2;
                break;
            case "/":
                answer = num2 !== 0 ? num1 / num2 : "หารด้วย 0 ไม่ได้";
                break;
            default:
                answer = "เครื่องหมายไม่ถูกต้อง (+, -, *, /)";
        }
    }

    document.getElementById("Answer").innerHTML = "Answer: " + answer;
}