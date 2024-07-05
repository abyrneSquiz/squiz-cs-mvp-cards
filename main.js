module.exports = async function (input, info) {

  var cardPrint = function(image, text){
    return ` 
          <div class="col">
            <div class="card" >
              <img src="${image.imageVariations.original.url}" class="card-img-top" alt="placeholder">
              <div class="card-body">
                <p class="card-text">${text}</p>
              </div>
            </div>
          </div>`
  }

var cardArray = input.cards;

  return `
  <main>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">${input.text}</h1>
        <p class="lead text-body-secondary">${input.bodyText}</p>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">            
              ${cardArray.map((element) => {
                return cardPrint(element.cardImage, element.cardText);
              }).join('')}
    </div>
  </div>`;
  }
