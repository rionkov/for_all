scriptTag = document.scripts[document.scripts.length - 1];
appendTo = '<head>'


$.getScript('https://cdn.jsdelivr.net/gh/rionkov/for_all/power_meter_single_phase/js/project_title.min.js')

$('<link/>', {
   rel: 'stylesheet',
   //type: 'text/css',
   href: 'https://cdnjs.cloudflare.com/ajax/libs/w3-css/4.1.0/w3.min.css'
}).appendTo('head')
$('<link/>', {
   rel: 'stylesheet',
   //type: 'text/css',
   //href: 'https://www.w3schools.com/lib/w3-theme-teal.css'
   href: 'https://cdn.jsdelivr.net/gh/rionkov/for_all/power_meter_single_phase/css/w3-theme-teal.min.css'
}).appendTo('head')
$('<link/>', {
   rel: 'stylesheet',
   //type: 'text/css',
   href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
}).appendTo('head')


$('<link/>', {
   rel: 'icon',
   //type: 'text/css',
   href: 'https://cdn.jsdelivr.net/gh/rionkov/for_all/power_meter_single_phase/favicon.ico'
}).appendTo('head')

$('<link/>', {
   rel: 'stylesheet',
   //type: 'text/css',
   href: 'https://cdn.jsdelivr.net/gh/rionkov/for_all/power_meter_single_phase/css/project_css.min.css'
}).appendTo('head')


