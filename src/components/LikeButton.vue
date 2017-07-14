<template>
  <button
    type="submit"
    class="btn"
    v-text="text"
    v-class="btn-unlike: ! liked, btn-like: liked"
    v-on="click: toggleLike"
    v-attr="disabled: submitted">Like</button>
</template>

<style>

.like button {
  border: 0;
  background: transparent;
  outline: none;
  font-size: 1.5em;
}

  &:hover {
    cursor: pointer;
  }

  span.copy {
    position: absolute;
    margin-left: -1em;
    z-index: -1;
    opacity: 0;
  }

img.heart {
  height: 1em;
}

.likes {
  font-size: 0.8em;
  color: #999;
}

.liked button span.copy {
  z-index: 9;
  animation: heart 1s 1 ease-in-out;
}

@keyframes heart {
  10% {
    margin-top: 0px;
    opacity: 0;
  }

  50% {
    opacity: 0.8;
    margin-top: -30px;
  }

  100% {
    margin-top: -80px;
    opacity: 0;
  }
}

</style>

<script>

  export default {
    name: 'likebutton',
    template: '<likebutton/>',
    methods: {
      toggleLike: function() {
          if(this.liked) {
              this.unlikePhoto()
          } else {
              this.likePhoto()
          }
      },

      likePhoto: function() {
          this.submitted = true;

          this.$http.post('/likes', {'photo': this.photo}, function(resp) {
              this.liked = true;
              this.submitted = false;
              this.text = 'Unlike';
          });
      },

      unlikePhoto: function() {
          this.submitted = true;

          this.$http.delete('/likes/' + this.photo, function(resp) {
              this.liked = false;
              this.submitted = false;
              this.text = 'Like';
          });
      }
    }
  }

</script>
