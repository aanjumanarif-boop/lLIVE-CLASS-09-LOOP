
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

  // for(let i=5; i<=1; i--){ //1 2 3 4 5 6 7 8
  //   console.log(i);
  //   console.log('hello world');

  // }
  // let marks = [10, 52, 60, 90, 85, 95, 40, 57, 30, 70];
  // console.log(marks);
  // console.log(marks[6]);
   let marks = [10, 52, 60, 90, 85, 95, 40, 57, 30, 70]; 
  for(let i=1; i<=9; i++){//0, 1, 2, 3, 4, 5, 6, 7, 8, 9
 
    if(marks[i]<0 || marks[i]>100){
    console.log('Invalid Marks');
     }
    else if(marks[i] >= 80){
    console.log(marks[i]+'=the grade is A+');

   }

   else if(marks[i] >=70) {
    console.log(marks[i]+'=the grade is A');
   }
   else if(marks[i] >=60){
    console.log(marks[i]+'=the grade is A-');
   }
   else if(marks[i] >=50){
    console.log(marks[i]+'=the grade is B');
   }

    else if(marks[i] >=40){
    console.log(marks[i]+'=the grade is C');
   }

     else if(marks[i] >=33){
    console.log(marks[i]+'=the grade is D');
   }

    else if(marks[i] >=30){
    console.log(marks[i]+'=the grade is F');
   }
 }
   

  