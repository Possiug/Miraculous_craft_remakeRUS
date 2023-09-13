import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:cat_staff" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_cataclysm")) {
            anything(eventData.source)
        }
        else{
            catMiraculousPowerMenu(eventData.source)
        }
    }
})
world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:maotif_staff" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_cataclysm")) {
            anything(eventData.source)
        }
        else{
            catMiraculousPowerMenu(eventData.source)
        }
    }
})

async function catMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.cat_staff_menu")
    form.button("button.cataclysm")
    form.button("button.umbrella")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("tellraw @a[tag=!use_cataclysm, tag=!maotif] {\"rawtext\":[{\"text\":\"§a<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:cataclysm\"}]}")
        player.runCommandAsync("tellraw @a[tag=!use_cataclysm, tag=maotif] {\"rawtext\":[{\"text\":\"§b<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:cataclysm\"}]}")
        player.runCommandAsync("playsound cataclysm @a ~~~")
        player.runCommandAsync("effect @s[tag=!use_cataclysm] haste 10 255 true")
        player.runCommandAsync("tag @s[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @s[tag=!use_cataclysm, tag=!full_power] add use_cataclysm")
        player.runCommandAsync("tag @s[tag=use_cataclysm, tag=!full_power] add timer_on")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("clear @s[tag=!maotif] miraculous:cat_staff")
        player.runCommandAsync("give @s[tag=!maotif] miraculous:cat_umbrella 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("clear @s[tag=maotif] miraculous:maotif_staff")
        player.runCommandAsync("give @s[tag=maotif] miraculous:maotif_umbrella 1 0 {\"keep_on_death\":{}}")
    }
    return;
}