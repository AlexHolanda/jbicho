window.onload = function() {
    abrirGrafico1();
    
  };

  function abrirGrafico1(){
    const ctx = document.getElementById('grafico1');
                  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Modelo',
          data: [22, 79, 4, 9, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }