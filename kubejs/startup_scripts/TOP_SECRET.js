StartupEvents.registry('item', (event) => {
  //Surprise!
  //彩蛋物品，感谢幸运群u
  event.create("sword_o_justice", "sword")
    .unstackable()
    .maxDamage(1145)
    .attackDamageBaseline(37)
    .displayName('"Sword o\' Justice"')
    .rarity('epic')
    
  for (let disabled of ['create_factory_logistics:jar_packager', 'create_factory_logistics:fluid_mechanism', 'create_factory_logistics:incomplete_fluid_mechanism']) event.create(disabled)
})