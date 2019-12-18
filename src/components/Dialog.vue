<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="header">
        <slot name="header">
          Add Title

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </div>
      <div class="content">
        <slot name="body">
            Add Body
        </slot>
      </div>
      <div class="footer">
        <slot name="footer">
          Add Footer
          <button
          type="button"
          class="btn-green"
          @click="close"
          >
            Close
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .header,
  .footer {
    padding: 15px;
    display: flex;
  }

  .header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .content {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>