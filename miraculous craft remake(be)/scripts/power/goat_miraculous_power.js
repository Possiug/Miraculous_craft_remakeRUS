import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:goat_brush" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_genesis")) {
            anything(eventData.source)
        }
        else{
            goatMiraculousPowerMenu(eventData.source)
        }
    }
})

async function goatMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_item")
    form.button("button.flint_and_steel", "textures/items/flint_and_steel")
    form.button("button.bucket", "textures/items/bucket_empty")
    form.button("button.spyglass", "textures/items/spyglass")
    form.button("button.shield", "textures/icons/shield")
    form.button("button.shears", "textures/items/shears")
    form.button("button.fishing_rod", "textures/items/fishing_rod_uncast")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("event entity @s[tag=flint_and_steel] clear_items")
        player.runCommandAsync("event entity @s[tag=spyglass] clear_items")
        player.runCommandAsync("event entity @s[tag=bucket] clear_items")
        player.runCommandAsync("event entity @s[tag=shield] clear_items")
        player.runCommandAsync("event entity @s[tag=shears] clear_items")
        player.runCommandAsync("event entity @s[tag=fishing_rod] clear_items")
        player.addTag('flint_and_steel')
        player.runCommandAsync("give @s flint_and_steel 1 0 {\"keep_on_death\":{}}")
        player.removeTag('bucket')
        player.removeTag('spyglass')
        player.removeTag('shield')
        player.removeTag('shears')
        player.removeTag('fishing_rod')
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§7<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:genesis\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_genesis, tag=!full_power] add use_genesis")
        player.runCommandAsync("tag @s[tag=use_genesis, tag=!full_power] add timer_on")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("event entity @s[tag=flint_and_steel] clear_items")
        player.runCommandAsync("event entity @s[tag=spyglass] clear_items")
        player.runCommandAsync("event entity @s[tag=bucket] clear_items")
        player.runCommandAsync("event entity @s[tag=shield] clear_items")
        player.runCommandAsync("event entity @s[tag=shears] clear_items")
        player.runCommandAsync("event entity @s[tag=fishing_rod] clear_items")
        player.addTag('spyglass')
        player.runCommandAsync("give @s bucket 1 0 {\"keep_on_death\":{}}")
        player.removeTag('flint_and_steel')
        player.removeTag('bucket')
        player.removeTag('shield')
        player.removeTag('shears')
        player.removeTag('fishing_rod')
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§7<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:genesis\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_genesis, tag=!full_power] add use_genesis")
        player.runCommandAsync("tag @s[tag=use_genesis, tag=!full_power] add timer_on")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("event entity @s[tag=flint_and_steel] clear_items")
        player.runCommandAsync("event entity @s[tag=spyglass] clear_items")
        player.runCommandAsync("event entity @s[tag=bucket] clear_items")
        player.runCommandAsync("event entity @s[tag=shield] clear_items")
        player.runCommandAsync("event entity @s[tag=shears] clear_items")
        player.runCommandAsync("event entity @s[tag=fishing_rod] clear_items")
        player.addTag('shield')
        player.runCommandAsync("give @s spyglass 1 0 {\"keep_on_death\":{}}")
        player.removeTag('flint_and_steel')
        player.removeTag('bucket')
        player.removeTag('spyglass')
        player.removeTag('shears')
        player.removeTag('fishing_rod')
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§7<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:genesis\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_genesis, tag=!full_power] add use_genesis")
        player.runCommandAsync("tag @s[tag=use_genesis, tag=!full_power] add timer_on")
    }
    else if (response.selection == "3") {
        player.runCommandAsync("event entity @s[tag=flint_and_steel] clear_items")
        player.runCommandAsync("event entity @s[tag=spyglass] clear_items")
        player.runCommandAsync("event entity @s[tag=bucket] clear_items")
        player.runCommandAsync("event entity @s[tag=shield] clear_items")
        player.runCommandAsync("event entity @s[tag=shears] clear_items")
        player.runCommandAsync("event entity @s[tag=fishing_rod] clear_items")
        player.addTag('shield')
        player.runCommandAsync("give @s shield 1 0 {\"keep_on_death\":{}}")
        player.removeTag('flint_and_steel')
        player.removeTag('bucket')
        player.removeTag('spyglass')
        player.removeTag('shears')
        player.removeTag('fishing_rod')
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§7<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:genesis\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_genesis, tag=!full_power] add use_genesis")
        player.runCommandAsync("tag @s[tag=use_genesis, tag=!full_power] add timer_on")
    }
    else if (response.selection == "4") {
        player.runCommandAsync("event entity @s[tag=flint_and_steel] clear_items")
        player.runCommandAsync("event entity @s[tag=spyglass] clear_items")
        player.runCommandAsync("event entity @s[tag=bucket] clear_items")
        player.runCommandAsync("event entity @s[tag=shield] clear_items")
        player.runCommandAsync("event entity @s[tag=shears] clear_items")
        player.runCommandAsync("event entity @s[tag=fishing_rod] clear_items")
        player.addTag('shears')
        player.runCommandAsync("give @s shears 1 0 {\"keep_on_death\":{}}")
        player.removeTag('flint_and_steel')
        player.removeTag('bucket')
        player.removeTag('spyglass')
        player.removeTag('shield')
        player.removeTag('fishing_rod')
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§7<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:genesis\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_genesis, tag=!full_power] add use_genesis")
        player.runCommandAsync("tag @s[tag=use_genesis, tag=!full_power] add timer_on")
    }
    else if (response.selection == "5") {
        player.runCommandAsync("event entity @s[tag=flint_and_steel] clear_items")
        player.runCommandAsync("event entity @s[tag=spyglass] clear_items")
        player.runCommandAsync("event entity @s[tag=bucket] clear_items")
        player.runCommandAsync("event entity @s[tag=shield] clear_items")
        player.runCommandAsync("event entity @s[tag=shears] clear_items")
        player.runCommandAsync("event entity @s[tag=fishing_rod] clear_items")
        player.addTag('fishing_rod')
        player.runCommandAsync("give @s fishing_rod 1 0 {\"keep_on_death\":{}}")
        player.removeTag('flint_and_steel')
        player.removeTag('bucket')
        player.removeTag('spyglass')
        player.removeTag('shield')
        player.removeTag('shears')
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§7<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:genesis\"}]}")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!use_genesis, tag=!full_power] add use_genesis")
        player.runCommandAsync("tag @s[tag=use_genesis, tag=!full_power] add timer_on")
    }
    return;
}