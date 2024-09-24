scriptTag = document.scripts[document.scripts.length - 1];


//Превода е в следните файлове:
//bg_setup.json	en_setup.json
//добавя се "setup:" като префикс
translate_prefix = 'setup:'


//button_Push='button_Push'
button_Push = translate_prefix + 'button_Push'
button_Push_text=button_Push+'_text'
button_Push_title=button_Push+'_title'

//button_Project='Project'
button_Project = translate_prefix + 'button_Project'
button_Project_text=button_Project+'_text'
button_Project_title=button_Project+'_title'

//button_WiFi='WiFi'
button_wifi = translate_prefix + 'button_wifi'
button_wifi_text=button_wifi+'_text'
button_wifi_title=button_wifi+'_title'


//===		Setup MENU Buttons
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.prop('id', 'Setup')
.attr('style', 'display:none')

.append($('<div>')
.addClass('w3-bar w3-black')

// button setup PUSH
.append($('<button>')
.attr('data-i18n', button_Push_text)
.attr('data-i18n-title', button_Push_title)

//.text(button_Push_text)
.addClass('w3-bar-item w3-button tablink w3-ripple')
.attr('onClick', 'openMenu(event,\'Setup_Push\')')
)
// button setup DEVICE
.append($('<button>')
.attr('data-i18n', button_Project_text)
.attr('data-i18n-title', button_Project_title)
//.text(button_Project)
.addClass('w3-bar-item w3-button tablink')
.attr('onClick', 'openMenu(event,\'Setup_Project\')')
)
// button setup WiFi
.append($('<button>')
.attr('data-i18n', button_wifi_text)
.attr('data-i18n-title', button_wifi_title)
//.text(button_WiFi)
.addClass('w3-bar-item w3-button tablink')
.attr('onClick', 'openMenu(event,\'Setup_WiFi\')')
)


)

scriptTag.parentNode.appendChild(div);
//===		Setup MENU Buttons	END



//TAB Setup WiFi
div = document.createElement("div");
$(div)
//.append($('<div>')
//.addClass('w3-container w3-panel w3-responsive w3-border w3-round-small w3-pale-green menu')
//.addClass('w3-pale-green')
.addClass('w3-container w3-border menu')
.text('Setup WiFi')
.prop('id', 'Setup_WiFi')
.attr('style', 'display:none')
scriptTag.parentNode.appendChild(div);
//TAB Setup Push
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.text('Setup Push')
.prop('id', 'Setup_Push')
.attr('style', 'display:none')
scriptTag.parentNode.appendChild(div);
//TAB Setup Project
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.text('Setup Project')
.prop('id', 'Setup_Project')
.attr('style', 'display:none')
scriptTag.parentNode.appendChild(div);
