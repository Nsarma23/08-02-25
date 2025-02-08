const btnElement1 = document.getElementById('firstOne');
if (btnElement1) {
    btnElement1.onclick = function() {
        alert("YAYY! Congrats! You're set for life!! \n Happy Propose Day<333");
    };
} else {
    console.log('Button with id "firstOne" not found');
}

const btnElement2 = document.getElementById('secondOne');
if (btnElement2) {
    btnElement2.onclick = function() {
        alert("Uh oh! Wrong answer, try again and maybe you'll get it right (;");
    };
} else {
    console.log('Button with id "secondOne" not found');
}
