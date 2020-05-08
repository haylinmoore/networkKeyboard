setInterval(function(){
    axios.get('http://127.0.0.1:8080/read')
    .then(function (response) {
        document.getElementById("keyboard").value = response.data;
    });
}, 1000);