const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNum (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

function SalmonCookiesStores(name, minCust, maxCust, avg) { // capital letter for contrstructors 
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.custPerHour = [];
  this.cookiesPurchased = [];
}

SalmonCookiesStores.prototype.getCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randomNum(this.minCust,this.maxCust))
  }
}

SalmonCookiesStores.prototype.getCookiesPurchased = function () {
 // call wtih variable eg seattle.
  for (let i = 0; i < hours.length; i++)
  this.cookiesPurchased.push(Math.floor(this.custPerHour[i] * this.avg)) 
  
}

const seattle = new SalmonCookiesStores("Seattle", 23, 65, 6.3);
const tokyo = new SalmonCookiesStores("Tokyo", 3, 24, 1.2);
const capetown = new SalmonCookiesStores("Cape Town", 13, 54, 2.2);
const mars = new SalmonCookiesStores("New Tokyo: Mars", 33, 154, 4.2);
const locations = [seattle,tokyo,capetown,mars];
// when you make a constructor function, you need to use this. 


// =================================================Tables===================================================

const tableEl = document.createElement('table');

for (let i = 0; i < locations.length; i++) {
  const currentStore = locations[i] 
  const row = document.createElement('tr');

  let el = document.createElement('th');
  el.textContent = currentStore.name;
  row.appendChild(el);

  el = document.createElement('td');
  el.textContent = currentStore.minCust;
  row.appendChild(el)
  el = document.createElement('td');
  el.textContent = currentStore.maxCust;
  row.appendChild(el)
  el = document.createElement('td');
  el.textContent = currentStore.avg;
  row.appendChild(el)

  tableEl.appendChild(row);

}

document.getElementById("outputLocations").appendChild(tableEl)

SalmonCookiesStores.prototype.render = function () {
  this.getCustPerHour();
  this.getCookiesPurchased();

  const table = document.getElementById("coolTable");

  const tr = document.createElement("tr");
  table.appendChild(tr);

  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < this.cookiesPurchased.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesPurchased[i];
    tr.appendChild(td);
  }
};

function makeHeaderRow() {
  // table
  const table = document.getElementById("coolTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // empty cell to start
  let th = document.createElement("th");
  tr.appendChild(th);
  
  // get data into the row
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}
makeHeaderRow();
mars.render();

// ================================================CLICK THE BUTTON=================================================

const formItems = [locations, this.minCust, this.maxCust, this.avg]

const input = ''
const form = ''
const lable = ''

function createForm() {
  for (let i = 0; i < formItems.length; i++) {
      const submitItems = ["Location", "Min Customers" , "Max Customers" , "Average Sales"] 
      //create label
      let label = document.createElement("label");
      label.appendChild(document.createTextNode(submitItems[i])) // give text
      label.classList.add("form--label") // add class

      //create input
      let input = document.createElement("input");
      input.classList.add("form--input")

      //create submit button
      let submit = document.createElement("input");
      submit.type = 'button'
      submit.value = "SUBMIT"
      submit.classList.add("form--btnSubmit")

      //create form 
      let form = document.createElement("form");
      form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        const storeNameInput = event.target.name.value;
        const maxCustInput = event.target.maxCust.value;
        const minCustInput = event.target.minCust.value;
        const avgCookieInput = event.target.avg.value;

        const newStore = new SalmonCookiesStores(storeNameInput, maxCustInput, minCustInput, avgCookieInput);
        console.log(newStore)
      })
      form.classList.add("form--form")

      form.appendChild(input)
      form.appendChild(label)
      form.appendChild(submit)
      document.getElementById('--forum').appendChild(form)
  }
}

createForm("--forum")

// marsBtn = document.createElement("button");
// document.addEventListener("on-click");
// document.getElementById("marsBtn").appendChild(btn)