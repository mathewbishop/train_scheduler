//* When adding trains, administrators should be able to submit the following:
    
//    * Train Name
    
//     * Destination 
    
//     * First Train Time -- in military time
    
//     * Frequency -- in minutes
  
//   * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  
//   * Users from many different machines must be able to view same train times.
  
//   * Styling and theme are completely up to you. Get Creative!



// Data Flow
    // form => submit-btn => table and database
// Features
    // input train data
    // on submit button click, add the train data to the table and persist it in the database
    // calculte arrival times and (mins away), display in table
        // persisted data = train name, destination, frequency, and current time
        // calc data = next arrival, and mins away

// Tasks and Methodology
    // connect to firebase
    // snapshot firebase data so that the times will be current
    // submit-btn.click function to add train data input to table
    // arithmatic function to calculate the arrival times
    // code to .push({}) the each new set of train data to the database





// Initialize Firebase
var config = {
    apiKey: "AIzaSyDZHfxhbAVYNLC3b4_GfkYXtS-tn1xmUrk",
    authDomain: "mattbishoptest-267ab.firebaseapp.com",
    databaseURL: "https://mattbishoptest-267ab.firebaseio.com",
    projectId: "mattbishoptest-267ab",
    storageBucket: "mattbishoptest-267ab.appspot.com",
    messagingSenderId: "1060195077989"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();

  database.ref().on("value", function(snapshot) {
      console.log(snapshot);
  })


function arrivalCalc() {
    let currentTime = moment();
        console.log(currentTime);
        
    let initialTrainTime = $('#firstTrainTime').val();
        console.log(initialTrainTime);

    let tfrequency = parseInt($('#frequency').val());
        console.log(tfrequency);

    let trainTimeConvert = moment(a, "HH:mm").subtract(1, "years");
        console.log(trainTimeConvert);
        
    let diffTime = currentTime.diff(moment(trainTimeConvert), "minutes");   console.log("Difference in time " + diffTime);

    let tRemainder = diffTime % tfrequency;
        console.log(tRemainder);
        
    let minutesTillTrain = tfrequency - tRemainder;
        console.log("minutes until train " + minutesTillTrain);
         
    let nextTrain = currentTime.add(minutesTillTrain, "minutes");
        console.log("next arrive " + moment(nextTrain).format("hh:mm"));              
}



$('#submit-btn').click(function(event) {
    event.preventDefault();
    var newRow = $('<tr>')

    var trainNameData = $('#trainName').val().trim();
    var destinationData = $('#destination').val().trim();
    var firstTrainTimeData = $('#firstTrainTime').val().trim();
    var frequencyData = $('#frequency').val().trim();

    var newData1 = $('<td>').html(trainNameData);
    var newData2 = $('<td>').html(destinationData);
    var newData3 = $('<td>').html(firstTrainTimeData);
    var newData4 = $('<td>').html(frequencyData);
    
    newRow.append(newData1, newData2, newData4);

    $('table').append(newRow);

    $('#trainInfoForm').trigger('reset');

})