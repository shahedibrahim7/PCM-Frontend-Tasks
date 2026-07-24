// async code: out of order execution

//setTimeout(() => console.log("Step 2"), 1000);
//console.log("Step 1");

// promises
// three states: pending, fulfilled (resolve), failed (reject)
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result)); 

// async/await
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Fetch attempt finished.");
  }
}
getData();




