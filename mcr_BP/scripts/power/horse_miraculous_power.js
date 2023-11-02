import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:horseshoe" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_voyage")) {
            anything(eventData.source)
        }
        else{
            horseMiraculousPowerMenu(eventData.source)
        }
    }
})

async function horseMiraculousPowerMenu(player) {
    const form = new ModalFormData()
        .title("title.horse_miraculous_teleport")
    form.textField('title.coordinate', '')
    const response = await form.show(player)
    if (response.formValues[0]) {
        player.runCommandAsync(`event entity @e[type=miraculous:voyage_portal2] despawn`)
        player.runCommandAsync(`give @p miraculous:voyage 1 0 {\"keep_on_death\":{}}`)
        player.runCommandAsync(`tellraw @a {\"rawtext\":[{\"text\":\"§b<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:voyage\"}]}`)
        player.runCommandAsync(`summon miraculous:voyage_portal2 ~ ~5 ~`)
        player.runCommandAsync(`tp @e[type=miraculous:voyage_portal2] ${response.formValues[0]}`)
        player.runCommandAsync("tag @p[tag=!full_power] add use_voyage")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @s[tag=use_voyage, tag=!full_power] add timer_on")
    }
    return;
}