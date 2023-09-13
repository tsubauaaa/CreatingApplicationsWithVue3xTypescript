<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue';
const inputtingName = ref<string>('')
const inputtingAge = ref<number>(0)

const emit = defineEmits(['register'])

const register = () => {
    const person = { id: Math.random(), name: inputtingName, age: inputtingAge }
    console.log(person)
    emit('register', person)
}

const nameLengthLimite = 15

const isValidName = computed(() => {
    if (inputtingName.value.length >= nameLengthLimite) {
        return false
    }
    return true
})

const color = computed(() => {
    return isValidName.value ? 'white' : 'rgb(244, 194, 190)'
})

</script>
<template>
    <div class="form-container">
        <div class="input-container">
            <div class="input-column">
                <span>name:</span>
                <input class="input-name" v-model="inputtingName" />
            </div>
            <spam class="error-message" v-if="!isValidName">{{ nameLengthLimite }} characters or less, please</spam>
            <div class="input-column">
                <span>age:</span>
                <input class="input" v-model="inputtingAge" type="number" />
            </div>
        </div>
        <button :disabled="!isValidName" @click="register" class="register-button">register</button>
    </div>
</template>
<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 241, 226);
    padding: 24px 0;
    width: 50%;
    margin-bottom: 12px;
    border-radius: 4px;
}

.input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 20px;
}

.input-column {
    width: 200px;
    display: flex;
    justify-content: space-between;
}

.input-name {
    background-color: v-bind(color);
}

input {
    widows: 120px;
    margin-bottom: 8px;
}

span {
    font-size: 20px;
    font-weight: bold;
}

.error-message {
    font-size: 12px;
    color: rgb(244, 194, 190);
}
</style>