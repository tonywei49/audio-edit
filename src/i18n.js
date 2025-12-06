(function (w, d) {
    'use strict';

    const translations = {
        'en': {
            'menu_file': 'File',
            'menu_edit': 'Edit',
            'menu_effects': 'Effects',
            'menu_view': 'View',
            'menu_help': 'Help',

            // File Sub-menu
            'menu_new_recording': 'New Recording',
            'menu_open_local_file': 'Open Local File',
            'menu_export_mp3': 'Export to mp3',
            'menu_export_wav': 'Export to wav',
            'menu_download': 'Download',
            'menu_load_url': 'Load From URL',
            'menu_save_draft': 'Save Draft Locally',
            'menu_open_drafts': 'Open Local Drafts',

            // Edit Sub-menu
            'menu_cut': 'Cut',
            'menu_copy': 'Copy',
            'menu_paste': 'Paste',
            'menu_select_all': 'Select All',
            'menu_undo': 'Undo',
            'menu_redo': 'Redo',
            'menu_trim': 'Trim',
            'menu_clear': 'Clear',
            'menu_insert_silence': 'Insert Silence',
            'menu_play': 'Play',
            'menu_stop': 'Stop',
            'menu_deselect': 'Deselect All',
            'menu_channel_info': 'Channel Info/Flip',

            // Effects Sub-menu
            'menu_fade_in': 'Fade In',
            'menu_fade_out': 'Fade Out',
            'menu_compressor': 'Compressor',
            'menu_normalize': 'Normalize',
            'menu_reverse': 'Reverse',
            'menu_delay': 'Delay',
            'menu_distortion': 'Distortion',
            'menu_reverb': 'Reverb',
            'menu_speed': 'Speed Up / Slow Down',
            'menu_invert': 'Invert',
            'menu_remove_silence': 'Remove Silence',
            'menu_hard_limiter': 'Hard Limiter',
            'menu_graphic_eq': 'Graphic EQ',
            'menu_para_eq': 'Parametric EQ',
            'menu_gain': 'Gain',
            'menu_noise_reduction': 'Noise Reduction (Voice)',
            'menu_playback_rate': 'Playback Rate',

            // View Sub-menu
            'menu_follow_cursor': 'Follow Cursor',
            'menu_peak_separators': 'Peak Separators',
            'menu_timeline': 'Timeline',
            'menu_freq_analyser': 'Frequency Analyser',
            'menu_spec_analyser': 'Spectrum Analyser',
            'menu_tempo_tools': 'Tempo Tools',
            'menu_id3_tags': 'ID3 Tags',
            'menu_center_cursor': 'Center to Cursor',
            'menu_reset_zoom': 'Reset Zoom',

            // Help Sub-menu
            'menu_offline_version': 'Store Offline Version',
            'menu_about': 'About',
            'menu_source_code': 'SourceCode on Github',

            // UI Prompts
            'msg_drag_drop': 'Drag & Drop Audio File Here',
            'msg_loading': 'Loading...',
            'msg_processing': 'Processing...',
            'msg_ready': 'Ready',

            // FX Dialogs
            'fx_title_distortion': 'Apply Distortion to selected range',
            'fx_title_compressor': 'Apply Compression to selected range',
            'fx_title_speed': 'Change Speed',
            'fx_apply': 'Apply',
            'fx_apply_rate': 'Apply Rate',
            'fx_gain_label': 'Gain',
            'fx_threshold': 'Threshold',
            'fx_knee': 'Knee',
            'fx_ratio': 'Ratio',
            'fx_attack': 'Attack',
            'fx_release': 'Release',
            'fx_playback_rate': 'Playback Rate',
            // FX dialogs
            'fx_insert_silence': 'Insert Silence',
            'fx_normalize': 'Normalize',
            'fx_normalize_l_r_equally': 'Normalize L/R Equally',
            'fx_normalize_to': 'Normalize to',
            'fx_on': 'ON',
            'fx_off': 'OFF',
            'fx_reverb_title': 'Apply Reverb to selected range',
            'fx_delay_title': 'Apply Delay to selected range',
            'fx_eq_title': 'Graphic EQ',
            'fx_limiter_title': 'Hard Limiting',
            'fx_silence_title': 'Insert Silence',

            // Selection
            'sel_selection': 'Selection:',
            'sel_start': 'Start:',
            'sel_end': 'End:',
            'sel_duration': 'Duration:',
            'sel_clear': 'Clear Selection (Q key)'
        },
        'zh-tw': {
            'menu_file': '檔案',
            'menu_edit': '編輯',
            'menu_effects': '效果',
            'menu_view': '檢視',
            'menu_help': '幫助',

            'menu_new_recording': '新錄音',
            'menu_open_local_file': '開啟本機檔案',
            'menu_export_mp3': '匯出為 mp3',
            'menu_export_wav': '匯出為 wav',
            'menu_download': '下載',
            'menu_load_url': '從 URL 載入',
            'menu_save_draft': '儲存草稿',
            'menu_open_drafts': '開啟草稿',

            'menu_cut': '剪下',
            'menu_copy': '複製',
            'menu_paste': '貼上',
            'menu_select_all': '全選',
            'menu_undo': '復原',
            'menu_redo': '重做',
            'menu_trim': '裁切',
            'menu_clear': '清除',
            'menu_insert_silence': '插入靜音',
            'menu_play': '播放',
            'menu_stop': '停止',
            'menu_deselect': '取消全選',
            'menu_channel_info': '聲道資訊/翻轉',

            'menu_fade_in': '淡入',
            'menu_fade_out': '淡出',
            'menu_compressor': '壓縮器',
            'menu_normalize': '標準化',
            'menu_reverse': '反轉',
            'menu_delay': '延遲',
            'menu_distortion': '失真',
            'menu_reverb': '殘響',
            'menu_speed': '變速/變調',
            'menu_invert': '反相',
            'menu_remove_silence': '移除靜音',
            'menu_hard_limiter': '硬限制器',
            'menu_graphic_eq': '圖形等化器',
            'menu_para_eq': '參數等化器',
            'menu_gain': '增益',
            'menu_noise_reduction': '降噪 (人聲)',
            'menu_playback_rate': '播放速率',

            'menu_follow_cursor': '跟隨游標',
            'menu_peak_separators': '峰值分隔線',
            'menu_timeline': '時間軸',
            'menu_freq_analyser': '頻率分析器',
            'menu_spec_analyser': '頻譜分析器',
            'menu_tempo_tools': '節奏工具',
            'menu_id3_tags': 'ID3 標籤',
            'menu_center_cursor': '游標置中',
            'menu_reset_zoom': '重置縮放',

            'menu_offline_version': '儲存離線版本',
            'menu_about': '關於',
            'menu_source_code': 'Github 源代碼',

            'msg_drag_drop': '拖放音訊檔案至此',
            'msg_loading': '載入中...',
            'msg_processing': '處理中...',
            'msg_ready': '就緒',

            'fx_title_distortion': '將失真應用於選定範圍',
            'fx_title_compressor': '將壓縮應用於選定範圍',
            'fx_title_speed': '改變速度',
            'fx_apply': '應用',
            'fx_apply_rate': '應用速率',
            'fx_gain_label': '增益',
            'fx_threshold': '閾值',
            'fx_knee': '拐點',
            'fx_ratio': '比率',
            'fx_attack': '啟動時間',
            'fx_release': '釋放時間',
            'fx_playback_rate': '播放速率',
            // FX dialogs (繁體中文)
            'fx_insert_silence': '插入靜音',
            'fx_normalize': '正規化',
            'fx_normalize_l_r_equally': '同時正規化左右聲道',
            'fx_normalize_to': '正規化至',
            'fx_on': '開',
            'fx_off': '關',
            'fx_reverb_title': '對選取範圍套用混響',
            'fx_delay_title': '對選取範圍套用延遲',
            'fx_eq_title': '圖形均衡器',
            'fx_limiter_title': '硬限制器',
            'fx_silence_title': '插入靜音',

            'sel_selection': '選取範圍:',
            'sel_start': '開始:',
            'sel_end': '結束:',
            'sel_duration': '時長:',
            'sel_clear': '清除選取 (Q 鍵)'
        },
        'zh-cn': {
            'menu_file': '文件',
            'menu_edit': '编辑',
            'menu_effects': '效果',
            'menu_view': '视图',
            'menu_help': '帮助',

            'menu_new_recording': '新录音',
            'menu_open_local_file': '打开本地文件',
            'menu_export_mp3': '导出为 mp3',
            'menu_export_wav': '导出为 wav',
            'menu_download': '下载',
            'menu_load_url': '从 URL 加载',
            'menu_save_draft': '保存草稿',
            'menu_open_drafts': '打开草稿',

            'menu_cut': '剪切',
            'menu_copy': '复制',
            'menu_paste': '粘贴',
            'menu_select_all': '全选',
            'menu_undo': '撤销',
            'menu_redo': '重做',
            'menu_trim': '裁剪',
            'menu_clear': '清除',
            'menu_insert_silence': '插入静音',
            'menu_play': '播放',
            'menu_stop': '停止',
            'menu_deselect': '取消全选',
            'menu_channel_info': '声道信息/翻转',

            'menu_fade_in': '淡入',
            'menu_fade_out': '淡出',
            'menu_compressor': '压缩器',
            'menu_normalize': '标准化',
            'menu_reverse': '反转',
            'menu_delay': '延迟',
            'menu_distortion': '失真',
            'menu_reverb': '混响',
            'menu_speed': '变速/变调',
            'menu_invert': '反相',
            'menu_remove_silence': '移除静音',
            'menu_hard_limiter': '硬限制器',
            'menu_graphic_eq': '图形均衡器',
            'menu_para_eq': '参数均衡器',
            'menu_gain': '增益',
            'menu_noise_reduction': '降噪 (人声)',
            'menu_playback_rate': '播放速率',

            'menu_follow_cursor': '跟随光标',
            'menu_peak_separators': '峰值分隔线',
            'menu_timeline': '时间轴',
            'menu_freq_analyser': '频率分析器',
            'menu_spec_analyser': '频谱分析器',
            'menu_tempo_tools': '节奏工具',
            'menu_id3_tags': 'ID3 标签',
            'menu_center_cursor': '光标居中',
            'menu_reset_zoom': '重置缩放',

            'menu_offline_version': '保存离线版本',
            'menu_about': '关于',
            'menu_source_code': 'Github 源代码',

            'msg_drag_drop': '拖放音频文件至此',
            'msg_loading': '加载中...',
            'msg_processing': '处理中...',
            'msg_ready': '就绪'
        },
        'ja': {
            'menu_file': 'ファイル',
            'menu_edit': '編集',
            'menu_effects': '効果',
            'menu_view': '表示',
            'menu_help': 'ヘルプ',

            'menu_new_recording': '新規録音',
            'menu_open_local_file': 'ファイルを開く',
            'menu_export_mp3': 'mp3で書き出し',
            'menu_export_wav': 'wavで書き出し',
            'menu_download': 'ダウンロード',
            'menu_load_url': 'URLから読み込み',
            'menu_save_draft': '下書きを保存',
            'menu_open_drafts': '下書きを開く',

            'menu_cut': '切り取り',
            'menu_copy': 'コピー',
            'menu_paste': '貼り付け',
            'menu_select_all': 'すべて選択',
            'menu_undo': '元に戻す',
            'menu_redo': 'やり直し',
            'menu_trim': 'トリミング',
            'menu_clear': '消去',
            'menu_insert_silence': '無音を挿入',
            'menu_play': '再生',
            'menu_stop': '停止',
            'menu_deselect': '選択解除',
            'menu_channel_info': 'チャンネル情報/反転',

            'menu_fade_in': 'フェードイン',
            'menu_fade_out': 'フェードアウト',
            'menu_compressor': 'コンプレッサー',
            'menu_normalize': 'ノーマライズ',
            'menu_reverse': '反転',
            'menu_delay': 'ディレイ',
            'menu_distortion': 'ディストーション',
            'menu_reverb': 'リバーブ',
            'menu_speed': '速度/ピッチ変更',
            'menu_invert': '位相反転',
            'menu_remove_silence': '無音削除',
            'menu_hard_limiter': 'ハードリミッター',
            'menu_graphic_eq': 'グラフィックEQ',
            'menu_para_eq': 'パラメトリックEQ',
            'menu_gain': 'ゲイン',
            'menu_noise_reduction': 'ノイズ除去 (音声)',
            'menu_playback_rate': '再生速度',

            'menu_follow_cursor': 'カーソル追従',
            'menu_peak_separators': 'ピーク区切り',
            'menu_timeline': 'タイムライン',
            'menu_freq_analyser': '周波数アナライザ',
            'menu_spec_analyser': 'スペクトルアナライザ',
            'menu_tempo_tools': 'テンポツール',
            'menu_id3_tags': 'ID3タグ',
            'menu_center_cursor': 'カーソルを中央に',
            'menu_reset_zoom': 'ズームリセット',

            'menu_offline_version': 'オフライン版を保存',
            'menu_about': 'アプリについて',
            'menu_source_code': 'Githubのソースコード',

            'msg_drag_drop': 'ここに音声ファイルをドロップ',
            'msg_loading': '読み込み中...',
            'msg_processing': '処理中...',
            'msg_ready': '準備完了'
        },
        'es': {
            'menu_file': 'Archivo',
            'menu_edit': 'Editar',
            'menu_effects': 'Efectos',
            'menu_view': 'Ver',
            'menu_help': 'Ayuda',

            'menu_new_recording': 'Nueva grabación',
            'menu_open_local_file': 'Abrir archivo local',
            'menu_export_mp3': 'Exportar a mp3',
            'menu_export_wav': 'Exportar a wav',
            'menu_download': 'Descargar',
            'menu_load_url': 'Cargar desde URL',
            'menu_save_draft': 'Guardar borrador',
            'menu_open_drafts': 'Abrir borradores',

            'menu_cut': 'Cortar',
            'menu_copy': 'Copiar',
            'menu_paste': 'Pegar',
            'menu_select_all': 'Seleccionar todo',
            'menu_undo': 'Deshacer',
            'menu_redo': 'Rehacer',
            'menu_trim': 'Recortar',
            'menu_clear': 'Borrar',
            'menu_insert_silence': 'Insertar silencio',
            'menu_play': 'Reproducir',
            'menu_stop': 'Detener',
            'menu_deselect': 'Deselect All',
            'menu_channel_info': 'Información de canal/Invertir',

            'menu_fade_in': 'Aparecer',
            'menu_fade_out': 'Desvanecer',
            'menu_compressor': 'Compresor',
            'menu_normalize': 'Normalizar',
            'menu_reverse': 'Invertir',
            'menu_delay': 'Retraso',
            'menu_distortion': 'Distorsión',
            'menu_reverb': 'Reverberación',
            'menu_speed': 'Velocidad / Tono',
            'menu_invert': 'Invertir fase',
            'menu_remove_silence': 'Eliminar silencio',
            'menu_hard_limiter': 'Limitador fuerte',
            'menu_graphic_eq': 'Ecualizador gráfico',
            'menu_para_eq': 'Ecualizador paramétrico',
            'menu_gain': 'Ganancia',
            'menu_noise_reduction': 'Reducción de ruido (Voz)',
            'menu_playback_rate': 'Velocidad de reproducción',

            'menu_follow_cursor': 'Seguir cursor',
            'menu_peak_separators': 'Separadores de pico',
            'menu_timeline': 'Línea de tiempo',
            'menu_freq_analyser': 'Analizador de frecuencia',
            'menu_spec_analyser': 'Analizador de espectro',
            'menu_tempo_tools': 'Herramientas de tempo',
            'menu_id3_tags': 'Etiquetas ID3',
            'menu_center_cursor': 'Centrar en cursor',
            'menu_reset_zoom': 'Restablecer zoom',

            'menu_offline_version': 'Guardar versión sin conexión',
            'menu_about': 'Acerca de',
            'menu_source_code': 'Código fuente en Github',

            'msg_drag_drop': 'Arrastra y suelta el archivo aquí',
            'msg_loading': 'Cargando...',
            'msg_processing': 'Procesando...',
            'msg_ready': 'Listo'
        },
        'fr': {
            'menu_file': 'Fichier',
            'menu_edit': 'Édition',
            'menu_effects': 'Effets',
            'menu_view': 'Affichage',
            'menu_help': 'Aide',

            'menu_new_recording': 'Nouvel enregistrement',
            'menu_open_local_file': 'Ouvrir un fichier local',
            'menu_export_mp3': 'Exporter en mp3',
            'menu_export_wav': 'Exporter en wav',
            'menu_download': 'Télécharger',
            'menu_load_url': 'Charger depuis URL',
            'menu_save_draft': 'Sauvegarder brouillon',
            'menu_open_drafts': 'Ouvrir brouillons',

            'menu_cut': 'Couper',
            'menu_copy': 'Copier',
            'menu_paste': 'Coller',
            'menu_select_all': 'Tout sélectionner',
            'menu_undo': 'Annuler',
            'menu_redo': 'Rétablir',
            'menu_trim': 'Rogner',
            'menu_clear': 'Effacer',
            'menu_insert_silence': 'Insérer silence',
            'menu_play': 'Lire',
            'menu_stop': 'Arrêter',
            'menu_deselect': 'Tout désélectionner',
            'menu_channel_info': 'Info canal/Inverser',

            'menu_fade_in': 'Fondu en ouverture',
            'menu_fade_out': 'Fondu en fermeture',
            'menu_compressor': 'Compresseur',
            'menu_normalize': 'Normaliser',
            'menu_reverse': 'Inverser',
            'menu_delay': 'Délai',
            'menu_distortion': 'Distorsion',
            'menu_reverb': 'Réverbération',
            'menu_speed': 'Vitesse / Hauteur',
            'menu_invert': 'Inverser phase',
            'menu_remove_silence': 'Supprimer silence',
            'menu_hard_limiter': 'Limiteur fort',
            'menu_graphic_eq': 'Égaliseur graphique',
            'menu_para_eq': 'Égaliseur paramétrique',
            'menu_gain': 'Gain',
            'menu_noise_reduction': 'Réduction de bruit (Voix)',
            'menu_playback_rate': 'Vitesse de lecture',

            'menu_follow_cursor': 'Suivre le curseur',
            'menu_peak_separators': 'Séparateurs de crête',
            'menu_timeline': 'Chronologie',
            'menu_freq_analyser': 'Analyseur de fréquence',
            'menu_spec_analyser': 'Analyseur de spectre',
            'menu_tempo_tools': 'Outils de tempo',
            'menu_id3_tags': 'Tags ID3',
            'menu_center_cursor': 'Centrer sur le curseur',
            'menu_reset_zoom': 'Réinitialiser le zoom',

            'menu_offline_version': 'Stocker version hors ligne',
            'menu_about': 'À propos',
            'menu_source_code': 'Code source sur Github',

            'msg_drag_drop': 'Glisser-déposer le fichier audio ici',
            'msg_loading': 'Chargement...',
            'msg_processing': 'Traitement...',
            'msg_ready': 'Prêt'
        }
    };

    // Initialize from localStorage or default to 'en'
    let currentLang = localStorage.getItem('audiomass_lang') || 'en';

    function _t(key, defaultText) {
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        return defaultText || key;
    }

    function changeLanguage(lang) {
        if (!translations[lang]) return;

        // Save to localStorage
        localStorage.setItem('audiomass_lang', lang);

        // Reload the page to apply changes everywhere
        w.location.reload();
    }

    // Expose to global scope
    w.PKI18N = {
        changeLanguage: changeLanguage,
        _t: _t,
        currentLang: currentLang
    };

    // Initialize
    d.addEventListener('DOMContentLoaded', function () {
        const langSelect = d.getElementById('lang-select');
        if (langSelect) {
            // Set initial value
            langSelect.value = currentLang;

            langSelect.addEventListener('change', function (e) {
                changeLanguage(e.target.value);
            });
        }

        // Apply translations to static elements with data-i18n
        const elements = d.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = _t(key);
            if (text) {
                const span = el.querySelector('span');
                if (span) {
                    span.innerText = text;
                } else {
                    el.innerText = text;
                }
            }
        });
    });

})(window, document);
