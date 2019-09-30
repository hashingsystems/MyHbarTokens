import Decimal from 'decimal.js';

export const tinyBarsToHBarsCurr = (tinyBars: number, deciPlace: number = 8) => {
    let hBarsUnit = tinyBarsToHBarsUnit(tinyBars).toFixed(deciPlace)
    let hBarCurrency = `${hBarsUnit} ℏ`
    return hBarCurrency
}

export const tinyBarsToHBarsUnit = (tinyBars) => {
    let a = parseInt(tinyBars) * 10000000000 // this is to ensure we catch 10 decimal places
    let b = a / 100000000
    let c = b / 10000000000
    if (c.toString().match(/[e-]/)) {
        return new Decimal(c.toFixed(8))
    }
    return new Decimal(c)
}


export const accountIdToEthAddress = (accountId) => {
    //Address default set to 40 digits
    let defaultAddress = '0000000000000000000000000000000000000000';
    let accountNo = accountId.split('.')[2];
    let etherAddressRaw = parseInt(accountNo).toString(16);
    let remainingCount = 40 - etherAddressRaw.length;
    let etherAddress = defaultAddress.substr(0, remainingCount) + etherAddressRaw + defaultAddress.substr(remainingCount + etherAddressRaw.length)
    return etherAddress;
}