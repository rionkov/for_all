
$.ajaxSetup({async: false});

//<script src="https://cdnjs.cloudflare.com/ajax/libs/i18next/23.15.1/i18next.min.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/i18next-xhr-backend/3.2.2/i18nextXHRBackend.min.js"></script>

//<script src="https://raw.githubusercontent.com/rionkov/for_all/main/i18next.min.js"></script>
//<script src="https://raw.githubusercontent.com/rionkov/for_all/main/i18nextXHRBackend.min.js"></script>

//$.getScript('i18next.min.js')
//$.getScript('https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/esp8266/i18next.min.js')
//$.getScript('https://raw.githubusercontent.com/rionkov/for_all/main/i18next.min.js')
//$.getScript('https://cdnjs.cloudflare.com/ajax/libs/i18next/23.15.1/i18next.min.js')

//$.getScript('i18nextXHRBackend.min.js')
//$.getScript('https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/esp8266/i18nextXHRBackend.min.js')
//$.getScript('https://raw.githubusercontent.com/rionkov/for_all/main/i18nextXHRBackend.min.js')
//$.getScript('https://cdnjs.cloudflare.com/ajax/libs/i18next-xhr-backend/3.2.2/i18nextXHRBackend.min.js')

$.getScript('project_title.js')
//$.getScript('https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/esp8266/project_title.js')
$.getScript('jquery.inputmask.min.js')
//$.getScript('https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/esp8266/jquery.inputmask.min.js')

$('<link/>', {
   rel: 'stylesheet',
   type: 'text/css',
   href: 'w3.css'
   //href: 'https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/esp8266/w3.css'
}).appendTo('head')
$('<link/>', {
   rel: 'stylesheet',
   type: 'text/css',
   href: 'project_css.css'
   //href: 'https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/project_css.css'
}).appendTo('head')

$('<link/>', {
   rel: 'icon',
   type: 'image/x-icon',
   href: 'favicon.ico'
   //href: 'https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/favicon.ico'
}).appendTo('head')

$.ajaxSetup({async: true});

