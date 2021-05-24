const sequenceSum = (begin, end, step) => {
  if (begin > step){
    return 0;
  }else{
    console.log(begin + end + step);
    return begin + end + step; }
  };

  sequenceSum(9,6,2);
console.log(sequenceSum(2,6,2));
