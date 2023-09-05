import React from 'react'

function SubCategoryOption({setSubId,shop,index}) {
    // console.log(shop);
    // console.log(index);
  return (
    <div class="md:w-1/2 px-3">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="department">
                                    Subcategory
                                </label>
                                <div>
                                    <select
                                    onChange={(e)=>setSubId(e.target.value)} 
                                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                                        {
                                            shop.category[index].subcategory.map(subCategory=>
                                                <option value={subCategory.subId}>{subCategory.name}</option>
                                                )
                                        }
                                    </select>
                                </div>
                            </div>
  )
}

export default SubCategoryOption