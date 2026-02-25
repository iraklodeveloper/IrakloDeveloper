const cards = [
    {
        placeName: 'The Soul Of Tbilisi',
        description: `Hotel 'The Soul Of Tbilisi' is equipped with modern technologies to make our clients feel comfortable in our 4.7/4.9 star hotel!
         At The Soul Of Tbilisi you will find exquisite dishes as well as pleasant Georgian songs performed by our hotel's distinguished band`,
        rating: 4.5,
        price: 150,
        // აქ img თვისება გავხადე მასივი რადგან მაქვს სხვადასხვა სურათების ჩამონათვალი.
        // მასივი არის მონაცემთა ჩამონათვალის კრებული,სადაც იწერება მხოლოდ value. ხოლო ობიექტი არის მნიშვნელობათა და სახელთა ჩამონათვალის კრებული, ობიექტში მონაცემების ჩაწერის პრინციპია keyvalue. მასივის უპირატესობაა ელემენტების რიგითი ნომრები[ინდექსი[0]].
        img: [
            'https://i.ibb.co/Q7hC4zS9/Tbilisi-Hotel.jpg',
            'https://i.ibb.co/WN43yfPT/tbilisi-photo-2-1.png',
            'https://i.ibb.co/Dgt7Ftpt/tbilisi-photo-3.png'
        ],
        isPopular: true,
        cityCategory: 'tbilisi',
        alt: 'Hotel The Soul Of Tbilisi Image'
    },
    {
        placeName: 'Batumi Vibe',
        description: `A truly amazing atmosphere awaits you at Hotel 'Batumi Vibe'! 
        Delightful scents, enchanting evenings, stunning sea views and that authentic Batumi vibe! We offer our guests high-quality service and memories that will last a lifetime`,
        rating: 4.5,
        price: 160,
        img: [
            'https://i.ibb.co/YFfRyX33/Batumi-Hotel.jpg',
            'https://i.ibb.co/C5YzB9gN/batumi-photo-2.png',
            'https://i.ibb.co/yFHf4j0m/batumi-photo-3.png'
        ],
        isPopular: true,
        cityCategory: 'batumi',
        alt: 'Hotel Batumi Vibe Image'
    },
    {
        placeName: 'Kutaisi Aura',
        description: `Welcome to Kutaisi! Greetings from 'Kutaisi Inn', the premier hotel in one of Georgia's most distinguished regions. We invite you to experience our signature coziness firsthand, 
        and don't forget to enjoy our exceptional live band and talented chefs! We offer our guests unforgettable moments and comfort in every day spent with us`,
        rating: 4.5,
        price: 120,
        img: [
            'https://i.ibb.co/fYMKxqsk/Kutaisi-Inn.jpg',
            'https://i.ibb.co/pBBGkhHT/kutaisi-photo-2.png',
            'https://i.ibb.co/LDCjHtrK/kutaisi-photo-3.png'
        ],
        isPopular: false,
        cityCategory: 'kutaisi',
        alt: 'Hotel Kutaisi Aura Image'
    },
    {
        placeName: 'The air of Racha',
        description: `Discover the 'Switzerland of Georgia' at Racha Retreat! Nestled among ancient forests and majestic mountains, our hotel offers the perfect escape from the city noise. 
        Experience authentic Racha hospitality, taste the world-famous Khvanchkara wine, and enjoy breathtaking views from our terrace. We provide a peaceful sanctuary where nature and comfort meet in perfect harmony.`,
        rating: 4.5,
        price: 150,
        img: [
            'https://i.ibb.co/gMDQ09Vr/image.png',
            'https://i.ibb.co/VWFkT3p3/racha-s-photo-3.png',
            'https://i.ibb.co/DPMGxgvv/racha-s-photo-2.png',
        ],
        isPopular: true,
        cityCategory: 'racha',
        alt: 'Hotel The air of Racha Image'
    },
    {
        placeName: 'White Bakuriani',
        description: `Embrace the ultimate winter wonderland at 'Bakuriani Peak'! Located just steps away from the premier ski slopes, our hotel is the ideal destination for adventure seekers and families alike. 
        Warm up by our cozy fireplace after a day of skiing, and enjoy our indoor heated pool with mountain views. We offer a high-standard service to make your alpine holiday truly unforgettable.`,
        rating: 4.5,
        price: 160,
        img: [
            'https://i.ibb.co/39PGmB4L/image.png',
            'https://i.ibb.co/PGr0rkPT/bakuriani-photo-3.png',
            'https://i.ibb.co/5Xt4CYBK/bakuriani-photo-2.png'
        ],
        isPopular: false,
        cityCategory: 'bakuriani',
        alt: 'Hotel White Bakuriani Image'
    }
]
// მომაქვს search ინპუთი აიდით js-ში და ვინახავ ცვლადში.
const searchInput = document.getElementById('search')
// მომაქვს category ასარჩევი და ვინახავ ცვლადში
const categorySelect = document.getElementById('category')
// მომაქვს ფასის ასაწევ-დასაწევი და ვინახავ ცვლადში 
const priceRange = document.getElementById('priceRange')
// მომაქვს popular-ი და ვინახავ ცვლადში
const popularCheckBox = document.getElementById('popularOnly')
// მომაქვს ფასის მაჩვენებელი და ვინახავ ცვლადში
const priceLabel = document.getElementById('priceLabel')
// მომაქვს ცარიელი div-ი კლასით და ვინახავ ცვლადში 
const productList = document.getElementById('productList')
// ვქმნი ცარიელ ობიექტს ფოტოებისთვის 
const slideStates = {};
// ვაკეთებ მთავარ ფუნქციას სახელად updateDisplay
function updateDisplay() {
    // ვქმნი ცვლადს და ვინახავ serch-ში ჩაწერილ ტექსტს ცვლადში + ვაპატარავებ ასოებს(პროგრამის მუშაობისთვის სასარგებლოა)
    const searchText = searchInput.value.toLowerCase()
    // ვქმნი ცვლადს და ვინახავ category-ში არსებულ მნიშვნელობას
    const selectedCategory = categorySelect.value
    // ვქმნი ცვლადს და ვინახავ price input-ში მითიტებულ მნიშვნელობას
    const maxPrice = Number(priceRange.value)
    // ვქმნი ცვლადს და ვინახავ boolean მნიშვნელობას, popular checkbox inpt-ს true || false 
    const showPopularOnly = popularCheckBox.checked
    // pricelabel-ში ვამატებ max price მითითებული ფასის რიცხვს
    priceLabel.innerHTML = maxPrice
    // ვქმნი ცვლადს filtered და ვაძლევ მნიშვნელობას
    const filtered = cards.filter(card => {
        // ვქმნი ცვლად machesName და ვინახავ boolean მნიშვნელობას. if .includes(searchText) === false machesName = false 
        const matchesName = card.placeName.toLowerCase().includes(searchText)
        // ვქმნი ცვლადს machesCategory და ვინახავ მასში boolean მნიშვნელობას. პირობა ასეთია: ან selectedCategory(არჩეული კატეგორია) უნდა მქონდეს all || card ობიექტის cityCategory თვისება უნდა ემთხვეოდეს არჩეულ კატეგორიას
        const matchesCategory = selectedCategory === 'all' || card.cityCategory === selectedCategory
        // ვქმნი ცვლადს და ვინახავ boolean მნიშვნელობას. card ობიექტის price თვისების შიგთავსი ნაკლები ან ტოლი უნდა იყოს maxprice ცვლადის მნიშვნელობაზე 
        const matchesPrice = card.price <= maxPrice
        // ვქმნი ცვლადს და აქაც ვინახა boolean მნიშვნელობას. თუ მომხმარებელმა არ მონიშნა საიტზე popular only-ი !showPopularOnly-ი ხდება true, if მომხმარებელმა მონიშნა popular only-ი !showPopularOnly-ი ხდება false და პროგრამა გადადის card ობიექტის isPopular თვისების მნიშვნელობის შესამოწმებლად
        const matchesPopular = !showPopularOnly || card.isPopular
        // ბოლოს პროგრამა აბრუნებს card-ს, თუ რომელიმე ცვლადი უდის false-ს card-ი არ გამოჩნდება საიტზე 
        return matchesName && matchesCategory && matchesPrice && matchesPopular
    })
    // ვქმნი if-ის პირობას და ვწერ თუ მასივი filtered-ის lenght უდრის 0-ს [0] productlist div-ში ჩაწერე პარაგრაფი 
    // თუ მასივ filtered-ში არცერთი card-ი არ მოხვდა საიტი დაწერს nothing found
    if (filtered.length === 0) {
        // .innerHTML არის თვისება
        productList.innerHTML = '<p class="nothingfound">Nothing Found</p>'
    } else {
        // .map არის მეთოდი რომელიც ცვლის მასივის ელემენტებს ჩემი პირობის შესაბამისად. .map & .filter მეთოდები იხმარება მხოლოდ მასივზე
        productList.innerHTML = filtered.map(c => {
            return `    
            <div class="card" data-hotel="${c.placeName}">
                <div class="popandimg">
                    ${c.isPopular ? '<p class="popular">POPULAR</p>' : ''}
                    <button class="slider-btn prev">&#10094;</button>
                    <img class="image" src='${c.img[0]}' alt="${c.alt || c.placeName}">
                    <button class="slider-btn next">&#10095;</button>
                </div>
                <div class="text-section">
                    <h3 class="place-name">${c.placeName}</h3>
                    <p class="description-section"><span class="bold">Description:</span> ${c.description}</p>
                    <p class="rating-section"><span class="bold">Rating:</span>
                        <span class="star full">&#9733</span>
                        <span class="star full">&#9733</span>
                        <span class="star full">&#9733</span>
                        <span class="star full">&#9733</span>
                        <span class="star half">&#9733</span>
                    </p>
                    <p class="price-section"><span class="bold">Price:</span> Starting from <span class="price bold">$${c.price}</span> per night</p>
                </div>
                <div class="btn-container">
                   <button class="book-btn">Book Now</button>
                </div>
            </div>
        `}).join('')
    }
}
// ფუნქცია სურათის შესაცვლელად (ღილაკებისთვის)
// ვქმნი ფუნქციას changeSlide და გადავცემ ორ პარამეტრს hotelName & direction
function changeSlide(hotelName, direction) {
    const hotel = cards.find(c => c.placeName === hotelName);
    if (!hotel) return;

    if (slideStates[hotelName] === undefined) slideStates[hotelName] = 0;
    slideStates[hotelName] += direction;

    if (slideStates[hotelName] >= hotel.img.length) slideStates[hotelName] = 0;
    if (slideStates[hotelName] < 0) slideStates[hotelName] = hotel.img.length - 1;

    const cardEl = document.querySelector(`[data-hotel="${hotelName}"] .slider-img`);
    if (cardEl) {
        cardEl.src = hotel.img[slideStates[hotelName]];
    }
}
// ცვლად productList-ში არსებულ დოკუმენტს <div id="productList"></div> დავაწებებ EventListener-ს
// ამ კოდით ვეუბნები ბრაუზერს: „როცა 'click' მოვლენა მოხდება შექმენი ამ მოვლენის პატაკი(ანგარიში)
// და დაარქვი მას სახელი 'e' და გადმომეცი მე ფუნქციაში, რომ შიგთავსი წავიკითხო“ 
productList.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('slider-btn')) {
        const name = e.target.closest('.card').dataset.hotel
        const direction = e.target.classList.contains('next') ? 1 : -1;
        changeSlide(name, direction)
    }
})

searchInput.addEventListener('input', updateDisplay)
categorySelect.addEventListener('change', updateDisplay)
priceRange.addEventListener('input', updateDisplay)
popularCheckBox.addEventListener('change', updateDisplay);
updateDisplay()