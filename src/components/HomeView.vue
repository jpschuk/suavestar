<script setup>
import {category,data} from "../data"
import Carousel from "vue-carousel";
</script>
<template>
  <nav class="container-nav navbar navbar-expand-lg bg-body-tertiary">
    <img class="logo-img" src="../assets/imagenes/cover.png" alt="logo" />
    <div class="container-box-nav container-fluid">
      <div
        class="navbar-navmain-bar-items main-navbar collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <li class="list-nav">
            <router-link class="text-nav navitems nav-link" to="/"
              >Home</router-link
            >
          </li>
          <router-link class="text-nav navitems nav-link" to="/colchones"
            >Colchones</router-link
          >
          <router-link class="text-nav navitems nav-link" to="/sillones"
            >Sillones</router-link
          >
          <router-link
            class="text-nav navitems nav-link"
            to="/almohadas-accesorios"
            >Almohadas & Accesorios</router-link
          >
        </div>
      </div>
    </div>
    <hr />
    <RouterView></RouterView>
  </nav>
  <div id="carouselExampleAutoplaying" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/imagenes/carrousel1.webp"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/imagenes/OT09429_-_Suavestar_-_Precios_marzo_2023_Pauta_banner_desktop_insignia_1944x.webp"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../assets/imagenes/OT09429_-_Suavestar_-_Precios_marzo_2023_Pauta_banner_desktop_sport_1944x.webp"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <h1 class="categorias-h1 h1">¡Descubri nuestras Categorias!</h1>

  <section class="categoria-container ">
    <li v-for="cat in category" :key="title" class="categoria-lista">
      <router-link v-bind:to="cat.link"
        ><img v-bind:src="cat.img" alt="sommiers"
      /></router-link>
      <p>{{ cat.title }}</p>
    </li>
  </section>
   
  <carousel :per-page="3">
  <slide v-for="item in data" :key="item.id">
    <section  class="slider-card row">
    <div class="card-container col-5">
      <div class="box-container">
        <div class="box-image">
              <img :src="item.img" alt="" />
            </div>
            <div class="card-info">
          <p>{{ item.name }}</p>
          <span>{{ item.tamanio }}</span>
        </div>
        <div class="card-detail">
          <div >
            <p>Precio:</p>
        </div>
        <div>
          <p>${{ item.price }}</p>
        </div>
      </div>
      <div class="card-detail">
        <div >
          <p>Precio Online:</p>
        </div>
        <div>
          <p>$100.000</p>
        </div>
      </div>
    </div>
  </div>
</section>
  </slide>
</carousel>
   
  <!-- <section  class="slider-card row">
    <div class="card-container col-5">
      <div class="box-container">
        <div class="box-image">
              <img :src="item.img" alt="" />
            </div>
            <div class="card-info">
          <p>{{ item.name }}</p>
          <span>{{ item.tamanio }}</span>
        </div>
        <div class="card-detail">
          <div >
            <p>Precio:</p>
        </div>
        <div>
          <p>${{ item.price }}</p>
        </div>
      </div>
      <div class="card-detail">
        <div >
          <p>Precio Online:</p>
        </div>
        <div>
          <p>$100.000</p>
        </div>
      </div>
    </div>
  </div>
</section> -->
</template>

<style>
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
  font-family: "poppins";
}
.logo-img {
  height: 150px;
  width: 350px;
  position: absolute;
  margin-left: 100px;
}

.categorias-h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.categorias-h1 {
  color: rgb(130, 127, 127);
  font-size: 30px;
  margin-top: 10px;
}

.categoria-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.categoria-lista {
  margin-top: 10px;
  list-style-type: none;
  font-family: Arial, Helvetica, sans-serif;
}
.categoria-lista-sillones {
  margin-top: 10px;
  list-style-type: none;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f5f7;
  border-radius: 50%;
}
.sillones-img {
  height: 150px;
  width: 181px;
  border: 2px solid;
}
.card-container {
  margin-top: 100px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
}
.box-container {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: px;
  background-color: #efefef;
  box-shadow: 20px 17px 17px 3px rgba(0, 0, 0, 0.1);

}
.box-image img {
  border-radius: 4px;
  width: 100%;
}

.box-image {
  display: flex;
  align-items: center;
  background-color: #106989;
  border-radius: 4px;
  height: 250px;
  width: 100%;
}
.box-image h5 {
  display: flex;
  align-items: flex-start;
}

.card-detail {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.card-info {
  display: flex;
  justify-content: center;
  align-items: center;
flex-direction: column;}

.card-info p {
  margin-top: 10px;
  margin-bottom: 2px;
}
.slider-card {
  display: flex;
  margin: 100px;
  } 
</style>
