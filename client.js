window.__ModuleLoader__.load({
  id: 'paper-skin',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const NS = 'paper-skin';
    const STORAGE_KEY = 'dsh.paper-skin.v1';
    const STYLE_ID = 'paper-skin-styles';
    const PANEL_ID = 'paper-skin-panel';

    const JOURNALS = Object.freeze([
      Object.freeze({
        id: 'nature',
        name: 'Nature',
        wordmark: 'nature',
        code: 'NAT',
        volume: 'VOL. 001',
        line: 'SCIENCE & SOCIETY',
        descriptor: 'JOURNAL',
        coverImage: '/paper-skin-assets/nature-cover.webp?v=2',
        markImage: '/paper-skin-assets/nature-cover.webp?v=2',
      }),
      Object.freeze({
        id: 'science',
        name: 'Science',
        wordmark: 'Science',
        code: 'SCI',
        volume: 'VOL. 001',
        line: 'RESEARCH & COMMENT',
        descriptor: 'JOURNAL',
        coverImage: '/paper-skin-assets/science-cover.webp?v=2',
        markImage: '/paper-skin-assets/science-cover.webp?v=2',
      }),
      Object.freeze({
        id: 'ieee',
        name: 'IEEE',
        wordmark: 'IEEE',
        code: 'IEEE',
        volume: 'VOL. 001',
        line: 'ENGINEERING & COMPUTING',
        descriptor: 'PROCEEDINGS',
        coverImage: '/paper-skin-assets/ieee-cover.webp?v=2',
        markImage: '/paper-skin-assets/ieee-cover.webp?v=2',
      }),
      Object.freeze({
        id: 'elsevier',
        name: 'Elsevier',
        wordmark: 'ELSEVIER',
        code: 'ELS',
        volume: 'VOL. 001',
        line: 'SCIENTIFIC PUBLISHING',
        descriptor: 'JOURNAL',
        coverImage: '/paper-skin-assets/elsevier-cover.webp?v=2',
        markImage: '/paper-skin-assets/elsevier-tree.png?v=2',
      }),
    ]);

    const STAGES = Object.freeze([
      Object.freeze({
        id: 'submitted',
        zh: '初期',
        en: 'With Editor',
        word: 'WITH EDITOR',
        seal: ['WITH', 'EDITOR'],
        size: 76,
        copy: 'Dear Author, the manuscript has been received and is undergoing initial editorial assessment.',
        accentLight: '#6b655a',
        accentDark: '#b7ad9c',
      }),
      Object.freeze({
        id: 'review',
        zh: '中期',
        en: 'Under Review',
        word: 'UNDER REVIEW',
        seal: ['UNDER', 'REVIEW'],
        size: 64,
        copy: 'Dear Author, the manuscript has entered peer review. The editors will write to you once the reports have been received.',
        accentLight: '#3e5f70',
        accentDark: '#9ec4d4',
      }),
      Object.freeze({
        id: 'major',
        zh: '大修',
        en: 'Major Revision',
        word: 'MAJOR REVISION',
        seal: ['MAJOR', 'REVISION'],
        size: 55,
        copy: 'Dear Author, the editors have completed their assessment and request a major revision. The revised manuscript will be reconsidered for publication.',
        accentLight: '#8d442d',
        accentDark: '#d9977d',
      }),
      Object.freeze({
        id: 'minor',
        zh: '小修',
        en: 'Minor Revision',
        word: 'MINOR REVISION',
        seal: ['MINOR', 'REVISION'],
        size: 55,
        copy: 'Dear Author, the editors request a minor revision. Acceptance is anticipated following satisfactory revision.',
        accentLight: '#9a7429',
        accentDark: '#e0bd7a',
      }),
      Object.freeze({
        id: 'accepted',
        zh: '录用',
        en: 'Accepted',
        word: 'ACCEPT',
        seal: ['ACCEPTED', '2026'],
        size: 112,
        copy: 'Dear Author, on behalf of the Editorial Board, we are pleased to inform you that your manuscript has been accepted for publication in {journal}. The manuscript will now proceed to production.',
        accentLight: '#a52a2a',
        accentDark: '#df8579',
      }),
      Object.freeze({
        id: 'published',
        zh: '见刊',
        en: 'Published',
        word: 'PUBLISHED',
        seal: ['PUBLISHED', '2026'],
        size: 86,
        copy: 'Dear Author, the article has been published in its final form and is now available online. We thank you for your contribution to {journal}.',
        accentLight: '#2c2a25',
        accentDark: '#d9d1c1',
      }),
    ]);

    const LETTER_COLORS = Object.freeze([
      '#a52a2a',
      '#2e5b46',
      '#245b8e',
      '#9a7429',
      '#17150f',
    ]);

    const DEFAULT_STATE = Object.freeze({
      journal: 'nature',
      stage: 'accepted',
      watermark: true,
      letterOpacity: 9,
      letterColor: 'auto',
      grain: true,
    });

    const COPY = Object.freeze({
      en: {
        dock: 'Paper Skin settings',
        panelLabel: 'Paper Skin settings',
        kicker: 'PAPER SKIN',
        issue: 'ISSUE 01 · 2026',
        close: 'Close',
        eyebrow: "TODAY'S SUBMISSION",
        question: 'Which paper are we publishing today?',
        questionAlt: '今天想发哪篇论文？',
        hint: 'Choose a journal and the manuscript stage. The workspace takes its cover; the editorial letter sits behind the conversation.',
        journalLabel: "Today's journal",
        progress: 'Manuscript progress',
        progressHint: 'Each stage speaks in the language of the editorial office.',
        watermark: 'Editorial letter in the background',
        watermarkHint: 'A stage-specific decision letter, set behind the conversation.',
        opacity: 'Letter opacity',
        letterColour: 'Letter colour',
        autoColour: 'Automatic stage colour',
        customColour: 'Custom letter colour',
        grain: 'Paper texture',
        grainHint: 'A visible laid-paper grain across the workspace.',
        reset: 'Reset the desk',
        saved: 'Saved on this device',
        manuscript: 'Manuscript',
        selected: 'Selected',
        desk: 'Journal desk',
        switchJournal: 'Switch journal',
        note: 'A typographic homage. Not affiliated with Nature, Science, IEEE or Elsevier.',
      },
      zh: {
        dock: '论文皮肤设置',
        panelLabel: '论文皮肤设置',
        kicker: '论文皮肤',
        issue: '第 01 期 · 2026',
        close: '关闭',
        eyebrow: '今日投稿',
        question: '今天想发哪篇论文？',
        questionAlt: 'Which paper are we publishing today?',
        hint: '选择期刊与稿件进度。工作台会换上期刊封面，编辑部信则作为对话背景。',
        journalLabel: '今日期刊',
        progress: '论文进度',
        progressHint: '不同阶段使用不同的英文编辑部措辞。',
        watermark: '背景编辑部信',
        watermarkHint: '把当前阶段的专业决定书放在对话后方。',
        opacity: '背景信透明度',
        letterColour: '背景信颜色',
        autoColour: '自动跟随阶段颜色',
        customColour: '自定义背景信颜色',
        grain: '纸张纹理',
        grainHint: '给工作台加一层看得见的纸纹。',
        reset: '恢复默认',
        saved: '已保存在本机',
        manuscript: '稿件',
        selected: '已选择',
        desk: '期刊桌面',
        switchJournal: '切换期刊',
        note: '排版致意，与 Nature、Science、IEEE、Elsevier 无隶属关系。',
      },
    });

    function normalizeState(input) {
      const raw = input && typeof input === 'object' ? input : {};
      const journal = JOURNALS.some((item) => item.id === raw.journal) ? raw.journal : DEFAULT_STATE.journal;
      const stage = STAGES.some((item) => item.id === raw.stage) ? raw.stage : DEFAULT_STATE.stage;
      const requestedOpacity = Number(raw.letterOpacity);
      const letterOpacity = Number.isFinite(requestedOpacity)
        ? Math.max(5, Math.min(80, Math.round(requestedOpacity)))
        : DEFAULT_STATE.letterOpacity;
      const requestedColor = typeof raw.letterColor === 'string' ? raw.letterColor.toLowerCase() : 'auto';
      const letterColor = requestedColor === 'auto' || /^#[0-9a-f]{6}$/.test(requestedColor)
        ? requestedColor
        : DEFAULT_STATE.letterColor;
      return {
        journal,
        stage,
        watermark: raw.watermark !== undefined ? raw.watermark !== false : raw.showLetter !== false,
        letterOpacity,
        letterColor,
        grain: raw.grain !== false,
      };
    }

    function readStoredState() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return { ...DEFAULT_STATE };
        return normalizeState(JSON.parse(raw));
      } catch {
        return { ...DEFAULT_STATE };
      }
    }

    let state = readStoredState();
    const listeners = new Set();

    function getState() {
      return state;
    }

    function subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }

    function emit() {
      for (const listener of [...listeners]) {
        try {
          listener();
        } catch (error) {
          console.warn('[Paper Skin] A subscriber failed.', error);
        }
      }
    }

    function setSkin(patch) {
      const next = normalizeState({ ...state, ...patch });
      if (next.journal === state.journal
        && next.stage === state.stage
        && next.watermark === state.watermark
        && next.letterOpacity === state.letterOpacity
        && next.letterColor === state.letterColor
        && next.grain === state.grain) return;
      state = next;
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        // The live value still applies when storage is unavailable.
      }
      emit();
    }

    function reloadStoredState() {
      state = readStoredState();
      emit();
    }

    function useSkinState() {
      if (typeof React.useSyncExternalStore === 'function') {
        return React.useSyncExternalStore(subscribe, getState, getState);
      }
      const [snapshot, setSnapshot] = React.useState(getState);
      React.useEffect(() => subscribe(() => setSnapshot(getState())), []);
      return snapshot;
    }

    function journalOf(id) {
      return JOURNALS.find((item) => item.id === id) || JOURNALS[0];
    }

    function stageOf(id) {
      return STAGES.find((item) => item.id === id) || STAGES[STAGES.length - 1];
    }

    function journalPhrase(journal) {
      return journal.id === 'elsevier' ? 'an Elsevier journal' : journal.name;
    }

    function isHexColor(value) {
      return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);
    }

    function lightenForDark(hex) {
      const value = hex.replace('#', '');
      const channels = [0, 2, 4].map((index) => Number.parseInt(value.slice(index, index + 2), 16));
      const luminance = (0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]) / 255;
      if (luminance >= 0.48) return hex;
      return '#' + channels
        .map((channel) => Math.round(channel + (255 - channel) * 0.45).toString(16).padStart(2, '0'))
        .join('');
    }

    function letterAccent(stage, scheme, letterColor) {
      if (letterColor && letterColor !== 'auto' && isHexColor(letterColor)) {
        return scheme === 'dark' ? lightenForDark(letterColor) : letterColor;
      }
      return scheme === 'dark' ? stage.accentDark : stage.accentLight;
    }

    function text(t, key) {
      if (typeof t === 'function') {
        const value = t(key);
        if (value !== undefined && value !== null && value !== '') return value;
      }
      return COPY.en[key] || key;
    }

    function formatDate(date) {
      return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(date).toUpperCase();
    }

    function todayLabel() {
      return formatDate(new Date());
    }

    function manuscriptNumber() {
      const now = new Date();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      return `DSH-${now.getFullYear()}-${month}${day}`;
    }

    function escapeXml(value) {
      return String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
      }[character]));
    }

    function wrapText(value, limit) {
      const lines = [];
      let line = '';
      for (const word of String(value).split(/\s+/)) {
        if (line === '') {
          line = word;
        } else if ((line + ' ' + word).length <= limit) {
          line += ' ' + word;
        } else {
          lines.push(line);
          line = word;
        }
      }
      if (line !== '') lines.push(line);
      return lines;
    }

    function watermarkSvg(stage, journal, scheme, letterOpacity = 9, letterColor = 'auto') {
      const dark = scheme === 'dark';
      const opacity = Math.max(0.05, Math.min(0.80, Number(letterOpacity) / 100 || 0.09));
      const ink = dark ? '#efe8d9' : '#17150f';
      const dim = dark ? 'rgba(239,232,217,.58)' : 'rgba(23,21,15,.58)';
      const accent = letterAccent(stage, scheme, letterColor);
      const copy = stage.copy.replaceAll('{journal}', journalPhrase(journal));
      const lines = wrapText(copy, 64).slice(0, 4);
      const header = stage.id === 'accepted'
        ? 'LETTER OF ACCEPTANCE'
        : 'EDITORIAL OFFICE · STATUS UPDATE';
      const body = lines.map((line, index) => (
        `<text x="80" y="${390 + index * 28}" font-size="19" fill="${ink}" opacity=".9">${escapeXml(line)}</text>`
      )).join('');
      const manuscript = `${manuscriptNumber()} · ${todayLabel()}`;
      return `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="600" viewBox="0 0 960 600">`
        + `<g opacity="${opacity.toFixed(3)}">`
        + `<g fill="none" stroke="${accent}" stroke-width="1" stroke-opacity=".55">`
        + `<rect x="32" y="32" width="896" height="536"/>`
        + `<rect x="40" y="40" width="880" height="520" stroke-opacity=".55"/>`
        + `</g>`
        + `<g font-family="Georgia, 'Times New Roman', serif" fill="${ink}">`
        + `<text x="80" y="94" font-family="Helvetica, Arial, sans-serif" font-size="12" letter-spacing="4" fill="${dim}">${escapeXml(header)}</text>`
        + `<text x="80" y="122" font-family="Helvetica, Arial, sans-serif" font-size="11" letter-spacing="3" fill="${accent}">${escapeXml(journal.name.toUpperCase())} · ${escapeXml(journal.code)} · ${escapeXml(todayLabel())}</text>`
        + `<text x="76" y="${300 + stage.size * 0.22}" font-size="${stage.size}" font-weight="700" letter-spacing="-2" fill="${accent}">${escapeXml(stage.word)}</text>`
        + `<line x1="80" y1="340" x2="880" y2="340" stroke="${ink}" stroke-opacity=".28"/>`
        + body
        + `<text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="11" letter-spacing="2" fill="${dim}">${escapeXml(`Manuscript ${manuscript}`)}</text>`
        + `<g stroke="${accent}" fill="none">`
        + `<circle cx="840" cy="480" r="44"/>`
        + `<circle cx="840" cy="480" r="38" stroke-opacity=".5"/>`
        + `</g>`
        + `<text x="840" y="475" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="10" letter-spacing="2" fill="${accent}">${escapeXml(stage.seal[0])}</text>`
        + `<text x="840" y="492" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="9" letter-spacing="2" fill="${accent}">${escapeXml(stage.seal[1])}</text>`
        + `</g></g></svg>`;
    }

    function watermarkUrl(stage, journal, scheme, letterOpacity, letterColor) {
      return `url("data:image/svg+xml,${encodeURIComponent(watermarkSvg(stage, journal, scheme, letterOpacity, letterColor))}")`;
    }

    function Emblem({ id, size = 24 }) {
      const common = {
        viewBox: '0 0 32 32',
        width: size,
        height: size,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        className: 'ps-emblem-svg',
      };
      if (id === 'science') {
        return h('svg', common,
          h('circle', { cx: 16, cy: 16, r: 2.1, fill: 'currentColor', stroke: 'none' }),
          h('ellipse', { cx: 16, cy: 16, rx: 12.5, ry: 5.2 }),
          h('ellipse', { cx: 16, cy: 16, rx: 12.5, ry: 5.2, transform: 'rotate(60 16 16)' }),
          h('ellipse', { cx: 16, cy: 16, rx: 12.5, ry: 5.2, transform: 'rotate(120 16 16)' })
        );
      }
      if (id === 'ieee') {
        return h('svg', common,
          h('path', { d: 'M16 3.5 26 16 16 28.5 6 16Z' }),
          h('path', { d: 'M16 8.5 21.6 16 16 23.5 10.4 16Z', strokeOpacity: '.55' }),
          h('path', { d: 'M16 3.5v25', strokeOpacity: '.25' })
        );
      }
      if (id === 'elsevier') {
        return h('svg', common,
          h('path', { d: 'M16 27.5V12.2' }),
          h('path', { d: 'M16 19.2c-4.2 0-7.2-2.7-7.2-6.6 2.3 0 4.3.8 5.6 2.3' }),
          h('path', { d: 'M16 16.2c4.2 0 7.2-2.7 7.2-6.6-2.3 0-4.3.8-5.6 2.3' }),
          h('path', { d: 'M16 12.2c-2.7-1-4.4-3.5-4.4-6.1 2.5 0 4.4 1.1 5.2 2.9' }),
          h('path', { d: 'M16 12.2c2.7-1 4.4-3.5 4.4-6.1-2.5 0-4.4 1.1-5.2 2.9' }),
          h('path', { d: 'M12 27.5h8' })
        );
      }
      return h('svg', common,
        h('circle', { cx: 16, cy: 16, r: 12.5, strokeOpacity: '.33' }),
        h('path', { d: 'M9.5 23.5c1-7 4.6-11.7 12.5-13.5' }),
        h('path', { d: 'M13.5 19.5c2.8.3 5-1 6.2-4.2' }),
        h('path', { d: 'M11.8 16.8c1.9.2 3.4-.5 4.4-2.4' }),
        h('path', { d: 'M15.8 22.2c2.6.1 4.6-1.1 5.8-3.8' })
      );
    }

    function Cover({ journal, small = false }) {
      const className = small ? 'ps-cover ps-cover--small' : 'ps-cover';
      if (journal.coverImage) {
        return h('span', {
          className: `${className} ps-cover--image`,
          'data-journal': journal.id,
          'aria-hidden': 'true',
        },
          h('img', {
            className: 'ps-cover-image',
            src: journal.coverImage,
            alt: '',
            loading: 'lazy',
            draggable: 'false',
          })
        );
      }
      return h('span', {
        className,
        'data-journal': journal.id,
        'aria-hidden': 'true',
      },
        h('span', { className: 'ps-cover-inner' },
          h('span', { className: 'ps-cover-running' },
            h('span', { className: 'ps-cover-volume' }, journal.volume),
            h('span', { className: 'ps-cover-code' }, journal.code)
          ),
          h('span', { className: 'ps-cover-art' },
            h('span', { className: 'ps-cover-emblem' }, h(Emblem, { id: journal.id, size: 22 })),
            h('span', { className: 'ps-cover-title' }, journal.wordmark)
          ),
          h('span', { className: 'ps-cover-foot' },
            h('span', null, journal.line),
            h('span', null, '2026')
          )
        )
      );
    }

    function BrandMark({ size = 24, className }) {
      const { journal } = useSkinState();
      const current = journalOf(journal);
      const side = Number.isFinite(size) ? size : 24;
      const image = current.markImage || current.coverImage;
      return h('span', {
        className: ['ps-brand-mark', className].filter(Boolean).join(' '),
        style: { width: `${side}px`, height: `${side}px` },
        'data-journal': current.id,
        title: current.name,
        'aria-hidden': 'true',
      }, image
        ? h('img', {
          className: 'ps-brand-mark-image',
          src: image,
          alt: '',
          draggable: 'false',
        })
        : h(Emblem, { id: current.id, size: Math.max(12, side - 8) }));
    }

    function BrandName({ className }) {
      const { journal } = useSkinState();
      const current = journalOf(journal);
      return h('span', {
        className: ['ps-brand-name', className].filter(Boolean).join(' '),
      },
        h('span', { className: `ps-wordmark ps-wordmark--${current.id}` }, current.wordmark),
        h('span', { className: 'ps-brand-name-desk' }, current.descriptor)
      );
    }

    function HeroMark({ size = 34 }) {
      const { journal } = useSkinState();
      const current = journalOf(journal);
      const side = Number.isFinite(size) ? size : 34;
      const image = current.coverImage || current.markImage;
      const style = {
        width: `${Math.max(24, Math.round(side * 0.82))}px`,
        height: `${Math.max(32, Math.round(side * 1.08))}px`,
      };
      if (image) {
        return h('span', {
          className: `ps-hero-cover ps-hero-cover--image ps-hero-cover--${current.id}`,
          style,
          role: 'img',
          'aria-label': `${current.name} · Paper Skin`,
        }, h('img', {
          className: 'ps-hero-cover-image',
          src: image,
          alt: '',
          draggable: 'false',
        }));
      }
      return h('span', {
        className: `ps-hero-cover ps-hero-cover--${current.id}`,
        style,
        role: 'img',
        'aria-label': `${current.name} · Paper Skin`,
      },
        h('span', { className: 'ps-hero-cover-emblem' }, h(Emblem, { id: current.id, size: 15 })),
        h('span', { className: 'ps-hero-cover-rule', 'aria-hidden': 'true' })
      );
    }

    function SidebarColophon({ wide }) {
      const { journal, stage } = useSkinState();
      if (!wide) return null;
      const current = journalOf(journal);
      const currentStage = stageOf(stage);
      return h('div', {
        className: 'ps-colophon',
        'aria-label': `${current.name} · ${currentStage.en}`,
      },
        h('span', { className: 'ps-colophon-rule', 'aria-hidden': 'true' }),
        h('div', { className: 'ps-colophon-row' },
          h('span', { className: 'ps-colophon-issue' },
            `${current.name.toUpperCase()} · ${current.volume}`
          ),
          h('span', { className: 'ps-colophon-stage' },
            h('span', {
              className: 'ps-colophon-dot',
              'data-stage': currentStage.id,
              'aria-hidden': 'true',
            }),
            currentStage.en.toUpperCase()
          )
        )
      );
    }

    function ToggleRow({ id, label, hint, checked, onChange }) {
      return h('label', { className: 'ps-toggle', htmlFor: `${PANEL_ID}-${id}` },
        h('span', { className: 'ps-toggle-copy' },
          h('span', { className: 'ps-toggle-label' }, label),
          h('span', { className: 'ps-toggle-hint' }, hint)
        ),
        h('input', {
          id: `${PANEL_ID}-${id}`,
          type: 'checkbox',
          checked,
          onChange: (event) => onChange(event.target.checked),
        }),
        h('span', { className: 'ps-toggle-track', 'aria-hidden': 'true' },
          h('span', { className: 'ps-toggle-thumb' })
        )
      );
    }

    function SkinDock({ t }) {
      const { journal, stage, watermark, letterOpacity, letterColor, grain } = useSkinState();
      const current = journalOf(journal);
      const currentStage = stageOf(stage);
      const chosenColor = letterColor === 'auto' ? currentStage.accentLight : letterColor;
      const isCustomColor = letterColor !== 'auto' && !LETTER_COLORS.includes(letterColor);
      const [open, setOpen] = React.useState(false);
      const buttonRef = React.useRef(null);
      const panelRef = React.useRef(null);
      const previousFocus = React.useRef(null);

      React.useLayoutEffect(() => {
        let frame = 0;
        let timer = 0;
        let observer;
        const place = () => {
          const button = buttonRef.current;
          if (!button) return;
          const trigger = document.querySelector('[data-slot="sidebar.settings"] button')
            || document.querySelector('[data-testid="settings-trigger"]');
          if (!(trigger instanceof HTMLElement)) {
            button.style.left = '18px';
            button.style.bottom = '18px';
            button.style.top = 'auto';
            return;
          }
          const rect = trigger.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) {
            button.style.left = '18px';
            button.style.bottom = '18px';
            button.style.top = 'auto';
            return;
          }
          const left = rect.right + 9;
          button.style.left = `${Math.round(left)}px`;
          button.style.top = `${Math.round(rect.top + rect.height / 2 - 19)}px`;
          button.style.bottom = 'auto';
        };
        const schedule = () => {
          if (timer !== 0) window.clearTimeout(timer);
          timer = window.setTimeout(() => {
            timer = 0;
            place();
          }, 140);
        };
        place();
        frame = window.requestAnimationFrame(place);
        window.addEventListener('resize', schedule);
        observer = new MutationObserver(schedule);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => {
          window.cancelAnimationFrame(frame);
          if (timer !== 0) window.clearTimeout(timer);
          window.removeEventListener('resize', schedule);
          observer?.disconnect();
        };
      }, []);

      React.useLayoutEffect(() => {
        if (!open) return;
        const panel = panelRef.current;
        const button = buttonRef.current;
        if (!panel || !button) return;
        const rect = button.getBoundingClientRect();
        const width = panel.offsetWidth || 380;
        const height = panel.offsetHeight || 660;
        const left = Math.min(
          Math.max(12, rect.left - width + 38),
          Math.max(12, window.innerWidth - width - 12)
        );
        const preferredBottom = window.innerHeight - rect.top + 10;
        const bottom = Math.min(
          Math.max(12, preferredBottom),
          Math.max(12, window.innerHeight - height - 12)
        );
        panel.style.left = `${Math.round(left)}px`;
        panel.style.bottom = `${Math.round(bottom)}px`;
      }, [open, journal, stage, watermark, grain]);

      React.useEffect(() => {
        if (!open) return;
        previousFocus.current = document.activeElement;
        const frame = window.requestAnimationFrame(() => {
          const panel = panelRef.current;
          if (!panel) return;
          const active = panel.querySelector('[data-ps-active="true"]');
          if (active instanceof HTMLElement) {
            active.focus();
          } else {
            panel.querySelector('button')?.focus();
          }
        });
        return () => {
          window.cancelAnimationFrame(frame);
          if (previousFocus.current instanceof HTMLElement) previousFocus.current.focus();
        };
      }, [open]);

      React.useEffect(() => {
        if (!open) return;
        const onPointer = (event) => {
          const panel = panelRef.current;
          const button = buttonRef.current;
          const target = event.target;
          if (!(target instanceof Node)) return;
          if (panel?.contains(target) || button?.contains(target)) return;
          setOpen(false);
        };
        const onKey = (event) => {
          const panel = panelRef.current;
          if (!panel) return;
          if (event.key === 'Escape') {
            event.preventDefault();
            setOpen(false);
            return;
          }
          if (event.key !== 'Tab') return;
          const focusable = [...panel.querySelectorAll('button, input, [href], [tabindex]:not([tabindex="-1"])')]
            .filter((element) => !element.disabled && element.getAttribute('aria-hidden') !== 'true');
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        };
        document.addEventListener('click', onPointer);
        document.addEventListener('keydown', onKey);
        return () => {
          document.removeEventListener('click', onPointer);
          document.removeEventListener('keydown', onKey);
        };
      }, [open]);

      return h(React.Fragment, null,
        h('button', {
          ref: buttonRef,
          type: 'button',
          className: open ? 'ps-dock ps-dock--open' : 'ps-dock',
          'data-journal': current.id,
          title: `${text(t, 'dock')} · ${current.name} · ${currentStage.en}`,
          'aria-label': `${text(t, 'dock')} · ${current.name} · ${currentStage.en}`,
          'aria-expanded': open,
          'aria-controls': PANEL_ID,
          onClick: () => setOpen((value) => !value),
        },
          current.coverImage
            ? h('img', {
              className: 'ps-dock-cover',
              src: current.coverImage,
              alt: '',
              draggable: 'false',
            })
            : h(Emblem, { id: current.id, size: 18 }),
          h('span', { className: 'ps-dock-dot', 'aria-hidden': 'true' })
        ),
        h('div', {
          ref: panelRef,
          id: PANEL_ID,
          className: open ? 'ps-panel ps-panel--open' : 'ps-panel',
          role: 'dialog',
          'aria-modal': 'false',
          'aria-labelledby': `${PANEL_ID}-title`,
          'aria-label': text(t, 'panelLabel'),
        },
          h('header', { className: 'ps-panel-head' },
            h('div', { className: 'ps-panel-brand' },
              h('span', { className: 'ps-panel-kicker' }, text(t, 'kicker')),
              h('span', { className: 'ps-panel-issue' }, text(t, 'issue'))
            ),
            h('button', {
              type: 'button',
              className: 'ps-icon-button ps-panel-close',
              'aria-label': text(t, 'close'),
              onClick: () => setOpen(false),
            }, h('span', { 'aria-hidden': 'true' }, '×'))
          ),
          h('div', { className: 'ps-panel-rule', 'aria-hidden': 'true' }),
          h('section', { className: 'ps-question' },
            h('p', { className: 'ps-eyebrow' }, text(t, 'eyebrow')),
            h('h2', { className: 'ps-question-title', id: `${PANEL_ID}-title` }, text(t, 'question')),
            h('p', { className: 'ps-question-alt' }, text(t, 'questionAlt')),
            h('p', { className: 'ps-question-hint' }, text(t, 'hint'))
          ),
          h('div', {
            className: 'ps-cover-grid',
            role: 'group',
            'aria-label': text(t, 'journalLabel'),
          }, JOURNALS.map((item) => h('button', {
            key: item.id,
            type: 'button',
            className: 'ps-cover-button',
            'aria-pressed': item.id === current.id,
            'data-ps-active': item.id === current.id ? 'true' : 'false',
            'aria-label': `${item.name} · ${item.id === current.id ? text(t, 'selected') : text(t, 'switchJournal')}`,
            onClick: () => setSkin({ journal: item.id }),
          },
            h(Cover, { journal: item }),
            h('span', { className: 'ps-cover-choice' },
              item.id === current.id ? text(t, 'selected') : item.name
            ),
            item.id === current.id
              ? h('span', { className: 'ps-cover-stamp', 'aria-hidden': 'true' }, currentStage.seal[0])
              : null
          ))),
          h('section', { className: 'ps-progress' },
            h('div', { className: 'ps-section-head' },
              h('span', null, text(t, 'progress')),
              h('span', { className: 'ps-section-hint' }, text(t, 'progressHint'))
            ),
            h('div', {
              className: 'ps-stage-grid',
              role: 'group',
              'aria-label': text(t, 'progress'),
            }, STAGES.map((item) => h('button', {
              key: item.id,
              type: 'button',
              className: 'ps-stage',
              'data-stage': item.id,
              'aria-pressed': item.id === currentStage.id,
              onClick: () => setSkin({ stage: item.id }),
            },
              h('span', { className: 'ps-stage-dot', 'aria-hidden': 'true' }),
              h('span', { className: 'ps-stage-copy' },
                h('span', { className: 'ps-stage-zh' }, item.zh),
                h('span', { className: 'ps-stage-en' }, item.en)
              )
            ))),
            h('p', {
              className: 'ps-stage-preview',
              'data-stage': currentStage.id,
              style: { '--ps-stage-color': chosenColor },
            }, currentStage.copy.replaceAll('{journal}', journalPhrase(current)))
          ),
          h('div', { className: 'ps-options' },
            h(ToggleRow, {
              id: 'watermark',
              label: text(t, 'watermark'),
              hint: text(t, 'watermarkHint'),
              checked: watermark,
              onChange: (value) => setSkin({ watermark: value }),
            }),
            h('div', {
              className: watermark ? 'ps-opacity' : 'ps-opacity ps-opacity--disabled',
            },
              h('div', { className: 'ps-opacity-head' },
                h('label', { htmlFor: `${PANEL_ID}-opacity` }, text(t, 'opacity')),
                h('output', { htmlFor: `${PANEL_ID}-opacity` }, `${letterOpacity}%`)
              ),
              h('input', {
                id: `${PANEL_ID}-opacity`,
                type: 'range',
                min: 5,
                max: 80,
                step: 1,
                value: letterOpacity,
                disabled: !watermark,
                onChange: (event) => setSkin({ letterOpacity: Number(event.target.value) }),
              })
            ),
            h('div', {
              className: watermark ? 'ps-colour' : 'ps-colour ps-colour--disabled',
            },
              h('div', { className: 'ps-colour-head' },
                h('span', null, text(t, 'letterColour')),
                h('span', { className: 'ps-colour-value' },
                  letterColor === 'auto' ? 'AUTO' : letterColor.toUpperCase()
                )
              ),
              h('div', {
                className: 'ps-swatches',
                role: 'group',
                'aria-label': text(t, 'letterColour'),
              },
                h('button', {
                  type: 'button',
                  className: 'ps-swatch ps-swatch--auto',
                  title: text(t, 'autoColour'),
                  'aria-label': text(t, 'autoColour'),
                  'aria-pressed': letterColor === 'auto',
                  onClick: () => setSkin({ letterColor: 'auto' }),
                }, h('span', { 'aria-hidden': 'true' }, 'A')),
                LETTER_COLORS.map((color) => h('button', {
                  key: color,
                  type: 'button',
                  className: 'ps-swatch',
                  style: { background: color },
                  title: color.toUpperCase(),
                  'aria-label': color.toUpperCase(),
                  'aria-pressed': letterColor === color,
                  onClick: () => setSkin({ letterColor: color }),
                })),
                h('label', {
                  className: 'ps-swatch ps-swatch--custom',
                  'data-selected': isCustomColor ? 'true' : 'false',
                  title: text(t, 'customColour'),
                  style: isCustomColor ? { background: letterColor } : undefined,
                },
                  h('input', {
                    type: 'color',
                    value: chosenColor,
                    'aria-label': text(t, 'customColour'),
                    onChange: (event) => setSkin({ letterColor: event.target.value }),
                  }),
                  h('span', { 'aria-hidden': 'true' }, '+')
                )
              )
            ),
            h(ToggleRow, {
              id: 'grain',
              label: text(t, 'grain'),
              hint: text(t, 'grainHint'),
              checked: grain,
              onChange: (value) => setSkin({ grain: value }),
            })
          ),
          h('div', { className: 'ps-panel-actions' },
            h('button', {
              type: 'button',
              className: 'ps-reset',
              onClick: () => setSkin(DEFAULT_STATE),
            }, text(t, 'reset')),
            h('span', { className: 'ps-saved' }, text(t, 'saved'))
          ),
          h('footer', { className: 'ps-panel-foot' },
            h('span', { className: 'ps-panel-manuscript' },
              `${text(t, 'manuscript')} ${manuscriptNumber()}`
            ),
            h('span', { className: 'ps-panel-homage' }, text(t, 'note'))
          )
        )
      );
    }

    const CSS = String.raw`
html[data-ps-skin] {
  --ps-serif: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Songti SC", "STSong", "Noto Serif CJK SC", Georgia, serif;
  --ps-sans: "Avenir Next", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Segoe UI", sans-serif;
  --ps-mono: "SFMono-Regular", "JetBrains Mono", "Cascadia Code", Menlo, monospace;
  --ps-cover-wordmark: "Didot", "Bodoni 72", "Iowan Old Style", "Times New Roman", serif;
  --ps-paper: #f7f2e8;
  --ps-paper-2: #efe8da;
  --ps-paper-3: #e7ddcc;
  --ps-ink: #17150f;
  --ps-ink-2: #514b3f;
  --ps-ink-3: #877e6e;
  --ps-rule: rgba(23, 21, 15, .15);
  --ps-rule-strong: rgba(23, 21, 15, .32);
  --ps-stamp: #a52a2a;
  --ps-accent: #2e5b46;
  --ps-accent-soft: #dfe8df;
  --ps-cover: #123c2d;
  --ps-cover-2: #0b2d20;
  --ps-cover-ink: #f2ead8;
  --ps-cover-dim: rgba(242, 234, 216, .62);
  --ps-cover-line: rgba(242, 234, 216, .22);
  --ps-grain-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27240%27%20height%3D%27240%27%3E%3Cdefs%3E%3Cfilter%20id%3D%27n%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%27.86%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27%2F%3E%3CfeColorMatrix%20type%3D%27saturate%27%20values%3D%270%27%2F%3E%3C%2Ffilter%3E%3Cpattern%20id%3D%27l%27%20width%3D%274%27%20height%3D%274%27%20patternUnits%3D%27userSpaceOnUse%27%3E%3Cpath%20d%3D%27M0%203.5H4%27%20stroke%3D%27%23000%27%20stroke-opacity%3D%27.045%27%20stroke-width%3D%27.55%27%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%27240%27%20height%3D%27240%27%20filter%3D%27url%28%23n%29%27%20opacity%3D%27.13%27%2F%3E%3Crect%20width%3D%27240%27%20height%3D%27240%27%20fill%3D%27url%28%23l%29%27%2F%3E%3C%2Fsvg%3E");
  --ps-grain-dark: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27240%27%20height%3D%27240%27%3E%3Cdefs%3E%3Cfilter%20id%3D%27n%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%27.86%27%20numOctaves%3D%272%27%20stitchTiles%3D%27stitch%27%2F%3E%3CfeColorMatrix%20type%3D%27matrix%27%20values%3D%270%200%200%200%201%20%200%200%200%200%201%20%200%200%200%200%201%20%20.33%20.33%20.33%200%200%27%2F%3E%3C%2Ffilter%3E%3Cpattern%20id%3D%27l%27%20width%3D%274%27%20height%3D%274%27%20patternUnits%3D%27userSpaceOnUse%27%3E%3Cpath%20d%3D%27M0%203.5H4%27%20stroke%3D%27%23fff%27%20stroke-opacity%3D%27.035%27%20stroke-width%3D%27.55%27%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%27240%27%20height%3D%27240%27%20filter%3D%27url%28%23n%29%27%20opacity%3D%27.10%27%2F%3E%3Crect%20width%3D%27240%27%20height%3D%27240%27%20fill%3D%27url%28%23l%29%27%2F%3E%3C%2Fsvg%3E");
  --ps-cover-grain-image: var(--ps-grain-dark);
}
html[data-ps-skin][data-ps-journal="science"] {
  --ps-accent: #96283a;
  --ps-accent-soft: #f0dfe1;
  --ps-cover: #651521;
  --ps-cover-2: #4b0f19;
  --ps-cover-ink: #f7ebdd;
  --ps-cover-dim: rgba(247, 235, 221, .64);
  --ps-cover-line: rgba(247, 235, 221, .24);
}
html[data-ps-skin][data-ps-journal="ieee"] {
  --ps-accent: #245b8e;
  --ps-accent-soft: #e0e8f1;
  --ps-cover: #0b3762;
  --ps-cover-2: #062847;
  --ps-cover-ink: #eef3f8;
  --ps-cover-dim: rgba(238, 243, 248, .64);
  --ps-cover-line: rgba(238, 243, 248, .24);
}
html[data-ps-skin][data-ps-journal="elsevier"] {
  --ps-accent: #8a4b34;
  --ps-accent-soft: #f0e1d5;
  --ps-cover: #4b1f2f;
  --ps-cover-2: #381520;
  --ps-cover-ink: #f4e7d6;
  --ps-cover-dim: rgba(244, 231, 214, .64);
  --ps-cover-line: rgba(244, 231, 214, .24);
}
html[data-ps-skin][data-ps-journal="elsevier"] body[data-ds-dark-theme] {
  --ps-accent: #d6a17d;
  --ps-accent-soft: #3a2a24;
}
html[data-ps-skin][data-ps-grain="off"] {
  --ps-grain-image: none;
  --ps-cover-grain-image: none;
}
html[data-ps-skin][data-ps-grain="off"] body[data-ds-dark-theme] {
  --ps-grain-image: none;
}
html[data-ps-skin] body[data-ds-dark-theme] {
  --ps-grain-image: var(--ps-grain-dark);
  --ps-paper: #131410;
  --ps-paper-2: #1a1b16;
  --ps-paper-3: #23241d;
  --ps-ink: #efe8d9;
  --ps-ink-2: #c6bdac;
  --ps-ink-3: #938a7b;
  --ps-rule: rgba(239, 232, 217, .14);
  --ps-rule-strong: rgba(239, 232, 217, .30);
  --ps-stamp: #d46a5f;
  --ps-accent: #8bb99f;
  --ps-accent-soft: #26342b;
}
html[data-ps-skin][data-ps-journal="science"] body[data-ds-dark-theme] {
  --ps-accent: #d98b96;
  --ps-accent-soft: #3a2226;
}
html[data-ps-skin][data-ps-journal="ieee"] body[data-ds-dark-theme] {
  --ps-accent: #84b4df;
  --ps-accent-soft: #1d2b3a;
}

html[data-ps-skin] body {
  --dsw-alias-bg-base: var(--ps-paper) !important;
  --dsw-alias-bg-layer-1: var(--ps-paper) !important;
  --dsw-alias-bg-layer-2: var(--ps-paper-2) !important;
  --dsw-alias-bg-layer-3: var(--ps-paper-3) !important;
  --dsw-alias-bg-overlay: var(--ps-paper) !important;
  --dsw-alias-bg-module-platform: var(--ps-paper-2) !important;
  --dsw-alias-bg-multi-select: var(--ps-paper-2) !important;
  --dsw-alias-bg-skeleton: rgba(23, 21, 15, .06) !important;
  --dsw-alias-bg-document-preview: var(--ps-paper-2) !important;
  --dsw-alias-bg-document-selection: color-mix(in srgb, var(--ps-accent) 28%, transparent) !important;
  --dsw-alias-border-l1: color-mix(in srgb, var(--ps-ink) 8%, transparent) !important;
  --dsw-alias-border-l2: color-mix(in srgb, var(--ps-ink) 13%, transparent) !important;
  --dsw-alias-border-l3: color-mix(in srgb, var(--ps-ink) 21%, transparent) !important;
  --dsw-alias-border-l4: color-mix(in srgb, var(--ps-ink) 30%, transparent) !important;
  --dsw-alias-border-inverted: rgba(255, 255, 255, .16) !important;
  --dsw-alias-border-inverted2: rgba(255, 255, 255, .10) !important;
  --dsw-alias-label-primary: var(--ps-ink) !important;
  --dsw-alias-label-primary-dimmed: var(--ps-ink) !important;
  --dsw-alias-label-primary-foreground: var(--ps-paper) !important;
  --dsw-alias-label-primary-inverted: var(--ps-paper) !important;
  --dsw-alias-label-secondary: var(--ps-ink-2) !important;
  --dsw-alias-label-tertiary: var(--ps-ink-3) !important;
  --dsw-alias-label-caption: var(--ps-ink-3) !important;
  --dsw-alias-label-dimmed: var(--ps-paper-3) !important;
  --dsw-alias-brand-primary: var(--ps-accent) !important;
  --dsw-alias-brand-primary-new-colorprimary-new-color: var(--ps-accent) !important;
  --dsw-alias-brand-text: var(--ps-ink) !important;
  --dsw-alias-link: var(--ps-accent) !important;
  --dsw-alias-state-business-primary: var(--ps-accent) !important;
  --dsw-alias-state-business-tertiary: var(--ps-accent-soft) !important;
  --dsw-alias-state-error-primary: var(--ps-stamp) !important;
  --dsw-alias-state-error-secondary: var(--ps-stamp) !important;
  --dsw-alias-state-success-primary: var(--ps-accent) !important;
  --dsw-alias-state-success-secondary: color-mix(in srgb, var(--ps-accent) 74%, var(--ps-paper)) !important;
  --dsw-alias-state-success-tertiary: var(--ps-accent-soft) !important;
  --dsw-alias-button-primary-fill: var(--ps-accent) !important;
  --dsw-alias-button-primary-hover: color-mix(in srgb, var(--ps-accent) 82%, var(--ps-ink)) !important;
  --dsw-alias-button-info-fill: var(--ps-accent) !important;
  --dsw-alias-button-info-hover: color-mix(in srgb, var(--ps-accent) 82%, var(--ps-ink)) !important;
  --dsw-alias-button-elevated-fill: var(--ps-paper) !important;
  --dsw-alias-button-floating-fill: var(--ps-paper) !important;
  --dsw-alias-button-floating-hover: var(--ps-paper-2) !important;
  --dsw-alias-button-ghost-active-fill: var(--ps-paper-2) !important;
  --dsw-alias-button-ghost-active-hover: var(--ps-paper-3) !important;
  --dsw-alias-button-ghost-active-border: var(--ps-rule-strong) !important;
  --dsw-alias-interactive-bg-hover: color-mix(in srgb, var(--ps-ink) 6%, transparent) !important;
  --dsw-alias-interactive-bg-active: color-mix(in srgb, var(--ps-ink) 10%, transparent) !important;
  --dsw-alias-interactive-bg-hover-accent: color-mix(in srgb, var(--ps-accent) 12%, transparent) !important;
  --dsw-alias-interactive-bg-hover-danger: color-mix(in srgb, var(--ps-stamp) 10%, transparent) !important;
  --dsw-alias-interactive-bg-hover-solid: var(--ps-paper-2) !important;
  --dsw-alias-interactive-bg-active: color-mix(in srgb, var(--ps-ink) 10%, transparent) !important;
  --dsw-alias-settings-card-fill: var(--ps-paper) !important;
  --dsw-alias-settings-card-stroke: var(--ps-rule) !important;
  --dsw-alias-markdown-code-block: var(--ps-paper-2) !important;
  --dsw-alias-markdown-code-block-banner: var(--ps-paper-3) !important;
  --dsw-alias-markdown-inline-code: var(--ps-paper-2) !important;
  --dsw-alias-markdown-citation: var(--ps-paper-2) !important;
  --dsw-alias-markdown-tag: var(--ps-paper-2) !important;
  --dsw-alias-markdown-code-segment-selected: var(--ps-paper) !important;
  --dsw-alias-markdown-code-segment-unselected: var(--ps-paper-2) !important;
  --dsw-alias-markdown-placeholder: var(--ps-paper-2) !important;
  --dsw-alias-scrollbar-bg-l1: color-mix(in srgb, var(--ps-ink) 22%, transparent) !important;
  --dsw-alias-scrollbar-bg-l2: color-mix(in srgb, var(--ps-ink) 29%, transparent) !important;
  --dsw-alias-scrollbar-hover-l1: color-mix(in srgb, var(--ps-ink) 40%, transparent) !important;
  --dsw-alias-scrollbar-hover-l2: color-mix(in srgb, var(--ps-ink) 48%, transparent) !important;
  --dsw-alias-menu-group-header-fill: var(--ps-paper) !important;
  --dsw-alias-menu-icon: var(--ps-ink-2) !important;
  --dsw-alias-turn-trigger-bg: var(--ps-paper-2) !important;
  --dsw-alias-turn-trigger-bg-hover: var(--ps-paper-3) !important;
  --dsw-alias-toast-bg: var(--ps-ink) !important;
  --dsw-alias-toast-label: var(--ps-paper) !important;
  --dsw-alias-tooltip-bg: var(--ps-ink) !important;
  --dsw-alias-tooltip-key-bg: color-mix(in srgb, var(--ps-ink) 82%, var(--ps-paper)) !important;
  --dsw-alias-switch-thumb: var(--ps-paper) !important;
  --dsw-alias-label-shimmer: color-mix(in srgb, var(--ps-ink) 20%, transparent) !important;
  --dsw-specific-menu: var(--ps-paper) !important;
  --dsw-specific-selector: var(--ps-paper-2) !important;
  --dsw-specific-bubble: var(--ps-accent-soft) !important;
  --dsw-specific-bubble-highlight: color-mix(in srgb, var(--ps-accent) 18%, var(--ps-paper)) !important;
  --dsw-specific-input-major: var(--ps-paper) !important;
  --dsw-specific-tip: var(--ps-paper-2) !important;
  --dsw-specific-sidebar-fill: var(--ps-cover) !important;
  --dsw-specific-sidebar-nav-item-hover: rgba(255, 255, 255, .08) !important;
  --dsw-specific-sidebar-nav-item-active: rgba(255, 255, 255, .14) !important;
  --dsw-specific-sidebar-nav-item-active-accent: rgba(255, 255, 255, .10) !important;
  --dsw-menu-surface-fill: var(--ps-paper) !important;
  --dsw-focus-ring-color: var(--ps-accent) !important;
  --dsw-font-family: var(--ps-sans) !important;
  --dsw-font-family-brand: var(--ps-cover-wordmark) !important;
  --ds-font-family-code: var(--ps-mono) !important;
  --dsw-radius-xs: 1px;
  --dsw-radius-sm: 2px;
  --dsw-radius-md: 3px;
  --dsw-radius-lg: 4px;
  --dsw-radius-xl: 6px;
  background-color: var(--ps-paper) !important;
  color: var(--ps-ink);
  font-family: var(--ps-sans);
}
html[data-ps-skin] ::selection {
  background: color-mix(in srgb, var(--ps-stamp) 22%, transparent);
}
html[data-ps-skin] :focus-visible {
  outline-color: var(--ps-accent) !important;
}

/* Shell --------------------------------------------------------------- */
html[data-ps-skin] body #root {
  background-color: var(--ps-paper) !important;
}
html[data-ps-skin] [data-slot="root"] {
  background-color: var(--ps-paper) !important;
}
/* The overlay layer sits above the whole window. It must never paint a
   background, or it becomes an opaque sheet over the entire application.
   We deliberately do not paint the frame's direct children here: their
   surfaces already follow --dsw-alias-bg-base and the sidebar tokens. */
html[data-ps-skin] [data-shell-overlay],
html[data-ps-skin] [data-slot="shell.overlay"] {
  background: transparent !important;
}
html[data-ps-skin] [data-slot="main"],
html[data-ps-skin] [data-slot="conversation.content"],
html[data-ps-skin] [data-conversation-region] {
  background-color: var(--ps-paper) !important;
}
html[data-ps-skin] [data-slot="conversation.header"] {
  font-family: var(--ps-serif);
  background: var(--ps-paper) !important;
  border-bottom: 1px solid var(--ps-rule);
}
html[data-ps-skin] [data-conversation-scroll] {
  background-color: var(--ps-paper) !important;
  background-image: var(--ps-grain-image), var(--ps-watermark-light) !important;
  background-repeat: repeat, no-repeat !important;
  background-position: 0 0, 66% 34% !important;
  background-size: 180px 180px, min(56vw, 720px) auto !important;
  background-attachment: scroll, fixed !important;
}
html[data-ps-skin] body[data-ds-dark-theme] [data-conversation-scroll] {
  background-image: var(--ps-grain-image), var(--ps-watermark-dark) !important;
}
html[data-ps-skin][data-ps-watermark="off"] [data-conversation-scroll] {
  background-image: var(--ps-grain-image) !important;
}
html[data-ps-skin] [data-phase="hero"] {
  font-family: var(--ps-serif);
}
html[data-ps-skin] [data-composer-card] {
  background-color: var(--ps-paper) !important;
  background-image: var(--ps-grain-image) !important;
  background-size: 180px 180px !important;
  border: 1px solid var(--ps-rule-strong) !important;
  box-shadow: 0 12px 30px rgba(23, 21, 15, .08), inset 0 1px 0 rgba(255, 255, 255, .5) !important;
  border-radius: 3px !important;
}
html[data-ps-skin] [data-composer-card] :is(textarea, [contenteditable="true"], [data-lexical-editor]) {
  font-family: var(--ps-serif) !important;
  letter-spacing: .005em;
}
html[data-ps-skin] [data-chat-node-key] :is(p, li, h1, h2, h3, h4, blockquote) {
  font-family: var(--ps-serif);
}
html[data-ps-skin] [data-chat-node-key] :is(h1, h2, h3, h4) {
  font-weight: 500;
  letter-spacing: -.01em;
}
html[data-ps-skin] [data-chat-node-key] :is(code, pre, kbd, samp) {
  font-family: var(--ps-mono) !important;
}
html[data-ps-skin] [data-shortcut-modal="settings"] {
  background: var(--ps-paper) !important;
  background-image: var(--ps-grain-image) !important;
  background-size: 180px 180px !important;
  border: 1px solid var(--ps-rule-strong) !important;
  border-radius: 3px !important;
  box-shadow: 0 34px 90px rgba(0, 0, 0, .28) !important;
}
html[data-ps-skin] [data-slot="settings.section"] :is(h1, h2, h3) {
  font-family: var(--ps-serif);
  font-weight: 500;
}
html[data-ps-skin] :is([role="menu"], [role="listbox"]) {
  border-radius: 2px !important;
  border: 1px solid var(--ps-rule-strong) !important;
  box-shadow: 0 14px 34px rgba(0, 0, 0, .18) !important;
}

/* Sidebar masthead ---------------------------------------------------- */
html[data-ps-skin] [data-slot="sidebar"] {
  --dsw-alias-label-primary: var(--ps-cover-ink) !important;
  --dsw-alias-label-primary-dimmed: var(--ps-cover-ink) !important;
  --dsw-alias-label-primary-inverted: var(--ps-cover) !important;
  --dsw-alias-label-secondary: var(--ps-cover-dim) !important;
  --dsw-alias-label-tertiary: var(--ps-cover-dim) !important;
  --dsw-alias-label-caption: var(--ps-cover-dim) !important;
  --dsw-alias-border-l1: rgba(255, 255, 255, .08) !important;
  --dsw-alias-border-l2: rgba(255, 255, 255, .13) !important;
  --dsw-alias-border-l3: rgba(255, 255, 255, .19) !important;
  --dsw-alias-border-l4: rgba(255, 255, 255, .26) !important;
  --dsw-alias-interactive-bg-hover: rgba(255, 255, 255, .10) !important;
  --dsw-alias-interactive-bg-active: rgba(255, 255, 255, .16) !important;
  --dsw-alias-interactive-bg-hover-solid: rgba(255, 255, 255, .12) !important;
  --dsw-alias-button-elevated-fill: rgba(255, 255, 255, .06) !important;
  --dsw-alias-button-floating-hover: rgba(255, 255, 255, .13) !important;
  --dsw-alias-button-ghost-active-fill: rgba(255, 255, 255, .12) !important;
  --dsw-alias-button-ghost-active-border: rgba(255, 255, 255, .22) !important;
  --dsw-specific-sidebar-nav-item-hover: rgba(255, 255, 255, .08) !important;
  --dsw-specific-sidebar-nav-item-active: rgba(255, 255, 255, .14) !important;
  --dsw-specific-sidebar-nav-item-active-accent: rgba(255, 255, 255, .10) !important;
  --dsw-alias-brand-primary: var(--ps-cover-ink) !important;
  --dsw-alias-state-business-primary: var(--ps-cover-ink) !important;
  --dsw-specific-sidebar-fill: var(--ps-cover) !important;
  background: var(--ps-cover) !important;
  color: var(--ps-cover-ink) !important;
  font-family: var(--ps-serif);
  position: relative;
}
html[data-ps-skin] [data-slot="root"] div:has(> [data-slot="sidebar"]),
html[data-ps-skin] [data-slot="sidebar"] > div {
  background: var(--ps-cover) !important;
  border-right-color: transparent !important;
}
html[data-ps-skin][data-ps-grain="on"] [data-slot="sidebar"],
html[data-ps-skin][data-ps-grain="on"] [data-slot="sidebar"] > div,
html[data-ps-skin][data-ps-grain="on"] [data-slot="root"] div:has(> [data-slot="sidebar"]) {
  background-image: var(--ps-cover-grain-image) !important;
  background-repeat: repeat !important;
  background-size: 220px 220px !important;
}
html[data-ps-skin] [data-slot="sidebar"]::after {
  content: "";
  position: absolute;
  inset: 7px;
  border: 1px solid var(--ps-cover-line);
  pointer-events: none;
  z-index: 4;
}
html[data-ps-skin] [data-slot="sidebar"] :is(button, a) {
  -webkit-tap-highlight-color: transparent;
}
html[data-ps-skin] [data-slot="sidebar.brand.name"] {
  font-family: var(--ps-cover-wordmark);
}
html[data-ps-skin] [data-slot="sidebar"] [data-slot="sidebar.brand.name"] {
  color: var(--ps-cover-ink);
}

/* Floating skin settings --------------------------------------------- */
.ps-dock {
  position: fixed;
  z-index: 6200;
  width: 36px;
  height: 40px;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid color-mix(in srgb, var(--ps-cover-ink) 40%, transparent);
  border-radius: 2px;
  background: var(--ps-cover);
  color: var(--ps-cover-ink);
  box-shadow: 0 7px 18px rgba(0, 0, 0, .22);
  cursor: pointer;
  transition: transform .16s ease, box-shadow .16s ease;
}
.ps-dock:hover {
  transform: translateY(-2px);
  box-shadow: 0 11px 24px rgba(0, 0, 0, .26);
}
.ps-dock--open {
  outline: 2px solid var(--ps-stamp);
  outline-offset: 2px;
}
.ps-dock .ps-emblem-svg {
  color: var(--ps-cover-ink);
}
.ps-dock {
  overflow: hidden;
}
.ps-dock-cover {
  position: absolute;
  inset: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  object-fit: cover;
  object-position: 50% 26%;
  border-radius: 1px;
}
.ps-dock-dot {
  z-index: 2;
}
.ps-dock-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ps-stamp);
}

.ps-panel {
  position: fixed;
  z-index: 6210;
  display: none;
  width: 380px;
  max-width: calc(100vw - 24px);
  max-height: calc(100vh - 88px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 16px 16px 14px;
  border: 1px solid var(--ps-rule-strong);
  border-radius: 2px;
  background-color: var(--ps-paper);
  background-image: var(--ps-grain-image);
  background-size: 180px 180px;
  box-shadow: 0 26px 64px rgba(0, 0, 0, .30), inset 0 1px 0 rgba(255, 255, 255, .55);
  color: var(--ps-ink);
  font-family: var(--ps-sans);
}
.ps-panel--open {
  display: block;
  animation: ps-panel-in .16s ease-out both;
}
.ps-panel-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.ps-panel-brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.ps-panel-kicker {
  font: 9px/1 var(--ps-sans);
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--ps-ink);
}
.ps-panel-issue {
  font: 8px/1 var(--ps-sans);
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--ps-ink-3);
}
.ps-icon-button {
  flex: none;
  width: 26px;
  height: 26px;
  display: inline-grid;
  place-items: center;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 2px;
  background: transparent;
  color: var(--ps-ink-2);
  cursor: pointer;
  font: 18px/1 var(--ps-serif);
}
.ps-icon-button:hover {
  background: var(--ps-paper-2);
  border-color: var(--ps-rule);
  color: var(--ps-ink);
}
.ps-panel-rule {
  height: 1px;
  margin: 12px 0 14px;
  background: linear-gradient(90deg, var(--ps-stamp) 0 28px, var(--ps-rule) 28px 100%);
}
.ps-eyebrow {
  margin: 0 0 6px;
  font: 8px/1 var(--ps-sans);
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--ps-stamp);
}
.ps-question-title {
  margin: 0;
  font-family: var(--ps-serif);
  font-size: 25px;
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -.015em;
  color: var(--ps-ink);
}
.ps-question-alt {
  margin: 5px 0 0;
  font-family: var(--ps-serif);
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -.005em;
  color: var(--ps-ink-2);
}
.ps-question-hint {
  margin: 7px 0 0;
  font-size: 10px;
  line-height: 1.6;
  color: var(--ps-ink-2);
}
.ps-cover-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin: 15px 0 14px;
}
.ps-cover-button {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--ps-ink);
  text-align: left;
  cursor: pointer;
}
.ps-cover-button:hover .ps-cover {
  transform: translateY(-2px);
  box-shadow: 0 13px 27px rgba(23, 21, 15, .20), inset 0 0 0 1px rgba(255, 255, 255, .12);
}
.ps-cover-button[aria-pressed="true"] .ps-cover {
  outline: 2px solid var(--ps-stamp);
  outline-offset: 3px;
}
.ps-cover-choice {
  padding-left: 1px;
  font: 8px/1 var(--ps-sans);
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--ps-ink-2);
}
.ps-cover-button[aria-pressed="true"] .ps-cover-choice {
  color: var(--ps-stamp);
}
.ps-cover-stamp {
  position: absolute;
  top: 9px;
  right: -5px;
  padding: 4px 5px 3px;
  border: 1px solid var(--ps-stamp);
  background: var(--ps-paper);
  color: var(--ps-stamp);
  font: 7px/1 var(--ps-sans);
  letter-spacing: .12em;
  transform: rotate(9deg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, .12);
  pointer-events: none;
}
.ps-options {
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 12px 0 2px;
  border-top: 1px solid var(--ps-rule);
}
.ps-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.ps-toggle-copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  flex: 1;
}
.ps-toggle-label {
  font-size: 10px;
  line-height: 1.3;
  letter-spacing: .02em;
  color: var(--ps-ink);
}
.ps-toggle-hint {
  font-size: 9px;
  line-height: 1.4;
  color: var(--ps-ink-3);
}
.ps-toggle > input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
.ps-toggle-track {
  position: relative;
  flex: none;
  width: 30px;
  height: 17px;
  border: 1px solid var(--ps-rule-strong);
  border-radius: 999px;
  background: var(--ps-paper-2);
  transition: background .16s ease, border-color .16s ease;
}
.ps-toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--ps-ink-3);
  transition: transform .16s ease, background .16s ease;
}
.ps-toggle > input:checked + .ps-toggle-track {
  background: var(--ps-accent);
  border-color: var(--ps-accent);
}
.ps-toggle > input:checked + .ps-toggle-track .ps-toggle-thumb {
  background: var(--ps-paper);
  transform: translateX(13px);
}
.ps-toggle > input:focus-visible + .ps-toggle-track {
  outline: 2px solid var(--ps-accent);
  outline-offset: 2px;
}
.ps-opacity {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 9px 10px 8px;
  border: 1px solid var(--ps-rule);
  background: var(--ps-paper-2);
  transition: opacity .16s ease;
}
.ps-opacity--disabled {
  opacity: .42;
  pointer-events: none;
}
.ps-opacity-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  font: 8px/1 var(--ps-sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ps-ink-2);
}
.ps-opacity-head output {
  color: var(--ps-stamp);
  font: 9px/1 var(--ps-mono);
  letter-spacing: .02em;
}
.ps-opacity input[type="range"] {
  appearance: none;
  display: block;
  width: 100%;
  height: 14px;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}
.ps-opacity input[type="range"]::-webkit-slider-runnable-track {
  height: 2px;
  border-radius: 2px;
  background: var(--ps-rule-strong);
}
.ps-opacity input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  margin-top: -5px;
  border: 1px solid var(--ps-paper);
  border-radius: 50%;
  background: var(--ps-stamp);
  box-shadow: 0 1px 3px rgba(0, 0, 0, .18);
}
.ps-opacity input[type="range"]:focus-visible {
  outline: 2px solid var(--ps-accent);
  outline-offset: 3px;
}
.ps-colour {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 9px 10px 10px;
  border: 1px solid var(--ps-rule);
  background: var(--ps-paper-2);
  transition: opacity .16s ease;
}
.ps-colour--disabled {
  opacity: .42;
  pointer-events: none;
}
.ps-colour-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  font: 8px/1 var(--ps-sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ps-ink-2);
}
.ps-colour-value {
  color: var(--ps-ink-3);
  font: 8px/1 var(--ps-mono);
  letter-spacing: .02em;
}
.ps-swatches {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
}
.ps-swatch {
  position: relative;
  width: 22px;
  height: 22px;
  flex: none;
  padding: 0;
  border: 1px solid var(--ps-rule-strong);
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}
.ps-swatch[aria-pressed="true"],
.ps-swatch[data-selected="true"] {
  box-shadow: 0 0 0 2px var(--ps-paper-2), 0 0 0 3px var(--ps-ink);
}
.ps-swatch:focus-visible,
.ps-swatch--custom:focus-within {
  outline: 2px solid var(--ps-accent);
  outline-offset: 2px;
}
.ps-swatch--auto {
  display: grid;
  place-items: center;
  background: conic-gradient(from 45deg, #a52a2a, #2e5b46, #245b8e, #9a7429, #17150f, #a52a2a);
  color: var(--ps-paper);
  font: 9px/1 var(--ps-serif);
}
.ps-swatch--custom {
  display: grid;
  place-items: center;
  overflow: hidden;
  background: conic-gradient(from 45deg, #a52a2a, #2e5b46, #245b8e, #9a7429, #17150f, #a52a2a);
  color: var(--ps-paper);
  font: 13px/1 var(--ps-sans);
}
.ps-swatch--custom span {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, .42);
  color: #fff;
  font-size: 11px;
  line-height: 1;
}
.ps-swatch--custom input[type="color"] {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  border: 0;
  padding: 0;
}

.ps-panel-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
  padding-top: 11px;
  border-top: 1px solid var(--ps-rule);
}
.ps-reset {
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--ps-ink-2);
  font: 9px/1.4 var(--ps-sans);
  letter-spacing: .08em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}
.ps-reset:hover { color: var(--ps-stamp); }
.ps-saved {
  font: 8px/1 var(--ps-sans);
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ps-ink-3);
}
.ps-panel-foot {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 13px;
  padding-top: 10px;
  border-top: 1px solid var(--ps-rule);
  font: 8px/1.5 var(--ps-sans);
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--ps-ink-3);
}
.ps-panel-manuscript { color: var(--ps-ink-2); }
.ps-panel-homage {
  letter-spacing: .02em;
  text-transform: none;
  font-size: 8px;
  line-height: 1.5;
}

/* Covers -------------------------------------------------------------- */
.ps-cover {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, .24);
  border-radius: 1px;
  background: var(--cover-bg);
  color: var(--cover-ink);
  container-type: inline-size;
  box-shadow: 0 8px 20px rgba(23, 21, 15, .16), inset 0 0 0 1px rgba(255, 255, 255, .10);
  transition: transform .22s ease, box-shadow .22s ease;
}
.ps-cover::before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 1px solid var(--cover-line);
  pointer-events: none;
  z-index: 2;
}
.ps-cover--image {
  background: #101319;
  box-shadow: 0 8px 20px rgba(23, 21, 15, .18), inset 0 0 0 1px rgba(255, 255, 255, .16);
}
.ps-cover.ps-cover--image::before,
.ps-cover.ps-cover--image[data-journal]::after {
  content: none;
}
.ps-cover-image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ps-cover[data-journal="nature"] {
  --cover-bg: #123c2d;
  --cover-ink: #f2ead8;
  --cover-line: rgba(242, 234, 216, .35);
  --cover-dim: rgba(242, 234, 216, .72);
}
.ps-cover[data-journal="science"] {
  --cover-bg: #f4ecdd;
  --cover-ink: #951f2f;
  --cover-line: rgba(149, 31, 47, .32);
  --cover-dim: rgba(149, 31, 47, .65);
}
.ps-cover[data-journal="ieee"] {
  --cover-bg: #0b3762;
  --cover-ink: #eef3f8;
  --cover-line: rgba(238, 243, 248, .32);
  --cover-dim: rgba(238, 243, 248, .7);
}
.ps-cover[data-journal="elsevier"] {
  --cover-bg: #4b1f2f;
  --cover-ink: #f4e7d6;
  --cover-line: rgba(244, 231, 214, .3);
  --cover-dim: rgba(244, 231, 214, .68);
}
.ps-cover[data-journal="nature"]::after {
  content: "";
  position: absolute;
  top: 22%;
  left: 13%;
  width: 74%;
  aspect-ratio: 1;
  border: 1px solid rgba(242, 234, 216, .22);
  border-radius: 50%;
  background: radial-gradient(circle at 34% 28%, rgba(242, 234, 216, .16), transparent 62%);
  pointer-events: none;
}
.ps-cover[data-journal="ieee"]::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(238, 243, 248, .09) 1px, transparent 1px),
    linear-gradient(90deg, rgba(238, 243, 248, .09) 1px, transparent 1px);
  background-size: 11px 11px;
  mask-image: linear-gradient(to bottom, transparent 4%, #000 28%, #000 74%, transparent 96%);
  pointer-events: none;
}
.ps-cover-inner {
  position: absolute;
  inset: 10px 10px 9px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ps-cover-running,
.ps-cover-foot {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px;
  font: 6px/1.2 var(--ps-sans);
  letter-spacing: .13em;
  color: var(--cover-dim);
  text-transform: uppercase;
}
.ps-cover-art {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.ps-cover-emblem {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: .9;
}
.ps-cover-emblem .ps-emblem-svg {
  width: 22px;
  height: 22px;
}
.ps-cover-title {
  font-family: var(--ps-cover-wordmark);
  font-size: clamp(11px, 24cqi, 20px);
  font-weight: 400;
  line-height: .94;
  letter-spacing: -.03em;
  white-space: nowrap;
}
.ps-cover[data-journal="science"] .ps-cover-title {
  font-family: var(--ps-serif);
  font-size: clamp(10px, 20cqi, 17px);
  font-weight: 700;
  letter-spacing: -.04em;
}
.ps-cover[data-journal="science"] .ps-cover-art::after {
  content: "";
  width: 26px;
  height: 2px;
  margin-top: 9px;
  background: currentColor;
}
.ps-cover[data-journal="ieee"] .ps-cover-title {
  font-family: var(--ps-sans);
  font-size: clamp(11px, 22cqi, 18px);
  font-weight: 700;
  letter-spacing: .02em;
}
.ps-cover[data-journal="elsevier"] .ps-cover-title {
  font-family: var(--ps-sans);
  font-size: clamp(8px, 14cqi, 11px);
  font-weight: 700;
  letter-spacing: .04em;
}
.ps-cover--small .ps-cover-title { font-size: 13px; }

/* Sidebar masthead components --------------------------------------- */
.ps-emblem-svg {
  display: block;
  flex: none;
}
.ps-brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  box-sizing: border-box;
  border: 1px solid var(--ps-cover-line);
  border-radius: 50%;
  background: rgba(255, 255, 255, .035);
  color: var(--ps-cover-ink);
  line-height: 1;
}
.ps-brand-mark .ps-emblem-svg {
  opacity: .92;
}
.ps-brand-mark {
  overflow: hidden;
}
.ps-brand-mark-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 22%;
}
.ps-brand-mark[data-journal="elsevier"] .ps-brand-mark-image {
  padding: 2px;
  object-fit: contain;
  object-position: center;
}
.ps-brand-name {
  display: inline-flex;
  align-items: baseline;
  gap: 7px;
  min-width: 0;
  color: var(--ps-cover-ink);
}
.ps-wordmark {
  font-family: var(--ps-cover-wordmark);
  font-size: 22px;
  line-height: 1;
  letter-spacing: -.03em;
  white-space: nowrap;
}
.ps-wordmark--science {
  font-family: var(--ps-serif);
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -.035em;
}
.ps-wordmark--ieee {
  font-family: var(--ps-sans);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: .02em;
}
.ps-wordmark--elsevier {
  font-family: var(--ps-sans);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .07em;
}
.ps-brand-name-desk {
  color: var(--ps-cover-dim);
  font: 8px/1 var(--ps-sans);
  letter-spacing: .2em;
  text-transform: uppercase;
  transform: translateY(-1px);
}

/* Journal colophon -------------------------------------------------- */
.ps-colophon {
  width: 100%;
  box-sizing: border-box;
  margin: 2px 2px 7px;
  padding-top: 8px;
  border-top: 1px solid var(--ps-cover-line);
}
.ps-colophon-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  font: 7px/1.4 var(--ps-sans);
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--ps-cover-dim);
}
.ps-colophon-stage {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--ps-cover-ink);
  white-space: nowrap;
}
.ps-colophon-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ps-cover-ink);
}
.ps-colophon-dot[data-stage="submitted"] { background: #b7ad9c; }
.ps-colophon-dot[data-stage="review"] { background: #9ec4d4; }
.ps-colophon-dot[data-stage="major"] { background: #d9977d; }
.ps-colophon-dot[data-stage="minor"] { background: #e0bd7a; }
.ps-colophon-dot[data-stage="accepted"] { background: #d46a5f; }
.ps-colophon-dot[data-stage="published"] { background: #d9d1c1; }

/* Hero cover --------------------------------------------------------- */
.ps-hero-cover {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  padding: 4px 3px;
  border: 1px solid rgba(255, 255, 255, .24);
  border-radius: 1px;
  background: #123c2d;
  color: #f2ead8;
  box-shadow: 0 5px 14px rgba(23, 21, 15, .18);
}
.ps-hero-cover::before {
  content: "";
  position: absolute;
  inset: 2px;
  border: 1px solid rgba(242, 234, 216, .28);
  pointer-events: none;
}
.ps-hero-cover--science {
  background: #f4ecdd;
  color: #951f2f;
  border-color: rgba(149, 31, 47, .28);
}
.ps-hero-cover--science::before { border-color: rgba(149, 31, 47, .24); }
.ps-hero-cover--ieee {
  background: #0b3762;
  color: #eef3f8;
  border-color: rgba(238, 243, 248, .28);
}
.ps-hero-cover--ieee::before { border-color: rgba(238, 243, 248, .24); }
.ps-hero-cover--elsevier {
  background: #4b1f2f;
  color: #f4e7d6;
  border-color: rgba(244, 231, 214, .28);
}
.ps-hero-cover--elsevier::before { border-color: rgba(244, 231, 214, .24); }
.ps-hero-cover-emblem {
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ps-hero-cover-emblem .ps-emblem-svg {
  width: 15px;
  height: 15px;
}
.ps-hero-cover--image {
  padding: 0;
  overflow: hidden;
}
.ps-hero-cover--image::before {
  content: none;
}
.ps-hero-cover-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ps-hero-cover-rule {
  width: 58%;
  height: 1px;
  background: currentColor;
  opacity: .38;
  z-index: 1;
}

/* Manuscript progress ----------------------------------------------- */
.ps-progress {
  margin-top: 13px;
  padding-top: 12px;
  border-top: 1px solid var(--ps-rule);
}
.ps-section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 9px;
}
.ps-section-head > span:first-child {
  font: 9px/1 var(--ps-sans);
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--ps-ink);
}
.ps-section-hint {
  max-width: 52%;
  font-size: 8px;
  line-height: 1.35;
  color: var(--ps-ink-3);
  text-align: right;
}
.ps-stage-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}
.ps-stage {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 36px;
  padding: 6px 8px;
  border: 1px solid var(--ps-rule);
  border-radius: 1px;
  background: transparent;
  color: var(--ps-ink);
  text-align: left;
  cursor: pointer;
  transition: background .15s ease, border-color .15s ease;
}
.ps-stage:hover { background: var(--ps-paper-2); }
.ps-stage[aria-pressed="true"] {
  border-color: var(--ps-stage-color);
  background: var(--ps-paper-2);
}
.ps-stage-dot {
  width: 5px;
  height: 5px;
  flex: none;
  border-radius: 50%;
  background: var(--ps-stage-color);
}
.ps-stage-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.ps-stage-zh {
  font: 10px/1.1 var(--ps-serif);
  color: var(--ps-ink);
}
.ps-stage-en {
  overflow: hidden;
  font: 7px/1.2 var(--ps-sans);
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--ps-ink-3);
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ps-stage[aria-pressed="true"] .ps-stage-en { color: var(--ps-stage-color); }
.ps-stage-preview {
  margin: 10px 0 0;
  padding: 9px 10px;
  border-left: 2px solid var(--ps-stage-color);
  background: color-mix(in srgb, var(--ps-stage-color) 7%, transparent);
  font: 10px/1.55 var(--ps-serif);
  color: var(--ps-ink-2);
}
.ps-stage[data-stage="submitted"],
.ps-stage-preview[data-stage="submitted"] { --ps-stage-color: #6b655a; }
.ps-stage[data-stage="review"],
.ps-stage-preview[data-stage="review"] { --ps-stage-color: #3e5f70; }
.ps-stage[data-stage="major"],
.ps-stage-preview[data-stage="major"] { --ps-stage-color: #8d442d; }
.ps-stage[data-stage="minor"],
.ps-stage-preview[data-stage="minor"] { --ps-stage-color: #9a7429; }
.ps-stage[data-stage="accepted"],
.ps-stage-preview[data-stage="accepted"] { --ps-stage-color: #a52a2a; }
.ps-stage[data-stage="published"],
.ps-stage-preview[data-stage="published"] { --ps-stage-color: #2c2a25; }
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage[data-stage="submitted"],
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage-preview[data-stage="submitted"] { --ps-stage-color: #b7ad9c; }
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage[data-stage="review"],
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage-preview[data-stage="review"] { --ps-stage-color: #9ec4d4; }
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage[data-stage="major"],
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage-preview[data-stage="major"] { --ps-stage-color: #d9977d; }
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage[data-stage="minor"],
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage-preview[data-stage="minor"] { --ps-stage-color: #e0bd7a; }
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage[data-stage="accepted"],
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage-preview[data-stage="accepted"] { --ps-stage-color: #df8579; }
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage[data-stage="published"],
html[data-ps-skin] body[data-ds-dark-theme] .ps-stage-preview[data-stage="published"] { --ps-stage-color: #d9d1c1; }

@keyframes ps-panel-in {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .ps-panel { width: calc(100vw - 24px); }
  .ps-cover-grid { gap: 6px; }
  .ps-section-hint { display: none; }
}

@media (max-width: 420px) {
  .ps-cover-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
  .ps-cover-title { font-size: 25px; }
  .ps-cover[data-journal="science"] .ps-cover-title { font-size: 21px; }
  .ps-cover[data-journal="ieee"] .ps-cover-title { font-size: 23px; }
  .ps-cover[data-journal="elsevier"] .ps-cover-title { font-size: 13px; }
}

@media (prefers-reduced-motion: reduce) {
  .ps-dock,
  .ps-cover,
  .ps-toggle-track,
  .ps-toggle-thumb,
  .ps-panel--open,
  .ps-stage {
    animation: none !important;
    transition: none !important;
  }
}

`;

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, COPY), 'paper-skin: locale');

      ctx.effect(() => {
        const root = document.documentElement;
        const sync = () => {
          const current = journalOf(state.journal);
          const currentStage = stageOf(state.stage);
          root.setAttribute('data-ps-skin', '');
          root.setAttribute('data-ps-journal', current.id);
          root.setAttribute('data-ps-stage', currentStage.id);
          root.setAttribute('data-ps-grain', state.grain ? 'on' : 'off');
          root.setAttribute('data-ps-watermark', state.watermark ? 'on' : 'off');
          root.style.setProperty('--ps-watermark-light', watermarkUrl(currentStage, current, 'light', state.letterOpacity, state.letterColor));
          root.style.setProperty('--ps-watermark-dark', watermarkUrl(currentStage, current, 'dark', state.letterOpacity, state.letterColor));
        };
        sync();
        const unsubscribe = subscribe(sync);
        return () => {
          unsubscribe();
          root.removeAttribute('data-ps-skin');
          root.removeAttribute('data-ps-journal');
          root.removeAttribute('data-ps-stage');
          root.removeAttribute('data-ps-grain');
          root.removeAttribute('data-ps-watermark');
          root.style.removeProperty('--ps-watermark-light');
          root.style.removeProperty('--ps-watermark-dark');
        };
      }, 'paper-skin: root state');

      ctx.effect(() => {
        const existing = document.getElementById(STYLE_ID);
        if (existing) existing.remove();
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.dataset.paperSkin = 'true';
        style.textContent = CSS;
        (document.head || document.documentElement).appendChild(style);
        return () => style.remove();
      }, 'paper-skin: styles');

      ctx.effect(() => {
        const onStorage = (event) => {
          if (event.key !== null && event.key !== STORAGE_KEY) return;
          reloadStoredState();
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
      }, 'paper-skin: cross-tab storage');

      ctx.slots.inject('sidebar.brand.mark', () => ctx.slots.register({
        name: 'sidebar.brand.mark',
        locale: NS,
        priority: -1,
      }, BrandMark));

      ctx.slots.inject('sidebar.brand.name', () => ctx.slots.register({
        name: 'sidebar.brand.name',
        locale: NS,
        priority: -1,
      }, BrandName));

      ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
        name: 'sidebar.footer.action',
        id: 'paper-skin-colophon',
        order: -10,
        locale: NS,
      }, SidebarColophon));

      ctx.slots.inject('conversation.hero.brand.mark', () => ctx.slots.register({
        name: 'conversation.hero.brand.mark',
        locale: NS,
        priority: -1,
      }, HeroMark));

      ctx.slots.inject('shell.overlay', () => ctx.slots.register({
        name: 'shell.overlay',
        id: 'paper-skin-dock',
        order: -10,
        locale: NS,
      }, SkinDock));
    }

    return {
      inject: ['slots', 'locale'],
      apply,
    };
  },
});

