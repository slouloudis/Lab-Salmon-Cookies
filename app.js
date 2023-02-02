const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const locations = [{
  name: "Seattle",
  minCus: 23,
  maxCus: 65,
  avg: 6.3,
  cookiesPurchased: [],
  custPerHour: [],
  getcusPerHour: function() {
    for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randNum(this.minCus,this.maxCus))
    }
    this.getcookiesPurchased();
  },
  getcookiesPurchased: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPurchased.push(Math.floor(this.custPerHour[i] * this.avg));
    }

  }
} , {
  name: "Tokyo",
  minCus: 3,
  maxCus: 24,
  avg: 1.2,
  custPerHour: [],
  getcusPerHour: function() {
    for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randNum(this.minCus,this.maxCus))
    }
    // this.getcookiesPurchased();
  }
} ]
// =====================================================================================================================

function randNum(min,max) {
  return Math.floor(Math.random()* (max-min + 1) + min)
}

console.log(locations)
locations[0].getcusPerHour();
console.log(locations[0].custPerHour)
locations[1].getcusPerHour();
console.log(locations[1].custPerHour)

// -------------- DOM -------------------

// Creates UL

for (let j = 0; j < locations.length; j++) {
  let salesAtTime = document.createElement("p");
  salesAtTime.classList.add("customers--perhour");
  salesAtTime.appendChild(document.createTextNode(locations[j].custPerHour));

  let tester = document.createElement("p");
  tester.classList.add("customers--hour");
  tester.appendChild(document.createTextNode(hours));

  const ul = document.createElement("ul");
  //contst li = documentcreatElement("li";
  //li.textContent = seattles.custPerHour[i]
  //ul.appendChild(li) )


  tester.appendChild(salesAtTime)
  // // appends to parent ID
  document.getElementById('outputLocations').appendChild(tester);
}

