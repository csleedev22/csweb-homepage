(function () {
    'use strict';

    const currentParams = new URLSearchParams(window.location.search);

    const trackingKeys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_keyword',
        'utm_content',
        'n_keyword',
        'n_rank',
        'n_ad_group',
        'n_ad',
        'n_keyword_id',
        'n_campaign_type',
        'n_media',
        'NaPm'
    ];

    // 무료체험 링크
    document.querySelectorAll('.js-demo-link').forEach(function (link) {
        let targetUrl;

        try {
            targetUrl = new URL(link.href);
        } catch (error) {
            return;
        }

        trackingKeys.forEach(function (key) {
            const value = currentParams.get(key);

            if (value) {
                targetUrl.searchParams.set(key, value);
            }
        });

        link.href = targetUrl.toString();

        link.addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                event: 'landing_cta_click',
                cta_type: 'demo',
                cta_content: targetUrl.searchParams.get('utm_content') || ''
            });
        });
    });

    // 도입 상담 링크
    document.querySelectorAll('.js-consult-link').forEach(function (link) {
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

            // 링크에 지정한 랜딩페이지별 utm_content 유지
            if (
                key === 'utm_content'
                && targetUrl.searchParams.has('utm_content')
            ) {
                return;
            }

            targetUrl.searchParams.set(key, value);
        });

        link.href = targetUrl.toString();

        link.addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                event: 'landing_cta_click',
                cta_type: 'consult',
                cta_content: targetUrl.searchParams.get('utm_content') || '',
                consultation_source: targetUrl.searchParams.get('source_page') || ''
            });
        });
    });

    // 모바일 내비게이션 닫기
    document.querySelectorAll('#landingNav .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            const nav = document.getElementById('landingNav');

            if (
                nav
                && nav.classList.contains('show')
                && window.bootstrap
            ) {
                window.bootstrap.Collapse
                    .getOrCreateInstance(nav)
                    .hide();
            }
        });
    });
})();