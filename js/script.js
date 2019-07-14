//General Array function
function makeArray(n){
    this.length=n;
    var i;
    for (i=1, i<=n; i++;){
        this[i]=0;
    }
}

//Initialize Days of Week Array
var days=["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];


//Initialize Months Array
var months=["undefined","January","February","March","April","May","June","July","August","September","October","November","December"];

//Day of week function
function compute(form){
    var val1=parseInt(form.day.value,10);
    if((val1<=0)||(val1>31)){
        alert("Invalid day! Kindly input the correct day")
    }
    var val2=parseInt(form.month.value,10);
    if ((val2<=0)||(val2>12)){
        alert("Invalid month! Kindly input the correct month")
    }
    var val2x=parseInt(form.month.value,10);
    var val3=parseInt(form.year.value,10);
    if (val3<1900){
        alert("Are you that old?!")
    }
    if (val2==1){
        val2x=13;
        val3=val3-1;
    }
    if (val2==2){
        val2x=14;
        val3=val3-1;
    }
    var val4=parseInt(((val2x+1)*3)/5,10)
    var val5=parseInt(val3/4,10)
    var val6=parseInt(val3/100,10)
    var val7=parseInt(val3/400,10)
    var val8=val1+(val2x*2)+val4+val3+val5-val6+val7+2
    var val9=parseInt(val8/7,10)
    var val0=val8-(val9*7)
    form.result1.value=months[val2]+""+form.day.value+","+form.year.value
    form.result2.value=days[val0]

    //Checking both day and gender and giving an Akan Name
    if (document.getElementById('maleRadio').checked && days[val0] === 'Monday') {
        form.result3.value = 'Your Akan name is Kwadwo, which means you were born on Monday';
    } else if (document.getElementById('femaleRadio').checked  && days[val0] === 'Monday') {
        form.result3.value = 'Your Akan name is Adwoa, which means you were born on Monday';
    } else if (document.getElementById('maleRadio').checked  && days[val0] === 'Tuesday') {
        form.result3.value = 'Your Akan name is Kwabena, which means you were born on Tuesday';
    } else if (document.getElementById('femaleRadio').checked  && days[val0] === 'Tuesday') {
        form.result3.value = 'Your Akan name is Abenaa, which means you were born on Tuesday';
    } else if (document.getElementById('maleRadio').checked  && days[val0] === 'Wednesday') {
        form.result3.value = 'Your Akan name is Kwaku, which means you were born on Wednesday';
    } else if (document.getElementById('femaleRadio').checked  && days[val0] === 'Wednesday') {
        form.result3.value = 'Your Akan name is Akua, which means you were born on Wednesday';
    } else if (document.getElementById('maleRadio').checked  && days[val0] === 'Thursday') {
        form.result3.value = 'Your Akan name is Yaw, which means you were born on Thursday';
    } else if (document.getElementById('femaleRadio').checked  && days[val0] === 'Thursday') {
        form.result3.value = 'Your Akan name is Yaa, which means you were born on Thursday';
    } else if (document.getElementById('maleRadio').checked  && days[val0] === 'Friday') {
        form.result3.value = 'Your Akan name is Kofi, which means you were born on Friday';
    } else if (document.getElementById('femaleRadio').checked  && days[val0] === 'Friday') {
        form.result3.value = 'Your Akan name is Afua, which means you were born on Friday';
    } else if (document.getElementById('maleRadio').checked  && days[val0] === 'Saturday') {
        form.result3.value = 'Your Akan name is Kwame, which means you were born on Saturday';
    } else if (document.getElementById('femaleRadio').checked  && days[val0] === 'Saturday') {
        form.result3.value = 'Your Akan name is Ama, which means you were born on Saturday';
    } else if (document.getElementById('maleRadio').checked  && days[val0] === 'Sunday') {
        form.result3.value = 'Your Akan name is Kwasi, which means you were born on Sunday';
    } else if (document.getElementById('femaleRadio').checked  && days[val0] === 'Sunday') {
        form.result3.value = 'Your Akan name is Akosua, which means you were born on Sunday';
    }
 else {
    alert('Error, Some fields are Empty!!');
    document.getElementById('myForm').reset();
}
}
