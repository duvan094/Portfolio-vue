<script setup>

    import { computed, ref, onMounted } from 'vue'

    let showForm = ref(false)

    onMounted(() => {
        showForm.value = JSON.parse(localStorage.getItem("showForm"));
    })

    let email = ref("")
    let message = ref("")

    async function sendEmail(event) {
        event.preventDefault()
        console.log('sendEmail')

        console.log('email', email.value)
        console.log('message', message.value)

        const data = {
            email: email.value,
            message: message.value
        }

        await fetch('https://jacobduvander.se/.netlify/functions/sendEmail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })

    }

</script>

<template>
    <template v-if="!showForm"></template>
    <section v-else>
        <h2>Contact me!</h2>
        <form @submit.prevent="sendEmail" class="form">
            <div class="input-field">
                <input type="email" id="email" name="email" placeholder=" " v-model="email"/>
                <label for="email">Your email</label>
            </div>
            <div class="input-field">
                <textarea type="text" id="message" name="message" placeholder=" " v-model="message"/>
                <label for="message">Your message</label>
            </div>
            <button type="submit" class="button">
                Submit
            </button>
        </form> 
    </section>
</template>

<style scoped lang="scss">
    section h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
    .form {
        display: flex;
        flex-direction: column;
        max-width: 420px;
        width: 100%;
        margin: auto;
    }

    input, textarea {
        padding: .5rem;
        border-radius: 5px;
        background-color: var(--input-background);
        border: 2px solid var(--link-color);
        box-shadow: var(--box-shadow);
        font-family: 'Figtree', sans-serif;
        transition: .2s ease-out border-color;
        font-size: 1.2em;
        width: 100%;
    }

    input:focus, textarea:focus {
        border-color: var(--link-color-hover);
    }

    input:focus + label, textarea:focus + label {
        transform: translate(0,-1.5rem) scale(0.9);
    }

    input:not(:placeholder-shown) + label, textarea:not(:placeholder-shown) + label {
        transform: translate(0,-1.5rem) scale(0.9);
    }

.input-field {
    position: relative;
    width: 100%;
    margin-bottom: 2rem;

    label {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(.7rem,.7rem);
        transition: transform .2s ease-out;
        z-index: 1;
        font-weight: 600;
    }
}


</style>