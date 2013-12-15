//Publish this as a standalone web app and allow anonymous users to access

function doGet(e) {
  var state = ScriptProperties.getProperty('state'); 
  if (e.parameter.raspberry) {
    if (state == "on") {
      return ContentService.createTextOutput('on');
    } else {
      return ContentService.createTextOutput('off');
    }
  }
  var app = UiApp.createApplication();
  var panel = app.createVerticalPanel().setStyleAttribute('margin', '15px');
  var offButton = app.createButton("Turn OFF Christmas Tree lights").setId('offButton');
  var onButton = app.createButton("Turn ON Christmas Tree lights").setId('onButton').setStyleAttribute('marginBottom', '20px');


  //Uncomment and modify to suit if you have a live video feed set up
  //var link = app.createAnchor("Link to live video feed","<URL of video feed here>").setStyleAttribute('marginTop', '20px');
  //var text = app.createLabel("Note: Allow up to 30 sec for lights to respond due to lag in video stream...").setStyleAttribute('marginTop', '10px');
 
 
  
  if (state == "on") {
    offButton.setEnabled(true);
    onButton.setEnabled(false);
  } else {
    offButton.setEnabled(false);
    onButton.setEnabled(true);
  }
  
  var saveOnHandler = app.createServerHandler('saveOnState');
  var saveOffHandler = app.createServerHandler('saveOffState');
  
  offButton.addClickHandler(saveOffHandler);
  onButton.addClickHandler(saveOnHandler);
  
  panel.add(offButton).add(onButton).add(link).add(text);
  app.add(panel);
  return app
}


function saveOnState(e) {
  var app = UiApp.getActiveApplication();
  var onButton = app.getElementById('onButton').setEnabled(false);
  var offButton = app.getElementById('offButton').setEnabled(true);
  ScriptProperties.setProperty('state', 'on');
  return app;
}


function saveOffState(e) {
  var app = UiApp.getActiveApplication();
  var onButton = app.getElementById('onButton').setEnabled(true);
  var offButton = app.getElementById('offButton').setEnabled(false);
  ScriptProperties.setProperty('state', 'off');
  return app; 
}
