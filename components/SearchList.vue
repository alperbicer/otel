<template>
  <div class="listsearch-options fl-wrap" id="lisfw">
    <div class="container">
      <div class="listsearch-header fl-wrap">
        <h3>
          Results For :
          <span>Food and Drink</span>
        </h3>
        <div class="listing-view-layout">
          <ul>
            <li>
              <a class="grid active" href="#">
                <i class="fa fa-th-large"></i>
              </a>
            </li>
            <li>
              <a class="list" href="#">
                <i class="fa fa-list-ul"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- listsearch-input-wrap  -->
      <div class="listsearch-input-wrap fl-wrap">
        <div class="listsearch-input-item">
          <i class="mbri-key single-i"></i>
          <input type="text" placeholder="Keywords?" value>
        </div>
        <div class="listsearch-input-item">
          <select data-placeholder="Location" class="chosen-select">
            <option>All Locations</option>
            <option>Bronx</option>
            <option>Brooklyn</option>
            <option>Manhattan</option>
            <option>Queens</option>
            <option>Staten Island</option>
          </select>
        </div>
        <div class="listsearch-input-item">
          <select data-placeholder="All Categories" class="chosen-select">
            <option>All Categories</option>
            <option>Shops</option>
            <option>Hotels</option>
            <option>Restaurants</option>
            <option>Fitness</option>
            <option>Events</option>
          </select>
        </div>
        <div class="listsearch-input-text" id="autocomplete-container">
          <label>
            <i class="mbri-map-pin"></i> Enter Addres
          </label>
          <input
            type="text"
            placeholder="Destination , Area , Street"
            id="autocomplete-input"
            class="qodef-archive-places-search"
            value
          >
          <a href="#" class="loc-act qodef-archive-current-location">
            <i class="fa fa-dot-circle-o"></i>
          </a>
        </div>
        <!-- hidden-listing-filter -->
        <div class="hidden-listing-filter fl-wrap">
          <div class="distance-input fl-wrap">
            <div class="distance-title">
              Radius around selected destination
              <span></span> km
            </div>
            <div class="distance-radius-wrap fl-wrap">
              <input
                class="distance-radius rangeslider--horizontal"
                type="range"
                min="1"
                max="100"
                step="1"
                value="1"
                data-title="Radius around selected destination"
              >
            </div>
          </div>
          <!-- Checkboxes -->
          <div class="fl-wrap filter-tags">
            <h4>Filter by Tags</h4>
            <input id="check-aa" type="checkbox" name="check">
            <label for="check-aa">Elevator in building</label>
            <input id="check-b" type="checkbox" name="check">
            <label for="check-b">Friendly workspace</label>
            <input id="check-c" type="checkbox" name="check">
            <label for="check-c">Instant Book</label>
            <input id="check-d" type="checkbox" name="check">
            <label for="check-d">Wireless Internet</label>
          </div>
        </div>
        <!-- hidden-listing-filter end -->
        <button class="button fs-map-btn">Update</button>
        <div class="more-filter-option">
          More Filters
          <span></span>
        </div>
      </div>
      <!-- listsearch-input-wrap end -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>