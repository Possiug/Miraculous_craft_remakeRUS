import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:amok") {
        if (eventData.source.hasTag("anything")) {
            anything(eventData.source)
        }
        else{
            peacockMiraculousPowerMenu(eventData.source)
        }
    }
})

async function peacockMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_item")
    form.button("button.candy_sentimonster", "textures/icons/candy_sentimonster")
    form.button("button.wolf_sentimonster", "textures/icons/wolf_sentimonster")
    form.button("button.cow_sentimonster", "textures/icons/cow_sentimonster")
    form.button("button.chicken_sentimonster", "textures/icons/chicken_sentimonster")
    form.button("button.sentibug", "textures/icons/sentibug")
    form.button("button.sentibubbler", "textures/icons/sentibubbler")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.runCommandAsync("summon miraculous:candy_sentimonster")
        player.runCommandAsync("clear @s miraculous:amok 0 1")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§1<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:fly_away_amok\"}]}")
    }
    else if (response.selection == "1") {
        player.runCommandAsync("summon miraculous:wolf_sentimonster")
        player.runCommandAsync("clear @s miraculous:amok 0 1")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§1<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:fly_away_amok\"}]}")
    }
    else if (response.selection == "2") {
        player.runCommandAsync("summon miraculous:cow_sentimonster")
        player.runCommandAsync("clear @s miraculous:amok 0 1")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§1<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:fly_away_amok\"}]}")
    }
    else if (response.selection == "3") {
        player.runCommandAsync("summon miraculous:chicken_sentimonster")
        player.runCommandAsync("clear @s miraculous:amok 0 1")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§1<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:fly_away_amok\"}]}")
    }
    else if (response.selection == "4") {
        player.runCommandAsync("summon miraculous:sentibug")
        player.runCommandAsync("clear @s miraculous:amok 0 1")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§1<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:fly_away_amok\"}]}")
    }
    else if (response.selection == "5") {
        player.runCommandAsync("summon miraculous:sentibubbler")
        player.runCommandAsync("clear @s miraculous:amok 0 1")
        player.runCommandAsync("tellraw @a {\"rawtext\":[{\"text\":\"§1<\"},{\"selector\":\"@s\"},{\"text\":\">§r\"},{\"translate\":\"tile.miraculous:fly_away_amok\"}]}")
    }
    return;
}