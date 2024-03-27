
window.addEventListener('load',checkInternetConnection);

function checkInternetConnection(){
  
  const statustext=document.getElementById('check-connection');

  const ipText=document.getElementById('IP-address');

  const networkStrength=document.getElementById('network-strength');

  statustext.textContent='Checking....'


  if(navigator.onLine){
    fetch('https://api.ipify.org?format=json')
    .then((response)=>response.json())
    .then((data)=>{
    ipText.textContent= data.ip;
    statustext.textContent=' Connected';

    const connection=navigator.connection;

    const speedStrength=connection?connection.downlink+'Mbps':'unkonwn';

    networkStrength.textContent=speedStrength;
    }).catch(()=>{
        statustext.textContent='Disconnected'
        ipText.textContent='-'
        networkStrength.textContent='-';
    })

  }

 else{
    statustext.textContent=' Disconnected';
    ipText.textContent='-';
    networkStrength.textContent='-';

}
}