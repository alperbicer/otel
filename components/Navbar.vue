<template>
  <header class="main-header dark-header fs-header sticky">
    <div class="header-inner">
      <div class="logo-holder">
        <a href="index.html">
          <img src="~@/assets/images/logo.png" alt>
        </a>
      </div>
      <div class="header-search vis-header-search">
        <div class="header-search-input-item">
          <input type="text" placeholder="Keywords" value>
        </div>
        <div class="header-search-select-item">
          <select data-placeholder="All Categories" class="chosen-select">
            <option>All Categories</option>
            <option>Shops</option>
            <option>Hotels</option>
            <option>Restaurants</option>
            <option>Fitness</option>
            <option>Events</option>
          </select>
        </div>
        <button
          class="header-search-button"
          onclick="window.location.href='listing.html'"
        >Search</button>
      </div>
      <div class="show-search-button">
        <i class="fa fa-search"></i>
        <span>Search</span>
      </div>
      <a href="dashboard-add-listing.html" class="add-list">
        Add Listing
        <span>
          <i class="fa fa-plus"></i>
        </span>
      </a>
      <div class="show-reg-form modal-open">
        <i class="fa fa-sign-in"></i>Sign In
      </div>
      <!-- nav-button-wrap-->
      <div class="nav-button-wrap color-bg">
        <div class="nav-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- nav-button-wrap end-->
      <!--  navigation -->
      <div class="nav-holder main-menu">
        <nav>
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
              <!-- <a href="index.html" class="act-link">
                Home
                <i class="fa fa-caret-down"></i>
              </a> -->
            </li>
          </ul>
        </nav>
      </div>
      <!-- navigation  end -->
    </div>
  </header>
</template>
