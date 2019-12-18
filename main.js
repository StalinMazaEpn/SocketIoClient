var socketJS = new WebSocket('ws://192.168.1.134:8080');
const websockets = () => {
    //  socketJS.onopen(function(e){
    //       console.log('conectado')
    //   });
    socketJS.onopen = function(data){
        console.log('connect')
       
       
    };
      socketJS.onmessage = function(data){
          console.log('event data', data.data)
      };
};

const send = () => {
    console.log('log send')
    socketJS.send('puja');
}

// document.getElementById('btn').addEventListener('click', websockets);
websockets();
document.getElementById('btn2').addEventListener('click', send);


//   socketJS.ondisconnect(function(){
//       console.log('disconnect')
//   });
