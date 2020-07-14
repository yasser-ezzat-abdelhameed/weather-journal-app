/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// result elements
const dateElement = document.querySelector("#date");
const tempElement = document.querySelector("#temp");
const contentElement = document.querySelector("#content");

// fetch data handler
const getData = async () => {
  try {
    const getResponse = await fetch("/api/data");
    const { date, temp, content } = await getResponse.json();
    dateElement.innerHTML = date;
    tempElement.innerHTML = temp;
    contentElement.innerHTML = content;
  } catch (e) {
    alert(e.message);
  }
};

// generate data handler
document.querySelector("#generate").addEventListener("click", async () => {
  try {
    const zip = document.querySelector("#zip").value;
    const feelings = document.querySelector("#feelings").value;
    if (!zip) return alert("Zipcode value is required");
    if (!feelings) return alert("Feelings value is required");
    const postResponse = await fetch("/api/data", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ zip, feelings, date: newDate }),
    });
    const { result, error } = await postResponse.json();
    if (result !== true) return alert(error || "Something went wrong");
    getData();
  } catch (e) {
    alert(e.error || e.message);
  }
});

// to fetch saved data if any
getData();
