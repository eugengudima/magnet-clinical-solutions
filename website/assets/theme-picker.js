/* ===== THEME PICKER ===== */
(function () {
  const THEMES = [
    { id: '1',  name: 'Navy & Gold',        primary: '#1B2A6B', accent: '#C9A84C' },
    { id: '2',  name: 'Forest & Emerald',   primary: '#1A4731', accent: '#34D399' },
    { id: '3',  name: 'Steel & Sky',        primary: '#1E3A5F', accent: '#38BDF8' },
    { id: '4',  name: 'Burgundy & Champagne', primary: '#6B1C2F', accent: '#D4B483' },
    { id: '5',  name: 'Charcoal & Teal',    primary: '#1C2B2B', accent: '#14B8A6' },
    { id: '6',  name: 'Midnight & Coral',   primary: '#1a2535', accent: '#F4845F' },
    { id: '7',  name: 'Olive & Amber',      primary: '#3B4A1E', accent: '#D4A017' },
    { id: '8',  name: 'Plum & Rose',        primary: '#3D1A5C', accent: '#E879A0' },
    { id: '9',  name: 'Dark Teal & Lime',   primary: '#134E4A', accent: '#84CC16' },
    { id: '10', name: 'Carbon & Amber',     primary: '#1C1C1E', accent: '#F59E0B' },
  ];

  const STORAGE_KEY = 'mcs-theme';

  function applyTheme(id) {
    if (id === '1') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', id);
    }
    localStorage.setItem(STORAGE_KEY, id);
    document.querySelectorAll('.tp-swatch').forEach(s => {
      s.classList.toggle('tp-active', s.dataset.theme === id);
    });
  }

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #tp-btn {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        z-index: 9999;
        background: #C9A84C;
        color: #101d52;
        border: none;
        border-radius: 100px;
        padding: 0.6rem 1.1rem;
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        cursor: pointer;
        box-shadow: 0 4px 24px rgba(0,0,0,0.22);
        display: flex;
        align-items: center;
        gap: 0.4rem;
        transition: opacity 0.2s, transform 0.2s;
        font-family: 'Inter', system-ui, sans-serif;
      }
      #tp-btn:hover { opacity: 0.9; transform: translateY(-2px); }

      #tp-panel {
        position: fixed;
        bottom: 4.2rem;
        right: 1.5rem;
        z-index: 9999;
        background: #fff;
        border-radius: 14px;
        box-shadow: 0 8px 48px rgba(0,0,0,0.18);
        padding: 1.2rem;
        width: 280px;
        display: none;
        font-family: 'Inter', system-ui, sans-serif;
      }
      #tp-panel.open { display: block; }

      #tp-title {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #8a92b2;
        margin-bottom: 0.85rem;
      }

      #tp-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
      }

      .tp-swatch {
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
        border: 2.5px solid transparent;
        transition: border-color 0.15s, transform 0.15s;
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        position: relative;
      }
      .tp-swatch:hover { transform: scale(1.06); }
      .tp-swatch.tp-active { border-color: #1B2A6B; box-shadow: 0 0 0 2px rgba(27,42,107,0.25); }

      .tp-swatch-primary {
        flex: 1;
      }
      .tp-swatch-accent {
        height: 10px;
      }
      .tp-swatch-num {
        position: absolute;
        bottom: 3px;
        right: 5px;
        font-size: 0.6rem;
        font-weight: 800;
        color: rgba(255,255,255,0.85);
        line-height: 1;
        text-shadow: 0 1px 3px rgba(0,0,0,0.4);
      }

      #tp-name {
        margin-top: 0.85rem;
        font-size: 0.78rem;
        color: #4a5080;
        text-align: center;
        min-height: 1.1em;
      }

      #tp-hint {
        margin-top: 0.6rem;
        font-size: 0.7rem;
        color: #b0b8d0;
        text-align: center;
      }
    `;
    document.head.appendChild(style);
  }

  function buildUI() {
    const btn = document.createElement('button');
    btn.id = 'tp-btn';
    btn.innerHTML = '&#9681; Style';

    const panel = document.createElement('div');
    panel.id = 'tp-panel';

    const title = document.createElement('div');
    title.id = 'tp-title';
    title.textContent = 'Choose a style';

    const grid = document.createElement('div');
    grid.id = 'tp-grid';

    const nameLabel = document.createElement('div');
    nameLabel.id = 'tp-name';

    const hint = document.createElement('div');
    hint.id = 'tp-hint';
    hint.textContent = 'Saved automatically';

    THEMES.forEach(t => {
      const swatch = document.createElement('div');
      swatch.className = 'tp-swatch';
      swatch.dataset.theme = t.id;
      swatch.title = t.name;
      swatch.innerHTML = `
        <div class="tp-swatch-primary" style="background:${t.primary}"></div>
        <div class="tp-swatch-accent"  style="background:${t.accent}"></div>
        <span class="tp-swatch-num">${t.id}</span>
      `;
      swatch.addEventListener('mouseenter', () => {
        nameLabel.textContent = `${t.id}. ${t.name}`;
      });
      swatch.addEventListener('mouseleave', () => {
        const active = THEMES.find(x => x.id === (localStorage.getItem(STORAGE_KEY) || '1'));
        nameLabel.textContent = active ? `${active.id}. ${active.name}` : '';
      });
      swatch.addEventListener('click', () => applyTheme(t.id));
      grid.appendChild(swatch);
    });

    panel.appendChild(title);
    panel.appendChild(grid);
    panel.appendChild(nameLabel);
    panel.appendChild(hint);
    document.body.appendChild(btn);
    document.body.appendChild(panel);

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target !== btn) {
        panel.classList.remove('open');
      }
    });
  }

  function init() {
    if (window.self !== window.top) return; // inside picker iframe — no floating button
    injectStyles();
    buildUI();
    const saved = localStorage.getItem(STORAGE_KEY) || '1';
    applyTheme(saved);
    const active = THEMES.find(t => t.id === saved);
    const nameLabel = document.getElementById('tp-name');
    if (nameLabel && active) nameLabel.textContent = `${active.id}. ${active.name}`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
