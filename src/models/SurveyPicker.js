class SurveyPicker {
  selected = 0;

  chooseRanking(value){
    this.selected = value;
  };

  submitSurvey(){
    return this.selected;
  };
};

export default SurveyPicker;