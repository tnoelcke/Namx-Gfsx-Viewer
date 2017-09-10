//Author: Thomas Noelcke
//
// This file gets the weather data from the NOAA website and returns it as an
// object

//this object stores all the URLS for the stations in oregon by a four letter
//code. This object then also stores a second paramater that stores the URL for
//the location.


var stations =  [{name:"Portland", locationCode: "KPDX"},
                 {name:"Portland/Troutdale", locaitonCode: "KTTD"},
                 {name: "Astoria", locationCode: "KAST"},
                 {name: "Aurora", locationCode: "KUAO"},
                 {name: "Baker", locationCode: "KBKE"},
                 {name: "Bend", locationCode: "KBDN"},
                 {name: "Brookings", locationCode: "KBOK"},
                 {name: "Burns", locationCode: "KBDN"},
                 {name: "Corvallis", locationCode: "KCVO"},
                 {name: "Eugene", locationCode: "KEUG"},
                 {name: "Grants Pass", locationCode: "KGCD"},
                 {name: "Hermiston", locationCode: "KHRI"},
                 {name: "Hillsboro", locationCode: "KHIO"},
                 {name: "Klamath Falls", locationCode: "KLMT"},
                 {name: "La Grande", locationCode: "KLGD"},
                 {name: "LakeView" , locationCode: "KLKV"},
                 {name: "Mcminnville", locationCode: "KMMV"},
                 {name: "Meacham", locationCode: "KMEH"},
                 {name: "Medford", locationCode: "KMFR"},
                 {name: "Newport", locationCode: "KONP"},
                 {name: "North Bend", locationCode: "KOTH"},
                 {name: "Ontario", locationCode: "KONO"},
                 {name: "Pendleton", locationCode: "KPDT"},
                 {name: "Redmond", locationCode: "KRDM"},
                 {name: "Rome", locationCode: "KREO"},
                 {name: "Roseburg", locationCode: "KRBG"},
                 {name: "Salem", locationCode: "KSLE"},
                 {name: "Scappoose", locationCode: "KSPB"},
                 {name: "Sexton SMT", locationCode: "KSXT"},
                 {name: "The Dalles", locationCode: "KDLS"},
                 {name: "Tillamook", locationCode: "KTMK"}
                ];



//This function is the main function that gets the data and processes it
function getData(var modelType, var station){
  //get data for the model of interest
  if(modelType = "GFS"){

  } else if(modelType = "NAM"){
    
  } else if(modelType = "ENS") {
    
  }
}

//gets and process the data for the GFS model.
function getGFS(var station){
  
}

//gets the location code based on station name.
function getStationCode(var name){
  for(var i = 0, i < 
}
