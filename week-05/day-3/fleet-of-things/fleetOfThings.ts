//import { Thing } from "./thing";
import { Fleet } from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

fleet.add(new Thing("Get Milk"));
fleet.add(new Thing("Remove the obstacles"));
fleet.add(new Thing("Stand up"));
fleet.add(new Thing("Eat lunch"));

fleet.getThing(2).complete();
fleet.getThing(3).complete();

fleet.print();

fleet.things.sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
});

fleet.print();