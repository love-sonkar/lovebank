// store all data in localstorage

let initNote;
if (localStorage.getItem("accounts") === null) {
  initNote = [];
} else {
  initNote = JSON.parse(localStorage.getItem("accounts"));
}
let accounts = initNote;

//end

let success = document.querySelector("#success");

function offSuccess() {
  setTimeout(() => {
    success.style.display = "none";
  }, 3000);
}

function ClearVal() {
  let cName = (document.querySelector("#customername").value = "");
  let fname = (document.querySelector("#fathersname").value = "");
  let address = (document.querySelector("#address").value = "");
  let balance = (document.querySelector("#balance").value = "");
  return cName, fname, address, balance;
}

// code for creating account

let CreateAccount = document.querySelector("#CreateAccount");

CreateAccount.addEventListener("submit", (e) => {
  e.preventDefault();
  let cName = document.querySelector("#customername").value;
  let fname = document.querySelector("#fathersname").value;
  let address = document.querySelector("#address").value;
  let balance = document.querySelector("#balance").value;
  let error = document.querySelector("#errorcreate");

  if (cName !== "" && fname !== "" && address !== "") {
    let newAccount = new BankAccount(cName, fname, address, parseInt(balance));
    accounts.push(newAccount);
    error.innerHTML = ``;
    success.style.display = "block";
    localStorage.setItem("accounts", JSON.stringify(accounts));
    showData();
  } else {
    error.innerHTML = `<p class=" bg-red-500 w-full rounded-sm text-center text-white px-2 py-2 my-2">Please Fll All fields</p>`;
  }
  ClearVal();
  offSuccess();
});

// code for deleting user

function DeleteUser(item) {
  // accounts.map((items) => items !== item);
  console.log("item");
}

// maping all the users in html using dom manupulation
function showData() {
  if (accounts.length === 0) {
    document.querySelector(
      "#userdatashow"
    ).innerHTML = `<h2 class="text-2xl text-center">No users right now </h2>`;
  } else {
    let data = accounts.map((item) => {
      return `  <div
      class="border border-b-2 border-b-blue-400 py-3 px-4 rounded-md shadow-lg w-full"
      >
      <img src="/user.webp" alt="" class="p-3 w-[180px] mx-auto" />
      <div class="flex justify-between items-center pt-3 gap-2">
        <h2>Account Number :</h2>
        <p>${item.accountNumber}</p>
      </div>
      <div class="flex justify-between items-center gap-2">
        <h2>Balance :</h2>
        <p class="text-xl font-black text-yellow-500">₹${item.balance}</p>
      </div>
      <div>
        <div class="flex justify-between items-center gap-2">
          <h2>Customer Name :</h2>
          <p>${item.customername}</p>
        </div>
        <div class="flex justify-between items-center gap-2">
          <h2>Father's Name :</h2>
          <p>${item.fathersname}</p>
        </div>
        <h2>Address : ${item.address}</h2>
      </div>
      <div class="flex items-center justify-center gap-3 py-4">
        <button
          class="bg-blue-500 text-white py-2 px-3 w-full rounded border-blue-500 border hover:text-black hover:bg-transparent"
        >
          Edit
        </button>
        <button
          class="bg-red-500 text-white py-2 px-3 w-full rounded border-red-500 border hover:text-black hover:bg-transparent" 
          onclick="DeleteUser()">
          Delete
        </button>
      </div>
      </div>`;
    });

    document.querySelector("#userdatashow").innerHTML = data;
  }
}

showData();
