var triangleArea = function(){
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    var showOutput = document.getElementById('output');

if(isNaN(base) || isNaN(height)){
    showOutput.textContent= "you did not enter 2 numbers";
}else{
    var area = 0.5  * base * height;
     showOutput.textContent= "Area of Triangle is:  " + area;
}
}


