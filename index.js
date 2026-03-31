/* ─── PROJECT DATA ───────────────────────────────────────
   Edit this array to add / update projects.
   images: [url1, url2]  — use '' for a placeholder slot
   stack:  array of { label, style }
           style options: tag-blue | tag-violet | tag-silver | tag-red
   status: 'live' | 'wip' | 'archived'
──────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title:  'Project Alpha',
    desc:   'A high-performance web dashboard with real-time data updates and a zero-latency rendering pipeline. Designed to handle thousands of simultaneous WebSocket events without a dropped frame.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&q=70',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&q=70',
    ],
    stack: [
      { label: 'React',     style: 'tag-blue'   },
      { label: 'Node.js',   style: 'tag-violet' },
      { label: 'WebSocket', style: 'tag-silver' },
      { label: 'Redis',     style: 'tag-red'    },
    ],
    status: 'live', liveUrl: 'https://example.com', codeUrl: 'https://github.com',
  },
  {
    title:  'Project Beta',
    desc:   'REST & GraphQL API layer with intelligent caching, rate limiting, and sub-50ms response times. Built to scale horizontally without any configuration changes.',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=720&q=70',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=720&q=70',
    ],
    stack: [
      { label: 'TypeScript', style: 'tag-violet' },
      { label: 'PostgreSQL', style: 'tag-blue'   },
      { label: 'GraphQL',    style: 'tag-red'    },
      { label: 'Docker',     style: 'tag-silver' },
    ],
    status: 'wip', liveUrl: '', codeUrl: 'https://github.com',
  },
  {
    title:  'zgaprebi.ge - აუდიო ზღაპრები - ©2015',
    desc:   `An online platform for Audio Fairy Tales in Georgian language.
    Rich library of stories with user authentication and curated recommendations for readers of all ages.
    ქართულად წაკითხული აუდიო ზღაპრების ონლაინ პლატფორმა, რომელიც მსმენელს სთავაზობს სახალისო ზღაპრების
    კოლექციას, რეკომედციებს სხვადასხვა ასაკის ბავშვებისთვის და რეგისტრაციის სისტემას.`,
    images: [
      'project_images/zgaprebi_mb.png',
      'project_images/zgaprebi_sc.png',
    ],
    stack: [
      { label: 'HTML',   style: 'tag-silver' },
      { label: 'CSS',   style: 'tag-red'    },
      { label: 'Javascript',  style: 'tag-blue'},
      { label: 'pHp 5.6', style: 'tag-violet' },
      { label: 'pHp 8.3', style: 'tag-violet' },
      { label: 'DirectAdmin', style: 'tag-silver' },

      
    ],
    status: 'live', liveUrl: 'https://zgaprebi.ge', codeUrl: 'https://github.com/WhiteFatal/zgaprebi',
  },
  {
    title:  'Project Delta',
    desc:   'CLI DevOps toolkit for automating deploy pipelines, blue-green deployments, health monitoring, and instant rollbacks — all from a single binary with zero runtime dependencies.',
    images: [
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=720&q=70',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=720&q=70',
    ],
    stack: [
      { label: 'Go',        style: 'tag-silver' },
      { label: 'Docker',    style: 'tag-blue'   },
      { label: 'GitHub CI', style: 'tag-violet' },
      { label: 'Terraform', style: 'tag-red'    },
    ],
    status: 'archived', liveUrl: '', codeUrl: 'https://github.com',
  },
];

/* ─── HELPERS ────────────────────────────────────────── */
function imgSlot(url, alt) {
  if (url) {
    return `<div class="card-img-slot"><img src="${url}" alt="${alt}" loading="lazy" decoding="async"></div>`;
  }
  return `<div class="card-img-slot"><div class="card-img-placeholder">[ no image ]</div></div>`;
}

/* ─── RENDER PROJECTS ────────────────────────────────── */
function renderProjects() {
  const container = document.getElementById('projects-stack');

  container.innerHTML = PROJECTS.map((p, i) => {
    const num   = String(i + 1).padStart(2, '0');
    const tags  = p.stack.map(t => `<span class="stack-tag ${t.style}">${t.label}</span>`).join('');
    const links = [
      p.liveUrl ? `<a class="card-link" href="${p.liveUrl}" target="_blank">↗ live demo</a>` : '',
      p.codeUrl ? `<a class="card-link" href="${p.codeUrl}" target="_blank">{ } source</a>`  : '',
    ].filter(Boolean).join('');

    return `
      <div class="card-viewport">
        <div class="project-card">
          <div class="card-images">
            <div class="card-images-row">
              ${imgSlot(p.images[0], p.title + ' — image 1')}
              ${imgSlot(p.images[1], p.title + ' — image 2')}
            </div>
          </div>
          <div class="card-info">
            <div class="card-top">
              <span class="card-num">${num} //</span>
              <span class="card-badge status-${p.status}">${p.status}</span>
            </div>
            <a class="card-link" href="${p.liveUrl}" target="_blank"><div class="card-title">${p.title}</div></a>
            <div class="card-desc">${p.desc}</div>
            <div class="stack-label">stack &amp; frameworks</div>
            <div class="stack-list">${tags}</div>
            ${links ? `<div class="card-links">${links}</div>` : ''}
          </div>
        </div>
      </div>`;
  }).join('');

  observeReveal();
}

/* ─── REVEAL ON SCROLL ───────────────────────────────── */
function observeReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─── COUNT-UP ───────────────────────────────────────── */
function countUp(el, target) {
  let n = 0;
  const tick = setInterval(() => {
    n++;
    el.textContent = n;
    if (n >= target) clearInterval(tick);
  }, 80);
}

/* ─── INIT ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  const projEl = document.getElementById('proj-count');
  if (projEl) countUp(projEl, PROJECTS.length);
});