import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const cart = browser ? window?.sessionStorage.getItem('cart') ?? "" : ""

export const cart_store = writable(cart)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        cart_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.sessionStorage.setItem('cart', value);
        })
}