function kreditHesabla(emekHaqqi, istediyinizMebleq, istediyinizMuddet) {
    // Maksimal muddet yoxlanishi
    if (istediyinizMuddet > 36) {
        return "Size bu şərtlərlə kredit düşmür";
    }

    // Faiz dərəcəsi hesablanması
    let faizDerecesi;
    if (istediyinizMuddet <= 12) {
        faizDerecesi = 0.13;
    } else if (istediyinizMuddet <= 24) {
        faizDerecesi = 0.15;
    } else {
        faizDerecesi = 0.17;
    }

    // Maksimal kredit mebleği yoxlanışı
    let maksimalMebleq = emekHaqqi * 10;
    if (istediyinizMebleq > maksimalMebleq) {
        return "Size bu şərtlərlə kredit düşmür";
    }

    // Ayliq odenişin emek haqqının 45% -ından cox olub olmadığının yoxlanışı
    let ayliqOdenish = (istediyinizMebleq * faizDerecesi) / istediyinizMuddet;
    if (ayliqOdenish > emekHaqqi * 0.45) {
        return "Size bu şərtlərlə kredit düşmür";
    }

    // Çıxış
    let result = ${istediyinizMebleq} AZN məbləği ${faizDerecesi * 100}% ilə ${istediyinizMuddet} ay müddətinə ayliq ${ayliqOdenish.toFixed(2)} manat ödənişlə verilir;
    return result;
}

// Nümunə istifadə

console.log(kreditHesabla(3222, 3223, 12));