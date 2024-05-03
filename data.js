var data = {
    "setting":
        `{"horizontal_setting": "<fieldset><legend>Horizontal curve setting out</legend><table style='width:flex;'><tr><td style='background-color: blue; text-align: center'>R</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='r'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>I</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='i'></td></tr><tr><td style='background-color: blue; text-align: center'>Ch_bcc</td><td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ch'></td></tr><td style='background-color: blue; text-align: center; width: 120px;'>peg_interval</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='peg' value='20'></td></tr><tr><td style='background-color: blue; text-align: center; width: 120px;'>BCC-PI</td>td style='background-color: rgb(230, 230, 130); text-align: center; width: 120px'><input type='number' id='ori'></td><tr><td style='background-color: blue; text-align: center; width: 120px;'>SKD</td><td style='background-color: rgb(230, 230, 230); text-align: center; width: 120px'><input type='number' id='skd'></td></tr></table><br><br><button type='button' onclick='horizontal_setting()'>Compute Setting Out Data</button> <input type='reset' value='Clear All'><br><br><fieldset><p id='ds'></p></fieldset><br><br>"}`,
      }
var setting = JSON.parse(data.setting);

function horizontal_setting() {
    document.getElementById('output').innerHTML = setting.horizontal_setting;
}
