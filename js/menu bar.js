// الحصول على زر القائمة
const menuButton = document.getElementById('menu-bar');

// الحصول على الـ <aside>
const aside = document.querySelector('aside');

// إضافة مستمع لحدث النقر
menuButton.addEventListener('click', function() {
  // التبديل بين عرض وإخفاء الـ <aside>
  aside.style.display = (aside.style.display === 'none') ? 'block' : 'none';
 
});
