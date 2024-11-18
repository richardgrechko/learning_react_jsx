// I converted shrinker into react.jsx, but I made it as a color upgrade. (i accidentally copied off revolution idle)
function ColorUpgrade({ background: {`#fff`}, level: 0, rank: 0, costIncrease: 1, production, strength, initialCost })
{
	this.production = production;
	this.strength = strength;
	this.initialCost = initialCost;
	// btw.
	this.getCost = function()
	{
		let cost = this.initialCost.mul(Decimal.pow(this.costIncrease, this.level)).mul(game.rankMultiplier.mul(1.5).pow(this.rank);
		let dilated = cost.gte("1.8e308") ? Decimal.log(price.div(Decimal.pow(2, 1024)), 1e100) * 0.5 + 1 : 1; // Dilates after >1.8e308
		return cost.pow(dilated);
	};
	this.getProduction = function()
	{
		let base = this.production.mul(this.strength.pow(this.level)).mul(game.rankMultiplier.mul(1.2).pow(this.rank));
		return base.mul(game.colorUpgrade.red)
		.mul(game.colorUpgrade.orange)
		.mul(game.colorUpgrade.yellow)
		.mul(game.colorUpgrade.chartreuse)
		.mul(game.colorUpgrade.green)
		.mul(game.colorUpgrade.turquoise)
		.mul(game.colorUpgrade.skyBlue)
		.mul(game.colorUpgrade.blue)
		.mul(game.colorUpgrade.purple)
		.mul(game.colorUpgrade.magenta)
		.mul(game.colorUpgrade.pink)
		.mul(game.colorUpgrade.white)
		.root(game.slowDown)
	};
	this.buy = function()
	{
		if(this.getPrice().lt(game.number))
		{
			game.number = game.number.sub(this.getCost()); // Subtracts number by cost
			this.level++; // Levels up!
			return true; // Can afford
		}
		return false; // Cannot afford
	};
	this.buyMax = function()
	{
		while(this.buy()); // Buys max
	};
}
