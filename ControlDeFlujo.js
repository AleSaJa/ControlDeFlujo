//Control de Flujo
//Ejercicio 1

//Parte 1
var diaSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado"];
var temp1 = temp2 = 0;
var dia = parseInt(prompt("Porporciona un día de la semana: \nValores admitidos 0 - 6 (Domingo-Sabado)"));
var hora = parseInt(prompt("Proprorciona una hora del día: \nValores admitidos 0 - 24"));

if(isNaN(dia) || isNaN(hora) || dia<0 || dia>6 || hora<0 || hora>24){
    //Comprueba que los datos ingresados sean correctos
    alert("Datos Invalidos");
}else{
    alert("Día: "+diaSemana[dia]+"\nHorario: "+hora+"hrs"+"\nEs horario de trabajo: "+businessHours(dia,hora));
}

//Función buinessHours
function businessHours(dayNumber, hourNumber){
    if((dayNumber>=1&&dayNumber<=5)&&(hourNumber>=9&&hourNumber<=18)){
        //Comprueba que el día de la semana este entre los intervalos Lunes-Viernes y la hora entre 9-18 hrs
        return true;
    }else{
        return false;
    }
}

//Parte 2


temp1 = parseInt(prompt("Porporciona un día de la semana, para el Primero de Enero: \nValores admitidos 0 - 6 (Domingo-Sabado)"));
temp2 = parseInt(prompt("Proporciona un día del año: \nValores admitidos 0 - 365"));

if( isNaN(temp1) || isNaN(temp2) || temp1<0 || temp1>6 || temp2<0 ||temp2>365 ){
    //Comprueba que los datos ingresados sean correctos
    alert("Datos Invalidos");
}else{
    temp1=getDayNumber(temp1,temp2);
    alert("El día de  "+temp2+" del calendario, fue: "+diaSemana[temp1]);
}

//Función getDayNumber
function getDayNumber(janFirstDayNumber,yearDayNumber){
    let temp=0;
    switch(yearDayNumber%7){//Ajusta el día de la sema dependiendo del valor janFirstDayNumber
        case 0:
            temp=janFirstDayNumber-2;
        break;
        case 1:
            temp=janFirstDayNumber-1;
        break;
        case 2:
            temp=janFirstDayNumber;
        break;
        case 3:
            temp=janFirstDayNumber+1;
        break;
        case 4:
            temp=janFirstDayNumber-5;
        break;
        case 5:
            temp=janFirstDayNumber-4;
        break;
        case 6:
            temp=janFirstDayNumber-3;
        break;
    }
    switch(temp){//Ajusta el valor del día dependiendo del arreglo diaSemana
        case -2:
            temp=5;
        break;
        case -1:
            temp=6;
        break;
        case 7:
            temp=0;
        break;
        case -5:
            temp=2;
        break;
        case -4:
            temp=3;
        break;
        case -3:
            temp=4;
        break;
    }
    return temp;
}

//Parte 3

var temp2 = parseInt(prompt("Calendario del 2022\nProporciona un día del año: \nValores admitidos 0 - 365"));
var hora = parseInt(prompt("Proprorciona una hora del día: \nValores admitidos 0 - 24"));

if( isNaN(hora) || isNaN(temp2) || temp2<0 || temp2>365 || hora<0 || hora>24){
    //Comprueba que los datos ingresados sean correctos
    alert("Datos Invalidos");
}else{
    alert("Calendario del 2022\nDía: "+temp2+" "+diaSemana[getDayNumber(0,temp2)]+"\nHorario: "+hora+"hrs"+"\nEs horario de trabajo: "+getDayBusinessHours(hora,temp2));
}

function getDayBusinessHours(hourNumber,yearDayNumber){
    let temp=getDayNumber(0,yearDayNumber);//Obtiene el día correspondiente a yearDayNumber, tomando como referencia el calendario 2022
    return businessHours(temp,hourNumber);//Retorna "true" si el día y el horario son laborables; en caso contrario retorna "false"
}