
alert("HELLO WELCOME TO 'YOUR'S APP'")


var list = document.getElementById("list");
var typing = document.getElementById("typing");
var userInput = document.getElementById("userInput");

function checkEnterKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    var value = userInput.value.trim();
    if (value === "") {
        return;
    }
    list.innerHTML += "<li class='right-side'>" + value + "</li>";

    typing.style.display = "block";

    if (["salam bhai", "salam", "assalamualikum","assalam u alikum","assalamualaikum", "assalamualikum ", "salaam", "salaam bhai"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> Walikumassalam</li>";
        }, 2000);
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> Kese Ho?</li>";
            typing.style.display = "none";
        }, 4000);
        userInput.value = "";

    } else if (["mein theek", "theek hon", "mein theek hon", "theek", "allhamdullilah", "mast", "theek hon aap sunao"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> Mein aapki kia madad krskta hon?</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["admission lena hai", "admission lena tha", "mujhe smit mein admission chaiye", "admission chaiye", "admission chaiye hai", "admission chaiye tha"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> Apko kis field mein lena hai admission Web and Mobile App Development ya phir Graphic Designing ya phir Digital Marketing</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["web and mobile app development", "graphic designing", "digital marketing"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> Apna naam btaye</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["abdul rafay", "ghous ahmed","zain","muskan", "rafay", "ghous", "ahmed", "abdul"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> Apni qualification btaye</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["matric", "inter", "matriculation", "intermediate", "masters", "graduate"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> Apne father ka naam btaye</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["haji siddique", "siddique","zain","muskan", "ahmed", "babar", "amir", "shehzad", "ali"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> Apna cnic number dijiye</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["123", "124", "125", "126"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> Mene saari aapki details note krli hain yeh roll number bna kr derha hon admission hogya hai aapka mubarak ho " + (Math.random().toFixed(5)).replace('.', '') + "</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["thanks", "thnx", "jazakallah", "shukriya", "mehrbani"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> Koi baat nhi koi aur kaam ho tou btayega🤝</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["mujhy entertain karo please", "mjy entertain karo plz", "mujhy entertain karo","mujhy entertainment do","entertain karo", "netertain kr k dikaio mujhy ", "entertain krna hai mujhy", "boryt k liye kch karo"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> <img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br><img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
                typing.style.display = "none";
            }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
                typing.style.display = "none";
            }, 4000);
            // setTimeout(function () {
            //     list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
            //     typing.style.display = "none";
            // }, 4000);
            // setTimeout(function () {
            //     list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
            //     typing.style.display = "none";
            // }, 4000);
            // setTimeout(function () {
            //     list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
            //     typing.style.display = "none";
            // }, 4000);
            // setTimeout(function () {
            //     list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
            //     typing.style.display = "none";
            // }, 4000);
            // setTimeout(function () {
            //     list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
            //     typing.style.display = "none";
            // }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <video src='images/1.mp4' width='350' height='250' controls></video><br></li>";
                typing.style.display = "none";
            }, 4000);
            userInput.value = "";
            

    } else {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> Mazrat mein aapki baat smjh nhi saka</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";
    }



}
var profile = document.getElementById('profile')


