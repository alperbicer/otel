<template>
  <div class="slick-slide-item">
    <div class="listing-item">
      <article class="geodir-category-listing fl-wrap">
        <div class="geodir-category-img">
          <img :src="item.img" alt>
          <div class="overlay"></div>
          <div class="list-post-counter">
            <span>{{ item.starCount }}</span>
            <i class="fa fa-heart"></i>
          </div>
        </div>
        <div class="geodir-category-content fl-wrap">
          <a class="listing-geodir-category" href="listing.html">Retail</a>
          <div class="listing-avatar">
            <a href="author-single.html">
              <img src="images/avatar/1.jpg" alt>
            </a>
            <span class="avatar-tooltip">
              Added By
              <strong>Lisa Smith</strong>
            </span>
          </div>
          <h3>
            <a href="listing-single.html">Event in City Mol</a>
          </h3>
          <p>Sed interdum metus at nisi tempor laoreet.</p>
          <div class="geodir-category-options fl-wrap">
            <div
              class="listing-rating card-popup-rainingvis"
              data-starrating2="5"
            >
              <span>({{ item.totalReviews }} reviews)</span>
            </div>
            <div class="geodir-category-location">
              <a href="#">
                <i class="fa fa-map-marker" aria-hidden="true"></i> {{ item.adress }}
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
  props: {
    item: null,
  },
}
</script>