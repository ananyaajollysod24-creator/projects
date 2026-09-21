// ---- This file is the engine. Panel text/images/video live in content.js instead. ----
(function () {
  const stage = document.getElementById('stage');
  let zTop = 10;
  let cascade = 0; // used to offset panels opened from in-panel links, so they don't stack exactly on top of each other
  const openPanels = {};

  // Hotspots on the illustration open their panel positioned near the click.
  document.querySelectorAll('.hotspot').forEach(btn => {
    btn.addEventListener('click', () => {
      openPanel(btn.dataset.panel, btn);
    });
  });

  // Delegated listener: catches clicks on any "See also" link inside ANY panel,
  // including panels that don't exist yet when the page first loads.
  stage.addEventListener('click', (e) => {
    const link = e.target.closest('[data-open]');
    if (!link) return;
    e.preventDefault();
    openPanel(link.dataset.open, null);
  });

  function openPanel(key, originEl) {
    if (openPanels[key]) {
      bringToFront(openPanels[key]);
      return;
    }
    const stageRect = stage.getBoundingClientRect();
    let startX, startY;

    if (originEl) {
      // Opened from a hotspot on the artwork: appear right next to it.
      const rect = originEl.getBoundingClientRect();
      startX = rect.left - stageRect.left + 20;
      startY = rect.top - stageRect.top + 40;
    } else {
      // Opened from a "See also" link inside another panel: cascade
      // diagonally so each new panel is visible rather than hidden underneath.
      cascade = (cascade + 1) % 6;
      startX = 60 + cascade * 30;
      startY = 60 + cascade * 30;
    }

    startX = Math.max(0, Math.min(startX, stage.clientWidth - content[key].w - 10));
    startY = Math.max(0, Math.min(startY, stage.clientHeight - content[key].h - 10));

    openPanels[key] = createPanel(key, startX, startY);
  }

  function createPanel(key, x, y) {
    const data = content[key];
    const panel = document.createElement('div');
    panel.className = 'panel';
    panel.style.left = x + 'px';
    panel.style.top = y + 'px';
    panel.style.width = data.w + 'px';
    panel.style.height = data.h + 'px';
    panel.style.zIndex = ++zTop;

    panel.innerHTML = `
      <div class="panel-head">
        <span>${data.title}</span>
        <button class="panel-close" aria-label="close">×</button>
      </div>
      <div class="panel-body">${data.body}</div>
      <div class="resize-handle"></div>
    `;
    stage.appendChild(panel);

    panel.addEventListener('mousedown', () => bringToFront(panel));

    // --- drag ---
    const head = panel.querySelector('.panel-head');
    head.addEventListener('pointerdown', (e) => {
      if (e.target.classList.contains('panel-close')) return;
      const startX = e.clientX, startY = e.clientY;
      const origLeft = panel.offsetLeft, origTop = panel.offsetTop;
      bringToFront(panel);
      function onMove(ev) {
        const dx = ev.clientX - startX, dy = ev.clientY - startY;
        let nx = origLeft + dx, ny = origTop + dy;
        nx = Math.max(0, Math.min(nx, stage.clientWidth - panel.offsetWidth));
        ny = Math.max(0, Math.min(ny, stage.clientHeight - panel.offsetHeight));
        panel.style.left = nx + 'px';
        panel.style.top = ny + 'px';
      }
      function onUp() {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      }
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    });

    // --- resize ---
    const handle = panel.querySelector('.resize-handle');
    handle.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      const startX = e.clientX, startY = e.clientY;
      const origW = panel.offsetWidth, origH = panel.offsetHeight;
      bringToFront(panel);
      function onMove(ev) {
        const dw = ev.clientX - startX, dh = ev.clientY - startY;
        panel.style.width = Math.max(220, origW + dw) + 'px';
        panel.style.height = Math.max(160, origH + dh) + 'px';
      }
      function onUp() {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      }
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    });

    panel.querySelector('.panel-close').addEventListener('click', () => {
      panel.remove();
      delete openPanels[key];
    });

    if (key === 'experience') {
      const tapBtn = panel.querySelector('#tapBtn');
      const scoreVal = panel.querySelector('#scoreVal');
      let score = 0;
      tapBtn.addEventListener('click', () => {
        score++;
        scoreVal.textContent = score;
      });
    }

    return panel;
  }

  function bringToFront(panel) {
    panel.style.zIndex = ++zTop;
  }
})();
