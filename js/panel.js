// Add Pool part start
function handleAddBtnClick() {
  modalWrapper.classList.remove("scale-0")
  modalInner.innerHTML = `
      <form autocomplete="off" class="add-pool-form w-[1000px] p-5 bg-[#F8F8F8] rounded-[20px]">
          <label>
              <input type="file" class="choose-file hidden"/>
              <div class="relative mx-auto flex items-center justify-center border-[2px] border-dashed border-slate-500 w-[691px] h-[316px] bg-white rounded-[20px]">
                  <img class="choose-img absolute w-full h-full hidden" src="" alt="choose img"/>
                  <p class="text-[25px] text-center ">Выберите изображение</p>
              </div>
          </label>
          <div class="flex justify-between mt-10">
              <div class="w-[49%] flex flex-col gap-[30px]">
                  <label>
                      <span class="pl-5 text-[18px] text-[#898989]">Выберите категорию</span>
                      <select name="categoryId" class="w-full pl-5 text-[20px] py-5 bg-white shadow-md">
                          <option value="0">Каркасные</option>
                          <option value="1">Надувные</option>
                      </select>
                  </label>
                  <label>
                      <span class="pl-5 text-[18px] text-[#898989]">Введите старую цену</span>
                      <input name="oldPrice" type="number" class="w-full pl-5 t
                      
                      ext-[20px] py-3 bg-white shadow-md" placeholder="Старая цена"/>
                  </label>
                  <label>
                      <span class="pl-5 text-[18px] text-[#898989]">Введите новую цену</span>
                      <input name="newPrice" type="number" class="w-full pl-5 text-[20px] py-3 bg-white shadow-md" placeholder="Новая цена"/>
                  </label>
              </div>
              <div class="w-[49%] flex flex-col gap-[30px]">
                  <label>
                      <span class="pl-5 text-[18px] text-[#898989]">Введите количество</span>
                      <input name="quantity" type="number" class="w-full pl-5 text-[20px] py-3 bg-white shadow-md" placeholder="Количество"/>
                  </label>
                  <label>
                      <span class="pl-5 text-[18px] text-[#898989]">Введите рамку</span>
                      <select name="frameId" class="w-full pl-5 text-[20px] py-5 bg-white shadow-md">
                          <option value="0">Металлический</option>
                          <option value="1">Рамка призмы</option>
                          <option value="2">Прямоугольная</option>
                      </select>
                  </label>
                  <button class="add-btn bg-[#009398] text-white py-[10px] rounded-[30px] mt-[28px] font-bold text-[22px] hover:opacity-[70%] duration-300 px-[14px]">Добавить </button>
              </div>
          </div>
      </form>
  `

  let elAddPoolForm = document.querySelector(".add-pool-form")
  let elChooseFile = document.querySelector(".choose-file")
  let elChooseImg = document.querySelector(".choose-img")
  let elSubmitBtn = document.querySelector(".add-btn")

  elChooseFile.addEventListener("change", function (evt) {
      elChooseImg.classList.remove("hidden")
      elChooseImg.src = URL.createObjectURL(evt.target.files[0])
  })

  elAddPoolForm.addEventListener("submit", function (evt) {
      evt.preventDefault()
      let pool = {
          id: products[products.length - 1]?.id ? products[products.length - 1].id + 1 : 1,
          imgURL: elChooseImg.src,
          oldPrice: evt.target.oldPrice.value,
          newPrice: evt.target.newPrice.value,
          categoryId: evt.target.categoryId.value,
          quantity: evt.target.quantity.value,
          frameId: evt.target.frameId.value,
      }
      products.push(pool)
      localStorage.setItem("products", JSON.stringify(products))
      elSubmitBtn.innerHTML = `
          <img class="mx-auto scale-[1.2]" src="./images/loading.png" alt="Loading..." width="30" height="30"/>
      `
      setTimeout(() => {
          elSubmitBtn.innerHTML = `Добавить`
          setTimeout(() => {
              modalWrapper.classList.add("scale-0")
              if (pool.categoryId == "0") {
                  elCategoryList.firstElementChild.className = activeList
                  elCategoryList.lastElementChild.className = notActiveList
              }
              else {
                  elCategoryList.lastElementChild.className = activeList
                  elCategoryList.firstElementChild.className = notActiveList
              }
              renderProducts(products, elProductTable, pool.categoryId)
          }, 800)
      }, 1000)
  })
}
// Add Pool part end