# zetlim

Zetlim gives you, the user, a hand in mathematically
optimizing some of the factors you might be interested in,
when buying a house.

The prime idea is that you'll get a *scenario analysis*
for certain time horizon. Given that you have certain
duties to do (perhaps going to work daily), and preferences
for optimizing time, costs, or other factors, the whole
scenario might become quite complex. That's were a computer
kicks in!

It's called multi-parameter optimization.

## Time horizon

All scenarios need to be done per a time horizon. Things
look different on a short term vs. long term.

You can check out how the scenario looks in a month, 6 months, 1 year,
or 10 years. Zetlim makes both linear and basic goal seeking
optimizations regarding these queries.

## Source: The housing data

* POC format: <houseId> <price> <lat> <lon> [<address>]

## Features planned

* Pluggable geolocations (get working on your own region of interest)
* Uses at the moment a Finnish journey planner (Reittiopas)
* Parameters include "fixed" (as in house price), locations of
  daily commute, etc

## Parameters for optimization: location-based

* You can configure amount of persons working (commuting)
* Future: patterns of work (not regular daily)
* Future: seeking arrangements (scenario analysis, goal seek)
* Future: trend-hopping (try to sell high, buy low, move to optimum)

## Other parameters: Cost of living

Cost of living

CoL adds up to the equation, per what it actually costs to
get your daily life onwards. So you might include here
location-specific things, like a "basket of groceries", if
that price is significantly different from the average
in your region.

* none yet
* manual entry
* Future: automated basket

Convenience

* convenience factors include

Time Use

* Time used for

Aux housing costs

* Repairs estimates

