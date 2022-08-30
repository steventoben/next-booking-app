import React, {Context} from "react";

export const cartContext: Context<any> = React.createContext({});
interface CartProviderProps {}
export function CartProvider(props: CartProviderProps) {
    return(
        <cartContext.Provider value={{}}>
            
        </cartContext.Provider>
    );
}
interface CheckoutFormProps {}
export function CheckoutForm(props: CheckoutFormProps) {
    const {} = props;
    return(
        <div>
            Template
        </div>
    );
}
