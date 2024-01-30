const bloglarDivi =document.getElementsByClassName("row")[0]

window.addEventListener(`DOMContentLoaded`, apiLink)

async function apiLink() {
    const unvan = 'https://fakestoreapi.com/products'
    try {
        let infolar = await fetch(unvan)
        console.log(infolar)
        const  frontdanGelenler = await infolar.json()
        
        for (let i = 0; i<= 30; i++){
            bloglarDivi.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card-1 border-0 rounded border border-secondary p-3">
                    <div class="card-img d-flex  justifity-content-center align-items-center">
                        <img src="${frontdanGelenler[i].image}"class="card-img-top" alt="..."/>
                    </div>
                    <div class="card-bottom">
                        <h5 class="card-title">${frontdanGelenler[i].title}</h5>
                        <p class="card-text">${frontdanGelenler[i].category}</p>
                        <p class="card-text">${frontdanGelenler[i].description}</p>
                        <a href="#" class="btn btn-primary">${frontdanGelenler[i].price} $</a>
                   
                    </div>
                </div>
            </div>`
        }
    }
    catch (xeta) {
        console.log(`Xəta baş verib: ${xeta}`)
        setTimeout(function () {
            document.querySelector(`Xəta baş verdi. Səyfəni yeniləməyiniz xahiş olunur.`).innerText = xeta
        }, 5000)
    }

    finally {

    }
}


