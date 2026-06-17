
    const header = document.getElementById('site-header');
    const onScroll = () => {
      if (window.scrollY > 20) { header.classList.add('scrolled'); }
      else { header.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();


    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });


    const sectionIds = ['events', 'about', 'categories', 'ranks'];
    const navAnchors = document.querySelectorAll('.nav-link');
    const spy = () => {
      let current = '';
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) { current = id; }
      });
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    };
    window.addEventListener('scroll', spy);
    spy();