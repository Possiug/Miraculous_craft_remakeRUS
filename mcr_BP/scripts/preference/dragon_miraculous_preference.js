import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:dragon_miraculous_resigns" && eventData.source.isSneaking === true) {
        dragonMiraculousPreferenceMenu(eventData.source);
    }
})

async function dragonMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        dragonMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        dragonMiraculousSuitPreference(player)
    }
    return;
}
async function dragonMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.kagami", "textures/items/miraculous/dragon_miraculous/camo_dragon_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/dragon_miraculous/marinette_camo_dragon_miraculous")
    form.button("tile.owner.gabriel", "textures/items/miraculous/dragon_miraculous/gabriel_camo_dragon_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('marinette_dragon')
        player.removeTag('gabriel_dragon')
        player.addTag('kagami_dragon')
    }
    else if (response.selection == "1"){
        player.removeTag('kagami_dragon')
        player.removeTag('gabriel_dragon')
        player.addTag('marinette_dragon')
    }
    else if (response.selection == "2"){
        player.removeTag('kagami_dragon')
        player.removeTag('marinette_dragon')
        player.addTag('gabriel_dragon')
    }
    return;
}
async function dragonMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.ryuko")
    form.button("tile.suit.ryuko_slau")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('ryuko_scarlet_lady')
        player.addTag('ryuko')
    }
    else if (response.selection == "1"){
        player.removeTag('ryuko')
        player.addTag('ryuko_scarlet_lady')
    }
    return;
}