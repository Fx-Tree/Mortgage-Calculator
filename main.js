"use strict";
//Initalize elements
const mortgageAmount = document.getElementById("mortgage-amount");
const mortgageTerm = document.getElementById("mortgage-term");
const interestRate = document.getElementById("interest-rate");
const repaymentButton = document.getElementById("repayment-button");
const interestButton = document.getElementById("interest-button");
const monthlyRepayment = document.getElementById("monthly-repayment");
const totalRepayment = document.getElementById("total-repayment");
const repaymentRadio = document.getElementById("repayments");
const interestRadio = document.getElementById("interest-only");
const monthlyRepaymentParagraph = document.querySelector(".monthly-repay-p");
const interestParagraph = document.querySelector(".interest-p");
const clearAll = document.querySelector(".clear-all");

//to calculate repayment
repaymentButton.addEventListener("click", function () {
  let principal = mortgageAmount.value;
  let time = mortgageTerm.value;
  let rate = interestRate.value / 100;
  let A = (principal * (1 + time * rate)).toFixed(2);

  totalRepayment.textContent = A;
  monthlyRepayment.textContent = (A / (12 * time)).toFixed(2);
});

repaymentRadio.addEventListener("click", function () {
  repaymentButton.classList.remove("hide");
  interestButton.classList.add("hide");
  monthlyRepaymentParagraph.classList.remove("hide");
  interestParagraph.classList.add("hide");
  monthlyRepayment.textContent = 0;

  repaymentButton.addEventListener("click", function () {
    let principal = mortgageAmount.value;
    let time = mortgageTerm.value;
    let rate = interestRate.value / 100;
    let A = (principal * (1 + time * rate)).toFixed(2);

    totalRepayment.textContent = A;
    monthlyRepayment.textContent = (A / (12 * time)).toFixed(2);
  });
});

interestRadio.addEventListener("click", function () {
  repaymentButton.classList.add("hide");
  interestButton.classList.remove("hide");
  monthlyRepaymentParagraph.classList.add("hide");
  interestParagraph.classList.remove("hide");
  monthlyRepayment.textContent = 0;

  interestButton.addEventListener("click", function () {
    let principal = mortgageAmount.value;
    let time = mortgageTerm.value;
    let rate = interestRate.value / 100;
    let A = (principal * (1 + time * rate)).toFixed(2);
    let interest = A - principal;

    totalRepayment.textContent = A;
    monthlyRepayment.textContent = interest;
  });
});

clearAll.addEventListener("click", function () {
  mortgageAmount.value = NaN;
  mortgageTerm.value = NaN;
  interestRate.value = NaN;

  totalRepayment.textContent = 0;
  monthlyRepayment.textContent = 0;
});
