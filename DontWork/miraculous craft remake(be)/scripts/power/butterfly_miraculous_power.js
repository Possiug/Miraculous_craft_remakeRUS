import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:butterfly_cane" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("use_akuma")) {
            anything(eventData.source)
        }
        else{
            butterflyMiraculousPowerMenu(eventData.source)
        }
    }
})

async function butterflyMiraculousPowerMenu(player) {
    const form = new ActionFormData()
        .title("title.choose_akuma")
    form.button("button.zombie.akumatize")
    form.button("button.creeper.akumatize")
    form.button("button.skeleton.akumatize")
    form.button("button.spider.akumatize")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.removeTag('spider_akumatize')
        player.removeTag('creeper_akumatize')
        player.removeTag('skeleton_akumatize')
        player.addTag('zombie_akumatize')
    }
    else if (response.selection == "1") {
        player.removeTag('spider_akumatize')
        player.removeTag('zombie_akumatize')
        player.removeTag('skeleton_akumatize')
        player.addTag('creeper_akumatize')
    }
    else if (response.selection == "2") {
        player.removeTag('spider_akumatize')
        player.removeTag('creeper_akumatize')
        player.removeTag('zombie_akumatize')
        player.addTag('skeleton_akumatize')
    }
    else if (response.selection == "3") {
        player.removeTag('zombie_akumatize')
        player.removeTag('creeper_akumatize')
        player.removeTag('skeleton_akumatize')
        player.addTag('spider_akumatize')
    }
    return;
}