
/*Q1)Write a program in javascript to create a pattern like this
               1
            1  2  3
         1  2  3  4  5
      1  2  3  4  5  6  7 
    1 2  3  4  5  6  7  8  9 */ 

let row = 5;
let space = row*2-2;
for(let i = 1;i<=row;i++){
    let str ="";
    for(let k = 1;k <= space; k++){
        str += " ";
    }
    for(let j = 1; j < 2*i; j++){
        str += j + " ";
    }
    console.log(str);
    space -= 2;
}

//Q2.) Write a program in javascript to create a pattern like this

                //         1
                //       1 2
                //     1 2 3
                //   1 2 3 4
                // 1 2 3 4 5 
                //   1 2 3 4 
                //     1 2 3
                //       1 2
                //         1        

// let row = 5;
// let space = row*2-2;
// for(let i = 1;i<=row;i++){
//     let str ="";
//     for(let k = 1;k <= space; k++){
//         str += " ";
//     }
//     for(let j = 1; j <= i; j++){
//         str += j + " ";
//     }
//     console.log(str);
//     space -= 2;
// }
// console.log(space);
// space=2;
// for(let i = row -1;i>=1;i--){
//     let str ="";
//     for(let k = 1;k <= space; k++){
//         str += " ";
//     }
//     for(let j = 1; j <= i; j++){
//         str += j + " ";
//     }
//     console.log(str);
//     space +=2;
// }


/*Q4.) Write a program in javascript to create a pattern like this

            1 2 3 4 5 6 7 8 9
              1 2 3 4 5 6 7 
                1 2 3 4 5 
                  1 2 3 
                    1               */
// let row = 5;
// let space = 0;
// for(let i = row;i>=1;i--){
//     let str ="";
//     for(let k = 1;k <= space; k++){
//         str += " ";
//     }
//     for(let j = 1; j < 2*i; j++){
//         str += j + " ";
//     }
//     console.log(str);
//     space += 2;
// }                    


// Q3.) Write a program in javascript to create a pattern like this

// let row = 5;

// for(let i = 1;i<=row;i++){
//     let str ="";
    
//     for(let j = i; j >=1; j--){
//         str += j + " ";
//     }
//     console.log(str);
// }
// for(let i = row -1;i>=1;i--){
//     let str ="";
//     for(let j = i; j >=1; j--){
//         str += j + " ";
//     }
//     console.log(str);
// }
