
function calculate(price, plan, dis) {
    if (plan == 'Gold') price -= 100;
    else if (plan == 'Silver') price -= 50
    if (dis) price -= dis

    return price;

}

document.getElementById('form').onsubmit = (function (event) {
    event.preventDefault();
    document.getElementById('h2').innerText='';

    let user = document.getElementById('user-name').value;
    let price = Number(document.getElementById('price').value);
    let dis = Number(document.getElementById('dis').value);
    let plans = document.getElementsByName("plan");
    let plan = null;
    let final_price;

    for (let i = 0; i < plans.length; i++) {
        if (plans[i].checked) {
            plan = plans[i].value;
        }
    }
    let err = 0
    if (!user) {
        user = 'Guest'
    }
    if (isNaN(price) || !price) {
        console.log('Invalid price data! Transaction aborted.')
        err = 1;
    }
    if (!plan) {
        console.log('Select A plan.')
        err = 1;
    }
    if (!err) {
        final_price = calculate(price, plan, dis)
        if(final_price<0)final_price=0
        for (i = 0; i < 3; i++) {
            console.log('Processing transaction...');
        }
        document.getElementById('h2').innerText="Welcome " + user +" , your Final Price for the " + plan + 
            " is "+ final_price ;

    }






})