document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'bg';
    const languageSwitcher = document.getElementById('languageSwitcher');
    languageSwitcher.value = savedLanguage;
i18next
    .use(i18nextXHRBackend)
    .init({
        lng: savedLanguage,
        backend: {
loadPath: 'https://cdn.jsdelivr.net/gh/rionkov/for_all/power_meter_single_phase/i18n/{{lng}}_{{ns}}.json'
        },
        fallbackLng: 'en',
        //debug: true,
        ns: ['default', 'setup', 'setup_wifi', 'setup_push'], // Добавяме трите namespace-а
        defaultNS: 'default'
    }, function(err, t) {
        i18next.loadNamespaces(['setup', 'setup_wifi', 'setup_push'], function() {
            updateContent()
        });
});
    document.getElementById('languageSwitcher').addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('selectedLanguage', selectedLanguage);
        i18next.changeLanguage(selectedLanguage, function(err, t) {
            if (err) return console.log('something went wrong loading', err);
            updateContent();
        });
    });
});