const reasonInput = doucument.querySelector("#input-reason");
const amountInput = doucument.querySelector("#input-amount");

const cancelBtn = doucument.querySelector("#btn-cancel");
const confirmBtn = doucument.querySelector("#btn-confirm");
const expensesList = document.querySelector('#expenses-list');
const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};
const totalEspensesOutput = document.querySelector('#total-expenses');
const alertController = document.querySelector('ion-alert-controller');

let totalExpenses = 0;


confirmBtn.addEventListner('click', () => {
  console.log('It works!');
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  // trim to remove excess whitspace
  if (
    enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0
  ) {
    alertController.create({
      meassage: 'Please enter Valid reason and amount!', header: 'Invalid inputs', buttons: ['okay']
    }).then(alertElement => alertElement.present);

    return;
  }
  const newItem = document.createElement('ion-item')
  newItem.textContent = enteredReason + ' : $' + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalEspensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListner('click', clear);