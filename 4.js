function loadModule(index) {
  availableModules[index].enabled = true
  ship.modules.push(availableModules[index]);
}

availableModules.forEach(function(module, index) {
  if (module.name === "life-support") {
    loadModule(index)
  }
})