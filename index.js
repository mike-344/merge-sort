function mergeSort(arr){
    //sort left half
    //sort right half
    //merge the halfs

    if (arr.length === 1) return arr

   // let arr = [2,1,4,3]

    let leftHalf = mergeSort(arr.slice(0, Math.floor((arr.length)/2)))
    let rightHalf = mergeSort(arr.slice(Math.floor((arr.length)/2)))

    return merge(leftHalf, rightHalf)


}

function merge(left, right){
    let arr = []
    let count = 0;
    while(count < left.length || count < right.length){
    if (left[0] < right[0]){
        let item = left.shift()
        arr = arr.concat(item)
        count++
    } else{
        let item = right.shift()
        arr = arr.concat(item)
        count++
    }
}
    let remaining = left.length > 0 ? left : right
    arr = arr.concat(remaining)

    return arr

}






console.log(mergeSort([2,1,4,3]))