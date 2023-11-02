import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:turtle_miraculous_resigns" && eventData.source.isSneaking === true) {
        turtleMiraculousPreferenceMenu(eventData.source);
    }
})

async function turtleMiraculousPreferenceMenu(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("button.miraculous.preference")
    form.button("button.suit.preference")
    const response = await form.show(player)
    if (response.selection == "0") {
        turtleMiraculousPreference(player)
    }
    else if (response.selection == "1") {
        turtleMiraculousSuitPreference(player)
    }
    return;
}
async function turtleMiraculousPreference(player) {
    const form = new ActionFormData()
        .title("title.preference")
    form.button("tile.owner.nino", "textures/items/miraculous/turtle_miraculous/camo_turtle_miraculous")
    form.button("tile.owner.marinette", "textures/items/miraculous/turtle_miraculous/marinette_camo_turtle_miraculous")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('marinette_turtle')
        player.addTag('nino_turtle')
    }
    else if (response.selection == "1"){
        player.removeTag('nino_turtle')
        player.addTag('marinette_turtle')
    }
    return;
}
async function turtleMiraculousSuitPreference(player) {
    const form = new ActionFormData()
        .title("title.choose_suit")
    form.button("tile.suit.carapace")
    form.button("tile.suit.jade_turtle")
    form.button("tile.suit.koki_marina")
    const response = await form.show(player)
    if (response.selection == "0"){
        player.removeTag('jade_turtle')
        player.removeTag('koki_marina')
        player.addTag('carapace')
    }
    else if (response.selection == "1"){
        player.removeTag('carapace')
        player.removeTag('koki_marina')
        player.addTag('jade_turtle')
    }
    else if (response.selection == "2"){
        player.removeTag('carapace')
        player.removeTag('jade_turtle')
        player.addTag('koki_marina')
    }
    return;
}