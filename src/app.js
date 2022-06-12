import data from "../db.json" assert { type: "json" };
console.log(data.filter((val) => val.id === 1));
const category = data.map((val) => ({
  id: val.categories.id,
  name: val.categories.name,
}));

const categoryList = category.filter((vals, index) => {
  // console.log(category.findIndex((val)=> vals.id === val.id),index,category.findIndex((val)=> vals.id === val.id) === index);
  return category.findIndex((val) => vals.id === val.id) === index;
});

console.log(categoryList);

//
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerContainer = $(".header-container");
const listCategory = $(".list-category");
const listProducts = $(".list-product");
const sliders = $(".sliderss");


const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "VNI",
  minimumFractionDigits: 3,
});


export const app = {
  data,
  header: ["Nhà sách Tiki"],
  sliders: [
    "./Img/Rectangle (12).png",
    "./Img/IimgSlide4.webp",
    "./Img/imgSlide2.webp",
    "./Img/ImgSlide3.webp",
  ],

  renderSlider(data) {
    const sliderList = data.map(
      (val, index) =>
        `
      <img class="slider" src="${val}" alt=""  />
      `
    );

    return (sliders.innerHTML = sliderList.join(""));
  },

  renderHeader(header) {
    const headers = header.map(
      (val) =>
        `
                <i class="fa-light fa-greater-than px-[5px] text-[#808089] text-[16px]"></i>
                <span class="">${val}</span>
                `
    );

    return headerContainer.innerHTML = headers.join("")
  },

  renderCategory(data) {
    const categorys = data.map(
      
      (val,index) =>
        `
          <ul>

            <li onlick="handleClick(${val.id}")" class="listproduct my-[8px] cursor-pointer" data-index="${val.id}"">${val.name}</li>
          </ul>
        `
    );
   

    return listCategory.innerHTML = categorys.join("")
  },

  

  rederListPoduct(data) {
   

     const listProduct = data.map(
      (val) =>
        `
       
        <a  class=" a  md:h-[500px] xl:h-[400px] list cursor-pointer" href="./daitail.html"  data-index="${val.id}" >
        <div class=" pt-[10px] data-index="${val.id}">
        <div data-index="${val.id}" class="thumb-nail mx-[auto] xl:w-[200px] md:h-[300px]  xl:h-[200px] sm:mb-[12px] xl:mb-[0px]">
            <img class=" w-[95%] h-[90%] xl:h-[100%] m-[auto]" src=${
              val?.images[0].base_url
            } alt="">
        </div>
        <div data-index="${val.id}" class="p-[17px]">

            <div data-index="${val.id}" class="tiki-now w-[56px] h-[16px]">
                <img class="" src="./Img/Rectangle (13).png" alt="">
            </div>
            <div data-index="${val.id}" class="giao text-[#00AB56] text-[11px] font-medium my-[8px] ">
                GIAO SIÊU TỐC 2H
            </div>
            <p data-index="${val.id}" class="name text-xs mb-[8px] font-">${
              val?.name.length > 70 ? val?.name.slice(0, 50) : val?.name
            }</p>
            <div data-index="${val.id}" class="danh gia ">
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <span class="text-[11px] text-[#787878] px-[6px]">${
                  val?.quantity_sold?.text || "Đã bán : 0"
                }</span>
            </div>
            <div>
            <span data-index="${val.id}" class="text-[#FF424E]">${new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(val?.original_price)}</span>
            </div>
          

        </div>    
    </div>
    </a>    

        `
    );

    return listProducts.innerHTML = listProduct.join("")
  },
  
  handleEvent: function() {
    console.log(listCategory);
    listCategory.onclick = function(e) {
      if(app.header.length >=2) {
        app.header.pop()
      }
      JSON.parse(localStorage.getItem('listCategory)')) !== undefined ? localStorage.removeItem('listCategory') : ''
      const newdata = data.filter((val)=> val.categories.id === Number(e.target.dataset.index)) 
      console.log(newdata);
      app.header.push(newdata[0].categories?.name)
      localStorage.setItem('listCategory', JSON.stringify(app.header))
      app.renderHeader(app.header)
      app.rederListPoduct(newdata)
      
    }
    listProducts.onclick = function(e) {
      localStorage.removeItem('daitel')
      const daitels = e.target.closest('.a')
      console.log(daitels.dataset.index);
      
     localStorage.setItem('daitel',JSON.stringify(daitels.dataset.index))
    
    }
    
  },

  start() {
    this.renderHeader(this.header);
    this.renderCategory(categoryList);
    this.rederListPoduct(this.data);
    this.renderSlider(this.sliders);
    this.handleEvent()

  },
};

app.start();


// slider

const upSlider = $(".opacity1");
const backSlider = $(".opacity2");
const slider = $$(".slider");
console.log(slider[0].style.zIndex = 2);


function handleUpSlider(list) {
  let index = 0;

  function handleUp() {
    ++index;
    console.log(index);

    if (index > 4) {
      index = 0;
      list[3].style.zIndex = 2;

      list[0].style.zIndex = 2;
    }
    console.log(index);

    list[index - 2].style.zIndex = 0;

    list[3].style.zIndex = 0;

    return (list[index - 1].style.zIndex = 2);
  }

  return handleUp;
}

backSlider.addEventListener("click", handleUpSlider(slider));

upSlider.addEventListener("click", handleUpSlider(slider));


