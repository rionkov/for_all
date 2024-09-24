scriptTag = document.scripts[document.scripts.length - 1];
translate_prefix = 'setup:'
button_Push = translate_prefix + 'button_Push'
button_Push_text=button_Push+'_text'
button_Push_title=button_Push+'_title'
button_Project = translate_prefix + 'button_Project'
button_Project_text=button_Project+'_text'
button_Project_title=button_Project+'_title'
button_wifi = translate_prefix + 'button_wifi'
button_wifi_text=button_wifi+'_text'
button_wifi_title=button_wifi+'_title'
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.prop('id', 'Setup')
.attr('style', 'display:none')
.append($('<div>')
.addClass('w3-bar w3-black')
.append($('<button>')
.attr('data-i18n', button_Push_text)
.attr('data-i18n-title', button_Push_title)
.addClass('w3-bar-item w3-button tablink w3-ripple')
.attr('onClick', 'openMenu(event,\'Setup_Push\')')
)
.append($('<button>')
.attr('data-i18n', button_Project_text)
.attr('data-i18n-title', button_Project_title)
.addClass('w3-bar-item w3-button tablink')
.attr('onClick', 'openMenu(event,\'Setup_Project\')')
)
.append($('<button>')
.attr('data-i18n', button_wifi_text)
.attr('data-i18n-title', button_wifi_title)
.addClass('w3-bar-item w3-button tablink')
.attr('onClick', 'openMenu(event,\'Setup_WiFi\')')
)
)
scriptTag.parentNode.appendChild(div);
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.text('Setup WiFi')
.prop('id', 'Setup_WiFi')
.attr('style', 'display:none')
scriptTag.parentNode.appendChild(div);
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.text('Setup Push')
.prop('id', 'Setup_Push')
.attr('style', 'display:none')
scriptTag.parentNode.appendChild(div);
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.text('Setup Project')
.prop('id', 'Setup_Project')
.attr('style', 'display:none')
scriptTag.parentNode.appendChild(div);
