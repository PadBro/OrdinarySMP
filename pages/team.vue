<script lang="ts" setup>
import PadBro from "~/assets/PadBro.png";
import xKellfeine from "~/assets/xKellfeine.png";
import Sparrowhawk from "~/assets/Sparrowhawk.png";
import stingrray from "~/assets/stingrray.png";
import MrCookiePrincess from "~/assets/MrCookiePrincess.png";
import MetaXP from "~/assets/MetaXP.png";
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et libero sint veritatis, aliquid possimus beatae harum delectus tempora ab ipsa, nam animi cupiditate corporis obcaecati. Voluptatum in aspernatur, officia.";
</script>

<template>
  <div>
    <Quote
      orientation="left"
      :text="text"
      name="PadBro"
      title="Moderator"
      :src="PadBro"
    />
    <Quote
      orientation="right"
      :text="text"
      name="xKellfeine"
      title="Moderator"
      :src="xKellfeine"
    />
    <Quote
      orientation="left"
      :text="text"
      name="Sparrowhawk"
      title="Moderator"
      :src="Sparrowhawk"
    />
    <Quote
      orientation="right"
      :text="text"
      name="stingrray"
      title="Moderator"
      :src="stingrray"
    />
    <Quote
      orientation="left"
      :text="text"
      name="MrCookiePrincess"
      title="Moderator"
      :src="MrCookiePrincess"
    />
    <Quote
      orientation="right"
      :text="text"
      name="MetaXP"
      title="Moderator"
      :src="MetaXP"
    />
  </div>
</template>
