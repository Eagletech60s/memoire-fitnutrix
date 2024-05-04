// في ملف JavaScript (resultselction.js)
// تعريف المتغير الذي يحتوي على العداد
let counter = 0;

// حدث النقر (event listener) لعناصر علامة الإضافة
const addButtons = document.querySelectorAll(".food-container a");
addButtons.forEach(button => {
    button.addEventListener("click", function() {
        // زيادة قيمة العداد بمقدار واحد
        counter++;
        // عرض القيمة الجديدة في مستطيل العرض
        updateSelectionDisplay(counter);
    });
});

// دالة لتحديث محتوى مستطيل العرض بالقيمة الجديدة للعداد
function updateSelectionDisplay(value) {
    const selectionDisplay = document.getElementById("selection-display");
    selectionDisplay.textContent = `تم اختيار ${value} عنصر`;
}

