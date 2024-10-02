document.addEventListener("turbo:load", function () {
  const slider = document.getElementById('slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  let currentIndex = 0;
  const slideInterval = 5000; // スライド間の間隔

  async function showNextSlide() {
    const currentSlide = slides[currentIndex];
    currentSlide.classList.add('animate-rgb_glitch'); // 現在のスライドにアニメーションを追加

    // アニメーションが終わるのを待つ
    await waitForAnimationEnd(currentSlide, 'animate-rgb_glitch');

    // アニメーションが終わったらスライドを切り替える
    currentSlide.classList.add('hidden'); // 現在のスライドを非表示
    currentIndex = (currentIndex + 1) % slides.length; // 次のスライドのインデックス
    slides[currentIndex].classList.remove('hidden'); // 次のスライドを表示
  }

  function waitForAnimationEnd(element, animationClass) {
    return new Promise((resolve) => {
      element.addEventListener('animationend', function handler() {
        element.classList.remove(animationClass); // アニメーションクラスを削除
        element.removeEventListener('animationend', handler); // イベントリスナーを削除
        resolve(); // プロミスを解決
      });
    });
  }

  // 初期状態でスライドを設定
  slides.forEach(slide => slide.classList.add('hidden'));
  slides[currentIndex].classList.remove('hidden');

  // スライドを切り替えるインターバルを設定
  setInterval(showNextSlide, slideInterval);
});
