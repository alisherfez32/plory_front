<template>
  <div class="div">
    <div class="footer">
      <h3>You can find us here:</h3>
      <div class="brand">
        <a
          href="https://www.youtube.com/channel/UCvYjK1g78rybPHhnE8db1RA/videos"
          class="soc_media"
          target="_blank"
          ><YouTube />
        </a>
        <a
          href="https://www.linkedin.com/in/dadakhon-abdulloev-400b9721b/"
          class="soc_media"
          target="_blank"
          > <Linkedin class="icon"/>
        </a>
        <a
          href="https://www.instagram.com/aaltach_int/"
          class="soc_media"
          target="_blank"
          > <Instagram class="icon"/>
        </a>
        <a
          href="https://t.me/AbdullojonAbdulloev"
          class="soc_media"
          target="_blank"
          ><Telegram />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=6285694886172"
          class="soc_media"
          target="_blank"
          ><Whatsapp />
        </a>
      </div>
      <div class="fff">
        <h5>&copy;Copyright</h5>
        <h5>&reg;All the rights served</h5>
      </div>
    </div>
  </div>
</template>
<script>
import YouTube from '../../assets/icons/brands/youtube.vue'
import Instagram from '../../assets/icons/brands/instagram.vue'
import Linkedin from '../../assets/icons/brands/linkedin.vue'
import Telegram from '../../assets/icons/brands/telegram.vue'
import Whatsapp from '../../assets/icons/brands/whatsapp.vue'
export default {
  components: {
    YouTube, Instagram, Linkedin, Telegram, Whatsapp
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.div {
  width: 100%;
  max-height: 600px;
  margin: 0;
  display: flex;
  background-color: rgba(255, 246, 246, 0.9);
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  .footer {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .brand {
      display: flex;
      .soc_media {
        align-items: center;
        height: 32px;
        width: 32px;
        margin: 10px;
        border-radius: 30%;
        .fa {
          width: 100%;
          height: 100%;
          color: #0300bd;
          &:hover {
            color: #8ce4ff;
            transition: 1s;
            transform: scale(1.3);
          }
        }
        &:hover {
          background: #000000;
          transition: 1s;
        }
      }
    }
    .fff {
      display: flex;
      margin-bottom: 0;
    }
  }
}
</style>