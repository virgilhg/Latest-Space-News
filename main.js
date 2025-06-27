//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const url = 'https://api.spaceflightnewsapi.net/v4/articles?limit=10'
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         const list = document.getElementById('news')
//         list.innerHTML = ""
//         data.results.forEach(article => {
//           const item = document.createElement('li')
//           const link = document.createElement('a')

//           link.href = article.url 
//           link.innerText = article.title
//           link.target = '_blank'

//           item.appendChild(link)
//           list.appendChild(item)
//         })
       
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//           document.getElementById('news').innerText = 'Sorry, could not fetch news right now.'
//       });
// }

document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const url = 'https://api.spaceflightnewsapi.net/v4/articles?limit=10'

    fetch(url)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            const list = document.getElementById('news')
            list.innerHTML = ""
            data.results.forEach(article => {
              const item = document.createElement('li')
              const link = document.createElement('a')

              link.href = article.url
              link.innerText = article.title
              link.target = '_blank'

              item.appendChild(link)
              list.appendChild(item)

            })
          
          })
          .catch(err => {
              console.log(`error ${err}`)
              document.getElementById('news').innerText = 'Sorry, could not fetch news right now.'
          });
}


