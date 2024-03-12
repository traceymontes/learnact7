document.addEventListener('DOMContentLoaded', function() {
    var evaluateBtn = document.getElementById('evaluateBtn');
    evaluateBtn.addEventListener('click', evaluateAge);
});

function evaluateAge() {

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var remarks = document.getElementById('remarks').value;

    age = parseInt(age);

    var outputRemarks = document.getElementById('outputRemarks');
    if (age < 18) {
        outputRemarks.innerHTML = `Hello ${name}, you are a minor. ${remarks}`;
    } else {
        outputRemarks.innerHTML = `Hello ${name}, you are an adult. ${remarks}`;
    }
}
