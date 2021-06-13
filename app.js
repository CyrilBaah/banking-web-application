let currentBalance = 0;

deposit = () => {
    let amount = parseFloat(document.getElementById('cash').value);
    currentBalance += amount;
    document.getElementById('balance').innerHTML = currentBalance;
}