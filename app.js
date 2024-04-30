import inquirer from "inquirer";
let totalAmount = 20000;
let pinCode = 1234;
let userInp = await inquirer.prompt([
    {
        name: "userPin",
        message: "Please enter your pin Code here",
        type: "number",
    },
]);
if (userInp.userPin === pinCode) {
    let userInpOfOption = await inquirer.prompt([
        {
            name: "options",
            message: "Select from these options",
            type: "list",
            choices: ["withdraw", "check-balance", "Fast-cash"],
        },
    ]);
    //   Work for withdraw option
    if (userInpOfOption.options === "withdraw") {
        let withdrawUserInp = await inquirer.prompt([
            {
                name: "withrawAmount",
                message: "Enter your amount you want to withdraw",
                type: "number",
            },
        ]);
        if (totalAmount >= withdrawUserInp.withrawAmount) {
            let remaing = (totalAmount -= withdrawUserInp.withrawAmount);
            console.log("Your remaining balnce :" + "Rs." + remaing);
        }
        else {
            console.log("You don't have enough balance to withdraw");
        }
    }
    //   Work for check balance option
    else if (userInpOfOption.options === "check-balance") {
        console.log("Remain Balance: " + "Rs." + totalAmount);
    }
    //   work for fast cash option
    else if (userInpOfOption.options === "Fast-cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastcashoptions",
                message: "Select from these options",
                type: "list",
                choices: [1000, 5000, 10000, 15000, 20000],
            },
        ]);
        let fastrem = (totalAmount -= fastcash.fastcashoptions);
        console.log("Your remaing balance: " + "Rs." + fastrem);
    }
}
else {
    console.log("You Enter wrong pin code **** .");
}
