/* 正式画像が提供されたら、下のnullを相対パスに置き換えます。
   例: logo: 'assets/buzzro-logo.png' */
const officialAssets = { logo: null, character: null };
for (const [name, path] of Object.entries(officialAssets)) {
  if (!path) continue;
  const slot = document.querySelector(`[data-asset="${name}"]`);
  const img = new Image();
  img.alt = name === 'logo' ? 'BUZZRO 公式ロゴ' : 'BUZZRO オリジナルキャラクター';
  img.onload = () => slot.replaceChildren(img);
  img.src = path;
}
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('pending');
    observer.observe(el);
  });
}
