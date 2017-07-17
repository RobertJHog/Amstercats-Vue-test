<template>
  <div class="gallery-container">
      <h1> Personal photos Wally </h1>
      <div class="photos">
          <div>
            <img class="gallery-photo" src='http://res.cloudinary.com/daahasvbo/image/upload/v1490779894/Wally2_okkize.jpg' />
          </div>
          <div>
            <img class="gallery-photo" src='http://res.cloudinary.com/daahasvbo/image/upload/v1490779895/Wally3_ykw0b0.jpg' />
          </div>
          <div>
            <img class="gallery-photo" src= 'http://res.cloudinary.com/daahasvbo/image/upload/v1490779894/Wally4_xyl8zr.jpg' />
          </div>
          <div>
            <img class="gallery-photo" src='http://res.cloudinary.com/daahasvbo/image/upload/v1491050338/Wally5_lvkh1q.jpg' />
          </div>
          <div>
            <img class="gallery-photo" src='http://res.cloudinary.com/daahasvbo/image/upload/v1491050339/Wally6_dtp5p5.jpg' />
          </div>
          <div>
            <img class="gallery-photo" src='http://res.cloudinary.com/daahasvbo/image/upload/v1491050338/Wally7_jn1trh.jpg' />
          </div>
      </div>
  </div>

</template>

<style scoped>

div.photos {
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: 3.125em;
  margin-bottom: 1.625em;
  margin-right: 1.625em;
  margin-left: 0.625em;
  overflow: hidden;
  padding: 0.750em;
  border-radius: 5%;
  color: white;
  align-items: center;
}

div.gallery-container {
    color: white;
    flex: 1;
    margin-top: 7em;
}

img.gallery-photo {
  flex: 1;
  max-width: 18.75em;
  max-height: 18.75em;
  border: solid;
  border-color: #ff751a;
  border-radius: 5%;
}

h1 {
  text-align: center;
}

</style>

<script>

  export default {
    name: 'gallery'
  }

</script>
