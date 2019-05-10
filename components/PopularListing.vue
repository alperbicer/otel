<template>
  <section class="gray-section">
    <div class="container">
      <div class="section-title">
        <h2>Popular listings</h2>
        <div class="section-subtitle">Best Listings</div>
        <span class="section-separator"></span>
        <p>Nulla tristique mi a massa convallis cursus. Nulla eu mi magna.</p>
      </div>
    </div>
    <div class="list-carousel fl-wrap card-listing">
      <component
        class="listing-carousel  fl-wrap"
        :is="slickComp"
        ref="slick" 
        :options="slickOptions"
      >
        <div class="slick-slide-item" v-for="(item, index) in items" :key="index">
          <app-popular-listing-Item :item="item"></app-popular-listing-Item>
        </div>
      </component>
      <div class="swiper-button-prev sw-btn">
        <i class="fa fa-long-arrow-left"></i>
      </div>
      <div class="swiper-button-next sw-btn">
        <i class="fa fa-long-arrow-right"></i>
      </div>
    </div>
  </section>
</template>

<script>
import AppPopularListingItem from './PopularListingItem';
export default {
  components: {
    Slick: () => import('vue-slick'),
    AppPopularListingItem,
  },
  data() {
    return {
      items: [],
      'slickComp': '',
      slickOptions: {
        slidesToShow: 4,
        dots: true,
        arrows: false,
      },
    };
  },
  beforeCreate() {
    this.$axios.get('homepage/popularPlaces')
      .then((res) => {
        if (res.status === 200) {
          this.items = res.data.datas;
          this.$nextTick(function () {
            this.slickComp = 'Slick'
          })
        }
      });
  },
}
</script>