const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];


redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("red-car.jpg")';
    });
    
    grayColor[0].addEventListener("click", function () {
        cartButton.style.backgroundColor = "gray";
        itemTag.style.backgroundColor = "gray";
        imageCard.style.backgroundImage = 'url("gray-car.jpg")';
        });
        blackColor.addEventListener("click", function () {
            cartButton.style.backgroundColor = "black";
            itemTag.style.backgroundColor = "black";
            imageCard.style.backgroundImage = 'url("black-car.jpg")';
            });

            const cart = () => {
                cartButton.style.display = "none";
                feedbackBtn.style.display = "block";
                };
                cartButton.addEventListener("click", cart);

                const feedback = () => {
                    cartButton.style.display = "block";
                    feedbackBtn.style.display = "none";
                    };
                    feedbackBtn.addEventListener("click", feedback);
                    