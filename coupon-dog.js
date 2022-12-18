const coupons = [
    {code: "MAYDISCOUNT", rank: "good"},
    {code: "10PERCENT", rank: "bad"},
    {code: "PROMOTION45", rank: "best"},
    {code: "IHEARTYOU", rank: "bad"},
    {code: "GETADEAL", rank: "best"},
    {code: "ILIKEDISCOUNTS", rank: "good"}
];


const subscribers = [
    {email: "john@coldmail.com", rec_count: 16},
    {email: "sam@pmail.co", rec_count: 2},
    {email: "linda1989@oal.com", rec_count: 1},
    {email: "jan1940@ahoy.com", rec_count: 0},
    {email: "mrbig@pmail.co", rec_count: 25},
    {email: "lol@lol.lol", rec_count: 0},
];

let rank1 = "best";
let rank2 = "good";

function subCouponRank(subscriber) {
    if (subscriber.rec_count >= 10) {
        return "best";
    } else {
        return "good";
    }
}

function selectCouponsByRank(coupons, rank) {
    let ret = [];
    for (let c = 0; c < coupons.length; c++) {
        let coupon = coupons[c];
        if (coupon.rank === rank) {
            ret.push(coupon.code);
        }
    }
    return ret;
}

function emailForSubscriber(subscriber, goods, bests) {
    let rank = subCouponRank(subscriber);
    let coupons = ""
    if (rank === "best") {
        coupons = bests.join(", ")
    } else if (rank === "good") {
        coupons = goods.join(", ")
    }
    return {
        from: "newsletter@coupondog.co",
        to: subscriber.email,
        subject: `Your ${rank} weekly coupons inside`,
        body: `Here are the ${rank} coupons: ` + coupons
    }
}

function emailsForSubscribers(subscribers, goods, best) {
    let emails = [];
    for (let s = 0; s < subscribers.length; s++) {
        let subscriber = subscribers[s];
        let email = emailForSubscriber(subscriber, goods, best);
        emails.push(email);
    }
    return emails;
}

function fetchCouponFromDB() {
    return coupons;
}

function fetchSubscribersFromDB() {
    return subscribers;
}

function sendEmail(email) {
    console.log(email);
}

function sendIssue() {
    let coupons = fetchCouponFromDB();
    let goodCoupons = selectCouponsByRank(coupons, "good");
    let bestCoupons = selectCouponsByRank(coupons, "best");
    let subscribers = fetchSubscribersFromDB();
    let emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);
    emails.forEach((email) => sendEmail(email))
}


sendIssue();


