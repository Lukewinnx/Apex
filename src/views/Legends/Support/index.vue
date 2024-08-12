<template>
  <div id="content6" class="content">
    <table>
      <tr>
        <td>
          <img src="images/导线管.png" alt="" />
        </td>
        <td>
          <img src="images/直布罗陀.png" alt="" />
        </td>
        <td>
          <img src="images/命脉.png" alt="" />
        </td>
        <td>
          <img src="images/罗芭.png" alt="" />
        </td>
      </tr>

      <tr>
        <td>
          <img src="images/幻想.png" alt="" />
        </td>
        <td>
          <img src="images/纽克斯尔.png" alt="" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  overflow: hidden;
  margin: auto;
  display: flex;
}
.content {
  width: 100%;
  position: relative;
}

.box img {
  width: 100%;
  object-fit: contain;
}
.content img {
  width: 360px;
  object-fit: contain;
}
.content > table td,
tr {
  padding: 25px;
}
</style>