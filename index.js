var astroList= [
    {"id":0, "name": "Daniel Bargão", "gender": "male", "age": 22, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":1, "name": "Vladimir Komarov", "gender": "male", "age": 30, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":2, "name": "William Anders", "gender": "male", "age": 25, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":3, "name": "Neil Armstrong", "gender": "male", "age": 92, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":4, "name": "Valentina Tereshkova", "gender": "female", "age": 40, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":5, "name": "Sally Ride", "gender": "female", "age": 24, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":6, "name": "Yuri Gagarin", "gender": "male", "age": 22, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":7, "name": "Ellen Ochoa", "gender": "female", "age": 36, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":8, "name": "Eileen Collins", "gender": "female", "age": 46, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    ];

    var i = -1;
    var age = astroList[0].age;
    var gender = astroList[0].gender;
    var elem = document.getElementById("myButton1");
    var x = 00;
    var y = 9;
    var z = 'Monday';

function hours(){
    if(y==13 && x==00){
        x=20;
        z = 'Tuesday';
        y=9
    }
    else{
        if (x==40){
            x=00;
            y++
        }
        else {
            x = x + 20
        }

    }
    elem.value = z + ' - ' + y + 'h' + x 

}

function vacColor(age, gender) { 
    if (age <= 40 && gender == 'male'){
        return astroList[i].vac = 'red';
        }
    else if (age <= 40 && gender == 'female'){
        return astroList[i].vac = 'green';
        }
    else if (age > 40){
        return astroList[i].vac = 'purple';
        }
    else { return null}           
}
function checkObj(){
        var len = astroList.length; //getting the hole astroList with only id and name information
        for ( var i = 0; i < len; i++) {
            var astro = astroList[i];
            console.log(astro.id + "\n" +  astro.name + "\n" +  astro.gender + "\n" +  astro.age + "\n" +  astro.email + "\n" +  astro.ino + "\n" + astro.vac)
    }
}
function change() {//Didn't make the function change() adaptative for time consuming purposes, didn't came to mind how to do it on the spot without research and had no internet. Due to Vodafone ciber attack
    i++;
    if(document.getElementById(i).innerHTML === ''){
        hours();
    }
    else{    
        hours();
        if(i<12){
            a=-12
            document.getElementById(i).innerHTML = 'Pacient ' + (i+1) + ' appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">';
        }else if(i>=12 && i<24){
            document.getElementById(i).innerHTML = 'Pacient ' + (i+a+1) + ' appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">';
            b=-24
        }else if(i>=24 && i<35){
            c=-35
            document.getElementById(i).innerHTML = 'Pacient ' + (i+b+1) + ' appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">';
        }else if(i>=35 && i<48){
            d=-48
            document.getElementById(i).innerHTML = 'Pacient ' + (i+c) + ' appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">';
        }
        else {
            document.getElementById(i).innerHTML = 'Pacient ' + (i+d+1) + ' appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">';
        }
    }
}   
    
function yes() { 
    if (i >= 12 && i<24){ 
        console.log (i)
        astroList[(i-12)].vac = vacColor(astroList[i].age, astroList[i].gender);
        document.getElementById(i).style.background = "green";
        astroList[(i-12)].ino = true;  
    } else if (i >= 24 && i<35){ 
        console.log (i)
        astroList[(i-24)].vac = vacColor(astroList[i].age, astroList[i].gender);
        document.getElementById(i).style.background = "green";
        astroList[(i-24)].ino = true;  
    } else if (i >= 35 && i<48){ 
        console.log (i)
        astroList[(i-35)].vac = vacColor(astroList[i].age, astroList[i].gender);
        document.getElementById(i).style.background = "green";
        astroList[(i-35)].ino = true;  
    } else if (i >= 48 && i<60){ 
        console.log (i)
        astroList[(i-48)].vac = vacColor(astroList[i].age, astroList[i].gender);
        document.getElementById(i).style.background = "green";
        astroList[(i-48)].ino = true;  
    }
    else {
        astroList[i].vac = vacColor(astroList[i].age, astroList[i].gender);
        document.getElementById(i).style.background = "green";
        astroList[i].ino = true; 
    } 
}
function no() {
    var x = document.getElementById(i).innerHTML;
    document.getElementById(i).style.background = "red";
    document.getElementById((i + 12)).innerHTML = x;
    alert('Email sent to daniel.bruno.duarte.bargao@gmail.com \n Message: \n Your apointment was rescheduled to tomorow at the same time');
    checkObj()
}