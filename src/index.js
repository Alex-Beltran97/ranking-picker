import SurveyPicker from "./models/surveyPicker";
import Ui from "./models/Ui";


const surveyPicker = new SurveyPicker();
const printUi = new Ui();

document.addEventListener("click", (e)=>{
  switch(e.target.id){
    case "submit":
      if(surveyPicker.submitSurvey()) printUi.printView(surveyPicker.submitSurvey());
    break;
    case "btn-ranking":
      surveyPicker.chooseRanking(e.target.value);
    break;
    case "return":
      printUi.refreshPage();
    break;
  }
});