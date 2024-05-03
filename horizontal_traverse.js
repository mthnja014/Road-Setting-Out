function myFunction() {
var yi = document.getElementById("y").value;
var xi = document.getElementById("x").value;
var bcc_pi = document.getElementById("drn1").value;
var pi_ecc = document.getElementById("drn2").value;
var R = document.getElementById("ra").value;

var I = Math.pow((pi_ecc - bcc_pi), 1);
var T = R*Math.tan(I/2*Math.PI/180);
var T1 = R*Math.tan(I/2*Math.PI/180);
var T1 = T1.toFixed(2);

var pi_bcc = Math.pow(bcc_pi, 1) - Math.pow(180, 1);
var deg1 = Math.floor(pi_bcc);
var min1 = Math.floor((Math.pow(pi_bcc, 1) - Math.pow(deg1, 1))*60);
var sec1 = Math.round(((Math.pow(pi_bcc, 1) - Math.pow(deg1, 1))*60 - Math.pow(min1, 1))*60);

var bcc_c = Math.pow(bcc_pi, 1) + Math.pow(I/4, 1);
var deg2 = Math.floor(bcc_c);
var min2 = Math.floor((Math.pow(bcc_c, 1) - Math.pow(deg2, 1))*60);
var sec2 = Math.round(((Math.pow(bcc_c, 1) - Math.pow(deg2, 1))*60 - Math.pow(min2, 1))*60);
 
var chord = 2*R*Math.sin(I/4*Math.PI/180);
var chord1 = 2*R*Math.sin(I/4*Math.PI/180);
var chord1 = chord1.toFixed(2); 

var c_ecc = Math.pow(bcc_pi, 1) + Math.pow(3*(I/4), 1);
var deg3 = Math.floor(c_ecc);
var min3 = Math.floor((Math.pow(c_ecc, 1) - Math.pow(deg3, 1))*60);
var sec3 = Math.round(((Math.pow(c_ecc, 1) - Math.pow(deg3, 1))*60 - Math.pow(min3, 1))*60);

var ecc_pi = Math.pow((pi_ecc - 180), 1);
var deg4 = Math.floor(ecc_pi);
var min4 = Math.floor((Math.pow(ecc_pi, 1) - Math.pow(deg4, 1))*60);
var sec4 = Math.round(((Math.pow(ecc_pi, 1) - Math.pow(deg4, 1))*60 - Math.pow(min4, 1))*60);

var xbcc = Math.pow(xi, 1) + T*Math.cos(pi_bcc*Math.PI/180);
var xbccp = Math.pow(xi, 1) + T*Math.cos(pi_bcc*Math.PI/180);
var xbccp = xbccp.toFixed(2);

var ybcc = Math.pow(yi, 1) + T*Math.sin(pi_bcc*Math.PI/180);
var ybccp = Math.pow(yi, 1) + T*Math.sin(pi_bcc*Math.PI/180);
var ybccp = ybccp.toFixed(2);

var xc = Math.pow(xbcc, 1) + chord*Math.cos(bcc_c*Math.PI/180);
var xcp = Math.pow(xbcc, 1) + chord*Math.cos(bcc_c*Math.PI/180);
var xcp = xcp.toFixed(2);

var yc = Math.pow(ybcc, 1) + chord*Math.sin(bcc_c*Math.PI/180);
var ycp = Math.pow(ybcc, 1) + chord*Math.sin(bcc_c*Math.PI/180);
var ycp = ycp.toFixed(2);

var xecc = Math.pow(xc, 1) + chord*Math.cos(c_ecc*Math.PI/180);
var xeccp = Math.pow(xc, 1) + chord*Math.cos(c_ecc*Math.PI/180);
var xeccp = xeccp.toFixed(2);

var yecc = Math.pow(yc, 1) + chord*Math.sin(c_ecc*Math.PI/180);
var yeccp = Math.pow(yc, 1) + chord*Math.sin(c_ecc*Math.PI/180);
var yeccp = yeccp.toFixed(2);

var xii = Math.pow(xecc, 1) + T*Math.cos(ecc_pi*Math.PI/180);
var xiip = Math.pow(xecc, 1) + T*Math.cos(ecc_pi*Math.PI/180);
var xiip = xiip.toFixed(2);

var yii = Math.pow(yecc, 1) + T*Math.sin(ecc_pi*Math.PI/180);
var yiip = Math.pow(yecc, 1) + T*Math.sin(ecc_pi*Math.PI/180);
var yiip = yiip.toFixed(2);

var dir = "Direction";
var dist = "Distance";
var sta = "Station";
var yy = "Y";
var xx = "X";

var cln = ".....................................................................................................................................................................................................................";
var cln2 = "_____________________________________________________________________________________________________________________________";

var condi1 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln12'>" + cln2 + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='cln9'>" + cln2 + "</div>" + "<div class='cln10'>" + cln2 + "</div>" + "<div class='cln11'>" + cln2 + "</div>" + "<div class='c11'>" + dir + "</div>" + "<div class='c12'>" + dist + "</div>" + "<div class='c13'>" + sta + "</div>" + "<div class='c14'>" +  yy + "</div>" + "<div class='c15'>" + xx + "</div>" + "<div class='c23'>" + "PI" + "</div>" + "<div class='c24'>" + yi + "</div>" + "<div class='c25'>" + xi + "</div>" + "<div class='c31'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c32'>" + T1 + "</div>" + "<div class='c43'>" + "BCC" + "</div>" + "<div class='c44'>" + ybccp + "</div>" + "<div class='c45'>" + xbccp + "</div>" + "<div class='c51'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c52'>" + chord1 + "</div>" + "<div class='c63'>" + "C" + "</div>" + "<div class='c64'>" + ycp + "</div>" + "<div class='c65'>" + xcp + "</div>" + "<div class='c71'>" + deg3 + "." + min3 + "." + sec3 + "</div>" + "<div class='c72'>" + chord1 + "</div>" + "<div class='c83'>" + "ECC" + "</div>" + "<div class='c84'>" + yeccp + "</div>" + "<div class='c85'>" + xeccp + "</div>" + "<div class='c91'>" + deg4 + "." + min4 + "." + sec4 + "</div>" + "<div class='c92'>" + T1 + "</div>" + "<div class='c103'>" + "PI" + "</div>" + "<div class='c104'>" + yiip + "</div>" + "<div class='c105'>" + xiip + "</div>";

if (yi == "" || xi == "" || bcc_pi == "" || pi_ecc == "" || R == "") {
document.getElementById("ds").innerHTML = "Please Insert into all Input Fields!";
}else if (R < 0 || I < 0) {
document.getElementById("ds").innerHTML = "This version does not support Left Handed curves!";
}else
document.getElementById("ds").innerHTML = condi1;
}
