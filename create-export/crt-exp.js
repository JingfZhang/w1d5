let dataList = [236, 747, 156, 898, 529, 79, 809, 380, 55, 557, 354, 519, 623, 827, 708, 677, 594, 29, 956, 668];

function ascendingSort(arr){
  return arr.sort(function(a, b){return a - b;});
};

module.exports = {
  storeNumber: function(number) {
    dataList.push(number);
    return number;
  },
  explain: function() {
    console.log("printing something");
  },
  sortDataList: function() {
    let sortedList = ascendingSort(dataList);

    console.log(sortedList);
  }
};