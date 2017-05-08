var pushConfig = {
  pushServerURL: "https://mhu.us.demos.redhatmobile.com/api/v2/ag-push/",
  ios: {
    variantID: "18f87a63-2322-47b1-9421-863397b4ac64",
    variantSecret: "92446719-8c5d-43db-b35e-05a4640512f5"
  },
  alias: "mhu@redhat.com"
}

function errorHandler (err) {
  alert('push register failed');
  alert(JSON.stringify(err));
}

function successHandler () {
  alert('push registered')
}

$fh.push.register(onNotification, successHandler, errorHandler, pushConfig);