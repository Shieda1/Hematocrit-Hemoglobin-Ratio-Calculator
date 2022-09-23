// https://www.omnicalculator.com/health/hct-hgb

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const hctHgbratioRadio = document.getElementById('hctHgbratioRadio');
const hematocritRadio = document.getElementById('hematocritRadio');
const hemoglobinRadio = document.getElementById('hemoglobinRadio');

let hctHgbratio;
let hematocrit = v1;
let hemoglobin = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

hctHgbratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Hematocrit';
  variable2.textContent = 'Hemoglobin';
  hematocrit = v1;
  hemoglobin = v2;
  result.textContent = '';
});

hematocritRadio.addEventListener('click', function() {
  variable1.textContent = 'Hct/Hgb ratio';
  variable2.textContent = 'Hemoglobin';
  hctHgbratio = v1;
  hemoglobin = v2;
  result.textContent = '';
});

hemoglobinRadio.addEventListener('click', function() {
  variable1.textContent = 'Hct/Hgb ratio';
  variable2.textContent = 'Hematocrit';
  hctHgbratio = v1;
  hematocrit = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(hctHgbratioRadio.checked)
    result.textContent = `Hct/Hgb ratio = ${computehctHgbratio().toFixed(2)}`;

  else if(hematocritRadio.checked)
    result.textContent = `Hematocrit = ${computehematocrit().toFixed(2)}`;

  else if(hemoglobinRadio.checked)
    result.textContent = `Hemoglobin = ${computehemoglobin().toFixed(2)}`;
})

// calculation

function computehctHgbratio() {
  return Number(hematocrit.value) / Number(hemoglobin.value);
}

function computehematocrit() {
  return Number(hctHgbratio.value) * Number(hemoglobin.value);
}

function computehemoglobin() {
  return Number(hematocrit.value) / Number(hctHgbratio.value);
}