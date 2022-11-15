const url = "https://www.balldontlie.io/api/v1/games?seasons%5B%5D=2022&per_page=100" 

async function getAPI() { // Faz a requisição da API no método GET
  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data);

  var tabela = document.querySelector("#table tbody"); // Coloca os dados da API numa tabela e exibe na página HTML
  
  for (let i = 0; i < data.data.length; i++){
    var row = tabela.insertRow(i);

    var tdPosition = row.insertCell(0);
    var tdDate = row.insertCell(1);
    var tdHomeTeam = row.insertCell(2);
    var tdScore = row.insertCell(3);
    var tdVisitorTeam = row.insertCell(4);
    var tdPhase = row.insertCell(5);
    var tdSeason = row.insertCell(6);

    tdPosition.innerHTML = i + 1;
    tdDate.innerHTML = data.data[i].date;
    tdHomeTeam.innerHTML = data.data[i].home_team.full_name;
    tdScore.innerHTML = data.data[i].home_team_score + " x " + data.data[i].visitor_team_score;
    tdVisitorTeam.innerHTML = data.data[i].visitor_team.full_name;

    if (data.data[i].postseason == false){
      tdPhase.innerHTML = "Temporada Regular";
    }

    if (data.data[i].season == 2022)
      tdSeason.innerHTML = "2022-2023";

    if (data.data[i].home_team_score > data.data[i].visitor_team_score){
      tdHomeTeam.style.color = '#0FF';}
    if (data.data[i].visitor_team_score > data.data[i].home_team_score){
    tdVisitorTeam.style.color = '#0FF';
    }

    let newData = (data.data[i].date.split('T')[0].split('-').reverse().join('/')); // Configura a data para o formato brasileiro
    tdDate.innerHTML = newData;

  }
 
}

getAPI();

