const data = [
    "23", "TAKE", "TAKE", "SERVE", "TAKE", "SERVE", "SERVE", "CLOSE", "TAKE", "TAKE", "TAKE", "SERVE",
    "CLOSE", "TAKE", "SERVE", "TAKE", "SERVE", "TAKE", "TAKE", "TAKE", "TAKE", "TAKE", "TAKE", "SERVE",
    "CLOSE", "EOF"
]

function number(last) {
    let late = 0;
    let remain = 0;
    let next = parseInt(last);
    for (let i = 0; i < data.length; i++) {
        const command = data[i];
        if (command === "EOF") {
            break;
        } else if (command === "TAKE") {
            late++;
            remain++;
            next++;
            if (next > 999) {
                next = 1;
            }
        } else if (command === "SERVE" && remain > 0) {
            remain--;
        } else if (command === "CLOSE") {
            console.log(`${late} ${remain} ${next}`);
            late = 0;
            remain = 0;
        }
    }
}
number(data[0]);