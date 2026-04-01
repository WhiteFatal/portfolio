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
    status: 'wip', liveUrl: '', codeUrl: '',
  },
  {
    title:  'PITCH - Single page app for Football game reservation — ©2026',
    desc:   'A high-performance web dashboard with real-time data updates and a zero-latency rendering pipeline. Designed to handle thousands of simultaneous WebSocket events without a dropped frame.',
    images: [
      'project_images/pitch_mb.png',
      'project_images/pitch_sc.png',
    ],
    stack: [
      { label: 'React',     style: 'tag-blue'   },
      { label: 'Firebase', style: 'tag-red' },
      { label: 'Vercel',     style: 'tag-silver'    },
    ],
    status: 'live', liveUrl: 'https://pitch-eight-omega.vercel.app/', codeUrl: 'https://github.com/WhiteFatal/Pitch',
  },
  {
    title:  'Onyx Corporation | Pharmaceutical Manufacturing — ©2026',
    desc:   `Onyx Corporation delivers certified pharmaceutical products across the region.<br/>
    Onyx Corporation поставляет сертифицированные фармацевтические продукты по всему региону.`,
    images: [
      'project_images/onyx_mb.png',
      'project_images/onyx_sc.png',
    ],
    stack: [
      { label: 'Astro', style: 'tag-violet' },
      { label: 'Alpine.js', style: 'tag-blue'   },
      { label: 'Tailwind CSS', style: 'tag-red'   },
      { label: 'Sanity CMS',    style: 'tag-blue'    },
      { label: 'Vercel',     style: 'tag-silver' },
    ],
    status: 'live', liveUrl: 'https://onyx-corp.vercel.app/', codeUrl: 'https://github.com/WhiteFatal/OnyxCorp',
  },
  {
    title:  'Text Editor — ©2025',
    desc:   `Google Docs Clone project based on the youtube course of "Code With Antonio"`,
    images: [
      'project_images/editor_mb.png',
      'project_images/editor_sc.png',
    ],
    stack: [
      { label: 'Next.js', style: 'tag-violet' },
      { label: 'Tailwind CSS', style: 'tag-red'   },
      { label: 'TypeScript',    style: 'tag-blue'    },
      { label: 'Liveblocks',    style: 'tag-silver'    },
      { label: 'Clerk',    style: 'tag-silver'    },
      { label: 'Supabase',    style: 'tag-blue'    },
      { label: 'Vercel',     style: 'tag-silver' },
    ],
    status: 'live', liveUrl: 'https://text-editor-iota-drab.vercel.app', codeUrl: 'https://github.com/WhiteFatal/Text-Editor',
  },
  {
    title:  `want to go deeper down to the rabbit hole?`,
    desc:   `keep scrolling and find ancient projects from the early ages of pHp and Javascript, including my very first website from 2004`,
    images: [
      'project_images/matrix_sc.gif',
      'project_images/matrix_sc.gif',
    ],
    stack: [
      { label: 'HTML',   style: 'tag-silver' },
      { label: 'CSS',   style: 'tag-red'    },
      { label: 'Javascript',  style: 'tag-blue'},      
    ],
    status: '', liveUrl: 'https://whitefatal.github.io/matrix/', codeUrl: 'https://github.com/WhiteFatal/matrix',
  },
  {
    title:  'zgaprebi.ge - აუდიო ზღაპრები - ©2015',
    desc:   `An online platform for Audio Fairy Tales in Georgian language. Library of stories for readers of all ages.<br/>
    ქართულად წაკითხული სახალისო აუდიო ზღაპრების ონლაინ პლატფორმა, რომელიც მსმენელს ჩანაწერების ვრცელ კოლექციას სთავაზობს.`,
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
    title:  'Ancient website of AOE2 community - ©2004',
    desc:   `Comunity website of Georgian players of Age of Empires 2 in Georgian language.<br/>
    Age of Empires 2-ის ქართველი მოთამაშეების პირველი, ისტორიული ვებ-გვერდი`,
    images: [
      'project_images/aoe_mb.png',
      'project_images/aoe_sc.png',
    ],
    stack: [
      { label: 'HTML',        style: 'tag-silver' },
      { label: 'CSS',    style: 'tag-red'   },
      { label: 'Javascript', style: 'tag-blue' },
    ],
    status: 'archived', liveUrl: 'https://whitefatal.github.io/aoe/', codeUrl: 'https://github.com/WhiteFatal/aoe',
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