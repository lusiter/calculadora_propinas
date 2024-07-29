import MenuItem from "./components/MenuItem";
import OrderTotals from "./components/OrderTotals";
import OrderContents from "./components/OrderContents";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";




function App() {
  const { order, tip, setTip, addItem, removedItem,  placeOrder} = useOrder()

  return (
    <>
      <header className=" bg-teal-400 py-5"><h1 className="text-center text-4xl font-black">Calculadora De Propinas Y Consumos</h1></header>
      
      <main className="max-w-7xl mx-auto py-20 px-2 grid grid-cols-2">
        
        <div className="p-5">
        <h2>Menu</h2>

        <div className="space-y-3 mt-10">
        {menuItems.map(item => (
          <MenuItem key={item.id}
          item={item}
          addItem={addItem}
          />
        ))}

        </div>

        </div>

        <div className="border border-double border-red-700 p-5 rounded-lg space-y-10 ">
          
          {order.length > 0 ? (
           <>
            <OrderContents
          order={order}
          removedItem={removedItem}
          />

          <TipPercentageForm
          setTip={setTip}
          tip={tip}
          />

          <OrderTotals
           order={order}
           tip={tip}
           placeOrder={placeOrder}
           />
           
           
           </>
          ): ( 
          <p className="text-center">La orden esta vacia</p>

            )}

         
        </div>

        


      </main>
    
    </>
  )
}

export default App
