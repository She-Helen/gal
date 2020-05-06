console.log('hello st');
const wrapper = document.querySelector('.wrapper');
console.log('wrapper', wrapper);

function createCard(cardObj) {
    return `
    <div class="card">
        <div class="header">
         <img class="header-image" src="./av.jpg" alt="avatar">
         <div class="header-title">
            ${cardObj.author}
         </div>
    </div>
    <div class="image-wrapper">
    <img class="image" src="${cardObj.download_url}" alt="Test img">
    </div>
    <div class="content">
        Here you can view all the images Lorem Picsum provides
    </div>
</div>
</div>
    `;
}

fetch('https://picsum.photos/v2/list')
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
        console.log('data', data);

        let cardlist = '';

        data.forEach((cardObj) => {
            cardlist = cardlist + createCard(cardObj)            
        });

        wrapper.innerHTML = cardlist;

        let msnry;
        setTimeout(() => {
            msnry = new Masonry(wrapper);
            console.log('msnry', msnry);
        }, 1000)
        
        setTimeout(() => {
            msnry.reloadItems();
        }, 2000)
    });