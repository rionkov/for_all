scriptTag = document.scripts[document.scripts.length - 1];
device_name = 'device_name'
/*
$('<link/>', {
   rel: 'stylesheet',
   type: 'text/css',
   href: 'https://www.w3schools.com/lib/w3-theme-teal.css'
}).appendTo('head'),
$('<link/>', {
   rel: 'stylesheet',
   type: 'text/css',
   href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
}).appendTo('head'),
*/
div = document.createElement('div');
$(div)
.append('<span data-i18n="'+device_name+'">sample text</span>')
.addClass('w3-container w3-padding-small w3-theme-d3')
.append($('<div>')
.addClass('w3-right')
 .append($('<i>')
 .addClass('fa fa-volume-up')
 .text(' On'))
 .append($('<i>')
 .addClass('fa fa-wifi')
 .text(' 80 %'))
 .append($('<i>')
 .addClass('fa fa-battery-4')
 .text(' 4.5 V.'))
 .append($('<i>')
 .addClass('fa fa-clock-o')
 .text(' 13:48'))
)
scriptTag.parentNode.appendChild(div);
