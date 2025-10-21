(function() {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const cw4 = document.getElementById('cw4')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })
  cw1.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        array.forEach(element => {
          answer.innerHTML += `<h2>${element.title}</h2>`
          answer.innerHTML += `<p>${element.body}</p>`
          answer.innerHTML += `<hr>`
        })
      })
  })

  cw2.addEventListener("click", function() {
    answer.innerHTML = "Loading..."
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        setTimeout(() => {
          console.log(array)
          answer.innerHTML = ""
          array.forEach(element => {
            answer.innerHTML += `<h2>${element.title}</h2>`
            answer.innerHTML += `<p>${element.body}</p>`
            answer.innerHTML += `<hr>`
          })
        }, 2000)
      })
  })

  cw3.addEventListener("click", function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => {
        answer.innerHTML += `<h2>${post.title}</h2>`
        answer.innerHTML += `<p>${post.body}</p>`
        answer.innerHTML += `<hr>`

      })
  })
  

})
/*  cw4.addEventListener("click", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { contentType: "application/json}" },
      body: JSON.stringify({
        title: "Łutyt",
        body: "Kotek miau miau miau",
        userId: 1,
      }),
    });
  })*/