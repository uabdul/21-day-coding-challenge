function powerOn() {
    if (!ship.powerOn) {
      ship.powerOn = true
    }
  }
  
  powerOn()
  
  function countModules() {
    return availableModules.length
  }
  
  function countEssential() {
    essentialModules = availableModules.filter(module => {
      return module.essential
    })
    return essentialModules.length
  }
  
  function loadModule(index) {
    availableModules[index].enabled = true
    ship.modules.push(availableModules[index]);
  }
  
  function findModuleIndex(name) {
    let moduleIndex
    availableModules.forEach(function(module, index) {
      if (module.essential && module.name === name) {
        moduleIndex = index
      }
    })
    return moduleIndex
  }
  loadModule(findModuleIndex("life-support"))
  loadModule(findModuleIndex("propulsion"))
  loadModule(findModuleIndex("navigation"))