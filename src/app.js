import data from "../db.json" assert { type: "json" };
console.log(data);
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
console.log(headerContainer);
const app = {
  data,
  header: ["Nhà sách Tiki"],
  sliders : [
    './Img/Rectangle (12).png',
    './Img/IimgSlide4.webp',
    './Img/imgSlide2.webp',
    './Img/ImgSlide3.webp'
  ],

  renderSlider(data){
    const sliderList = data.map((val,index)=> (
      `
      <img class="slider" src="${val}" alt=""  />
      `
    ))

   return sliders.innerHTML = sliderList.join('')


  },


  renderHeader(header) {
    const headers = header.map(
      (val) =>
        `
                <i class="fa-light fa-greater-than px-[5px] text-[#808089] text-[16px]"></i>
                <span class="">${val}</span>
                `
    );

    return (headerContainer.innerHTML = headers.join(""));
  },

  renderCategory(data) {
    const categorys = data.map(
      (val) =>
        `
          <ul>

            <li class="my-[8px] cursor-pointer">${val.name}</li>
          </ul>
        `
    );

    return listCategory.innerHTML = categorys.join("");
  },

  rederListPoduct(data) {
    const listProduct = data.map(
      (val) => 
        `
        
        <a class=" 300px md:h-[500px] xl:h-[400px] list" href="">
        <div class=" pt-[10px]">
        <div class="thumb-nail mx-[auto] xl:w-[200px]  xl:h-[200px] mb-[12px]">
            <img class=" w-[90%] h-[90%] m-[auto]" src=${val?.images[0].base_url} alt="">
        </div>
        <div class="p-[17px]">

            <div class="tiki-now w-[56px] h-[16px]">
                <img class="" src="./Img/Rectangle (13).png" alt="">
            </div>
            <div class="giao text-[#00AB56] text-[11px] font-medium my-[8px] ">
                GIAO SIÊU TỐC 2H
            </div>
            <p class="name text-xs mb-[8px] font-light">${val?.name}</p>
            <div class="danh gia ">
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <i style="color: rgb(253, 216, 54)" class="fa-solid fa-star text-xs"></i>
                <span class="text-[11px] text-[#787878] px-[6px]">${val?.quantity_sold?.text || 'Đã bán : 0'}</span>
            </div>

        </div>    
    </div>
    </a>    

        `
    );

    return listProducts.innerHTML = listProduct.join('');
  },

  start() {
    this.renderHeader(this.header);
    this.renderCategory(categoryList);
    this.rederListPoduct(this.data)
    this.renderSlider(this.sliders);
  },
};

app.start();

// slider


const upSlider = $('.opacity1')
const backSlider = $('.opacity2')
const slider = $$('.slider')
// console.log(slider[0].style.zIndex = 2);
// slider[3].styles.tabIndex = 2
let index = 1
function handleUpSlider (list) {

 if(index > list.length) {
  index = 1
}
 
  function handleUp() {
    
    ++index
      console.log(index);

   if(index > 4) {
     index = 0
     list[3].style.zIndex = 2

     list[0].style.zIndex = 2
   }
   console.log(index);
   
    list[index-2].style.zIndex = 0
   
      list[3].style.zIndex = 0
    
   
   
   return   list[index - 1 ].style.zIndex = 2
    
  }
  
  return handleUp
}

 
backSlider.addEventListener('click', handleUpSlider(slider))

upSlider.addEventListener('click', handleUpSlider(slider))



 


