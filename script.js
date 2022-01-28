function calculateTip() {
    let result = document.getElementById("showResult");
    let mealCost = document.getElementById("mealCost").value;
    let tipPercentage = document.getElementById("tipPercentage").value;
    let peopleEating = document.getElementById("peopleEating").value;
    let total = document.getElementById("total");
    let desc = document.getElementById("desc");
    result = (mealCost * tipPercentage) / peopleEating;
    alert("Meal Cost: " + mealCost +
        " Tip: " + tipPercentage + 
        " People: " + peopleEating
    );

    var description = ("Each one should give " + result + "$" + " more as a tip!");
    let finalSum = parseInt(+mealCost + +(result * peopleEating));
    total.innerText = "Total: " + finalSum + "$";
    desc.innerText = description;
}

