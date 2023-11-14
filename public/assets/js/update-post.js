const addReviewBtn = document.getElementById('add-review-btn');
addReviewBtn.addEventListener('click', function (event)  {
    const reviewInput = document.getElementById('review-input');
    const newReview = reviewInput.value.trim();

    if (newReview !== ' ') {
        review.push(newReview);

        displayContent();

        reviewInput.value = '';
    }
});