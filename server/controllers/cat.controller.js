


exports.meow = (call, callback) => {
    callback(null, {message: 'Meow'});
}


exports.doMath = (call, callback) => {
    let sum = call.request.number1 + call.request.number2;
    callback(null, {message: `Answer is: ${sum}` });
}