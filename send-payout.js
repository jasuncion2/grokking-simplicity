const affiliates = [{sales: 1,commission:200,bank_code:23}]

function figurePayout(affiliate) {
    let owed = affiliate.sales * affiliate.commission;
    if (owed > 100) { // don't send payout for less than 100
        // sendPayout(affiliate.bank_code, owed);
        console.log(affiliate.bank_code, owed);
    }

}

function affiliatePayout(affiliates) {
    affiliates.forEach(affiliate => figurePayout(affiliate))
}

function main() {
    affiliatePayout(affiliates)
}

main()