import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

function CategoryOption({shop,setIndex}) {
    // console.log(shopId);
    
       
  return (
    <div class="md:w-1/2 px-3">
                                <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
                                    Category
                                </label>
                                <div>
                                    <select
                                     onChange={(e)=>setIndex(e.target.value)} 
                                    class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                                        {
                                            shop.category.map((category,index)=>
                                            {
                                                
                                                return <option value={index}>{category.name}</option>
                                            }
                                                )
                                        }
                                    </select>
                                </div>
                            </div>
  )
}

export default CategoryOption