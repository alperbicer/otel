<template>
  <div class="container">
    <div class="listing-item" v-for="(item, index) in items" :key="index">
      <article class="geodir-category-listing fl-wrap">
        <div class="geodir-category-img">
          <img :src="`http://citybook.kwst.net/images/all/${item}.jpg`" alt>
          <div class="overlay"></div>
          <div class="list-post-counter">
            <span>4</span>
            <i class="fa fa-heart"></i>
          </div>
        </div>
        <div class="geodir-category-content fl-wrap">
          <a
            class="listing-geodir-category"
            href="listing.html"
          >Restourants</a>
          <div class="listing-avatar">
            <a href="author-single.html">
              <img :src="`http://citybook.kwst.net/images/avatar/${item}.jpg`" alt>
            </a>
            <span class="avatar-tooltip">
              Added By
              <strong>Lisa Smith</strong>
            </span>
          </div>
          <h3>
            <a href="listing-single.html">Luxury Restourant</a>
          </h3>
          <p>Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales, sed lobortis est placerat.</p>
          <div class="geodir-category-options fl-wrap">
            <div
              class="listing-rating card-popup-rainingvis"
              data-starrating2="5"
            >
              <span>(7 reviews)</span>
            </div>
            <div class="geodir-category-location">
              <a href="#0" class="map-item">
                <i class="fa fa-map-marker" aria-hidden="true"></i> 27th Brooklyn New York, NY 10065
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6],
    };
  },
}
</script>