function createProductThumbnail(imageSrc, alt) {
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("product-thumnail");

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = alt;

    thumbnail.append(img);

    return thumbnail;
}

function createProductMeta(title, price) {
    const metaEl = document.createElement("div");
    metaEl.classList.add("product-meta");

    const titleEl = document.createElement("h3");
    titleEl.classList.add("product-title");
    titleEl.textContent = title;

    const priceEl = document.createElement("div");
    priceEl.classList.add("product-price");
    priceEl.textContent = "$" + price;

    metaEl.append(titleEl, priceEl);

    return metaEl;
}

function createProduct(product) {
    const productEl = document.createElement("div");
    productEl.classList.add("product");

    const link = document.createElement("a");
    link.classList.add("product-link");

    link.append(
        createProductThumbnail(product.image, product.title),
        createProductMeta(product.title, product.price)
    );

    productEl.append(link);

    return productEl;
}

const productList = document.getElementById("product-list");

products.forEach(function (product) {
    productList.append(createProduct(product));
});