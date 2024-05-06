var data = {
    "setting":
        `{"horizontal_setting": "<fieldset style='background-color: #fff'><legend>Horizontal curve setting out</legend><center><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>R</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='r'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>I</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='i'></td></tr><tr><td style='background-color: blue; text-align: center'>Ch_bcc</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ch'></td></tr><td style='background-color: blue; text-align: center; width: 120px;'>peg_interval</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='peg' value='20'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>BCC-PI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ori'></td><tr><td style='background-color: blue; text-align: center; width: 120px;'>SKD</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='skd'></td></tr></table></center><br><br><button type='button' onclick='horizontal_sc()'>Compute Setting Out Data</button> <input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset>",
        "vertical_setting": "<fieldset style='background-color: #fff'><legend>Transition curve control points</legend><center><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>g1 (%)</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='g1'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>g2 (%)</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='g2'></td></tr><tr><td style='background-color: blue; text-align: center'>L1</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='l1'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>Height of PI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ht'></td></tr> <tr><td style='background-color: blue; text-align: center; width: 120px;'>SKD_PI</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='skd'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>SKD</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='skd1'></td></tr></table></center><button type='button' onclick='vertical_set()'>Compute Staking By Distance</button><br><br><input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset>",
        "transition_setting": "<fieldset style='background-color: #fff'><legend>Transition curve control points</legend><center><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>Ypi</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='y'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>Xpi</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='x'></td></tr><tr><td style='background-color: blue; text-align: center'>BTC-PI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='drn1'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>PI-ETC</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='drn2'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>R</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ra'></td></tr>  <tr><td style='background-color: blue; text-align: center; width: 120px;'>Length</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='le'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>skdPI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ski'></td></tr>  <tr><td style='background-color: blue; text-align: center; width: 120px;'>skd</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='sk'></td></tr></table></center><br><br><button type='button' onclick='transition_set()'>Compute Staking By Distance</button><br><br><input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset>"
        }`,
    
    "traverse":
        `{"horizontal_traverse": "<fieldset style='background-color: #fff'><legend>Horizontal curve control points</legend><center><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>Ypi</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='y'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>Xpi</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='x'></td></tr><tr><td style='background-color: blue; text-align: center'>BCC-PI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='drn1'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>PI-ECC</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='drn2'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>R</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ra'></td></tr></table><center><br><br><button type='button' onclick='horizontal_tr()'>Compute Traverse</button> <input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset>",
        "transition_traverse": "<fieldset style='background-color: #fff'><legend>Transition curve control points</legend><center><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>Ypi</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='y'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>Xpi</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='x'></td></tr><tr><td style='background-color: blue; text-align: center'>BTC-PI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='drn1'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>PI-ETC</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='drn2'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>R</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ra'></td></tr>  <tr><td style='background-color: blue; text-align: center; width: 120px;'>Length</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='le'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>skdPI</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='sk'></td></tr>  </table></center><button type='button' onclick='transition_tr()'>Compute Traverse</button> <input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset>"}`,
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

document.getElementById("ds").innerHTML = "<p style='background-color: #fff'>" + cond2 + "</p>";

}else if (choordi2 > 0 && choordi2 < 20 || choordi2 == 20) {

document.getElementById("ds").innerHTML = "<p style='background-color: #fff'>" + cond3 + "</p>";

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

function vertical_set() {
var g1 = document.getElementById("g1").value;
var g2 = document.getElementById("g2").value;
var l1 = document.getElementById("l1").value;
var skd_pi = document.getElementById("skd").value;
var ht = document.getElementById("ht").value;
var skd = document.getElementById("skd1").value;

var skd_bvc = Math.pow(skd_pi, 1) - Math.pow(l1, 1)/Math.pow(2, 1);
var skd_bvcp = skd_bvc.toFixed(2);

var skd1 = Math.pow(skd, 1) + Math.pow(20, 1);
var skd1p = skd1.toFixed(2);

var skd2 = Math.pow(skd1, 1) + Math.pow(20, 1); 
var skd2p = skd2.toFixed(2);

var skd3 = Math.pow(skd2, 1) + Math.pow(20, 1);
var skd3p = skd3.toFixed(2);

var skd4 = Math.pow(skd3, 1) + Math.pow(20, 1);
var skd4p = skd4.toFixed(2);

var skd5 = Math.pow(skd4, 1) + Math.pow(20, 1);
var skd5p = skd5.toFixed(2);

var skd_evc = Math.pow(skd_pi, 1) + Math.pow(l1, 1)/Math.pow(2, 1);
var skd_evcp = skd_evc.toFixed(2);

var T = Math.pow(l1, 1)/Math.pow(2, 1); 

var G = Math.pow(g2, 1) - Math.pow(g1, 1);
var a = Math.pow(G, 1)/(Math.pow(200, 1)*Math.pow(l1, 1));
var b = Math.pow(g1, 1)/Math.pow(100, 1);

var x1 = Math.abs(0);
var x1p = x1.toFixed(2); 

var x2 = Math.pow(skd, 1) - Math.pow(skd_bvc, 1);
var x2p = x2.toFixed(2);

var x3 = Math.pow(skd1, 1) - Math.pow(skd_bvc, 1);
var x3p = x3.toFixed(2);

var x4 = Math.pow(skd2, 1) - Math.pow(skd_bvc, 1);
var x4p = x4.toFixed(2);

var x5 = Math.pow(skd3, 1) - Math.pow(skd_bvc, 1);
var x5p = x5.toFixed(2);

var x6 = Math.pow(skd4, 1) - Math.pow(skd_bvc, 1);
var x6p = x6.toFixed(2);

var x7 = Math.pow(skd_evc, 1) - Math.pow(skd_bvc, 1);
var x7p = x7.toFixed(2);

var xhg_sg = Math.pow(Math.pow(g1, 1)*(-1), 1)*Math.pow(l1, 1)/Math.pow(G, 1);
var xhg_sgp = xhg_sg.toFixed(2);

var skd_hgsg = Math.pow(skd_bvc, 1) + Math.pow(xhg_sg, 1);
var skd_hgsgp = skd_hgsg.toFixed(2);

var hbvc = Math.pow(ht, 1) - Math.pow(g1, 1)/Math.pow(100, 1)*Math.pow(l1, 1)/Math.pow(2, 1);
var c = Math.pow(hbvc, 1);

// bx + c squared tangent level
var bx_c1 = Math.pow(b, 1)*Math.pow(x1, 1) + Math.pow(c, 1);
var bx_c1p = bx_c1.toFixed(2);

var bx_c2 = Math.pow(b, 1)*Math.pow(x2, 1) + Math.pow(c, 1);
var bx_c2p = bx_c2.toFixed(2);

var bx_c3 = Math.pow(b, 1)*Math.pow(x3, 1) + Math.pow(c, 1);
var bx_c3p = bx_c3.toFixed(2);

var bx_c4 = Math.pow(b, 1)*Math.pow(x4, 1) + Math.pow(c, 1);
var bx_c4p = bx_c4.toFixed(2);

var bx_c5 = Math.pow(b, 1)*Math.pow(x5, 1) + Math.pow(c, 1);
var bx_c5p = bx_c5.toFixed(2);

var bx_c6 = Math.pow(b, 1)*Math.pow(x6, 1) + Math.pow(c, 1);
var bx_c6p = bx_c6.toFixed(2);

var bx_c7 = Math.pow(b, 1)*Math.pow(x7, 1) + Math.pow(c, 1);
var bx_c7p = bx_c7.toFixed(2);

var bx_chgsg = Math.pow(b, 1)*Math.pow(xhg_sg, 1) + Math.pow(c, 1);
var bx_chgsgp = bx_chgsg.toFixed(2);

//ax squared
var ax1 = Math.pow(a, 1)*Math.pow(Math.abs(x1), 2);
var ax1p = ax1.toFixed(2);

var ax2 = Math.pow(a, 1)*Math.pow(Math.abs(x2), 2);
var ax2p = ax2.toFixed(2);

var ax3 = Math.pow(a, 1)*Math.pow(Math.abs(x3), 2);
var ax3p = ax3.toFixed(2);

var ax4 = Math.pow(a, 1)*Math.pow(Math.abs(x4), 2);
var ax4p = ax4.toFixed(2);

var ax5 = Math.pow(a, 1)*Math.pow(Math.abs(x5), 2);
var ax5p = ax5.toFixed(2);

var ax6 = Math.pow(a, 1)*Math.pow(Math.abs(x6), 2);
var ax6p = ax6.toFixed(2);

var ax7 = Math.pow(a, 1)*Math.pow(Math.abs(x7), 2);
var ax7p = ax7.toFixed(2);

var axhgsg = Math.pow(a, 1)*Math.pow(Math.abs(xhg_sg), 2);
var axhgsgp = axhgsg.toFixed(2);

// heights
var h_bvc = Math.pow(ax1, 1) + Math.pow(bx_c1, 1);
var h_bvcp = h_bvc.toFixed(2); 

var h2 = Math.pow(ax2, 1) + Math.pow(bx_c2, 1);
var h2p = h2.toFixed(2);

var h3 = Math.pow(ax3, 1) + Math.pow(bx_c3, 1);
var h3p = h3.toFixed(2);

var h4 = Math.pow(ax4, 1) + Math.pow(bx_c4, 1);
var h4p = h4.toFixed(2);

var h5 = Math.pow(ax5, 1) + Math.pow(bx_c5, 1);
var h5p = h5.toFixed(2);

var h6 = Math.pow(ax6, 1) + Math.pow(bx_c6, 1);
var h6p = h6.toFixed(2);

var h_evc = Math.pow(ht, 1) + Math.pow(g2, 1)/Math.pow(100, 1)*Math.pow(l1, 1)/Math.pow(2, 1);
var h_evcp = h_evc.toFixed(2);

var h_hgsg = Math.pow(axhgsg, 1) + Math.pow(bx_chgsg, 1);
var h_hgsgp = h_hgsg.toFixed(2);

var point = "Point";
var skkd = "SKD";
var x = "x";
var bx_c = "bx + c";
var ax = "ax^2";
var level = "Form Level";
var cln = "................................................................................................................................................................................................................................................";
var cln2 = "_____________________________________________________________________________________________________________________________________________";

var condi1 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>"+ "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='cln9'>" + cln2 + "</div>" + "<div class='cln14'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" +  bx_c + "</div>" + "<div class='c15'>" +  ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" +  bx_c1p + "</div>" + "<div class='c25'>" +  ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" + bx_c2p + "</div>" + "<div class='c35'>" + ax2p +  "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" +  bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c52'>" + skd2p + "</div>" + "<div class='c53'>" + x4p + "</div>" + "<div class='c54'>" +  bx_c4p + "</div>" + "<div class='c55'>" +  ax4p + "</div>" + "<div class='c56'>" + h4p + "</div>" + "<div class='c62'>" + skd3p + "</div>" + "<div class='c63'>" + x5p + "</div>" + "<div class='c64'>" +  bx_c5p + "</div>" + "<div class='c65'>" + ax5p + "</div>" + "<div class='c66'>" + h5p + "</div>" + "<div class='c72'>" + skd4p + "</div>" + "<div class='c73'>" + x6p + "</div>" + "<div class='c74'>" +  bx_c6p + "</div>" + "<div class='c75'>" +  ax6p + "</div>" + "<div class='c76'>" + h6p + "</div>" + "<div class='c81'>" + "ECC" + "</div>" + "<div class='c82'>" + skd_evcp + "</div>" + "<div class='c83'>" + x7p + "</div>" + "<div class='c84'>" + bx_c7p + "</div>" + "<div class='c85'>" +  ax7p + "</div>" + "<div class='c86'>" + h_evcp + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + "skd hog-point =" + "</div>" + "<div class=c141>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c101'>" + "<p style='color: green'>" + "xhog-pt =" + "</p>" + "</div>" + "<div class='c142'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c111'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c143'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c121'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c144'>" + "<p style='color: green'>" + axhgsgp + "</p>" + "</div>" + "<div class='c131'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c145'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

var condi2 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>"+ "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='cln13'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" +  bx_c + "</div>" + "<div class='c15'>" +  ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" +  bx_c1p + "</div>" + "<div class='c25'>" + ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" + bx_c2p + "</div>" + "<div class='c35'>" + ax2p + "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" + bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c52'>" + skd2p + "</div>" + "<div class='c53'>" + x4p + "</div>" + "<div class='c54'>" + bx_c4p + "</div>" + "<div class='c55'>" +  ax4p + "</div>" + "<div class='c56'>" + h4p + "</div>" + "<div class='c62'>" + skd3p + "</div>" + "<div class='c63'>" + x5p + "</div>" + "<div class='c64'>" +  bx_c5p + "</div>" + "<div class='c65'>" + ax5p + "</div>" + "<div class='c66'>" + h5p + "</div>" + "<div class='c71'>" + "ECC" + "</div>" + "<div class='c72'>" + skd_evcp + "</div>" + "<div class='c73'>" + x7p + "</div>" + "<div class='c74'>" + bx_c7p + "</div>" + "<div class='c75'>" + ax7p + "</div>" + "<div class='c76'>" + h_evcp + "</div>" + "<div class='c81'>" + "<p style='color: green'>" + "skd hog-point =" + "</p>" + "</div>" + "<div class='c82'>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + "xhog-pt =" + "</p>" + "</div>" + "<div class='c92'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c101'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c102'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c111'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c112'>" + "<p style='color: green'>" + axhgsgp + "</p>" + "</div>" + "<div class='c121'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c122'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

var condi3 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>"+ "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln12'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" +  bx_c + "</div>" + "<div class='c15'>" + ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" + bx_c1p + "</div>" + "<div class='c25'>" + ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" +  bx_c2p + "</div>" + "<div class='c35'>" +  ax2p + "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" + bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c52'>" + skd2p + "</div>" + "<div class='c53'>" + x4p + "</div>" + "<div class='c54'>" +  bx_c4p + "</div>" + "<div class='c55'>" + ax4p + "</div>" + "<div class='c56'>" + h4p + "</div>" + "<div class='c61'>" + "ECC" + "</div>" + "<div class='c62'>" + skd_evcp + "</div>" + "<div class='c63'>" + x7p + "</div>" + "<div class='c64'>" + bx_c7p + "</div>" + "<div class='c65'>" + ax7p + "</div>" + "<div class='c66'>" + h_evcp + "</div>" + "<div class='c71'>" + "<p style='color: green'>" + "skd hog-point =" + "</p>" + "</div>" + "<div class='c72'>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c81'>" + "<p style='color: green'>" + "xhog-pt =" + "</p>" + "</div>" + "<div class='c82'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c92'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c101'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c102'>" + "<p style='color: green'>" + axhgsgp + "</p>" + "</div>" + "<div class='c111'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c112'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

var condi4 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln11'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" + bx_c + "</div>" + "<div class='c15'>" + ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" +  bx_c1p + "</div>" + "<div class='c25'>" + ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" +  bx_c2p + "</div>" + "<div class='c35'>" + ax2p + "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" + bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c51'>" + "ECC" + "</div>" + "<div class='c52'>" + skd_evcp + "</div>" + "<div class='c53'>" + x7p + "</div>" + "<div class='c54'>" +  bx_c7p + "</div>" + "<div class='c55'>" + ax7p + "</div>" + "<div class='c56'>" + h_evcp + "</div>" + "<div class='c61'>" + "<p style='color: green'>" + "skd hog-point =" + "</p>" + "</div>" + "<div class='c62'>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c71'>" + "<p style='color: green'>" + "xhog-pt =" + "</p>" + "</div>" + "<div class='c72'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c81'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c82'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c92'>" + "<p style='color: green'>" + axhgsgp + "</div>" + "</p>" + "<div class='c101'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c102'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

condi5 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>"+ "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='cln9'>" + cln2 + "</div>" + "<div class='cln14'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" +  bx_c + "</div>" + "<div class='c15'>" +  ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" +  bx_c1p + "</div>" + "<div class='c25'>" +  ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" + bx_c2p + "</div>" + "<div class='c35'>" + ax2p +  "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" +  bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c52'>" + skd2p + "</div>" + "<div class='c53'>" + x4p + "</div>" + "<div class='c54'>" +  bx_c4p + "</div>" + "<div class='c55'>" +  ax4p + "</div>" + "<div class='c56'>" + h4p + "</div>" + "<div class='c62'>" + skd3p + "</div>" + "<div class='c63'>" + x5p + "</div>" + "<div class='c64'>" +  bx_c5p + "</div>" + "<div class='c65'>" + ax5p + "</div>" + "<div class='c66'>" + h5p + "</div>" + "<div class='c72'>" + skd4p + "</div>" + "<div class='c73'>" + x6p + "</div>" + "<div class='c74'>" +  bx_c6p + "</div>" + "<div class='c75'>" +  ax6p + "</div>" + "<div class='c76'>" + h6p + "</div>" + "<div class='c81'>" + "ECC" + "</div>" + "<div class='c82'>" + skd_evcp + "</div>" + "<div class='c83'>" + x7p + "</div>" + "<div class='c84'>" + bx_c7p + "</div>" + "<div class='c85'>" +  ax7p + "</div>" + "<div class='c86'>" + h_evcp + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + "skd sag-point =" + "</div>" + "<div class=c141>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c101'>" + "<p style='color: green'>" + "xsag-pt =" + "</p>" + "</div>" + "<div class='c142'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c111'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c143'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c121'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c144'>" + "<p style='color: green'>" + axhgsgp + "</p>" + "</div>" + "<div class='c131'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c145'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

var condi6 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>"+ "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln8'>" + cln2 + "</div>" + "<div class='cln13'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" +  bx_c + "</div>" + "<div class='c15'>" +  ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" +  bx_c1p + "</div>" + "<div class='c25'>" + ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" + bx_c2p + "</div>" + "<div class='c35'>" + ax2p + "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" + bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c52'>" + skd2p + "</div>" + "<div class='c53'>" + x4p + "</div>" + "<div class='c54'>" + bx_c4p + "</div>" + "<div class='c55'>" +  ax4p + "</div>" + "<div class='c56'>" + h4p + "</div>" + "<div class='c62'>" + skd3p + "</div>" + "<div class='c63'>" + x5p + "</div>" + "<div class='c64'>" +  bx_c5p + "</div>" + "<div class='c65'>" + ax5p + "</div>" + "<div class='c66'>" + h5p + "</div>" + "<div class='c71'>" + "ECC" + "</div>" + "<div class='c72'>" + skd_evcp + "</div>" + "<div class='c73'>" + x7p + "</div>" + "<div class='c74'>" + bx_c7p + "</div>" + "<div class='c75'>" + ax7p + "</div>" + "<div class='c76'>" + h_evcp + "</div>" + "<div class='c81'>" + "<p style='color: green'>" + "skd sag-point =" + "</p>" + "</div>" + "<div class='c82'>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + "xsag-pt =" + "</p>" + "</div>" + "<div class='c92'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c101'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c102'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c111'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c112'>" + "<p style='color: green'>" + axhgsgp + "</p>" + "</div>" + "<div class='c121'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c122'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

var condi7 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln7'>" + cln2 + "</div>" + "<div class='cln12'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" +  bx_c + "</div>" + "<div class='c15'>" + ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" + bx_c1p + "</div>" + "<div class='c25'>" + ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" +  bx_c2p + "</div>" + "<div class='c35'>" +  ax2p + "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" + bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c52'>" + skd2p + "</div>" + "<div class='c53'>" + x4p + "</div>" + "<div class='c54'>" +  bx_c4p + "</div>" + "<div class='c55'>" + ax4p + "</div>" + "<div class='c56'>" + h4p + "</div>" + "<div class='c61'>" + "ECC" + "</div>" + "<div class='c62'>" + skd_evcp + "</div>" + "<div class='c63'>" + x7p + "</div>" + "<div class='c64'>" + bx_c7p + "</div>" + "<div class='c65'>" + ax7p + "</div>" + "<div class='c66'>" + h_evcp + "</div>" + "<div class='c71'>" + "<p style='color: green'>" + "skd sag-point =" + "</p>" + "</div>" + "<div class='c72'>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c81'>" + "<p style='color: green'>" + "xsag-pt =" + "</p>" + "</div>" + "<div class='c82'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c92'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c101'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c102'>" + "<p style='color: green'>" + axhgsgp + "</p>" + "</div>" + "<div class='c111'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c112'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

var condi8 = "<div class='cln'>" + cln + "</div>" + "<div class='cln2'>" + cln + "</div>" + "<div class='cln3'>" + cln2 + "</div>" + "<div class='cln4'>" + cln2 + "</div>" + "<div class='cln5'>" + cln2 + "</div>" + "<div class='cln6'>" + cln2 + "</div>" + "<div class='cln11'>" + cln2 + "</div>" + "<div class='c11'>" + point + "</div>" + "<div class='c12'>" + skkd + "</div>" + "<div class='c13'>" + x + "</div>" + "<div class='c14'>" + bx_c + "</div>" + "<div class='c15'>" + ax + "</div>" + "<div class='c16'>" + level + "</div>" + "<div class='c21'>" + "BVC" + "</div>" + "<div class='c22'>" + skd_bvcp + "</div>" + "<div class='c23'>" + x1p + "</div>" + "<div class='c24'>" +  bx_c1p + "</div>" + "<div class='c25'>" + ax1p + "</div>" + "<div class='c26'>" + h_bvcp + "</div>" + "<div class='c32'>" + skd + ".00" + "</div>" + "<div class='c33'>" + x2p + "</div>" + "<div class='c34'>" +  bx_c2p + "</div>" + "<div class='c35'>" + ax2p + "</div>" + "<div class='c36'>" + h2p + "</div>" + "<div class='c42'>" + skd1p + "</div>" + "<div class='c43'>" + x3p + "</div>" + "<div class='c44'>" + bx_c3p + "</div>" + "<div class='c45'>" + ax3p + "</div>" + "<div class='c46'>" + h3p + "</div>" + "<div class='c51'>" + "ECC" + "</div>" + "<div class='c52'>" + skd_evcp + "</div>" + "<div class='c53'>" + x7p + "</div>" + "<div class='c54'>" +  bx_c7p + "</div>" + "<div class='c55'>" + ax7p + "</div>" + "<div class='c56'>" + h_evcp + "</div>" + "<div class='c61'>" + "<p style='color: green'>" + "skd sag-point =" + "</p>" + "</div>" + "<div class='c62'>" + "<p style='color: green'>" + skd_hgsgp + "</p>" + "</div>" + "<div class='c71'>" + "<p style='color: green'>" + "xsag-pt =" + "</p>" + "</div>" + "<div class='c72'>" + "<p style='color: green'>" + xhg_sgp + "</p>" + "</div>" + "<div class='c81'>" + "<p style='color: green'>" + "bx + c =" + "</p>" + "</div>" + "<div class='c82'>" + "<p style='color: green'>" + bx_chgsgp + "</p>" + "</div>" + "<div class='c91'>" + "<p style='color: green'>" + ax + "  =" + "</p>" + "</div>" + "<div class='c92'>" + "<p style='color: green'>" + axhgsgp + "</div>" + "</p>" + "<div class='c101'>" + "<p style='color: green'>" + "Form Level = " + "</p>" + "</div>" + "<div class='c102'>" + "<p style='color: green'>" + h_hgsgp + "</p>" + "</div>"; 

if (g1 == "" || g2 == "" || l1 == "" || skd_pi == "" || ht == "") {
document.getElementById("ds").innerHTML = "Please Insert g1, g2, L, Height of PI, and SKD of PI!";
}else if (l1 != 20 && l1 != 40 && l1 != 60 && l1 != 80 && l1 != 100) {
document.getElementById("ds").innerHTML = "Length must be a multiple of 20s";
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd == "") {
document.getElementById("ds").innerHTML = skd_bvcp;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G < 0  && l1 == 100) {
document.getElementById("ds").innerHTML = condi1;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G < 0 && l1 == 80) {
document.getElementById("ds").innerHTML = condi2;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G < 0&& l1 == 60) {
document.getElementById("ds").innerHTML = condi3;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G < 0 && l1 == 40) {
document.getElementById("ds").innerHTML = condi4;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G > 0  && l1 == 100) {
document.getElementById("ds").innerHTML = condi5;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G > 0  && l1 == 80) {
document.getElementById("ds").innerHTML = condi6;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G > 0  && l1 == 60) {
document.getElementById("ds").innerHTML = condi7;
}else if (g1 != "" && g2 != "" && l1 != "" && skd_pi != "" && ht != "" && skd != "" && G > 0  && l1 == 40) {
document.getElementById("ds").innerHTML = condi8;
}else 
document.getElementById("ds").innerHTML = "h";

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

function transition_set() {

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
document.getElementById("ds").innerHTML = "This version does not support left handed curves!"
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

function transition_tr() {

var yi = document.getElementById("y").value;
var xi = document.getElementById("x").value;
var btc_pi = document.getElementById("drn1").value;
var pi_etc = document.getElementById("drn2").value;
var R = document.getElementById("ra").value;
var L = document.getElementById("le").value;
var sk = document.getElementById("sk").value;
var phi = Math.abs(Math.pow(L, 1))/Math.pow(2*R, 1);
var X = Math.pow(L, 1)*(Math.pow(1, 1) - Math.abs(Math.pow(phi, 2))/Math.pow(10, 1));
var Y = Math.pow(L, 1)*(Math.pow(phi,1)/Math.pow(3, 1) - Math.pow(phi, 3)/Math.pow(105, 1));
var shift = Math.pow(Y, 1) - Math.pow(R, 1)*(Math.pow(1, 1) - Math.cos(Math.pow(phi, 1)));
var I = Math.pow(pi_etc, 1) - Math.pow(btc_pi, 1);

//pi to btc

var T = Math.pow(X, 1) - Math.pow(R, 1)*Math.sin(phi) + (Math.pow(R, 1) + Math.pow(shift, 1))*Math.tan(I/2*Math.PI/180);
var pi_btc = Math.pow(btc_pi, 1) - Math.pow(180, 1);
var btc_skd = Math.pow(sk, 1) - Math.pow(T, 1);
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
var bcc_skd = Math.pow(btc_skd, 1) + Math.pow(L, 1);
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
var ecc_skd = Math.pow(bcc_skd, 1) + Math.pow(R, 1)*(Math.pow(I*Math.PI/180, 1) - Math.pow(2, 1)*Math.pow(phi, 1));
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
var etc_skd = Math.pow(ecc_skd, 1) + Math.pow(L, 1); 
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
var condi1 = dir +" " + tra + dist + tra + sta + tra +  yy + tra + xx + "<br>" + lnb + "<br>" + tra2 + "PI" + tra + yi + tra0 + xi + "<br>" + lnb + "<br>" + deg1 + "." + min1 + "." + sec1 + tra1 + Tp + "<br>" + lnb + "<br>" + tra2 + "BTC" + tra + ybtcp + tra0 + xbtcp + "<br>" + lnb + "<br>" + deg2 + "." + min2 + "." + sec2 + tra1 + dbtc_bccp + "<br>" + lnb + "<br>" + tra2 + "BCC" + tra + ybccp + tra0 + xbccp + "<br>" + lnb + "<br>" + deg3 + "." + min3 + "." + sec3 + tra1 + dbcc_eccp + "<br>" + lnb + "<br>" + tra2 + "ECC" + tra + yeccp + tra0 + xeccp + "<br>" + lnb + "<br>" + deg4 + "." + min4 + "." + sec4 + tra1 + decc_etcp + "<br>" + lnb + "<br>" + tra2 + "ETC" + tra + yetcp + tra0 + xetcp + "<br>" + lnb + "<br>" + deg5 + "." + min5 + "." + sec5 + tra1 + dect_pip + "<br>" + lnb + "<br>" + tra2 + "PI" + tra + ypip + tra0 + xpip;

if (xi == "" || yi == "" || pi_etc == "" || btc_pi == "" || R == "" || L == "") {
document.getElementById("ds").innerHTML = "The first six input Fields are compulsory!";
}else
document.getElementById("ds").innerHTML = condi1;
}

function horizontal_setting() {
    document.getElementById('output').innerHTML = setting.horizontal_setting;
}

function transition_setting() {
    document.getElementById('output').innerHTML = setting.transition_setting;
}

function horizontal_traverse() {
    document.getElementById('output').innerHTML = traverse.horizontal_traverse;
}

function transition_traverse() {
    document.getElementById('output').innerHTML = traverse.transition_traverse;
}

function vertical_setting() {
    document.getElementById('output').innerHTML = setting.vertical_setting;
}
