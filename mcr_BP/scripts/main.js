import { world, system, ItemStack} from "@minecraft/server";

import "./power/ladybug_miraculous_power";
import "./preference/ladybug_miraculous_preference";
import "./power/cat_miraculous_power";
import "./preference/cat_miraculous_preference";
import "./preference/rabbit_miraculous_preference";
import "./preference/bee_miraculous_preference";
import "./power/dragon_miraculous_power";
import "./preference/dragon_miraculous_preference";
import "./preference/turtle_miraculous_preference";
import "./power/goat_miraculous_power";
import "./power/tiger_miraculous_power";
import "./power/butterfly_miraculous_power";
import "./power/peacock_miraculous_power";
import "./preference/peacock_miraculous_preference";
import "./preference/snake_miraculous_preference";
import "./power/horse_miraculous_power";
import "./preference/horse_miraculous_preference";
import "./power/rooster_miraculous_power";
import "./preference/fox_miraculous_preference";
import "./power/fox_miraculous_power";
import "./preference/mouse_miraculous_preference";

system.events.beforeWatchdogTerminate.subscribe(data => {
  data.cancel = true;
});