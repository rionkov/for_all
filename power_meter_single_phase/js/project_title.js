//<title data-i18n="device_name"></title>
scriptTag = document.scripts[document.scripts.length - 1];
device_name = 'device_name'
title = document.createElement("title");
$(title)
.text(device_name)
.attr('data-i18n', device_name)
scriptTag.parentNode.appendChild(title);
