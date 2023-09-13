import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:cat_miraculous_resigns" && eventData.source.isSneaking === true) {
        catMiraculousPreferenceMenu(eventData.source);
    }
})

async function catMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        catMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        catMiraculousSuitPreference(player)
    }
    return;
}
async function catMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.adrien", "textures/items/miraculous/cat_miraculous/camo_cat_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/cat_miraculous/marinette_camo_cat_miraculous")
    form.button("tile.owner.zoe", "textures/items/miraculous/cat_miraculous/zoe_camo_cat_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('marinette_cat')
        player.removeTag('zoe_cat')
        player.addTag('adrien_cat')
    }
    else if (response.selection == "1"){
        player.removeTag('zoe_cat')
        player.removeTag('adrien_cat')
        player.addTag('marinette_cat')
    }
    else if (response.selection == "2"){
        player.removeTag('marinette_cat')
        player.removeTag('adrien_cat')
        player.addTag('zoe_cat')
    }
    return;
}
async function catMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.cat_noir")
    form.button("tile.suit.lady_noire")
    form.button("tile.suit.cat_walker")
    form.button("tile.suit.maotif")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('lady_noire')
        player.removeTag('cat_walker')
        player.removeTag('maotif')
        player.addTag('cat_noir')
    }
    else if (response.selection == "1"){
        player.removeTag('cat_noir')
        player.removeTag('maotif')
        player.removeTag('cat_walker')
        player.addTag('lady_noire')
    }
    else if (response.selection == "2"){
        player.removeTag('cat_noir')
        player.removeTag('lady_noire')
        player.removeTag('maotif')
        player.addTag('cat_walker')
    }
    else if (response.selection == "3"){
        player.removeTag('cat_noir')
        player.removeTag('lady_noire')
        player.removeTag('cat_walker')
        player.addTag('maotif')
    }
    return;
}