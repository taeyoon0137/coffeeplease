

function trackPaymentFacebook(price) {
    fbq('track', 'Purchase', {currency: "KRW", value: price});
}

function trackPaymentGoogle(price) {
    const transaction_id = "tr" + +(new Date());
    gtag('event', 'payment', {
        'event_category': 'request_payment',
        'event_label': price,
    });

    gtag('event', 'purchase', {
        "transaction_id": transaction_id,
        "affiliation": "coffeeplease",
        "value": price,
        "currency": "KRW",
        "tax": price * 0.133,
        "shipping": 0,
        "items": [],
    });

    gtag('event', 'conversion', {
        'send_to': 'AW-701281062/yz7gCNTqzLABEKbmss4C',
        'transaction_id': price
    });
}