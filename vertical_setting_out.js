function myF() {
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
