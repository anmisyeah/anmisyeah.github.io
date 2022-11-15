let body = document.querySelector('body');
let divHead = document.createElement('div');
    divHead.classList.add('divHead');

    let myImg = document.createElement('img');
    myImg.setAttribute('src', 'bookshopImg.jpg');
    divHead.appendChild(myImg);

    let pWelcome = document.createElement('p');
    pWelcome.innerText = 'Welcome to amazing books shop!';
    pWelcome.classList.add('pWelcome');
    divHead.appendChild(pWelcome)

let mainContainer = document.createElement('div');
let orderBooks = document.createElement('div');
orderBooks.classList.add('order_books');
let divBookContainer = document.createElement('div');
divBookContainer.classList.add('books_container');
divBookContainer.appendChild(orderBooks);
mainContainer.appendChild(divBookContainer);
mainContainer.appendChild(orderBooks);
mainContainer.classList.add('main_container');






let pOrderBooks = document.createElement('p');
    pOrderBooks.classList.add('book_shop');
    pOrderBooks.innerText ='Order Books';
    orderBooks.appendChild(pOrderBooks);


    let pBookCatalog = document.createElement('p');
    pBookCatalog.classList.add('book_shop');
    pBookCatalog.innerText ='Book shop';
    divBookContainer.appendChild(pBookCatalog);

    let divBookCatalog1 = document.createElement('div')
    divBookCatalog1.classList.add('catalog');

        let imgBook1 = document.createElement('img');
        imgBook1.setAttribute('src', 'book1.jpg');
        divBookCatalog1.appendChild(imgBook1);
        imgBook1.style.width = '350px';

        let book1Discr = document.createElement('div');
        book1Discr.classList.add('discription');

        divBookCatalog1.appendChild(book1Discr);
        let authorName1 = document.createElement('p');
        authorName1.innerText = 'Dante Alighieri'
        book1Discr.appendChild(authorName1);
        
        let bookName1 = document.createElement('p');
        bookName1.innerText = 'The Divine Comedy';
        book1Discr.appendChild(bookName1);

        let price1 = document.createElement('p');
        let num1 = 230;
        price1.innerText = 'Price: $'+num1;
        book1Discr.appendChild(price1);

        let moreInfo = document.createElement('div');
        moreInfo.classList.add('more_info');

        let showMore = document.createElement('p');
        showMore.classList.add('show_more');
        moreInfo.appendChild(showMore);
        book1Discr.appendChild(moreInfo);
        showMore.innerText = 'Show more';
        showMore.classList.add('open_popup');


        let addToBagButton = document.createElement('button');
        addToBagButton.classList.add('add_button');
        addToBagButton.innerText = 'Add to bag';
        moreInfo.appendChild(addToBagButton);
        

        let divBookCatalog2 = document.createElement('div');
        divBookCatalog2.classList.add('catalog');

        let imgBook2 = document.createElement('img');
        imgBook2.setAttribute('src', 'book2.jpg');
        imgBook2.classList.add('catalog_js');
        divBookCatalog2.appendChild(imgBook2);
        imgBook2.style.width = '350px';

        let book2Discr = document.createElement('div');
        book2Discr.classList.add('discription');

        divBookCatalog2.appendChild(book2Discr);
        let authorName2 = document.createElement('p');
        authorName2.innerText = 'Jacob Grimm, Wilhelm Grimm';
        book2Discr.appendChild(authorName2);
        
        let bookName2 = document.createElement('p');
        bookName2.innerText = 'Grimms Complete Fairy Tales';
        book2Discr.appendChild(bookName2);

        let price2 = document.createElement('p');
        let num2 = 125;
        price2.innerText = 'Price: $'+num2;
        book2Discr.appendChild(price2);

        let moreInfo2 = document.createElement('div');
        moreInfo2.classList.add('more_info');

        let showMore2 = document.createElement('p');
        showMore2.classList.add('show_more');
        moreInfo2.appendChild(showMore2);
        book2Discr.appendChild(moreInfo2);
        showMore2.innerText = 'Show more';
        showMore2.classList.add('open_popup');

        let addButton2 = document.createElement('button');
        addButton2.classList.add('add_button');
        addButton2.innerText = 'Add to bag';
        moreInfo2.appendChild(addButton2);


        let divBookCatalog3 = document.createElement('div');
        divBookCatalog3.classList.add('catalog');

        let imgBook3 = document.createElement('img');
        imgBook3.setAttribute('src', 'book3.jpg');
        divBookCatalog3.appendChild(imgBook3);
        imgBook3.style.width = '350px';

        let book3Discr = document.createElement('div');
        book3Discr.classList.add('discription');
        let authorName3 = document.createElement('p');
        authorName3.innerText = 'Alex Michaelides';
        book3Discr.appendChild(authorName3);
        
        let bookName3 = document.createElement('p');
        bookName3.innerText = 'The Silent Patient';
        book3Discr.appendChild(bookName3);

        let price3 = document.createElement('p');
        let num3 = 450;
        price3.innerText = 'Price: $'+num3;
        book3Discr.appendChild(price3);

        let divBookCatalog4 = document.createElement('div')
        divBookCatalog4.classList.add('catalog');

        let imgBook4 = document.createElement('img');
        imgBook4.setAttribute('src', 'book4.jpg');
        divBookCatalog4.appendChild(imgBook4);
        imgBook4.style.width = '350px';

        let moreInfo3 = document.createElement('div');
        moreInfo3.classList.add('more_info');

        let showMore3 = document.createElement('p');
        showMore3.classList.add('show_more');
        moreInfo3.appendChild(showMore3);
        book3Discr.appendChild(moreInfo3);
        showMore3.innerText = 'Show more';

        let addButton3 = document.createElement('button')
        addButton3.classList.add('add_button');
        addButton3.innerText = 'Add to bag';
        moreInfo3.appendChild(addButton3);

        let book4Discr = document.createElement('div');
        book4Discr.classList.add('discription');

        let authorName4 = document.createElement('p');
        authorName4.innerText = 'Harper Lee';
        book4Discr.appendChild(authorName4);
        
        let bookName4 = document.createElement('p');
        bookName4.innerText = 'To Kill a Mockingbird';
        book4Discr.appendChild(bookName4);

        let price4 = document.createElement('p');
        let num4 = 245;
        price4.innerText = 'Price: $'+num4;
        book4Discr.appendChild(price4);

        let moreInfo4 = document.createElement('div');
        moreInfo4.classList.add('more_info');

        let showMore4 = document.createElement('p');
        showMore4.classList.add('show_more');
        moreInfo4.appendChild(showMore4);
        book4Discr.appendChild(moreInfo4);
        showMore4.innerText = 'Show more';

        let addButton4 = document.createElement('button');
        addButton4.classList.add('add_button');
        addButton4.innerText = 'Add to bag';
        moreInfo4.appendChild(addButton4);


        let popup_bg = document.createElement('div');
            popup_bg.classList.add('popup_bg');

        let popup = document.createElement('div');
            popup.classList.add('popup');


        let closeImg = document.createElement('img');
            closeImg.classList.add('close_img');

        closeImg.setAttribute('src', 'close.svg');
        popup.appendChild(closeImg);


        popup_bg.appendChild(popup);

        let popupTitle = document.createElement('p');
        popupTitle.innerText = 'The Divine Comedy';
        popup.appendChild(popupTitle);

        let popupContent = document.createElement('p');
        popupContent.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        popup.appendChild(popupContent);

let firstOrder = document.createElement('div');
firstOrder.classList.add('first_order');

let closeOrderImg = document.createElement('img');
closeOrderImg.setAttribute('src', 'close.svg');
closeOrderImg.classList.add('close_order_img');
firstOrder.appendChild(closeOrderImg);
orderBooks.appendChild(firstOrder);

let orderImg1 = document.createElement('img');
orderImg1.classList.add('order_img_1');
orderImg1.setAttribute('src', 'book1.jpg');
firstOrder.appendChild(orderImg1);

let book1OrderDiscr = document.createElement('div')
firstOrder.appendChild(book1OrderDiscr);

let orderAuthor1 = document.createElement('p')
orderAuthor1.innerText= 'Dante Alighieri';
book1OrderDiscr.appendChild(orderAuthor1);

let bookNameOrder1 = document.createElement('p');
bookNameOrder1.innerText = 'The Divine Comedy';
book1OrderDiscr.appendChild(bookNameOrder1);


let firstOrder2 = document.createElement('div');

let closeOrderImg2 = document.createElement('img');
closeOrderImg2.setAttribute('src', 'close.svg');
closeOrderImg2.classList.add('close_order_img');
firstOrder2.appendChild(closeOrderImg2);
firstOrder2.classList.add('first_order');
orderBooks.appendChild(firstOrder2);

let orderImg2 = document.createElement('img');
orderImg2.classList.add('order_img_1');
orderImg2.setAttribute('src', 'book2.jpg');
firstOrder2.appendChild(orderImg2);

let book2OrderDiscr = document.createElement('div')
firstOrder2.appendChild(book2OrderDiscr);

let orderAuthor2 = document.createElement('p')
orderAuthor2.innerText= 'Jacob Grimm, Wilhelm Grimm';
book2OrderDiscr.appendChild(orderAuthor2);

let bookNameOrder2 = document.createElement('p');
bookNameOrder2.innerText = 'Grimms Complete Fairy Tales';
book2OrderDiscr.appendChild(bookNameOrder2);


let firstOrder3 = document.createElement('div');
firstOrder3.classList.add('first_order');
orderBooks.appendChild(firstOrder3);

let closeOrderImg3 = document.createElement('img');
closeOrderImg3.setAttribute('src', 'close.svg');
closeOrderImg3.classList.add('close_order_img');
firstOrder3.appendChild(closeOrderImg3);

let orderImg3 = document.createElement('img');
orderImg3.classList.add('order_img_1');
orderImg3.setAttribute('src', 'book3.jpg');
firstOrder3.appendChild(orderImg3);

let book3OrderDiscr = document.createElement('div')
firstOrder3.appendChild(book3OrderDiscr);

let orderAuthor3 = document.createElement('p')
orderAuthor3.innerText= 'Alex Michaelides';
book3OrderDiscr.appendChild(orderAuthor3);

let bookNameOrder3 = document.createElement('p');
bookNameOrder3.innerText = 'The Silent Patient';
book3OrderDiscr.appendChild(bookNameOrder3);

let firstOrder4 = document.createElement('div');
firstOrder4.classList.add('first_order');
orderBooks.appendChild(firstOrder4);

let closeOrderImg4 = document.createElement('img');
closeOrderImg4.setAttribute('src', 'close.svg');
closeOrderImg4.classList.add('close_order_img');
firstOrder4.appendChild(closeOrderImg4);

let orderImg4 = document.createElement('img');
orderImg4.classList.add('order_img_1');
orderImg4.setAttribute('src', 'book4.jpg');
firstOrder4.appendChild(orderImg4);

let book4OrderDiscr = document.createElement('div')
firstOrder4.appendChild(book4OrderDiscr);

let orderAuthor4 = document.createElement('p')
orderAuthor4.innerText= 'Harper Lee';
book4OrderDiscr.appendChild(orderAuthor4);

let bookNameOrder4 = document.createElement('p');
bookNameOrder4.innerText = 'To Kill a Mockingbird';
book4OrderDiscr.appendChild(bookNameOrder4);

let confirmOrder = document.createElement('div');
confirmOrder.classList.add('confirm_order');
let confirmTotal = document.createElement('p');
let result = document.createElement('input');
result.classList.add('result');
confirmTotal.innerText = 'Total: ';
let confirmButton = document.createElement('a');
confirmButton.setAttribute('href', 'deliveryform.html');
confirmButton.classList.add('confirm_button');
confirmButton.innerText = 'Confirm order';
confirmOrder.appendChild(confirmTotal);
confirmOrder.appendChild(confirmButton);
orderBooks.appendChild(confirmOrder);
confirmTotal.appendChild(result);



divBookContainer.appendChild(divBookCatalog1);
divBookContainer.appendChild(divBookCatalog2);
divBookContainer.appendChild(divBookCatalog3);
divBookContainer.appendChild(divBookCatalog4);
divBookCatalog1.appendChild(book1Discr);
divBookCatalog2.appendChild(book2Discr);
divBookCatalog3.appendChild(book3Discr);
divBookCatalog4.appendChild(book4Discr);




body.appendChild(divHead);
body.appendChild(mainContainer);
body.appendChild(popup_bg);

  


closeOrderImg.addEventListener('click',() => {
    firstOrder.classList.remove('active');
    result.value = +result.value - +num1;
})

closeOrderImg2.addEventListener('click',() => {
    firstOrder2.classList.remove('active');
    result.value = +result.value - +num2;
})

closeOrderImg3.addEventListener('click',() => {
    firstOrder3.classList.remove('active');
    result.value = +result.value - +num3;
})

closeOrderImg4.addEventListener('click',() => {
    firstOrder4.classList.remove('active');
    result.value = +result.value - +num4;
})

addButton2.addEventListener('click',() => {
    confirmOrder.classList.add('active');
    firstOrder2.classList.add('active');
    result.value = +result.value + +num2;
})

addButton3.addEventListener('click',() => {
    confirmOrder.classList.add('active');
    firstOrder3.classList.add('active');
    result.value = +result.value + +num3;
})

addButton4.addEventListener('click',() => {
    confirmOrder.classList.add('active');
    firstOrder4.classList.add('active');
    result.value = +result.value + +num4;
})

addToBagButton.addEventListener('click',() => {
    confirmOrder.classList.add('active');
    firstOrder.classList.add('active');
    result.value = +result.value + +num1;
})

showMore.addEventListener('click',(event)=>{
    event.preventDefault();
    popupTitle.innerHTML = 'The Divine Comedy';
    popup_bg.classList.add('active');
    popup.classList.add('active');
});

showMore2.addEventListener('click',(event)=>{
    popupTitle.innerHTML = 'Grimms Complete Fairy Tales';
    event.preventDefault();
    popup_bg.classList.add('active');
    popup.classList.add('active');
});

showMore3.addEventListener('click',(event)=>{
    event.preventDefault();
    popup_bg.classList.add('active');
    popup.classList.add('active');
    popupTitle.innerHTML = 'The Silent Patient';
});

showMore4.addEventListener('click',(event)=>{
    event.preventDefault();
    popup_bg.classList.add('active');
    popup.classList.add('active');
    popupTitle.innerHTML = 'To Kill a Mockingbird';
});

let closePopup = document.querySelector('.close_img');
    closePopup.addEventListener('click',(event)=> {
        event.preventDefault();
        popup_bg.classList.remove('active');
        popup.classList.remove('active');
    })

document.addEventListener('click',(event)=>{
    if (event.target === popup_bg){
        popup_bg.classList.remove('active');
        popup.classList.remove('active');
    }
})

window.onload = function() {
    addButton4.onclick = function() {
       this.disabled = 'disabled';
    }
    addButton3.onclick = function() {
        this.disabled = 'disabled';
     }
     addButton2.onclick = function() {
        this.disabled = 'disabled';
     }
     addToBagButton.onclick = function() {
        this.disabled = 'disabled';
     }
} 

window.onload = function() {
    result.value = '';
}