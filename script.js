const form = document.querySelector("form");

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if((height === " ") || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height.`;
  }
  else if((weight === " ") || weight < 0 || isNaN(weight)){
    results.innerHTML=`please give a valid weight.`;
  }
  else{
    const bmi= (weight/((height*height)/10000)).toFixed(2);
    if(bmi <18.6){
        results.innerHTML=`<span>Your BMI is ${bmi} and you are underweight</span>`;
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML=`<span>Congrats!! You are healthy <br> Your BMI is ${bmi}</span>`;
    }
    else if(bmi >= 25 && bmi <= 29.9){
        results.innerHTML=`<span>Your BMI is ${bmi} and you are overweight</span>`;
    }
    else{
        results.innerHTML=`<span>Your BMI is ${bmi} and you are obese</span>`;
    }
  }
})