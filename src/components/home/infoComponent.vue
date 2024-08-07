<template>
  


  <section class="info">
    <div class="info__text">
      <h2>
        <span class="highlight "> Fast , Secure</span> and <span class="highlight">Reliable</span> World Wide
      </h2>
      <p class="text-start">We offer logistic that just makes good business sense</p>
    </div>
    <div class="info__image">
      <img src="@/assets/imgs/truck-2.png" alt="Logistics" />
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.hero {
  background-image: url('@/assets/imgs/Image+Background.png'); // replace with actual path to background image
  background-size: cover;
  background-position: center;
  padding: 250px 20px;
  color: white;
  text-align: center;
  position: relative;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
background: linear-gradient(0deg, rgba(51, 31, 142, 0.71)0%, rgba(51, 31, 142, 0.476)100%),   0px -197.443px / 100% 132.432% no-repeat;
  }

  &__content {
    position: absolute;
    z-index: 999;
    padding: 20px;
    border-radius: 10px;
    top:10rem;
    left: 10rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
    }
  }
}

.info {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 220px;
  background-color: #331F8E1F;
  
  &__text {
    max-width: 60%;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 10px;

      .highlight {
        color: #5A33AA; // Your primary color
        font-weight: bold;
      }
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }

  &__image {
    max-width: 35%;
          position: absolute;
    width: 20%;
    right: 15%;
    top: -35%;
    z-index: 9999996;
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }
}
</style>
