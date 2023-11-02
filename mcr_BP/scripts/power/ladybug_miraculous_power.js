import { world, DynamicPropertiesDefinition, MinecraftEntityTypes, ItemStack } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:ladybug_yoyo" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("is_random")) {
            anything(eventData.source)
        }
        else{
            ladybugYoyoMenu(eventData.source)
        }
    }
})
world.afterEvents.itemUse.subscribe((eventData) => {
    const item = eventData.itemStack;
    if (item.typeId == "miraculous:bugnoire_yoyo" && eventData.source.isSneaking == true) {
        if (eventData.source.hasTag("is_random")) {
            anything(eventData.source)
        }
        else{
            ladybugYoyoMenu(eventData.source)
        }
    }
})

async function ladybugYoyoMenu(player) {
    const form = new ActionFormData()
        .title("title.ladybug_yoyo_menu")
    form.button("button.lucky.charm.random")
    form.button("button.choose.lucky.charm")
    const response = await form.show(player)
    if (response.selection == "0") {
        player.addTag('is_random')
    }
    else if (response.selection == "1") {
        chooseLuckyCharm(player)
    }
    return;
}
async function chooseLuckyCharm(player) {
    const form = new ActionFormData()
        .title("title.choose_lucky_charm")
    form.button("item.miraculous:lucky_charm_sword", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_sword")
    form.button("item.miraculous:lucky_charm_axe", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_axe")
    form.button("item.miraculous:lucky_charm_pickaxe", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_pickaxe")
    form.button("item.miraculous:lucky_charm_shovel", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_shovel")
    form.button("item.miraculous:lucky_charm_hoe", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_hoe")
    form.button("item.miraculous:lucky_charm_mace", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_mace")
    form.button("item.miraculous:lucky_charm_hammer", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_hammer")
    form.button("item.miraculous:lucky_charm_flint_and_steel", "textures/items/miraculous/ladybug_miraculous/lucky_charm/lucky_charm_flint_and_steel")
    form.button("button.motorcycle", "textures/icons/motorcycle_lucky_charm")
    form.button("button.lamborghini", "textures/icons/lamborghini_lucky_charm")
    form.button("button.hovercraft", "textures/icons/hovercraft_lucky_charm")
    form.button("button.airplane", "textures/icons/plane_lucky_charm")
    const response = await form.show(player)
    if (response.selection == 0){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_sword 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 1){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_axe 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 2){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_pickaxe 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
            else if (response.selection == 3){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_shovel 1 0 {\"keep_on_death\":{}}")
         player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
         player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
         player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
         player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
         player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 4){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_hoe 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 5){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_mace 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 6){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_hammer 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 7){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("give @s[tag=!use_lucky_charm] miraculous:lucky_charm_flint_and_steel 1 0 {\"keep_on_death\":{}}")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 8){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] summon_motorcycle")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 9){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] summon_lamborghini")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 10){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] summon_hovercraft")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    else if (response.selection == 11){
        player.runCommandAsync("kill @e[tag=!use_lucky_charm, family=vehicles]")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] clear_lucky_charm")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] summon_plane")
        player.runCommandAsync("event entity @s[tag=!use_lucky_charm] lucky_charm_speak")
        player.runCommandAsync("event entity @s[tag=is_lucky_charm] lucky_charm")
        player.runCommandAsync("tag @p[lm=50, l=21863] add full_power")
        player.runCommandAsync("tag @p[tag=!full_power] add is_random")
        player.runCommandAsync("tag @p[tag=!use_lucky_charm, tag=!full_power] add use_lucky_charm")
        player.runCommandAsync("tag @p[tag=use_lucky_charm, tag=!full_power] add timer_on")
    }
    return;
}