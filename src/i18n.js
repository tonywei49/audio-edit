(function (w, d) {
    'use strict';

    const translations = {
        'en': {
            'menu_file': 'File',
            'menu_edit': 'Edit',
            'menu_effects': 'Effects',
            'menu_view': 'View',
            'menu_help': 'Help'
        },
        'zh-tw': {
            'menu_file': '檔案',
            'menu_edit': '編輯',
            'menu_effects': '效果',
            'menu_view': '檢視',
            'menu_help': '幫助'
        },
        'zh-cn': {
            'menu_file': '文件',
            'menu_edit': '编辑',
            'menu_effects': '效果',
            'menu_view': '视图',
            'menu_help': '帮助'
        },
        'ja': {
            'menu_file': 'ファイル',
            'menu_edit': '編集',
            'menu_effects': '効果',
            'menu_view': '表示',
            'menu_help': 'ヘルプ'
        },
        'es': {
            'menu_file': 'Archivo',
            'menu_edit': 'Editar',
            'menu_effects': 'Efectos',
            'menu_view': 'Ver',
            'menu_help': 'Ayuda'
        },
        'fr': {
            'menu_file': 'Fichier',
            'menu_edit': 'Édition',
            'menu_effects': 'Effets',
            'menu_view': 'Affichage',
            'menu_help': 'Aide'
        }
    };

    let currentLang = 'en';

    function changeLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;

        const elements = d.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // If the element has a span inside (like the buttons), update the span
                const span = el.querySelector('span');
                if (span) {
                    span.innerText = translations[lang][key];
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });

        // Update select value if it exists
        const langSelect = d.getElementById('lang-select');
        if (langSelect) {
            langSelect.value = lang;
        }
    }

    // Expose to global scope
    w.PKI18N = {
        changeLanguage: changeLanguage
    };

    // Initialize
    d.addEventListener('DOMContentLoaded', function () {
        const langSelect = d.getElementById('lang-select');
        if (langSelect) {
            langSelect.addEventListener('change', function (e) {
                changeLanguage(e.target.value);
            });
        }
    });

})(window, document);
