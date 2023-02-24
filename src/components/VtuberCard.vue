<template>
  <div class="col-12 col-sm-3">
   
    <div class="vtuber-card">
      <!-- <div class="vtuber-card-image">
        <img :src="vtuber.image" :alt="vtuber.name">
        </div>
        <div class="vtuber-card-info">
        <h3>{{vtuber.name}}</h3>
        <p>{{vtuber.description}}</p>
        </div> -->
      <!-- Modal -->

      <div class="card bg-dark text-white">
        <img
          :src="vtuber.thumbnail_icon_url"
          :alt="vtuber.title"
          class="card-img"
          rel="preload"
        />
        <div class="card-body align-items-end">
          <h2 class="card-title text-center text-lg">{{ vtuber.title }}</h2>
          <p class="card-text text-center text-lg">ผู้ติดตาม : {{ vtuber.subscribers }}</p>
          <!-- Button trigger modal -->
            <!-- add # to the front of vtuber.channel_id to make it work -->
          <button
            type="button"
            class="btn btn-primary mt-3"
            data-bs-toggle="modal"
            :data-bs-target="'#' +  vtuber.id"
          >
            ดูข้อมูลเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      :id="vtuber.id"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      :aria-labelledby="vtuber.id"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" :id="vtuber.title">
              {{ vtuber.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img class="" :src="vtuber.thumbnail_icon_url" alt="" rel="preload"/>
            <p class="mt-2">ผู้ติดตาม : {{ vtuber.subscribers }}</p>
            <p class="text-warp">{{ vtuber.description }}</p>
            <h3 class="text-white">คลิปหรือไลฟ์ล่าสุด : {{ vtuber.lastest_videoTitle }}</h3>
            <div>
              <p v-if="vtuber.lastest_video == null" >Not Found! Contact Admin</p>
              <a v-else :href="'https://www.youtube.com/watch?v=' + vtuber.lastest_video" class="btn btn-danger" target="_blank">ขออภัยไม่สามารถโหลด Iframe ได้กดตรงนี้เพื่อไปที่วิดิโอ</a>
            </div>
            
            <p class="mt-2">อัปเดทข้อมูลล่าสุด : {{ vtuber.last_updated }}</p>
            
          </div>
          <div class="modal-footer">
            <a :href="'https://www.youtube.com/channel/' + vtuber.id" target="_blank" class="btn btn-danger" data-dismiss="modal">Youtube</a>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "VtuberCard",
  props: {
    vtuber: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
  max-height: 500px;
  height: 500px;
  object-fit: cover;
  overflow: hidden;
  position: relative;
}
.modal-content {
  background-color: #000;
  color: #fff;
}
.modal-body {
  justify-content: center;
}

.vtuber-card {
  /* background-color: #000; */
  min-height: 500px;
  height: 600px;
  max-height: 600px;
  color: #fff;
  /* border-radius: 5px; */
  transition: all 0.3s ease;
  cursor: pointer;
}
.vtuber-card:hover {
  transition: all 0.3s ease;
  transform: scale(1.05);
  z-index: 2;
}
</style>


