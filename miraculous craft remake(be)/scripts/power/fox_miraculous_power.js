import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:fox_flute" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_mirage")) {
            anything(eventData.source)
        }
        else{
            foxMiraculousPowerMenu(eventData.source)
        }
    }
})

async function foxMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_mirage")
    form.button("button.zombie.akumatize")
    form.button("button.creeper.akumatize")
    form.button("button.skeleton.akumatize")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("clear @p miraculous:fox_flute")
        player.runCommandAsync("give @p miraculous:mirage_zombie_flute 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("playsound mirage @a ~~~")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_mirage] add use_mirage")
        player.runCommandAsync("tag @s[tag=use_mirage, tag=!full_power] add timer_on")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:mirage\"}]}")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("clear @p miraculous:fox_flute")
        player.runCommandAsync("give @p miraculous:mirage_creeper_flute 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("playsound mirage @a ~~~")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_mirage] add use_mirage")
        player.runCommandAsync("tag @s[tag=use_mirage, tag=!full_power] add timer_on")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:mirage\"}]}")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("clear @p miraculous:fox_flute")
        player.runCommandAsync("give @p miraculous:mirage_skeleton_flute 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("playsound mirage @a ~~~")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_mirage] add use_mirage")
        player.runCommandAsync("tag @s[tag=use_mirage, tag=!full_power] add timer_on")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:mirage\"}]}")
    }
    return;
}
world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:rena_furtive_flute" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_mirage")) {
            anything(eventData.source)
        }
        else{
            renaFurtivePowerMenu(eventData.source)
        }
    }
})

async function renaFurtivePowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_mirage")
    form.button("button.zombie.akumatize")
    form.button("button.creeper.akumatize")
    form.button("button.skeleton.akumatize")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("clear @p miraculous:rena_furtive_flute")
        player.runCommandAsync("give @p miraculous:rena_furtive_mirage_zombie_flute 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("playsound mirage @a ~~~")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_mirage] add use_mirage")
        player.runCommandAsync("tag @s[tag=use_mirage, tag=!full_power] add timer_on")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§b<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:mirage\"}]}")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("clear @p miraculous:rena_furtive_flute")
        player.runCommandAsync("give @p miraculous:rena_furtive_mirage_creeper_flute 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("playsound mirage @a ~~~")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_mirage] add use_mirage")
        player.runCommandAsync("tag @s[tag=use_mirage, tag=!full_power] add timer_on")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§b<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:mirage\"}]}")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("clear @p miraculous:rena_furtive_flute")
        player.runCommandAsync("give @p miraculous:rena_furtive_mirage_skeleton_flute 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("playsound mirage @a ~~~")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_mirage] add use_mirage")
        player.runCommandAsync("tag @s[tag=use_mirage, tag=!full_power] add timer_on")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§b<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:mirage\"}]}")
    }
    return;
}