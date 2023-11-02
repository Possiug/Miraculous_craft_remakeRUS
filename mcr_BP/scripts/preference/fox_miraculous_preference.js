import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:fox_miraculous_resigns" && eventData.source.isSneaking === true) {
        foxMiraculousPreferenceMenu(eventData.source);
    }
})

async function foxMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        foxMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        foxMiraculousSuitPreference(player)
    }
    return;
}
async function foxMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.alya", "textures/items/miraculous/fox_miraculous/camo_fox_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/fox_miraculous/marinette_camo_fox_miraculous")
    form.button("tile.owner.gabriel", "textures/items/miraculous/fox_miraculous/gabriel_camo_fox_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('gabriel_fox')
        player.removeTag('marinette_fox')
        player.addTag('alya_fox')
    }
    else if (response.selection == "1"){
        player.removeTag('gabriel_fox')
        player.removeTag('alya_fox')
        player.addTag('marinette_fox')
    }
    else if (response.selection == "2"){
        player.removeTag('alya_fox')
        player.removeTag('marinette_fox')
        player.addTag('gabriel_fox')
    }
    return;
}
async function foxMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.rena_rouge")
    form.button("tile.suit.rena_furtive")
    form.button("tile.suit.fox_trot")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('rena_furtive')
        player.removeTag('fox_trot')
        player.addTag('rena_rouge')
    }
    else if (response.selection == "1"){
        player.removeTag('rena_rouge')
        player.removeTag('fox_trot')
        player.addTag('rena_furtive')
    }
    else if (response.selection == "2"){
        player.removeTag('rena_rouge')
        player.removeTag('rena_furtive')
        player.addTag('fox_trot')
    }
    return;
}