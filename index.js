function process(){

    var name= document.getElementById("name").value;
    var age= document.getElementById("age").value;
    var salary = document.getElementById("salary").value;
    var annual_salary = salary * 12;

    if (age > 25 && annual_salary >= 100000 ) {
        bonus = 0.2 * salary;
    }
    else if(age > 30 && annual_salary >=200000 ){
        bonus = 0.3 * salary;
    }
    else if(age > 35 && annual_salary >=300000){
        bonus = 0.4 * salary;
    }
    else{
        bonus = 0.1 * salary;
    }

    var totalBonus = bonus * 12;
    var msg = "Hello " + name + ", your total yearly bonus is " + totalBonus;

    p1.innerText = msg;

    document.getElementById("age").value ="";
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";

}