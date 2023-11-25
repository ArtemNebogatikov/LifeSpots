function getReview() {
    let review = {}

    review["userName"] = prompt("Как вас зовут?")
    review["comment"] = prompt("Напишите свой отзыв")
    review["date"] = new Date().toLocaleDateString()
    writeReview(review)
}
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}

