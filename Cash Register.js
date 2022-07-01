function checkCashRegister(price, cash, cid) {

    // mendefinisikan variabel-variabel yang digunakan
    let change;
    let list_amount_yang_mungkin = [];
    let jumlah_uang_dari_amount_yang_mungkin = 0;
    let list_pembantu = [];
    var uang_kembalian = cash - price;
    var uang_pengecekan = uang_kembalian;
    var uang_tersimpan = 0;
    let result = []
    const fruits = new Map([["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]);


    // menghitung jumlah uang di toko
    for (let i = 0;i < cid.length;i++) {
        uang_tersimpan += cid[i][1]
    }
    uang_tersimpan = Math.round(uang_tersimpan * 100) / 100;


    // mengecek amount mana saja yang bisa dijadikan kembalian
    for (const x of fruits.entries()) {
        if (x[1] <= uang_kembalian) {
            list_amount_yang_mungkin.push(x[0]);
            list_pembantu.push(x);
        }
    }


    // mengecek jumlah uang dari amount yang mungkin
    for (let i = 0; i < list_amount_yang_mungkin.length; i++) {
        jumlah_uang_dari_amount_yang_mungkin += cid[i][1];
    }


    // menyusun kembalian

    for (let i = list_pembantu.length; i > 0; i--) {
        if (uang_kembalian === 0) {
            break;
        }
        if (uang_kembalian > cid[i - 1][1]) {
            uang_kembalian = Math.round((uang_kembalian - cid[i - 1][1]) * 100) / 100;
            result.push([list_pembantu[i - 1][0], cid[i - 1][1]]);
        } else {
            let uang_perantara = uang_kembalian;
            if (uang_kembalian < list_pembantu[i - 1][1]) {
                continue;
            }
            uang_kembalian = Math.round((uang_kembalian % list_pembantu[i - 1][1]) * 100) / 100;
            result.push([list_pembantu[i - 1][0], Math.round((uang_perantara - uang_kembalian) * 100) / 100]);
        }
    }


    // mengecek selisih uang yang harus dikembalikan dengan uang yang disimpan
    if (uang_pengecekan > uang_tersimpan) {
        change = {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (uang_pengecekan > jumlah_uang_dari_amount_yang_mungkin) {
        change = {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (uang_pengecekan === uang_tersimpan) {
        change = {status: "CLOSED", change: cid};
    } else {
        change = {status: "OPEN", change: result}
    }

    return change;

};

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);