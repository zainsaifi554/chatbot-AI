
//  alert("HELLO WELCOME TO 'YOUR'S APP'")


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

    } else if (["mein theek", "theek hon", "mein theek hon", "theek", "thk", "thk h", "thk hon", "allhamdullilah", "mast", "theek hon aap sunao"].indexOf(value.toLowerCase()) !== -1) {
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

    } else if (["mujhy entertain karo please","videos","send me videos", "mjy entertain karo plz", "mujhy entertain karo","mujhy entertainment do","entertain karo", "netertain kr k dikaio mujhy ", "entertain krna hai mujhy", "boryt k liye kch karo"].indexOf(value.toLowerCase()) !== -1) {
            // setTimeout(function () {
            //     list.innerHTML += "<li class='left-side'> <img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br><img src='images/cyborg.png' alt='' width='300px' height='250px'><br></li>";
            // }, 2000);
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
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <video src='images/5.mp4' width='350' height='250' controls></video><br></li>";
                typing.style.display = "none";
            }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <video src='images/4.mp4' width='350' height='250' controls></video><br></li>";
                typing.style.display = "none";
            }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <video src='images/3.mp4' width='350' height='250' controls></video><br></li>";
                typing.style.display = "none";
            }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <video src='images/2.mp4' width='350' height='250' controls></video><br></li>";
                typing.style.display = "none";
            }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> <video src='images/1.mp4' width='350' height='250' controls></video><br></li>";
                typing.style.display = "none";
            }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br>please see all videos<br></li>";
                typing.style.display = "none";
            }, 4000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br>maza nh aya tw please mujhy nichy type karen poetry k liye same text wording on below<br></li>";
                typing.style.display = "none";
            }, 4000);
                 setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br>please send me poetry<br></li>";
                typing.style.display = "none";
            }, 4000);
          

            userInput.value = "";
            
        } else if (["please send me poetry","poetry", "plz send me poetry", "send poetry", "poetry sunao", "you send me poetry"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/6.jpeg' alt='' width='300px' height='150px'></li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/7.jpeg' alt='' width='300px' height='350px'></li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/8.jpeg' alt='' width='300px' height='350px'></li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/9.jpeg' alt='' width='300px' height='350px'></li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/10.jpeg' alt='' width='300px' height='350px'></li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> <img src='images/11.jpeg' alt='' width='300px' height='350px'></li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> you will please see all images </li>";
                typing.style.display = "none";
            }, 2000);
            userInput.value = "";

        } else if (["allah hafiz","allahafiz", "allahhafiz", "allah  hafiz", "  allah hafiz", "khuda hafiz"].indexOf(value.toLowerCase()) !== -1) {
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> sorry mn apko abhi zyda kch entertain nh kr saka</li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> sorry or meri koi bt buri lagi ho tw mene kch glt keh diya ho to really really sorry</li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> naraz nh hona please bs abhi kch thk nh bs itna hi kr skta hon mn</li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> thanks for your pleasure ap sy bt kr k acha laga</li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> acha chalta hon khuwabon kyayalon sarkon ya raston mn milta hon</li>";
                typing.style.display = "none";
            }, 2000);
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br>dua mn yad rakhna allah hafiz...bs ab agy ab ap kch type nh krna wrna mn naraz ho jaonga </li>";
                typing.style.display = "none";
            }, 2000);
          }  else if (["hm", "hn", "han", "ham", ].indexOf(value.toLowerCase()) !== -1) {
                setTimeout(function () {
                    list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt=''style='border-radius: 50%;' width='30px' height='30px'><br> hm</li>";
                    typing.style.display = "none";
                }, 2000);

    } else {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> sorry main abhi nichy diye gaye text k jawab dy sakta hon</li>";
            typing.style.display = "none";
        }, 2000);
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'><img src='images/cyborg.png' alt='' style='border-radius: 50%;' width='30px' height='30px'><br> abhi in sbh k jawab de skta hon mn so please ask me about same like below <br> like this <br> assalamualikum <br> mujhy entertain karo <br> allah hafiz </li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";
    }



}
var profile = document.getElementById('profile')


