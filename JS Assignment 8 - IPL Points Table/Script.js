const setdata = async ()=>{
    const res=await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data') // 2022 data
    if(!res.ok){
       throw new Error('Network Issues connect to the internet');
    }
    const data= await res.json()
    data.sort((a,b) => a.nrr - b.nrr);
    const tbody = document.querySelector('#iplTable tbody');
    data.map((team)=>{
       const row = document.createElement('tr');
       console.log(team)
       row.innerHTML = `
           <td>${team.No}</td>
           <td>${team.Team}</td>
           <td>${team.Matches}</td>
           <td>${team.Won}</td>
           <td>${team.Lost}</td>
           <td>${team.Tied}</td>
           <td>${team.NRR}</td>
           <td>${team.Points}</td>`;
       tbody.appendChild(row);
    })
}
setdata();