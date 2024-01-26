document.addEventListener('DOMContentLoaded', function() {
    // 無料体験ボタンを取得
    var freeTrialButton = document.getElementById('free-trial-button');

    // ボタンのクリックイベントをリスン
    freeTrialButton.addEventListener('click', function() {
        // お問い合わせセクションへスクロール
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});
