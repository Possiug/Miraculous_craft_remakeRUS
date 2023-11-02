import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:dragon_sword" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_3_elements")) {
            anything(eventData.source)
        }
        else{
            dragonMiraculousPowerMenu(eventData.source)
        }
    }
})
world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:wind_dragon_sword" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_3_elements")) {
            anything(eventData.source)
        }
        else{
            dragonMiraculousPowerMenu(eventData.source)
        }
    }
})
world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:lightning_dragon_sword" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_3_elements")) {
            anything(eventData.source)
        }
        else{
            dragonMiraculousPowerMenu(eventData.source)
        }
    }
})
world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:water_dragon_sword" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_cataclysm")) {
            anything(eventData.source)
        }
        else{
            dragonMiraculousPowerMenu(eventData.source)
        }
    }
})
async function dragonMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_element")
    form.button("tile.miraculous:wind_dragon")
    form.button("tile.miraculous:water_dragon")
    form.button("tile.miraculous:lightning_dragon")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("event entity @s wind_dragon")
        player.runCommandAsync("playsound wind_dragon @a ~~~")
        player.removeTag('is_water')
        player.removeTag('is_lightning')
        player.addTag('is_wind')
        player.addTag('use_wind_dragon')
        player.runCommandAsync("effect @p fire_resistance 0 0")
        player.runCommandAsync("effect @p conduit_power 0 0")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=use_lightning_dragon, tag=use_water_dragon, tag=use_wind_dragon, tag=!full_power] add use_3_elements")
        player.runCommandAsync("tag @s[tag=use_3_elements, tag=!full_power] add timer_on")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("event entity @s water_dragon")
        player.runCommandAsync("playsound water_dragon @a ~~~")
        player.removeTag('is_wind')
        player.removeTag('is_lightning')
        player.addTag('is_water')
        player.addTag('use_water_dragon')
        player.runCommandAsync("effect @p fire_resistance 0 0")
        player.runCommandAsync("effect @p slow_falling 0 0")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=use_lightning_dragon, tag=use_water_dragon, tag=use_wind_dragon, tag=!full_power] add use_3_elements")
        player.runCommandAsync("tag @s[tag=use_3_elements, tag=!full_power] add timer_on")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("event entity @s lightning_dragon")
        player.removeTag('is_water')
        player.removeTag('is_wind')
        player.addTag('is_lightning')
        player.addTag('use_lightning_dragon')
        player.runCommandAsync("effect @p slow_falling 0 0")
        player.runCommandAsync("effect @p conduit_power 0 0")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=use_lightning_dragon, tag=use_water_dragon, tag=use_wind_dragon, tag=!full_power] add use_3_elements")
        player.runCommandAsync("tag @s[tag=use_3_elements, tag=!full_power] add timer_on")
    }
    return;
}