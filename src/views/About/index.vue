<template>
<div>
  <div class="aboutbanner">
        <video muted autoplay="autoplay" loop="loop" >
            <source src="video/apex-legends-ignite-section-bg-video-l.webm" type="video/mp4" height="800px"></source>
        </video>
        <div>
            <img src="images/Mqr7GB.png" alt="">
            </div>
        <div class="text2">
            <h5>

                Pick your character. Round up your squad. Show everyone what Legends are made of.

            </h5>
            <br>
            <h6>

                PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, Nintendo Switch, and PC via EA App and Steam.

            </h6>

        </div>
    </div>
  <div class="zhutiabout">
        <div class="flex-item item18">
            <div class="wenzi18">
              <h1>

                THE LEGENDS

              </h1>
              <br>

              <p>
                
                Choose from a lineup of outlaws, soldiers, misfits, and misanthropes, each with their own set of skills. The Apex Games welcome all comers – survive long enough, and they call you a Legend.

              </p>
            </div>
          
        </div>
        <div class="jiqiren">

            <img src="images/apex-embed-about-legends.png" alt="">

        </div>
        <div class="textmid">
            <h1>

                YOUR SQUAD

            </h1>
            
            <p>

                Pick your Legend and join forces with other players, combining your unique skills to form the ultimate squad.
                
            </p>
        </div>
        <div class="flex-item item19">
            <div class="wenzi19">
                <h1>
                    
                    BEYOND BATTLE ROYALE

                </h1>
                <br>
                <p>

                    Apex Legends is always evolving. Play in classic 60-person Battle Royale matches, limited-time modes and takeovers!

                </p>
            </div>
          
        </div>
        <div><img src="images/图标.png" alt=""></div>
        <div class="textlast">
            <h1>

                A WORLD WHERE ANYTHING GOES

            </h1>

            <p>

                he Frontier War is over. After decades of conflict between the IMC and the militia founded to fight them, the region of space known as the Frontier can finally see peace.

But liberation can come at a cost: the Frontier worlds were left barren by the war, and promised aid dwindled to nothing. With no way to support themselves, those who remained had no choice but to leave their homes. The brave relocated to the Outlands.

A remote cluster of planets on the fringes of the Frontier, the Outlands are untouched by war and teeming with resources and opportunity. But life is cheap here, and danger lurks around every corner. Its pioneers, explorers, and outlaws used to spend their lives locked in an endless power struggle – now, they settle their differences in the Apex Games, a bloodsport where Legends from all corners of the Frontier compete for money, fame, and glory.

            </p>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
.aboutbanner {
  width: 100%;
  background-image: url("images/apex-section-bg-red-grit-texture-xl.jpg.adapt.320w.jpg");
}
.aboutbanner img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 30%;
  height: 300px;
}
.aboutbanner video {
  height: 700px;
}
.text2 {
  position: absolute;
  top: 66%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 30px;
  font-family: Arial, sans-serif;
  text-align: center;
  z-index: 10;
  line-height: 25px;
  letter-spacing: 5px;
  font-size: 4vh;
}
.item18 {
  margin: 0;
  background-image: url("images/crop7x2.1920w.png");
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
  align-items: center;
  flex-direction: column;
  height: 500px;
  justify-content: center;
}
.wenzi18 h1 {
  font-weight: bolder;
}
.wenzi18 p {
  font-weight: lighter;
}
.wenzi18 {
  position: absolute;
  top: 40%;
  left: 57%;
  font-size: 20px;
  width: 40%;
  height: auto;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
  color: #fff;
  float: right;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.zhutiabout {
  width: 100%;
  background-image: url("./images/apex-section-bg-red-grit-texture-xl.jpg.adapt.320w.jpg");
}
.jiqiren img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.textmid {
  color: #fff;
}
.item19 {
  background-image: url("images/About APEX).png");
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
  margin: 10px;
  height: 500px;
}
.item19 h1 {
  font-weight: bolder;
  text-align: center;
  font-weight: bold;
}
.item19 p {
  font-weight: lighter;
}
.wenzi19 h1 {
  font-weight: bolder;
}

.wenzi19 {
  position: absolute;
  top: 40%;
  right: 57%;
  font-size: 20px;
  width: 40%;
  height: auto;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
  color: #fff;
  float: right;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.textlast {
  top: 40%;
  right: 57%;
  font-size: 20px;
  width: 50%;
  height: auto;
  text-align: center;
  letter-spacing: 5px;
  line-height: 1;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 20px;
  color: #fff;
}
</style>
