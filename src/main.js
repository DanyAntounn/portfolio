import { siteConfig, skillGroups, experience, projects, certifications } from "./data.js";

const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const safeExternalUrl = (url) => /^https?:\/\//i.test(url || "");
const assetUrl = (path) => path?.startsWith("/") ? `.${path}` : path;

function renderSkills() {
  document.querySelector("#skills-grid").innerHTML = skillGroups.map((group, index) => `
    <article class="skill-card reveal" style="--reveal-delay:${index * 70}ms">
      <div class="skill-card-heading"><span class="skill-icon" aria-hidden="true">${escapeHTML(group.icon)}</span><h3>${escapeHTML(group.title)}</h3></div>
      <ul class="skill-list">${group.skills.map((skill) => `<li>${escapeHTML(skill)}</li>`).join("")}</ul>
    </article>`).join("");
}

function renderExperience() {
  document.querySelector("#experience-list").innerHTML = experience.map((item, index) => `
    <article class="timeline-item reveal" style="--reveal-delay:${index * 90}ms">
      <div class="timeline-marker" aria-hidden="true"><span></span></div>
      <div class="timeline-date">${escapeHTML(item.period)}</div>
      <div class="experience-card"><div class="experience-top"><div><span class="experience-type">${escapeHTML(item.type)}</span><h3>${escapeHTML(item.role)}</h3><p class="experience-org">${escapeHTML(item.organization)}</p></div><span class="experience-index">0${index + 1}</span></div><p class="experience-description">${escapeHTML(item.description)}</p><div class="tag-list">${item.technologies.map((tech) => `<span class="tech-tag">${escapeHTML(tech)}</span>`).join("")}</div></div>
    </article>`).join("");
}

function projectLinks(project) {
  const links = [];
  if (safeExternalUrl(project.liveUrl)) links.push(`<a class="project-link project-link-primary" href="${escapeHTML(project.liveUrl)}" target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>`);
  if (safeExternalUrl(project.githubUrl)) links.push(`<a class="project-link" href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noreferrer">View code <span aria-hidden="true">↗</span></a>`);
  return links.length ? `<div class="project-links">${links.join("")}</div>` : `<p class="project-links-note">Links coming soon</p>`;
}

function renderProjects() {
  const sortedProjects = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  document.querySelector("#projects-grid").innerHTML = sortedProjects.map((project, index) => `
    <article class="project-card reveal ${project.featured ? "is-featured" : ""}" style="--reveal-delay:${index * 100}ms">
      <div class="project-image-wrap">
        <img class="project-image" src="${escapeHTML(assetUrl(project.image))}" alt="${escapeHTML(project.imageAlt || `${project.title} project screenshot`)}" loading="lazy" width="760" height="470" />
        <span class="project-image-placeholder"><span class="placeholder-mark">${escapeHTML(project.title.split(/\s+/).map((word) => word[0]).slice(0, 2).join(""))}</span><span>Add project screenshot<br /><small>${escapeHTML(project.image)}</small></span></span>
        ${project.featured ? '<span class="featured-label"><span>✦</span> FEATURED</span>' : ""}
        <span class="project-status">${escapeHTML(project.status || "Project")}</span>
      </div>
      <div class="project-content"><div class="project-category">${escapeHTML(project.category)}</div><h3>${escapeHTML(project.title)}</h3><p class="project-description">${escapeHTML(project.description)}</p>
        ${project.features?.length ? `<ul class="project-features">${project.features.map((feature) => `<li>${escapeHTML(feature)}</li>`).join("")}</ul>` : ""}
        <div class="project-tech">${project.technologies.map((tech) => `<span>${escapeHTML(tech)}</span>`).join("")}</div>${projectLinks(project)}
      </div>
    </article>`).join("");
  document.querySelectorAll(".project-image").forEach((image) => {
    image.addEventListener("error", () => image.closest(".project-image-wrap")?.classList.add("image-missing"), { once: true });
  });
}

function renderCertifications() {
  document.querySelector("#certifications-grid").innerHTML = certifications.map((item, index) => `
    <article class="cert-card reveal" style="--reveal-delay:${index * 80}ms"><span class="cert-icon" aria-hidden="true">${escapeHTML(item.icon)}</span><div><span class="cert-issuer">${escapeHTML(item.issuer)} CERTIFICATION</span><h3>${escapeHTML(item.title)}</h3></div><span class="cert-arrow" aria-hidden="true">↗</span></article>`).join("");
}

function applySocialLinks() {
  document.querySelectorAll('[data-social="github"], [data-social="linkedin"], [data-social="email"]').forEach((link) => {
    const kind = link.dataset.social;
    const value = siteConfig[kind];
    if (kind === "email") {
      const configured = value && value !== "YOUR_EMAIL_HERE" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (configured) link.href = `mailto:${value}`;
      else { link.href = "#contact"; link.classList.add("is-unconfigured"); link.setAttribute("aria-label", "Email address not configured yet"); }
      const label = link.querySelector("[data-email-label]");
      if (label) label.textContent = configured ? value : "YOUR_EMAIL_HERE";
      return;
    }
    if (safeExternalUrl(value)) link.href = value;
    else { link.hidden = true; link.style.display = "none"; }
  });
  const heroGithub = document.querySelector('.hero-socials [data-social="github"]');
  if (heroGithub?.hidden) document.querySelector(".hero-socials .social-separator").hidden = true;
}

function setupTheme() {
  const key = "dany-antoun-theme";
  const button = document.querySelector(".theme-toggle");
  const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  let theme = localStorage.getItem(key) || (systemLight ? "light" : "dark");
  const apply = () => {
    document.documentElement.dataset.theme = theme;
    button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    button.querySelector(".theme-icon").textContent = theme === "dark" ? "☼" : "☾";
  };
  apply();
  button.addEventListener("click", () => { theme = theme === "dark" ? "light" : "dark"; localStorage.setItem(key, theme); apply(); });
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  const closeMenu = () => { toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation menu"); links.classList.remove("is-open"); document.body.classList.remove("menu-open"); };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    links.classList.toggle("is-open", open); document.body.classList.toggle("menu-open", open);
  });
  links.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
  updateHeader(); window.addEventListener("scroll", updateHeader, { passive: true });

  const sections = [...document.querySelectorAll("main section[id]")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: "-38% 0px -52% 0px" });
  sections.forEach((section) => observer.observe(section));
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible")); return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); }
  }), { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!siteConfig.email || siteConfig.email === "YOUR_EMAIL_HERE" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(siteConfig.email)) {
      feedback.textContent = "Add your email address in src/data.js to enable this contact form.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nReply to: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    feedback.textContent = "Your email app should open with a draft. The website does not send or store messages.";
  });
}

renderSkills();
renderExperience();
renderProjects();
renderCertifications();
applySocialLinks();
setupTheme();
setupNavigation();
setupContactForm();
setupReveal();
document.querySelector("#year").textContent = new Date().getFullYear() === 2026 ? "2026" : new Date().getFullYear();
