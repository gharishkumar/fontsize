
window.addEventListener("load",  function afterload(){
    var contents = document.getElementsByClassName('content');
    const size = [1,8/13,6/13,7/26,5/26,2/13,3/26,1/13,1/26]; //diff in font size in row
    var flag = true;
    if (localStorage.fontSize) {
        contents[0].style.fontSize = localStorage.fontSize;
    } else {
        contents[0].style.fontSize = '20px';
    }

    for(var i=1; i < contents.length; i++) {
        contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
    }
    document.body.style.display = 'flex';

    function generateRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    function generateRandomSmallLetter1() {
        const alphabet = "abcd"
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    function generateRandomSmallLetter2() {
        const alphabet = "efghijkl"
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    function generateRandomSmallLetter3() {
        const alphabet = "mnop"
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    function generateRandomNumer(max) {
        return Math.floor(Math.random() * max);
    }
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        console.log(e.keyCode);
        if (e.keyCode == '104') {
            // up arrow
            contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 10 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }
        else if (e.keyCode == '98') {
            // down arrow  
            contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 10 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }
        else if (e.keyCode == '100') {
            // left arrow
            contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 1 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }
        else if (e.keyCode == '102') {
            // right arrow
            contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 1 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }
        else if (e.keyCode == '39') {
            // right arrow
            for(var i=0; i < contents.length; i++) {
                var leters = contents[i].getElementsByTagName('div');
                for(var j=0; j < leters.length; j++) {
                    contents[i].getElementsByTagName('div')[j].textContent = generateRandomLetter();
                }
            }
        }
        else if (e.keyCode == '38') {
            // up arrow
            for(var i=0; i < contents.length; i++) {
                var leters = contents[i].getElementsByTagName('div');
                for(var j=0; j < leters.length; j++) {
                    contents[i].getElementsByTagName('div')[j].textContent = generateRandomSmallLetter1();
                }
            }
        }
        else if (e.keyCode == '40') {
            // down arrow
            for(var i=0; i < contents.length; i++) {
                var leters = contents[i].getElementsByTagName('div');
                for(var j=0; j < leters.length; j++) {
                    contents[i].getElementsByTagName('div')[j].textContent = generateRandomSmallLetter2();
                }
            }
        }
        else if (e.keyCode == '37') {
            // left arrow
            for(var i=0; i < contents.length; i++) {
                var leters = contents[i].getElementsByTagName('div');
                for(var j=0; j < leters.length; j++) {
                    contents[i].getElementsByTagName('div')[j].textContent = generateRandomSmallLetter3();
                }
            }
        }
        else if (e.keyCode == '17') {
            // ctrl
            for(var i=0; i < contents.length; i++) {
                var leters = contents[i].getElementsByTagName('div');
                for(var j=0; j < leters.length; j++) {
                    contents[i].getElementsByTagName('div')[j].textContent = generateRandomNumer(9);
                }
            }
        }
        else if (e.key == 'a') {
            for(var i=0; i < contents.length; i++) {
                contents[i].style.fontFamily = 'Eyechart';}
        }
        else if (e.key == 'z') {
            for(var i=0; i < contents.length; i++) {
                contents[i].style.fontFamily = 'Eyechart_Lea';}
        }
        else if (e.key == 's') {
            for(var i=0; i < contents.length; i++) {
                contents[i].style.fontFamily = 'SnellenMK';
                if(flag) {
                    // contents[i].style.fontSize = ((contents[i].style.fontSize.slice(0, -2) - 0) * 106/51 ) + 'px'; //diff in font size
                    flag = false;
                }
            }
        }
        else if (e.key == 'x') {
            for(var i=0; i < contents.length; i++) {
                contents[i].style.fontFamily = 'OpticalK';}
        }

}
});



