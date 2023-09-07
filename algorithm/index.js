const isInteger = (num) => {
    if (typeof num === 'number' && Number.isInteger(num) && num > 0) {
        return true;
    }

    return false;
};

const messageAlert = (message, callback) => {
    alert(message);
    callback();
};

const miniMaxSum = (arr) => {
    const sortArr = arr.sort((a, b) => a - b);

    const minSum = sortArr
        .slice(0, sortArr.length - 1)
        .reduce((acc, cur) => acc + cur, 0);

    const maxSum = sortArr
        .slice(1, sortArr.length)
        .reduce((acc, cur) => acc + cur, 0);

    const output = minSum + ' ' + maxSum;

    return output;
};

const main = () => {
    const numbers = prompt(
        'Please enter five positive integers separated by a space!',
        '1 2 3 4 5'
    );
    const arr = numbers.split(' ').map(Number);

    if (!arr || arr?.length !== 5) {
        messageAlert(
            'Please enter five positive integers separated by a space!',
            main
        );
        return;
    }

    const isArrValid = arr.every((item) => isInteger(item));

    if (!isArrValid) {
        messageAlert('Please enter five positive integers!', main);
        return;
    }

    const ouput = miniMaxSum(arr);

    alert(ouput);
};

main();
