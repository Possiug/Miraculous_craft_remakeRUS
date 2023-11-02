import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:peacock_miraculous_resigns" && eventData.source.isSneaking === true) {
        peacockMiraculousPreferenceMenu(eventData.source);
    }
})

async function peacockMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        peacockMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        peacockMiraculousSuitPreference(player)
    }
    return;
}
async function peacockMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.nathalie", "textures/items/miraculous/peacock_miraculous/camo_peacock_miraculous")
    form.button("tile.owner.felix", "textures/items/miraculous/peacock_miraculous/felix_camo_peacock_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('felix_peacock')
        player.addTag('nathalie_peacock')
    }
    else if (response.selection == "1"){
        player.removeTag('nathalie_peacock')
        player.addTag('felix_peacock')
    }
    return;
}
async function peacockMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.mayura")
    form.button("tile.suit.argos")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('argos')
        player.addTag('mayura')
    }
    else if (response.selection == "1"){
        player.removeTag('mayura')
        player.addTag('argos')
    }
    return;
}