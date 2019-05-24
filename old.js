const log = value => console.log(value);

a = 1.1;

c = 0;

while (true) {
    const str_a = String(a);

    for (i = 0; i > Number(str_a.length - 2); i++) {
        c += "0";
    }
    const a_flt = Number("1" + c);

    const a_set = a * a_flt;

    const a_2 = a_set * a_set;

    if (a_2 < 2 * a_flt) {
        log("no");
        const str_s = String(a_set);
        const a_last = str_s.slice(-1);
        const a_last_p = String(Number(a_last) + 1);
        const a_no_last = str_s.slice(0, str_s.length - 1);
        const add_a = Number(a_no_last + a_last_p);
        a = add_a;
        log(add_a);
    }
    if (a_2 > 2 * a_flt) {
        log("yes---------------");
        const str_s = String(a_set);
        const a_last = str_s.slice(-1);
        const a_last_m = String(Number(a_last) - 1);
        const a_no_last = str_s.slice(0, str_s.length - 1);
        const add_is = Number(a_no_last + a_last_m + 1);
        a = add_is;
        log(add_is);
        log("------------------");
    }
}
