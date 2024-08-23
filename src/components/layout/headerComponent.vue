<template>
  <div class="container">
    <header class="navbar">
      <div class="navbar__logo">
        <img src="@/assets/imgs/logo.svg" alt="Logo" />
      </div>

      <div class="toggle" @click="toggleNaBar">
          <span></span>
          <span></span>
          <span></span>
      </div>
      <nav class="navbar__links">
        <router-link to="/" class="navbar__link">Home</router-link>
        <router-link to="/about" class="navbar__link">About us</router-link>
        <!-- <router-link to="/dashboard" class="navbar__link"
          >Dashboard</router-link
        > -->
        <!-- <router-link to="/mycars" class="navbar__link">My Cars</router-link> -->
        <!-- <router-link to="/ledger" class="navbar__link">Ledger</router-link> -->
        <router-link to="/contact" class="navbar__link">Contact us</router-link>
        <!-- <router-link to="/subCustomers" class="navbar__link"
          >Subcustomers</router-link
        > -->
      </nav>
      <div class="navbar__actions">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>En</span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Ar</a></li>
          </ul>
        </div>

        <!-- <div class="navbar__notification mx-4">
          <i class="fa-regular fa-bell"></i>
        </div> -->
        <router-link to="/login" class="navbar__login">Login</router-link>
        <!-- <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="profile-circle"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.2502 8C15.2502 9.79493 13.7951 11.25 12.0002 11.25C10.2053 11.25 8.75022 9.79493 8.75022 8C8.75022 6.20507 10.2053 4.75 12.0002 4.75C13.7951 4.75 15.2502 6.20507 15.2502 8Z"
                  fill="#D1D1DB"
                />
                <path
                  d="M6.84772 19.25H17.1527C18.2946 19.25 19.1742 18.2681 18.641 17.2584C17.8566 15.7731 16.0682 14 12.0002 14C7.93223 14 6.14388 15.7731 5.35945 17.2584C4.82618 18.2681 5.7058 19.25 6.84772 19.25Z"
                  fill="#D1D1DB"
                /></svg
            ></span>
          </button>
          <ul
            class="dropdown-menu profile"
            aria-labelledby="dropdownMenuButton1"
          >
            <section
              class="profile-info d-flex align-items-baseline px-3 py-2 border-bottom"
            >
              <div class="pic-image">
                <img :src="require('@/assets/imgs/logo.png')" alt="" />
              </div>
              <div class="mx-3">
                <p class="fw-bold black">Ahmed Samir</p>
              </div>
            </section>


            <section class="px-3 py-3 border-bottom">
              <router-link
                to="/"
                class="single-info mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M9.62019 8.60542C9.54106 8.5975 9.4461 8.5975 9.35905 8.60542C8.45074 8.57457 7.5901 8.19125 6.95939 7.53664C6.32868 6.88202 5.97742 6.00753 5.97999 5.09834C5.97999 3.15875 7.54686 1.58334 9.49358 1.58334C10.4244 1.56654 11.3237 1.92034 11.9938 2.56691C12.6639 3.21348 13.0497 4.09986 13.0665 5.03104C13.0833 5.96223 12.7296 6.86195 12.0833 7.53227C11.437 8.2026 10.551 8.58862 9.62019 8.60542Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.66335 11.5267C3.74829 12.8092 3.74829 14.8992 5.66335 16.1737C7.83955 17.6304 11.4085 17.6304 13.5847 16.1737C15.4998 14.8912 15.4998 12.8012 13.5847 11.5267C11.4164 10.0779 7.84746 10.0779 5.66335 11.5267Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>

                  <span class="name mx-3"> My Profile </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
              <router-link
                to="/"
                class="single-info mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M9.62019 8.60542C9.54106 8.5975 9.4461 8.5975 9.35905 8.60542C8.45074 8.57457 7.5901 8.19125 6.95939 7.53664C6.32868 6.88202 5.97742 6.00753 5.97999 5.09834C5.97999 3.15875 7.54686 1.58334 9.49358 1.58334C10.4244 1.56654 11.3237 1.92034 11.9938 2.56691C12.6639 3.21348 13.0497 4.09986 13.0665 5.03104C13.0833 5.96223 12.7296 6.86195 12.0833 7.53227C11.437 8.2026 10.551 8.58862 9.62019 8.60542Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.66335 11.5267C3.74829 12.8092 3.74829 14.8992 5.66335 16.1737C7.83955 17.6304 11.4085 17.6304 13.5847 16.1737C15.4998 14.8912 15.4998 12.8012 13.5847 11.5267C11.4164 10.0779 7.84746 10.0779 5.66335 11.5267Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>

                  <span class="name mx-3"> Subseries </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
              <router-link
                to="/"
                class="single-info d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                    >
                      <path
                        d="M9.60472 6.11136H5.43432C3.96241 6.11136 3.63005 6.84762 3.44804 7.75804L2.77539 10.9643H12.2716L11.5989 7.75804C11.4011 6.84762 11.0766 6.11136 9.60472 6.11136Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.4427 16.1972C13.506 16.8939 12.9521 17.4955 12.2399 17.4955H11.1241C10.4831 17.4955 10.396 17.2184 10.2773 16.8859L10.1586 16.5297C9.99243 16.0468 9.88165 15.7143 9.02699 15.7143H5.98822C5.13357 15.7143 5.00695 16.0864 4.85659 16.5297L4.73789 16.8859C4.6271 17.2264 4.54005 17.4955 3.89115 17.4955H2.77534C2.06313 17.4955 1.50128 16.8939 1.5725 16.1972L1.90487 12.5793C1.99192 11.6847 2.15809 10.9564 3.71705 10.9564H11.2902C12.8492 10.9564 13.0154 11.6847 13.1024 12.5793L13.4427 16.1972Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.76758 9.18304H2.17383"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.8574 9.18304H12.2637"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.95459 13.3393H5.73512"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.2959 13.3393H11.0764"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.8039 6.998C15.0255 6.48342 14.9463 5.78676 14.5348 5.17718C14.1313 4.56759 13.514 4.22717 12.9521 4.23509"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.2647 7.78177C17.5971 6.58635 17.3597 5.1218 16.5129 3.85513C15.6662 2.58847 14.4 1.81262 13.1655 1.6622"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>

                  <span class="name mx-3"> Available Car </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
            </section>


             <section class="px-3 py-3 border-bottom">
              <router-link
                to="/"
                class="single-info mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M9.62019 8.60542C9.54106 8.5975 9.4461 8.5975 9.35905 8.60542C8.45074 8.57457 7.5901 8.19125 6.95939 7.53664C6.32868 6.88202 5.97742 6.00753 5.97999 5.09834C5.97999 3.15875 7.54686 1.58334 9.49358 1.58334C10.4244 1.56654 11.3237 1.92034 11.9938 2.56691C12.6639 3.21348 13.0497 4.09986 13.0665 5.03104C13.0833 5.96223 12.7296 6.86195 12.0833 7.53227C11.437 8.2026 10.551 8.58862 9.62019 8.60542Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.66335 11.5267C3.74829 12.8092 3.74829 14.8992 5.66335 16.1737C7.83955 17.6304 11.4085 17.6304 13.5847 16.1737C15.4998 14.8912 15.4998 12.8012 13.5847 11.5267C11.4164 10.0779 7.84746 10.0779 5.66335 11.5267Z"
                        stroke="#331F8E"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>

                  <span class="name mx-3"> Buy Car </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
              <router-link
                to="/"
                class="single-info mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
  <path d="M6.32861 9.73718H11.868" stroke="#331F8E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.32861 12.9039H9.79471" stroke="#331F8E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.91131 4.82885H11.0767C12.6594 4.82885 12.6594 4.03719 12.6594 3.24552C12.6594 1.66219 11.868 1.66219 11.0767 1.66219H7.91131C7.11996 1.66219 6.32861 1.66219 6.32861 3.24552C6.32861 4.82885 7.11996 4.82885 7.91131 4.82885Z" stroke="#331F8E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.6596 3.26135C15.2948 3.40385 16.6163 4.3776 16.6163 7.99552V12.7455C16.6163 15.9122 15.825 17.4955 11.8682 17.4955H7.12015C3.16342 17.4955 2.37207 15.9122 2.37207 12.7455V7.99552C2.37207 4.38552 3.69362 3.40385 6.32881 3.26135" stroke="#331F8E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </span>

                  <span class="name mx-3"> Shipping Price List </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
              <router-link
                to="/"
                class="single-info d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
  <path d="M8.70269 15.9122C12.6361 15.9122 15.8248 12.7222 15.8248 8.78719C15.8248 4.85216 12.6361 1.66219 8.70269 1.66219C4.76925 1.66219 1.58057 4.85216 1.58057 8.78719C1.58057 12.7222 4.76925 15.9122 8.70269 15.9122Z" stroke="#331F8E" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.9783 16.4583C15.3977 17.725 16.3553 17.8516 17.0912 16.7433C17.7639 15.73 17.3207 14.8987 16.102 14.8987C15.1999 14.8908 14.6934 15.5954 14.9783 16.4583Z" stroke="#331F8E" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </span>

                  <span class="name mx-3"> Search by Vin or LOT </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
            </section>

            <section class="px-3 py-3 border-bottom">
              <router-link
                to="/"
                class="single-info mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                   <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
  <path d="M9.49404 17.7041C13.8645 17.7041 17.4075 14.1597 17.4075 9.78747C17.4075 5.41522 13.8645 1.8708 9.49404 1.8708C5.12355 1.8708 1.58057 5.41522 1.58057 9.78747C1.58057 14.1597 5.12355 17.7041 9.49404 17.7041Z" stroke="#331F8E" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.32889 2.66248H7.12024C5.57711 7.28581 5.57711 12.2891 7.12024 16.9125H6.32889" stroke="#331F8E" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.8682 2.66248C13.4113 7.28581 13.4113 12.2891 11.8682 16.9125" stroke="#331F8E" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.37207 12.9541V12.1625C6.99354 13.7062 11.9949 13.7062 16.6163 12.1625V12.9541" stroke="#331F8E" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.37207 7.41248C6.99354 5.86873 11.9949 5.86873 16.6163 7.41248" stroke="#331F8E" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </span>

                  <span class="name mx-3"> About us </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
              <router-link
                to="/"
                class="single-info mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle">
                 <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
  <path d="M17.3838 14.7987C17.3838 15.0837 17.3205 15.3766 17.1859 15.6616C17.0514 15.9466 16.8773 16.2158 16.6478 16.4691C16.2601 16.8966 15.8327 17.2054 15.35 17.4033C14.8752 17.6012 14.3608 17.7041 13.8069 17.7041C12.9997 17.7041 12.1371 17.5141 11.2271 17.1262C10.317 16.7383 9.40699 16.2158 8.50485 15.5587C7.5948 14.8937 6.73224 14.1575 5.90923 13.3421C5.09415 12.5187 4.35819 11.6558 3.70138 10.7533C3.05247 9.85081 2.53018 8.94831 2.15034 8.05373C1.77049 7.15123 1.58057 6.28831 1.58057 5.46498C1.58057 4.92664 1.67553 4.41206 1.86545 3.93706C2.05537 3.45414 2.35609 3.01081 2.7755 2.61498C3.28196 2.11623 3.83591 1.87081 4.4215 1.87081C4.64308 1.87081 4.86466 1.91831 5.06249 2.01331C5.26824 2.10831 5.45025 2.25081 5.5927 2.45664L7.42862 5.04539C7.57106 5.24331 7.67394 5.42539 7.74516 5.59956C7.81638 5.76581 7.85595 5.93206 7.85595 6.08248C7.85595 6.27248 7.80055 6.46248 7.68977 6.64456C7.58689 6.82664 7.43653 7.01664 7.24661 7.20664L6.64519 7.83206C6.55814 7.91914 6.51857 8.02206 6.51857 8.14873C6.51857 8.21206 6.52649 8.26748 6.54231 8.33081C6.56605 8.39414 6.58979 8.44164 6.60562 8.48914C6.74806 8.75039 6.99338 9.09081 7.34157 9.50248C7.69768 9.91414 8.07753 10.3337 8.48903 10.7533C8.91635 11.1729 9.32785 11.5608 9.74727 11.9171C10.1588 12.2654 10.499 12.5029 10.7681 12.6454C10.8077 12.6612 10.8552 12.685 10.9105 12.7087C10.9739 12.7325 11.0372 12.7404 11.1084 12.7404C11.2429 12.7404 11.3458 12.6929 11.4328 12.6058L12.0343 12.0121C12.2321 11.8141 12.422 11.6637 12.604 11.5687C12.786 11.4579 12.9681 11.4025 13.1659 11.4025C13.3162 11.4025 13.4745 11.4341 13.6486 11.5054C13.8227 11.5766 14.0047 11.6796 14.2026 11.8141L16.8219 13.6746C17.0277 13.8171 17.1701 13.9833 17.2572 14.1812C17.3363 14.3791 17.3838 14.5771 17.3838 14.7987Z" stroke="#331F8E" stroke-miterlimit="10"/>
</svg>
                  </span>

                  <span class="name mx-3"> Contact us </span>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                  >
                    <path
                      d="M5.81685 4.33592L1.96741 0.685925C1.84688 0.57403 1.68852 0.511849 1.52409 0.511849C1.35965 0.511849 1.2013 0.57403 1.08077 0.685925C1.02284 0.739569 0.976618 0.804614 0.945008 0.876976C0.913399 0.949338 0.897082 1.02745 0.897082 1.10642C0.897082 1.18539 0.913399 1.26351 0.945008 1.33587C0.976618 1.40824 1.02284 1.47328 1.08077 1.52692L4.48739 4.75592L1.08077 7.98492C1.02284 8.03857 0.976618 8.10361 0.945008 8.17598C0.913399 8.24834 0.897082 8.32645 0.897082 8.40542C0.897082 8.48439 0.913399 8.56251 0.945008 8.63487C0.976618 8.70724 1.02284 8.77228 1.08077 8.82592C1.2013 8.93782 1.35965 9 1.52409 9C1.68852 9 1.84688 8.93782 1.96741 8.82592L5.81685 5.17592C5.87462 5.12229 5.92071 5.05731 5.95222 4.98504C5.98373 4.91277 6 4.83477 6 4.75592C6 4.67708 5.98373 4.59908 5.95222 4.52681C5.92071 4.45454 5.87462 4.38956 5.81685 4.33592Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </router-link>
              
            </section>

             <section class="px-3 py-3 ">
              <router-link
                to="/"
                class="single-info mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="flex-center">
                  <span class="circle logout">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.1602 14.8467H10.0735C7.11351 14.8467 5.68684 13.68 5.44017 11.0667C5.41351 10.7933 5.61351 10.5467 5.89351 10.52C6.16017 10.4933 6.41351 10.7 6.44017 10.9733C6.63351 13.0667 7.62017 13.8467 10.0802 13.8467H10.1668C12.8802 13.8467 13.8402 12.8867 13.8402 10.1733V5.82666C13.8402 3.11333 12.8802 2.15333 10.1668 2.15333H10.0802C7.60684 2.15333 6.62017 2.94666 6.44017 5.08C6.40684 5.35333 6.17351 5.56 5.89351 5.53333C5.61351 5.51333 5.41351 5.26666 5.43351 4.99333C5.66017 2.34 7.09351 1.15333 10.0735 1.15333H10.1602C13.4335 1.15333 14.8335 2.55333 14.8335 5.82666V10.1733C14.8335 13.4467 13.4335 14.8467 10.1602 14.8467Z" fill="white"/>
  <path d="M10.0002 8.5H2.41357C2.14024 8.5 1.91357 8.27333 1.91357 8C1.91357 7.72667 2.14024 7.5 2.41357 7.5H10.0002C10.2736 7.5 10.5002 7.72667 10.5002 8C10.5002 8.27333 10.2736 8.5 10.0002 8.5Z" fill="white"/>
  <path d="M3.90012 10.7333C3.77346 10.7333 3.64679 10.6867 3.54679 10.5867L1.31346 8.35333C1.12012 8.16 1.12012 7.84 1.31346 7.64667L3.54679 5.41333C3.74012 5.22 4.06012 5.22 4.25346 5.41333C4.44679 5.60667 4.44679 5.92667 4.25346 6.12L2.37346 8L4.25346 9.88C4.44679 10.0733 4.44679 10.3933 4.25346 10.5867C4.16012 10.6867 4.02679 10.7333 3.90012 10.7333Z" fill="white"/>
</svg>
                  </span>

                  <span class="name  mx-3"> Logout </span>
                </div>

               
              </router-link>
       
              
            </section>

          </ul>
        </div> -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  methods:{
    toggleNaBar(){
      let menutoggle = document.querySelector('.toggle');
      menutoggle.classList.toggle('active')

      let navBar = document.querySelector('.navbar__links')
      navBar.classList.toggle('active')
    }
  }
};
</script>

<style lang="scss" scoped>
@media(max-width :768px){
  .navbar__link{margin-bottom: 30px !important;color: #fff !important;font-size: 22px !important; }
  .toggle{    display: flex !important;}
  .dropdown-toggle, .dropdown-toggle:hover, .btn.show{
    color: #fff;
  }
  .navbar__logo img{width: 110px !important;}
  .navbar__actions{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #5a33aa;
    left: 0;
    z-index: 999;
    padding: 10px;
  }
  .navbar__login{
    color: #fff !important;
    border: 1px solid #fff !important;
  }
  .dropdown-menu{top: -50px !important;}
  .navbar__links{
    align-items: center;
        justify-content: center;
        position: fixed;
        flex-direction: column;
        width: 100%;
        background: #5932a8a6;
        z-index: 99;
        height: 100%;
        top: 10%;
        left: 0;
        transform: translateX(-100%);
        transition: 0.4s all;
    
    &.active{
          transform: translateX(0%);

    }
  }
}
.toggle {
  display: none;
    position: relative;
    width: 45px;
    height: 45px;
    background: #fff;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.08);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
}

.toggle span {
    position: absolute;
    width: 20px;
    height: 4px;
    background: #23b5b5;
    border-radius: 10px;
    transition: 0.5s;
}

.toggle span:nth-child(1) {
    transform: translateY(-10px);
    width: 15px;
    left: 15px;
}

.toggle.active span:nth-child(1) {
    width: 20px;
    transform: translateY(0) rotate(45deg);
    transition-delay: 0.125s;
}

.toggle span:nth-child(2) {
    transform: translateY(10px);
    width: 15px;
    left: 15px;
}

.toggle.active span:nth-child(2) {
    width: 20px;
    transform: translateY(0) rotate(315deg);
    transition-delay: 0.25s;
}

.toggle.active span:nth-child(3) {
    transform: translateX(36px);
}

.circle {
  border: 1px solid #f3f3f3;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.logout{
    background-color: #CC2525;
  }
  svg {
    font-size: 20px;
  }
}
.dropdown-menu.profile {
  width: 300px;
  left: -14rem;
  .name {
    color: #322e2d;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
.pic-image {
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
.profile-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ebebef;
  display: inline-block;
  justify-content: center;
  align-items: center;
}
.navbar__logo img {
  width: 200px;
  height: 150px;
  object-fit: contain;
}
.fa-bell {
  font-size: 20px;
}
.navbar__link {
  color: #322e2d;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  font-family: Poppins;

  margin: 0 15px;
}
.navbar__login {
  border-radius: 4px;

  border: 1px solid #331f8e;
  background: rgba(255, 255, 255, 0.01);
  width: 150.39px;
  padding: 6px 0;
  color: #331f8e;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 200% */
  text-decoration: none;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;

  &__logo img {
    height: 50px;
  }

  &__links {
    display: flex;
    gap: 20px;

    &__link {
      text-decoration: none;
      color: black;
      font-weight: bold;

      &--active {
        color: #5a33aa; // Your primary color
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 15px;

    &__language {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-right: 5px;
      }

      i {
        font-size: 10px;
      }
    }

    &__notification i {
      font-size: 20px;
      cursor: pointer;
    }

    &__login {
      padding: 5px 15px;
      border: 2px solid #5a33aa; // Your primary color
      background-color: white;
      color: #5a33aa; // Your primary color
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #5a33aa; // Your primary color
        color: white;
      }
    }
  }
}
</style>
