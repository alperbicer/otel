<template>
  <section id="sec2">
    <div class="container">
      <div class="section-title">
        <h2>Featured Categories</h2>
        <div class="section-subtitle">Catalog of Categories</div>
        <span class="section-separator"></span>
        <p>Explore some of the best tips from around the city from our partners and friends.</p>
      </div>
      <div class="gallery-items fl-wrap mr-bot spad">
        <div class="gallery-item" v-for="(item, index) in items" :key="index">
          <div class="grid-item-holder">
            <div class="listing-item-grid">
              <img :src="item.img" alt>
              <div class="listing-counter">
                <span>{{ item.roomCount }}</span> Locations
              </div>
              <div class="listing-item-cat">
                <h3>
                  <a href="listing.html">{{ item.name }}</a>
                </h3>
                <!-- <p>Constant care and attention to the patients makes good record</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="listing.html"
        class="btn big-btn circle-btn dec-btn color-bg flat-btn"
      >
        View All
        <i class="fa fa-eye"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  async created() {
    await this.$axios.get('homepage/mostVisitCities')
      .then((res) => {
        if (res.status === 200) {
          this.items = res.data.datas;
        }
      });
  },
}
</script>