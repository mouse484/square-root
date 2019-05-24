value = 1.1;
const set = BigInt(2);

while (true) {
    value = Number(value);
    const str_val = String(value);
    const dot = (str_val.length - 1) - str_val.lastIndexOf(".");

    const int = BigInt(parseInt((value.toFixed(dot) + "").replace(".", "")));

    const power = BigInt(Math.pow(10, dot));

    const int_2 = int * int;

    const str_int = String(int);
    const int_last = str_int.slice(-1);
    const int_no_last = str_int.slice(0, str_int.length - 1);

    if (int_2 < set * power) {

        const int_last_plus = String(Number(int_last) + 1);
        value = Number(BigInt(int_no_last + int_last_puls) / power);

        console.log((int_no_last + int_last_puls) / power);

    }
    if (int_2 > set * power) {

        const int_last_minus = String(Number(int_last) - 1);
        value = Number(BigInt(int_no_last + int_last_minus + 1) / power);


    }
    //console.log(value);

}




