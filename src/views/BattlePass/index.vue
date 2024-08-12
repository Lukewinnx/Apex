<template>
  <div>
    <div class="flex-item itemp1">
      <img src="./images/apex-ignite-battle-pass-icon.png" alt="" />
      <div class="wenzip1">
        <h1>IGNITE BATTLE PASS</h1>
      </div>
      <div class="wenzitiaozhuan">
        <div class="inline-text">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p @click="tiaozhuan('p1')" id="#p1">Watch Trailer</p>
          <p @click="tiaozhuan('p2')" id="#p2">Choose Your Battle Pass</p>
          <p @click="tiaozhuan('p3')" id="#p3">Premium Rewards</p>
          <p @click="tiaozhuan('p4')" id="#p4">Free Rewards</p>
        </div>
      </div>
    </div>

    <div class="battlepasszhuti">
      <div class="passbiaoti">
        <h1>TIME TO SHINE IN IGNITE</h1>
        <br />
        <p>Ascend the Ignite Battle Pass to unlock 100+ new items</p>
      </div>
      <div class="flex-item itemp2" ref="p1" id="p1">
        <img
          src="images/p1 apex-thumbnail-s19-ignite-battlepass.jpg.adapt.crop16x9.1920w.jpg"
          alt=""
        />
      </div>
      <div class="textp2" ref="p2" id="p2">
        <div class="passbiaoti2">
          <h1>PREMIUM VS BUNDLE?</h1>
          <br />

          <p>
            Head to the Battle Pass tab to get the Premium Battle Pass for 950
            Apex Coins and unlock rewards every time you level up! Want to earn
            100+ rewards, faster? Grab the Premium Bundle for 2800 Apex Coins to
            instantly unlock 25 levels and 4700 Apex Coins worth of content!
          </p>
        </div>
      </div>
      <div class="flex-containerpass">
        <div class="zuobian">
          <div>
            <img
              src="images/p3apex-media-battle-pass-ignite-premium-16x9.jpg.adapt.1920w.jpg"
              alt=""
            />
          </div>
          <div class="wenzip3">
            <h1>PREMIUM BATTLE PASS</h1>
            <p>
              Instantly unlock Epics skins for Wattson, Conduit, and earn 100+
              rewards like the Reactive "Wrath of Fenrir" Rampage at level 110!
              Play to level up and unlock even more rewards!
            </p>
          </div>
        </div>
        <div class="youbian">
          <div>
            <img
              src="images/p4apex-media-battle-pass-ignite-premium-bundle-16x9.jpg.adapt.1920w.jpg"
              alt=""
            />
          </div>
          <div class="wenzip4">
            <h1>PREMIUM BATTLE PASS BUNDLE</h1>
            <p>
              Get a head start on your ascension, immediately gaining 25 levels
              plus glorious rewards like the Legendary "Gilded Age" Nemesis and
              Rampart’s Legendary "Sly Sovereign" skin!
            </p>
          </div>
        </div>
      </div>
      <div class="passbiaoti3" ref="p3" id="p3">
        <h1>
          <p>PREMIUM REWARDS</p>
        </h1>
        <p>
          Chase glory in Octane’s Legendary “Godly Speed” skin, Reactive Rampage
          skins, and more!
        </p>
      </div>
      <div class="navpass" >
        <a id="nav1" @click="switchContent(0)">Remart</a>
        <a id="nav2" @click="switchContent(1)">Octane</a>
        <a id="nav3" @click="switchContent(2)"> Conduit</a>
        <a id="nav4" @click="switchContent(3)">Newcastle</a>
        <a id="nav5" @click="switchContent(4)">Wattson</a>
      </div>
    </div>

    <section>
      <div class="box">
        <div id="content1" class="content" v-if="currentContentIndex === 0">
          <img
            src="images/apex-media-custom-battle-pass-ignite-season-rampart-xl.jpg.adapt.1920w.jpg"
            alt=""
          />
        </div>
        <div id="content2" class="content" v-if="currentContentIndex === 1">
          <img
            src="images/Octane apex-media-custom-battle-pass-ignite-season-octane-xl.jpg.adapt.1920w.jpg"
            alt=""
          />
        </div>
        <div id="content3" class="content" v-if="currentContentIndex === 2">
          <img
            src="images/Condiutapex-media-custom-battle-pass-ignite-season-conduit-xl.jpg.adapt.1920w.jpg"
            alt=""
          />
        </div>
        <div id="content4" class="content" v-if="currentContentIndex === 3">
          <img
            src="images/NEWcastleapex-media-custom-battle-pass-ignite-season-newcastle-xl.jpg.adapt.1920w.jpg"
            alt=""
          />
        </div>
        <div id="content5" class="content" v-if="currentContentIndex === 4">
          <img
            src="images/Wattsonapex-media-custom-battle-pass-ignite-season-wattson-xl.jpg.adapt.1920w.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <div class="Battlelast" id="">
      <div class="battlevideo">
        <div class="zuobian">
          <h1>NEW REACTIVE WEAPON SKINS</h1>

          <video
            src="video/BATTLE左边.mp4"
            muted
            autoplay="autoplay"
            loop="loop"
          ></video>
        </div>
        <div class="youbian">
          <h1>NEW SKYDIVE EMOTES</h1>

          <video
            src="video/BATTLE右边.mp4"
            muted
            autoplay="autoplay"
            loop="loop"
          ></video>
        </div>
      </div>
      <div>
        <img src="images/BATTLLE组合包.png" alt="" />
      </div>

      <div class="lasttext" ref="p4" id="p4">
        <h1>FREE REWARDS</h1>
        <p>
          Mirage Character Skin, 7 Apex Packs*, 11 Weapon Skins, 4 Load Screens,
          Win Trackers for all Legends, 2 Music Packs, 200 Apex Coins, Season
          Badge.
        </p>
        <p>
          *Not available in all regions. For more details on Apex Packs
          including probability rates and items available, please visit our FAQ.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentContentIndex: 0,
      plist: [
        { id: "p1", name: "Watch Trailer" },
        { id: "p2", name: "Choose Your Battle Pass" },
        { id: "p3", name: "Premium Rewards" },
        { id: "p4", name: "Free Rewards" },
      ],
    };
  },
  methods: {
    switchContent(index) {
      this.currentContentIndex = index;
    },
    //点击事件进行锚点跳转
    tiaozhuan(p) {
      if (p === "p1") {
        this.$refs["p1"].scrollIntoView(true);
      } else if (p === "p2") {
        this.$refs["p2"].scrollIntoView(true);
      } else if (p === "p3") {
        this.$refs["p3"].scrollIntoView(true);
      } else {
        this.$refs["p4"].scrollIntoView(true);
      }
    },
  },
};
</script>

<style scoped>
.itemp1 {
  background-image: url("images/bg-battle-pass-ignite-legends-xl.jpg.adapt.1920w.jpg");
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 650px;
  top: 80px;

  overflow-clip-margin: content-box;
}
.itemp1 img {
  margin-top: 9%;
}
.inline-text p {
  color: black;
  margin: 10px;
  text-decoration: underline;
  cursor: pointer;
}

.navpass {
  color: blue;
  cursor: pointer;
}
.navpass a {
  color: blue;
}
.wenzitiaozhuan {
  width: 80%;
  font-family: "STKaiti";
  margin: auto;
  padding: 20px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 80%;
  left: 50%;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 1;
  font-weight: lighter;
  font-weight: bolder;
  letter-spacing: 2px;
}
.inline-text {
  display: inline;
  position: relative;
  z-index: 10;
  font-size: 20px;
}
.wenzip1 {
  width: 50%;
  font-family: "STKaiti";
  margin: auto;
  padding: 20px;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 65%;
  left: 50%;
  font-size: 2vw;
  color: black;
  text-align: center;
  line-height: 1;
  font-weight: lighter;
}
.battlepasszhuti {
  width: 100%;
  background-image: url("images/dark-sectionbg-xl.jpg.adapt.1920w.jpg");
  color: aliceblue;
}
.passbiaoti {
  width: 100%;
  height: 100px;
  position: relative;
  top: 40px;
  font-size: larger;
  font-size: 30px;
  display: inline;

  z-index: 10;
}
.passbiaoti h1 {
  font-size: 40px;
}

.itemp2 {
  background-position: center center;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  flex: 1;
  overflow: hidden;
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  margin: 20px;
  color: aliceblue;
  font-size: 19px;
}
.itemp2 img {
  position: relative;
  width: 70%;
  height: 640px;
}
.passbiaoti {
  width: 100%;
  height: 100px;
  position: relative;
  top: 40px;
  font-size: larger;
  font-size: 30px;
  display: inline;

  z-index: 10;
}
.textp2 {
  margin: 0;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 7%;
  top: -50px;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
}
.passbiaoti2 {
  position: relative;
  font-size: larger;
  font-size: 20px;
  display: inline;
  z-index: 10;
}
.passbiaoti2 p {
  font-size: smaller;
  font-weight: lighter;
}
.flex-containerpass {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  padding: 1px;
  box-sizing: border-box;
}
.zuobian {
  display: flex;
  width: 50%;
  float: left;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  padding: 1px;
  box-sizing: border-box;
}

.zuobian img {
  float: right;
  display: block;
  width: 600px;
  height: 350px;
}
.wenzip3 {
  text-align: center;
  flex: 1;
  align-self: stretch;
  padding: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 1vw;
}
.youbian {
  width: 50%;
  position: relative;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  padding: 1px;
  box-sizing: border-box;
}
.youbian img {
  display: block;
  width: 600px;
  height: 350px;
}
.wenzip4 {
  flex: 1;
  align-self: stretch;
  padding: 10px;
  flex-wrap: wrap;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 1vw;
}

.passbiaoti3 {
  height: 100px;
  color: white;
}
.passbiaoti3 h1 {
  color: white;
}
.passbiaoti3 a {
  color: white;
}

.navpass {
  text-decoration: underline;
  letter-spacing: 20px;
  color: white;
  position: relative;
  z-index: 10;
  font-size: 20px;
  display: inline;
  z-index: 10;
  font-size: 20px;
}
.navpass a {
  color: #ffffff;
  margin: 10px;
}
.box {
  overflow: hidden;
  margin: auto;
  display: flex;
}
.content {
  width: 100%;
  flex-shrink: 0;
}
.box img {
  width: 100%;
  object-fit: contain;
}
.Battlelast {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  padding: 1px;
  box-sizing: border-box;
  background-image: url("images/dark-sectionbg-xl.jpg.adapt.1920w.jpg");

  color: #ffffff;
}
.battlevideo video {
  width: 100%;
  height: 700px;
}
.Battlelast img {
  width: 100%;
  position: relative;
}
.lasttext {
  top: -200px;
  position: relative;
  z-index: 1;
  width: 65%;
  color: white;
  font-size: 24px;
  left: 18%;
  height: 200px;
  text-align: center;
  z-index: 10;
}
</style>