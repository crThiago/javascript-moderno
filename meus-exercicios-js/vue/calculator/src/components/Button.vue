<template>
    <!-- $emit cria um evento chamado onClick que recebe label como parâmetro -->
    <div class="button"
        @click="$emit('onClick', label)" 
        :class="{ operation, double, triple}" >
        {{ label }}
    </div>
</template>

<script>
export default {
    props: {
        label: {},
        operation: {type: Boolean},
        double: {type: Boolean},
        triple: {type: Boolean}
    }
}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    color:#888;
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}
.button:active {
    background-color: #ccc;
}
.button.double {
    grid-column: span 2;
}
.button.triple {
    grid-column: span 3;
}
.button.operation {
    background-color: #fa8231;
    color: #fff;
}
.button.operation:active {
    background-color: #fa8231cc;
}
</style>
