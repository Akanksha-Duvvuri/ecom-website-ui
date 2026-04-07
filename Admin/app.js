const yValues = [50,70,65,90,100,100];
    const xValues = [2020,2005,2010,2015,2020,2025];

    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          label: "Customers",
          backgroundColor: "rgba(0, 0, 0 , 0.2)",
          borderColor: "cadetblue",
          data: yValues,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
});
