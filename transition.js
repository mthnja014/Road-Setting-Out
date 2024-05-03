function myFunction() {
var yi = document.getElementById("y").value;
var xi = document.getElementById("x").value;
var btc_pi = document.getElementById("drn1").value;
var pi_etc = document.getElementById("drn2").value;
var R = document.getElementById("ra").value;
var L = document.getElementById("le").value;

var phi = Math.abs(Math.pow(L, 1))/Math.pow(2*R, 1);
var X = Math.pow(L, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi, 2))/Math.pow(10, 1));
var Y = Math.pow(L, 1)*(Math.pow(phi,1)/Math.pow(3, 1) - Math.pow(phi, 3)/Math.pow(105, 1));
var shift = Math.pow(Y, 1) - Math.pow(R, 1)*(Math.pow(1, 1) - Math.cos(Math.pow(phi, 1)));
var I = Math.pow(pi_etc, 1) - Math.pow(btc_pi, 1);

//pi to btc
var T = Math.pow(X, 1) - Math.pow(R, 1)*Math.sin(phi) + (Math.pow(R, 1) + Math.pow(shift, 1))*Math.tan(I/2*Math.PI/180);
var pi_btc = Math.pow(btc_pi, 1) - Math.pow(180, 1);

var Tp = Math.pow(X, 1) - Math.pow(R, 1)*Math.sin(phi) + (Math.pow(R, 1) + Math.pow(shift, 1))*Math.tan(I/2*Math.PI/180);
var Tp = Tp.toFixed(2);

var deg1 = Math.floor(pi_btc);
var min1 = Math.floor((Math.pow(pi_btc, 1) - Math.pow(deg1, 1))*60);
var sec1 = Math.round(((Math.pow(pi_btc, 1) - Math.pow(deg1, 1))*60 - Math.pow(min1, 1))*60);

var ybtc = Math.pow(yi, 1) + Math.pow(T, 1)*Math.sin(Math.pow(pi_btc*Math.PI/180, 1));
var ybtcp = Math.pow(yi, 1) + Math.pow(T, 1)*Math.sin(Math.pow(pi_btc*Math.PI/180, 1));
var ybtcp = ybtcp.toFixed(2);

var xbtc = Math.pow(xi, 1) + Math.pow(T, 1)*Math.cos(Math.pow(pi_btc*Math.PI/180, 1));
var xbtcp = Math.pow(xi, 1) + Math.pow(T, 1)*Math.cos(Math.pow(pi_btc*Math.PI/180, 1));
var xbtcp = xbtcp.toFixed(2);

//btc to bcc
var dbtc_bcc = Math.sqrt(Math.abs(Math.pow(X, 2)) + Math.abs(Math.pow(Y, 2)));
var theta = Math.atan(Math.pow(Y,1)/Math.pow(X, 1))*180/Math.PI;
var btc_bcc = Math.pow(theta, 1) + Math.pow(btc_pi, 1);

var dbtc_bccp = Math.sqrt(Math.abs(Math.pow(X, 2)) + Math.abs(Math.pow(Y, 2)));
var dbtc_bccp = dbtc_bccp.toFixed(2);

var deg2 = Math.floor(btc_bcc);
var min2 = Math.floor((Math.pow(btc_bcc, 1) - Math.pow(deg2, 1))*60);
var sec2 = Math.round(((Math.pow(btc_bcc, 1) - Math.pow(deg2, 1))*60 - Math.pow(min2, 1))*60);

var ybcc = Math.pow(ybtc, 1) + Math.pow(dbtc_bcc, 1)*Math.sin(Math.pow(btc_bcc, 1)*Math.PI/180);
var ybccp = Math.pow(ybtc, 1) + Math.pow(dbtc_bcc, 1)*Math.sin(Math.pow(btc_bcc, 1)*Math.PI/180);
var ybccp = ybccp.toFixed(2);

var xbcc = Math.pow(xbtc, 1) + Math.pow(dbtc_bcc, 1)*Math.cos(Math.pow(btc_bcc, 1)*Math.PI/180);
var xbccp = Math.pow(xbtc, 1) + Math.pow(dbtc_bcc, 1)*Math.cos(Math.pow(btc_bcc, 1)*Math.PI/180);
var xbccp = xbccp.toFixed(2);

//bcc to ecc
var tan_dir = Math.pow(btc_pi, 1) + phi*180/Math.PI;
var bcc_ecc = Math.pow(tan_dir, 1) + (Math.pow(I, 1)/2 - Math.pow(phi*180/Math.PI, 1));
var dbcc_ecc = Math.pow(2, 1)*Math.pow(R, 1)*Math.sin(I/2*Math.PI/180 - Math.pow(phi, 1));

var dbcc_eccp = Math.pow(2, 1)*Math.pow(R, 1)*Math.sin(I/2*Math.PI/180 - Math.pow(phi, 1));
var dbcc_eccp = dbcc_eccp.toFixed(2);

var deg3 = Math.floor(bcc_ecc);
var min3 = Math.floor((Math.pow(bcc_ecc, 1) - Math.pow(deg3, 1))*60);
var sec3 = Math.round(((Math.pow(bcc_ecc, 1) - Math.pow(deg3, 1))*60 - Math.pow(min3, 1))*60);

var yecc = Math.pow(ybcc, 1) + Math.pow(dbcc_ecc, 1)*Math.sin(Math.pow(bcc_ecc, 1)*Math.PI/180);
var yeccp = Math.pow(ybcc, 1) + Math.pow(dbcc_ecc, 1)*Math.sin(Math.pow(bcc_ecc, 1)*Math.PI/180);
var yeccp = yeccp.toFixed(2);

var xecc = Math.pow(xbcc, 1) + Math.pow(dbcc_ecc, 1)*Math.cos(Math.pow(bcc_ecc, 1)*Math.PI/180);
var xeccp = Math.pow(xbcc, 1) + Math.pow(dbcc_ecc, 1)*Math.cos(Math.pow(bcc_ecc, 1)*Math.PI/180);
var xeccp = xeccp.toFixed(2);

// ecc to etc
var tan_dir1 = Math.pow(bcc_ecc, 1) + (Math.pow(I, 1)/Math.pow(2, 1) - Math.pow(phi*180/Math.PI, 1));
var ecc_etc = Math.pow(pi_etc, 1) - Math.pow(theta, 1);
var decc_etc = Math.sqrt(Math.abs(Math.pow(X, 2)) + Math.abs(Math.pow(Y, 2)));

var decc_etcp = Math.sqrt(Math.abs(Math.pow(X, 2)) + Math.abs(Math.pow(Y, 2)));
var decc_etcp = decc_etcp.toFixed(2);

var deg4 = Math.floor(ecc_etc);
var min4 = Math.floor((Math.pow(ecc_etc, 1) - Math.pow(deg4, 1))*60);
var sec4 = Math.round(((Math.pow(ecc_etc, 1) - Math.pow(deg4, 1))*60 - Math.pow(min4, 1))*60);

var yetc = Math.pow(yecc, 1) + Math.pow(decc_etc, 1)*Math.sin(Math.pow(ecc_etc, 1)*Math.PI/180);
var yetcp = Math.pow(yecc, 1) + Math.pow(decc_etc, 1)*Math.sin(Math.pow(ecc_etc, 1)*Math.PI/180);
var yetcp = yetcp.toFixed(2);

var xetc = Math.pow(xecc, 1) + Math.pow(decc_etc, 1)*Math.cos(Math.pow(ecc_etc, 1)*Math.PI/180);
var xetcp = Math.pow(xecc, 1) + Math.pow(decc_etc, 1)*Math.cos(Math.pow(ecc_etc, 1)*Math.PI/180);
var xetcp = xetcp.toFixed(2);

// etc to pi
var etc_pi = Math.pow(pi_etc, 1) - Math.pow(180, 1);
var dect_pi = Math.pow(T, 1);

var dect_pip = Math.pow(T, 1);
var dect_pip = dect_pip.toFixed(2);

var deg5 = Math.floor(etc_pi);
var min5 = Math.floor((Math.pow(etc_pi, 1) - Math.pow(deg5, 1))*60);
var sec5 = Math.round(((Math.pow(etc_pi, 1) - Math.pow(deg5, 1))*60 - Math.pow(min5, 1))*60);

var ypi = Math.pow(yetc, 1) + Math.pow(dect_pi, 1)*Math.sin(Math.pow(etc_pi*Math.PI/180, 1));
var ypip = Math.pow(yetc, 1) + Math.pow(dect_pi, 1)*Math.sin(Math.pow(etc_pi*Math.PI/180, 1));
var ypip = ypip.toFixed(2);

var xpi = Math.pow(xetc, 1) + Math.pow(dect_pi, 1)*Math.cos(Math.pow(etc_pi*Math.PI/180, 1));
var xpip = Math.pow(xetc, 1) + Math.pow(dect_pi, 1)*Math.cos(Math.pow(etc_pi*Math.PI/180, 1));
var xpip = xpip.toFixed(2);

var dir = "Direction";
var dist = "Distance";
var sta = "Station";
var yy = "Y";
var xx = "X";
var tra0 = "<p1 style='color: transparent'>_________</p1>";
var tra = "<p1 style='color: transparent'>____________</p1>";
var tra1 = "<p1 style='color: transparent'>______________</p1>";
var tra2 = "<p1 style='color: transparent'>_____________________________________________</p1>";
var lnb = "________________________________________________________________________________________________"

var cln = ".....................................................................................................................................................................................................................";
var cln2 = "_____________________________________________________________________________________________________________________________";

var condi1 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='cln9'>" + cln2 + "</div>" + "<div class='cln10'>" + cln2 + "</div>" + "<div class='cln11'>" + cln2 + "</div>" + "<div class='cln12'>" + cln2 + "</div>" + "<div class='cln13'>" + cln2 + "</div>" + "<div class='cln14'>" + cln2 + "</div>" + "<div class='c11'>" + dir + "</div>" + "<div class='c12'>" + dist + "</div>" + "<div class='c13'>" + sta + "</div>" + "<div class='c14'>" +  yy + "</div>" + "<div class='c15'>" + xx + "</div>" + "<div class='c23'>" + "PI" + "</div>" + "<div class='c24'>" + yi + "</div>" + "<div class='c25'>" + xi + "</div>" + "<div class='c31'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c32'>" + Tp + "</div>" + "<div class='c43'>" + "BTC" + "</div>" + "</div>" + "<div class='c44'>" + ybtcp + "</div>" + "<div class='c45'>" + xbtcp + "</div>" + "<div class='c51'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c52'>" + dbtc_bccp + "</div>" + "<div class='c63'>" + "BCC" + "</div>" + "<div class='c64'>" + ybccp + "</div>" + "<div class='c65'>" + xbccp + "</div>" + "<div class='c71'>" + deg3 + "." + min3 + "." + sec3 + "</div>" + "<div class='c72'>" + dbcc_eccp + "</div>" + "<div class='c83'>" + "ECC" + "</div>" + "<div class='c84'>" + yeccp + "</div>" + "<div class='c85'>" + xeccp + "</div>" + "<div class='c91'>" + deg4 + "." + min4 + "." + sec4 + "</div>" + "<div class='c92'>" + decc_etcp + "</div>" + "<div class='c103'>" + "ETC" + "</div>" + "<div class='c104'>" + yetcp + "</div>" + "<div class='c105'>" + xetcp + "</div>" + "<div class='c111'>" + deg5 + "." + min5 + "." + sec5 + "</div>" + "<div class='c112'>" + dect_pip + "</div>" + "<div class='c123'>" + "PI" + "</div>" + "<div class='c124'>" + ypip + "</div>" + "<div class='c125'>" + xpip + "</div>";

if (xi == "" || yi == "" || pi_etc == "" || btc_pi == "" || R == "" || L == "") {
document.getElementById("ds").innerHTML = "please insert into the input fields!";
}else if (R < 0 || I < 0) {
document.getElementById("ds").innerHTML = "This version does not support left handed curves!";
}else
document.getElementById("ds").innerHTML = condi1;
}
