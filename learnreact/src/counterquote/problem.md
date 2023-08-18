Let's make a counter but there's a slight change.
API: https://api.quotable.io/quotes/random

Given HTML Structure and requirements:
div(className: "count"). This div will contain the current Count. Please display the count as "Count: 0". By default the value of count should be 0
button(className: "increament"). Clicking on the button should increment the count by 1. The max value of count should be 10. Once reaching the max value, "increment" button should be disabled.
button(className: "decrement"). Clicking on the button should decrement the count by 1. The min value of count should be 0. Once reaching the min value, "decrement" button should be disabled.
div(className: "quote"). This div should only exist when the value of count is 5 or 10. Whenever the count reaches 5 or 10, use the API to fetch a new quote and display it in this div in this form Random Quote: This is a random quote

Sample Response from the API:
[{
    "_id":"9AM3Ct_rML",
    "content":"Keep me away from the wisdom which does not cry, the philosophy which does not laugh and the greatness which does not bow before children.",
    "author":"Kahlil Gibran",
    "tags":["Wisdom"],
    "authorSlug":
    "kahlil-gibran",
    "length":138,
    "dateAdded":"2020-12-10",
    "dateModified":"2023-04-14"
}]
Test Cases
1. should display initial count as 0
2. should increment count when Increment button is clicked
3. should decrement count when Decrement button is clicked
4. should disable Increment button when count reaches maxValue
5. should disable Decrement button when count is 0
6. should fetch a random quote when count reaches maxValue or half of maxValue
