// キャストカードの表示とスマホ用メニュー
// キャストの内容は data/cast.js で編集します。
const CAST = window.CAST || [];
const grid = document.getElementById("cast-grid");
grid.innerHTML = CAST.map(([id, ja, en, drink, word]) => `
  <article class="cast">
    <img src="img/cast-${id}.jpg" alt="${ja}" loading="lazy">
    <div class="cast-body">
      <div class="cast-name"><b>${ja}</b><span>${en}</span></div>
      <dl><dt>好きなドリンク</dt><dd>${drink}</dd></dl>
      <p class="say" style="margin:0">${word}</p>
    </div>
  </article>`).join("");

const btn = document.getElementById("menu-btn"), nav = document.getElementById("nav");
btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });
