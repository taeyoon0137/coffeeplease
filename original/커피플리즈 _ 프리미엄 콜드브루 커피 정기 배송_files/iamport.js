

function requestPayment(pg, payment_method_id, email, name, tel, addr, postcode, callback) {

    const merchant_uid = 'merchant_' + new Date().getTime();
    var redirectPath = window.location.origin + '/paymentredirect?pg=' + pg + '&payment_method_key=' + payment_method_id;
    var pay_method = "card";
    if (pg === 'kakaopay'){
        pay_method = "kakaopay";
    }
    IMP.request_pay({ // param
        pg: pg,
        pay_method: pay_method, // "card"만 지원됩니다
        merchant_uid: merchant_uid, // 빌링키 발급용 주문번호
        customer_uid: payment_method_id, // 카드(빌링키)와 1:1로 대응하는 값
        name: "최초인증결제",
        amount: 0, // 0 으로 설정하여 빌링키 발급만 진행합니다.
        buyer_email: email,
        buyer_name: name,
        buyer_tel: tel,
        buyer_addr: addr,
        buyer_postcode: postcode,
        m_redirect_url: redirectPath,
    }, function (rsp) { // callback
        callback(rsp)
    });

}
