//programa para ordenar productos de una tienda bajo niveles criterios: precio, stock, porcentaje de descuento, etc
//ordenar los productos por categoria
//aplicar el principio DIP
const data = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "beauty",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    price: 19.99,
    discountPercentage: 5.5,
    rating: 3.28,
    stock: 44,
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    price: 12.99,
    discountPercentage: 19.03,
    rating: 2.51,
    stock: 68,
  },
  {
    id: 4,
    title: "Red Lipstick",
    category: "beauty",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    price: 12.99,
    discountPercentage: 19.03,
    rating: 2.51,
    stock: 68,
  },
  {
    id: 5,
    title: "Red Nail Polish",
    category: "beauty",
    image:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    price: 8.99,
    discountPercentage: 2.46,
    rating: 3.91,
    stock: 71,
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
    price: 49.99,
    discountPercentage: 0.32,
    rating: 4.85,
    stock: 17,
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
    price: 129.99,
    discountPercentage: 18.64,
    rating: 2.76,
    stock: 41,
  },
  {
    id: 8,
    title: "Dior J'adore",
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
    price: 89.99,
    discountPercentage: 17.44,
    rating: 3.31,
    stock: 91,
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png",
    price: 69.99,
    discountPercentage: 11.47,
    rating: 2.68,
    stock: 3,
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    category: "fragrances",
    image:
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png",
    price: 79.99,
    discountPercentage: 8.9,
    rating: 2.69,
    stock: 93,
  },
];

let container = document.getElementById("imageContainer");
//clase que maneja la logica mas abstracta
class Order {
  constructor(sorting) {
    this.sorting = sorting;
  }
  sortByType() {
    return this.sorting.sort();
  }
}

class SortProcessor {
  constructor(typeOfOrder, typeOfProduct, list) {
    this.sorting = new typeOfOrder();
    this.typeOfProduct = typeOfProduct;
    this.list = list;
  }
  sort() {
    if (!this.typeOfProduct) {
      return this.sorting.process(this.list);
    } else {
      const filtered = this.list.filter((item) => {
        return item.category === this.typeOfProduct;
      });
      return this.sorting.process(filtered);
    }
  }
}

class ForPrice {
  process(datos) {
    const firstArray = datos.sort((a, b) => {
      return b.price - a.price;
    });
    return firstArray;
  }
}

class ForStock {
  process(datos) {
    const firstArray = datos.sort((a, b) => {
      return b.stock - a.stock;
    });
    return firstArray;
  }
}

class ForDiscountPercentage {
  process(datos) {
    const firstArray = datos.sort((a, b) => {
      return b.discountPercentage - a.discountPercentage;
    });
    return firstArray;
  }
}

class ForRating {
  process(datos) {
    const firstArray = datos.sort((a, b) => {
      return b.rating - a.rating;
    });
    return firstArray;
  }
}

class ForId {
  process(datos) {
    const firstArray = datos.sort((a, b) => {
      return a.id - b.id;
    });
    return firstArray;
  }
}

const orderMap = {
  forPrice: ForPrice,
  forStock: ForStock,
  forDiscountPercentage: ForDiscountPercentage,
  forRating: ForRating,
  forId: ForId,
};

function printInOrder() {
  container.innerHTML = "";
  let orderType = document.getElementById("inputValue").value;
  let productType = document.getElementById("options").value;
  let typeOfOrder = orderMap[orderType];
  let typeOfOrdenation = new SortProcessor(typeOfOrder, productType, data);
  let ordination = new Order(typeOfOrdenation);
  let newArray = ordination.sortByType();
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    const img = document.createElement("img");
    const paragraph = document.createElement("h3");
    const type = document.createElement("h4");
    img.src = newArray[i].image;
    img.style.width = "400px";
    img.style.height = "400px";
    paragraph.textContent = newArray[i].title;
    type.textContent = newArray[i].category;
    container.appendChild(img);
    container.appendChild(paragraph);
    container.appendChild(type);
  }
}

function print() {
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    const paragraph = document.createElement("h3");
    const type = document.createElement("h4");
    img.src = data[i].image;
    img.style.width = "400px";
    img.style.height = "400px";
    paragraph.textContent = data[i].title;
    type.textContent = data[i].category;
    container.appendChild(img);
    container.appendChild(paragraph);
    container.appendChild(type);
  }
}
print();
