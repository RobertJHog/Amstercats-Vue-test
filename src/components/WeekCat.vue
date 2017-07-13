<template>
  <div id="weekcat">
    <h1> Cat of the day! </h1>
    <img id="week-profile-photo" src="http://res.cloudinary.com/daahasvbo/image/upload/v1489924697/Wally1_kxmjd4.jpg" alt="Mountain View" style="width:304px;height:228px;">
    <h2> Wally </h2>
  </div>
</template>

<style scoped>

h1, h2 {
  text-align: center;
}

div.week-cat {
  align-items: center;
  border: 2px solid #ff751a;
  box-sizing: border-box;
  margin-top: 20px;
  margin-right: 40px;
  width: 300px;
  height: 500px;
  font-size: 10em;
  overflow: hidden;
  padding: 12px;
  border-radius: 5%;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.25);
  color: white;
  text-align: center;
}
#week-profile-photo {
  max-width: 200px;
  max-height: 300px;
  border-radius: 5%;
  box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.0625);
}

</style>

<script>

export default {
  name: 'weekcat'
}
</script>
