let list1 = [1, 7, 102];
let list2 = [1, 3, 4];

const logger = (l1, l2, d) => console.log(d, l1, l2);

const mergeSorted = (arr1, arr2) => {
  const data = [];
  while (arr1.length && arr2.length) {
    switch (true) {
      case arr1[0] === arr2[0]:
        data.push(arr1[0]);
        arr1 = arr1.filter((num, index) => index !== 0);
        break;
      case arr1[0] < arr2[0]:
        data.push(arr1[0]);
        arr1 = arr1.filter((num, index) => index !== 0);
        break;
      case arr1[0] > arr2[0]:
        data.push(arr2[0]);
        arr2 = arr2.filter((num, index) => index !== 0);
        break;
      default:
        break;
    }
  }

  if (arr1.length) {
    for (let num of arr1) {
      data.push(num);
    }
  }
  if (arr2.length) {
    for (let num of arr2) {
      data.push(num);
    }
  }
  return data;
};

// console.log(mergeSorted(list1, list2));

const mergeSorted2 = (arr1, arr2) => {
  const data = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    switch (true) {
      case arr1[i1] === arr2[i2]:
        data.push(arr1[i1]);
        i1++;
        break;
      case arr1[i1] < arr2[i2]:
        data.push(arr1[i1]);
        i1++;
        break;
      case arr1[i1] > arr2[i2]:
        data.push(arr2[i2]);
        i2++;
        break;
      default:
        break;
    }
  }

  if (i1 < arr1.length) {
    for (let i = i1; i < arr1.length; i++) {
      data.push(arr1[i]);
    }
  }
  if (i2 < arr2.length) {
    for (let i = i2; i < arr2.length; i++) {
      data.push(arr2[i]);
    }
  }
  return data;
};

console.log(mergeSorted2(list1, list2));
