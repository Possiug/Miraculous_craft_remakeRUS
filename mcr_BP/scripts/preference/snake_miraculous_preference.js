import { world,   ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:snake_miraculous_resigns" && eventData.source.isSneaking === true) {
        snakeMiraculousPreferenceMenu(eventData.source);
    }
})

async function snakeMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        snakeMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        snakeMiraculousSuitPreference(player)
    }
    return;
}
async function snakeMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.luka", "textures/items/miraculous/snake_miraculous/camo_snake_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/snake_miraculous/marinette_camo_snake_miraculous")
    form.button("tile.owner.gabriel", "textures/items/miraculous/snake_miraculous/gabriel_camo_snake_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('marinette_snake')
        player.removeTag('gabriel_snake')
        player.addTag('luka_snake')
    }
    else if (response.selection == "1"){
        player.removeTag('luka_snake')
        player.removeTag('gabriel_snake')
        player.addTag('marinette_snake')
    }
    else if (response.selection == "2"){
        player.removeTag('luka_snake')
        player.removeTag('marinette_snake')
        player.addTag('gabriel_snake')
    }
    return;
}
async function snakeMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.aspik")
    form.button("tile.suit.mini_viperion")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('viperion')
        player.addTag('aspik')
    }
    else if (response.selection == "1"){
        player.removeTag('aspik')
        player.addTag('viperion')
    }
    return;
}