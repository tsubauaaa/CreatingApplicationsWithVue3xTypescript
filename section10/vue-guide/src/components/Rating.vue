<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const isActiveButton = ref<string>(props.modelValue)
const onClick = (buttonType: string) => {
    isActiveButton.value = buttonType
    emits('update:modelValue', isActiveButton)
}

</script>
<template>
    <ul>
        <li>
            <button :class="{active: isActiveButton === 'bad'}" @click="onClick('bad')" type="button">Bad</button>
        </li>
        <li>
            <button :class="{active: isActiveButton === 'average'}" @click="onClick('average')" type="button">Average</button>
        </li>
        <li>
            <button :class="{active: isActiveButton === 'great'}" @click="onClick('great')" type="button">Great</button>
        </li>
    </ul>
</template>
<style scoped>

.active {
    color: rgb(216, 88, 110);
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid grey;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>