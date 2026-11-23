# JCIN UNILAG Website

The official website of JCIN UNILAG (Junior Chamber International Nigeria, University of Lagos).

It is a plain static site: HTML pages, one stylesheet, one script, and one content file. There is no build step. Vercel serves the files as they are.

## Updating the site (no coding needed)

Almost everything that changes lives in **one file**: `content/site-data.js`.

It holds the contact details, social links, recruitment dates, stats, events, testimonials, partners, the board (names, titles, photos, structure), past Presidents, projects and the menu photos. Instructions are written at the top of each section.

Rules of thumb:
- Change only the text between the quote marks.
- Keep the commas at the end of lines.
- Leave a value as `""` if you don't have it yet. The site shows a yellow **TBC** tag instead of a gap.

To edit on GitHub: open `content/site-data.js`, click the pencil icon, make your change, then click **Commit changes**. Vercel republishes the site automatically within a minute.

## Adding photos

| What | Folder | Size |
|---|---|---|
| Board headshots | `assets/board/<year>/` | Portrait 3:4, at least 600×800, same background for everyone |
| Menu photos | `assets/photos/` | Landscape 4:3 |
| Project photos | `assets/projects/` | Landscape 16:9 |

Upload the photo to the folder, then put its path in `content/site-data.js`, e.g. `photo: "assets/board/2026/president.jpg"`.

## New board year

In `content/site-data.js`, copy the current year's block under `boards`, rename it (e.g. `"2027/28"`), update the people and structure, and set `currentBoard` to the new year. The old board stays online as a tab.

## Files

```
index.html  about.html  leadership.html  projects.html
events.html join.html   partner.html     contact.html
content/site-data.js   ← edit this
assets/styles.css      ← design
assets/site.js         ← builds menus, footer and data-driven sections
assets/                ← logos, ripple graphic, photos
```

## Ownership

- GitHub organisation `jcin-unilag` and Vercel are owned by **jcinunilagprojects@gmail.com** (the LO), not by any one person.
- Website oversight: EVP office. Content updates: Media & Communications II.
- At handover, add the incoming EVP as an organisation Owner, then remove the outgoing one. Record logins in the handover note.

Brand rules follow the JCI Brand Guidelines v1.2 (Nov 2025).
