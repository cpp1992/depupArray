(function(window) {
	var __global_id__ = 1
	var MapProto = function() {
		var objectKeysMap = {}
		var objectMap = {}

		var normalMap = {
			'string': {},
			'number': {}
		}

		var Map = {}
		Map.set = function(key, val) {
			var type = typeof key
			if (type === 'string' || type === 'number') {
				normalMap[type][key] = val
			} else {
				if(!key.__id__){
					var id = __global_id__++;
					key.__id__ = id
					objectKeysMap[id] = key
					objectMap[id] = key
				}
			}
		}
		Map.get = function(key) {
			var type = typeof key
			if (type === 'string' || type === 'number') {
				return normalMap[type][key] === undefined ? null : normalMap[type][key]
			} else {
				var id = key.__id__
				if (!id)
					return null
				else
					return objectMap[id]
			}
		}
		Map.has = function(key) {
			var type = typeof key
			if (type === 'string' || type === 'number') {
				return normalMap[type][key] === undefined ? false : true
			} else {
				var id = key.__id__
				if (!id)
					return false
				else
					return true
			}
		}
		return Map
	}
	var Map = function() {
	  if(this.constructor != Map)
		 throw new TypeError("Constructor Map requires 'new'")
	}
	Map.prototype = MapProto()
	Map.prototype.constructor = Map
	window.myMap =  Map
})(window)