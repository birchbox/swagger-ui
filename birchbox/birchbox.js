$(function () {
  window.swaggerUi = new SwaggerUi({
    url: "http://tt.dev.birchbox.com/products/api-docs.json",
    dom_id: "swagger-ui-container",
    supportedSubmitMethods: ['get', 'post', 'put', 'delete'],
    onComplete: function(swaggerApi, swaggerUi){
      log("Loaded SwaggerUI");
      if(typeof initOAuth == "function") {
        /*
        initOAuth({
          clientId: "your-client-id",
          realm: "your-realms",
          appName: "your-app-name"
        });
        */
      }
      $('pre code').each(function(i, e) {
        hljs.highlightBlock(e)
      });
    },
    onFailure: function(data) {
      log("Unable to Load SwaggerUI");
    },
    docExpansion: "none"
  });

  $('#input_apiKey').change(function() {
    var key = $('#input_apiKey')[0].value;
    log("key: " + key);
    if(key && key.trim() != "") {
      log("added key " + key);
      window.authorizations.add("key", new ApiKeyAuthorization("X-Session-Id", key, "header"));
    }
  })
  window.swaggerUi.load();
});
