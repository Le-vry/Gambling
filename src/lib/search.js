import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const history = browser ? window?.sessionStorage.getItem('history') ?? "" : ""

export const history_store = writable(history)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        history_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.sessionStorage.setItem('history', value);
        })
}