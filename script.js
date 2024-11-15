function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1==="" || name2=="") {
        alert("Please enter both names");

    }
    else {
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `The love between ${name1} and ${name2} is ${lovePercentage}%`;
        result.style.display = "block";

        if(lovePercentage < 30) {
            result.innerHTML += "<br> Not a Great Match. Keep Looking"
       
        }else if(lovePercentage >= 30 && lovePercentage < 70){
            result.innerHTML += "<br> There is potential. Give it a try!"

        }else  {
            result.innerHTML += "<br> A Match Made in Heaven! <br> Love is in the air!"
        }
    }

}