(function() {
    const codes = [
      99,111,110,116,97,99,116,
      64,
      99,115,119,101,98,
      46,
      99,111,46,107,114
    ];
    const email = String.fromCharCode(...codes);
    const a = document.createElement('a');
    a.href = 'mailto:' + email;
    a.textContent = email;
    a.className = 'text-white text-decoration-underline';
    document.getElementById('email-obf').appendChild(a);
})();


function setPricing(plan) {
    const priceEl = document.getElementById('display-price');
    const periodEl = document.getElementById('display-period');
    const btnMonthly = document.getElementById('btn-monthly');
    const btnYearly = document.getElementById('btn-yearly');

    if (plan === 'yearly') {
        priceEl.innerText = '440,000';
        periodEl.innerText = '원 / 연';
        btnYearly.classList.add('active-toggle');
        btnYearly.classList.remove('text-muted');
        btnMonthly.classList.remove('active-toggle');
        btnMonthly.classList.add('text-muted');
    } else {
        priceEl.innerText = '44,000';
        periodEl.innerText = '원 / 월';
        btnMonthly.classList.add('active-toggle');
        btnMonthly.classList.remove('text-muted');
        btnYearly.classList.remove('active-toggle');
        btnYearly.classList.add('text-muted');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const currentParams = new URLSearchParams(window.location.search);

    const trackingKeys = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_keyword",
        "utm_term",
        "utm_content"
    ];

    function passTrackingParams(selector, preserveUtmContent) {
        document.querySelectorAll(selector).forEach(function (link) {
            let targetUrl;

            try {
                targetUrl = new URL(link.href);
            } catch (error) {
                return;
            }

            trackingKeys.forEach(function (key) {
                const value = currentParams.get(key);

                if (!value) {
                    return;
                }

                // 상담 링크에 페이지별 utm_content가 있으면 유지
                if (
                    preserveUtmContent
                    && key === "utm_content"
                    && targetUrl.searchParams.has("utm_content")
                ) {
                    return;
                }

                targetUrl.searchParams.set(key, value);
            });

            link.href = targetUrl.toString();
        });
    }

    // 무료체험 링크
    passTrackingParams(".js-demo-link", false);

    // 도입 상담 링크
    passTrackingParams(".js-consult-link", true);
});