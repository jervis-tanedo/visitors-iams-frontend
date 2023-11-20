<template>
    <div :class="modalOpen ? '-translate-x-0' : 'translate-x-full'" class="bg-gray-500 bg-opacity-75 transition-opacity">
        <div>
            <slot name="content">

            </slot>
        </div>
    </div>   
</template>
<script>
export default {
    props: {
        isOpen: {
            type : Boolean
        },
        isClosed: {
            type : Boolean
        }
    },

    data() {
        return {
            modalOpen: this.isOpen
        }
    },
    methods: {
        modal() {
            this.modalOpen = !this.modalOpen;
        },
    },
    watch: {
        modalOpen(newVal, oldVal) {
            if(newVal == false) {
                document.body.style.removeProperty("overflow");
                this.$emit('closeModal')
            }
        },
        isOpen(newVal, oldVal) {
            if(newVal == true) {
                this.modalOpen = true
                document.body.style.setProperty("overflow", "hidden");
            }
        }
    },
}
</script>