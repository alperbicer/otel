<template>
  <div id="wrapper">
    <div class="content">
      <app-map />
      <!--col-list-wrap -->
      <div class="col-list-wrap left-list">
        <app-search-list />
        <!-- list-main-wrap-->
        <div class="list-main-wrap fl-wrap card-listing">
          <a class="custom-scroll-link back-to-filters btf-l" href="#lisfw">
            <i class="fa fa-angle-double-up"></i>
            <span>Back to Filters</span>
          </a>
          <app-list-item />
          <a class="load-more-button" href="#">
            Load more
            <i class="fa fa-circle-o-notch"></i>
          </a>
        </div>
        <!-- list-main-wrap end-->
      </div>
      <!--col-list-wrap -->
      <div class="limit-box fl-wrap"></div>
      <!--section -->
      <section class="gradient-bg">
        <div class="cirle-bg">
          <div class="bg" data-bg="images/bg/circle.png"></div>
        </div>
        <div class="container">
          <div class="join-wrap fl-wrap">
            <div class="row">
              <div class="col-md-8">
                <h3>Join our online community</h3>
                <p>Grow your marketing and be happy with your online business</p>
              </div>
              <div class="col-md-4">
                <a href="#" class="join-wrap-btn modal-open">
                  Sign Up
                  <i class="fa fa-sign-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--section end -->
    </div>
    <!--content end -->
  </div>
</template>

<script>
import AppMap from '~/components/Map.vue';
import AppSearchList from '~/components/SearchList.vue';
import AppListItem from '~/components/ListItem.vue';
export default {
  components: {
    AppMap,
    AppSearchList,
    AppListItem
  },
  mounted() {
    var input = document.getElementById('autocomplete-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
    });
  },
}
</script>
<style lang="scss" scoped>

</style>
