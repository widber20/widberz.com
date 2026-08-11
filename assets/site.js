(() => {
  const page = document.body.dataset.page || '';
  const servicePages = ['web-app-development', 'it-business-consulting', 'business-systems-automation', 'infrastructure-deployment'];
  const current = (name) => page === name ? ' aria-current="page"' : '';
  const servicesCurrent = servicePages.includes(page) ? ' aria-current="page"' : '';
  const header = `
    <header class="site-header"><nav class="nav container" aria-label="Primary navigation">
      <a class="brand" href="/" aria-label="Widberz home"><img src="/assets/images/widberz-logo.webp" alt="Widberz"></a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-links">☰<span class="sr-only">Menu</span></button>
      <div class="nav-links" id="primary-links">
        <a href="/"${current('home')}>Home</a>
        <details class="nav-services"><summary${servicesCurrent}>Services</summary><div>
          <a href="/web-app-development/"${current('web-app-development')}>Web &amp; App Development</a>
          <a href="/it-business-consulting/"${current('it-business-consulting')}>IT &amp; Business Consulting</a>
          <a href="/business-systems-automation/"${current('business-systems-automation')}>Business Systems &amp; Automation</a>
          <a href="/infrastructure-deployment/"${current('infrastructure-deployment')}>Infrastructure &amp; Deployment</a>
        </div></details>
        <a href="/wcps/"${current('wcps')}>WCPS</a>
        <a href="/zoho/"${current('zoho')}>Zoho Partner</a>
        <a href="/about/"${current('about')}>About</a>
        <a href="/contact-us/"${current('contact')}>Contact</a>
      </div>
    </nav></header>`;
  const footer = `
    <footer class="site-footer"><div class="container footer-grid">
      <section><h2>Widberz</h2><p>Practical digital systems for businesses ready to work simpler, smarter and more scalably.</p></section>
      <section><h2>Explore</h2><div class="footer-links"><a href="/services/">Services</a><a href="/wcps/">WCPS</a><a href="/zoho/">Zoho Partner</a><a href="/about/">About</a></div></section>
      <section><h2>Resources</h2><div class="footer-links"><a href="/resources/articles/">Articles</a><a href="/resources/faqs/">FAQs</a><a href="/resources/guides/">Guides</a></div></section>
      <section><h2>Contact</h2><div class="footer-links"><a href="mailto:info@widberz.com">info@widberz.com</a><a href="tel:+26876233264">+268 76 233 264</a><a href="/contact-us/">Get in touch</a></div></section>
    </div><div class="container copyright">© ${new Date().getFullYear()} Widberz Consulting. All rights reserved.</div></footer>`;
  document.querySelector('[data-site-header]')?.replaceWith(document.createRange().createContextualFragment(header));
  document.querySelector('[data-site-footer]')?.replaceWith(document.createRange().createContextualFragment(footer));
  const button = document.querySelector('.nav-toggle'); const links = document.querySelector('.nav-links');
  button?.addEventListener('click', () => { const open = links.classList.toggle('is-open'); button.setAttribute('aria-expanded', String(open)); });
})();
