<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            msg: "hello, vue is very good."
        }
    },
    mounted () {
        console.log("App component is mounted");
    }
};
</script>

<style>

</style>
