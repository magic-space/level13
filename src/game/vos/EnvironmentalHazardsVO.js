define(['ash'], function (Ash) {

	var EnvironmentalHazardsVO = Ash.Class.extend({
		
		radiation: 0,
		poison: 0,
		cold: 0,
		
		constructor: function () {
			this.radiation = 0;
			this.poison = 0;
			this.cold = 0;
		},
			
		getMainHazard: function () {
			if (this.radiation > this.poison && this.radiation > this.cold) return "radiation";
			if (this.poison > this.radiation && this.poison > this.cold) return "poison";
			if (this.cold > this.poison && this.cold > this.radiation) return "cold";
			if (this.radiation > 0) return "radiation";
			if (this.poison > 0) return "poison";
			if (this.cold > 0) return "cold";
			return null;
		},
		
		hasHazard: function (hazard) {
			return this[hazard] > 0;
		},
		
		hasHazards: function () {
			return this.radiation > 0 || this.poison > 0 || this.cold > 0;
		},
		
		clone: function () {
			let result = new EnvironmentalHazardsVO();
			result.radiation = this.radiation;
			result.poison = this.poison;
			result.cold = this.cold;
			return result;
		}
		
	});

	return EnvironmentalHazardsVO;
});
