var astroList= [
    {"id":0, "name": "Daniel Bargão", "gender": "male", "age": 22, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": "s"},
    {"id":1, "name": "Vladimir Komarov", "gender": "male", "age": 30, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":2, "name": "William Anders", "gender": "male", "age": 25, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":3, "name": "Neil Armstrong", "gender": "male", "age": 92, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":4, "name": "Valentina Tereshkova", "gender": "female", "age": 40, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":5, "name": "Sally Ride", "gender": "female", "age": 24, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":6, "name": "Yuri Gagarin", "gender": "male", "age": 22, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":7, "name": "Ellen Ochoa", "gender": "female", "age": 36, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    {"id":8, "name": "Eileen Collins", "gender": "female", "age": 46, "email": "daniel.bruno.duarte.bargao@gmail.com", "ino": false, "vac": ""},
    ];

    var i = 0;
    var age = astroList.age;
    var gender = astroList.gender;

function vacColor(age, gender) { 
    if (age <= 40 && gender == 'male'){
        console.log('potato')
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

    var elem = document.getElementById("myButton1");
    i++;

    if (elem.value=="Monday-9h00") {
        elem.value = "Monday-9h20";
        document.getElementById("1").innerHTML = 'Pacient ' + (i+1) + ' appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'
        checkObj()
    }
    else if (elem.value == "Monday-9h20") {
        elem.value = "Monday-9h40";   
        document.getElementById("2").innerHTML = 'Pacient 3 appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'
    }
    else if (elem.value == "Monday-9h40") {
        elem.value = "Monday-10h00";
        document.getElementById("3").innerHTML = 'Pacient 4 appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'    
    }
    else if (elem.value == "Monday-10h00") {
        elem.value = "Monday-10h20";
        document.getElementById("4").innerHTML = 'Pacient 5 appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'
    }
    else if (elem.value == "Monday-10h20") {
        elem.value = "Monday-10h40";
        document.getElementById("5").innerHTML = 'Pacient 6 appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'
    }
    else if (elem.value == "Monday-10h40") {
        elem.value = "Monday-11h00";
        document.getElementById("6").innerHTML = 'Pacient 7 appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'
    }
    else if (elem.value == "Monday-11h00") {
        elem.value = "Monday-11h20";        
        document.getElementById("7").innerHTML = 'Pacient 8 appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'
    }
    else if (elem.value == "Monday-11h20") {
        elem.value = "Monday-11h40";
        document.getElementById("8").innerHTML = 'Pacient 9 appeard?<input onclick="yes()" type="button" value="Yes" id="myButtonYes"><input onclick="no()" type="button" value="No" id="myButtonNo">'
    }
    else if (elem.value == "Monday-11h40") {
        elem.value = "Monday-12h00";
        checkObj()
    }
    else if (elem.value == "Monday-12h00") {
        elem.value = "Monday-12h20";
    }
    else if (elem.value == "Monday-12h20") {
        elem.value = "Monday-12h40";
    }
    else if (elem.value == "Monday-12h40") {
        elem.value = "Monday-13h00";
    }
    else if (elem.value == "Monday-13h00") {
        elem.value = "Tuesday-9h00";
    }
    else if (elem.value == "Tuesday-9h00") {
        elem.value = "Tuesday-9h20";
    }
    else if (elem.value == "Tuesday-9h20") {
        elem.value = "Tuesday-9h40";
    }
    else if (elem.value == "Tuesday-9h40") {
        elem.value = "Tuesday-10h00";
    }
    else if (elem.value == "Tuesday-10h00") {
        elem.value = "Tuesday-10h20";
    }
    else if (elem.value == "Tuesday-10h20") {
        elem.value = "Tuesday-10h40";
    }
    else if (elem.value == "Tuesday-10h40") {
        elem.value = "Tuesday-11h00";
    }
    else if (elem.value == "Tuesday-11h00") {
        elem.value = "Tuesday-11h20";
    }
    else if (elem.value == "Tuesday-11h20") {
        elem.value = "Tuesday-11h40";
    }
    else if (elem.value == "Tuesday-11h40") {
        elem.value = "Tuesday-12h00";
    }
    else if (elem.value == "Tuesday-12h00") {
        elem.value = "Tuesday-12h20";
    }
    else if (elem.value == "Tuesday-12h20") {
        elem.value = "Tuesday-12h40";
    }
    else if (elem.value == "Tuesday-12h40") {
        elem.value = "Tuesday-13h00";
    }
    else if (elem.value == "Tuesday-13h00") {
        elem.value = "Wednesday-9h00";
    }
    else if (elem.value == "Wednesday-9h00") {
        elem.value = "Wednesday-9h20";
    }
    else if (elem.value == "Wednesday-9h20") {
        elem.value = "Wednesday-9h40";
    }
    else if (elem.value == "Wednesday-9h40") {
        elem.value = "Wednesday-10h00";
    }
    else if (elem.value == "Wednesday-10h00") {
        elem.value = "Wednesday-10h20";
    }
    else if (elem.value == "Wednesday-10h20") {
        elem.value = "Wednesday-10h40";
    }
    else if (elem.value == "Wednesday-10h40") {
        elem.value = "Wednesday-11h00";
    }
    else if (elem.value == "Wednesday-11h00") {
        elem.value = "Wednesday-11h20";
    }
    else if (elem.value == "Wednesday-11h20") {
        elem.value = "Wednesday-11h40";
    }
    else if (elem.value == "Wednesday-11h40") {
        elem.value = "Wednesday-12h00";
    }
    else if (elem.value == "Wednesday-12h00") {
        elem.value = "Wednesday-12h20";
    }
    else if (elem.value == "Wednesday-12h20") {
        elem.value = "Wednesday-12h40";
    }
    else if (elem.value == "Wednesday-12h40") {
        elem.value = "Wednesday-13h00";
    }
    else if (elem.value == "Wednesday-13h00") {
        elem.value = "Thursday-9h00";
    }
    else if (elem.value == "Thursday-9h00") {
        elem.value = "Thursday-9h20";
    }
    else if (elem.value == "Thursday-9h20") {
        elem.value = "Thursday-9h40";
    }
    else if (elem.value == "Thursday-9h40") {
        elem.value = "Thursday-10h00";
    }
    else if (elem.value == "Thursday-10h00") {
        elem.value = "Thursday-10h20";
    }
    else if (elem.value == "Thursday-10h20") {
        elem.value = "Thursday-10h40";
    }
    else if (elem.value == "Thursday-10h40") {
        elem.value = "Thursday-11h00";
    }
    else if (elem.value == "Thursday-11h00") {
        elem.value = "Thursday-11h20";
    }
    else if (elem.value == "Thursday-11h20") {
        elem.value = "Thursday-11h40";
    }
    else if (elem.value == "Thursday-11h40") {
        elem.value = "Thursday-12h00";
    }
    else if (elem.value == "Thursday-12h00") {
        elem.value = "Thursday-12h20";
    }
    else if (elem.value == "Thursday-12h20") {
        elem.value = "Thursday-12h40";
    }
    else if (elem.value == "Thursday-12h40") {
        elem.value = "Thursday-13h00";
    }
    else if (elem.value == "Thursday-13h00") {
        elem.value = "Friday-9h00";
    }
    else if (elem.value == "Friday-9h00") {
        elem.value = "Friday-9h20";
    }
    else if (elem.value == "Friday-9h20") {
        elem.value = "Friday-9h40";
    }
    else if (elem.value == "Friday-9h40") {
        elem.value = "Friday-10h00";
    }
    else if (elem.value == "Friday-10h00") {
        elem.value = "Friday-10h20";
    }
    else if (elem.value == "Friday-10h20") {
        elem.value = "Friday-10h40";
    }
    else if (elem.value == "Friday-10h40") {
        elem.value = "Friday-11h00";
    }
    else if (elem.value == "Friday-11h00") {
        elem.value = "Friday-11h20";
    }
    else if (elem.value == "Friday-11h20") {
        elem.value = "Friday-11h40";
    }
    else if (elem.value == "Friday-11h40") {
        elem.value = "Friday-12h00";
    }
    else if (elem.value == "Friday-12h00") {
        elem.value = "Friday-12h20";
    }
    else if (elem.value == "Friday-12h20") {
        elem.value = "Friday-12h40";
    }
    else if (elem.value == "Friday-12h40") {
        elem.value = "Friday-13h00";
    }    
} 

function yes(color) { 
    if (i >= 13){ 
        astroList[(i-13)].vac = vacColor();
        document.getElementById(i).style.background = "green";
        astroList[(i-13)].ino = true;  
    }
    else {
        astroList[i].vac = vacColor();
        document.getElementById(i).style.background = "green";
        astroList[i].ino = true; 
    } 
}
function no(color) {
   
    var x = document.getElementById(i).innerHTML;
    document.getElementById(i).style.background = "red";
    document.getElementById((i + 13)).innerHTML = x;
    alert('Email sent to daniel.bruno.duarte.bargao@gmail.com \n Message: \n Your apointment was rescheduled to tomorow at the same time');
}



    

    
    //I opted to give only 1 kind of vaccine to each category (for simplicity) and not give the choise to the nurse nor choose with stock in mind, cause we dont have a stock count

