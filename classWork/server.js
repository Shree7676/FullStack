function print(data){
    console.log(data)
}

function display(res){
    res.json().then(print)
}

var sendObj ={
    method:"POST"
}

fetch("http://localhost:3000/bodyData", sendObj).then(display);