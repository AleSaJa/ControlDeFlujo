//Control de Flujo
//Ejercicio 1

//Parte 1
var diaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado"];

var dia = parseInt(prompt("Porporciona un día de la semana: \nValores admitidos 0 - 6 (Domingo-Sabado)"));
var hora = parseInt(prompt("Proprorciona una del día: \nValores admitidos 0 - 24"));

if(isNaN(temp1)||isNaN(temp2)){
    alert("Datos Invalidos");
}else{
    alert("Día: "+diaSemana[dia]+"\nHorario: "+hora+"hrs"+"\nEs horario de trabajo: "+businessHours(dia,hora));
}

//Función buinessHours
function businessHours(dayNumber, hourNumber){
    if((dayNumber>=1&&dayNumber<=5)&&(hourNumber>=9&&hourNumber<=18)){
        return "si";
    }else{
        return "no";
    }
}

//Parte 2


var temp1 = parseInt(prompt("Porporciona un día de la semana, para el Primero de Enero: \nValores admitidos 0 - 6 (Domingo-Sabado)"));
var temp2 = parseInt(prompt("Proporciona un día del año: \nValores admitidos 0 - 365"));

if(isNaN(temp1)||isNaN(temp2)){
    alert("Datos Invalidos");
}else{
    var temp=getDayNumber(temp1,temp2);
    alert("El día de  "+temp2+" del calendario, sera: "+diaSemana[temp]);
}

//Función getDayNumber
function getDayNumber(janFirstDayNumber,yearDayNumber){
    let temp=0;
    if(yearDayNumber>1&&yearDayNumber<=6){
        return janFirstDayNumber+yearDayNumber-1;
    }else if(yearDayNumber==0||yearDayNumber==1){
        return janFirstDayNumber;
    }
    switch(yearDayNumber%7){
        case 0:
            temp=janFirstDayNumber-1;
        break;
        case 1:
            temp=janFirstDayNumber;
        break;
        case 2:
            temp=janFirstDayNumber+1;
        break;
        case 3:
            temp=janFirstDayNumber+2;
        break;
        case 4:
            temp=janFirstDayNumber+3;
        break;
        case 5:
            temp=janFirstDayNumber+4;
        break;
        case 6:
            temp=janFirstDayNumber+5;
        break;
    }
    switch(temp){
        case -1:
            temp=6;
        break;
        case 7:
            temp=0;
        break;
        case 8:
            temp=1;
        break;
        case 9:
            temp=2;
        break;
        case 10:
            temp=3;
        break;
        case 11:
            temp=4;
        break;
    }
    return temp;
}

//Parte 3

var temp2 = parseInt(prompt("Calendario del 2022\nProporciona un día del año: \nValores admitidos 0 - 365"));
var hora = parseInt(prompt("Proprorciona una del día: \nValores admitidos 0 - 24"));

if(isNaN(hora)||isNaN(temp2)){
    alert("Datos Invalidos");
}else{
    alert("Calendario del 2022\nDía: "+temp2+"\nHorario: "+hora+"hrs"+"\nEs horario de trabajo: "+getDayBusinessHours(hora,temp2));
}

function getDayBusinessHours(hourNumber,yearDayNumber){
    let temp=getDayNumber(6,yearDayNumber);
    if((temp>=1&&temp<=5)&&(hourNumber>=9&&hourNumber<=18)){
        return "si";
    }else{
        return "no";
    }
}

