import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:ladybug_miraculous_resigns" && eventData.source.isSneaking === true) {
        ladybugMiraculousPreferenceMenu(eventData.source);
    }
})

async function ladybugMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        ladybugMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        ladybugMiraculousSuitPreference(player)
    }
    return;
}
async function ladybugMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.marinette", "textures/items/miraculous/ladybug_miraculous/camo_ladybug_miraculous")
    form.button("tile.owner.alya", "textures/items/miraculous/ladybug_miraculous/alya_camo_ladybug_miraculous")
    form.button("tile.owner.adrien", "textures/items/miraculous/ladybug_miraculous/adrien_camo_ladybug_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('adrien_ladybug')
        player.removeTag('alya_ladybug')
        player.addTag('marinette_ladybug')
    }
    else if (response.selection == "1"){
        player.removeTag('adrien_ladybug')
        player.removeTag('marinette_ladybug')
        player.addTag('alya_ladybug')
    }
    else if (response.selection == "2"){
        player.removeTag('marinette_ladybug')
        player.removeTag('alya_ladybug')
        player.addTag('adrien_ladybug')
    }
    return;
}
async function ladybugMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.ladybug")
    form.button("tile.suit.mister_bug")
    form.button("tile.suit.scarabella")
    form.button("tile.suit.scarlet_lady")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('mister_bug')
        player.removeTag('scarlet_lady')
        player.removeTag('scarabella')
        player.addTag('is_lucky_charm')
        player.addTag('ladybug')
    }
    else if (response.selection == "1"){
        player.removeTag('is_lucky_charm')
        player.removeTag('ladybug')
        player.removeTag('scarlet_lady')
        player.removeTag('scarabella')
        player.addTag('mister_bug')
    }
    else if (response.selection == "2"){
        player.removeTag('is_lucky_charm')
        player.removeTag('ladybug')
        player.removeTag('scarlet_lady')
        player.removeTag('mister_bug')
        player.addTag('scarabella')
    }
    else if (response.selection == "3"){
        player.removeTag('is_lucky_charm')
        player.removeTag('ladybug')
        player.removeTag('scarabella')
        player.removeTag('mister_bug')
        player.addTag('scarlet_lady')
    }
    return;
}