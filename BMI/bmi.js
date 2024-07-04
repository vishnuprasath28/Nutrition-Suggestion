function cal(e) {

    // Prevents the page from reload
    e.preventDefault();


    // Age, Height and Weight inputs
    const age = document.getElementById('age').value
    const height = document.getElementById('height').value
    const weight = document.getElementById('weight').value
    let str = "null"
    console.log(height)
    console.log(weight)
    const ans = (weight / (height * height)) * 10000;

    // Male or Female
    if (document.getElementById('m').checked || document.getElementById('f').checked) {
        if (age >= 20) {
            if (ans < 16.0) {
                str = "Severly UnderWeight";
            } else if (ans >= 16.0 && ans <= 18.4) {
                str = "UnderWeight";
            } else if (ans >= 18.5 && ans <= 24.9) {
                str = "Normal";
            } else if (ans >= 25.0 && ans <= 29.9) {
                str = "OverWeight";
            } else if (ans >= 30.0 && ans <= 34.9) {
                str = "Moderately Obese";
            } else if (ans >= 35.0 && ans <= 39.9) {
                str = "Severly Obese";
            } else {
                str = "Morbidly Obese";
            }
        } else {
            confirm("Your age must be above 19");
        }
    } else {
        confirm("Please Choose your Gender.!!");
    }


    // Final Output
    if (age >= 20 && (document.getElementById('m').checked || document.getElementById('f').checked)) {
        document.getElementById('answer').innerHTML = ans.toFixed(2) + " ( " + str + " )";
        console.log(typeof ans);
    }
}