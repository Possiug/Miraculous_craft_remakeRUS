import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:horse_miraculous_resigns" && eventData.source.isSneaking === true) {
        horseMiraculousPreferenceMenu(eventData.source);
    }
})

async function horseMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        horseMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        horseMiraculousSuitPreference(player)
    }
    return;
}
async function horseMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.max", "textures/items/miraculous/horse_miraculous/camo_horse_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/horse_miraculous/marinette_camo_horse_miraculous")
    form.button("tile.owner.gabriel", "textures/items/miraculous/horse_miraculous/gabriel_camo_horse_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('marinette_horse')
        player.removeTag('gabriel_horse')
        player.addTag('max_horse')
    }
    else if (response.selection == "1"){
        player.removeTag('max_horse')
        player.removeTag('gabriel_horse')
        player.addTag('marinette_horse')
    }
    else if (response.selection == "2"){
        player.removeTag('max_horse')
        player.removeTag('marinette_horse')
        player.addTag('gabriel_horse')
    }
    return;
}
async function horseMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.pegasus")
    form.button("tile.suit.pegasus_slau")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('pegasus_scarlet_lady')
        player.addTag('pegasus')
    }
    else if (response.selection == "1"){
        player.removeTag('pegasus')
        player.addTag('pegasus_scarlet_lady')
    }
    return;
}