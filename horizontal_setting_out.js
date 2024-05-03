function myF() {

var yi = document.getElementById("y").value;

var xi = document.getElementById("x").value;

var btc_pi = document.getElementById("drn1").value;

var pi_etc = document.getElementById("drn2").value;

var R = document.getElementById("ra").value;

var L = document.getElementById("le").value;

var ski = document.getElementById("ski").value;

var sk = document.getElementById("sk").value;

var phi = Math.pow(L, 1)/Math.pow(2*R, 1);

var X = Math.pow(L, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi, 2))/Math.pow(10, 1));

var Y = Math.pow(L, 1)*(Math.pow(phi,1)/Math.pow(3, 1) - Math.pow(phi, 3)/Math.pow(105, 1));

var shift = Math.pow(Y, 1) - Math.pow(R, 1)*(Math.pow(1, 1) - Math.cos(Math.pow(phi, 1)));

var I = Math.pow(pi_etc, 1) - Math.pow(btc_pi, 1);

//pi to btc

var T = Math.pow(X, 1) - Math.pow(R, 1)*Math.sin(phi) + (Math.pow(R, 1) + Math.pow(shift, 1))*Math.tan(I/2*Math.PI/180);

var btc_skd = Math.pow(ski, 1) - Math.pow(T, 1);

var btc_skdp = Math.pow(ski, 1) - Math.pow(T, 1);

var btc_skdp = btc_skdp.toFixed(2);

//btc to bcc

var bcc_skd = Math.pow(btc_skd, 1) + Math.pow(L, 1);

var bcc_skdp = Math.pow(btc_skd, 1) + Math.pow(L, 1);

var bcc_skdp = bcc_skdp.toFixed(2);

//bcc to ecc

var ecc_skd = Math.pow(bcc_skd, 1) + Math.pow(R, 1)*(Math.pow(I*Math.PI/180, 1) - Math.pow(2, 1)*Math.pow(phi, 1));

var ecc_skdp = Math.pow(bcc_skd, 1) + Math.pow(R, 1)*(Math.pow(I*Math.PI/180, 1) - Math.pow(2, 1)*Math.pow(phi, 1));

var ecc_skdp = ecc_skdp.toFixed(2);

// ecc to etc

var etc_skd = Math.pow(ecc_skd, 1) + Math.pow(L, 1); 

var etc_skdp = Math.pow(ecc_skd, 1) + Math.pow(L, 1); 

var etc_skdp = etc_skdp.toFixed(2);

var sk1 = Math.pow(sk, 1) + Math.pow(20, 1);

var sk1p = Math.pow(sk, 1) + Math.pow(20, 1);

var sk1p = sk1p.toFixed(2);

var sk2 = Math.pow(sk1, 1) + Math.pow(20, 1);

var sk2p = Math.pow(sk1, 1) + Math.pow(20, 1);

var sk2p = sk2p.toFixed(2);

var sk3 = Math.pow(sk2, 1) + Math.pow(20, 1);

var sk3p = Math.pow(sk2, 1) + Math.pow(20, 1);

var sk3p = sk3p.toFixed(2);

var sk4 = Math.pow(sk3, 1) + Math.pow(20, 1);

var sk4p = Math.pow(sk3, 1) + Math.pow(20, 1);

var sk4p = sk4p.toFixed(2);

var s1 = Math.pow(sk, 1) - Math.pow(btc_skd, 1);

var s1p = Math.pow(sk, 1) - Math.pow(btc_skd, 1);

var s1p = s1p.toFixed(2);

var phi1 = Math.pow(s1, 2)/Math.pow(2*R*L, 1);

var x1 = Math.pow(s1, 1)*(Math.pow(1, 1) - Math.pow(phi1, 2)/Math.pow(10, 1));

var y1 = Math.pow(s1, 1)*(Math.pow(phi1, 1)/Math.pow(3, 1) - Math.pow(phi1, 3)/Math.pow(105, 1));

var theta1 = Math.pow(phi1, 1)/Math.pow(3, 1);

var d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

var d1p = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));

var d1p = d1p.toFixed(2);

var theta1d = Math.pow(phi1, 1)/Math.pow(3, 1)*180/Math.PI;

var deg1 = Math.floor(theta1d);

var min1 = Math.floor((Math.pow(theta1d, 1) - Math.pow(deg1, 1))*60);

var sec1 = Math.round(((Math.pow(theta1d, 1) - Math.pow(deg1, 1))*60 - Math.pow(min1, 1))*60);

var s2 = Math.pow(sk1, 1) - Math.pow(btc_skd, 1);

var s2p = Math.pow(sk1, 1) - Math.pow(btc_skd, 1);

var s2p = s2p.toFixed(2);

var phi2 = Math.pow(s2, 2)/Math.pow(2*R*L, 1);

var theta2 = Math.pow(phi2, 1)/Math.pow(3, 1);

var x2 = Math.pow(s2, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi2, 2))/Math.pow(10, 1));

var y2 = Math.pow(s2, 1)*(Math.pow(phi2,1)/Math.pow(3, 1) - Math.pow(phi2, 3)/Math.pow(105, 1));

var d2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

var d2p = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

var d2p = d2p.toFixed(2);

var theta2d = Math.pow(phi2, 1)/Math.pow(3, 1)*180/Math.PI;

var deg2 = Math.floor(theta2d);

var min2 = Math.floor((Math.pow(theta2d, 1) - Math.pow(deg2, 1))*60);

var sec2 = Math.round(((Math.pow(theta2d, 1) - Math.pow(deg2, 1))*60 - Math.pow(min2, 1))*60);

var s3 = Math.pow(sk2, 1) - Math.pow(btc_skd, 1);

var s3p = Math.pow(sk2, 1) - Math.pow(btc_skd, 1);

var s3p = s3p.toFixed(2);

var phi3 = Math.pow(s3, 2)/Math.pow(2*R*L, 1);

var x3 = Math.pow(s3, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi3, 2))/Math.pow(10, 1));

var y3 = Math.pow(s3, 1)*(Math.pow(phi3,1)/Math.pow(3, 1) - Math.pow(phi3, 3)/Math.pow(105, 1));

var d3 = Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2));

var theta3 = Math.pow(phi3, 1)/Math.pow(3, 1);

var d3p = Math.sqrt(Math.pow(x3, 2) + Math.pow(y3, 2));

var d3p = d3p.toFixed(2);

var theta3d = Math.pow(phi3, 1)/Math.pow(3, 1)*180/Math.PI;

var deg3 = Math.floor(theta3d);

var min3 = Math.floor((Math.pow(theta3d, 1) - Math.pow(deg3, 1))*60);

var sec3 = Math.round(((Math.pow(theta3d, 1) - Math.pow(deg3, 1))*60 - Math.pow(min3, 1))*60);

var s4 = Math.pow(sk3, 1) - Math.pow(btc_skd, 1);

var s4p = Math.pow(sk3, 1) - Math.pow(btc_skd, 1);

var s4p = s4p.toFixed(2);

var phi4 = Math.pow(s4, 2)/Math.pow(2*R*L, 1);

var theta4 = Math.pow(phi4, 1)/Math.pow(3, 1);

var x4 = Math.pow(s4, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi4, 2))/Math.pow(10, 1));

var y4 = Math.pow(s4, 1)*(Math.pow(phi4,1)/Math.pow(3, 1) - Math.pow(phi4, 3)/Math.pow(105, 1));

var d4 = Math.sqrt(Math.pow(x4, 2) + Math.pow(y4, 2));

var d4p = Math.sqrt(Math.pow(x4, 2) + Math.pow(y4, 2));

var d4p = d4p.toFixed(2);

var theta4d = Math.pow(phi4, 1)/Math.pow(3, 1)*180/Math.PI;

var deg4 = Math.floor(theta4d);

var min4 = Math.floor((Math.pow(theta4d, 1) - Math.pow(deg4, 1))*60);

var sec4 = Math.round(((Math.pow(theta4d, 1) - Math.pow(deg4, 1))*60 - Math.pow(min4, 1))*60);

var s5 = Math.pow(sk4, 1) - Math.pow(btc_skd, 1);

var s5p = Math.pow(sk4, 1) - Math.pow(btc_skd, 1);

var s5p = s5p.toFixed(2);

var phi5 = Math.pow(s5, 2)/Math.pow(2*R*L, 1);

var theta5 = Math.pow(phi5, 1)/Math.pow(3, 1);

var x5 = Math.pow(s5, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi5, 2))/Math.pow(10, 1));

var y5 = Math.pow(s5, 1)*(Math.pow(phi5, 1)/Math.pow(3, 1) - Math.pow(phi5, 3)/Math.pow(105, 1));

var d5 = Math.sqrt(Math.pow(x5, 2) + Math.pow(y5, 2));

var d5p = Math.sqrt(Math.pow(x5, 2) + Math.pow(y5, 2));

var d5p = d5p.toFixed(2);

var theta5d = Math.pow(phi5, 1)/Math.pow(3, 1)*180/Math.PI;

var deg5 = Math.floor(theta5d);

var min5 = Math.floor((Math.pow(theta5d, 1) - Math.pow(deg5, 1))*60);

var sec5 = Math.round(((Math.pow(theta5d, 1) - Math.pow(deg5, 1))*60 - Math.pow(min5, 1))*60);

var s6 = Math.pow(bcc_skd, 1) - Math.pow(btc_skd, 1);

var s6p = Math.pow(bcc_skd, 1) - Math.pow(btc_skd, 1);

var s6p = s6p.toFixed(2);

var phi6 = Math.pow(s6, 2)/Math.pow(2*R*L, 1);

var theta6 = Math.pow(phi6, 1)/Math.pow(3, 1);

var x6 = Math.pow(s6, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi6, 2))/Math.pow(10, 1));

var y6 = Math.pow(s6, 1)*(Math.pow(phi6, 1)/Math.pow(3, 1) - Math.pow(phi6, 3)/Math.pow(105, 1));

var d6 = Math.sqrt(Math.pow(x6, 2) + Math.pow(y6, 2));

var d6p = Math.sqrt(Math.pow(x6, 2) + Math.pow(y6, 2));

var d6p = d6p.toFixed(2);

var theta6d = Math.pow(phi6, 1)/Math.pow(3, 1)*180/Math.PI;

var deg6 = Math.floor(theta6d);

var min6 = Math.floor((Math.pow(theta6d, 1) - Math.pow(deg6, 1))*60);

var sec6 = Math.round(((Math.pow(theta6d, 1) - Math.pow(deg6, 1))*60 - Math.pow(min6, 1))*60);

var skk = "SKD";

var sd = "s";

var dist = "d";

var inst = "Instrument Drn";

// for circular curve

var ex = Math.pow(180, 1) - (Math.pow(I, 1) - 2*Math.pow(phi, 1)*180/Math.PI);

var Ip = Math.pow(180, 1) - Math.pow(ex, 1);

var degr = Math.floor(Ip);

var mins = Math.floor((Math.pow(Ip, 1) - Math.pow(degr, 1))*60);

var secs = Math.round(((Math.pow(Ip, 1) - Math.pow(degr, 1))*60 - Math.pow(mins, 1))*60);

var drnbcc_btc = Math.pow(180, 1) - Math.pow(2, 1)/Math.pow(3, 1)*Math.pow(phi, 1)*180/Math.PI;

var degr1 = Math.floor(drnbcc_btc);

var mins1 = Math.floor((Math.pow(drnbcc_btc, 1) - Math.pow(degr1, 1))*60);

var secs1 = Math.round(((Math.pow(drnbcc_btc, 1) - Math.pow(degr1, 1))*60 - Math.pow(mins1, 1))*60);

var tra0 = "<p1 style='color: transparent'>_________</p1>";

var tra = "<p1 style='color: transparent'>____________</p1>";

var tra1 = "<p1 style='color: transparent'>______________</p1>";

var tra2 = "<p1 style='color: transparent'>_____________________________________________</p1>";

var lnb = "________________________________________________________________________________________________"

var cln = ".........................................................................................................................................................................";

var cln2 = "__________________________________________________________________________________________________";

var nj = sk - btc_skd;

var condi1 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='cln9'>" + cln2 + "</div>" + "<div class='c11'>" + skk + "</div>" + "<div class='c12'>" + sd + "</div>" + "<div class='c13'>" + dist + "</div>" + "<div class='c14'>" + inst + "</div>" + "<div class='c21'>" + btc_skdp + "(BTC)" + "</div>" + "<div class='c22'>" + "@BTC" + "</div>" + "<div class='c31'>" + sk + "</div>" + "<div class='c32'>" + s1p + "</div>" + "<div class='c33'>" + d1p + "</div>" + "<div class='c34'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c41'>" + sk1p + "</div>" + "<div class='c42'>" + s2p + "</div>" + "<div class='c43'>" + d2p + "</div>" + "<div class='c44'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c51'>" + sk2p + "</div>" + "<div class='c52'>" + s3p + "</div>" + "<div class='c53'>" + d3p + "</div>" + "<div class='c54'>" + deg3 + "." + min3 + "." + sec3 + "</div>" + "<div class='c61'>" + sk3p + "</div>" + "<div class='c62'>" + s4p + "</div>" + "<div class='c63'>" + d4p + "</div>" + "<div class='c64'>" + deg4 + "." + min4 + "." + sec4 + "</div>" + "<div class='c71'>" + sk4p + "</div>" + "<div class='c72'>" + s5p + "</div>" + "<div class='c73'>" + d5p + "</div>" + "<div class='c74'>" + deg5 + "." + min5 + "." + sec5 + "</div>" + "<div class='c81'>" + bcc_skdp + "(BCC)" + "</div>" + "<div class='c82'>" + s6p + "</div>" + "<div class='c83'>" + d6p + "</div>" + "<div class='c84'>" + deg6 + "." + min6 + "." + sec6 + "</div>" + "<div class='c91'>" + "If the transition curve is followed by a horizontal curve take the value for horizontal curve intersection angle to be" + " " + "<b>" + degr  + "." + mins + "." + secs + "</b>" + "." + " " + "Set the instrument at the BCC towards BTC to be" + " " + degr1 + "." + mins1 + "." + secs1 + " " + "and Rotate the instrument until it reads 0.0.0 direction and start staking out the results from a horizontal curve calcutions." + "</div>";

var condi2 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='c11'>" +skk + "</div>" + "<div class='c12'>" + sd + "</div>" + "<div class='c13'>" + dist + "</div>" + "<div class='c14'>" + inst + "</div>" + "<div class='c21'>" + btc_skdp + "(BTC)" + "</div>" + "<div class='c22'>" + "@BTC" + "</div>" + "<div class='c31'>" + sk + "</div>" + "<div class='c32'>" + s1p + "</div>" + "<div class='c33'>" + d1p + "</div>" + "<div class='c34'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c41'>" + sk1p + "</div>" + "<div class='c42'>" + s2p + "</div>" + "<div class='c43'>" + d2p + "</div>" + "<div class='c44'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c51'>" + sk2p + "</div>" + "<div class='c52'>" + s3p + "</div>" + "<div class='c53'>" + d3p + "</div>" + "<div class='c54'>" + deg3 + "." + min3 + "." + sec3 + "</div>" + "<div class='c61'>" + sk3p + "</div>" + "<div class='c62'>" + s4p + "</div>" + "<div class='c63'>" + d4p + "</div>" + "<div class='c64'>" + deg4 + "." + min4 + "." + sec4 + "</div>" + "<div class='c71'>" + bcc_skdp + "(BCC)" + "</div>" + "<div class='c72'>" + s5p + "</div>" + "<div class='c73'>" + d5p + "</div>" + "<div class='c74'>" + deg5 + "." + min5 + "." + sec5 + "</div>";

var condi3 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln7'>" + cln2 + "</div>" + "<div class='c11'>" + skk + "</div>" + "<div class='c12'>" + sd + "</div>" + "<div class='c13'>" + dist + "</div>" + "<div class='c14'>" + inst + "</div>" + "<div class='c21'>" + btc_skdp + "(BTC)" + "</div>" + "<div class='c22'>" + "@BTC" + "</div>" + "<div class='c31'>" + sk +  "</div>" + "<div class='c32'>" + s1p + "</div>" + "<div class='c33'>" + d1p + "</div>" + "<div class='c34'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c41'>" + sk1p + "</div>" + "<div class='c42'>" + s2p + "</div>" + "<div class='c43'>" + d2p + "</div>" + "<div class='c44'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c51'>" + sk2p + "</div>" + "<div class='c52'>" + s3p + "</div>" + "<div class='c53'>" + d3p + "</div>" + "<div class='c54'>" + deg3 + "." + min3 + "." + sec3 + "</div>" + "<div class='c61'>" + bcc_skdp + "(BCC)" + "</div>" + "<div class='c62'>" + s4p + "</div>" + "<div class='c63'>" + d4p + "</div>" + "<div class='c64'>" + deg4 + "." + min4 + "." + sec4 + "</div>";

var condi4 = "<div class='c11'>" + skk + "</div>" + "<div class='c12'>" + sd + "</div>" + "<div class='c13'>" + dist + "</div>" + "<div class='c14'>" + inst + "</div>" + "<div class='c21'>" + btc_skdp + "(BTC)" + "</div>" + "<div class='c22'>" + "@BTC" + "</div>" + "<div class='c31'>" + sk + "</div>" + "<div class='c32'>" + s1p + "</div>" + "<div class='c33'>" + d1p + "</div>" + "<div class='c34'>" + deg1 + "." + min1 + "." + "</div>" + "<div class='c41'>" + sk1p + "</div>" + "<div class='c42'>" + s2p + "</div>" + "<div class='c43'>" + d2p + "</div>" + "<div class='c44'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c51'>" + bcc_skdp + "(BCC)" + "</div>" + "<div class='c52'>" + s3p + "</div>" + "<div class='c53'>" + d3p + "</div>" + "<div class='c54'>" + deg3 + "." + min3 + "." + sec3 + "</div>";

if (xi == "" || yi == "" || R == "" || L == "" || pi_etc == "" || btc_pi == "" || bcc_skdp == "" || ski == "") {

document.getElementById("ds").innerHTML = "Please Insert Values for Ypi, Xpi, BTC-PI, PI-ETC, R, Length, and skdPI!";

}else if(xi != "" && yi != "" && R != "" && L != "" && pi_etc != "" && btc_pi != "" && bcc_skdp != "" && ski != "" && sk == "") {

document.getElementById("ds").innerHTML = btc_skdp;

}else if (nj > 20 || nj < 0 || nj == 0) {

document.getElementById("ds").innerHTML = "Invalid value for skd input! The skd input should be the next multiple of 20 after" + " " + btc_skdp;

}else if (R < 0 || I < 0) {

document.getElementById("ds").innerHTML = "This version does not support left handed curves!";

}else if (L != 100 && L != 80 && L != 60 && L != 40) {

document.getElementById("ds").innerHTML = btc_skdp;

}else if (L == 100) {

document.getElementById("ds").innerHTML = condi1;

}else if (L == 80) {

document.getElementById("ds").innerHTML = condi2;

}else if (L == 60) {

document.getElementById("ds").innerHTML = condi3;

}else if (L == 40) {

document.getElementById("ds").innerHTML = condi4;

}else 

document.getElementById("ds").innerHTML = btc_skdp;

}
