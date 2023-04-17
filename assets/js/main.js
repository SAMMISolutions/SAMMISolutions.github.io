document.addEventListener('DOMContentLoaded', () => {
  maintainScroll();
  initTooltip();
  initPopOver();
  openLinksNewTab();
  editPasteBin();
  initDarkModeSwitcher();
  initCounter();
  initCarousel();
  checkForTabs();
});

/// maintain scroll position
function maintainScroll() {
  const sidebar = document.querySelector('.sidebar');
  const top = localStorage.getItem('sidebar-scroll');
  if (top !== null) {
    sidebar.scrollTop = parseInt(top, 10);
  }
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('sidebar-scroll', sidebar.scrollTop);
  }, { passive: true });
}

// initate tooltips on hovers DON'T TOUCH IT
function initTooltip() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl, {
    container: 'body',
    placement: 'auto',
    html: true,
    viewport: { selector: '.container', padding: 5 },
    boundary: 'viewport',
  }));
}

// initiate bootstrap popovers
function initPopOver() {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  const popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
}

// toggle sidebar on mobile devices
function sideBarToggle() {
  document.querySelector('.sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('hidden-xs');
    document.getElementById('sidebarwrap').classList.toggle('d-none');
  }, { passive: true });
}

// refresh scrollspy after loading page

function refreshScrollSpy() {
  const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  dataSpyList.forEach((dataSpyEl) => {
    bootstrap.ScrollSpy.getInstance(dataSpyEl)
      .refresh();
  });
}

// open all links in new tab
function openLinksNewTab() {
  const location = window.location.hostname;
  if (location.includes('localhost')) return;
  const { links } = document;
  for (let i = 0; i < links.length; i++) {
    if (!links[i].href.includes('sammi.solutions')) links[i].target = '_blank';
  }
}

// select all for embed pastebins and force text break
function editPasteBin() {
  const els = document.getElementsByClassName('de1');
  for (let i = 0; i < els.length; i++) {
    els[i].classList.add('user-select-all');
    els[i].classList.add('text-break');
  }
}

function initDarkModeSwitcher() {
  const e = document.getElementById('DarkModeSwitch');

  e.addEventListener('click', () => {
    document.getElementById('scheme').remove();
    if (e.checked) {
      document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:dark}</style>');
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('scheme', 'dark');
    } else {
      document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:light}</style>');
      document.documentElement.setAttribute('data-theme', 'light');
      window.localStorage.setItem('scheme', 'light');
    }
  }, { passive: true });
}

async function initCounter() {
  let views = 0;
  const extSingle = document.getElementById('extension_single');
  if (!extSingle) return;
  const title = document.title.slice(0, document.title.indexOf('|'));
  const slug = createSlug(title);
  const visited = JSON.parse(localStorage.getItem('visited')) || {};
  if (!visited[slug]) {
    const response = await fetch(`https://api.countapi.xyz/hit/lioranboard.ca/${slug}`);
    if (response.ok) {
      const data = await response.json();
      views = data.value;
    }
    visited[slug] = true;
    localStorage.setItem('visited', JSON.stringify(visited));
  } else {
    const response = await fetch(`https://api.countapi.xyz/get/lioranboard.ca/${slug}`);
    if (response.ok) {
      const data = await response.json();
      views = data.value;
    }
  }
  document.getElementById('ext_views').innerHTML = `${views}`;
}

function initCarousel() {
  const carousel = document.getElementById('ext_carousel');
  const iframe = document.getElementById('ext_trailer');
  const modals = document.querySelectorAll('.ext-modal');
  if (!carousel || modals.length === 0) return;
  for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('show.bs.modal', () => {
      const currentCarousel = bootstrap.Carousel.getInstance(carousel);
      currentCarousel.pause();
    }, { passive: true });
    modals[i].addEventListener('hide.bs.modal', () => {
      const currentCarousel = bootstrap.Carousel.getInstance(carousel);
      currentCarousel.cycle();
    }, { passive: true });
  }
  if (!iframe) return;

  window.onYouTubeIframeAPIReady = function () {
    const player = new YT.Player(iframe, {
      events:
   {
     onStateChange(event) {
       const currentCarousel = bootstrap.Carousel.getInstance(carousel);
       if (event.data === 3 || event.data === 1) {
         currentCarousel.pause();
       } else if (event.data === 2 || event.data === 0) {
         currentCarousel.cycle();
       }
     },
   },

    });
  };
}

function createSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

function checkForTabs() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'pills-setup' || hash === 'pills-overview') {
    document.getElementById(`${hash}-tab`).click();
    return;
  }
  if (window.location.pathname.includes('extensions')) {
    const elem = document.getElementById(hash);
    if (!elem) return;
    let parent = elem.parentNode;
    while (!parent.id.includes('pills')) {
      parent = parent.parentNode;
    }
    switch (parent.id) {
      default:
        break;
      case 'pills-setup': document.getElementById('pills-setup-tab').click();
        break;
      case 'pills-overview': document.getElementById('pills-overview-tab').click();
        break;
    }
  }
}
