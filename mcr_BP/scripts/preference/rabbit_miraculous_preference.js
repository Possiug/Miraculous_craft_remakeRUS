import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:rabbit_miraculous_resigns" && eventData.source.isSneaking === true) {
        rabbitMiraculousPreferenceMenu(eventData.source);
    }
})

async function rabbitMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        rabbitMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        rabbitMiraculousSuitPreference(player)
    }
    return;
}
async function rabbitMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.alix", "textures/items/miraculous/rabbit_miraculous/camo_rabbit_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/rabbit_miraculous/marinette_camo_rabbit_miraculous")
    form.button("tile.owner.gabriel", "textures/items/miraculous/rabbit_miraculous/gabriel_camo_rabbit_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('gabriel_rabbit')
        player.removeTag('marinette_rabbit')
        player.addTag('alix_rabbit')
    }
    else if (response.selection == "1"){
        player.removeTag('alix_rabbit')
        player.removeTag('gabriel_rabbit')
        player.addTag('marinette_rabbit')
    }
    else if (response.selection == "2"){
        player.removeTag('alix_rabbit')
        player.removeTag('marinette_rabbit')
        player.addTag('gabriel_rabbit')
    }
    return;
}
async function rabbitMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.bunnix")
    form.button("tile.suit.mini_bunnix")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('mini_bunnix')
        player.addTag('bunnix')
    }
    else if (response.selection == "1"){
        player.removeTag('bunnix')
        player.addTag('mini_bunnix')
    }
    return;
}