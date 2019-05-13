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
      if (module.name === name) {
        moduleIndex = index
      }
    })
    return moduleIndex
  }
  loadModule(findModuleIndex("life-support"))
  loadModule(findModuleIndex("propulsion"))
  loadModule(findModuleIndex("navigation"))
  
  function resetLARRY() {
    for (let x = 0; x < 10; x++) {
      LARRY.quack();
    }
  }
  
  resetLARRY()
  
  loadModule(findModuleIndex("communication"))
  
  function setMessage() {
    radio.message = JSON.stringify(navigation)
  }
  
  setMessage()
  
  function activateBeacon() {
    radio.beacon = true
  }
  
  function setFrequency() {
      radio.frequency = (radio.range.low + radio.range.high) / 2;
  }