const promptForNumber = () => {
    const nb = prompt('Enter any number...');
    if(nb > 0) {
        alert(`1`);
    } else if(nb < 0) {
        alert(`-1`);
    } else if(nb == 0) {
        alert(`0`);
    } else {
        alert(`Incorrect.`);
        promptForNumber();
    }
};

promptForNumber();