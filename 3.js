function countEssential() {
  essentialModules = availableModules.filter(module => {
    return module.essential
  })
  return essentialModules.length
}