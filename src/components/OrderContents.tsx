import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps ={
    order: OrderItem[],
    removedItem: (id:MenuItem['id']) => void
}
export default function OrderContents ({order, removedItem} : OrderContentsProps)  {
  return (
    <div >
       <h2 className='font-black text-4xl'>Coonsumo</h2>
       <div className="space-y-3 mt-10">
        {
            order.map( item => (
                <div key={item.id}
                className="flex justify-between border-t"
                >
                   <div>
                    <p className="text-lg">
                        {item.name} - { formatCurrency( item.price)}
                    </p>

                    <p className="font-black">
                        cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>

                    </div>

                    <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                    onClick={() => removedItem(item.id)}>
X
                    </button>
                </div>
            ))
        

        }
       </div>
  
    </div>
  )
}
