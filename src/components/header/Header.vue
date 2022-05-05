<template>
    <Navbar />

</template>

<script>
import Navbar from "@/components/header/Navbar";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    components: {Navbar},

    // data: function () {
    //     return {
    //         images: [
    //             {},
    //             {title: "protocoles", url: "../../assets/images/protocole/LoRA01.jp", alt: "Communication protocols image header"},
    //             {title: "etude", url: "../../assets/images/etude/etude02.jpg", alt: "Study case image header"},
    //             {title: "iot", url : "../../assets/images/etude/etude02.jpg", alt: "IoT image header"}
    //         ]
    //     }
    // },
    props: {
        image1 : { title: "electronic", url: "../../assets/images/electronique/electronique06.webp", alt: "Electronic image header" },
        image2 : {title: "etude", url: "../../assets/images/etude/etude02.jpg", alt: "Study case image header"},
        image3 : {title: "iot", url : "../../assets/images/etude/etude02.jpg", alt: "IoT image header"}
    }
}


</script>

<style scoped>

/*img {*/
/*    margin-top: 100px;*/
/*    height: 80vh;*/
/*}*/

</style>