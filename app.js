var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector('#cash-given');
var cashLabel = document.querySelector('#cash-label');
var checkButton = document.querySelector('#check-button');
var nextButton = document.querySelector('#next-button');
var displayMessage = document.querySelector('#display-message');
var notes = document.querySelectorAll('.notes');

var noteList = [2000, 500, 100, 20, 10, 5, 1];

checkButton.style.display = 'none';
cashGiven.style.display = 'none';
cashLabel.style.display = 'none';
nextButton.addEventListener('click', function visible() {
  displayMessage.style.display = 'none';
  if (Number(billAmount.value) < 1) {
    displayMessageFn('Please enter valid bill amount');
  } else {
    (checkButton.style.display = 'block'),
      (cashGiven.style.display = 'block'),
      (cashLabel.style.display = 'block');
  }
});

checkButton.addEventListener('click', function computeChange() {
  for (let i = 0; i < noteList.length; i++) {
    notes[i].innerText = '0';
  }

  displayMessage.style.display = 'none';
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) > Number(billAmount.value)) {
      var finalAmount = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(finalAmount);
    } else if (Number(cashGiven.value) === Number(billAmount.value)) {
      displayMessageFn('No Change required to be given');
    } else {
      displayMessageFn(
        'Please enter valid Cash amount to calculate the valid change',
      );
    }
  } else {
    displayMessageFn('Please enter valid Bill Amount');
  }
});

function calculateChange(amount) {
  for (let i = 0; i < noteList.length; i++) {
    var finalNote = Math.trunc(amount / Number(noteList[i]));
    amount %= Number(noteList[i]);
    notes[i].innerText = finalNote;
  }
}

function displayMessageFn(text) {
  displayMessage.style.display = 'block';
  displayMessage.innerText = text;
}
