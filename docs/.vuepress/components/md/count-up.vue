<template>
  <div style="font-size: 43px; font-weight: 500">
    <els-count-up :endVal="520520"></els-count-up>$
    <els-count-up
      style="color: red"
      :endVal="1"
      :startVal="1080"
      :duration="5000"
    ></els-count-up
    >￥
  </div>
</template>