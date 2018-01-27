function addRemoveElements(arr = []) {

    let initialNumber = 1;
    let result = [];

    for (i = initialNumber; i <= arr.length; i++) {
        if (arr[i - 1] === 'add') {
            result.push(i);
        }else if(arr[i - 1] === 'remove' && result.length > 0){
            result.pop();
        }
    }
    if(result.length > 0){
        console.log(result.join('\n'))
    }else{
        console.log('Empty');
    }
}

//addRemoveElements(['add', 'add','add','add']);
// addRemoveElements(['add', 'add','remove','add','add']);
addRemoveElements(['remove', 'remove','remove']);