appendTo = 'Setup_WiFi'
stattic_elements_width='width:10.1em'
SetupId = 'WiFi_setup'
SetupText = 'SetupText'
StaticSetupText = 'StaticSetupText'
id_prefix='w'
translate_prefix = 'setup_wifi:'
wifi_ssid = translate_prefix + 'wifi_ssid'
wifi_ssid_id=id_prefix+'1'
wifi_ssid_text=wifi_ssid+'_text'
wifi_ssid_title=wifi_ssid+'_title'
wifi_ssid_placeholder=wifi_ssid+'_placeholder'
wifi_pass=translate_prefix+'wifi_pass'
wifi_pass_id=id_prefix+'2'
wifi_pass_text=wifi_pass+'_text'
wifi_pass_title=wifi_pass+'_title'
wifi_pass_placeholder=wifi_pass+'_placeholder'
wifi_dhcp=translate_prefix+'wifi_dhcp'
wifi_dhcp_id=id_prefix+'3'
wifi_dhcp_text=wifi_dhcp+'_text'
wifi_dhcp_title=wifi_dhcp+'_title'
wifi_ip=translate_prefix+'wifi_ip'
wifi_ip_id=id_prefix+'4'
wifi_ip_text=wifi_ip+'_text'
wifi_ip_title=wifi_ip+'_title'
wifi_ip_placeholder=wifi_ip+'_placeholder'
wifi_masc=translate_prefix+'wifi_masc'
wifi_masc_id=id_prefix+'5'
wifi_masc_text=wifi_masc+'_text'
wifi_masc_title=wifi_masc+'_title'
wifi_masc_placeholder=wifi_masc+'_placeholder'
wifi_gateway=translate_prefix+'wifi_gateway'
wifi_gateway_id=id_prefix+'6'
wifi_gateway_text=wifi_gateway+'_text'
wifi_gateway_title=wifi_gateway+'_title'
wifi_gateway_placeholder=wifi_gateway+'_placeholder'
wifi_dns1=translate_prefix+'wifi_dns1'
wifi_dns1_id=id_prefix+'7'
wifi_dns1_text=wifi_dns1+'_text'
wifi_dns1_title=wifi_dns1+'_title'
wifi_dns1_placeholder=wifi_dns1+'_placeholder'
wifi_dns2=translate_prefix+'wifi_dns2'
wifi_dns2_id=id_prefix+'8'
wifi_dns2_text=wifi_dns2+'_text'
wifi_dns2_title=wifi_dns2+'_title'
wifi_dns2_placeholder=wifi_dns2+'_placeholder'
attempts='w10'
reconnect='w11'
div = document.createElement("div");
$(div)
.addClass('w3-container w3-panel w3-responsive w3-border w3-round-small w3-pale-green')
.append($('<div>')
.addClass('w3-row-padding')
.append($('<div>')
.addClass('w3-half')
.append($('<label>')
.addClass('w3-label w3-text-teal bold italic underline')
.attr('data-i18n', wifi_ssid_text)
.attr('data-i18n-title', wifi_ssid_title)
.prop('for', wifi_ssid_id)
.prop('title', wifi_ssid_title)
)
.append($('<input>')
.addClass('w3-input w3-animate-input w3-border w3-round')
.attr('data-i18n-title', wifi_ssid_title)
.attr('data-i18n-placeholder', wifi_ssid_placeholder)
.prop('style', 'width:30%')
.prop('type', 'text')
.prop('placeholder', 'your SSID')
.prop('maxlength','16')
.prop('title', wifi_ssid_title)
.prop('id', wifi_ssid_id))
)
.append($('<div>')
.addClass('w3-half')
.append($('<label>')
.attr('data-i18n', wifi_pass_text)
.attr('data-i18n-title', wifi_pass_title)
.text('Password :')
.prop('for', wifi_pass_id)
.prop('title', wifi_pass_title))
.append($('<input>')
.prop('type', 'text')
.addClass('w3-input w3-animate-input w3-border w3-round')
.attr('data-i18n-title', wifi_pass_title)
.attr('data-i18n-placeholder', wifi_pass_placeholder)
.prop('autocomplete', 'password')
.prop('style', 'width:30%')
.prop('placeholder', 'your password')
.prop('maxlength','16')
.prop('title', wifi_pass_title)
.prop('id', wifi_pass_id))
)
)
.append($('<div>')
 .addClass('w3-row-padding')
.append($('<div>')
 .addClass('w3-half')
.append($('<input>')
 .addClass('w3-check')
 .prop('type', 'checkbox')
 .attr('data-i18n-title', wifi_dhcp_title)
 .prop('id', wifi_dhcp_id))
.append($('<label>')
 .attr('data-i18n', wifi_dhcp_text)
 .attr('data-i18n-title', wifi_dhcp_title)
 .prop('for', wifi_dhcp_id)
 .text(' DHCP'))
)
.append($('<div>')// </div> static IP
.addClass('w3-half hide')
.append($('<label>')
.attr('data-i18n', wifi_ip_text)
.attr('data-i18n-title', wifi_ip_title)
.text('IP :')
.prop('for', wifi_ip_id)
.prop('title', wifi_ip_title))
.append($('<input>')
.addClass('w3-input w3-animate-input w3-border w3-round')
.attr('data-i18n-title', wifi_ip_title)
.attr('data-i18n-placeholder', wifi_ip_placeholder)
.prop('style', stattic_elements_width)
.prop('type', 'text')
.prop('placeholder', 'XXX.XXX.XXX.XXX')
.prop('title', wifi_ip_title)
.prop('id', wifi_ip_id))
)
)
.append($('<div>')
.addClass('w3-row-padding')
.append($('<div>')
.addClass('w3-half hide')
.append($('<label>')
.attr('data-i18n', wifi_masc_text)
.attr('data-i18n-title', wifi_masc_title)
.text('Masc :')
.prop('for', wifi_masc_id)
.prop('title', wifi_masc_title))
.append($('<input>')
.addClass('w3-input w3-animate-input w3-border w3-round')
.attr('data-i18n-title', wifi_masc_title)
.attr('data-i18n-placeholder', wifi_masc_placeholder)
.prop('style', stattic_elements_width)
.prop('type', 'text')
.prop('placeholder', '255.255.255.0')
.prop('title', wifi_masc_title)
.prop('id', wifi_masc_id))
)
.append($('<div>')
.addClass('w3-half hide')
.append($('<label>')
.attr('data-i18n', wifi_gateway_text)
.attr('data-i18n-title', wifi_gateway_title)
.text('Gateway :')
.prop('for', wifi_gateway_id)
.prop('title', wifi_gateway_title))
.append($('<input>')
.addClass('w3-input w3-animate-input w3-border w3-round')
.attr('data-i18n-title', wifi_gateway_title)
.attr('data-i18n-placeholder', wifi_gateway_placeholder)
.prop('style', stattic_elements_width)
.prop('type', 'text')
.prop('placeholder', 'XXX.XXX.XXX.XXX')
.prop('title', wifi_gateway_title)
.prop('id', wifi_gateway_id))
)
)
.append($('<div>')
.addClass('w3-row-padding')
.append($('<div>')
.addClass('w3-half hide')
.append($('<label>')
.attr('data-i18n', wifi_dns1_text)
.attr('data-i18n-title', wifi_dns1_title)
.text('Masc :')
.prop('for', wifi_dns1_id)
.prop('title', wifi_dns1_title))
.append($('<input>')
.addClass('w3-input w3-animate-input w3-border w3-round')
.attr('data-i18n-title', wifi_dns1_title)
.attr('data-i18n-placeholder', wifi_dns1_placeholder)
.prop('style', stattic_elements_width)
.prop('type', 'text')
.prop('placeholder', 'XXX.XXX.XXX.XXX')
.prop('title', wifi_dns1_title)
.prop('id', wifi_dns1_id))
)
.append($('<div>')
.addClass('w3-half hide')
.append($('<label>')
.attr('data-i18n', wifi_dns2_text)
.attr('data-i18n-title', wifi_dns2_title)
.text('Gateway :')
.prop('for', wifi_dns2_id)
.prop('title', wifi_dns2_title))
.append($('<input>')
.addClass('w3-input w3-animate-input w3-border w3-round')
.attr('data-i18n-title', wifi_dns2_title)
.attr('data-i18n-placeholder', wifi_dns2_placeholder)
.prop('style', stattic_elements_width)
.prop('type', 'text')
.prop('placeholder', 'XXX.XXX.XXX.XXX')
.prop('title', wifi_dns2_title)
.prop('id', wifi_dns2_id))
)
)
document.getElementById(appendTo).appendChild(div);
applyInputMask(wifi_ip_id);
applyInputMask(wifi_masc_id);
applyInputMask(wifi_gateway_id);
applyInputMask(wifi_dns1_id);
applyInputMask(wifi_dns2_id);
function applyInputMask(id) {
    $('#' + id).inputmask({
        alias: "ip",
        greedy: false
    });
}
$('#' + wifi_dhcp_id).on('change', function() {
    if ($(this).is(':checked')) {
		$('.hide').slideUp();
    } else {
		$('.hide').slideDown();
    }
});
