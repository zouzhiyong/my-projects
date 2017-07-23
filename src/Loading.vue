<!-- 这里和普通组件的书写一样 -->
<template>
    <div class="loading">
        {{value}}
    </div>
</template>

<script>
export default {
    name: 'Loading',
    props: {
      value: [String, Number]
    }
}
</script>
