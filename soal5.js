// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****
let input = 5;

for(i=1; i<=input; i++){
    let output = "";
    for(j=0; j<i; j++){
        output += "*"
    }
    console.log(output)
}