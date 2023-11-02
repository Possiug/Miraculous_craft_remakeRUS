import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:mouse_miraculous_resigns" && eventData.source.isSneaking === true) {
        mouseMiraculousPreferenceMenu(eventData.source);
    }
})

async function mouseMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        mouseMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        mouseMiraculousSuitPreference(player)
    }
    return;
}
async function mouseMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.marinette", "textures/items/miraculous/mouse_miraculous/camo_mouse_miraculous")
    form.button("tile.owner.chloe", "textures/items/miraculous/mouse_miraculous/chloe_camo_mouse_miraculous")
    form.button("tile.owner.mylene", "textures/items/miraculous/mouse_miraculous/mylene_camo_mouse_miraculous")
    form.button("tile.owner.gabriel", "textures/items/miraculous/mouse_miraculous/gabriel_camo_mouse_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('chloe_mouse')
        player.removeTag('gabriel_mouse')
        player.removeTag('mylene_mouse')
        player.addTag('marinette_mouse')
    }
    else if (response.selection == "1"){
        player.removeTag('mylene_mouse')
        player.removeTag('gabriel_mouse')
        player.removeTag('marinette_mouse')
        player.addTag('chloe_mouse')
    }
    else if (response.selection == "2"){
        player.removeTag('marinette_mouse')
        player.removeTag('chloe_mouse')
        player.removeTag('gabriel_mouse')
        player.addTag('mylene_mouse')
    }
    else if (response.selection == "3"){
        player.removeTag('marinette_mouse')
        player.removeTag('chloe_mouse')
        player.removeTag('mylene_mouse')
        player.addTag('gabriel_mouse')
    }
    return;
}
async function mouseMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.multimouse")
    form.button("tile.suit.polymouse")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('polymouse')
        player.addTag('multimouse')
    }
    else if (response.selection == "1"){
        player.removeTag('multimouse')
        player.addTag('polymouse')
    }
    return;
}