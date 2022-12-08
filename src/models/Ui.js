const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
const container = document.getElementById('card-survey');

class Ui {
  printView(result) {
    container.innerHTML = "";
    const clone = template.cloneNode(true);
    clone.getElementById("answer").textContent = result;
    fragment.appendChild(clone);
    container.append(fragment);
  };
  
  refreshPage() {
    location.reload();
  };
};

export default Ui;