function equalizeArray(arr) {
    let maxEqualNums = 0;
    
    for (var i=0; i < arr.length; i++){
        let equalNums = 0;
        for (var j=0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                equalNums++;
            }
        }
        maxEqualNums = Math.max(equalNums, maxEqualNums);
    }
    return (arr.length - maxEqualNums);
}
