var SHC = document.querySelector('#history');
var iG = document.getElementById('input-get')
var bG = document.getElementById('btn-get')
var cN = '';

SH = JSON.parse(localStorage.getItem('search-history'));
if (SH === null) {
    SH = [];
}
displaySH();

function addToHistory(search) {
    SH.push(search);
  
    localStorage.setItem('search-history', JSON.stringify(SH));

    displaySH();
}

function displaySH() {
    SHC.innerHTML = '';
    for (let index = 0; index < SH.length; index++) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add('history-btn', 'btn-history')
        btn.setAttribute('data-search', SH[index]);
        btn.textContent = SH[index];
        
        
        SHC.append(btn);    
        }
}

function searchResult() {
    console.log(iG.value)
    cN = iG.value;
    var endUrl = ('https://api.openweathermap.org/data/2.5/forecast?q=' + cN + '&units=imperial&appid=a25a3219d52441f3c1980a1fba414db9');

    addToHistory(cN);

    fetch(endUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            

           
    
            document.getElementById('s-c').innerHTML = (data.city.name + ' (' + (dayjs().format('MM/DD/YYYY')) + ')');
          
            document.getElementById('c-t').innerHTML = ('Temp: ' + (data.list[0].main.temp + 'ºF'));
            document.getElementById('c-w').innerHTML = ('Wind: ' + (data.list[0].wind.speed) + ' MPH');
            document.getElementById('c-h').innerHTML = ('Humidity: ' + (data.list[0].main.humidity) + '%');

            document.getElementById('d1').innerHTML = (dayjs().add(1, 'day').format('MM/DD/YYYY'));
            document.getElementById('d1-t').innerHTML = ('Temp: ' + (data.list[8].main.temp) + 'ºF');
            document.getElementById('d1-w').innerHTML = ('Wind: ' + (data.list[8].wind.speed) + ' MPH');
            document.getElementById('d1-h').innerHTML = ('Humidity: ' + (data.list[8].main.humidity) + ' %');
       
            document.getElementById('d2').innerHTML = (dayjs().add(2, 'day').format('MM/DD/YYYY'));
            document.getElementById('d2-t').innerHTML = ('Temp: ' + (data.list[16].main.temp) + 'ºF');
            document.getElementById('d2-w').innerHTML = ('Wind: ' + (data.list[16].wind.speed) + ' MPH');
            document.getElementById('d2-h').innerHTML = ('Humidity: ' + (data.list[16].main.humidity) + ' %');
        
            document.getElementById('d3').innerHTML = (dayjs().add(3, 'day').format('MM/DD/YYYY'));
            document.getElementById('d3-t').innerHTML = ('Temp: ' + (data.list[24].main.temp) + 'ºF');
            document.getElementById('d3-w').innerHTML = ('Wind: ' + (data.list[24].wind.speed) + ' MPH');
            document.getElementById('d3-h').innerHTML = ('Humidity: ' + (data.list[24].main.humidity) + ' %');
      
            document.getElementById('d4').innerHTML = (dayjs().add(4, 'day').format('MM/DD/YYYY'));
            document.getElementById('d4-t').innerHTML = ('Temp: ' + (data.list[32].main.temp) + 'ºF');
            document.getElementById('d4-w').innerHTML = ('Wind: ' + (data.list[32].wind.speed) + ' MPH');
            document.getElementById('d4-h').innerHTML = ('Humidity: ' + (data.list[32].main.humidity) + ' %');
          
            document.getElementById('d5').innerHTML = (dayjs().add(5, 'day').format('MM/DD/YYYY'));
            document.getElementById('d5-t').innerHTML = ('Temp: ' + (data.list[39].main.temp) + 'ºF');
            document.getElementById('d5-w').innerHTML = ('Wind: ' + (data.list[39].wind.speed) + ' MPH');
            document.getElementById('d5-h').innerHTML = ('Humidity: ' + (data.list[39].main.humidity) + ' %');
        });
}




bG.addEventListener('click', searchResult);
