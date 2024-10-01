scriptTag = document.scripts[document.scripts.length - 1];
device_name = 'device_name'

div = document.createElement('div');
$(div)
.append('<span data-i18n="'+device_name+'">Device name</span>')
.addClass('w3-container w3-padding-small w3-theme-d3')
.append($('<div>')
.addClass('w3-right')
.append($('<i>')
 .attr('id', 'buzer')
 .attr("data-i18n","off")
 .attr("data-i18n-title","volume")
 .addClass('fa fa-volume-up'))
.append($('<i>').text(' '))
 .append($('<i>')
 .attr('id', 'rssi')
 .addClass('fa fa-wifi')
 .text(' 0 %'))
.append($('<i>').text(' '))
 .append($('<i>')
 .attr('id', 'vcc')
 .addClass('fa fa-battery-0')
 .text(' 0 %'))
.append($('<i>').text(' '))
 .append($('<i>')
 .attr('id', 'clock')
 .addClass('fa fa-clock-o')
 .text(' 00:00'))
)
scriptTag.parentNode.appendChild(div);

var buzer_tValueOld;
function parse_device_state(msg){
if (typeof msg.buzer !== 'undefined') {
if(msg.buzer=='1'){$('#buzer').attr('data-i18n','on');}
if(msg.buzer=='0'){$('#buzer').attr('data-i18n','off');}
updateContent();
}
if (typeof msg.buzer_t !== 'undefined') {
//$('#buzer').attr('data-i18n-title','volume');
        var buzer_tValue = msg.buzer_t;
        // Вземаме текущото съдържание на атрибута title
		var currentTitle = $('#buzer').attr('title');
        // Изчистваме старата стойност, ако вече е добавяна
        var cleanTitle = currentTitle.split(buzer_tValueOld)[0]; // Запазваме само преведената част
        // Добавяме новата стойност към чистия преведен текст
$('#buzer').attr('title', cleanTitle + buzer_tValue + ' %');
buzer_tValueOld = buzer_tValue;
}
if(typeof msg.buzer_i!=='undefined'){$('#buzer').removeClass().addClass('fa fa-volume-' + msg.buzer_i);}

if(typeof msg.rssi!=='undefined'){$('#rssi').text(' '+msg.rssi+' %');}
if(typeof msg.rssi_t!=='undefined'){$('#rssi').attr('title',msg.rssi_t+' dBm.');}
if(typeof msg.vcc!=='undefined'){$('#vcc').text(' '+msg.vcc+' %');}
if(typeof msg.vcc_t!=='undefined'){$('#vcc').attr('title',msg.vcc_t+' V.');}
if(typeof msg.vcc_i!=='undefined'){$('#vcc').removeClass().addClass('fa fa-battery-' + msg.vcc_i);}
if(typeof msg.clock!=='undefined'){$('#clock').text(' '+msg.clock);}
if(typeof msg.clock_t!=='undefined'){$('#clock').attr('title',msg.clock_t);}
}
