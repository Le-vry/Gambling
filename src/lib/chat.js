
import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const savedchat = browser ? window?.localStorage.getItem('savedchat') ?? "" : ""

export const chat_store = writable(savedchat)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        chat_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.localStorage.setItem('savedchat', value);
        })
}
                            