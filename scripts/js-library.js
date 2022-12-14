function serverGet(url, data, doFunction) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(this.readyState == 4) {
            doFunction(this.responseText);
        }
    }
    
    var dataString = "";
    for(var key in data) {
        dataString += key + "=" + data[key] + "&";
    }
    request.open("GET", url + "?" + dataString);
    request.send();
}

function getId(id) {
    return document.getElementById(id);
}

function getClass(className) {
    var array = document.getElementsByClassName(className);
    var newArray = [];

    for(var element of array) {
        newArray.push(element);
    }
    return newArray;
}
function isStringEmpty(string) {
    for(var i = 0; i < string.length; i++) {
        var ch = string.charAt(i);
        if(ch != " " || ch != "\t") return false;
    } 
    return true;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}