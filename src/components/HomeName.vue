<template>
    <div>
        <h1 v-if="user">Hi, {{user.first_name }} , {{user.last_name }}</h1>
        <h1 v-if="!user">not logged</h1>
    </div>
</template>

<script>
  

    export default{

       name: 'HomeName'
    }
</script>