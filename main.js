var form = document.getElementById("myForm")

form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("search").value

    var semEspaco = search.split(' ').join('')

    alert(semEspaco)

    fetch("https://api.github.com/users/"+semEspaco)
    .then((result) => result.json())
    .then((data)=>{
        console.log(data)

        var test = document.getElementById("result").innerHTML = `
            <a target="_blank" href="${data.html_url}"> <img src="${data.avatar_url}"/></a>
        `        
    })
})