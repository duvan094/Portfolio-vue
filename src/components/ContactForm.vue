<script setup>

    import { computed, ref, onMounted } from 'vue'

    let showForm = ref(false)

    onMounted(() => {
        showForm.value = JSON.parse(localStorage.getItem("showForm"));
    })

    let email = ref("")
    let message = ref("")

    let emailError = ref(false)
    let messageError = ref(false)

    function clearError(field) {
        console.log('clear', field)


        if(field === 'email') {
            emailError.value = false
        }

        if(field === 'message') {
            messageError.value = false
        }
    }

    async function sendEmail(event) {
        event.preventDefault()

        let error = false

        if(!email.value) {
            emailError.value = true
            error = true
        }

        if(!message.value) {
            messageError.value = true
            error = true
        }

        if(error) {
            return
        }

        const data = {
            email: email.value,
            message: message.value
        }

        // await fetch('https://jacobduvander.se/.netlify/functions/sendEmail', {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "cors", // no-cors, *cors, same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "same-origin", // include, *same-origin, omit
        //     headers: {
        //     "Content-Type": "application/json",
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: "follow", // manual, *follow, error
        //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify(data), // body data type must match "Content-Type" header
        // }).then((response)=>{
        //     console.log(response)
        // }).catch((error)=>{
        //     console.log(error)
        // })

    }

</script>

<template>
    <template v-if="!showForm"></template>
    <section v-else>
        <h2>Contact me!</h2>
        <form @submit.prevent="sendEmail" class="form">
            <div class="input-field" :class="{'error': emailError}">
                <label for="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="ex. jacobduvander@gmail.com" v-model="email" @input="clearError('email')"/>
            </div>
            <div class="input-field" :class="{'error': messageError}">
                <label for="message">Your message</label>
                <textarea type="text" id="message" name="message" placeholder="ex. Hello! Nice website!" v-model="message" @input="clearError('message')"/>
            </div>
            <button type="submit" class="button">
                Send message
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
        align-items: flex-start;
    }

    input, textarea {
        padding: .5rem;
        border-radius: 10px;
        background-color: var(--input-background);
        border: 3px solid var(--link-color);
        box-shadow: var(--box-shadow-dark-theme);
        font-family: 'Figtree', sans-serif;
        // transition: .2s ease-out border-color;
        font-size: 1.2em;
        width: 100%;
    }

    textarea {
        min-width: 100%;
        min-height: 100px;
    }

.input-field {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;

    label {
        display: inline-block;
        font-weight: 600;
        margin-bottom: .5rem;
        color: var(--input-label-color);
    }

    &.error {
        input, textarea {
            border-color: #bb0000;
        }
    }

    input:focus, textarea:focus {
        border-color: var(--link-color);
        border-color: var(--input-focus-color);
        outline: 3px solid var(--input-focus-color-border);

    }

    input:focus + label, textarea:focus + label {
        transform: translate(0,-1.5rem) scale(0.9);
    }

    input:not(:placeholder-shown) + label, textarea:not(:placeholder-shown) + label {
        transform: translate(0,-1.5rem) scale(0.9);
    }


}



</style>