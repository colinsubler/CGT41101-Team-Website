const cursorShadow = document.createElement('div');
cursorShadow.style.position = 'fixed';
cursorShadow.style.pointerEvents = 'none';
cursorShadow.style.zIndex = '9999';
cursorShadow.style.width = '80px';
cursorShadow.style.height = '80px';
cursorShadow.style.borderRadius = '50%';
cursorShadow.style.background = 'radial-gradient(rgba(173,73,158,0.35) 0%, rgba(173,73,158,0.15) 60%, transparent 100%)';
cursorShadow.style.boxShadow = '0 0 40px 20px rgba(173,73,158,0.35)';
cursorShadow.style.transform = 'translate(-50%, -50%)';
cursorShadow.style.transition = 'opacity 0.2s';
cursorShadow.style.opacity = '0.7';

document.body.appendChild(cursorShadow);

document.addEventListener('mousemove', (e) => {
    cursorShadow.style.left = `${e.clientX}px`;
    cursorShadow.style.top = `${e.clientY}px`;
    cursorShadow.style.opacity = '0.7';
});

document.addEventListener('mouseleave', () => {
    cursorShadow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorShadow.style.opacity = '0.7';
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.team-cards .card');
    if (cards.length === 4) {
        cards[0].addEventListener('click', () => {
            window.location.href = 'about.html#container2';
        });
        cards[1].addEventListener('click', () => {
            window.location.href = 'about.html#top';
        });
        cards[2].addEventListener('click', () => {
            window.location.href = 'about.html#bottom';
        });
        cards[3].addEventListener('click', () => {
            window.location.href = 'about.html#container3';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('about.html')) {
        const scrollWithOffset = (el, offset = 0) => {
            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const top = rect.top + scrollTop + offset;
            window.scrollTo({ top, behavior: 'smooth' });
        };

        if (window.location.hash === '#top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else if (window.location.hash === '#bottom') {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
        else if (window.location.hash === '#container2' || window.location.hash === '#container3') {
            const id = window.location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                scrollWithOffset(el, -100);
            }
        }
    }
});