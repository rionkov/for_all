document.addEventListener('DOMContentLoaded', function() {
// Възстановяване на последно избран език
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'bg';
    const languageSwitcher = document.getElementById('languageSwitcher');
    languageSwitcher.value = savedLanguage;
// Инициализация на i18next с последно избрания език
i18next
    .use(i18nextXHRBackend)
    .init({
        lng: savedLanguage,
        backend: {
// Използваме {ns} за namespace, за да зареждаме различни файлове
//loadPath: '{{lng}}_{{ns}}.json',
loadPath: 'https://cdn.jsdelivr.net/gh/rionkov/for_all/power_meter_single_phase/i18n/{{lng}}_{{ns}}.json',
//loadPath: 'https://iot.atc-software.com/devices/Firmwares/power_meter_single_phase/esp8266/{{lng}}_{{ns}}.json',
            crossDomain: true, // Disable 'X-Requested-With' for CORS policy
			async: true,
			//crossorigin: 'anonymous',// not work!!!
        },
        fallbackLng: 'en',
        //debug: true,
        ns: ['default', 'setup', 'setup_wifi', 'setup_push'], // Добавяме трите namespace-а
        defaultNS: 'default' // Основният namespace
    }, function(err, t) {
        // Зареждаме допълнителните namespace-ове
        i18next.loadNamespaces(['setup', 'setup_wifi', 'setup_push'], function() {
            updateContent()
        });
});
// Запазване на избора на език и превеждане на страницата
    document.getElementById('languageSwitcher').addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        i18next.changeLanguage(selectedLanguage, function(err, t) {
            if (err) return console.log('something went wrong loading', err);
            updateContent();
        });
    });
});
    function updateContent() {
		document.querySelectorAll('[data-i18n], [data-i18n-title], [data-i18n-placeholder]').forEach(function(element) {
        var key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
var titleKey = element.getAttribute('data-i18n-title');
        if (titleKey) {
            element.setAttribute('title', i18next.t(titleKey));
        }
var placeholderKey = element.getAttribute('data-i18n-placeholder');
        if (placeholderKey) {
            element.setAttribute('placeholder', i18next.t(placeholderKey));
        }
    });
}