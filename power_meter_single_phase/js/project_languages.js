scriptTag = document.scripts[document.scripts.length - 1];
bul='Български'
eng='English'
select = document.createElement("select");
$(select)
.prop('id', 'languageSwitcher')
.append($('<option>', { value: 'bg', text: bul }))
.append($('<option>', { value: 'en', text: eng }));
scriptTag.parentNode.appendChild(select);
$('select').on('change', function() {
instr('page_load,page_load');
});