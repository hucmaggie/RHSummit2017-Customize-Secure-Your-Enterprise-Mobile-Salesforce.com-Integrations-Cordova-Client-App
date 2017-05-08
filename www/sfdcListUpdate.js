document.getElementById('say_hello').onclick = function () {
    document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
    $fh.cloud(
        {
            path: 'fuseList',
            method : 'GET'
        },
        function (res) {
            var opps = JSON.parse(res);
            opps.forEach(function(opp){
                $('#opps tbody').append('<tr><td>' + opp.Name + '</td><td>' + opp.Amount + '</td><td>' + opp.StageName + '</td><td>' + opp.Id +  '</td></tr>')
            });
            //document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
        },
        function (code, errorprops, params) {
            alert('An error occured: ' + code + ' : ' + errorprops);
        }
    );
};
