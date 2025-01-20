function changeStuff() {
    var xhtpp1 = new XMLHttpRequest();
    xhtpp1.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById('testing').innerHTML = this.responseText;
        }
    };
    xhtpp1.open('GET', "ajaxChallengeTest.txt", true);
    xhtpp1.send();
}