import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:rooster_feather" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_sublimation")) {
            anything(eventData.source)
        }
        else{
            roosterMiraculousPowerMenu(eventData.source)
        }
    }
})

async function roosterMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_power")
    form.button("button.night_vision", "textures/ui/night_vision_effect")
    form.button("button.invisibility", "textures/ui/invisibility_effect")
    form.button("button.fire_resistance", "textures/ui/fire_resistance_effect")
    form.button("button.speed", "textures/ui/speed_effect")
    form.button("button.fly", "textures/ui/jump_boost_effect")
    form.button("button.change_weather", "textures/icons/weather")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("effect @s fire_resistance 0")
        player.runCommandAsync("effect @s invisibility 0")
        player.runCommandAsync("effect @s night_vision 0")
        player.runCommandAsync("effect @s speed 0")
        player.removeTag('sublimation_fire_resistance')
        player.removeTag('sublimation_invisibility')
        player.removeTag('sublimation_speed')
        player.addTag('sublimation_night_vision')
        player.runCommandAsync("ability @s[m=survival] mayfly false")
        player.runCommandAsync("event entity @p rooster_bold")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("effect @s fire_resistance 0")
        player.runCommandAsync("effect @s invisibility 0")
        player.runCommandAsync("effect @s night_vision 0")
        player.runCommandAsync("effect @s speed 0")
        player.removeTag('sublimation_fire_resistance')
        player.removeTag('sublimation_night_vision')
        player.removeTag('sublimation_speed')
        player.addTag('sublimation_invisibility')
        player.runCommandAsync("ability @s[m=survival] mayfly false")
        player.runCommandAsync("event entity @p rooster_bold_invisibility")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("effect @s fire_resistance 0")
        player.runCommandAsync("effect @s invisibility 0")
        player.runCommandAsync("effect @s night_vision 0")
        player.runCommandAsync("effect @s speed 0")
        player.removeTag('sublimation_night_vision')
        player.removeTag('sublimation_invisibility')
        player.removeTag('sublimation_speed')
        player.addTag('sublimation_fire_resistance')
        player.runCommandAsync("ability @s[m=survival] mayfly false")
        player.runCommandAsync("event entity @p rooster_bold")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    else if (response.selection == "3") {
        player.runCommandAsync("effect @s fire_resistance 0")
        player.runCommandAsync("effect @s invisibility 0")
        player.runCommandAsync("effect @s night_vision 0")
        player.runCommandAsync("effect @s speed 0")
        player.removeTag('sublimation_night_vision')
        player.removeTag('sublimation_invisibility')
        player.removeTag('sublimation_fire_resistance')
        player.addTag('sublimation_speed')
        player.runCommandAsync("ability @s[m=survival] mayfly false")
        player.runCommandAsync("event entity @p rooster_bold")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    else if (response.selection == "4") {
        player.runCommandAsync("effect @s fire_resistance 0")
        player.runCommandAsync("effect @s invisibility 0")
        player.runCommandAsync("effect @s night_vision 0")
        player.runCommandAsync("effect @s speed 0")
        player.removeTag('sublimation_fire_resistance')
        player.removeTag('sublimation_night_vision')
        player.removeTag('sublimation_invisibility')
        player.removeTag('sublimation_speed')
        player.runCommandAsync("ability @s mayfly true")
        player.runCommandAsync("event entity @p rooster_bold")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    else if (response.selection == "5") {
        player.runCommandAsync("effect @s fire_resistance 0")
        player.runCommandAsync("effect @s invisibility 0")
        player.runCommandAsync("effect @s night_vision 0")
        player.runCommandAsync("effect @s speed 0")
        player.removeTag('sublimation_fire_resistance')
        player.removeTag('sublimation_night_vision')
        player.removeTag('sublimation_invisibility')
        player.removeTag('sublimation_speed')
        player.runCommandAsync("ability @s[m=survival] mayfly false")
        player.runCommandAsync("event entity @p rooster_bold")
        changeWeatherMenu(player)
    }
    return;
}
async function changeWeatherMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_power")
    form.button("button.weather_clear", "textures/ui/weather_clear")
    form.button("button.weather_rain", "textures/ui/weather_rain")
    form.button("button.weather_thunderstorm", "textures/ui/weather_thunderstorm")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("weather clear")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("weather rain")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("weather thunder")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§6<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:sublimation\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_sublimation, tag=!full_power] add use_sublimation")
        player.runCommandAsync("tag @s[tag=use_sublimation, tag=!full_power] add timer_on")
    }
    return;
}