import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:bee_miraculous_resigns" && eventData.source.isSneaking === true) {
        beeMiraculousPreferenceMenu(eventData.source);
    }
})

async function beeMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        beeMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        beeMiraculousSuitPreference(player)
    }
    return;
}
async function beeMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.chloe", "textures/items/miraculous/bee_miraculous/camo_bee_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/bee_miraculous/marinette_camo_bee_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('marinette_bee')
        player.addTag('chloe_bee')
    }
    else if (response.selection == "1"){
        player.removeTag('chloe_bee')
        player.addTag('marinette_bee')
    }
    return;
}
async function beeMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.queen_bee")
    form.button("tile.suit.vesperia")
    form.button("tile.suit.marigold")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('vesperia')
        player.removeTag('marigold')
        player.addTag('queen_bee')
    }
    else if (response.selection == "1"){
        player.removeTag('queen_bee')
        player.removeTag('marigold')
        player.addTag('vesperia')
    }
    else if (response.selection == "2"){
        player.removeTag('vesperia')
        player.removeTag('queen_bee')
        player.addTag('marigold')
    }
    return;
}