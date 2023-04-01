var searchHistoryContainer = document.querySelector('#history');
var inputGet = document.getElementById('input-get')
var btnGet = document.getElementById('btn-get')
var cityName = '';

searchHistory = JSON.parse(localStorage.getItem('search-history'));
if (searchHistory === null) {
    searchHistory = [];
}
displaySearchHistory();

function addToHistory(search) {
    searchHistory.push(search);
  
    localStorage.setItem('search-history', JSON.stringify(searchHistory));

    displaySearchHistory();
}

function displaySearchHistory() {
    searchHistoryContainer.innerHTML = '';
    for (let index = 0; index < searchHistory.length; index++) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add('history-btn', 'btn-history')
        btn.setAttribute('data-search', searchHistory[index]);
        btn.textContent = searchHistory[index];
        
        
        searchHistoryContainer.append(btn);    
        }
}

function searchResult() {
    console.log(inputGet.value)
    var city = inputGet.value;
    cityName = inputGet.value;
    var endUrl = ('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=a25a3219d52441f3c1980a1fba414db9');

    addToHistory(cityName);

    fetch(endUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            function weatherIconMain() {

                if ((data.list[0].weather[0].main) === 'Clouds') {
                    document.getElementById('current-icon').innerHTML = ('&#9729;' + (data.list[0].weather[0].main));
                } else if ((data.list[0].weather[0].main) === 'Clear') {
                    document.getElementById('current-icon').innerHTML = ('&#9728;' + (data.list[0].weather[0].main));
                } else if ((data.list[0].weather[0].main) === 'Snow') {
                    document.getElementById('current-icon').innerHTML = ('&#9731;' + (data.list[0].weather[0].main));
                } else if ((data.list[0].weather[0].main) === 'Rain') {
                    document.getElementById('current-icon').innerHTML = ('&#9730;' + (data.list[0].weather[0].main));
                } else {
                    document.getElementById('current-icon').innerHTML = ('&#9749;' + (data.list[0].weather[0].main));
                }

                if ((data.list[8].weather[0].main) === 'Clouds') {
                    document.getElementById('day1-icon').innerHTML = ('&#9729;' + (data.list[8].weather[0].main));
                } else if ((data.list[8].weather[0].main) === 'Clear') {
                    document.getElementById('day1-icon').innerHTML = ('&#9728;' + (data.list[8].weather[0].main));
                } else if ((data.list[8].weather[0].main) === 'Snow') {
                    document.getElementById('day1-icon').innerHTML = ('&#9731;' + (data.list[8].weather[0].main));
                } else if ((data.list[8].weather[0].main) === 'Rain') {
                    document.getElementById('day1-icon').innerHTML = ('&#9730;' + (data.list[8].weather[0].main));
                } else {
                    document.getElementById('day1-icon').innerHTML = ('&#9749;' + (data.list[8].weather[0].main));
                }

                if ((data.list[16].weather[0].main) === 'Clouds') {
                    document.getElementById('day2-icon').innerHTML = ('&#9729;' + (data.list[16].weather[0].main));
                } else if ((data.list[16].weather[0].main) === 'Clear') {
                    document.getElementById('day2-icon').innerHTML = ('&#9728;' + (data.list[16].weather[0].main));
                } else if ((data.list[16].weather[0].main) === 'Snow') {
                    document.getElementById('day2-icon').innerHTML = ('&#9731;' + (data.list[16].weather[0].main));
                } else if ((data.list[16].weather[0].main) === 'Rain') {
                    document.getElementById('day2-icon').innerHTML = ('&#9730;' + (data.list[16].weather[0].main));
                } else {
                    document.getElementById('day2-icon').innerHTML = ('&#9749;' + (data.list[16].weather[0].main));
                }

                if ((data.list[24].weather[0].main) === 'Clouds') {
                    document.getElementById('day3-icon').innerHTML = ('&#9729;' + (data.list[24].weather[0].main));
                } else if ((data.list[24].weather[0].main) === 'Clear') {
                    document.getElementById('day3-icon').innerHTML = ('&#9728;' + (data.list[24].weather[0].main));
                } else if ((data.list[24].weather[0].main) === 'Snow') {
                    document.getElementById('day3-icon').innerHTML = ('&#9731;' + (data.list[24].weather[0].main));
                } else if ((data.list[24].weather[0].main) === 'Rain') {
                    document.getElementById('day3-icon').innerHTML = ('&#9730;' + (data.list[24].weather[0].main));
                } else {
                    document.getElementById('day3-icon').innerHTML = ('&#9749;' + (data.list[24].weather[0].main));
                }

                if ((data.list[32].weather[0].main) === 'Clouds') {
                    document.getElementById('day4-icon').innerHTML = ('&#9729;' + (data.list[32].weather[0].main));
                } else if ((data.list[32].weather[0].main) === 'Clear') {
                    document.getElementById('day4-icon').innerHTML = ('&#9728;' + (data.list[32].weather[0].main));
                } else if ((data.list[32].weather[0].main) === 'Snow') {
                    document.getElementById('day4-icon').innerHTML = ('&#9731;' + (data.list[32].weather[0].main));
                } else if ((data.list[32].weather[0].main) === 'Rain') {
                    document.getElementById('day4-icon').innerHTML = ('&#9730;' + (data.list[32].weather[0].main));
                } else {
                    document.getElementById('day4-icon').innerHTML = ('&#9749;' + (data.list[32].weather[0].main));
                }

                if ((data.list[39].weather[0].main) === 'Clouds') {
                    document.getElementById('day5-icon').innerHTML = ('&#9729;' + (data.list[39].weather[0].main));
                } else if ((data.list[39].weather[0].main) === 'Clear') {
                    document.getElementById('day5-icon').innerHTML = ('&#9728;' + (data.list[39].weather[0].main));
                } else if ((data.list[39].weather[0].main) === 'Snow') {
                    document.getElementById('day5-icon').innerHTML = ('&#9731;' + (data.list[39].weather[0].main));
                } else if ((data.list[39].weather[0].main) === 'Rain') {
                    document.getElementById('day5-icon').innerHTML = ('&#9730;' + (data.list[39].weather[0].main));
                } else {
                    document.getElementById('day5-icon').innerHTML = ('&#9749;' + (data.list[39].weather[0].main));
                }
            }

            weatherIconMain();
    
            document.getElementById('selected-city').innerHTML = (data.city.name + ' (' + (dayjs().format('MM/DD/YYYY')) + ')');
          
            document.getElementById('currnet-temp').innerHTML = ('Temp: ' + (data.list[0].main.temp + 'ºF'));
            document.getElementById('current-wind').innerHTML = ('Wind: ' + (data.list[0].wind.speed) + ' MPH');
            document.getElementById('current-humidity').innerHTML = ('Humidity: ' + (data.list[0].main.humidity) + '%');

            document.getElementById('day1').innerHTML = (dayjs().add(1, 'day').format('MM/DD/YYYY'));
            document.getElementById('day1-temp').innerHTML = ('Temp: ' + (data.list[8].main.temp) + 'ºF');
            document.getElementById('day1-wind').innerHTML = ('Wind: ' + (data.list[8].wind.speed) + ' MPH');
            document.getElementById('day1-humidity').innerHTML = ('Humidity: ' + (data.list[8].main.humidity) + ' %');
       
            document.getElementById('day2').innerHTML = (dayjs().add(2, 'day').format('MM/DD/YYYY'));
            document.getElementById('day2-temp').innerHTML = ('Temp: ' + (data.list[16].main.temp) + 'ºF');
            document.getElementById('day2-wind').innerHTML = ('Wind: ' + (data.list[16].wind.speed) + ' MPH');
            document.getElementById('day2-humidity').innerHTML = ('Humidity: ' + (data.list[16].main.humidity) + ' %');
        
            document.getElementById('day3').innerHTML = (dayjs().add(3, 'day').format('MM/DD/YYYY'));
            document.getElementById('day3-temp').innerHTML = ('Temp: ' + (data.list[24].main.temp) + 'ºF');
            document.getElementById('day3-wind').innerHTML = ('Wind: ' + (data.list[24].wind.speed) + ' MPH');
            document.getElementById('day3-humidity').innerHTML = ('Humidity: ' + (data.list[24].main.humidity) + ' %');
      
            document.getElementById('day4').innerHTML = (dayjs().add(4, 'day').format('MM/DD/YYYY'));
            document.getElementById('day4-temp').innerHTML = ('Temp: ' + (data.list[32].main.temp) + 'ºF');
            document.getElementById('day4-wind').innerHTML = ('Wind: ' + (data.list[32].wind.speed) + ' MPH');
            document.getElementById('day4-humidity').innerHTML = ('Humidity: ' + (data.list[32].main.humidity) + ' %');
          
            document.getElementById('day5').innerHTML = (dayjs().add(5, 'day').format('MM/DD/YYYY'));
            document.getElementById('day5-temp').innerHTML = ('Temp: ' + (data.list[39].main.temp) + 'ºF');
            document.getElementById('day5-wind').innerHTML = ('Wind: ' + (data.list[39].wind.speed) + ' MPH');
            document.getElementById('day5-humidity').innerHTML = ('Humidity: ' + (data.list[39].main.humidity) + ' %');
        });
}



btnGet.addEventListener('click', searchResult);
