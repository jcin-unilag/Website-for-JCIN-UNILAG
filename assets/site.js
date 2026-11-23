/* JCIN UNILAG website: shared layout and content rendering.
   Content lives in content/site-data.js. You shouldn't need to edit this file. */
(function () {
  var S = window.SITE || {};
  var page = document.body.getAttribute("data-page") || "home";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var TBC = '<span class="tbc">TBC</span>';
  function val(x) { return x ? esc(x) : TBC; }
  function linkOr(url, label, cls) {
    return url
      ? '<a href="' + esc(url) + '"' + (cls ? ' class="' + cls + '"' : "") + ">" + esc(label) + "</a>"
      : esc(label) + " " + TBC;
  }

  /* ---------- Header ---------- */
  /* Mega-menus, modelled on jci.cc: each column = heading + photo + links.
     Photos come from SITE.menuPhotos in content/site-data.js. */
  var nav = [
    ["about", "About", "about.html", [
      { t: "Who We Are", img: "whoWeAre", links: [["Mission and Vision", "about.html#mission"], ["Our Creed", "about.html#creed"], ["Our Purposes", "about.html#purposes"]] },
      { t: "Legacy", img: "legacy", links: [["Our History", "about.html#history"], ["Past Presidents", "leadership.html#past-presidents"], ["40th Anniversary", "index.html#anniversary"]] },
      { t: "Leadership", img: "leadership", links: [["Board of Directors", "leadership.html#board"], ["Organisational Structure", "leadership.html#structure"]] },
      { t: "Our Impact", img: "impact", links: [["Projects & Impact", "projects.html"], ["Member Stories", "join.html#stories"]] }
    ]],
    ["projects", "What We Do", "projects.html", [
      { t: "Individual Development", img: "individual", links: [["Trainings & Mentorship", "about.html#areas"]] },
      { t: "Business & Entrepreneurship", img: "business", links: [["Career Clinics & Internships", "about.html#areas"]] },
      { t: "Community Impact", img: "community", links: [["Our Projects", "projects.html"]] },
      { t: "International Cooperation", img: "international", links: [["Conventions & Competitions", "about.html#areas"]] },
      { t: "Meetings & Events", img: "events", links: [["Upcoming Events", "events.html"], ["Convention & Investiture", "events.html"], ["IMPACT Summit", "events.html"]] }
    ]],
    ["join", "Join", "join.html"],
    ["partner", "Partners", "partner.html"],
    ["events", "News & Events", "events.html"],
    ["contact", "Contact", "contact.html"]
  ];
  var sectionOf = { leadership: "about", events: "events" };
  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="wrap nav" id="nav">' +
      '<a href="index.html" class="logo" aria-label="JCI Nigeria UNILAG home"><img src="assets/logo.png" alt="JCI Nigeria UNILAG"></a>' +
      "<ul>" +
      nav.map(function (n) {
        var active = n[0] === page || sectionOf[page] === n[0];
        var link = '<a href="' + n[2] + '"' + (active ? ' class="active"' : "") + ">" + n[1] + (n[3] ? ' <span class="caret">▾</span>' : "") + "</a>";
        var photos = S.menuPhotos || {};
        var sub = n[3] ? '<div class="mega" style="--cols:' + n[3].length + '">' + n[3].map(function (c) {
          var ph = photos[c.img];
          return '<div class="mcol"><div class="mtitle">' + c.t + "</div>" +
            (ph ? '<img class="mimg" src="' + esc(ph) + '" alt="">' : '<div class="mimg mimg-empty"><span>Photo</span></div>') +
            "<ul>" + c.links.map(function (l) { return '<li><a href="' + l[1] + '"><span class="arr" aria-hidden="true"></span>' + l[0] + "</a></li>"; }).join("") + "</ul></div>";
        }).join("") + "</div>" : "";
        return '<li' + (n[3] ? ' class="has-dd"' : "") + ">" + link + sub + "</li>";
      }).join("") +
      "</ul>" +
      '<a href="join.html" class="btn btn-blue">Become a Member</a>' +
      '<button class="menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>' +
      "</div>";
    var btn = header.querySelector(".menu-btn");
    btn.addEventListener("click", function () {
      var el = document.getElementById("nav");
      var open = el.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    var c = S.contact || {};
    footer.innerHTML =
      '<div class="wrap"><div class="f-grid">' +
      '<div><img class="flogo" src="assets/logo-inverted.png" alt="JCI Nigeria UNILAG">' +
      '<p style="max-width:300px">The University of Lagos local organisation of JCI Nigeria. Developing leaders for a changing world.</p></div>' +
      '<div><h4>Explore</h4><ul>' +
      [["About", "about.html"], ["Leadership", "leadership.html"], ["Projects", "projects.html"], ["Events", "events.html"], ["Join", "join.html"], ["Partners", "partner.html"], ["Contact", "contact.html"]]
        .map(function (n) { return '<li><a href="' + n[1] + '">' + n[0] + "</a></li>"; }).join("") +
      "</ul></div>" +
      "<div><h4>Contact</h4><ul>" +
      "<li>" + (c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : "Email " + TBC) + "</li>" +
      (c.phone ? "<li>" + esc(c.phone) + "</li>" : "") +
      "<li>" + esc(c.address || "") + "</li>" +
      '<li><a href="contact.html">Send us a message</a></li></ul></div>' +
      "<div><h4>Follow</h4><ul>" +
      (S.socials || []).map(function (s) { return "<li>" + linkOr(s.url, s.name) + "</li>"; }).join("") +
      '</ul><h4 style="margin-top:20px">Network</h4><ul>' +
      "<li>" + linkOr((S.links || {}).jci, "JCI") + "</li>" +
      "<li>" + linkOr((S.links || {}).jciNigeria, "JCI Nigeria") + "</li></ul></div>" +
      "</div>" +
      '<div class="f-bottom"><span>© ' + new Date().getFullYear() + " JCIN UNILAG. Part of Junior Chamber International.</span>" +
      "<span>Built by the EVP office, 2026/27</span></div></div>";
  }

  /* ---------- Renderers: any element with data-render="name" ---------- */
  function initials(n) {
    if (!n) return "?";
    var parts = n.trim().split(/\s+/);
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }
  function avatar(b, size) {
    var cls = "hs " + (size || "");
    return b.photo
      ? '<img class="' + cls + '" src="' + esc(b.photo) + '" alt="' + esc(b.name || b.title) + '">'
      : '<div class="' + cls + ' hs-empty" aria-hidden="true">' + initials(b.name) + "</div>";
  }
  function nameOr(b) { return b.name ? esc(b.name) : "Name " + TBC; }
  function card(b) {
    return '<article class="bcard" id="' + esc(b.id) + '">' + avatar(b, "lg") + "<h3>" + nameOr(b) + '</h3><p class="btitle">' + esc(b.title) + "</p>" +
      (b.bio ? '<p class="bbio">' + esc(b.bio) + "</p>" : "") +
      (b.linkedin ? '<a class="link" href="' + esc(b.linkedin) + '">LinkedIn →</a>' : "") + "</article>";
  }
  function node(b, cls) {
    return '<a class="org-node ' + (cls || "") + '" href="#' + esc(b.id) + '">' + avatar(b, "sm") +
      "<span><b>" + (b.name ? esc(b.name) : "Name TBC") + "</b><em>" + esc(b.title) + "</em></span></a>";
  }

  var R = {
    stats: function () {
      return (S.stats || []).map(function (s) {
        return '<div class="stat"><div class="num' + (s.highlight ? " y" : "") + '">' + esc(s.value) + "</div><p>" + esc(s.label) + "</p></div>";
      }).join("");
    },
    events: function () {
      var tones = { teal: "teal", dark: "dark", blue: "" };
      return (S.events || []).map(function (e) {
        var img = e.image
          ? '<div class="ph photo" style="background:url(' + esc(e.image) + ') center/cover"></div>'
          : '<div class="ph ' + (tones[e.tone] || "") + '"><small>Photo: ' + esc(e.title) + "</small></div>";
        var date = (e.date ? esc(e.date) : "Date") + (e.dateConfirmed ? "" : " · " + TBC);
        var b = e.button || {};
        var button = b.url
          ? '<a href="' + esc(b.url) + '" class="btn btn-blue">' + esc(b.label) + "</a>"
          : '<span class="btn btn-blue" style="opacity:.55;cursor:default">' + esc(b.label || "Details") + "</span>";
        return '<article class="ev">' + img + '<div class="body"><div class="date">' + date + "</div><h3>" + esc(e.title) +
          "</h3><p>" + esc(e.description) + "</p>" + button + "</div></article>";
      }).join("");
    },
    testimonials: function () {
      var t = S.testimonials || [];
      if (!t.length) {
        t = [
          { quote: "A short quote from a member about what JCI changed for them goes here.", name: "Member name", detail: "Department · Year joined" },
          { quote: "A second member on the project they led, and the skill they gained from it.", name: "Member name", detail: "Department · Year joined" },
          { quote: "An alumnus on where JCIN UNILAG took them after graduation.", name: "Alumni name", detail: "Role · Class of" }
        ];
      }
      return t.map(function (x) {
        var av = x.photo ? '<img class="av" src="' + esc(x.photo) + '" alt="" style="object-fit:cover">' : '<div class="av"></div>';
        return '<figure class="t"><q>' + esc(x.quote) + '</q><figcaption class="who">' + av + "<div><b>" + esc(x.name) + "</b><span>" + esc(x.detail) + "</span></div></figcaption></figure>";
      }).join("");
    },
    testimonialsNote: function () {
      return (S.testimonials || []).length ? "" : '<p>Testimonials ' + TBC + " from Membership &amp; Growth. These are sample layouts only.</p>";
    },
    partners: function () {
      var p = S.partners || [];
      if (!p.length) {
        var out = "";
        for (var i = 0; i < 6; i++) out += "<div>Partner logo</div>";
        return out;
      }
      return p.map(function (x) {
        var inner = x.logo ? '<img src="' + esc(x.logo) + '" alt="' + esc(x.name) + '">' : esc(x.name);
        return '<div class="partner-logo">' + (x.url ? '<a href="' + esc(x.url) + '">' + inner + "</a>" : inner) + "</div>";
      }).join("");
    },
    partnersNote: function () {
      return (S.partners || []).length ? "Organisations we've worked with" : "Organisations we've worked with " + TBC;
    },
    milestones: function () {
      var m = S.milestones || [];
      if (!m.length) return '<div class="item"><b>Founded ' + val(S.foundedYear) + '</b><span>Milestones from our history ' + TBC + "</span></div>";
      return m.map(function (x) { return '<div class="item"><b>' + esc(x.year) + "</b><span>" + esc(x.text) + "</span></div>"; }).join("");
    },
    founded: function () { return val(S.foundedYear); },
    statsYear: function () { return esc(S.statsYear || ""); },
    impactReport: function () {
      var u = (S.links || {}).impactReport;
      return u ? '<a href="' + esc(u) + '" class="link">Read the ' + esc(S.statsYear) + " Impact Report →</a>"
               : '<span class="link">Read the ' + esc(S.statsYear) + " Impact Report →</span> " + TBC;
    },
    recruitWindow: function () { return val((S.recruitment || {}).window); },
    inductionDate: function () { return val((S.recruitment || {}).inductionDate); },
    dues: function () { return val((S.recruitment || {}).dues); },
    applyButton: function () {
      var r = S.recruitment || {}, u = (S.links || {}).application;
      if (!r.isOpen) return '<span class="btn btn-white" style="opacity:.7;cursor:default">Recruitment opens soon</span>';
      return u ? '<a href="' + esc(u) + '" class="btn btn-white">Apply to join</a>'
               : '<span class="btn btn-white" style="cursor:default">Apply to join</span><span style="font-size:14px;color:#E7F6FD">Application link ' + TBC + "</span>";
    },
    applyButtonBlue: function () {
      var r = S.recruitment || {}, u = (S.links || {}).application;
      if (!r.isOpen) return '<span class="btn btn-blue" style="opacity:.6;cursor:default">Recruitment opens soon</span>';
      return u ? '<a href="' + esc(u) + '" class="btn btn-blue">Apply now</a>'
               : '<span class="btn btn-blue" style="cursor:default">Apply now</span> <span style="font-size:14px;color:#BEBBD3">Link ' + TBC + "</span>";
    },
    email: function () {
      var e = (S.contact || {}).email;
      return e ? '<a href="mailto:' + esc(e) + '">' + esc(e) + "</a>" : TBC;
    },
    phone: function () { return val((S.contact || {}).phone); },
    projectsEmail: function () {
      var e = (S.contact || {}).projectsEmail;
      return e ? '<a href="mailto:' + esc(e) + '">' + esc(e) + "</a>" : TBC;
    },
    address: function () { return esc((S.contact || {}).address || ""); },
    pastPresidents: function () {
      var list = S.pastPresidents || [];
      if (!list.length) return '<p style="color:var(--grey)">List ' + TBC + "</p>";
      return list.map(function (p) {
        return '<div class="pp"><div class="pp-year">' + val(p.year) + "</div><div><b>" + esc(p.name) + "</b>" +
          (p.theme ? "<span>“" + esc(p.theme) + "”</span>" : "") + "</div></div>";
      }).join("");
    },
    socialsList: function () {
      return (S.socials || []).map(function (s) { return linkOr(s.url, s.name); }).join(" &nbsp;·&nbsp; ");
    }
  };
  document.querySelectorAll("[data-render]").forEach(function (el) {
    var fn = R[el.getAttribute("data-render")];
    if (fn) el.innerHTML = fn();
  });


  /* ---------- Leadership page (tabs by board year) ---------- */
  function portrait(p) {
    return p && p.photo
      ? '<img class="portrait" src="' + esc(p.photo) + '" alt="' + esc(p.name || p.title) + '">'
      : '<div class="portrait portrait-empty" aria-hidden="true">' + initials(p && p.name) + "</div>";
  }
  function person(p) {
    if (!p) return "";
    return '<figure class="bd" id="p-' + esc(p.id) + '">' + portrait(p) + "<figcaption><b>" + nameOr(p) + "</b><span>" + esc(p.title) + "</span>" +
      (p.linkedin ? '<a class="link" href="' + esc(p.linkedin) + '">LinkedIn</a>' : "") + "</figcaption></figure>";
  }
  function renderBoard(year) {
    var B = (S.boards || {})[year] || {};
    var people = B.people || [];
    var get = function (id) { return people.filter(function (x) { return x.id === id; })[0]; };
    var boardEl = document.getElementById("board-panel");
    var structEl = document.getElementById("structure-body");
    if (!boardEl) return;

    document.querySelectorAll("[data-year-label]").forEach(function (el) { el.textContent = year; });

    if (!people.length) {
      boardEl.innerHTML = '<h2 class="bp-title">' + esc(year) + ' Board of Directors</h2><p class="bp-empty">This board list is coming soon. ' + TBC + "</p>";
      if (structEl) structEl.innerHTML = '<p class="bp-empty">Structure for ' + esc(year) + " coming soon.</p>";
      return;
    }

    // ---- Board panel: president alone, then everyone else in rows ----
    var lt = B.leadershipTier || {};
    var pres = get(lt.lead || "president");
    var rest = people.filter(function (x) { return x !== pres; });
    boardEl.innerHTML =
      '<h2 class="bp-title">' + esc(year) + " Board of Directors</h2>" +
      (B.theme ? '<div class="bp-theme"><span>' + esc(B.theme) + "</span>" + (B.themeLine ? "<em>" + esc(B.themeLine) + "</em>" : "") + "</div>" : "") +
      '<div class="bp-pres">' + person(pres) + "</div>" +
      '<div class="bp-grid">' + rest.map(person).join("") + "</div>";

    // ---- Structure: leadership tier + numbered office panels ----
    if (!structEl) return;
    var tier = "";
    if (lt.lead) {
      var L = get(lt.lead);
      tier = '<div class="tier-head"><div class="eyebrow" style="color:var(--blue)">Leadership tier</div>' +
        "<h2>The executive <strong>above the directorates</strong></h2><p>" + esc(lt.intro || "") + "</p></div>" +
        '<div class="tier-row">' +
          '<a class="tcard lead" href="#p-' + esc(L.id) + '"><span class="badge">Leads the board</span>' + avatar(L, "md") + "<b>" + (L.name ? esc(L.name) : "Name TBC") + "</b><span>" + esc(L.title) + "</span></a>" +
          (lt.others || []).map(function (id) {
            var x = get(id); if (!x) return "";
            return '<a class="tcard" href="#p-' + esc(x.id) + '">' + avatar(x, "md") + "<b>" + (x.name ? esc(x.name) : "Name TBC") + "</b><span>" + esc(x.title) + "</span></a>";
          }).join("") +
        "</div>";
    }
    var offices = (B.offices || []).map(function (o, i) {
      var count = (o.units || []).reduce(function (n, u) { return n + 1 + (u.team || []).length; }, 0);
      var lead = o.lead ? get(o.lead) : null;
      return '<div class="office' + (o.tbc ? " tbc-office" : "") + '">' +
        '<div class="office-head"><h3><span class="num">' + ("0" + (i + 1)).slice(-2) + "</span>" + esc(o.name) + (o.tbc ? " " + TBC : "") + "</h3>" + (count ? '<span class="chip">' + count + (count === 1 ? " person" : " people") + "</span>" : "") + "</div>" +
        (o.description ? '<p class="office-desc">' + esc(o.description) + "</p>" : "") +
        (lead ? '<div class="office-lead"><span class="mini-label">Supervised by</span>' + mini(lead) + "</div>" : "") +
        (!(o.units || []).length ? '<div class="unit"><div class="unit-row"><div class="ucard ghost">Directorates under this office ' + TBC + "</div></div></div>" : "") +
        (o.units || []).map(function (u) {
          var d = get(u.director);
          var team = (u.team || []);
          return '<div class="unit"><div class="unit-label">' + esc(u.name) + "</div>" + (u.description ? '<p class="unit-desc">' + esc(u.description) + "</p>" : "") +
            '<div class="unit-row">' +
              '<div class="ucard lead">' + avatar(d || {}, "sm") + '<div><span class="mini-label">' + (u.leadLabel || (d && /^chair/i.test(d.title) ? "Chair" : d && /director/i.test(d.title) ? "Director" : "Lead")) + '</span><b>' + (d && d.name ? esc(d.name) : "Name TBC") + "</b><em>" + esc(d ? d.title : "") + "</em></div></div>" +
              (team.length ? team.map(function (t) {
                var o2 = typeof t === "string" ? { name: t, role: "Member" } : t;
                return '<div class="ucard' + (o2.label ? " lead" : "") + '">' + avatar(o2, "sm") + "<div>" + (o2.label ? '<span class="mini-label">' + esc(o2.label) + "</span>" : "") + "<b>" + esc(o2.name) + "</b><em>" + esc(o2.role || "Member") + "</em></div></div>";
              }).join("") : (u.solo ? "" : '<div class="ucard ghost">Team members ' + TBC + "</div>")) +
            "</div></div>";
        }).join("") +
      "</div>";
    }).join("");
    structEl.innerHTML = tier +
      '<div class="tier-head" style="margin-top:72px"><div class="eyebrow" style="color:var(--blue)">Directorates</div><h2>' + (B.offices || []).length +
      " offices, <strong>one LO</strong></h2><p>Each office lists who supervises it, then each directorate's director and team.</p></div>" + offices +
      '<div class="org-foot"><b>Project Chairs &amp; Co-chairs</b> lead individual projects under their directors. <b>Members</b> serve in directorates, committees and project teams.</div>';
  }
  function mini(p) {
    return '<a class="ucard" href="#p-' + esc(p.id) + '">' + avatar(p, "sm") + "<div><b>" + (p.name ? esc(p.name) : "Name TBC") + "</b><em>" + esc(p.title) + "</em></div></a>";
  }
  var tabs = document.getElementById("year-tabs");
  if (tabs && S.boards) {
    var years = Object.keys(S.boards);
    var current = S.currentBoard || years[0];
    tabs.innerHTML = years.map(function (y) {
      return '<button type="button" role="tab" data-year="' + esc(y) + '" aria-selected="' + (y === current) + '">' + esc(y) + "</button>";
    }).join("");
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-year]"); if (!b) return;
      tabs.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      renderBoard(b.getAttribute("data-year"));
    });
    renderBoard(current);
  }


  /* ---------- Projects page ---------- */
  var catColor = { "Education": "var(--blue)", "Health": "#3E9F9F", "Community": "var(--navy)", "Membership & Experience": "#5B6FA8", "Legacy": "#B8920B" };
  var projGrid = document.getElementById("project-grid");
  var projFilters = document.getElementById("project-filters");
  if (projGrid && S.projects) {
    var cats = ["All"].concat(S.projects.map(function (p) { return p.category; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
    function drawProjects(cat) {
      var list = S.projects.filter(function (p) { return cat === "All" || p.category === cat; });
      projGrid.innerHTML = list.map(function (p) {
        var img = p.photo
          ? '<div class="pc-img" style="background-image:url(' + esc(p.photo) + ')"></div>'
          : '<div class="pc-img pc-empty" style="--c:' + (catColor[p.category] || "var(--blue)") + '"><span>Photos ' + TBC + "</span></div>";
        return '<article class="pc">' + img + '<div class="pc-body"><div class="pc-meta"><span class="pc-cat" style="--c:' + (catColor[p.category] || "var(--blue)") + '">' + esc(p.category) + "</span><span>" + esc(p.date || p.year) + "</span></div>" +
          "<h3>" + esc(p.name) + "</h3><p>" + esc(p.summary) + "</p>" +
          (p.stat ? '<div class="pc-stat"><b>' + esc(p.stat) + "</b><span>" + esc(p.statLabel) + "</span></div>" : "") +
          (p.chairs ? '<div class="pc-chairs">Led by ' + esc(p.chairs) + "</div>" : "") + "</div></article>";
      }).join("");
    }
    if (projFilters) {
      projFilters.innerHTML = cats.map(function (c, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>"; }).join("");
      projFilters.addEventListener("click", function (e) {
        var b = e.target.closest("button[data-cat]"); if (!b) return;
        projFilters.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        drawProjects(b.getAttribute("data-cat"));
      });
    }
    drawProjects("All");
  }
  var upEl = document.getElementById("upcoming-projects");
  if (upEl && S.upcomingProjects) {
    upEl.innerHTML = S.upcomingProjects.map(function (g) {
      return '<div class="up-col"><div class="up-cat" style="--c:' + (catColor[g.category] || "var(--blue)") + '">' + esc(g.category) + "</div><ul>" +
        g.names.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
  }

  /* ---------- Forms ---------- */
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var key = form.getAttribute("data-form");
    var endpoint = (S.forms || {})[key];
    var status = form.querySelector(".form-status");
    function show(cls, msg) { status.className = "form-status show " + cls; status.textContent = msg; }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (!endpoint) {
        show("warn", "This form isn't connected yet. Once it's live, your message will go straight to the right team.");
        return;
      }
      var btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error();
          form.reset();
          show("ok", "Thank you. Your message has been sent and the team will reply within 3 working days.");
        })
        .catch(function () {
          var e = (S.contact || {}).email;
          show("err", "Sorry, something went wrong." + (e ? " Please email us at " + e + "." : " Please try again later."));
        })
        .then(function () { btn.disabled = false; });
    });
  });
})();
