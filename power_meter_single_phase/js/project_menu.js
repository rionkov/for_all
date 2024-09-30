scriptTag = document.scripts[document.scripts.length - 1];

menu_button_status = 'menu_button_status'
menu_button_status_title = 'menu_button_status_title'

menu_button_dashboard = 'menu_button_dashboard'
menu_button_dashboard_title = 'menu_button_dashboard_title'

menu_button_setup = 'menu_button_setup'

//===
div = document.createElement("div");
$(div)
.addClass('w3-bar w3-black')

//$(button_state)
.append($('<button>')
.addClass('w3-bar-item w3-button tablink w3-red')
.attr('onClick', 'openMenu(event,\'State\')')
.attr('data-i18n', menu_button_status)
.attr('data-i18n-title', menu_button_status_title)
.prop('title', menu_button_status_title)
)

.append($('<button>')
.addClass('w3-bar-item w3-button tablink')
.attr('onClick', 'openMenu(event,\'Dashboard\')')
.attr('data-i18n', menu_button_dashboard)
)

.append($('<button>')
.addClass('w3-bar-item w3-button tablink')
.attr('onClick', 'openMenu(event,\'Setup\')')
.attr('data-i18n', menu_button_setup)
)

scriptTag.parentNode.appendChild(div);

//TAB Current Data
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.text('Статус')
.prop('id', 'State')
scriptTag.parentNode.appendChild(div);

//TAB Dashboard
div = document.createElement("div");
$(div)
.addClass('w3-container w3-border menu')
.text('Табло')
.prop('id', 'Dashboard')
.attr('style', 'display:none')
scriptTag.parentNode.appendChild(div);

function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " w3-red";

var x = document.getElementById(wifi_pass_id);
x.type = "password";
}
