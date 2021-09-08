Vue.config.devtools = true;

const app = new Vue({
   el: "#root",
   mounted() {
      this.startRotation();
   },
   data: {
      counterPhoto: 0,
      photos: [
         "img/image1.jpg",
         "img/image2.jpg",
         "img/image3.jpg",
         "img/image4.jpg",
      ],
      timer: null,
   },
   methods: {
      prevPhoto() {
         this.counterPhoto -= 1;
         if (this.counterPhoto < 0) {
            this.counterPhoto = this.photos.length - 1;
         }
      },
      nextPhoto() {
         this.counterPhoto += 1;
         if (this.counterPhoto > this.photos.length - 1) {
            this.counterPhoto = 0;
         }
      },
      startRotation() {
         this.timer = setInterval(this.nextPhoto, 2000);
      },
   },
});
