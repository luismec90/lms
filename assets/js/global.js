$(function() {

    /*    $("#coverDisplay").css({
     "opacity": "1",
     "width": "100%",
     "height": "100%"
     });
     $("#contenedor-video").addClass("class-contenedor-video");*/

    $("#botonCerrarPdf").click(function() {
        $("#coverDisplay").css({
            "opacity": "0",
            "width": "0",
            "height": "0"
        });
        $("#contenedor-pdf").removeClass("class-contenedor-pdf").addClass("hide");
        $("html, body").css({
            'overflow': 'content'
        });
    });
    $("#botonCerrarFrame").click(function() {
        $("#coverDisplay").css({
            "opacity": "0",
            "width": "0",
            "height": "0"
        });
        $("#contenedor-frame").removeClass("class-contenedor-pdf").addClass("hide");
        $("html, body").css({
            'overflow': 'content'
        });
    });
    //$("#video").appendTo('body');
    // $("#video").css('position', 'fixed').css('width', '100%').css('height', '100%').css('margin', 0).css('margin-top', '0').css('top', '0').css('left', '0').css('float', 'left').css('z-index', 2000);

    //  $("#vidControls").css('position', 'absolute').css('bottom', '5%').css('width', '90%').css('backgroundColor', 'rgba(150, 150, 150, 0.5)').css('float', 'none').css('left', '5%').css('z-index', 700).css('-webkit-border-radius', '10px');

    $('.easy-pie-chart.percentage').each(function() {
        var $box = $(this).closest('.infobox');
        var barColor = $(this).data('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
        var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
        var size = parseInt($(this).data('size')) || 50;
        $(this).easyPieChart({
            barColor: barColor,
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: parseInt(size / 10),
            animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
            size: size
        });
    })

    $('.sparkline').each(function() {
        var $box = $(this).closest('.infobox');
        var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
        $(this).sparkline('html', {tagValuesAttribute: 'data-values', type: 'bar', barColor: barColor, chartRangeMin: $(this).data('min') || 0});
    });


    /* 
     
     var placeholder = $('#piechart-placeholder').css({'width': '90%', 'min-height': '150px'});
     var data = [
     {label: "social networks", data: 38.7, color: "#68BC31"},
     {label: "search engines", data: 24.5, color: "#2091CF"},
     {label: "ad campaigns", data: 8.2, color: "#AF4E96"},
     {label: "direct traffic", data: 18.6, color: "#DA5430"},
     {label: "other", data: 10, color: "#FEE074"}
     ]
     function drawPieChart(placeholder, data, position) {
     $.plot(placeholder, data, {
     series: {
     pie: {
     show: true,
     tilt: 0.8,
     highlight: {
     opacity: 0.25
     },
     stroke: {
     color: '#fff',
     width: 2
     },
     startAngle: 2
     }
     },
     legend: {
     show: true,
     position: position || "ne",
     labelBoxBorderColor: null,
     margin: [-30, 15]
     }
     ,
     grid: {
     hoverable: true,
     clickable: true
     }
     })
     }
     drawPieChart(placeholder, data);
     
     
     placeholder.data('chart', data);
     placeholder.data('draw', drawPieChart);
     
     
     
     var $tooltip = $("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo('body');
     var previousPoint = null;
     
     placeholder.on('plothover', function(event, pos, item) {
     if (item) {
     if (previousPoint != item.seriesIndex) {
     previousPoint = item.seriesIndex;
     var tip = item.series['label'] + " : " + item.series['percent'] + '%';
     $tooltip.show().children(0).text(tip);
     }
     $tooltip.css({top: pos.pageY + 10, left: pos.pageX + 10});
     } else {
     $tooltip.hide();
     previousPoint = null;
     }
     
     });
     
     
     
     
     
     
     var d1 = [];
     for (var i = 0; i < Math.PI * 2; i += 0.5) {
     d1.push([i, Math.sin(i)]);
     }
     
     var d2 = [];
     for (var i = 0; i < Math.PI * 2; i += 0.5) {
     d2.push([i, Math.cos(i)]);
     }
     
     var d3 = [];
     for (var i = 0; i < Math.PI * 2; i += 0.2) {
     d3.push([i, Math.tan(i)]);
     }
     
     
     var sales_charts = $('#sales-charts').css({'width': '100%', 'height': '220px'});
     $.plot("#sales-charts", [
     {label: "Domains", data: d1},
     {label: "Hosting", data: d2},
     {label: "Services", data: d3}
     ], {
     hoverable: true,
     shadowSize: 0,
     series: {
     lines: {show: true},
     points: {show: true}
     },
     xaxis: {
     tickLength: 0
     },
     yaxis: {
     ticks: 10,
     min: -2,
     max: 2,
     tickDecimals: 3
     },
     grid: {
     backgroundColor: {colors: ["#fff", "#fff"]},
     borderWidth: 1,
     borderColor: '#555'
     }
     });
     */

    $('#recent-box [data-rel="tooltip"]').tooltip({placement: tooltip_placement});
    function tooltip_placement(context, source) {
        var $source = $(source);
        var $parent = $source.closest('.tab-content')
        var off1 = $parent.offset();
        var w1 = $parent.width();

        var off2 = $source.offset();
        var w2 = $source.width();

        if (parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2))
            return 'right';
        return 'left';
    }


    $('.dialogs,.comments').slimScroll({
        height: '300px'
    });


    //Android's default browser somehow is confused when tapping on label which will lead to dragging the task
    //so disable dragging when clicking on label
    var agent = navigator.userAgent.toLowerCase();
    if ("ontouchstart" in document && /applewebkit/.test(agent) && /android/.test(agent))
        $('#tasks').on('touchstart', function(e) {
            var li = $(e.target).closest('#tasks li');
            if (li.length == 0)
                return;
            var label = li.find('label.inline').get(0);
            if (label == e.target || $.contains(label, e.target))
                e.stopImmediatePropagation();
        });

    $('#tasks').sortable({
        opacity: 0.8,
        revert: true,
        forceHelperSize: true,
        placeholder: 'draggable-placeholder',
        forcePlaceholderSize: true,
        tolerance: 'pointer',
        stop: function(event, ui) {//just for Chrome!!!! so that dropdowns on items don't appear below other items after being moved
            $(ui.item).css('z-index', 'auto');
        }
    }
    );
    $('#tasks').disableSelection();
    $('#tasks input:checkbox').removeAttr('checked').on('click', function() {
        if (this.checked)
            $(this).closest('li').addClass('selected');
        else
            $(this).closest('li').removeClass('selected');
    });

    $(".abrirPdf").click(function() {
        $("#coverDisplay").css({
            "opacity": "1",
            "width": "100%",
            "height": "100%"
        });
        $("html, body").css({
            'overflow': 'hidden'
        });
        var h = $(window).height() - 25;
        var w = $(window).width();
        $("#contenedor-pdf").css("height", h + "px").addClass("class-contenedor-pdf").removeClass("hide");
        $("#pdf,#contenedor-pdf").css({
            "width": "100%",
            "height": "100%",
            "bottom": "0"
        });
    });
    $(".solved,.open").click(function() {
        $("#coverDisplay").css({
            "opacity": "1",
            "width": "100%",
            "height": "100%"
        });
        $("html, body").css({
            'overflow': 'hidden'
        });
        var h = $(window).height() - 25;
        var w = $(window).width();
        $("#contenedor-frame").css("height", h + "px").addClass("class-contenedor-pdf").removeClass("hide");
        $("#frame,#contenedor-frame").css({
            "width": "100%",
            "height": "100%",
            "bottom": "0"
        });
    });
});
