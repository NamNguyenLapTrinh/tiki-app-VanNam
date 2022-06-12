import data from "../db.json" assert { type: "json" };
const id = JSON.parse(localStorage.getItem("daitel"));
localStorage.setItem("daitelId", JSON.stringify(id));
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerContainer = $(".header-container");
const detailDes = $(".deitail-des");
const arrayDG = [1, 2, 3, 4, 5];
const productSmail = $(".product-similar");
const specifications = $(".specifications");
const des = $(".description");
const buTonDes = $(".button-des");
const deitail = {
  renderHeader() {
    const listHeader = JSON.parse(localStorage.getItem("listCategory"));
    const id = Number(JSON.parse(localStorage.getItem("daitelId")));
    
    const dataName = data.filter((val) => val.id === id)[0]?.name;
    

    listHeader.push(dataName);
    const Header = listHeader.map(
      (val) =>
        `
                      <i class="fa-light fa-greater-than px-[5px] text-[#808089] text-[16px]"></i>
                      <span class="">${val}</span>
                      `
    );

    return (headerContainer.innerHTML = Header.join(""));
  },

  renderContent() {
    const id = Number(JSON.parse(localStorage.getItem("daitelId")));
    console.log(id);
    console.log(data.filter((val) => val.id === id));
    document.title = data.filter((val) => val.id === id)[0].name
    const daitel = data
      .filter((val) => val.id === id)
      .map(
        (val) => 
         /*html*/`
        
        <div style="border-right: 1px solid #F2F2F2" class="xl:basis-[40%]">
            <div class="img w-[86%] mx-[auto]">
                <img src=${val?.images[0].base_url} alt="">
            </div>
            <div class="grid grid-cols-5 gap-2 mt-[16px]   items-center mx-[10px]">
                <div class="">
                    <img class="h-[100%]"  src=${
                      val?.images[1]?.medium_url || val?.images[0]?.medium_url
                    } alt="">
                </div>
                <div class="">
                    <img class="h-[100%]" src=${
                      val?.images[1]?.thumbnail_url ||
                      val?.images[0]?.thumbnail_url
                    } alt="">
                </div>
                <div class="">
                    <img class="h-[100%]" src=${
                      val?.images[1]?.small_url || val?.images[0]?.small_url
                    } alt="">
                </div>
                <div class="">
                    <img class="h-[100%]" src=${
                      val?.images[0]?.small_url
                    } alt="">
                </div>
                <div class="">
                    <img class="h-[100%]" src=${
                      val?.images[0]?.small_url
                    } alt="">
                </div>
            </div>
            <div class="hidden xl:flex items-center mt-[24px]">
                <span class="pr-[7px] ml-[16px] text-[15px] font-light">Chia sẻ:</span>
                <div class="flex cursor-pointer">
                    <img src="./imgdeil/Screen Shot 2022-06-08 at 13.30.28.png" alt="">

                </div>
            </div>
        </div>
        <div class=" xl:basis-[39%] pl-[12px]">
            <div class="hidden xl:block text-xs w-[118%]">
                <span>Tác giả : <span class="text-[#0D5CB6]">${
                  val?.authors?.[0]?.name || "Ca Tây"
                }</span> </span>
                <span>Đứng thứ 13 trong</span>
                <span class="text-[#0D5CB6]">Top 1000
                    Sách tư duy - Kỹ năng sống
                    bán chạy tháng này
                </span>

            </div>
            <div class="">
                <div class="name">
                    <span class="text-[23px] font-normal">${val?.name}</span>
                </div>
                
                <div class="danhGia ">
                   ${arrayDG
                     .slice(0, Math.floor(val?.rating_average))
                     .map(
                       () =>
                         `<i class="fa-solid fa-star text-xs px-[3px] text-[#FDD835]" ></i>`
                     )
                     .join("")}
                    
                    <span style="border-right: 2px solid #F2F2F2" class="text-[14px] text-[#787878] px-[10px]">
                        (Xem 2942 đánh giá)
                    </span>
                    <span class="text-[15px] text-[#787878] px-[8px]">${
                      val.quantity_sold?.text || "Đã bán : 0"
                    }</span>
                </div>
                <div class="gia bg-[#FAFAFA] pb-[10px] mt-[16px]">
                    <span class="px-[10px] text-[#FF424E] text-[32px]">
                    ${new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(val?.original_price)}
                    </span>
                    <span class="text-[13px] text-[#808089]">${new Intl.NumberFormat(
                      "vi-VN",
                      { style: "currency", currency: "VND" }
                    ).format(
                      val?.original_price - Math.floor(Math.random(5) * 10000)
                    )}</span>
                    <span style="border: 1px solid #FF424E"
                        class="text-[13px] text-[#FF424E] py-[2px] px-[3px] rounded-sm">${Math.floor(
                          Math.random(10) * 50
                        )}%</span>
                    <div style="border: 1px solid #C6BCF8"
                        class="cursor-pointer w-[65%] flex items-center h-[29px] bg-[#F2F0FE] mt-[10px] ml-[16px] rounded">
                        <img class="px-[7px]" src="./imgdeil/Rectangle (18).png" alt="">
                        <span class=" text-[11px] md:text-[14px] text-[#402DA1] px-[7px]">Thưởng lên đến 7,31 ASA ≈ 3.969
                            Xu</span>
                    </div>
                </div>

                <div style="border-top: 1px solid #F2F2F2; border-bottom: 1px solid #F2F2F2"
                    class="giamGia  my-[16px]  ">
                    <div class="pt-[17px] pb-[5px]">
                        <span class="text-[15px]">15 Mã Giảm Giá</span>

                    </div>
                    <div class="pb-[16px] text-[13px] text-[#0D5CB6]">
                        <button style="border:1px solid #0D5CB6" class="py-[4px] px-[13px] rounded-sm">Giảm
                            10k</button>
                        <button style="border:1px solid #0D5CB6" class="py-[4px] px-[13px] rounded-sm">Giảm
                            20K</button>
                        <button style="border:1px solid #0D5CB6" class="py-[4px] px-[13px] rounded-sm">Giảm
                            30k</button>
                        <span>></span>

                    </div>
                </div>
                <div class="cursor-pointer">
                    <span class="text-[14px]">Giao đến</span>
                    <span class="text-[15px]">Q. Hoàn Kiếm, P. Hàng Trống, Hà Nội</span>
                    <span class="text-basis text-[#0B74E5]">Đổi địa chỉ</span>
                </div>
                <div style="border-bottom: 1px solid #F2F2F2" class="   grid grid-cols-2 gap-4 pb-[16px]">
                    <div style="border:1px solid #EEEEEE" class="rounded-xl pl-[13px] pb-[9px]">
                        <div class="flex items-center my-[5px] cursor-pointer">
                            <img class=" pr-[9px] translate-y-[-1px]" src="./imgdeil/Rectangle (19).png" alt="">
                            <span class="text-[14px] text-[#00AB56]">Trước 18:00 hôm nay</span>
                        </div>
                        <div class="text-xs cursor-pointer">19.000đ</div>
                        <div style="border: 1px solid #C6BCF8 "
                            class="w-[90%] flex items-center h-[24px] bg-[#F2F0FE] mt-[2px] rounded cursor-pointer">
                            <img class="px-[7px] " src="./imgdeil/Rectangle (18).png" alt="">
                            <span class="text-[10px] text-[#402DA1] pr-[7px]">Freeship 100% chỉ với 34
                                ASA</span>
                        </div>
                    </div>
                    <div style="border:1px solid #EEEEEE" class="rounded-xl pl-[13px] pb-[9px]">
                        <div class="flex items-center my-[5px]">
                            <img class=" pr-[9px] translate-y-[-1px]" src="./imgdeil/Rectangle (19).png" alt="">
                            <span class="text-[14px] text-[#00AB56]">Ngày mai, trước 23:00</span>
                        </div>
                        <div class="text-xs">10.000đ (Freeship 30K đh 149K)</div>
                        <div style="border: 1px solid #C6BCF8"
                            class="w-[88%] flex items-center h-[24px] bg-[#F2F0FE] mt-[2px] rounded">
                            <img class="px-[7px] " src="./imgdeil/Rectangle (18).png" alt="">
                            <span class="text-[10px] text-[#402DA1] pr-[7px]">Freeship 100% chỉ với 34
                                ASA</span>
                        </div>
                    </div>
                </div>
                <div class="soLuong my-[16px]">
                    <h2 class="text-[15px]">Số Lượng</h2>
                    <div class="flex mt-[10px] mb-[16px]">
                        <button style="border:1px solid #EEEEEE" class="w-[30px] h-[30px]">-</button>
                        <input style="border:1px solid #EEEEEE" type="text" class="w-[40px] h-[30px]">
                        <button style="border:1px solid #EEEEEE" class="w-[30px] h-[30px]">+</button>

                    </div>
                    <button class="hidden md:block bg-[#FF3945] rounded text-[#fff] text-[14px] w-[62%] h-[48px] hover:opacity-70">Chọn
                        mua</button>
                </div>

            </div>
        </div>
        <div class="xl:basis-[21%] px-[10px] pl-[20px] xl:mt-[8%]">
            <div style="border-bottom:1px solid #EEEEEE" class="pb-[16px]">
                <div class="flex items-center">
                    <div class="">
                        <img src="./imgdeil/Rectangle (20).png" alt="">
                    </div>
                    <div class="ml-[12px]">
                        <h2 class="text-[15px]">Tiki Trading</h2>
                        <img src="./imgdeil/Rectangle (21).png" alt="" class="">
                    </div>

                </div>
                <div class="flex my-[12px]">
                    <div class="basis-[50%] text-center">
                        <p class="text-[15px]">${val.rating_average} / 5</p>
                        <p class="text-[11px] text-[#787878]">4.7tr+</p>

                    </div>
                    <div class="basis-[50%] text-center">
                        <p class="text-[15px]">408k+</p>
                        <p class="text-[11px] text-[#787878]">Theo dõi</p>

                    </div>
                </div>
                <div class=" grid grid-cols-2 gap-4 text-[#0D5CB6]">
                    <div style="border:1px solid #0D5CB6"
                        class=" hidden xl:flex w-[103px] h-[34px] items-center rounded ">
                        <img class="w-[20px] h-[20px] ml-[10px]"
                            src="./imgdeil/d735c33edfdc6cf6aeb6e183bec28869.png" alt="">

                        <button class="text-[12px] px-[5px]">Xem Shop</button>
                    </div>
                    <div style="border:1px solid #0D5CB6"
                        class=" hidden xl:flex w-[103px] h-[34px] items-center rounded">
                        <h2 class="text-[25px] ml-[10px] translate-y-[-1px] font-thin">+</h2>
                        <button class="text-[12px] px-[5px]">Xem Shop</button>
                    </div>

                </div>
            </div>
            <div class="grid grid-cols-3 pt-[10px] font-light pl-[13px]">
                <div class="">
                  <div class="flex justify-center ">
                    <img class="w-[32px] h-[32px]" src="./imgdeil/720434869e103b03aaaf1a104d91ad25.png" alt="">
                  </div>
                    <div class=" text-center mt-[8px]">
                        <p class="text-[12px]">Hoàn tiền</p>
                        <p class="text-[12px]">111%</p>
                        <p class="text-[12px]">nếu hàng giả</p>
                    </div>


                </div>
                <div class="">
                    <div class="flex justify-center ">
                      <img class="w-[32px] h-[32px]" src="./imgdeil/1606089d5423e5cba05e3820ad39708e.png" alt="">
                    </div>
                      <div class=" text-center mt-[8px]">
                          <p class="text-[12px]">Hoàn tiền</p>
                          <p class="text-[12px]">111%</p>
                          <p class="text-[12px]">nếu hàng giả</p>
                      </div>


                  </div>
                  <div class="">
                    <div class="flex justify-center ">
                      <img class="w-[32px] h-[32px]" src="./imgdeil/144ada409519d72e2978ad2c61bc02a7.png" alt="">
                    </div>
                      <div class=" text-center mt-[8px]">
                          <p class="text-[12px]">Hoàn tiền</p>
                          <p class="text-[12px]">111%</p>
                          <p class="text-[12px]">nếu hàng giả</p>
                      </div>


                  </div>
               

            </div>
            <div style="border: 1px solid #EEEEEE" class=" justify-around flex pl-[13px] mt-[24px]">
                <div class="py-[10px]">
                    <span class="text-[15px] leading-6">
                        8 nhà bán khác
                    </span>
                    <p class="text-[12px] text-[#787878] leading-5">Giá từ 75.210 ₫</p>
                </div>
                <div class="flex items-center ml-[25px]">
                   <button style="border: 1px solid #0D5CB6; " class="text-xs text-[#0D5CB6] py-[7px] px-[13px] rounded">
                    So Sánh
                   </button>
                </div>

            </div>
        </div>


    
        `
      );

    return (detailDes.innerHTML = daitel.join(""));
  },

  renderProductSmail() {
    const id = Number(JSON.parse(localStorage.getItem("daitelId")));

    const dataDetail = data.filter((val) => val.id === id);
    console.log(dataDetail);
    console.log(dataDetail[0].categories.id);
    const dataSmail = data.filter(
      (val) => val.categories.id === dataDetail[0].categories.id
    );
    const dataSmailNew = dataSmail.slice(0,6)
    console.log(dataSmailNew);
    const renderdataSmail = dataSmailNew.map(
      (val) =>
        `
     <a  class=" a  md:h-[500px] xl:h-[400px] list cursor-pointer" href="./daitail.html"  data-index="${
       val.id
     }" >
     <div class=" pt-[10px] data-index="${
       val.id
     }">
     <div data-index="${
       val.id
     }" class="thumb-nail mx-[auto] xl:w-[200px] md:h-[300px]  xl:h-[200px] sm:mb-[12px] xl:mb-[0px]">
         <img class=" w-[95%] h-[90%] xl:h-[100%] m-[auto]" src=${
           val?.images[0].base_url
         } alt="">
     </div>
     <div data-index="${val.id}" class="p-[17px]">

         <div data-index="${val.id}" class="tiki-now w-[56px] h-[16px]">
             <img class="" src="./Img/Rectangle (13).png" alt="">
         </div>
         <div data-index="${
           val.id
         }" class="giao text-[#00AB56] text-[11px] font-medium my-[8px] ">
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
         <span data-index="${
           val.id
         }" class="text-[#FF424E]">${new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(val?.original_price)}</span>
         </div>
       

     </div>    
 </div>
 </a>    
    `
    );
    return (productSmail.innerHTML = renderdataSmail.join(""));
  },
  renderDescription() {
    const id = Number(JSON.parse(localStorage.getItem("daitelId")));

    const dataDetail = data.filter((val) => val.id === id);

    const dpecifications = dataDetail[0]?.specifications[0].attributes.map(
      (val, index) =>
        `
        <tr class="" data-index="${index}">
            <td class="xl:w-[222px] xl:h-[41px] bg-[#EFEFEF] pl-[15px] text-xs ">${val.name}</td>
            <td class="xl:h-[41px]  pl-[15px] text-xs dataIndex">${val.value}</td>

        </tr>
    `
    );

    return (specifications.innerHTML = dpecifications.join(""));
  },

  render() {
    const id = Number(JSON.parse(localStorage.getItem("daitelId")));

    const dataDetail = data.filter((val) => val.id === id);

    const dpecifications = dataDetail[0].description;

    return dpecifications.slice(0, 600);
  },
  rederFull() {
    const id = Number(JSON.parse(localStorage.getItem("daitelId")));

    const dataDetail = data.filter((val) => val.id === id);
    console.log(dataDetail);
    const dpecifications = dataDetail[0].description;

    return dpecifications;
  },
  //   return des.innerHTML =

  renderDpecifications(render) {
    des.innerHTML = render();
  },

  handeEvent() {
    buTonDes.onclick = function (e) {
      if (buTonDes.innerHTML === "Xem Thêm Nội Dung") {
        console.log(buTonDes);
        des.innerHTML = deitail.rederFull();
        des.classList.remove("description2");
        buTonDes.innerHTML = "Thu gọn";
      } else {
        des.innerHTML = deitail.render();
        des.classList.add("description2");
        buTonDes.innerHTML = "Xem Thêm Nội Dung";
      }
    };
  },
  start() {
    this.renderHeader();
    this.renderContent();
    this.renderProductSmail();
    this.renderDescription();
    this.renderDpecifications(this.render);
    this.handeEvent();
  },
};

deitail.start();

const dataindex = $$(".dataIndex");
const listTb = [...dataindex]
  .filter((val, index) => index % 2 === 0)
  .forEach((val) => val.classList.add("tr"));

console.log(productSmail);
