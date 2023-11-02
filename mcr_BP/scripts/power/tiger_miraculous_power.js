import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:tiger_bolas" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_clout")) {
            anything(eventData.source)
        }
        else{
            tigerMiraculousPowerMenu(eventData.source)
        }
    }
})

async function tigerMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_power_explosion_strength")
    form.button("button.clout1")
    form.button("button.clout2")
    form.button("button.clout3")
    form.button("button.clout4")
    form.button("button.clout5")
    form.button("button.clout6")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("event entity @s clear_clout")
        player.runCommandAsync("give @s miraculous:clout1 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§c<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:clout\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add use_clout")
        player.runCommandAsync("tag @s[tag=use_clout, tag=!full_power] add timer_on")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("event entity @s clear_clout")
        player.runCommandAsync("give @s miraculous:clout2 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§c<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:clout\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add use_clout")
        player.runCommandAsync("tag @s[tag=use_clout, tag=!full_power] add timer_on")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("event entity @s clear_clout")
        player.runCommandAsync("give @s miraculous:clout3 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§c<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:clout\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add use_clout")
        player.runCommandAsync("tag @s[tag=use_clout, tag=!full_power] add timer_on")
    }
    else if (response.selection == "3") {
        player.runCommandAsync("event entity @s clear_clout")
        player.runCommandAsync("give @s miraculous:clout4 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§c<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:clout\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add use_clout")
        player.runCommandAsync("tag @s[tag=use_clout, tag=!full_power] add timer_on")
    }
    else if (response.selection == "4") {
        player.runCommandAsync("event entity @s clear_clout")
        player.runCommandAsync("give @s miraculous:clout5 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§c<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:clout\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add use_clout")
        player.runCommandAsync("tag @s[tag=use_clout, tag=!full_power] add timer_on")
    }
    else if (response.selection == "5") {
        player.runCommandAsync("event entity @s clear_clout")
        player.runCommandAsync("give @s miraculous:clout6 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§c<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:clout\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add use_clout")
        player.runCommandAsync("tag @s[tag=use_clout, tag=!full_power] add timer_on")
    }
    return;
}