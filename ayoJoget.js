'use strict'
/*
=========
AYO JOGET
=========

Terdapat permainan ayo joget , dimana user memasukan input berupa arah sesuai dengan exercise yang ada,
untuk setiap arah pada userInput yang sesuai dengan exercise, maka score akan bertambah 10. Program juga akan menampilkan kategori berdasarkan persentase:
100 % - Perfect
80 % - 99% - Great
60 % - 79 % - Good
0 - 59 % - Bad
notes: Persentase didapat dari poin dibagi total poin yang bisa didapat dikali 100, pembulatan kebawah 

EXAMPLE:
var exercise = '<>^v>>>'
var userInput = '<>^^>><'

terdapat 2 output yang tidak sesuai, dan 5 output yang sesuai
maka program akan menampilkan:

Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good

RULES:
- DILARANG MENGGUNAKAN BUILT IN FUNCTION
- Math.floor diperbolehkan
*/

// var exercise = '<>^v>>>'
// var userInput = '<>^^>><'

// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good


var exercise = '<>^v'
var userInput = '<>^v'

// Anda mendapatkan score 40 / 40. Persentase: 100%, Kategori : Perfect


// var exercise = '<>^v'
// var userInput = '<'

// Input yang anda masukkan tidak lengkap!

// My code is below this line!
var hasil = 0;

for (let i = 0; i < exercise.length; i++) {
    if (exercise[i] === userInput[i]) {
        hasil++
    }
}

let score = `${hasil * 10} / ${exercise.length * 10}`
let presentase = Math.round((hasil *  10) / (exercise.length * 10) * 100)

let kategori;
if (presentase === 100) {
    kategori = 'Perfect'
} else if (presentase >= 80 && presentase <= 99) {
    kategori = 'Great'
} else if (presentase >= 60 && presentase <= 79) {
    kategori = 'Good'
} else if (presentase >= 0 && presentase <= 59) {
    kategori = 'Bad'
}

if (exercise.length === hasil) {
    console.log(`Anda mendapatkan score ${score}. Presentase: ${presentase}%, Kategori: ${kategori}`);
} else {
    console.log('Input yang anda masukkan tidak sesuai');
}
