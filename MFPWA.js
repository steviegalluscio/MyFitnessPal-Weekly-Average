javascript: (function () {
    if (document.getElementsByClassName('table0')[0]) { document.getElementsByClassName('table0')[0].remove(); }
    var outputtable = document.getElementById('main').appendChild(document.createElement('table'));
    outputtable.className = 'table0';

    var head = outputtable.appendChild(document.createElement('thead')).appendChild(document.createElement('tr'));
    head.appendChild(document.createElement('td')).textContent = 'Date';
    head.appendChild(document.createElement('td')).textContent = 'Amount';
    head.appendChild(document.createElement('td')).textContent = 'Weekly Average';
    var body = outputtable.appendChild(document.createElement('tbody'));
    var currentrow, avgrow;

    var l = MFP.Reports.chart.series[0].data.length;
    var i = l;
    var sum = 0;
    while (i--) {
        sum += MFP.Reports.chart.series[0].data[i].y;
        currentrow = body.appendChild(document.createElement('tr'));
        currentrow.appendChild(document.createElement('td')).textContent = MFP.Reports.chart.series[0].data[i].category;
        currentrow.appendChild(document.createElement('td')).textContent = MFP.Reports.chart.series[0].data[i].y;
        avgrow = currentrow.appendChild(document.createElement('td'));
        if ((l - i) % 7 == 0) {
            avgrow.textContent = (sum / 7).toFixed(2);
            avgrow.style.backgroundColor = 'rgb(217, 217, 217)';
            sum = 0;
        }
    }
})();