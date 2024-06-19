// 4. Տրված է ամբողջ թվերի հաջորդականություն: Արտածել այդ հաջորդականության  
// ա) առաջին միանիշ տարրը,  
// բ) 5-ին պատիկ վերջին տարրը,  
// գ) վերջին երկնիշ տարրը և դրան հաջորդող կենտ տարրերի քանակը,  
// դ) առաջին զույգ տարրը և դրան նախորդող տարրերի գումարը, 
//  ե) 7-ից մեծ վերջին տարրը և դրան նախորդող զույգ տարրերի արտադրյալը,  
// զ) մինչև առաջին բացասական տարրը եղած այն տարրերի քանակը, որոնք պատկանում են [0,20] միջակայքին,  
// է) [5,24] միջակայքում գտնվող առաջին տարրը և դրան հաջորդող տարրերի միջին թվաբանականը, 
//  ը) առաջին 0-ին հաջորդող 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում՝ արտածել -1):

// ա) առաջին միանիշ տարրը,  

// let arr = [12,30,-4,2]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 9 && arr[i] > -9){
//     console.log(arr[i])
//     break;
//     }
// }

// բ) 5-ին պատիկ վերջին տարրը,  
// let arr = [4, 1, 2, 19, 89, 7]
// function B4(arr){
// for(let i = arr.length-1; i >= 0; i-- ){
//     if(arr[i] % 5 == 0){
//         return arr[i]  
//     }
// }
// return -1
// }
// console.log(B4(arr))

// գ) վերջին երկնիշ տարրը և դրան հաջորդող կենտ տարրերի քանակը,  

// let arr = [2, -12, 6, -73, 7, 3, 9, 4]
// let count = 0;
// let index = arr.length-1;
// for(let i = arr.length-1; i >= 0; i--){
//     if((arr[i] > 9 && arr[i] <= 99) || (arr[i] > -99 && arr[i] < -10 )){
//         index = i;
//         console.log(arr[i]);
//         break;
//     }
// }
// console.log(index)
// for(let i = index+1; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//         count++
//     }
// }
// console.log(count)

// դ) առաջին զույգ տարրը և դրան նախորդող տարրերի գումարը, 

// let arr = [3, 7, 1, 8, 2]
// let sum = 0;
// let index = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         index = i;
//         console.log(arr[i]);
//         break;
//     }
// }
// for(let i = 0; i < index; i++){
//     sum = sum + arr[i]
// }
// console.log(sum)

//  ե) 7-ից մեծ վերջին տարրը և դրան նախորդող զույգ տարրերի արտադրյալը,  

// let arr = [2, 3, 6, 7, 8, 2, 4]
// let sum = 1;
// let index = arr.length-1;
// for(let i = arr.length-1; i >= 0; i--){
//    if(arr[i] > 7){
//     index = i;
//      console.log(arr[i]);
//     break;

//    }
// }
// for(let i = 0; i < index; i++){
//     if(arr[i] % 2 == 0){
//         sum = sum * arr[i]
//     }
// }
// console.log(sum)

// զ) մինչև առաջին բացասական տարրը եղած այն տարրերի քանակը, որոնք պատկանում են [0,20] միջակայքին,

// let arr = [3, 60, 4, -2, 7, -1]
// let count = 0;
// let index = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         index = i;
//         console.log(arr[i]);
//         break;
//     }
// }
// for(let i = 0; i < index; i++){
//     if(arr[i] >= 0 && arr[i] <= 20){
//         count++
//     }
// }
// console.log(count)

// verjin erkusy tnayin ///////////////

// է) [5,24] միջակայքում գտնվող առաջին տարրը և դրան հաջորդող տարրերի միջին թվաբանականը, 
//  ը) առաջին 0-ին հաջորդող 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում՝ արտածել -1):

// let arr = [3, 7, 5, 8, 1, 13, 23]
// let index = 0;
// let sum = 0;
// let count = 0;
// for(let i = 0; i < arr.length; i++){
// if(arr[i] >= 5 && arr[i] <= 24){
//      console.log(arr[i]);
//      index = i;
//      break;
// }
// }
// for(let i = index+1; i < arr.length; i++){
//     sum = sum + arr[i];
//     count++;
 
// }
// let mijin = sum / count;
// console.log(index)
// console.log(mijin)

//  ը) առաջին 0-ին հաջորդող 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում՝ արտածել -1):

let arr = [3, 1, 0, 114, 11, 5, 9, 4]
let index = 0;
let sum = 0;
if(arr.includes(0) == false ){
 console.log(-1);

}else {
    for(let i = 0; i < arr.length; i++){
       if(arr[i] == 0){
        index = i;
        console.log(arr[i])
        break;
       }
    }

    for(let i = index+1; i < arr.length; i++){
      
        let str = arr[i] + "";
        if(str[0] == "1"){
            sum = sum + arr[i]
        }
    }

    console.log(sum)
}``

