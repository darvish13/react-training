const X= 'salam'

function weatherReport(x) {
    // console.log(data);

    let report = {}
    //detecting cloudiness
    if (x.cloudcover>=6) {
        report.situation= 'cloudy'
    }
    else if (x.cloudcover<6 && x.cloudcover>3) {
        report.situation= 'partly-cloudy'        
    }
    else if (x.cloudcover<=3) {
        report.situation= 'clear'
    }
    //detecting temperature
    if (x.temp2m >= 33) {
        report.temperature= 'very hot'
    }
    else if (x.temp2m<33 && x.temp2m> 29) {
        report.temperature= 'hot'
    }
    else if (x.temp2m< 29) {
        report.temperature= 'mild'
    }
    return report
}
function printName(user) {
console.log(user.name);
    
}

module.exports = printName
