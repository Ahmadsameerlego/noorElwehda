<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
      <i class="fa-solid fa-angles-left"></i>
    </button>
    <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: page === currentPage }">{{ page }}</button>
    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
      <i class="fa-solid fa-angles-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.$emit('pageChanged', page);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: end;
  align-items: flex-end;
  gap: 5px;
  width: 100%;
}

button {


  border-radius: 32px;
border: 1px solid #F1F1F1;
background: #FFF;

display: flex;
width: 32px;
height: 32px;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;

}

button.active {
background:  #331F8E;
color: #fff;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
