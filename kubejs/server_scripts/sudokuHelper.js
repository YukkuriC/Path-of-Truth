// 填数独可视化帮助工具
const $MutableBlockPos = Java.loadClass('net.minecraft.core.BlockPos$MutableBlockPos')
const $MechanicalCrafterBlockEntity = Java.loadClass('com.simibubi.create.content.kinetics.crafter.MechanicalCrafterBlockEntity')

for (let _id of [
    'createchromaticreturn:glowing_ingot',
    'createchromaticreturn:refined_radiance',
    'createchromaticreturn:silkstrum',
    'createchromaticreturn:silkstrum_book',
    'createchromaticreturn:industrium_book',
    'createchromaticreturn:durasteel_book',
    'createchromaticreturn:shadow_steel',
    'createchromaticreturn:industrium_ingot',
    'createchromaticreturn:durasteel_ingot',
]) {
    let id = _id
    ItemEvents.firstLeftClicked(id, e => {
        let { player, level } = e
        let { x, y, z } = player
        let pos = new $MutableBlockPos()
        for (let xx = Math.floor(x - 7); xx <= Math.ceil(x + 7); xx++) {
            pos.setX(xx)
            for (let yy = Math.floor(y - 7); yy <= Math.ceil(y + 7); yy++) {
                pos.setY(yy)
                for (let zz = Math.floor(z - 7); zz <= Math.ceil(z + 7); zz++) {
                    pos.setZ(zz)
                    /**@type {Internal.MechanicalCrafterBlockEntity}*/
                    let block = level.getBlockEntity(pos)
                    if (!block || !(block instanceof $MechanicalCrafterBlockEntity)) continue
                    if (block.inventory.countItem(id) <= 0) continue
                    for (let offset of [-1, 1]) {
                        level.runCommandSilent(`particle sonic_boom ${xx + offset} ${yy + 0.5} ${zz} 0 0 0 0 1`)
                        level.runCommandSilent(`particle sonic_boom ${xx} ${yy + 0.5} ${zz + offset} 0 0 0 0 1`)
                    }
                }
            }
        }
    })
}
