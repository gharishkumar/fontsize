
window.addEventListener("load",  function afterload(){
    var contents = document.getElementsByClassName('content');
    const size = [1,8/13,6/13,7/26,5/26,2/13,3/26,1/13,1/26];
    
    if (localStorage.fontSize) {
        contents[0].style.fontSize = localStorage.fontSize;
    } else {
        contents[0].style.fontSize = '20px';
    }

    for(var i=1; i < contents.length; i++) {
        contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
    }
    document.body.style.display = 'flex';
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '38') {
            // up arrow
            contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 10 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }
        else if (e.keyCode == '40') {
            // down arrow  
            contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 10 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }
        else if (e.keyCode == '37') {
            // left arrow
            contents[0].style.fontSize = (contents[0].style.fontSize.slice(0, -2) - 1 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }
        else if (e.keyCode == '39') {
            // right arrow
            contents[0].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) + 1 ) + 'px';

            for(var i=1; i < contents.length; i++) {
                contents[i].style.fontSize = ((contents[0].style.fontSize.slice(0, -2) - 0) *size[i] ) + 'px';
            }
            console.log(contents[0].style.fontSize);
            localStorage.setItem("fontSize", contents[0].style.fontSize);
        }

}
});
