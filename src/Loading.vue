<!-- 这里和普通组件的书写一样 -->
<template>
    <div class="loading">
        {{msg}}
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
      msg: [String, Number]
    }
}
</script>
