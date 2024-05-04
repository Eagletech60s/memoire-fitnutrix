document.addEventListener("DOMContentLoaded", function() {
    var reportButtons = document.querySelectorAll(".reject-btn");
    var disputeModal = document.getElementById("dispute-modal");
    var closeButton = document.querySelector(".close-button");

    reportButtons.forEach(function(button) {
        button.addEventListener("click", function() {
                  // إظهار نموذج الإبلاغ عند النقر
            disputeModal.style.display = "block";
        });
    });

    // إخفاء نموذج الإبلاغ عند النقر على زر الإغلاق
    closeButton.addEventListener("click", function() {
        disputeModal.style.display = "none";
    });

    // إخفاء نموذج الإبلاغ عند النقر خارج المربع
    window.onclick = function(event) {
        if (event.target == disputeModal) {
            disputeModal.style.display = "none";
        }
    };
});