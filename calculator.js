
function checkTotal() {
	var numAssign = 0;
	var value1 = document.getElementById('x1').value;
	var value2 = document.getElementById('y1').value;

    if (value1 != '' && value2 != '') {
        numAssign += 1;
        document.getElementById('p1').value = value1/value2;
    }

    value1 = document.getElementById('x2').value;
    value2 = document.getElementById('y2').value;
    if (value1 != '' && value2 != '') {
        numAssign += 1;
        document.getElementById('p2').value = value1/value2;
    }

    value1 = document.getElementById('x3').value;
    value2 = document.getElementById('y3').value;
    if (value1 != '' && value2 != '') {
        numAssign += 1;
        document.getElementById('p3').value = value1/value2;
    }

    value1 = document.getElementById('x4').value;
    value2 = document.getElementById('y4').value;
    if (value1 != '' && value2 != '') {
        numAssign += 1;
        document.getElementById('p4').value = value1/value2;
    }

    document.getElementById('total').innerHTML = numAssign;
}
