

var posizione = ('https://jsonplaceholder.typicode.com/posts/1');

function ajax(){
$.ajax({
        url: posizione,
        type: 'GET',
        dataType: 'html',
        success:function(content)
        {
       
            $('.ajax').html(content);
        }
        });
}
$(".clicca").click(function(){
    ajax();
})

ajax();
Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Historic and Estimated Worldwide Population Distribution by Region'
    },
    subtitle: {
        text: 'Source: Wikipedia.org'
    },
    xAxis: {
        categories: ['1900','1920','1940','1960','1980','2000','2020'],
        tickmarkPlacement: 'on',
        title: {
            enabled: true
        }
    },
    yAxis: {
        lineColor: '#FF0000',
        gridLineWidth: 20,

        title: {
            text: 'sjdhfbdshjfb',
            
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
        split: true
    },
    plotOptions: {
        area: {

            stacking: 'percent',
            lineColor: 'black',
            lineWidth: 3,
            marker: {
                lineWidth: 1,
                lineColor: 'black'
            }
        }
    },
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
});