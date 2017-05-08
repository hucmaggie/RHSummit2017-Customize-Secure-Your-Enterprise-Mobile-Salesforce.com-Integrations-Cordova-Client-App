document.getElementById('opportunityBtn').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Salesforce.....</p>";
  $fh.cloud(
      { 
        path: 'fuseList',
        method : 'GET'
      },
      function (fuseList) {
        var opportunities = JSON.parse(fuseList);
        var table = document.getElementById("opportunities");

        for (var i = 0, len = opportunities.length; i < len; i++) {
            var row = table.insertRow(i+1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            //var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(2);
            var cell5 = row.insertCell(3);
            var cell6 = row.insertCell(4);

            if(opportunities[i].StageName === 'Closed Won')
              cell1.innerHTML = "<input id='radioButton' disabled type='radio'/>";  
            else
              cell1.innerHTML = "<input id='radioButton1' type='radio' onclick='myFunction(&quot;" + opportunities[i].Id + "&quot;)'/>";  
              cell2.innerHTML = opportunities[i].Name;
              //cell3.innerHTML = opportunities[i].AccountId;
              cell4.innerHTML = opportunities[i].Amount;
              cell5.innerHTML = opportunities[i].StageName;
              cell6.innerHTML = opportunities[i].Id;
        }
        document.getElementById('cloudResponse').innerHTML = "";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};

function myFunction(optId) {
    document.getElementById('cloudResponse').innerHTML = "<p>Calling SFDC & SAP.....</p>";
    $fh.cloud(
      {
        path: 'fuseUpdate',
        method : 'GET',
        data: {
          optId: optId
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "";
        alert(res.msg);
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};