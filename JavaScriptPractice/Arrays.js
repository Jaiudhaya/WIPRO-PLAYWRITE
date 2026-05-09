//1.smallest and largest in an array
let arr = [3, 1, 4, 1, 5, 9];
let smallest = arr[0];
let largest = arr[0];
for (let i=0; i<arr.length; i++){
    if (smallest > arr[i]) {
        smallest = arr[i];
    }
    if (largest < arr[i]) {
        largest = arr[i];
    } 
}
console.log("Smallest:",smallest, "Largest:",largest);

//2.Remove duplicates
let arr1 = [1, 2, 3, 2, 4, 1];
let unique = [];
for (let i=0; i<arr1.length; i++){
    if (unique.indexOf(arr1[i])==-1){
        unique.push(arr1[i]);
    }
}
console.log(unique);

//3.sort without sort method
let arr2 = [5, 2, 9, 1, 5, 6];
for (let i=0; i<arr2.length; i++){ //outer loop for passes
    for (let j=0; j<arr2.length - i - 1; j++){ //inner loop for comparisons
        if (arr2[j] > arr2[j+1]){
            let temp = arr2[j];
            arr2[j] = arr2[j+1];
            arr2[j+1] = temp;
        }
    }
}
console.log(arr2);

//4.Second largest
let arr3 = [3, 1, 4, 1, 5, 9];
arr3.sort((a,b) => b - a);
console.log("Second largest:", arr3[1]);

//5. Merge and remove duplicates
let arr4 = [1, 2, 3];
let arr5 = [3, 4, 5];
let merged = arr4.concat(arr5);
let uniqueMerged = []; 
for (let i=0; i<merged.length; i++){
    if(uniqueMerged.indexOf(merged[i])==-1){
        uniqueMerged.push(merged[i]);
    }
}
console.log(uniqueMerged);