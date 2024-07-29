import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import { useMemo } from "react";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number,
  placeOrder: () => void
};

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
 
  const totalPagar = useMemo(() => subtotalAmount + tipAmount, [tip, order])
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal: {""}
          <span className="font-bold text-xs">
            {formatCurrency(subtotalAmount)}
          </span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold text-xs">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-bold text-xs">{formatCurrency(totalPagar)}</span>
        </p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white 
      font-bold mt-10 disabled:opacity-10" disabled={totalPagar === 0}
      onClick={placeOrder}>
        Guardar Orden
      </button>
    </>
  );
}
