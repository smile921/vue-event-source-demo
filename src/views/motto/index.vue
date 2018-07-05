<template>
    <div class="section">
        <div class="container">
            <h2 class="handwrite">蝴蝶过山门</h2>
            <div class="content">
                <p class="hand-main">
                 蝴蝶过山门，轻舟过重山。一别两宽，各生欢喜。解冤释结，更莫相憎。
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
@font-face {
  text-align: center;
    width: 45%;
    margin: 0 auto;

  font-family: 'ZhuGe';
  font-style: normal;
  font-weight: 400;
  src:  url(/assets/font/ZhuGe.ttf) format('truetype');
//   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}

.handwrite{
    font-size: 6em;
    font-family: 'ZhuGe','Courier New', Courier, monospace;
}
.hand-main{    
    font-size: 3em;
    font-family: 'ZhuGe','Courier New', Courier, monospace;
}

</style>
