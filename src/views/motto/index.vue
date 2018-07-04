<template>
    <div class="section">
        <div class="container">
            <h2>蝴蝶过山门</h2>
            <div class="content">
                <p>
                    
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return { version: __PROJECT_VERSION__ };
    },
    install({viewRegistry}){
        viewRegistry.addView({
            path: '/motto',
            name: 'motto',
            handle: 'Motto',
            order: 300,
            component: this
        });

    }
}
</script>
<style lang="scss">

</style>
