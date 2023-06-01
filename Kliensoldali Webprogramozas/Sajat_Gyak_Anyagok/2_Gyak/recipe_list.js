// 1. / a feladat:
const li = $('li'); //Ebbe bármit lehet .class-t, #id-t, de tag-eket is
console.log(li);

// 1. / b feladat:
const navbar = $('.navbar-brand');
console.log(navbar);

// 2. / a feladat:
const categories = $('.card');
const categoryItems = categories.first().find('.list-group-item');
console.log(categoryItems);

// 2. / b feladat:
const foodLinks = $('.list-group-item > a'); // ' > ' abban lévő linkek (a)
const foodCategories = foodLinks.closest('.card').find('.card-header');
console.log(foodCategories.text());

foodCategories.each((i, element) => {         // forEach igazából
    console.log(i + ' ' + $(element).text());
});
