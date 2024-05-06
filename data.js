var data = {
    "setting":
        `{"horizontal_setting": "<fieldset><legend>Horizontal curve setting out</legend><center><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>R</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='r'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>I</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='i'></td></tr><tr><td style='background-color: blue; text-align: center'>Ch_bcc</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ch'></td></tr><td style='background-color: blue; text-align: center; width: 120px;'>peg_interval</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='peg' value='20'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>BCC-PI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ori'></td><tr><td style='background-color: blue; text-align: center; width: 120px;'>SKD</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='skd'></td></tr></table></center><br><br><button type='button' onclick='horizontal_sc()'>Compute Setting Out Data</button> <input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset>"}`,
    "traverse":
        `{"horizontal_traverse": "<fieldset><legend>Horizontal curve control points</legend><center><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>Ypi</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='y'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>Xpi</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='x'></td></tr><tr><td style='background-color: blue; text-align: center'>BCC-PI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='drn1'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>PI-ECC</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='drn2'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>R</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ra'></td></tr></table><center><br><br><button type='button' onclick='horizontal_tr()'>Compute Traverse</button> <input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset>"}`,
      }


var setting = JSON.parse(data.setting);
var traverse = JSON.parse(data.traverse);

function horizontal_sc() {
    var R = document.getElementById("r").value;
    var I = document.getElementById("i").value;
    var ch_bcc = document.getElementById("ch").value;
    var peg_int = document.getElementById("peg").value;
    var ori = document.getElementById("ori").value;
    var skd = document.getElementById("skd").value;
    var arc1 = Math.pow(skd, 1) - Math.pow(ch_bcc, 1);
    var arc_l = R*I*Math.PI/180;
    var arc_lp = R*I*Math.PI/180;
    var arc_lp = arc_lp.toFixed(2);
    var ch_ecc = Math.pow(ch_bcc, 1) + Math.pow(arc_l, 1);
    var ch_ecc = ch_ecc.toFixed(2);

// offset angle
    var a = arc1/(2*R)*180/Math.PI;
    var a1 = peg_int/(2*R)*180/Math.PI;
    var deg1 = Math.floor(a);
    var min1 = Math.floor((Math.pow(a, 1) - Math.pow(deg1, 1))*60);
    var sec1 = Math.round(((Math.pow(a, 1) - Math.pow(deg1, 1))*60 - Math.pow(min1, 1))*60);
    var deg2 = Math.floor(a1);
    var min2 = Math.floor((Math.pow(a1, 1) - Math.pow(deg2, 1))*60);
    var sec2 = Math.round(((Math.pow(a1, 1) - Math.pow(deg2, 1))*60 - Math.pow(min2, 1))*60);
    //var deg3 = Math.floor(a2);
    //var min3 = Math.floor((Math.pow(a2, 1) - Math.pow(deg3, 1))*60);
    //var sec3 = Math.round(((Math.pow(a2, 1) - Math.pow(deg3, 1))*60 - Math.pow(min3, 1))*60);
    // instrument direction
    
    var ai = Math.pow(ori, 1) + Math.pow(a, 1);
    var ai1 = Math.pow(ai, 1) + Math.pow(a1, 1);
    var ai2 = Math.pow(ai1, 1) + Math.pow(a1, 1);
    var ai3 = Math.pow(ai2, 1) + Math.pow(a1, 1);
    var ai4 = Math.pow(ai3, 1) + Math.pow(a1, 1);
    var ai5 = Math.pow(ai4, 1) + Math.pow(a1, 1);
    var ai6 = Math.pow(ai5, 1) + Math.pow(a1, 1);
    var ai7 = Math.pow(ai6, 1) + Math.pow(a1, 1);
    var ai8 = Math.pow(ai7, 1) + Math.pow(a1, 1);
    var degi1 = Math.floor(ai);
    var mini1 = Math.floor((Math.pow(ai, 1) - Math.pow(degi1, 1))*60);
    var seci1 = Math.round(((Math.pow(ai, 1) - Math.pow(degi1, 1))*60 - Math.pow(mini1, 1))*60);
    
    var degi2 = Math.floor(ai1);
    var mini2 = Math.floor((Math.pow(ai1, 1) - Math.pow(degi2, 1))*60);
    var seci2 = Math.round(((Math.pow(ai1, 1) - Math.pow(degi2, 1))*60 - Math.pow(mini2, 1))*60);
    
    var degi3 = Math.floor(ai2);
    var mini3 = Math.floor((Math.pow(ai2, 1) - Math.pow(degi3, 1))*60);
    var seci3 = Math.round(((Math.pow(ai2, 1) - Math.pow(degi3, 1))*60 - Math.pow(mini3, 1))*60);
    
    var degi4 = Math.floor(ai3);
    var mini4 = Math.floor((Math.pow(ai3, 1) - Math.pow(degi4, 1))*60);
    var seci4 = Math.round(((Math.pow(ai3, 1) - Math.pow(degi4, 1))*60 - Math.pow(mini4, 1))*60);
    
    var degi5 = Math.floor(ai4);
    var mini5 = Math.floor((Math.pow(ai4, 1) - Math.pow(degi5, 1))*60);
    var seci5 = Math.round(((Math.pow(ai4, 1) - Math.pow(degi5, 1))*60 - Math.pow(mini5, 1))*60);
    
    var degi6 = Math.floor(ai5);
    var mini6 = Math.floor((Math.pow(ai5, 1) - Math.pow(degi6, 1))*60);
    var seci6 = Math.round(((Math.pow(ai5, 1) - Math.pow(degi6, 1))*60 - Math.pow(mini6, 1))*60);
    
    var degi7 = Math.floor(ai6);
    var mini7 = Math.floor((Math.pow(ai6, 1) - Math.pow(degi7, 1))*60);
    var seci7 = Math.round(((Math.pow(ai6, 1) - Math.pow(degi7, 1))*60 - Math.pow(mini7, 1))*60);
    
    var degi8 = Math.floor(ai7);
    var mini8 = Math.floor((Math.pow(ai7, 1) - Math.pow(degi8, 1))*60);
    var seci8 = Math.round(((Math.pow(ai7, 1) - Math.pow(degi8, 1))*60 - Math.pow(mini8, 1))*60);
    
    var degi9 = Math.floor(ai8);
    var mini9 = Math.floor((Math.pow(ai8, 1) - Math.pow(degi9, 1))*60);
    var seci9 = Math.round(((Math.pow(ai8, 1) - Math.pow(degi9, 1))*60 - Math.pow(mini9, 1))*60);
    
    var deg0 = Math.floor(ori);
    var min0 = Math.floor((Math.pow(ori, 1) - Math.pow(deg0, 1))*60);
    var sec0 = Math.round(((Math.pow(ori, 1) - Math.pow(deg0, 1))*60 - Math.pow(min0, 1))*60);

// polar distance 2Rsin(offset angle)
    var pola1 = 2*R*Math.sin(ai*Math.PI/180);
    var pola1 = pola1.toFixed(2);
    
    var pola2 = 2*R*Math.sin(ai1*Math.PI/180);
    var pola2 = pola2.toFixed(2);
    
    var pola3 = 2*R*Math.sin(ai2*Math.PI/180);
    var pola3 = pola3.toFixed(2);
    
    var pola4 = 2*R*Math.sin(ai3*Math.PI/180);
    var pola4 = pola4.toFixed(2);
    
    var pola5 = 2*R*Math.sin(ai4*Math.PI/180);
    var pola5 = pola5.toFixed(2);
    
    var pola6 = 2*R*Math.sin(ai5*Math.PI/180);
    var pola6 = pola6.toFixed(2);
    
    var pola7 = 2*R*Math.sin(ai6*Math.PI/180);
    var pola7 = pola7.toFixed(2);
    
    var pola8 = 2*R*Math.sin(ai7*Math.PI/180);
    var pola8 = pola8.toFixed(2);
    
    var pola9 = 2*R*Math.sin(ai8*Math.PI/180);
    var pola9 = pola9.toFixed(2);

// chord length

    var choord1 = 2*R*Math.sin(a*Math.PI/180);
    var choord1 = choord1.toFixed(2);

    var choord2 = 2*R*Math.sin(a1*Math.PI/180);
    var choord2 = choord2.toFixed(2);

    var choord3 = 2*R*Math.sin(a1*Math.PI/180);
    var choord3 = choord3.toFixed(2);

    var choord4 = 2*R*Math.sin(a1*Math.PI/180);
    var choord4 = choord4.toFixed(2);
    
    var choord5 = 2*R*Math.sin(a1*Math.PI/180);
    var choord5 = choord5.toFixed(2);

    var choord6 = 2*R*Math.sin(a1*Math.PI/180);
    var choord6 = choord6.toFixed(2);

    var choord7 = 2*R*Math.sin(a1*Math.PI/180);
    var choord7 = choord7.toFixed(2);

    var choord8 = 2*R*Math.sin(a1*Math.PI/180);
    var choord8 = choord8.toFixed(2);
    
    var choord9 = 2*R*Math.sin(a1*Math.PI/180);
    var choord9 = choord9.toFixed(2);
    
    var sk = "SKD";
    var offs = "Offset Angle";
    var inst = "Instrument Direction";
    var pol = "Polar Distance";
    var cho = "Chord Length";

//var skd = skd;
    var skd1 = Math.pow(skd, 1) + Math.pow(peg_int, 1);
    var skd2 = Math.pow(skd1, 1) + Math.pow(peg_int, 1);
    var skd3 = Math.pow(skd2, 1) + Math.pow(peg_int, 1);
    var skd4 = Math.pow(skd3, 1) + Math.pow(peg_int, 1);
    var skd5 = Math.pow(skd4, 1) + Math.pow(peg_int, 1);
    var skd6 = Math.pow(skd5, 1) + Math.pow(peg_int, 1);
    var skd7 = Math.pow(skd6, 1) + Math.pow(peg_int, 1);
    var skd8 = Math.pow(skd7, 1) + Math.pow(peg_int, 1);
    
    var arci1 = Math.pow(ch_ecc, 1) - Math.pow(skd, 1);
    var aa1 = arci1/(2*R)*180/Math.PI;
    var dega1 = Math.floor(aa1);
    var mina1 = Math.floor((Math.pow(aa1, 1) - Math.pow(dega1, 1))*60);
    var seca1 = Math.round(((Math.pow(aa1, 1) - Math.pow(dega1, 1))*60 - Math.pow(mina1, 1))*60);
    
    var aii = Math.pow(ai, 1) + Math.pow(aa1, 1);
    var degii1 = Math.floor(aii);
    var minii1 = Math.floor((Math.pow(aii, 1) - Math.pow(degii1, 1))*60);
    var secii1 = Math.round(((Math.pow(aii, 1) - Math.pow(degii1, 1))*60 - Math.pow(minii1, 1))*60);
    
    var polai1 = 2*R*Math.sin(aii*Math.PI/180);
    var polai1 = polai1.toFixed(2);
    
    var choordi1 = 2*R*Math.sin(aa1*Math.PI/180);
    var choordi1 = choordi1.toFixed(2);
    
    var arci2 = Math.pow(ch_ecc, 1) - Math.pow(skd1, 1);
    var aa2 = arci2/(2*R)*180/Math.PI;
    var dega2 = Math.floor(aa2);
    var mina2 = Math.floor((Math.pow(aa2, 1) - Math.pow(dega2, 1))*60);
    var seca2 = Math.round(((Math.pow(aa2, 1) - Math.pow(dega2, 1))*60 - Math.pow(mina2, 1))*60);
    
    var aii1 = Math.pow(ai1, 1) + Math.pow(aa2, 1);
    var degii2 = Math.floor(aii1);
    var minii2 = Math.floor((Math.pow(aii1, 1) - Math.pow(degii2, 1))*60);
    var secii2 = Math.round(((Math.pow(aii1, 1) - Math.pow(degii2, 1))*60 - Math.pow(minii2, 1))*60);
    
    var polai2 = 2*R*Math.sin(aii1*Math.PI/180);
    var polai2 = polai2.toFixed(2);
    
    var choordi2 = 2*R*Math.sin(aa2*Math.PI/180);
    var choordi2 = choordi2.toFixed(2);
    
    var arci3 = Math.pow(ch_ecc, 1) - Math.pow(skd2, 1);
    var aa3 = arci3/(2*R)*180/Math.PI;
    var dega3 = Math.floor(aa3);
    var mina3 = Math.floor((Math.pow(aa3, 1) - Math.pow(dega3, 1))*60);
    var seca3 = Math.round(((Math.pow(aa3, 1) - Math.pow(dega3, 1))*60 - Math.pow(mina3, 1))*60);
    
    var aii2 = Math.pow(ai2, 1) + Math.pow(aa3, 1);
    var degii3 = Math.floor(aii2);
    var minii3 = Math.floor((Math.pow(aii2, 1) - Math.pow(degii3, 1))*60);
    var secii3 = Math.round(((Math.pow(aii2, 1) - Math.pow(degii3, 1))*60 - Math.pow(minii3, 1))*60);
    
    var polai3 = 2*R*Math.sin(aii2*Math.PI/180);
    var polai3 = polai3.toFixed(2);
    
    var choordi3 = 2*R*Math.sin(aa3*Math.PI/180);
    var choordi3 = choordi3.toFixed(2);
    
    var arci4 = Math.pow(ch_ecc, 1) - Math.pow(skd3, 1);
    var aa4 = arci4/(2*R)*180/Math.PI;
    var dega4 = Math.floor(aa4);
    var mina4 = Math.floor((Math.pow(aa4, 1) - Math.pow(dega4, 1))*60);
    var seca4 = Math.round(((Math.pow(aa4, 1) - Math.pow(dega4, 1))*60 - Math.pow(mina4, 1))*60);
    
    var aii3 = Math.pow(ai3, 1) + Math.pow(aa4, 1);
    var degii4 = Math.floor(aii3);
    var minii4 = Math.floor((Math.pow(aii3, 1) - Math.pow(degii4, 1))*60);
    var secii4 = Math.round(((Math.pow(aii3, 1) - Math.pow(degii4, 1))*60 - Math.pow(minii4, 1))*60);
    
    var polai4 = 2*R*Math.sin(aii3*Math.PI/180);
    var polai4 = polai4.toFixed(2);
    
    var choordi4 = 2*R*Math.sin(aa4*Math.PI/180);
    var choordi4 = choordi4.toFixed(2);
    
    var arci5 = Math.pow(ch_ecc, 1) - Math.pow(skd4, 1);
    var aa5 = arci5/(2*R)*180/Math.PI;
    var dega5 = Math.floor(aa5);
    var mina5 = Math.floor((Math.pow(aa5, 1) - Math.pow(dega5, 1))*60);
    var seca5 = Math.round(((Math.pow(aa5, 1) - Math.pow(dega5, 1))*60 - Math.pow(mina5, 1))*60);
    
    var aii4 = Math.pow(ai4, 1) + Math.pow(aa5, 1);
    var degii5 = Math.floor(aii4);
    var minii5 = Math.floor((Math.pow(aii4, 1) - Math.pow(degii5, 1))*60);
    var secii5 = Math.round(((Math.pow(aii4, 1) - Math.pow(degii5, 1))*60 - Math.pow(minii5, 1))*60);
    
    var polai5 = 2*R*Math.sin(aii4*Math.PI/180);
    var polai5 = polai5.toFixed(2);
    
    var choordi5 = 2*R*Math.sin(aa5*Math.PI/180);
    var choordi5 = choordi5.toFixed(2);
    
    var arci6 = Math.pow(ch_ecc, 1) - Math.pow(skd5, 1);
    var aa6 = arci6/(2*R)*180/Math.PI;
    var dega6 = Math.floor(aa6);
    var mina6 = Math.floor((Math.pow(aa6, 1) - Math.pow(dega6, 1))*60);
    var seca6 = Math.round(((Math.pow(aa6, 1) - Math.pow(dega6, 1))*60 - Math.pow(mina6, 1))*60);

var aii5 = Math.pow(ai5, 1) + Math.pow(aa6, 1);
var degii6 = Math.floor(aii5);
var minii6 = Math.floor((Math.pow(aii5, 1) - Math.pow(degii6, 1))*60);
var secii6 = Math.round(((Math.pow(aii5, 1) - Math.pow(degii6, 1))*60 - Math.pow(minii6, 1))*60);

var polai6 = 2*R*Math.sin(aii5*Math.PI/180);
var polai6 = polai6.toFixed(2);

var choordi6 = 2*R*Math.sin(aa6*Math.PI/180);
var choordi6 = choordi6.toFixed(2);

var arci7 = Math.pow(ch_ecc, 1) - Math.pow(skd6, 1);
var aa7 = arci7/(2*R)*180/Math.PI;
var dega7 = Math.floor(aa7);
var mina7 = Math.floor((Math.pow(aa7, 1) - Math.pow(dega7, 1))*60);
var seca7 = Math.round(((Math.pow(aa7, 1) - Math.pow(dega7, 1))*60 - Math.pow(mina7, 1))*60);

var aii6 = Math.pow(ai6, 1) + Math.pow(aa7, 1);
var degii7 = Math.floor(aii6);
var minii7 = Math.floor((Math.pow(aii6, 1) - Math.pow(degii7, 1))*60);
var secii7 = Math.round(((Math.pow(aii6, 1) - Math.pow(degii7, 1))*60 - Math.pow(minii7, 1))*60);

var polai7 = 2*R*Math.sin(aii6*Math.PI/180);
var polai7 = polai7.toFixed(2);

var choordi7 = 2*R*Math.sin(aa7*Math.PI/180);
var choordi7 = choordi7.toFixed(2);

var arci8 = Math.pow(ch_ecc, 1) - Math.pow(skd7, 1);
var aa8 = arci8/(2*R)*180/Math.PI;
var dega8 = Math.floor(aa8);
var mina8 = Math.floor((Math.pow(aa8, 1) - Math.pow(dega8, 1))*60);
var seca8 = Math.round(((Math.pow(aa8, 1) - Math.pow(dega8, 1))*60 - Math.pow(mina8, 1))*60);

var aii7 = Math.pow(ai7, 1) + Math.pow(aa8, 1);
var degii8 = Math.floor(aii7);
var minii8 = Math.floor((Math.pow(aii7, 1) - Math.pow(degii8, 1))*60);
var secii8 = Math.round(((Math.pow(aii7, 1) - Math.pow(degii8, 1))*60 - Math.pow(minii8, 1))*60);

var polai8 = 2*R*Math.sin(aii7*Math.PI/180);
var polai8 = polai8.toFixed(2);

var choordi8 = 2*R*Math.sin(aa8*Math.PI/180);
var choordi8 = choordi8.toFixed(2);

var cln = ".....................................................................................................................................................................................................................";

var cln2 = "_____________________________________________________________________________________________________________________________";

var cond2 = "<div class='c23'>" + "arc Length =" + " " + arc_lp + "</div>" + "<div class='c22'>" + "@BCC" + " " + deg0 + "." + min0 + "." + sec0 + "</div>" + "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" +  cln2 + "</div>" + "<div class='cln6'>" +  cln2 + "</div>" + "<div class='c11'>" + sk + "</div>" + "<div class='c12'>" + offs + "</div>" + "<div class='c13'>" + inst + "</div>" + "<div class='c14'>" + pol + "</div>" + "<div class='c15'>" + cho + "</div>" + "<div class='c21'>" + ch_bcc + "</div>" + "<div class='c31'>" + skd + "</div>" + "<div class='c32'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c33'>" + degi1 + "." + mini1 + "." + seci1 + "</div>" + "<div class='c34'>" + pola1 + "</div>" + "<div class='c35'>" + choord1 + "</div>" + "<div class='c41'>" + ch_ecc + "</div>" + "<div class='c42'>" + dega1 + "." + mina1 + "." + seca1 + "</div>" + "<div class='c43'>" + degii1 + "." + minii1 + "." + secii1 + "</div>" + "<div class='c44'>" + polai1 + "</div>" + "<div class='c45'>" + choordi1 + "</div>";

var cond3 = "<div class='c23'>" + "arc Length =" + " " + arc_lp + "</div>" + "<div class='c22'>" + "@BCC" + " " + deg0 + "." + min0 + "." + sec0 + "</div>" + "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" +  cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln7'>" + cln2 + "</div>" + "<div class='c11'>" + sk + "</div>" + "<div class='c12'>" + offs + "</div>" + "<div class='c13'>" + inst + "</div>" + "<div class='c14'>" + pol + "</div>" + "<div class='c15'>" + cho + "</div>" + "<div class='c21'>" + ch_bcc + "</div>" + "<div class='c31'>" + skd + "</div>" + "<div class='c32'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c33'>" + degi1 + "." + mini1 + "." + seci1 + "</div>" + "<div class='c34'>" + pola1 + "</div>" + "<div class='c35'>" + choord1 + "</div>" + "<div class='c41'>" + skd1 + "</div>" + "<div class='c42'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c43'>" + degi2 + "." + mini2 + "." + seci2 + "</div>" + "<div class='c44'>" + pola2 + "</div>" + "<div class='c45'>" + choord2 + "</div>" + "<div class='c51'>" + ch_ecc + "</div>" + "<div class='c52'>" + dega2 + "." + mina2 + "." + seca2 + "</div>" + "<div class='c53'>" + degii2 + "." + minii2 + "." + secii2 + "</div>" + "<div class='c54'>" + polai2 + "</div>" + "<div class='c55'>" + choordi2 + "</div>";

var cond4 = "<div class='c23'>" + "arc Length =" + " " + arc_lp + "</div>" + "<div class='c22'>" + "@BCC" + " " + deg0 + "." + min0 + "." + sec0 + "</div>" + "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" +  cln2 + "</div>" + "<div class='cln6'>" +  cln2 + "</div>" + "<div class='cln7'>" +  cln2 + "</div>" + "<div class='c11'>" + sk + "</div>" + "<div class='c12'>" + "<div class='cln13'>" + cln2 + "</div>" + offs + "</div>" + "<div class='c13'>" + inst + "</div>" + "<div class='c14'>" + pol + "</div>" + "<div class='c15'>" + cho + "</div>" + "<div class='c21'>" + ch_bcc + "</div>" + "<div class='c31'>" + skd + "</div>" + "<div class='c32'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c33'>" + degi1 + "." + mini1 + "." + seci1 + "</div>" + "<div class='c34'>" + pola1 + "</div>" + "<div class='c35'>" + choord1 + "</div>" + "<div class='c41'>" + skd1 + "</div>" + "<div class='c42'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c43'>" + degi2 + "." + mini2 + "." + seci2 + "</div>" + "<div class='c44'>" + pola2 + "</div>" + "<div class='c45'>" + choord2 + "</div>" + "<div class='c51'>" + skd2 + "</div>" + "<div class='c52'>" +  deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c53'>" + degi3 + "." + mini3 + "." + seci3 + "</div>" + "<div class='c54'>" + pola3 + "</div>" + "<div class='c55'>" + choord3 + "</div>" + "<div class='c61'>" + ch_ecc + "</div>" + "<div class='c62'>" + dega3 + "." + mina3 + "." + seca3 + "</div>" + "<div class='c63'>" + degii3 + "." + minii3 + "." + secii3 + "</div>" + "<div class='c64'>" + polai3 + "</div>" + "<div class='c65'>" + choordi3 + "</div>";

var cond5 = "<div class='c23'>" + "arc Length =" + " " + arc_lp + "</div>" + "<div class='c22'>" + "@BCC" + " " + deg0 + "." + min0 + "." + sec0 + "</div>" + "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" +  cln2 + "</div>" + "<div class='cln6'>" +  cln2 + "</div>" + "<div class='cln7'>" +  cln2 + "</div>" + "<div class='cln8'>" +  cln2 + "</div>" + "<div class='c11'>" + sk + "</div>" + "<div class='c12'>" + offs + "</div>" + "<div class='c13'>" + inst + "</div>" + "<div class='c14'>" + pol + "</div>" + "<div class='c15'>" + cho + "</div>" + "<div class='c21'>" + ch_bcc + "</div>" + "<div class='c31'>" + skd + "</div>" + "<div class='c32'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c33'>" + degi1 + "." + mini1 + "." + seci1 + "</div>" + "<div class='c34'>" + pola1 + "</div>" + "<div class='c35'>" + choord1 + "</div>" + "<div class='c41'>" + skd1 + "</div>" + "<div class='c42'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c43'>" + degi2 + "." + mini2 + "." + seci2 + "</div>" + "<div class='c44'>" + pola2 + "</div>" + "<div class='c45'>" + choord2 + "</div>" + "<div class='c51'>" + skd2 + "</div>" + "<div class='c52'>" +  deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c53'>" + degi3 + "." + mini3 + "." + seci3 + "</div>" + "<div class='c54'>" + pola3 + "</div>" + "<div class='c55'>" + choord3 + "</div>" + "<div class='c61'>" + skd3 + "</div>" + "<div class='c62'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c63'>" + degi4 + "." + mini4 + "." + seci4 + "</div>" + "<div class='c64'>" + pola4 + "</div>" + "<div class='c65'>" + choord4 + "</div>" + "<div class='c71'>" + ch_ecc + "</div>" + "<div class='c72'>" + dega4 + "." + mina4 + "." + seca4 + "</div>" + "<div class='c73'>" + degii4 + "." + minii4 + "." + secii4 + "</div>" + "<div class='c74'>" + polai4 + "</div>" + "<div class='c75'>" + choordi4 + "</div>";

var cond6 = "<div class='c23'>" + "arc Length =" + " " +  arc_lp + "</div>" + "<div class='c22'>" + "@BCC" + " " + deg0 + "." + min0 + "." + sec0 + "</div>" + "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" +  cln2 + "</div>" + "<div class='cln6'>" +  cln2 + "</div>" + "<div class='cln7'>" +  cln2 + "</div>" + "<div class='cln8'>" +  cln2 + "</div>" + "<div class='cln9'>" +  cln2 + "</div>" + "<div class='cln10'>" +  cln2 + "</div>" + "<div class='c11'>" + sk + "</div>" + "<div class='c12'>" + offs + "</div>" + "<div class='c13'>" + inst + "</div>" + "<div class='c14'>" + pol + "</div>" + "<div class='c15'>" + cho + "</div>" + "<div class='c21'>" + ch_bcc + "</div>" + "<div class='c31'>" + skd + "</div>" + "<div class='c32'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c33'>" + degi1 + "." + mini1 + "." + seci1 + "</div>" + "<div class='c34'>" + pola1 + "</div>" + "<div class='c35'>" + choord1 + "</div>" + "<div class='c41'>" + skd1 + "</div>" + "<div class='c42'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c43'>" + degi2 + "." + mini2 + "." + seci2 + "</div>" + "<div class='c44'>" + pola2 + "</div>" + "<div class='c45'>" + choord2 + "</div>" + "<div class='c51'>" + skd2 + "</div>" + "<div class='c52'>" +  deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c53'>" + degi3 + "." + mini3 + "." + seci3 + "</div>" + "<div class='c54'>" + pola3 + "</div>" + "<div class='c55'>" + choord3 + "</div>" + "<div class='c61'>" + skd3 + "</div>" + "<div class='c62'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c63'>" + degi4 + "." + mini4 + "." + seci4 + "</div>" + "<div class='c64'>" + pola4 + "</div>" + "<div class='c65'>" + choord4 + "</div>" + "<div class='c71'>" + skd4 + "</div>" + "<div class='c72'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c73'>" + degi5 + "." + mini5 + "." + seci5 + "</div>" + "<div class='c74'>" + pola5 + "</div>" + "<div class='c75'>" + choord5 + "</div>" + "<div class='c81'>" + ch_ecc + "</div>" + "<div class='c82'>" + dega5 + "." + mina5 + "." + seca5 + "</div>" + "<div class='c83'>" + degii5 + "." + minii5 + "." + secii5 + "</div>" + "<div class='c84'>" + polai5 + "</div>" + "<div class='c85'>" + choordi5 + "</div>";

var cond7 = "<div class='c23'>" + "arc Length =" + " " + arc_lp + "</div>" + "<div class='c22'>" + "@BCC" + " " + deg0 + "." + min0 + "." + sec0 + "</div>" + "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" +  cln2 + "</div>" + "<div class='cln6'>" +  cln2 + "</div>" + "<div class='cln7'>" +  cln2 + "</div>" + "<div class='cln8'>" +  cln2 + "</div>" + "<div class='cln9'>" + cln2 + "</div>" + "<div class='cln10'>" +  cln2 + "</div>" + "<div class='cln11'>" +  cln2 + "</div>" + "<div class='c11'>" + sk + "</div>" + "<div class='c12'>" + offs + "</div>" + "<div class='c13'>" + inst + "</div>" + "<div class='c14'>" + pol + "</div>" + "<div class='c15'>" + cho + "</div>" + "<div class='c21'>" + ch_bcc + "</div>" + "<div class='c31'>" + skd + "</div>" + "<div class='c32'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c33'>" + degi1 + "." + mini1 + "." + seci1 + "</div>" + "<div class='c34'>" + pola1 + "</div>" + "<div class='c35'>" + choord1 + "</div>" + "<div class='c41'>" + skd1 + "</div>" + "<div class='c42'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c43'>" + degi2 + "." + mini2 + "." + seci2 + "</div>" + "<div class='c44'>" + pola2 + "</div>" + "<div class='c45'>" + choord2 + "</div>" + "<div class='c51'>" + skd2 + "</div>" + "<div class='c52'>" +  deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c53'>" + degi3 + "." + mini3 + "." + seci3 + "</div>" + "<div class='c54'>" + pola3 + "</div>" + "<div class='c55'>" + choord3 + "</div>" + "<div class='c61'>" + skd3 + "</div>" + "<div class='c62'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c63'>" + degi4 + "." + mini4 + "." + seci4 + "</div>" + "<div class='c64'>" + pola4 + "</div>" + "<div class='c65'>" + choord4 + "</div>" + "<div class='c71'>" + skd4 + "</div>" + "<div class='c72'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c73'>" + degi5 + "." + mini5 + "." + seci5 + "</div>" + "<div class='c74'>" + pola5 + "</div>" + "<div class='c75'>" + choord5 + "</div>" + "<div class='c81'>" + skd5 + "</div>" + "<div class='c82'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c83'>" + degi6 + "." + mini6 + "." + seci6 + "</div>" + "<div class='c84'>" + pola6 + "</div>" + "<div class='c85'>" + choord6 + "</div>" + "<div class='c91'>" + ch_ecc + "</div>" + "<div class='c92'>" + dega6 + "." + mina6 + "." + seca6 + "</div>" + "<div class='c93'>" + degii6 + "." + minii6 + "." + secii6 + "</div>" + "<div class='c94'>" + polai6 + "</div>" + "<div class='c95'>" + choordi6 + "</div>";

var cond8 = "<div class='c23'>" + "arc Length =" + " " +  arc_lp + "</div>" + "<div class='c22'>" + "@BCC" + " " + deg0 + "." + min0 + "." + sec0 + "</div>" + "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" +  cln2 + "</div>" + "<div class='cln6'>" +  cln2 + "</div>" + "<div class='cln7'>" +  cln2 + "</div>" + "<div class='cln8'>" +  cln2 + "</div>" + "<div class='cln9'>" + cln2 + "</div>" + "<div class='cln10'>" +  cln2 + "</div>" + "<div class='cln11'>" +  cln2 + "</div>" + "<div class='cln12'>" +  cln2 + "</div>" + "<div class='c11'>" + sk + "</div>" + "<div class='c12'>" + offs + "</div>" + "<div class='c13'>" + inst + "</div>" + "<div class='c14'>" + pol + "</div>" + "<div class='c15'>" + cho + "</div>" + "<div class='c21'>" + ch_bcc + "</div>" + "<div class='c31'>" + skd + "</div>" + "<div class='c32'>" + deg1 + "." + min1 + "." + sec1 + "</div>" + "<div class='c33'>" + degi1 + "." + mini1 + "." + seci1 + "</div>" + "<div class='c34'>" + pola1 + "</div>" + "<div class='c35'>" + choord1 + "</div>" + "<div class='c41'>" + skd1 + "</div>" + "<div class='c42'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c43'>" + degi2 + "." + mini2 + "." + seci2 + "</div>" + "<div class='c44'>" + pola2 + "</div>" + "<div class='c45'>" + choord2 + "</div>" + "<div class='c51'>" + skd2 + "</div>" + "<div class='c52'>" +  deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c53'>" + degi3 + "." + mini3 + "." + seci3 + "</div>" + "<div class='c54'>" + pola3 + "</div>" + "<div class='c55'>" + choord3 + "</div>" + "<div class='c61'>" + skd3 + "</div>" + "<div class='c62'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c63'>" + degi4 + "." + mini4 + "." + seci4 + "</div>" + "<div class='c64'>" + pola4 + "</div>" + "<div class='c65'>" + choord4 + "</div>" + "<div class='c71'>" + skd4 + "</div>" + "<div class='c72'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c73'>" + degi5 + "." + mini5 + "." + seci5 + "</div>" + "<div class='c74'>" + pola5 + "</div>" + "<div class='c75'>" + choord5 + "</div>" + "<div class='c81'>" + skd5 + "</div>" + "<div class='c82'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c83'>" + degi6 + "." + mini6 + "." + seci6 + "</div>" + "<div class='c84'>" + pola6 + "</div>" + "<div class='c85'>" + choord6 + "</div>" + "<div class='c91'>" + skd6 + "</div>" + "<div class='c92'>" + deg2 + "." + min2 + "." + sec2 + "</div>" + "<div class='c93'>" + degi7 + "." + mini7 + "." + seci7 + "</div>" + "<div class='c94'>" + pola7 + "</div>" + "<div class='c95'>" + choord7 + "</div>" + "<div class='c101'>" + ch_ecc + "</div>" + "<div class='c102'>" + dega7 + "." + mina7 + "." + seca7 + "</div>" + "<div class='c103'>" + degii7 + "." + minii7 + "." + secii7 + "</div>" + "<div class='c104'>" + polai7 + "</div>" + "<div class='c105'>" + choordi7 + "</div>";

if (R == "" || I == "" || ch_bcc == "" || peg_int == "" || ori == "" || skd == "") {

document.getElementById("ds").innerHTML = "Please insert in all input Fields!";

}else if (I < 0 || R < 0) {

document.getElementById("ds").innerHTML = "This version does not support Left handed curves!";

}else if (peg_int != 20) {

document.getElementById("ds").innerHTML = "The peg interval must be 20!";

}else if (choordi1 > 0 && choordi1 < 20 || choordi1 == 20) {

document.getElementById("ds").innerHTML = cond2;

}else if (choordi2 > 0 && choordi2 < 20 || choordi2 == 20) {

document.getElementById("ds").innerHTML = cond3;

}else if (choordi3 > 0 && choordi3 < 20 || choordi3 == 20) {

document.getElementById("ds").innerHTML = cond4;

}else if (choordi4 > 0 && choordi4 < 20 || choordi4 == 20) {

document.getElementById("ds").innerHTML = cond5;

}else if (choordi5 > 0 && choordi5 < 20 || choordi5 == 20) {

document.getElementById("ds").innerHTML = cond6;

}else if (choordi6 > 0 && choordi6 < 20 || choordi6 == 20) {

document.getElementById("ds").innerHTML = cond7;

}else if (choordi7 > 0 && choordi7 < 20 || choordi7 == 20) {

document.getElementById("ds").innerHTML = cond8;

}else

document.getElementById("ds").innerHTML = "Decrease the value of I or R because the arc length is too much!" ;

}

function horizontal_tr() {
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

function horizontal_setting() {
    document.getElementById('output').innerHTML = setting.horizontal_setting;
}

function horizontal_traverse() {
    document.getElementById('output').innerHTML = setting.horizontal_traverse;
}
