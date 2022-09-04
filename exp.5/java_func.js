function q1(){
    var txt = document.getElementById("sent").value;
    s = txt.split(" ")
    var max_s = s[0].length;
    var min_s = s[0].length;
    var al = s[0];
    var ash = s[0];

    for (var i = 1; i < s.length; i++){
        if (s[i].length > max_s){
            al = s[i];
            max_s = s[i].length;
        }
        if (s[i].length < min_s){
            ash = s[i];
            min_s = s[i].length;
        }
    }

    document.getElementById("sh").innerHTML="Shortest string: "+ash;
    document.getElementById("ln").innerHTML="Longest string: "+al;
}

function q2(){
    //extract data from input box
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    //change the content of html element
    var bmi = weight/(height*height);
    var typ;
    if (bmi < 18){
        typ = "Underweight";
    }
    else if (bmi >= 18 && bmi<25){
        typ = "Normal";
    } 
    else if (bmi >= 25 && bmi<30){
        typ = "Overweight";
    }
    else{
        typ = "Obese";
    }

    document.getElementById("score").innerHTML="Your BMI is: "+bmi;
    document.getElementById("type").innerHTML="Your body type is: "+typ;
}

function q3(){
    // create an array of strings
    var arr = ["Orange.jpg","Apple.png"];
    
    var r = parseFloat(document.getElementById("rows").value);
    var c = parseFloat(document.getElementById("columns").value);
    
    for (var i = 0; i<r; i++){
        for(var j=0; j<c; j++){
            //generate random number in the range of 0 to 10
            var number = Math.floor((Math.random() *arr.length)+0);
            document.getElementById("garden").innerHTML += "<img src="+arr[number]+" width =100px height= 100px>"; // += for appending the text
        }
        document.getElementById("garden").innerHTML += "<br>";
    }
}

function q4(){
    var val = document.getElementById("data").value;
    var f_index = document.getElementById("from").selectedIndex; // return index
    var t_index = document.getElementById("to").selectedIndex; // return index

    if (f_index == 0 & t_index == 0){
        val = val*0.015;
    }
    else if (f_index == 1 & t_index == 1){
        val = val*67.12;
    }
    else if (f_index == 1 & t_index == 0){
        val = "$"+val;
    }
    else if (f_index == 0 & t_index == 1){
        val = "Rs."+val;
    }

    document.getElementById("answer").innerHTML = ("Converted value: "+val)
}

var h_no = 0;
var t_no = 0;
function q5(){
    // attach the event handler to the button
    var S = ["heads.png", "tails.jpg"]
    var number = Math.floor((Math.random() *S.length)+0);
    document.getElementById("coin").src = S[number];

    if (number == 0){
        h_no++;
        console.log(h_no);
        document.getElementById("num_heads").innerHTML = h_no;
    }
    if (number == 1){
        t_no++;
        console.log(t_no);
        document.getElementById("num_tails").innerHTML = t_no;
    }

}

function q6(){
    var s = parseInt(document.getElementById("small").value);
    var m = parseInt(document.getElementById("medium").value);
    var l = parseInt(document.getElementById("large").value);
    var tip = document.querySelector('input[name="tip"]:checked').value;
    var ord = s*100+m*200+l*400;
    var tax = 0.09*ord;
    var price = ord+tax+tip/100*(tax+ord);
    document.getElementById("price").innerHTML=price;
}