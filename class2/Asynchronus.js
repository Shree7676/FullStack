// ************************************************ Synchronous Callback ************************************************ 
    // Write a function 'higherOrder' that takes a callback function as an argument. 
    // Inside 'higherOrder', call the callback function synchronously.

function higherOrder(callback) {
    callback();
}

// ************************************************ Asynchronous Callback ************************************************ 
    // Write a function 'higherOrderAsync' that takes a callback function as an argument. 
    // Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after 
    // a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).

function anyFnc(){
    console.log("you entered call back function")
}

function higherOrderAsync(callback) {
    setTimeout(callback,1000);
}


// ************************************************ Array Map with Callback ************************************************ 
    // Implement a function 'mapArray' that takes an array and a callback function as arguments. 
    // 'mapArray' should apply the callback function to each element of the array and return a new 
    // array with the modified values.

function addTwo(x){
    return x + 2;
}

function mapArray(arr,callback){
    for (let x=0; x<arr.length;x++){
        arr[x]=callback(arr[x])
    }
    return arr;
}

// console.log(mapArray([1,2,3],addTwo))

// ************************************************ Array Filter with Callback ************************************************ 
    // Write a function 'filterArray' that takes an array and a callback function as arguments. 
    // 'filterArray' should filter the elements of the array based on the condition specified by the 
    // callback function and return a new array with the filtered elements.

function evenNum(x){
    if (x%2==0){
        return true
    }else{
        return false
    }
}
function filterArray(arr,callback){
    return arr.filter(callback);
}

// console.log(filterArray([1,2,3,4,5],evenNum))

// ************************************************ File Processing with Callback ************************************************ 
    // Write a function 'readFileCallback' that takes a filename and a callback function.
    // 'readFileCallback' should read the contents of the file asynchronously and pass the 
    // data to the callback function.

var fs =require('fs');

function fileread(err,data){
    console.log(err)
    console.log(data)
}

function readFileCallback(filename,callback){
    fs.readFile(filename, "utf-8", callback);
}

// readFileCallback("test.txt", fileread);

// ************************************************ Parallel Execution with Callbacks ************************************************ 
    // Implement a function 'parallelFileOperation' that returns an array of size 2 
    // with the first index containing the contents of the file 'a.txt' in UTF-8 encoding. 
    //     If `a.txt` doesn't exist, then throw an error. The second element of the array 
    // contains 1 if the text `Hello!` is successfully written to the file `b.txt` and 
    // 0 if the write operation fails
function parallelFileOperation(filename){

    var returnArr=[]

    function readFnc(err,data){
        if (err){
            throw err;
        }else{
            returnArr[0]=data;
            checkReturnArr();
        }
    }
    function writeFnc(err){
        if (err) {
            returnArr[1]=0;
            throw err;
        }else{
            returnArr[1] = 1;
            checkReturnArr();
        }
    }
      function checkReturnArr() {
        if (returnArr.length === 2) {
          console.log(returnArr);
        }
      }

    fs.readFile(filename, "utf-8", readFnc);
    fs.writeFile("test2.txt", "Hello", writeFnc);
}

// parallelFileOperation("test.txt");

// ************************************************ Sequential Execution with Callbacks ************************************************ 
    // Create a function 'series' that sequentially does the following.
    // 1. Read the contents of `a.txt` using UTF-8 encoding.
    // 2. Wait for 3 seconds.
    // 3. Write the contents of `a.txt` in `b.txt`.
    // 4. Remove any extra spacing from `a.txt`.
    // (refer to kirat's async 'file-cleaner' problem from week 1)
    // 5. delete the contents of `a.txt`.
    // 6. delete the contents of `b.txt`.

    function series(){
        var file1=""
        fs.readFile("test.txt", "utf-8",(err,data)=>{
            file1= data;
            console.log("Updated file1 variable")
            setTimeout(f1Tof2, 3000);
        });
        
        function f1Tof2(){
            fs.writeFile("test2.txt", file1,(err)=>{removeSpacing(file1)} );
        }

        function ntg(err){
            console.log("reached ntg")
        }


        function removeSpacing(stringData){
            var arrData = stringData.split(" ");
            var strData = arrData.join("");
            console.log(strData);
            fs.writeFile("test.txt", "", ntg);
            fs.writeFile("test2.txt", "", ntg);
        }
    }
// series();


// ************************************************ Error Handling with Callbacks ************************************************ 
    // Extend one of the previous problems (e.g., file processing or parallel execution) to handle errors. 
    // Implement error handling in the callback functions and ensure that errors are propagated and handled 
    // appropriately.

// ************************************************ Callback Hell ************************************************ 
    // Solve a problem using a nested structure of callback functions and then refactor the code to avoid the 
    // "callback hell" scenario. This will help you understand the challenges of callback-based asynchronous 
    // programming and how to write cleaner and more maintainable code. I

